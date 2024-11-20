"use strict";
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingAggregatedInformationImpl = void 0;
const coreClient = require("@azure/core-client");
const Mappers = require("../models/mappers");
const Parameters = require("../models/parameters");
/** Class containing BillingAggregatedInformation operations. */
class BillingAggregatedInformationImpl {
    /**
     * Initialize a new instance of the class BillingAggregatedInformation class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Aggregated Billing Information for a given Organization.
     * @param orgName The name of the Organization
     * @param options The options parameters.
     */
    getForOrg(orgName, options) {
        return this.client.sendOperationRequest({ orgName, options }, getForOrgOperationSpec);
    }
    /**
     * Aggregated Billing Information for the requesting user and the organizations in which the user is an
     * admin.
     * @param options The options parameters.
     */
    getAll(options) {
        return this.client.sendOperationRequest({ options }, getAllOperationSpec);
    }
    /**
     * Aggregated Billing Information for owner of a given app.
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    getByApp(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, getByAppOperationSpec);
    }
}
exports.BillingAggregatedInformationImpl = BillingAggregatedInformationImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getForOrgOperationSpec = {
    path: "/v0.1/orgs/{orgName}/billing/aggregated",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsI4V0ItV01OrgsOrgnameBillingAggregatedGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths17En3P7V01OrgsOrgnameBillingAggregatedGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.service,
        Parameters.period,
        Parameters.showOriginalPlans
    ],
    urlParameters: [Parameters.$host, Parameters.orgName1],
    headerParameters: [Parameters.accept],
    serializer
};
const getAllOperationSpec = {
    path: "/v0.1/billing/allAccountsAggregated",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths19Yz4JgV01BillingAllaccountsaggregatedGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1Pm9ZzuV01BillingAllaccountsaggregatedGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.showOriginalPlans,
        Parameters.service1,
        Parameters.period1
    ],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const getByAppOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/billing/aggregated",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths5MjbktV01AppsOwnerNameAppNameBillingAggregatedGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsN4OwfxV01AppsOwnerNameAppNameBillingAggregatedGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.showOriginalPlans,
        Parameters.service2,
        Parameters.period2
    ],
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
