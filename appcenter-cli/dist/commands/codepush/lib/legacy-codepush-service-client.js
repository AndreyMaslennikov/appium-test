"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const fs = require("fs");
const FormData = require("form-data");
class LegacyCodePushServiceClient {
    constructor(accessKey, serverUrl, app) {
        this.accessKey = accessKey;
        this.serverUrl = serverUrl;
        this.app = app;
        if (!accessKey) {
            throw new Error("A token must be specified to execute server calls.");
        }
        if (!serverUrl) {
            throw new Error("A server url must be specified to execute server calls.");
        }
    }
    release(deploymentName, filePath, updateMetadata) {
        const appName = this.app.identifier;
        return new Promise((resolve, reject) => {
            const releaseUrl = this.serverUrl + this.urlEncode(`/apps/${this.appNameParam(appName)}/deployments/${deploymentName}/release`);
            const formData = new FormData();
            formData.append("packageInfo", JSON.stringify(updateMetadata));
            formData.append("package", fs.createReadStream(filePath));
            node_fetch_1.default(releaseUrl, {
                headers: {
                    Accept: `application/vnd.code-push.v${LegacyCodePushServiceClient.API_VERSION}+json`,
                    Authorization: `Bearer ${this.accessKey}`,
                },
                body: formData,
            })
                .then((response) => {
                if (response.status === 201) {
                    resolve();
                }
                else {
                    reject(response.body);
                }
            })
                .catch((error) => reject(error));
        });
    }
    // A template string tag function that URL encodes the substituted values
    urlEncode(strings, ...values) {
        let result = "";
        for (let i = 0; i < strings.length; i++) {
            result += strings[i];
            if (i < values.length) {
                result += encodeURIComponent(values[i]);
            }
        }
        return result;
    }
    // IIS and Azure web apps have this annoying behavior where %2F (URL encoded slashes) in the URL are URL decoded
    // BEFORE the requests reach node. That essentially means there's no good way to encode a "/" in the app name--
    // URL encodeing will work when running locally but when running on Azure it gets decoded before express sees it,
    // so app names with slashes don't get routed properly. See https://github.com/tjanczuk/iisnode/issues/343 (or other sites
    // that complain about the same) for some more info. I explored some IIS config based workarounds, but the previous
    // link seems to say they won't work, so I eventually gave up on that.
    // Anyway, to workaround this issue, we now allow the client to encode / characters as ~~ (two tildes, URL encoded).
    // The CLI now converts / to ~~ if / appears in an app name, before passing that as part of the URL. This code below
    // does the encoding. It's hack, but seems like the least bad option here.
    // Eventually, this service will go away & we'll all be on Max's new service. That's hosted in docker, no more IIS,
    // so this issue should go away then.
    appNameParam(appName) {
        return appName.replace("/", "~~");
    }
}
exports.default = LegacyCodePushServiceClient;
LegacyCodePushServiceClient.API_VERSION = 2;
