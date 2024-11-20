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
const lodash_1 = require("lodash");
const commandline_1 = require("../../../util/commandline");
const release_1 = require("../release");
const debug = require("debug")("appcenter-cli:commands:distribute:stores:publish");
let PublishToStoreCommand = class PublishToStoreCommand extends commandline_1.AppCommand {
    run(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const releaseArgs = ["--app", this.app.identifier, "--file", this.filePath, "--store", this.storeName];
            if (!lodash_1.isNil(this.releaseNotes)) {
                releaseArgs.push("--release-notes", this.releaseNotes);
            }
            if (!lodash_1.isNil(this.releaseNotesFile)) {
                releaseArgs.push("--release-notes-file", this.releaseNotesFile);
            }
            if (!lodash_1.isNil(this.environmentName)) {
                releaseArgs.push("--env", this.environmentName);
            }
            if (!lodash_1.isNil(this.token)) {
                releaseArgs.push("--token", this.token);
            }
            if (this.disableTelemetry) {
                releaseArgs.push("--disable-telemetry");
            }
            // --help and --version end the command execution before it even gets here
            // --debug, --format and --quiet set global variables which remain for the command newly created below
            const releaseCommandArgs = {
                args: releaseArgs,
                command: ["distribute", "release"],
                commandPath: undefined,
            };
            debug("Forwarding to distribute release command");
            const releaseCommand = new release_1.default(releaseCommandArgs);
            return releaseCommand.run(client);
        });
    }
};
__decorate([
    commandline_1.help("Path to binary file"),
    commandline_1.shortName("f"),
    commandline_1.longName("file"),
    commandline_1.required,
    commandline_1.hasArg
], PublishToStoreCommand.prototype, "filePath", void 0);
__decorate([
    commandline_1.help("Store name"),
    commandline_1.shortName("s"),
    commandline_1.longName("store"),
    commandline_1.hasArg,
    commandline_1.required
], PublishToStoreCommand.prototype, "storeName", void 0);
__decorate([
    commandline_1.help("Release notes text"),
    commandline_1.shortName("r"),
    commandline_1.longName("release-notes"),
    commandline_1.hasArg
], PublishToStoreCommand.prototype, "releaseNotes", void 0);
__decorate([
    commandline_1.help("Path to release notes file"),
    commandline_1.shortName("R"),
    commandline_1.longName("release-notes-file"),
    commandline_1.hasArg
], PublishToStoreCommand.prototype, "releaseNotesFile", void 0);
PublishToStoreCommand = __decorate([
    commandline_1.help("Publish an app file to a store")
], PublishToStoreCommand);
exports.default = PublishToStoreCommand;