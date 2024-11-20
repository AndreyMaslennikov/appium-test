"use strict";
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresImpl = void 0;
const coreClient = require("@azure/core-client");
const Mappers = require("../models/mappers");
const Parameters = require("../models/parameters");
/** Class containing Stores operations. */
class StoresImpl {
    /**
     * Initialize a new instance of the class Stores class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Return the store details for specified store name.
     * @param storeName The name of the store
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    get(storeName, ownerName, appName, options) {
        return this.client.sendOperationRequest({ storeName, ownerName, appName, options }, getOperationSpec);
    }
    /**
     * Update the store.
     * @param storeName The name of the store
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param serviceConnectionId Service connection id to updated.
     * @param options The options parameters.
     */
    patch(storeName, ownerName, appName, serviceConnectionId, options) {
        return this.client.sendOperationRequest({ storeName, ownerName, appName, serviceConnectionId, options }, patchOperationSpec);
    }
    /**
     * delete the store based on specific store name.
     * @param storeName The name of the store
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    delete(storeName, ownerName, appName, options) {
        return this.client.sendOperationRequest({ storeName, ownerName, appName, options }, deleteOperationSpec);
    }
    /**
     * Create a new external store for the specified application.
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param body The store request
     * @param options The options parameters.
     */
    create(ownerName, appName, body, options) {
        return this.client.sendOperationRequest({ ownerName, appName, body, options }, createOperationSpec);
    }
    /**
     * Get all the store details from Storage store table for a particular application.
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    list(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, listOperationSpec);
    }
}
exports.StoresImpl = StoresImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths17Ft4FaV01AppsOwnerNameAppNameDistributionStoresStoreNameGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsTg2NhfV01AppsOwnerNameAppNameDistributionStoresStoreNameGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.storeName
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const patchOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}",
    httpMethod: "PATCH",
    responses: {
        200: {},
        default: {
            bodyMapper: Mappers.PathsAqfpleV01AppsOwnerNameAppNameDistributionStoresStoreNamePatchResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { serviceConnectionId: ["serviceConnectionId"] },
        mapper: Object.assign(Object.assign({}, Mappers.Paths1Yf5Jp5V01AppsOwnerNameAppNameDistributionStoresStoreNamePatchRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.storeName
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const deleteOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.Paths14Io730V01AppsOwnerNameAppNameDistributionStoresStoreNameDeleteResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body8,
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.storeName
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const createOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/distribution_stores",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.PathsM4SyzbV01AppsOwnerNameAppNameDistributionStoresPostResponses201ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsMlw3HcV01AppsOwnerNameAppNameDistributionStoresPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body10,
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const listOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/distribution_stores",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Paths1WzhejqV01AppsOwnerNameAppNameDistributionStoresGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        }
    },
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};