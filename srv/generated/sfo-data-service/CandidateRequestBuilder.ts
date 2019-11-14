/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { Candidate } from './Candidate';

/**
 * Request builder class for operations supported on the [[Candidate]] entity.
 */
export class CandidateRequestBuilder extends RequestBuilder<Candidate> {
  /**
   * Returns a request builder for retrieving one `Candidate` entity based on its keys.
   * @param candidateId Key property. See [[Candidate.candidateId]].
   * @returns A request builder for creating requests to retrieve one `Candidate` entity based on its keys.
   */
  getByKey(candidateId: BigNumber): GetByKeyRequestBuilder<Candidate> {
    return new GetByKeyRequestBuilder(Candidate, { candidateId: candidateId });
  }

  /**
   * Returns a request builder for querying all `Candidate` entities.
   * @returns A request builder for creating requests to retrieve all `Candidate` entities.
   */
  getAll(): GetAllRequestBuilder<Candidate> {
    return new GetAllRequestBuilder(Candidate);
  }

  /**
   * Returns a request builder for creating a `Candidate` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Candidate`.
   */
  create(entity: Candidate): CreateRequestBuilder<Candidate> {
    return new CreateRequestBuilder(Candidate, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Candidate`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Candidate`.
   */
  update(entity: Candidate): UpdateRequestBuilder<Candidate> {
    return new UpdateRequestBuilder(Candidate, entity);
  }
}
