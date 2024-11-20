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
exports.printGroups = exports.parseDistributionGroups = exports.addGroupToRelease = exports.getExternalStoreToDistributeRelease = exports.getDistributionGroup = void 0;
const commandline_1 = require("../../../util/commandline");
const util_1 = require("util");
const debug = require("debug")("appcenter-cli:commands:distribute");
function getDistributionGroup(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { client, app, destination, destinationType, releaseId } = options;
        try {
            return yield client.distributionGroups.get(app.ownerName, app.appName, destination);
        }
        catch (error) {
            if (error.statusCode === 404) {
                throw commandline_1.failure(commandline_1.ErrorCodes.InvalidParameter, `Could not find group ${destination}`);
            }
            else {
                debug(`Failed to distribute the release - ${util_1.inspect(error)}`);
                throw commandline_1.failure(commandline_1.ErrorCodes.Exception, `Could not add ${destinationType} ${destination} to release ${releaseId}`);
            }
        }
    });
}
exports.getDistributionGroup = getDistributionGroup;
function getExternalStoreToDistributeRelease(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { client, app, storeName, releaseId } = options;
        try {
            return yield client.stores.get(storeName, app.ownerName, app.appName);
        }
        catch (error) {
            if (error.statusCode === 404) {
                throw commandline_1.failure(commandline_1.ErrorCodes.InvalidParameter, `Could not find store ${storeName}`);
            }
            else {
                debug(`Failed to distribute the release - ${util_1.inspect(error)}`);
                throw commandline_1.failure(commandline_1.ErrorCodes.Exception, `Could not add store ${storeName} to release ${releaseId}`);
            }
        }
    });
}
exports.getExternalStoreToDistributeRelease = getExternalStoreToDistributeRelease;
function addGroupToRelease(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { client, app, distributionGroup, releaseId, mandatory, silent, destinationType, destination } = options;
        return yield client.releases.addDistributionGroup(releaseId, app.ownerName, app.appName, distributionGroup.id, {
            mandatoryUpdate: !!mandatory,
            notifyTesters: !silent,
            onResponse: (response, _flatResponse, _error) => {
                if (response.status >= 200 && response.status < 400) {
                    // all good;
                }
                else if (response.status === 404) {
                    throw commandline_1.failure(commandline_1.ErrorCodes.InvalidParameter, `Could not find release ${releaseId}`);
                }
                else {
                    debug(`Failed to distribute the release - ${util_1.inspect(response.parsedBody)}`);
                    throw commandline_1.failure(commandline_1.ErrorCodes.Exception, `Could not add ${destinationType} ${destination} to release ${releaseId}`);
                }
            },
        });
    });
}
exports.addGroupToRelease = addGroupToRelease;
function parseDistributionGroups(groups) {
    return groups.split(",").map((group) => {
        return group.trim();
    });
}
exports.parseDistributionGroups = parseDistributionGroups;
function printGroups(groups) {
    return groups
        .split(",")
        .map((group) => {
        return group.trim();
    })
        .join(", ");
}
exports.printGroups = printGroups;
