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
exports.pickAdmins = exports.getOrgsNamesList = exports.getOrgUsers = void 0;
const create_client_1 = require("../../../util/apis/create-client");
function getOrgUsers(client, organization, debug) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield client.users.listForOrg(organization);
        }
        catch (error) {
            yield create_client_1.handleHttpError(error, true, "failed to load list of organization users", `organization ${organization} doesn't exist`);
        }
    });
}
exports.getOrgUsers = getOrgUsers;
function getOrgsNamesList(client) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.organizations.list();
            return result.map((org) => ({
                name: org.name,
                displayName: org.displayName,
                origin: org.origin,
            }));
        }
        catch (error) {
            yield create_client_1.handleHttpError(error, false, "failed to load list of organizations");
        }
    });
}
exports.getOrgsNamesList = getOrgsNamesList;
function pickAdmins(users) {
    return users.filter((user) => user.role === "admin");
}
exports.pickAdmins = pickAdmins;