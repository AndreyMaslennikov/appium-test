"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCloudUploader = void 0;
const interaction_1 = require("./interaction");
const test_manifest_1 = require("./test-manifest");
const test_manifest_reader_1 = require("./test-manifest-reader");
const app_validator_1 = require("./app-validator");
const PortalHelper = require("../../../util/portal/portal-helper");
const _ = require("lodash");
const fs = require("fs");
// import * as http from "http";
const path = require("path");
const node_fetch_1 = require("node-fetch");
const FormData = require("form-data");
const debug = require("debug")("appcenter-cli:commands:test:lib:test-cloud-uploader");
const pLimit = require("p-limit");
const paralleRequests = 10;
class TestCloudUploader {
    constructor(client, userName, appName, manifestPath, devices, portalBaseUrl) {
        if (!client) {
            throw new Error("Argument client is required");
        }
        if (!userName) {
            throw new Error("Argument userName is required");
        }
        if (!appName) {
            throw new Error("Argument appName is required");
        }
        if (!manifestPath) {
            throw new Error("Argument manifestPath is required");
        }
        if (!devices) {
            throw new Error("Argument devices is required");
        }
        if (!portalBaseUrl) {
            throw new Error("Argument portalBaseUrl is required");
        }
        this._client = client;
        this._manifestPath = manifestPath;
        this._devices = devices;
        this._userName = userName;
        this._appName = appName;
        this._portalBaseUrl = portalBaseUrl;
    }
    uploadAndStart() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = yield this._client.apps.get(this._userName, this._appName);
            const isOrg = app.owner.type === "org";
            const manifest = yield interaction_1.progressWithResult("Validating arguments", this.validateAndParseManifest());
            const testRun = yield interaction_1.progressWithResult("Creating new test run", this.createTestRun(isOrg));
            debug(`Test run id: ${testRun.testRunId}`);
            const appFile = yield interaction_1.progressWithResult("Validating application file", this.validateAndCreateAppFile(manifest));
            const allFiles = manifest.testFiles.concat(appFile);
            yield interaction_1.progressWithResult("Uploading files", this.uploadFilesUsingBatch(testRun.testRunId, allFiles));
            const startResult = yield interaction_1.progressWithResult("Starting test run", this.startTestRun(testRun.testRunId, manifest));
            testRun.acceptedDevices = startResult.acceptedDevices || [];
            testRun.rejectedDevices = startResult.rejectedDevices || [];
            return testRun;
        });
    }
    validateAndParseManifest() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield test_manifest_reader_1.TestManifestReader.readFromFile(this._manifestPath);
        });
    }
    validateAndCreateAppFile(manifest) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = manifest.applicationFile
                ? manifest.applicationFile
                : yield test_manifest_1.TestRunFile.create(this.appPath, path.basename(this.appPath), "app-file");
            if (!result) {
                throw new Error("If test manifest doesn't contain path to application file, it must be provided using --app-path option");
            }
            yield app_validator_1.AppValidator.validate(result.sourcePath);
            return result;
        });
    }
    createTestRun(isOrg) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            let testRunHeaders;
            try {
                testRunHeaders = yield this._client.test.createTestRun(this._userName, this._appName);
            }
            catch (error) {
                if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                    error.message = `The app named ${this._appName} does not exist in the organization or user: ${this._userName}`;
                }
                reject(error);
            }
            const testRunId = _.last(testRunHeaders.location.split("/"));
            resolve({
                acceptedDevices: [],
                rejectedDevices: [],
                testRunId: testRunId,
                testRunUrl: PortalHelper.getPortalTestLink(this._portalBaseUrl, isOrg, this._userName, this._appName, this.testSeries, testRunId),
            });
        }));
    }
    uploadFilesUsingBatch(testRunId, files) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkHashesResult = yield this.uploadHashesBatch(testRunId, files.map((f) => {
                return { file: f };
            }));
            const limit = pLimit(paralleRequests);
            const uploadNewFilesTasks = checkHashesResult
                .filter((r) => r.response.uploadStatus.statusCode === 412)
                .map((r) => limit(() => this.uploadFile(testRunId, r.file)));
            yield Promise.all(uploadNewFilesTasks);
        });
    }
    uploadHashesBatch(testRunId, files) {
        return __awaiter(this, void 0, void 0, function* () {
            const mappedFiles = files.map((f) => this.testRunFileToFileHash(f.file, f.byteRange));
            //TODO: Test carefully
            const result = yield this._client.test.uploadHashesBatch(testRunId, this._userName, this._appName, mappedFiles);
            return _.zip(files, result).map((fr) => {
                return { file: fr[0].file, response: fr[1] };
            });
        });
    }
    testRunFileToFileHash(file, byteRange = null) {
        return {
            checksum: file.sha256,
            fileType: file.fileType,
            relativePath: file.targetRelativePath,
        };
    }
    uploadFile(testRunId, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const directUrl = yield this.getDirectUploadUrl(this._client, testRunId, file);
            yield this.makeDirectUpload(directUrl, file);
        });
    }
    getDirectUploadUrl(client, testRunId, file) {
        return new Promise((resolve, reject) => {
            try {
                client.test.startUploadingFile(testRunId, this._userName, this._appName).then((result) => resolve(result.location));
            }
            catch (err) {
                reject(err);
            }
        });
    }
    makeDirectUpload(directUrl, file) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    const formData = new FormData();
                    formData.append("relative_path", file.targetRelativePath);
                    formData.append("file", fs.createReadStream(file.sourcePath));
                    formData.append("file_type", file.fileType);
                    node_fetch_1.default(directUrl, {
                        method: "POST",
                        body: formData,
                    })
                        .then((response) => {
                        if (response.status >= 400) {
                            reject(new Error(`Cannot upload file. Response: ${response.status}; Message: ${response.body}`));
                        }
                        else {
                            resolve();
                        }
                    })
                        .catch((error) => reject(error));
                }
                catch (err) {
                    reject(err);
                }
            });
        });
    }
    startTestRun(testRunId, manifest) {
        const allTestParameters = _.merge(manifest.testFramework.data || {}, this.testParameters || {});
        const startOptions = {
            testFramework: manifest.testFramework.name,
            deviceSelection: this._devices,
            locale: this.locale,
            language: this.language,
            testSeries: this.testSeries,
            testParameters: allTestParameters,
        };
        return this._client.test.startTestRun(testRunId, this._userName, this._appName, startOptions);
    }
}
exports.TestCloudUploader = TestCloudUploader;
