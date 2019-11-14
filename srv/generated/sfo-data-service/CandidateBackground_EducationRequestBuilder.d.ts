/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { CandidateBackground_Education } from './CandidateBackground_Education';
/**
 * Request builder class for operations supported on the [[CandidateBackground_Education]] entity.
 */
export declare class CandidateBackground_EducationRequestBuilder extends RequestBuilder<CandidateBackground_Education> {
    /**
     * Returns a request builder for retrieving one `CandidateBackground_Education` entity based on its keys.
     * @param backgroundElementId Key property. See [[CandidateBackground_Education.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `CandidateBackground_Education` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<CandidateBackground_Education>;
    /**
     * Returns a request builder for querying all `CandidateBackground_Education` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateBackground_Education` entities.
     */
    getAll(): GetAllRequestBuilder<CandidateBackground_Education>;
    /**
     * Returns a request builder for creating a `CandidateBackground_Education` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateBackground_Education`.
     */
    create(entity: CandidateBackground_Education): CreateRequestBuilder<CandidateBackground_Education>;
    /**
     * Returns a request builder for updating an entity of type `CandidateBackground_Education`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateBackground_Education`.
     */
    update(entity: CandidateBackground_Education): UpdateRequestBuilder<CandidateBackground_Education>;
}
//# sourceMappingURL=CandidateBackground_EducationRequestBuilder.d.ts.map