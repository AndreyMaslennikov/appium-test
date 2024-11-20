"use strict";
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvisioningImpl = void 0;
const coreClient = require("@azure/core-client");
const Mappers = require("../models/mappers");
const Parameters = require("../models/parameters");
/** Class containing Provisioning operations. */
class ProvisioningImpl {
    /**
     * Initialize a new instance of the class Provisioning class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Return information about the provisioning profile. Only available for iOS.
     * @param releaseId The release_id
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    profile(releaseId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ releaseId, ownerName, appName, options }, profileOperationSpec);
    }
}
exports.ProvisioningImpl = ProvisioningImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const profileOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/provisioning_profile",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ProvisioningProfileResponse
        },
        400: {
            bodyMapper: Mappers.PathsI43JzkV01AppsOwnerNameAppNameReleasesReleaseIdProvisioningProfileGetResponses400ContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.releaseId2
    ],
    headerParameters: [Parameters.accept],
    serializer
};