"use strict";
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgInvitationsImpl = void 0;
const coreClient = require("@azure/core-client");
const Mappers = require("../models/mappers");
const Parameters = require("../models/parameters");
/** Class containing OrgInvitations operations. */
class OrgInvitationsImpl {
    /**
     * Initialize a new instance of the class OrgInvitations class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Rejects a pending organization invitation
     * @param invitationToken The app invitation token that was sent to the user
     * @param options The options parameters.
     */
    reject(invitationToken, options) {
        return this.client.sendOperationRequest({ invitationToken, options }, rejectOperationSpec);
    }
    /**
     * Accepts a pending organization invitation for the specified user
     * @param invitationToken The app invitation token that was sent to the user
     * @param options The options parameters.
     */
    accept(invitationToken, options) {
        return this.client.sendOperationRequest({ invitationToken, options }, acceptOperationSpec);
    }
    /**
     * Removes a user's invitation to an organization
     * @param orgName The organization's name
     * @param email The email address of the user to send the password reset mail to.
     * @param options The options parameters.
     */
    revoke(orgName, email, options) {
        return this.client.sendOperationRequest({ orgName, email, options }, revokeOperationSpec);
    }
    /**
     * Cancels an existing organization invitation for the user and sends a new one
     * @param orgName The organization's name
     * @param email The email address of the user to send the password reset mail to.
     * @param options The options parameters.
     */
    sendNewInvitation(orgName, email, options) {
        return this.client.sendOperationRequest({ orgName, email, options }, sendNewInvitationOperationSpec);
    }
    /**
     * Allows the role of an invited user to be changed
     * @param orgName The organization's name
     * @param email The email address of the user to send the password reset mail to.
     * @param options The options parameters.
     */
    update(orgName, email, options) {
        return this.client.sendOperationRequest({ orgName, email, options }, updateOperationSpec);
    }
    /**
     * Invites a new or existing user to an organization
     * @param orgName The organization's name
     * @param userEmail The user's email address
     * @param options The options parameters.
     */
    create(orgName, userEmail, options) {
        return this.client.sendOperationRequest({ orgName, userEmail, options }, createOperationSpec);
    }
    /**
     * Removes a user's invitation to an organization
     * @param orgName The organization's name
     * @param userEmail The user's email address
     * @param options The options parameters.
     */
    delete(orgName, userEmail, options) {
        return this.client.sendOperationRequest({ orgName, userEmail, options }, deleteOperationSpec);
    }
    /**
     * Gets the pending invitations for the organization
     * @param orgName The organization's name
     * @param options The options parameters.
     */
    listPending(orgName, options) {
        return this.client.sendOperationRequest({ orgName, options }, listPendingOperationSpec);
    }
}
exports.OrgInvitationsImpl = OrgInvitationsImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const rejectOperationSpec = {
    path: "/v0.1/user/invitations/orgs/{invitation_token}/reject",
    httpMethod: "POST",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.Paths1Me00QfV01UserInvitationsOrgsInvitationTokenRejectPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.invitationToken],
    headerParameters: [Parameters.accept],
    serializer
};
const acceptOperationSpec = {
    path: "/v0.1/user/invitations/orgs/{invitation_token}/accept",
    httpMethod: "POST",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.PathsWyg1WoV01UserInvitationsOrgsInvitationTokenAcceptPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.invitationToken],
    headerParameters: [Parameters.accept],
    serializer
};
const revokeOperationSpec = {
    path: "/v0.1/orgs/{org_name}/invitations/{email}/revoke",
    httpMethod: "POST",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.Paths1Qkfv3PV01OrgsOrgNameInvitationsEmailRevokePostResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.orgName, Parameters.email],
    headerParameters: [Parameters.accept],
    serializer
};
const sendNewInvitationOperationSpec = {
    path: "/v0.1/orgs/{org_name}/invitations/{email}/resend",
    httpMethod: "POST",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.Paths1W4JklnV01OrgsOrgNameInvitationsEmailResendPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { role: ["options", "role"] },
        mapper: Mappers.PathsMtzmgwV01OrgsOrgNameInvitationsEmailResendPostRequestbodyContentApplicationJsonSchema
    },
    urlParameters: [Parameters.$host, Parameters.orgName, Parameters.email],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const updateOperationSpec = {
    path: "/v0.1/orgs/{org_name}/invitations/{email}",
    httpMethod: "PATCH",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.Paths1B4403V01OrgsOrgNameInvitationsEmailPatchResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { role: ["options", "role"] },
        mapper: Object.assign(Object.assign({}, Mappers.Paths8S96O5V01OrgsOrgNameInvitationsEmailPatchRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [Parameters.$host, Parameters.orgName, Parameters.email],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const createOperationSpec = {
    path: "/v0.1/orgs/{org_name}/invitations",
    httpMethod: "POST",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.PathsIlk0YtV01OrgsOrgNameInvitationsPostResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { userEmail: ["userEmail"], role: ["options", "role"] },
        mapper: Object.assign(Object.assign({}, Mappers.PathsVoxne2V01OrgsOrgNameInvitationsPostRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [Parameters.$host, Parameters.orgName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const deleteOperationSpec = {
    path: "/v0.1/orgs/{org_name}/invitations",
    httpMethod: "DELETE",
    responses: {
        204: {},
        default: {
            bodyMapper: Mappers.Paths1PjqhddV01OrgsOrgNameInvitationsDeleteResponsesDefaultContentApplicationJsonSchema
        }
    },
    requestBody: {
        parameterPath: { userEmail: ["userEmail"] },
        mapper: Object.assign(Object.assign({}, Mappers.Paths2KqsncV01OrgsOrgNameInvitationsDeleteRequestbodyContentApplicationJsonSchema), { required: true })
    },
    urlParameters: [Parameters.$host, Parameters.orgName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const listPendingOperationSpec = {
    path: "/v0.1/orgs/{org_name}/invitations",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Paths1Hzhjt9V01OrgsOrgNameInvitationsGetResponses200ContentApplicationJsonSchemaItems"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.PathsFqvnp1V01OrgsOrgNameInvitationsGetResponsesDefaultContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.orgName],
    headerParameters: [Parameters.accept],
    serializer
};
