/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { CandidateBackground_TalentPoolcorp } from './CandidateBackground_TalentPoolcorp';

/**
 * Request builder class for operations supported on the [[CandidateBackground_TalentPoolcorp]] entity.
 */
export class CandidateBackground_TalentPoolcorpRequestBuilder extends RequestBuilder<CandidateBackground_TalentPoolcorp> {
  /**
   * Returns a request builder for retrieving one `CandidateBackground_TalentPoolcorp` entity based on its keys.
   * @param backgroundElementId Key property. See [[CandidateBackground_TalentPoolcorp.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `CandidateBackground_TalentPoolcorp` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<CandidateBackground_TalentPoolcorp> {
    return new GetByKeyRequestBuilder(CandidateBackground_TalentPoolcorp, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `CandidateBackground_TalentPoolcorp` entities.
   * @returns A request builder for creating requests to retrieve all `CandidateBackground_TalentPoolcorp` entities.
   */
  getAll(): GetAllRequestBuilder<CandidateBackground_TalentPoolcorp> {
    return new GetAllRequestBuilder(CandidateBackground_TalentPoolcorp);
  }

  /**
   * Returns a request builder for creating a `CandidateBackground_TalentPoolcorp` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CandidateBackground_TalentPoolcorp`.
   */
  create(entity: CandidateBackground_TalentPoolcorp): CreateRequestBuilder<CandidateBackground_TalentPoolcorp> {
    return new CreateRequestBuilder(CandidateBackground_TalentPoolcorp, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CandidateBackground_TalentPoolcorp`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CandidateBackground_TalentPoolcorp`.
   */
  update(entity: CandidateBackground_TalentPoolcorp): UpdateRequestBuilder<CandidateBackground_TalentPoolcorp> {
    return new UpdateRequestBuilder(CandidateBackground_TalentPoolcorp, entity);
  }
}
