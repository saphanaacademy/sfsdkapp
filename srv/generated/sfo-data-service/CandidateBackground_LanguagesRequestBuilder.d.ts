/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { CandidateBackground_Languages } from './CandidateBackground_Languages';
/**
 * Request builder class for operations supported on the [[CandidateBackground_Languages]] entity.
 */
export declare class CandidateBackground_LanguagesRequestBuilder extends RequestBuilder<CandidateBackground_Languages> {
    /**
     * Returns a request builder for retrieving one `CandidateBackground_Languages` entity based on its keys.
     * @param backgroundElementId Key property. See [[CandidateBackground_Languages.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `CandidateBackground_Languages` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<CandidateBackground_Languages>;
    /**
     * Returns a request builder for querying all `CandidateBackground_Languages` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateBackground_Languages` entities.
     */
    getAll(): GetAllRequestBuilder<CandidateBackground_Languages>;
    /**
     * Returns a request builder for creating a `CandidateBackground_Languages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateBackground_Languages`.
     */
    create(entity: CandidateBackground_Languages): CreateRequestBuilder<CandidateBackground_Languages>;
    /**
     * Returns a request builder for updating an entity of type `CandidateBackground_Languages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateBackground_Languages`.
     */
    update(entity: CandidateBackground_Languages): UpdateRequestBuilder<CandidateBackground_Languages>;
}
//# sourceMappingURL=CandidateBackground_LanguagesRequestBuilder.d.ts.map