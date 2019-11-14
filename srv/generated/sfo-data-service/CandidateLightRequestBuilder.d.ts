/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { CandidateLight } from './CandidateLight';
/**
 * Request builder class for operations supported on the [[CandidateLight]] entity.
 */
export declare class CandidateLightRequestBuilder extends RequestBuilder<CandidateLight> {
    /**
     * Returns a request builder for retrieving one `CandidateLight` entity based on its keys.
     * @param candidateId Key property. See [[CandidateLight.candidateId]].
     * @returns A request builder for creating requests to retrieve one `CandidateLight` entity based on its keys.
     */
    getByKey(candidateId: BigNumber): GetByKeyRequestBuilder<CandidateLight>;
    /**
     * Returns a request builder for querying all `CandidateLight` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateLight` entities.
     */
    getAll(): GetAllRequestBuilder<CandidateLight>;
    /**
     * Returns a request builder for creating a `CandidateLight` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateLight`.
     */
    create(entity: CandidateLight): CreateRequestBuilder<CandidateLight>;
    /**
     * Returns a request builder for updating an entity of type `CandidateLight`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateLight`.
     */
    update(entity: CandidateLight): UpdateRequestBuilder<CandidateLight>;
}
//# sourceMappingURL=CandidateLightRequestBuilder.d.ts.map