/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { JobApplicationSnapshot_Languages } from './JobApplicationSnapshot_Languages';

/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_Languages]] entity.
 */
export class JobApplicationSnapshot_LanguagesRequestBuilder extends RequestBuilder<JobApplicationSnapshot_Languages> {
  /**
   * Returns a request builder for retrieving one `JobApplicationSnapshot_Languages` entity based on its keys.
   * @param backgroundElementId Key property. See [[JobApplicationSnapshot_Languages.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_Languages` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<JobApplicationSnapshot_Languages> {
    return new GetByKeyRequestBuilder(JobApplicationSnapshot_Languages, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `JobApplicationSnapshot_Languages` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_Languages` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationSnapshot_Languages> {
    return new GetAllRequestBuilder(JobApplicationSnapshot_Languages);
  }
}
