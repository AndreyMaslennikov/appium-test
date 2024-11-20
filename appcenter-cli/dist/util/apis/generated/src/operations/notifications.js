"use strict";
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsImpl = void 0;
const coreClient = require("@azure/core-client");
const Mappers = require("../models/mappers");
const Parameters = require("../models/parameters");
/** Class containing Notifications operations. */
class NotificationsImpl {
    /**
     * Initialize a new instance of the class Notifications class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get Default email notification settings for the user
     * @param options The options parameters.
     */
    getUserEmailSettings(options) {
        return this.client.sendOperationRequest({ options }, getUserEmailSettingsOperationSpec);
    }
    /**
     * Get Email notification settings of user for a particular app
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    getAppEmailSettings(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, getAppEmailSettingsOperationSpec);
    }
}
exports.NotificationsImpl = NotificationsImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getUserEmailSettingsOperationSpec = {
    path: "/v0.1/user/notifications/emailSettings",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1GbpowzV01UserNotificationsEmailsettingsGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths3OiijqV01UserNotificationsEmailsettingsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const getAppEmailSettingsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/notifications/emailSettings",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths19Z9V3IV01AppsOwnerNameAppNameNotificationsEmailsettingsGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1Jg75I3V01AppsOwnerNameAppNameNotificationsEmailsettingsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
