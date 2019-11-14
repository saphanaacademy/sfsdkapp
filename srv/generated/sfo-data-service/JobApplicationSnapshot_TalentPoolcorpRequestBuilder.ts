/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { JobApplicationSnapshot_TalentPoolcorp } from './JobApplicationSnapshot_TalentPoolcorp';

/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_TalentPoolcorp]] entity.
 */
export class JobApplicationSnapshot_TalentPoolcorpRequestBuilder extends RequestBuilder<JobApplicationSnapshot_TalentPoolcorp> {
  /**
   * Returns a request builder for retrieving one `JobApplicationSnapshot_TalentPoolcorp` entity based on its keys.
   * @param backgroundElementId Key property. See [[JobApplicationSnapshot_TalentPoolcorp.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_TalentPoolcorp` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<JobApplicationSnapshot_TalentPoolcorp> {
    return new GetByKeyRequestBuilder(JobApplicationSnapshot_TalentPoolcorp, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `JobApplicationSnapshot_TalentPoolcorp` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_TalentPoolcorp` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationSnapshot_TalentPoolcorp> {
    return new GetAllRequestBuilder(JobApplicationSnapshot_TalentPoolcorp);
  }
}
