"use strict";
// Management for the current environment.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortalUrlForEndpoint = exports.defaultEnvironmentName = exports.allEnvironments = exports.environments = exports.appCenterPortalEndpointEnvVar = exports.appCenterLoginEndpointEnvVar = exports.appCenterEndpointEnvVar = void 0;
const constants_1 = require("../misc/constants");
exports.appCenterEndpointEnvVar = "APPCENTER_ENDPOINT";
exports.appCenterLoginEndpointEnvVar = "APPCENTER_LOGIN_ENDPOINT";
exports.appCenterPortalEndpointEnvVar = "APPCENTER_PORTAL_ENDPOINT";
// Default environment data
const environmentsData = {
    defaultEnvironment: "prod",
    environments: {
        int: {
            endpoint: "https://portal-server-web-int-pme.dev-pme.avalanch.es/api",
            loginEndpoint: "https://portal-server-web-int-pme.dev-pme.avalanch.es/cli-login",
            portalEndpoint: "https://portal-server-web-int-pme.dev-pme.avalanch.es",
            description: "Integration",
        },
        prod: {
            endpoint: "https://api.appcenter.ms",
            loginEndpoint: "https://appcenter.ms/cli-login",
            portalEndpoint: "https://appcenter.ms",
            description: "Production",
        },
        local: {
            endpoint: process.env[exports.appCenterEndpointEnvVar] || constants_1.localEndpoint,
            loginEndpoint: process.env[exports.appCenterLoginEndpointEnvVar] || null,
            portalEndpoint: process.env[exports.appCenterPortalEndpointEnvVar] || "http://localhost:8080",
            description: "Local Development",
        },
    },
};
function environments(environmentName = environmentsData.defaultEnvironment) {
    return environmentsData.environments[environmentName];
}
exports.environments = environments;
function allEnvironments() {
    return environmentsData;
}
exports.allEnvironments = allEnvironments;
function defaultEnvironmentName() {
    return environmentsData.defaultEnvironment;
}
exports.defaultEnvironmentName = defaultEnvironmentName;
function getPortalUrlForEndpoint(endpoint) {
    for (const environmentName of Object.keys(environmentsData.environments)) {
        const environment = environmentsData.environments[environmentName];
        if (environment.endpoint === endpoint) {
            return environment.portalEndpoint;
        }
    }
    throw new Error(`Unknown API endpoint - ${endpoint}`);
}
exports.getPortalUrlForEndpoint = getPortalUrlForEndpoint;