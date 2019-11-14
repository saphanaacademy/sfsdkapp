/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { CandidateBackground_Certificates } from './CandidateBackground_Certificates';

/**
 * Request builder class for operations supported on the [[CandidateBackground_Certificates]] entity.
 */
export class CandidateBackground_CertificatesRequestBuilder extends RequestBuilder<CandidateBackground_Certificates> {
  /**
   * Returns a request builder for retrieving one `CandidateBackground_Certificates` entity based on its keys.
   * @param backgroundElementId Key property. See [[CandidateBackground_Certificates.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `CandidateBackground_Certificates` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<CandidateBackground_Certificates> {
    return new GetByKeyRequestBuilder(CandidateBackground_Certificates, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `CandidateBackground_Certificates` entities.
   * @returns A request builder for creating requests to retrieve all `CandidateBackground_Certificates` entities.
   */
  getAll(): GetAllRequestBuilder<CandidateBackground_Certificates> {
    return new GetAllRequestBuilder(CandidateBackground_Certificates);
  }

  /**
   * Returns a request builder for creating a `CandidateBackground_Certificates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CandidateBackground_Certificates`.
   */
  create(entity: CandidateBackground_Certificates): CreateRequestBuilder<CandidateBackground_Certificates> {
    return new CreateRequestBuilder(CandidateBackground_Certificates, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CandidateBackground_Certificates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CandidateBackground_Certificates`.
   */
  update(entity: CandidateBackground_Certificates): UpdateRequestBuilder<CandidateBackground_Certificates> {
    return new UpdateRequestBuilder(CandidateBackground_Certificates, entity);
  }
}
