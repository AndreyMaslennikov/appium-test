/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CodePushDeploymentReleaseRollbackOptionalParams,
  CodePushDeploymentReleaseRollbackResponse
} from "../models";

/** Interface representing a CodePushDeploymentRelease. */
export interface CodePushDeploymentRelease {
  /**
   * Rollback the latest or a specific release for an app deployment
   * @param deploymentName deployment name
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  rollback(
    deploymentName: string,
    ownerName: string,
    appName: string,
    options?: CodePushDeploymentReleaseRollbackOptionalParams
  ): Promise<CodePushDeploymentReleaseRollbackResponse>;
}