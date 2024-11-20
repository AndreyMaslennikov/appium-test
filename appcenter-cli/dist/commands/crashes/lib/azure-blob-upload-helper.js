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
const AzureStorage = require("@azure/storage-blob");
const Url = require("url");
const util_1 = require("util");
class AzureBlobUploadHelper {
    constructor() { }
    upload(uploadUrl, zip) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlObject = Url.parse(uploadUrl);
            const blobService = this.getBlobService(urlObject);
            const [container, blob] = this.getContainerAndBlob(urlObject);
            yield this.uploadBlockBlob(blobService, container, blob, zip).catch((reason) => console.debug(`Failed to upload ZIP with symbols - ${util_1.inspect(reason)}`));
        });
    }
    uploadBlockBlob(blobServiceClient, container, blob, file) {
        const containerClient = blobServiceClient.getContainerClient(container);
        const blockBlobClient = containerClient.getBlockBlobClient(blob);
        return blockBlobClient.uploadFile(file, {
            blobHTTPHeaders: {
                blobContentType: "application/zip",
            },
        });
    }
    getBlobService(urlObject) {
        const blobEndpoint = Url.format({
            protocol: urlObject.protocol,
            host: urlObject.host,
        });
        return new AzureStorage.BlobServiceClient(blobEndpoint + "?" + urlObject.query);
    }
    getContainerAndBlob(urlObject) {
        const splitPathName = urlObject.pathname.split("/");
        return [splitPathName[1], splitPathName[2]];
    }
}
exports.default = AzureBlobUploadHelper;
