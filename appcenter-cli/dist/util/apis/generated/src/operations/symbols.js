"use strict";
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolsImpl = void 0;
const coreClient = require("@azure/core-client");
const Mappers = require("../models/mappers");
const Parameters = require("../models/parameters");
/** Class containing Symbols operations. */
class SymbolsImpl {
    /**
     * Initialize a new instance of the class Symbols class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns a particular symbol by id (uuid) for the provided application
     * @param symbolId The ID of the symbol (uuid of the symbol)
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    getStatus(symbolId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ symbolId, ownerName, appName, options }, getStatusOperationSpec);
    }
    /**
     * Gets the URL to download the symbol
     * @param symbolId The ID of the symbol (uuid of the symbol)
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    getLocation(symbolId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ symbolId, ownerName, appName, options }, getLocationOperationSpec);
    }
    /**
     * Marks a symbol by id (uuid) as ignored
     * @param symbolId The ID of the symbol (uuid of the symbol)
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    ignore(symbolId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ symbolId, ownerName, appName, options }, ignoreOperationSpec);
    }
    /**
     * Returns a particular symbol by id (uuid) for the provided application
     * @param symbolId The ID of the symbol (uuid of the symbol)
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    get(symbolId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ symbolId, ownerName, appName, options }, getOperationSpec);
    }
    /**
     * Returns the list of all symbols for the provided application
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    list(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, listOperationSpec);
    }
}
exports.SymbolsImpl = SymbolsImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getStatusOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/symbols/{symbol_id}/status",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsZwg80MV01AppsOwnerNameAppNameSymbolsSymbolIdStatusGetResponses200ContentApplicationJsonSchema
        },
        403: {
            bodyMapper: Mappers.PathsRm34DsV01AppsOwnerNameAppNameSymbolsSymbolIdStatusGetResponses403ContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.Paths3NgdjqV01AppsOwnerNameAppNameSymbolsSymbolIdStatusGetResponses404ContentApplicationJsonSchema
        },
        500: {
            bodyMapper: Mappers.PathsZyl9UsV01AppsOwnerNameAppNameSymbolsSymbolIdStatusGetResponses500ContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.symbolId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getLocationOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/symbols/{symbol_id}/location",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1PukseV01AppsOwnerNameAppNameSymbolsSymbolIdLocationGetResponses200ContentApplicationJsonSchema
        },
        403: {
            bodyMapper: Mappers.Paths10EfwkV01AppsOwnerNameAppNameSymbolsSymbolIdLocationGetResponses403ContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.PathsAi9SksV01AppsOwnerNameAppNameSymbolsSymbolIdLocationGetResponses404ContentApplicationJsonSchema
        },
        500: {
            bodyMapper: Mappers.Paths1OloyvoV01AppsOwnerNameAppNameSymbolsSymbolIdLocationGetResponses500ContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.symbolId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const ignoreOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/symbols/{symbol_id}/ignore",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1K4YzazV01AppsOwnerNameAppNameSymbolsSymbolIdIgnorePostResponses200ContentApplicationJsonSchema
        },
        403: {
            bodyMapper: Mappers.Paths1YawolbV01AppsOwnerNameAppNameSymbolsSymbolIdIgnorePostResponses403ContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.Paths1RxhxhnV01AppsOwnerNameAppNameSymbolsSymbolIdIgnorePostResponses404ContentApplicationJsonSchema
        },
        500: {
            bodyMapper: Mappers.PathsX0B659V01AppsOwnerNameAppNameSymbolsSymbolIdIgnorePostResponses500ContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.symbolId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/symbols/{symbol_id}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsK9XnpbV01AppsOwnerNameAppNameSymbolsSymbolIdGetResponses200ContentApplicationJsonSchema
        },
        403: {
            bodyMapper: Mappers.Paths1Vhz9IlV01AppsOwnerNameAppNameSymbolsSymbolIdGetResponses403ContentApplicationJsonSchema
        },
        404: {
            bodyMapper: Mappers.Paths1DykrkvV01AppsOwnerNameAppNameSymbolsSymbolIdGetResponses404ContentApplicationJsonSchema
        },
        500: {
            bodyMapper: Mappers.PathsVqx0ExV01AppsOwnerNameAppNameSymbolsSymbolIdGetResponses500ContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.symbolId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const listOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/symbols",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PathsRp7XckV01AppsOwnerNameAppNameSymbolsGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        },
        403: {
            bodyMapper: Mappers.PathsZha4ZiV01AppsOwnerNameAppNameSymbolsGetResponses403ContentApplicationJsonSchema
        },
        500: {
            bodyMapper: Mappers.Paths1CjrzdcV01AppsOwnerNameAppNameSymbolsGetResponses500ContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
