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
const chalk = require("chalk");
const util_1 = require("util");
const commandline_1 = require("../../../util/commandline");
const interaction_1 = require("../../../util/interaction");
const misc_1 = require("../../../util/misc");
const promise_map_1 = require("../../../util/misc/promise-map");
const date_helper_1 = require("./lib/date-helper");
const debug = require("debug")("appcenter-cli:commands:codepush:deployments:list");
const PROMISE_CONCURRENCY = 30;
let CodePushDeploymentListListCommand = class CodePushDeploymentListListCommand extends commandline_1.AppCommand {
    constructor(args) {
        super(args);
    }
    run(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const app = this.app;
            let deployments;
            try {
                deployments = yield interaction_1.out.progress("Getting CodePush deployments...", client.codePushDeployments.list(app.ownerName, app.appName));
                if (this.displayKeys) {
                    interaction_1.out.table(interaction_1.out.getCommandOutputTableOptions(this.generateColoredTableTitles(["Name", "Key"])), deployments.map((deployment) => [deployment.name, deployment.key]));
                }
                else {
                    interaction_1.out.text("Note: To display deployment keys add -k|--displayKeys option");
                    interaction_1.out.table(interaction_1.out.getCommandOutputTableOptions(this.generateColoredTableTitles(["Name", "Update Metadata", "Install Metrics"])), yield this.generateInfo(deployments, client));
                }
                return commandline_1.success();
            }
            catch (error) {
                debug(`Failed to get list of Codepush deployments - ${util_1.inspect(error)}`);
                if (error.statusCode === 404) {
                    const appNotFoundErrorMsg = `The app ${this.identifier} does not exist. Please double check the name, and provide it in the form owner/appname. \nRun the command ${chalk.bold(`${misc_1.scriptName} apps list`)} to see what apps you have access to.`;
                    return commandline_1.failure(commandline_1.ErrorCodes.InvalidParameter, appNotFoundErrorMsg);
                }
                else {
                    let message = "Failed to get list of deployments for the app";
                    if (error.statusCode === 429) {
                        message =
                            message +
                                ". Too many requests. Try disabling metrics request for each deployment by using -s | --skipFetchingDeploymentMetrics flag.";
                    }
                    return commandline_1.failure(commandline_1.ErrorCodes.Exception, message);
                }
            }
        });
    }
    generateColoredTableTitles(tableTitles) {
        return tableTitles.map((title) => chalk.cyan(title));
    }
    generateInfo(deployments, client) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield promise_map_1.promiseMap(deployments, (deployment) => __awaiter(this, void 0, void 0, function* () {
                if (interaction_1.formatIsJson()) {
                    if (!deployment.latestRelease || this.skipFetchingDeploymentMetrics) {
                        return deployment;
                    }
                    const metricsJSON = yield this.generateMetricsJSON(deployment, client);
                    if (metricsJSON) {
                        return { deployment: deployment, metrics: metricsJSON };
                    }
                    return deployment;
                }
                let metadataString = "";
                let metricsString = "";
                if (deployment.latestRelease) {
                    metadataString = this.generateMetadataString(deployment.latestRelease);
                    metricsString = this.skipFetchingDeploymentMetrics ? "" : yield this.getMetricsString(deployment, client);
                }
                else {
                    metadataString = chalk.magenta("No updates released");
                    metricsString = chalk.magenta("No installs recorded");
                }
                return [deployment.name, metadataString, metricsString];
            }), PROMISE_CONCURRENCY);
        });
    }
    generateMetricsJSON(deployment, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const metrics = yield this.getMetrics(deployment, client);
            if (metrics.length) {
                let releasesTotalActive = 0;
                metrics.forEach((metric) => (releasesTotalActive += metric.active));
                const latestMetric = metrics.pop();
                // NOTE: Property `active` is used as a sum of `active`'s of all metrics.
                latestMetric.active = releasesTotalActive;
                delete latestMetric.label;
                return latestMetric;
            }
            return null;
        });
    }
    getMetrics(deployment, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const metrics = yield interaction_1.out.progress("Getting CodePush deployments metrics...", client.codePushDeploymentMetrics.get(deployment.name, this.app.ownerName, this.app.appName));
            return metrics;
        });
    }
    getMetricsString(deployment, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const metrics = yield this.getMetrics(deployment, client);
            let releasesTotalActive = 0;
            metrics.forEach((metric) => (releasesTotalActive += metric.active));
            const releaseMetrics = metrics.find((metric) => metric.label === deployment.latestRelease.label);
            return this.generateMetricsString(releaseMetrics, releasesTotalActive);
        });
    }
    generateMetricsString(releaseMetrics, releasesTotalActive) {
        if (releaseMetrics) {
            let metricsString = "";
            const activePercent = releasesTotalActive ? (releaseMetrics.active / releasesTotalActive) * 100 : 0.0;
            let percentString;
            if (activePercent === 100.0) {
                percentString = "100%";
            }
            else if (activePercent === 0.0) {
                percentString = "0%";
            }
            else {
                percentString = activePercent.toPrecision(2) + "%";
            }
            metricsString += chalk.green("Active: ") + percentString + ` (${releaseMetrics.active} of ${releasesTotalActive})\n`;
            if (releaseMetrics.installed != null) {
                metricsString += chalk.green("Installed: ") + releaseMetrics.installed;
            }
            const pending = releaseMetrics.downloaded - releaseMetrics.installed - releaseMetrics.failed;
            if (pending) {
                metricsString += ` (${pending} pending)`;
            }
            return metricsString;
        }
        else {
            return chalk.magenta("No installs recorded");
        }
    }
    generateMetadataString(release) {
        let metadataString = "";
        const lineFeed = "\n";
        metadataString += chalk.green("Label: ") + release.label + lineFeed;
        metadataString += chalk.green("App Version: ") + release.targetBinaryRange + lineFeed;
        metadataString += chalk.green("Mandatory: ") + (release.isMandatory ? "Yes" : "No") + lineFeed;
        metadataString += chalk.green("Release Time: ") + date_helper_1.formatDate(release.uploadTime) + lineFeed;
        metadataString += chalk.green("Released By: ") + release.releasedBy;
        return metadataString;
    }
};
__decorate([
    commandline_1.help("Specifies whether to display the deployment keys"),
    commandline_1.shortName("k"),
    commandline_1.longName("displayKeys")
], CodePushDeploymentListListCommand.prototype, "displayKeys", void 0);
__decorate([
    commandline_1.help("Specifies whether to fetch deployment metrics"),
    commandline_1.shortName("s"),
    commandline_1.longName("skipFetchingDeploymentMetrics")
], CodePushDeploymentListListCommand.prototype, "skipFetchingDeploymentMetrics", void 0);
CodePushDeploymentListListCommand = __decorate([
    commandline_1.help("List the deployments associated with an app")
], CodePushDeploymentListListCommand);
exports.default = CodePushDeploymentListListCommand;
