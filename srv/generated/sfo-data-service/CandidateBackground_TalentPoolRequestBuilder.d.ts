/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { CandidateBackground_TalentPool } from './CandidateBackground_TalentPool';
/**
 * Request builder class for operations supported on the [[CandidateBackground_TalentPool]] entity.
 */
export declare class CandidateBackground_TalentPoolRequestBuilder extends RequestBuilder<CandidateBackground_TalentPool> {
    /**
     * Returns a request builder for retrieving one `CandidateBackground_TalentPool` entity based on its keys.
     * @param backgroundElementId Key property. See [[CandidateBackground_TalentPool.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `CandidateBackground_TalentPool` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<CandidateBackground_TalentPool>;
    /**
     * Returns a request builder for querying all `CandidateBackground_TalentPool` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateBackground_TalentPool` entities.
     */
    getAll(): GetAllRequestBuilder<CandidateBackground_TalentPool>;
    /**
     * Returns a request builder for creating a `CandidateBackground_TalentPool` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateBackground_TalentPool`.
     */
    create(entity: CandidateBackground_TalentPool): CreateRequestBuilder<CandidateBackground_TalentPool>;
    /**
     * Returns a request builder for updating an entity of type `CandidateBackground_TalentPool`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateBackground_TalentPool`.
     */
    update(entity: CandidateBackground_TalentPool): UpdateRequestBuilder<CandidateBackground_TalentPool>;
}
//# sourceMappingURL=CandidateBackground_TalentPoolRequestBuilder.d.ts.map