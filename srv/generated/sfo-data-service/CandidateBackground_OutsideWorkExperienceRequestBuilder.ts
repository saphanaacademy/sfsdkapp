/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { CandidateBackground_OutsideWorkExperience } from './CandidateBackground_OutsideWorkExperience';

/**
 * Request builder class for operations supported on the [[CandidateBackground_OutsideWorkExperience]] entity.
 */
export class CandidateBackground_OutsideWorkExperienceRequestBuilder extends RequestBuilder<CandidateBackground_OutsideWorkExperience> {
  /**
   * Returns a request builder for retrieving one `CandidateBackground_OutsideWorkExperience` entity based on its keys.
   * @param backgroundElementId Key property. See [[CandidateBackground_OutsideWorkExperience.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `CandidateBackground_OutsideWorkExperience` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<CandidateBackground_OutsideWorkExperience> {
    return new GetByKeyRequestBuilder(CandidateBackground_OutsideWorkExperience, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `CandidateBackground_OutsideWorkExperience` entities.
   * @returns A request builder for creating requests to retrieve all `CandidateBackground_OutsideWorkExperience` entities.
   */
  getAll(): GetAllRequestBuilder<CandidateBackground_OutsideWorkExperience> {
    return new GetAllRequestBuilder(CandidateBackground_OutsideWorkExperience);
  }

  /**
   * Returns a request builder for creating a `CandidateBackground_OutsideWorkExperience` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CandidateBackground_OutsideWorkExperience`.
   */
  create(entity: CandidateBackground_OutsideWorkExperience): CreateRequestBuilder<CandidateBackground_OutsideWorkExperience> {
    return new CreateRequestBuilder(CandidateBackground_OutsideWorkExperience, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CandidateBackground_OutsideWorkExperience`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CandidateBackground_OutsideWorkExperience`.
   */
  update(entity: CandidateBackground_OutsideWorkExperience): UpdateRequestBuilder<CandidateBackground_OutsideWorkExperience> {
    return new UpdateRequestBuilder(CandidateBackground_OutsideWorkExperience, entity);
  }
}
