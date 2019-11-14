/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { JobApplicationSnapshot_Certificates } from './JobApplicationSnapshot_Certificates';
/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_Certificates]] entity.
 */
export declare class JobApplicationSnapshot_CertificatesRequestBuilder extends RequestBuilder<JobApplicationSnapshot_Certificates> {
    /**
     * Returns a request builder for retrieving one `JobApplicationSnapshot_Certificates` entity based on its keys.
     * @param backgroundElementId Key property. See [[JobApplicationSnapshot_Certificates.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_Certificates` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<JobApplicationSnapshot_Certificates>;
    /**
     * Returns a request builder for querying all `JobApplicationSnapshot_Certificates` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_Certificates` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationSnapshot_Certificates>;
}
//# sourceMappingURL=JobApplicationSnapshot_CertificatesRequestBuilder.d.ts.map