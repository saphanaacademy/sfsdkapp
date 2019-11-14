/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { CandidateBackground_InsideWorkExperience } from './CandidateBackground_InsideWorkExperience';
/**
 * Request builder class for operations supported on the [[CandidateBackground_InsideWorkExperience]] entity.
 */
export declare class CandidateBackground_InsideWorkExperienceRequestBuilder extends RequestBuilder<CandidateBackground_InsideWorkExperience> {
    /**
     * Returns a request builder for retrieving one `CandidateBackground_InsideWorkExperience` entity based on its keys.
     * @param backgroundElementId Key property. See [[CandidateBackground_InsideWorkExperience.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `CandidateBackground_InsideWorkExperience` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<CandidateBackground_InsideWorkExperience>;
    /**
     * Returns a request builder for querying all `CandidateBackground_InsideWorkExperience` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateBackground_InsideWorkExperience` entities.
     */
    getAll(): GetAllRequestBuilder<CandidateBackground_InsideWorkExperience>;
    /**
     * Returns a request builder for creating a `CandidateBackground_InsideWorkExperience` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateBackground_InsideWorkExperience`.
     */
    create(entity: CandidateBackground_InsideWorkExperience): CreateRequestBuilder<CandidateBackground_InsideWorkExperience>;
    /**
     * Returns a request builder for updating an entity of type `CandidateBackground_InsideWorkExperience`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateBackground_InsideWorkExperience`.
     */
    update(entity: CandidateBackground_InsideWorkExperience): UpdateRequestBuilder<CandidateBackground_InsideWorkExperience>;
}
//# sourceMappingURL=CandidateBackground_InsideWorkExperienceRequestBuilder.d.ts.map