/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { JobApplicationSnapshot_Education } from './JobApplicationSnapshot_Education';
/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_Education]] entity.
 */
export declare class JobApplicationSnapshot_EducationRequestBuilder extends RequestBuilder<JobApplicationSnapshot_Education> {
    /**
     * Returns a request builder for retrieving one `JobApplicationSnapshot_Education` entity based on its keys.
     * @param backgroundElementId Key property. See [[JobApplicationSnapshot_Education.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_Education` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<JobApplicationSnapshot_Education>;
    /**
     * Returns a request builder for querying all `JobApplicationSnapshot_Education` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_Education` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationSnapshot_Education>;
}
//# sourceMappingURL=JobApplicationSnapshot_EducationRequestBuilder.d.ts.map