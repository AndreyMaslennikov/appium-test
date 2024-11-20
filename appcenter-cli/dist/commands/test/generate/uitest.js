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
const generate_command_1 = require("../lib/generate-command");
const help_messages_1 = require("../lib/help-messages");
const pfs = require("../../../util/misc/promisfied-fs");
// import * as request from "request";
const path = require("path");
let GenerateUITestCommand = class GenerateUITestCommand extends generate_command_1.GenerateCommand {
    constructor(args) {
        super(args);
        this.templatePathAndroid = path.join(__dirname, "../lib/templates/uitest/android");
        this.templatePathiOS = path.join(__dirname, "../lib/templates/uitest/ios");
    }
    processTemplate() {
        return __awaiter(this, void 0, void 0, function* () {
            const platform = this.isIOS() ? "iOS" : "Android";
            const packageFilePath = path.join(this.outputPath, `AppCenter.UITest.${platform}/packages.config`);
            const projectFilePath = path.join(this.outputPath, `AppCenter.UITest.${platform}/AppCenter.UITest.${platform}.csproj`);
            let latestVersion;
            try {
                // Using hardcoded version because starting from version 4.* Xamarin.UITest drops framework v4.5.
                // Using latest version of Xamarin.UITest requires to update the generated project (see https://github.com/microsoft/appcenter-cli/pull/2179).
                // However, it will also require us to update the backend side of the Build service,
                // so the generated project would be built using newer msbuild tool (currently it is msbuild 14, see https://dev.azure.com/msmobilecenter/Mobile-Center/_git/appcenter/pullrequest/55845).
                // The mentioned PR in build service doesn't work, so we need to debug it to make the msbuild udpated properly.
                // Until then, we are using a hardcoded working version of Xamarin.UITest.
                // After removing it - uncomment lines 52-78 and line 5.
                // Also, after removing this hardcode - uncomment lines 53-180 in file test/commands/test/generate/uitest-test.ts
                latestVersion = "3.2.9"; // await this.getLatestUITestVersionNumber();
            }
            catch (e) {
                console.warn("Can't retrieve latest UITest version. Using default version from template. Details: " + e);
                return;
            }
            try {
                // Replace version inside packages.config file
                yield this.replaceVersionInFile(packageFilePath, /(id="Xamarin\.UITest" version=")(\d+(\.\d+)+)/, latestVersion);
                // Replace version inside *.csproj file
                yield this.replaceVersionInFile(projectFilePath, /(packages\\Xamarin\.UITest\.)(\d+(\.\d+)+)/, latestVersion);
            }
            catch (e) {
                yield this.copyTemplates();
                console.warn("Can't update UITest version. Using default templates. Details: " + e);
                return;
            }
        });
    }
    // private async getLatestUITestVersionNumber(): Promise<string> {
    // Retrieve the latest stable version number of Xamarin.UITest via NuGet api
    //  return new Promise<string>((resolve, reject) => {
    //    const UITestNugetApiUrl = "https://api.nuget.org/v3-flatcontainer/Xamarin.UITest/index.json";
    //    request(
    //      {
    //        url: UITestNugetApiUrl,
    //        json: true,
    //      },
    //      (error, response, body) => {
    //        if (!error && response.statusCode === 200) {
    //          const stableVersions: string[] = (body.versions as string[]).filter(
    //            (version) => version.indexOf("dev") === -1 && version.indexOf("beta") === -1
    //          );
    //          if (stableVersions.length) {
    //            resolve(stableVersions[stableVersions.length - 1]);
    //          } else {
    //            reject("Can't load latest UITest NuGet version number: response does not contain valid versions");
    //          }
    //        } else {
    //          reject(`Can't load latest UITest NuGet version number: ${response.statusCode}: ${error}`);
    //        }
    //      }
    //    );
    //  });
    //}
    replaceVersionInFile(filePath, regex, version) {
        return __awaiter(this, void 0, void 0, function* () {
            let fileContent = yield pfs.readFile(filePath, "utf8");
            fileContent = fileContent.replace(regex, `$1${version}`);
            yield pfs.writeFile(filePath, fileContent);
        });
    }
};
GenerateUITestCommand = __decorate([
    commandline_1.help(help_messages_1.Messages.TestCloud.Commands.GenerateUITest)
], GenerateUITestCommand);
exports.default = GenerateUITestCommand;
