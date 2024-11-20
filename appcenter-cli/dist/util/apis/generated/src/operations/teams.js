"use strict";
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsImpl = void 0;
const coreClient = require("@azure/core-client");
const Mappers = require("../models/mappers");
const Parameters = require("../models/parameters");
/** Class containing Teams operations. */
class TeamsImpl {
    /**
     * Initialize a new instance of the class Teams class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Removes a user from a team that is owned by an organization
     * @param orgName The organization's name
     * @param teamName The team's name
     * @param userName The slug name of the user
     * @param options The options parameters.
     */
    removeUser(orgName, teamName, userName, options) {
        return this.client.sendOperationRequest({ orgName, teamName, userName, options }, removeUserOperationSpec);
    }
    /**
     * Returns the users of a team which is owned by an organization
     * @param orgName The organization's name
     * @param teamName The team's name
     * @param options The options parameters.
     */
    getUsers(orgName, teamName, options) {
        return this.client.sendOperationRequest({ orgName, teamName, options }, getUsersOperationSpec);
    }
    /**
     * Adds a new user to a team that is owned by an organization
     * @param orgName The organization's name
     * @param teamName The team's name
     * @param userEmail The user's email address
     * @param options The options parameters.
     */
    addUser(orgName, teamName, userEmail, options) {
        return this.client.sendOperationRequest({ orgName, teamName, userEmail, options }, addUserOperationSpec);
    }
    /**
     * Updates the permissions the team has to the app
     * @param orgName The organization's name
     * @param teamName The team's name
     * @param appName The name of the application
     * @param permissions The permissions all members of the team have on the app
     * @param options The options parameters.
     */
    updatePermissions(orgName, teamName, appName, permissions, options) {
        return this.client.sendOperationRequest({ orgName, teamName, appName, permissions, options }, updatePermissionsOperationSpec);
    }
    /**
     * Removes an app from a team
     * @param orgName The organization's name
     * @param teamName The team's name
     * @param appName The name of the application
     * @param options The options parameters.
     */
    removeApp(orgName, teamName, appName, options) {
        return this.client.sendOperationRequest({ orgName, teamName, appName, options }, removeAppOperationSpec);
    }
    /**
     * Adds an app to a team
     * @param orgName The organization's name
     * @param teamName The team's name
     * @param name The name of the app to be added to the distribution group
     * @param options The options parameters.
     */
    addApp(orgName, teamName, name, options) {
        return this.client.sendOperationRequest({ orgName, teamName, name, options }, addAppOperationSpec);
    }
    /**
     * Returns the apps a team has access to
     * @param orgName The organization's name
     * @param teamName The team's name
     * @param options The options parameters.
     */
    listApps(orgName, teamName, options) {
        return this.client.sendOperationRequest({ orgName, teamName, options }, listAppsOperationSpec);
    }
    /**
     * Returns the details of a single team
     * @param orgName The organization's name
     * @param teamName The team's name
     * @param options The options parameters.
     */
    getTeam(orgName, teamName, options) {
        return this.client.sendOperationRequest({ orgName, teamName, options }, getTeamOperationSpec);
    }
    /**
     * Deletes a single team
     * @param orgName The organization's name
     * @param teamName The team's name
     * @param options The options parameters.
     */
    delete(orgName, teamName, options) {
        return this.client.sendOperationRequest({ orgName, teamName, options }, deleteOperationSpec);
    }
    /**
     * Updates a single team
     * @param orgName The organization's name
     * @param teamName The team's name
     * @param displayName The new display name of the team
     * @param options The options parameters.
     */
    update(orgName, teamName, displayName, options) {
        return this.client.sendOperationRequest({ orgName, teamName, displayName, options }, updateOperationSpec);
    }
    /**
     * Returns the list of all teams in this org
     * @param orgName The organization's name
     * @param options The options parameters.
     */
    listAll(orgName, options) {
        return this.client.sendOperationRequest({ orgName, options }, listAllOperationSpec);
    }
    /**
     * Creates a team and returns it
     * @param orgName The organization's name
     * @param displayName The display name of the team
     * @param options The options parameters.
     */
    createTeam(orgName, displayName, options) {
        return this.client.sendOperationRequest({ orgName, displayName, options }, createTeamOperationSpec);
    }
}
exports.TeamsImpl = TeamsImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const removeUserOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams/{team_name}/users/{user_name}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.PathsL86WmaV01OrgsOrgNameTeamsTeamNameUsersUserNameDeleteResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.orgName,
        Parameters.userName,
        Parameters.teamName
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getUsersOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams/{team_name}/users",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsQ6Nk57V01OrgsOrgNameTeamsTeamNameUsersGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths10Bx1MpV01OrgsOrgNameTeamsTeamNameUsersGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.orgName, Parameters.teamName],
    headerParameters: [Parameters.accept],
    serializer
};
const addUserOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams/{team_name}/users",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.PathsY6FsqxV01OrgsOrgNameTeamsTeamNameUsersPostResponses201ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths41XckqV01OrgsOrgNameTeamsTeamNameUsersPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { userEmail: ["userEmail"] },
        mapper: Object.assign(Object.assign({}, Mappers.Paths1Cc9FkbV01OrgsOrgNameTeamsTeamNameUsersPostRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [Parameters.$host, Parameters.orgName, Parameters.teamName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const updatePermissionsOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams/{team_name}/apps/{app_name}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: Mappers.Paths6Yr3JV01OrgsOrgNameTeamsTeamNameAppsAppNamePatchResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1Beedi7V01OrgsOrgNameTeamsTeamNameAppsAppNamePatchResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { permissions: ["permissions"] },
        mapper: Object.assign(Object.assign({}, Mappers.Paths1HiscesV01OrgsOrgNameTeamsTeamNameAppsAppNamePatchRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [
        Parameters.$host,
        Parameters.appName,
        Parameters.orgName,
        Parameters.teamName
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const removeAppOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams/{team_name}/apps/{app_name}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.Paths1Pofxg3V01OrgsOrgNameTeamsTeamNameAppsAppNameDeleteResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.appName,
        Parameters.orgName,
        Parameters.teamName
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const addAppOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams/{team_name}/apps",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.PathsQkzmz3V01OrgsOrgNameTeamsTeamNameAppsPostResponses201ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1YpvsyyV01OrgsOrgNameTeamsTeamNameAppsPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { name: ["name"] },
        mapper: Object.assign(Object.assign({}, Mappers.Paths3K4Kv5V01OrgsOrgNameTeamsTeamNameAppsPostRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [Parameters.$host, Parameters.orgName, Parameters.teamName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const listAppsOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams/{team_name}/apps",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PathsS2AazoV01OrgsOrgNameTeamsTeamNameAppsGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.PathsH0Ns4HV01OrgsOrgNameTeamsTeamNameAppsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.orgName, Parameters.teamName],
    headerParameters: [Parameters.accept],
    serializer
};
const getTeamOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams/{team_name}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsUii78RV01OrgsOrgNameTeamsTeamNameGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths16B1TziV01OrgsOrgNameTeamsTeamNameGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.orgName, Parameters.teamName],
    headerParameters: [Parameters.accept],
    serializer
};
const deleteOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams/{team_name}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.Paths1HybnvwV01OrgsOrgNameTeamsTeamNameDeleteResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.orgName, Parameters.teamName],
    headerParameters: [Parameters.accept],
    serializer
};
const updateOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams/{team_name}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1L1EevaV01OrgsOrgNameTeamsTeamNamePatchResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1Ga78SuV01OrgsOrgNameTeamsTeamNamePatchResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { displayName: ["displayName"] },
        mapper: Object.assign(Object.assign({}, Mappers.Paths1414Qm7V01OrgsOrgNameTeamsTeamNamePatchRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [Parameters.$host, Parameters.orgName, Parameters.teamName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const listAllOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Paths63Ea35V01OrgsOrgNameTeamsGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.Paths1WbpnrnV01OrgsOrgNameTeamsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.orgName],
    headerParameters: [Parameters.accept],
    serializer
};
const createTeamOperationSpec = {
    path: "/v0.1/orgs/{org_name}/teams",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Post201ApplicationJsonItemsItem"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.Paths1P5700PV01OrgsOrgNameTeamsPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: {
            displayName: ["displayName"],
            name: ["options", "name"],
            description: ["options", "description"]
        },
        mapper: Object.assign(Object.assign({}, Mappers.Paths1Iu7UzV01OrgsOrgNameTeamsPostRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [Parameters.$host, Parameters.orgName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
