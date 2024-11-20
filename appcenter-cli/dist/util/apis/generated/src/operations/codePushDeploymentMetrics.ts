/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CodePushDeploymentMetrics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppCenterClient } from "../appCenterClient";
import {
  CodePushDeploymentMetricsGetOptionalParams,
  CodePushDeploymentMetricsGetResponse
} from "../models";

/** Class containing CodePushDeploymentMetrics operations. */
export class CodePushDeploymentMetricsImpl
  implements CodePushDeploymentMetrics {
  private readonly client: AppCenterClient;

  /**
   * Initialize a new instance of the class CodePushDeploymentMetrics class.
   * @param client Reference to the service client
   */
  constructor(client: AppCenterClient) {
    this.client = client;
  }

  /**
   * Gets all releases metrics for specified Deployment
   * @param deploymentName deployment name
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  get(
    deploymentName: string,
    ownerName: string,
    appName: string,
    options?: CodePushDeploymentMetricsGetOptionalParams
  ): Promise<CodePushDeploymentMetricsGetResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, ownerName, appName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/v0.1/apps/{owner_name}/{app_name}/deployments/{deployment_name}/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "Paths1Fpy0IjV01AppsOwnerNameAppNameDeploymentsDeploymentNameMetricsGetResponses200ContentApplicationJsonSchemaItems"
            }
          }
        }
      }
    },
    default: {
      bodyMapper:
        Mappers.Paths1U65Jj1V01AppsOwnerNameAppNameDeploymentsDeploymentNameMetricsGetResponsesDefaultContentApplicationJsonSchema
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.ownerName,
    Parameters.appName,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
