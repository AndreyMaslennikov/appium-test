"use strict";
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsImpl = void 0;
const coreClient = require("@azure/core-client");
const Mappers = require("../models/mappers");
const Parameters = require("../models/parameters");
/** Class containing Errors operations. */
class ErrorsImpl {
    /**
     * Initialize a new instance of the class Errors class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get session logs by error ID
     * @param errorId The id of the error
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    listSessionLogs(errorId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorId, ownerName, appName, options }, listSessionLogsOperationSpec);
    }
    /**
     * Error attachment text.
     * @param errorId The id of the error
     * @param attachmentId Error attachment id.
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    errorAttachmentText(errorId, attachmentId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorId, attachmentId, ownerName, appName, options }, errorAttachmentTextOperationSpec);
    }
    /**
     * Error attachment location.
     * @param errorId The id of the error
     * @param attachmentId Error attachment id.
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    errorAttachmentLocation(errorId, attachmentId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorId, attachmentId, ownerName, appName, options }, errorAttachmentLocationOperationSpec);
    }
    /**
     * List error attachments.
     * @param errorId The id of the error
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    errorAttachments(errorId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorId, ownerName, appName, options }, errorAttachmentsOperationSpec);
    }
    /**
     * Errors list based on search parameters
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    errorSearch(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, errorSearchOperationSpec);
    }
    /**
     * Creates and updates the retention settings in days
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param retentionInDays
     * @param options The options parameters.
     */
    putRetentionSettings(ownerName, appName, retentionInDays, options) {
        return this.client.sendOperationRequest({ ownerName, appName, retentionInDays, options }, putRetentionSettingsOperationSpec);
    }
    /**
     * gets the retention settings in days
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    getRetentionSettings(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, getRetentionSettingsOperationSpec);
    }
    /**
     * Percentage of error-free devices by day in the time range based on the selected versions. If
     * SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash
     * devices is greater than active devices
     * @param start Start date time in data in ISO 8601 date time format
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    errorFreeDevicePercentages(start, ownerName, appName, options) {
        return this.client.sendOperationRequest({ start, ownerName, appName, options }, errorFreeDevicePercentagesOperationSpec);
    }
    /**
     * Gets the stack trace for the error group.
     * @param errorGroupId The id of the error group
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    groupErrorStackTrace(errorGroupId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, ownerName, appName, options }, groupErrorStackTraceOperationSpec);
    }
    /**
     * Top OSes of the selected error group.
     * @param errorGroupId The id of the error group
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    groupOperatingSystemCounts(errorGroupId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, ownerName, appName, options }, groupOperatingSystemCountsOperationSpec);
    }
    /**
     * Top models of the selected error group.
     * @param errorGroupId The id of the error group
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    groupModelCounts(errorGroupId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, ownerName, appName, options }, groupModelCountsOperationSpec);
    }
    /**
     * Error Stacktrace details.
     * @param errorGroupId The id of the error group
     * @param errorId The id of the error
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    errorStackTrace(errorGroupId, errorId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, errorId, ownerName, appName, options }, errorStackTraceOperationSpec);
    }
    /**
     * Error location.
     * @param errorGroupId The id of the error group
     * @param errorId The id of the error
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    errorLocation(errorGroupId, errorId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, errorId, ownerName, appName, options }, errorLocationOperationSpec);
    }
    /**
     * Download details for a specific error.
     * @param errorGroupId The id of the error group
     * @param errorId The id of the error
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    errorDownload(errorGroupId, errorId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, errorId, ownerName, appName, options }, errorDownloadOperationSpec);
    }
    /**
     * Error details.
     * @param errorGroupId The id of the error group
     * @param errorId The id of the error
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    getErrorDetails(errorGroupId, errorId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, errorId, ownerName, appName, options }, getErrorDetailsOperationSpec);
    }
    /**
     * Delete a specific error and related attachments and blobs for an app. Searchable data will not be
     * deleted immediately and may take up to 30 days.
     * @param errorGroupId The id of the error group
     * @param errorId The id of the error
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    deleteError(errorGroupId, errorId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, errorId, ownerName, appName, options }, deleteErrorOperationSpec);
    }
    /**
     * Latest error details.
     * @param errorGroupId The id of the error group
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    latestErrorDetails(errorGroupId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, ownerName, appName, options }, latestErrorDetailsOperationSpec);
    }
    /**
     * Get all errors for group
     * @param errorGroupId The id of the error group
     * @param start Start date time in data in ISO 8601 date time format
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    listForGroup(errorGroupId, start, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, start, ownerName, appName, options }, listForGroupOperationSpec);
    }
    /**
     * Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is
     * greater than active devices
     * @param errorGroupId The id of the error group
     * @param start Start date time in data in ISO 8601 date time format
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    groupErrorFreeDevicePercentages(errorGroupId, start, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, start, ownerName, appName, options }, groupErrorFreeDevicePercentagesOperationSpec);
    }
    /**
     * Count of errors by day in the time range of the selected error group with selected version
     * @param errorGroupId The id of the error group
     * @param start Start date time in data in ISO 8601 date time format
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    groupCountsPerDay(errorGroupId, start, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, start, ownerName, appName, options }, groupCountsPerDayOperationSpec);
    }
    /**
     * Error group details
     * @param errorGroupId The id of the error group
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    groupDetails(errorGroupId, ownerName, appName, options) {
        return this.client.sendOperationRequest({ errorGroupId, ownerName, appName, options }, groupDetailsOperationSpec);
    }
    /**
     * Update error group state
     * @param errorGroupId The id of the error group
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param state
     * @param options The options parameters.
     */
    updateState(errorGroupId, ownerName, appName, state, options) {
        return this.client.sendOperationRequest({ errorGroupId, ownerName, appName, state, options }, updateStateOperationSpec);
    }
    /**
     * Error groups list based on search parameters
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    errorGroupsSearch(ownerName, appName, options) {
        return this.client.sendOperationRequest({ ownerName, appName, options }, errorGroupsSearchOperationSpec);
    }
    /**
     * List of error groups
     * @param start Start date time in data in ISO 8601 date time format
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    groupList(start, ownerName, appName, options) {
        return this.client.sendOperationRequest({ start, ownerName, appName, options }, groupListOperationSpec);
    }
    /**
     * Count of crashes or errors by day in the time range based the selected versions. If
     * SingleErrorTypeParameter is not provided, defaults to handlederror.
     * @param start Start date time in data in ISO 8601 date time format
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    countsPerDay(start, ownerName, appName, options) {
        return this.client.sendOperationRequest({ start, ownerName, appName, options }, countsPerDayOperationSpec);
    }
    /**
     * Get all available versions in the time range.
     * @param start Start date time in data in ISO 8601 date time format
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    availableVersions(start, ownerName, appName, options) {
        return this.client.sendOperationRequest({ start, ownerName, appName, options }, availableVersionsOperationSpec);
    }
    /**
     * List of app builds
     * @param version test
     * @param start Start date time in data in ISO 8601 date time format
     * @param ownerName The name of the owner
     * @param appName The name of the application
     * @param options The options parameters.
     */
    appBuildsList(version, start, ownerName, appName, options) {
        return this.client.sendOperationRequest({ version, start, ownerName, appName, options }, appBuildsListOperationSpec);
    }
}
exports.ErrorsImpl = ErrorsImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const listSessionLogsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/{errorId}/sessionLogs",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsBfc8KpV01AppsOwnerNameAppNameErrorsErroridSessionlogsGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1DhmnxtV01AppsOwnerNameAppNameErrorsErroridSessionlogsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.date],
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const errorAttachmentTextOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/{errorId}/attachments/{attachmentId}/text",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths11EzzhyV01AppsOwnerNameAppNameErrorsErroridAttachmentsAttachmentidTextGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1J3SejwV01AppsOwnerNameAppNameErrorsErroridAttachmentsAttachmentidTextGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorId,
        Parameters.attachmentId1
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const errorAttachmentLocationOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/{errorId}/attachments/{attachmentId}/location",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1Pujyq9V01AppsOwnerNameAppNameErrorsErroridAttachmentsAttachmentidLocationGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths5X19N2V01AppsOwnerNameAppNameErrorsErroridAttachmentsAttachmentidLocationGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorId,
        Parameters.attachmentId1
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const errorAttachmentsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/{errorId}/attachments",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Paths1M1B7O1V01AppsOwnerNameAppNameErrorsErroridAttachmentsGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.PathsB1HukrV01AppsOwnerNameAppNameErrorsErroridAttachmentsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const errorSearchOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/search",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths10EnauhV01AppsOwnerNameAppNameErrorsSearchGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths12BwkkqV01AppsOwnerNameAppNameErrorsSearchGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.filter,
        Parameters.q,
        Parameters.order,
        Parameters.sort,
        Parameters.top2,
        Parameters.skip
    ],
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const putRetentionSettingsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/retention_settings",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Mappers.PathsW5Guk3V01AppsOwnerNameAppNameErrorsRetentionSettingsPutResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1Pjyuj9V01AppsOwnerNameAppNameErrorsRetentionSettingsPutResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { retentionInDays: ["retentionInDays"] },
        mapper: Object.assign(Object.assign({}, Mappers.Paths1V83InnV01AppsOwnerNameAppNameErrorsRetentionSettingsPutRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const getRetentionSettingsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/retention_settings",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths4IzvtlV01AppsOwnerNameAppNameErrorsRetentionSettingsGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1EgnpuqV01AppsOwnerNameAppNameErrorsRetentionSettingsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const errorFreeDevicePercentagesOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorfreeDevicePercentages",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsXb2Xr7V01AppsOwnerNameAppNameErrorsErrorfreedevicepercentagesGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths11Dw7J1V01AppsOwnerNameAppNameErrorsErrorfreedevicepercentagesGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.start,
        Parameters.end,
        Parameters.versions,
        Parameters.appBuild,
        Parameters.errorType1
    ],
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const groupErrorStackTraceOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/stacktrace",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.DiagnosticsStackTrace
        },
        default: {
            bodyMapper: Mappers.PathsA2E4EkV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidStacktraceGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const groupOperatingSystemCountsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/operatingSystems",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsAhgr5MV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidOperatingsystemsGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1K006VjV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidOperatingsystemsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.top1],
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const groupModelCountsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/models",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsNvwrx0V01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidModelsGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1Opz894V01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidModelsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.top1],
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const errorStackTraceOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/{errorId}/stacktrace",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.DiagnosticsStackTrace
        },
        default: {
            bodyMapper: Mappers.Paths1Jybj3TV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsErroridStacktraceGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorId,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const errorLocationOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/{errorId}/location",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsPwx6QwV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsErroridLocationGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1LbtbuwV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsErroridLocationGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorId,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const errorDownloadOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/{errorId}/download",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
        },
        default: {
            bodyMapper: Mappers.PathsL404BsV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsErroridDownloadGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.format],
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorId,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getErrorDetailsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/{errorId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1GvcgvwV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsErroridGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1Bug1WoV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsErroridGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorId,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const deleteErrorOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/{errorId}",
    httpMethod: "DELETE",
    responses: {
        200: {
            bodyMapper: Mappers.PathsNvbd0FV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsErroridDeleteResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1U63Q3BV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsErroridDeleteResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorId,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const latestErrorDetailsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/latest",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths134SdxmV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsLatestGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths14Y18DhV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsLatestGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const listForGroupOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths18I7702V01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths6Yh9NlV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.top1,
        Parameters.start,
        Parameters.end,
        Parameters.model,
        Parameters.os1
    ],
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const groupErrorFreeDevicePercentagesOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errorfreeDevicePercentages",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1Eek5ByV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorfreedevicepercentagesGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsGggyq9V01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorfreedevicepercentagesGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.start, Parameters.end],
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const groupCountsPerDayOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errorCountsPerDay",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1O2Ld6PV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorcountsperdayGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsSjngesV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidErrorcountsperdayGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [Parameters.start, Parameters.end, Parameters.version],
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const groupDetailsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1Xy5MxmV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsNve630V01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const updateStateOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1W42Yn6V01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidPatchResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1Mu5I03V01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidPatchResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { state: ["state"], annotation: ["options", "annotation"] },
        mapper: Object.assign(Object.assign({}, Mappers.PathsHpm6KuV01AppsOwnerNameAppNameErrorsErrorgroupsErrorgroupidPatchRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [
        Parameters.$host,
        Parameters.ownerName,
        Parameters.appName,
        Parameters.errorGroupId
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const errorGroupsSearchOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/search",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths3Uj0Q0V01AppsOwnerNameAppNameErrorsErrorgroupsSearchGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths15I10UwV01AppsOwnerNameAppNameErrorsErrorgroupsSearchGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.filter,
        Parameters.q,
        Parameters.top2,
        Parameters.skip,
        Parameters.order1,
        Parameters.sort1
    ],
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const groupListOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorGroups",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths10KtxpjV01AppsOwnerNameAppNameErrorsErrorgroupsGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsUwsddyV01AppsOwnerNameAppNameErrorsErrorgroupsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.top1,
        Parameters.orderby,
        Parameters.start,
        Parameters.end,
        Parameters.appBuild,
        Parameters.version,
        Parameters.groupState,
        Parameters.errorType2
    ],
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const countsPerDayOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/errorCountsPerDay",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths5Bnd9KV01AppsOwnerNameAppNameErrorsErrorcountsperdayGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.PathsN8QcejV01AppsOwnerNameAppNameErrorsErrorcountsperdayGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.start,
        Parameters.end,
        Parameters.appBuild,
        Parameters.version,
        Parameters.errorType3
    ],
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const availableVersionsOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/available_versions",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1Wi49JqV01AppsOwnerNameAppNameErrorsAvailableVersionsGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths13Rlhb7V01AppsOwnerNameAppNameErrorsAvailableVersionsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.top1,
        Parameters.skip,
        Parameters.start,
        Parameters.end,
        Parameters.filter1,
        Parameters.inlinecount1,
        Parameters.errorType4
    ],
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
const appBuildsListOperationSpec = {
    path: "/v0.1/apps/{owner_name}/{app_name}/errors/availableAppBuilds",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1Cq491NV01AppsOwnerNameAppNameErrorsAvailableappbuildsGetResponses200ContentApplicationJsonSchema
        },
        default: {
            bodyMapper: Mappers.Paths1Loji0OV01AppsOwnerNameAppNameErrorsAvailableappbuildsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.top1,
        Parameters.start,
        Parameters.end,
        Parameters.version1,
        Parameters.errorType5
    ],
    urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
    headerParameters: [Parameters.accept],
    serializer
};
