"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const commandline_1 = require("../../../util/commandline");
const interaction_1 = require("../../../util/interaction");
const process_1 = require("process");
const Path = require("path");
const _ = require("lodash");
const mkdirp = require("mkdirp");
const util_1 = require("util");
const Url = require("url");
const node_fetch_1 = require("node-fetch");
const Fs = require("fs");
const debug = require("debug")("appcenter-cli:commands:distribute:groups:download");
let DownloadBinaryFromDistributionGroupCommand = class DownloadBinaryFromDistributionGroupCommand extends commandline_1.AppCommand {
    run(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const app = this.app;
            // test that optional release id is a positive integer and optional file name is valid
            this.validateParameters();
            const downloadUrl = yield interaction_1.out.progress("Getting release URL...", this.getReleaseUrl(client, app, !_.isNil(this.releaseId) ? this.releaseId : "latest", this.distributionGroup));
            const directoryPath = yield this.getDirectoryPath(this.directory);
            const filePath = this.getFileFullPath(this.fileName, directoryPath, downloadUrl);
            yield interaction_1.out.progress("Downloading release...", this.downloadReleasePackageToFile(downloadUrl, filePath));
            interaction_1.out.text((obj) => `Release was saved to ${obj.path}`, { path: filePath });
            return commandline_1.success();
        });
    }
    validateParameters() {
        if (!_.isNil(this.releaseId)) {
            const releaseIdNumber = Number(this.releaseId);
            if (!Number.isSafeInteger(releaseIdNumber) || !(releaseIdNumber > 0)) {
                throw commandline_1.failure(commandline_1.ErrorCodes.InvalidParameter, `${this.releaseId} is not a valid release id`);
            }
        }
        if (!_.isNil(this.fileName) && this.fileName !== Path.basename(this.fileName)) {
            throw commandline_1.failure(commandline_1.ErrorCodes.InvalidParameter, `file name ${this.fileName} is not valid`);
        }
    }
    getReleaseUrl(client, app, releaseId, distributionGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            debug(`Getting download URL for the ${releaseId} release of the specified distribution group`);
            try {
                const release = yield client.releases.getLatestByDistributionGroup(app.ownerName, app.appName, distributionGroup, releaseId, {
                    onResponse: (response, _flatResponse, _error) => {
                        if (response.status >= 400) {
                            throw release;
                        }
                    },
                });
                return release.downloadUrl;
            }
            catch (error) {
                switch (error.code) {
                    case "no_releases_for_app":
                        throw commandline_1.failure(commandline_1.ErrorCodes.InvalidParameter, `there were no releases for the distribution group ${distributionGroup}`);
                    case "not_found":
                        throw commandline_1.failure(commandline_1.ErrorCodes.InvalidParameter, `distribution group ${distributionGroup} doesn't exist`);
                    default:
                        debug(`Failed to get details of the ${releaseId} release for distribution group ${distributionGroup} - ${util_1.inspect(error)}`);
                        throw commandline_1.failure(commandline_1.ErrorCodes.Exception, `failed to get details of the ${releaseId} release for the distribution group`);
                }
            }
        });
    }
    getDirectoryPath(directoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!_.isNil(directoryPath)) {
                const normalizedPath = Path.normalize(directoryPath);
                debug("Checking that specified directories exist and creating them if not");
                try {
                    yield mkdirp(normalizedPath);
                    return normalizedPath;
                }
                catch (error) {
                    if (error.code === "EEXIST") {
                        throw commandline_1.failure(commandline_1.ErrorCodes.InvalidParameter, `file ${directoryPath} already exists - directory path is expected`);
                    }
                    else {
                        debug(`Failed to create/access directory ${directoryPath} - ${util_1.inspect(error)}`);
                        throw commandline_1.failure(commandline_1.ErrorCodes.Exception, `failed to create/access directory ${directoryPath}`);
                    }
                }
            }
            else {
                // using current working directory by default
                return Promise.resolve(process_1.cwd());
            }
        });
    }
    getFilenameFromDownloadUrl(downloadUrl) {
        var _a;
        const filename = (_a = Url.parse(downloadUrl).pathname) === null || _a === void 0 ? void 0 : _a.split("/").slice(-1)[0];
        debug(`Got filename from URL: ${filename}`);
        return filename;
    }
    getFileFullPath(passedFileName, directoryPath, downloadUrl) {
        if (_.isNil(passedFileName)) {
            const name = this.getFilenameFromDownloadUrl(downloadUrl);
            return Path.format({ dir: directoryPath, name, base: null, root: null });
        }
        else {
            return Path.join(directoryPath, passedFileName);
        }
    }
    downloadReleasePackageToFile(downloadUrl, filePath) {
        debug("Downloading the release package to the path");
        return node_fetch_1.default(downloadUrl)
            .then((response) => new Promise((resolve, reject) => {
            const dest = Fs.createWriteStream(filePath);
            response.body.pipe(dest);
            response.body.on("end", () => {
                resolve();
            });
            dest.on("error", (error) => {
                debug(`Failed to save the release to ${filePath} - ${util_1.inspect(error)}`);
                reject(commandline_1.failure(commandline_1.ErrorCodes.Exception, `failed to save the release to ${filePath}`));
            });
        }))
            .catch((error) => {
            debug(`Failed to download the release from ${downloadUrl} - ${util_1.inspect(error)}`);
            return new Promise((_resolve, reject) => {
                reject(commandline_1.failure(commandline_1.ErrorCodes.Exception, `failed to download the release from ${downloadUrl}`));
            });
        });
    }
};
__decorate([
    commandline_1.help("Distribution group name"),
    commandline_1.shortName("g"),
    commandline_1.longName("group"),
    commandline_1.required,
    commandline_1.hasArg
], DownloadBinaryFromDistributionGroupCommand.prototype, "distributionGroup", void 0);
__decorate([
    commandline_1.help("Release ID"),
    commandline_1.shortName("i"),
    commandline_1.longName("id"),
    commandline_1.hasArg
], DownloadBinaryFromDistributionGroupCommand.prototype, "releaseId", void 0);
__decorate([
    commandline_1.help("Name of the destination file"),
    commandline_1.shortName("f"),
    commandline_1.longName("filename"),
    commandline_1.hasArg
], DownloadBinaryFromDistributionGroupCommand.prototype, "fileName", void 0);
__decorate([
    commandline_1.help("Directory path for the destination file"),
    commandline_1.shortName("d"),
    commandline_1.longName("dest"),
    commandline_1.hasArg
], DownloadBinaryFromDistributionGroupCommand.prototype, "directory", void 0);
DownloadBinaryFromDistributionGroupCommand = __decorate([
    commandline_1.help("Download release package for the distribution group")
], DownloadBinaryFromDistributionGroupCommand);
exports.default = DownloadBinaryFromDistributionGroupCommand;
