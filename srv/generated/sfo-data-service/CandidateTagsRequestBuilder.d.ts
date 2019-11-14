/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap/cloud-sdk-core';
import { CandidateTags } from './CandidateTags';
/**
 * Request builder class for operations supported on the [[CandidateTags]] entity.
 */
export declare class CandidateTagsRequestBuilder extends RequestBuilder<CandidateTags> {
    /**
     * Returns a request builder for retrieving one `CandidateTags` entity based on its keys.
     * @param tagId Key property. See [[CandidateTags.tagId]].
     * @returns A request builder for creating requests to retrieve one `CandidateTags` entity based on its keys.
     */
    getByKey(tagId: BigNumber): GetByKeyRequestBuilder<CandidateTags>;
    /**
     * Returns a request builder for querying all `CandidateTags` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateTags` entities.
     */
    getAll(): GetAllRequestBuilder<CandidateTags>;
    /**
     * Returns a request builder for creating a `CandidateTags` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateTags`.
     */
    create(entity: CandidateTags): CreateRequestBuilder<CandidateTags>;
    /**
     * Returns a request builder for updating an entity of type `CandidateTags`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateTags`.
     */
    update(entity: CandidateTags): UpdateRequestBuilder<CandidateTags>;
    /**
     * Returns a request builder for deleting an entity of type `CandidateTags`.
     * @param tagId Key property. See [[CandidateTags.tagId]].
     * @returns A request builder for creating requests that delete an entity of type `CandidateTags`.
     */
    delete(tagId: BigNumber): DeleteRequestBuilder<CandidateTags>;
    /**
     * Returns a request builder for deleting an entity of type `CandidateTags`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CandidateTags` by taking the entity as a parameter.
     */
    delete(entity: CandidateTags): DeleteRequestBuilder<CandidateTags>;
}
//# sourceMappingURL=CandidateTagsRequestBuilder.d.ts.map