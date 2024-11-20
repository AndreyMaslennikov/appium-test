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
const util_1 = require("util");
const debug = require("debug")("appcenter-cli:commands:codepush:deployment:clear");
let CodePushClearDeploymentCommand = class CodePushClearDeploymentCommand extends commandline_1.AppCommand {
    constructor(args) {
        super(args);
    }
    run(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const app = this.app;
            if (!(yield interaction_1.prompt.confirm(`Do you really want to clear release history for deployment ${this.deploymentName}?`))) {
                interaction_1.out.text(`Clearing release history was cancelled`);
                return commandline_1.success();
            }
            try {
                debug("Clearing release history");
                yield interaction_1.out.progress(`Clearing release history for deployment ${this.deploymentName}...`, client.codePushDeploymentReleases.delete(this.deploymentName, app.ownerName, app.appName));
            }
            catch (error) {
                debug(`Failed to clear deployment history - ${util_1.inspect(error)}`);
                if (error.statusCode === 404) {
                    const deploymentNotFoundErrorMsg = `The deployment ${this.deploymentName} does not exist for the app ${this.identifier}`;
                    return commandline_1.failure(commandline_1.ErrorCodes.NotFound, deploymentNotFoundErrorMsg);
                }
                else {
                    return commandline_1.failure(commandline_1.ErrorCodes.Exception, error.response.bodyAsText);
                }
            }
            interaction_1.out.text(`Successfully cleared the deployment ${this.deploymentName} history for the ${this.identifier} app.`);
            return commandline_1.success();
        });
    }
};
__decorate([
    commandline_1.help("Specifies CodePush deployment name to be cleared"),
    commandline_1.name("deployment-name"),
    commandline_1.position(0),
    commandline_1.required
], CodePushClearDeploymentCommand.prototype, "deploymentName", void 0);
CodePushClearDeploymentCommand = __decorate([
    commandline_1.help("Clear the release history associated with a deployment")
], CodePushClearDeploymentCommand);
exports.default = CodePushClearDeploymentCommand;
