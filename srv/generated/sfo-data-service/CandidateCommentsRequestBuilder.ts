/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { CandidateComments } from './CandidateComments';

/**
 * Request builder class for operations supported on the [[CandidateComments]] entity.
 */
export class CandidateCommentsRequestBuilder extends RequestBuilder<CandidateComments> {
  /**
   * Returns a request builder for retrieving one `CandidateComments` entity based on its keys.
   * @param commentId Key property. See [[CandidateComments.commentId]].
   * @returns A request builder for creating requests to retrieve one `CandidateComments` entity based on its keys.
   */
  getByKey(commentId: BigNumber): GetByKeyRequestBuilder<CandidateComments> {
    return new GetByKeyRequestBuilder(CandidateComments, { commentId: commentId });
  }

  /**
   * Returns a request builder for querying all `CandidateComments` entities.
   * @returns A request builder for creating requests to retrieve all `CandidateComments` entities.
   */
  getAll(): GetAllRequestBuilder<CandidateComments> {
    return new GetAllRequestBuilder(CandidateComments);
  }

  /**
   * Returns a request builder for creating a `CandidateComments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CandidateComments`.
   */
  create(entity: CandidateComments): CreateRequestBuilder<CandidateComments> {
    return new CreateRequestBuilder(CandidateComments, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CandidateComments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CandidateComments`.
   */
  update(entity: CandidateComments): UpdateRequestBuilder<CandidateComments> {
    return new UpdateRequestBuilder(CandidateComments, entity);
  }
}
