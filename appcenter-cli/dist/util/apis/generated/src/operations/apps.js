"use strict";
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsImpl = void 0;
const coreClient = require("@azure/core-client");
const Mappers = require("../models/mappers");
const Parameters = require("../models/parameters");
/** Class containing Apps operations. */
class AppsImpl {
    /**
     * Initialize a new instance of the class Apps class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a user apps information from an organization by name
     * @param orgName The organization's name
     * @param userName The slug name of the user
     * @param options The options parameters.
     */
    getForOrgUser(orgName, userName, options) {
        return this.client.sendOperationRequest({ orgName, userName, options }, getForOrgUserOperationSpec);
    }
    /**
     * Creates a new app for the organization and returns it to the caller
     * @param orgName The organization's name
     * @param app The data for the app
     * @param options The options parameters.
     */
    createForOrg(orgName, app, options) {
        return this.client.sendOperationRequest({ orgName, app, options }, createForOrgOperationSpec);
    }
    /**
     * Returns a list of apps for the organization
     * @param orgName The organization's name
     * @param options The options parameters.
     */
    listForOrg(orgName, options) {
        return this.client.sendOperationRequest({ orgName, options }, listForOrgOperationSpec);
    }
    /**
     * Removes the user from the app
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param userEmail The user email of the user to delete
     * @param options The options parameters.
     */
    removeUser(ownerName, appName, userEmail, options) {
        return this.client.sendOperationRequest({ ownerName, appName, userEmail, options }, removeUserOperationSpec);
    }
    /**
     * Update user permission for the app
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param userEmail The user email of the user to patch
     * @param permissions The permissions the user has for the app
     * @param options The options parameters.
     */
    updateUserPermissions(ownerName, appName, userEmail, permissions, options) {
        return this.client.sendOperationRequest({ ownerName, appName, userEmail, permissions, options }, updateUserPermissionsOperationSpec);
    }
    /**
     * Transfers ownership of an app to a new organization
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    transferToOrg(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, transferToOrgOperationSpec);
    }
    /**
     * Transfers ownership of an app to a different user or organization
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param destinationOwnerName The name of the owner (user or organization) to which the app is being
     *                             transferred
     * @param options The options parameters.
     */
    transferOwnership(ownerName, appName, destinationOwnerName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, destinationOwnerName, options }, transferOwnershipOperationSpec);
    }
    /**
     * Returns the testers associated with the app specified with the given app name which belongs to the
     * given owner.
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    listTesters(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, listTestersOperationSpec);
    }
    /**
     * Returns the details of all teams that have access to the app.
     * @param appName The name of the application
     * @param ownerName The name of the owner
     * @param options The options parameters.
     */
    getTeams(appName, ownerName, options) {
        return this.client.sendOperationRequest({ appName, ownerName, options }, getTeamsOperationSpec);
    }
    /**
     * Sets the app avatar
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    updateAvatar(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, updateAvatarOperationSpec);
    }
    /**
     * Deletes the uploaded app avatar
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    deleteAvatar(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, deleteAvatarOperationSpec);
    }
    /**
     * Return a specific app with the given app name which belongs to the given owner.
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    get(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, getOperationSpec);
    }
    /**
     * Partially updates a single app
     * @param appName The name of the application
     * @param ownerName The name of the owner
     * @param options The options parameters.
     */
    update(appName, ownerName, options) {
        return this.client.sendOperationRequest({ appName, ownerName, options }, updateOperationSpec);
    }
    /**
     * Delete an app
     * @param appName The name of the application
     * @param ownerName The name of the owner
     * @param options The options parameters.
     */
    delete(appName, ownerName, options) {
        return this.client.sendOperationRequest({ appName, ownerName, options }, deleteOperationSpec);
    }
    /**
     * Creates a new app and returns it to the caller
     * @param app The data for the app
     * @param options The options parameters.
     */
    create(app, options) {
        return this.client.sendOperationRequest({ app, options }, createOperationSpec);
    }
    /**
     * Returns a list of apps
     * @param options The options parameters.
     */
    list(options) {
        return this.client.sendOperationRequest({ options }, listOperationSpec);
    }
}
exports.AppsImpl = AppsImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getForOrgUserOperationSpec = {
    path: "/v0.1/orgs/{org_name}/users/{user_name}/apps",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Paths1CionenV01OrgsOrgNameUsersUserNameAppsGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.PathsBzcytsV01OrgsOrgNameUsersUserNameAppsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.orgName, Parameters.userName],
    headerParameters: [Parameters.accept],
    serializer
};
const createForOrgOperationSpec = {
    path: "/v0.1/orgs/{org_name}/apps",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.PathsZsi63SV01OrgsOrgNameAppsPostResponses200ContentApplicationJsonSchema
        },
        201: {
            bodyMapper: Mappers.Paths15X4K8OV01OrgsOrgNameAppsPostResponses201ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths7Ywy9V01OrgsOrgNameAppsPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.app,
    urlParameters: [Parameters.$host, Parameters.orgName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const listForOrgOperationSpec = {
    path: "/v0.1/orgs/{org_name}/apps",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PathsPmjc9ZV01OrgsOrgNameAppsGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.Paths14Atv4RV01OrgsOrgNameAppsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.orgName],
    headerParameters: [Parameters.accept],
    serializer
};
const removeUserOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/users/{user_email}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.Paths7XqutjV01AppsOwnerNameAppNameUsersUserEmailDeleteResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.userEmail4
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const updateUserPermissionsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/users/{user_email}",
    httpMethod: "PATCH",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.Paths19GxrayV01AppsOwnerNameAppNameUsersUserEmailPatchResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { permissions: ["permissions"] },
        mapper: Object.assign(Object.assign({}, Mappers.PathsG6C5PhV01AppsOwnerNameAppNameUsersUserEmailPatchRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.userEmail4
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const transferToOrgOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/transfer_to_org",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1LnjnxdV01AppsOwnerNameAppNameTransferToOrgPostResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsE169PrV01AppsOwnerNameAppNameTransferToOrgPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const transferOwnershipOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/transfer/{destination_owner_name}",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Paths17Wfdp6V01AppsOwnerNameAppNameTransferDestinationOwnerNamePostResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths15Hmn0IV01AppsOwnerNameAppNameTransferDestinationOwnerNamePostResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.destinationOwnerName
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const listTestersOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/testers",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Paths9J1VrgV01AppsOwnerNameAppNameTestersGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.Paths2WblseV01AppsOwnerNameAppNameTestersGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const getTeamsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/teams",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Paths1Sq4J2RV01AppsOwnerNameAppNameTeamsGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.Paths1YwiryhV01AppsOwnerNameAppNameTeamsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const updateAvatarOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/avatar",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1X598I8V01AppsOwnerNameAppNameAvatarPostResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths17Ufom9V01AppsOwnerNameAppNameAvatarPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    formDataParameters: [Parameters.avatar],
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.contentType1, Parameters.accept1],
    serializer
};
const deleteAvatarOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/avatar",
    httpMethod: "DELETE",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1Jhcvh4V01AppsOwnerNameAppNameAvatarDeleteResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsB7Jif8V01AppsOwnerNameAppNameAvatarDeleteResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const getOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsRv9AxzV01AppsOwnerNameAppNameGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsZhn7DqV01AppsOwnerNameAppNameGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const updateOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: Mappers.PathsPcp6H8V01AppsOwnerNameAppNamePatchResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsJbts1XV01AppsOwnerNameAppNamePatchResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.app1,
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const deleteOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.Paths1BdpjjmV01AppsOwnerNameAppNameDeleteResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const createOperationSpec = {
    path: "/v0.1/apps",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.Paths1Xn0TpgV01AppsPostResponses201ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsV9XtwoV01AppsPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.app2,
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const listOperationSpec = {
    path: "/v0.1/apps",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PathsEh92XyV01AppsGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.Paths127V8Y9V01AppsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.orderBy],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
