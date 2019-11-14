/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { JobApplicationSnapshot_OutsideWorkExperience } from './JobApplicationSnapshot_OutsideWorkExperience';

/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_OutsideWorkExperience]] entity.
 */
export class JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder extends RequestBuilder<JobApplicationSnapshot_OutsideWorkExperience> {
  /**
   * Returns a request builder for retrieving one `JobApplicationSnapshot_OutsideWorkExperience` entity based on its keys.
   * @param backgroundElementId Key property. See [[JobApplicationSnapshot_OutsideWorkExperience.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_OutsideWorkExperience` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<JobApplicationSnapshot_OutsideWorkExperience> {
    return new GetByKeyRequestBuilder(JobApplicationSnapshot_OutsideWorkExperience, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `JobApplicationSnapshot_OutsideWorkExperience` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_OutsideWorkExperience` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationSnapshot_OutsideWorkExperience> {
    return new GetAllRequestBuilder(JobApplicationSnapshot_OutsideWorkExperience);
  }
}
