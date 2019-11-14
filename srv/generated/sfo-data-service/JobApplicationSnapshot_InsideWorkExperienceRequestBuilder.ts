/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { JobApplicationSnapshot_InsideWorkExperience } from './JobApplicationSnapshot_InsideWorkExperience';

/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_InsideWorkExperience]] entity.
 */
export class JobApplicationSnapshot_InsideWorkExperienceRequestBuilder extends RequestBuilder<JobApplicationSnapshot_InsideWorkExperience> {
  /**
   * Returns a request builder for retrieving one `JobApplicationSnapshot_InsideWorkExperience` entity based on its keys.
   * @param backgroundElementId Key property. See [[JobApplicationSnapshot_InsideWorkExperience.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_InsideWorkExperience` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<JobApplicationSnapshot_InsideWorkExperience> {
    return new GetByKeyRequestBuilder(JobApplicationSnapshot_InsideWorkExperience, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `JobApplicationSnapshot_InsideWorkExperience` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_InsideWorkExperience` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationSnapshot_InsideWorkExperience> {
    return new GetAllRequestBuilder(JobApplicationSnapshot_InsideWorkExperience);
  }
}
