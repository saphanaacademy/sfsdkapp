/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, ODataBatchRequestBuilder, ODataBatchChangeSet } from '@sap/cloud-sdk-core';
import { CandidateBackground_InsideWorkExperience, CandidateLight, CandidateComments, CandidateBackground_Education, Candidate, JobApplicationSnapshot_TalentPoolcorp, JobApplicationSnapshot_Education, JobApplicationSnapshot_TalentPool, CandidateBackground_OutsideWorkExperience, CandidateBackground_Certificates, CandidateBackground_Languages, JobApplicationSnapshot_InsideWorkExperience, JobApplicationSnapshot_Certificates, JobApplicationSnapshot_OutsideWorkExperience, JobApplicationSnapshot_Languages, CandidateBackground_TalentPool, CandidateProfileExtension, CandidateTags, CandidateBackground_TalentPoolcorp } from './index';

/**
 * Batch builder for operations supported on the [[SfoDataService]] service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadSfoDataServiceRequestBuilder | ODataBatchChangeSet>): ODataBatchRequestBuilder {
  return new ODataBatchRequestBuilder(defaultSfoDataServicePath, requests, map);
}

/**
 * Change set constructor consists of write operations supported on the [[SfoDataService]] service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: WriteSfoDataServiceRequestBuilder[]): ODataBatchChangeSet {
  return new ODataBatchChangeSet(requests);
}

export const defaultSfoDataServicePath = '/sap/opu/odata/sap/SFOData';
const map = { 'CandidateBackground_InsideWorkExperience': CandidateBackground_InsideWorkExperience, 'CandidateLight': CandidateLight, 'CandidateComments': CandidateComments, 'CandidateBackground_Education': CandidateBackground_Education, 'Candidate': Candidate, 'JobApplicationSnapshot_TalentPoolcorp': JobApplicationSnapshot_TalentPoolcorp, 'JobApplicationSnapshot_Education': JobApplicationSnapshot_Education, 'JobApplicationSnapshot_TalentPool': JobApplicationSnapshot_TalentPool, 'CandidateBackground_OutsideWorkExperience': CandidateBackground_OutsideWorkExperience, 'CandidateBackground_Certificates': CandidateBackground_Certificates, 'CandidateBackground_Languages': CandidateBackground_Languages, 'JobApplicationSnapshot_InsideWorkExperience': JobApplicationSnapshot_InsideWorkExperience, 'JobApplicationSnapshot_Certificates': JobApplicationSnapshot_Certificates, 'JobApplicationSnapshot_OutsideWorkExperience': JobApplicationSnapshot_OutsideWorkExperience, 'JobApplicationSnapshot_Languages': JobApplicationSnapshot_Languages, 'CandidateBackground_TalentPool': CandidateBackground_TalentPool, 'CandidateProfileExtension': CandidateProfileExtension, 'CandidateTags': CandidateTags, 'CandidateBackground_TalentPoolcorp': CandidateBackground_TalentPoolcorp };
export type ReadSfoDataServiceRequestBuilder = GetAllRequestBuilder<CandidateBackground_InsideWorkExperience> | GetAllRequestBuilder<CandidateLight> | GetAllRequestBuilder<CandidateComments> | GetAllRequestBuilder<CandidateBackground_Education> | GetAllRequestBuilder<Candidate> | GetAllRequestBuilder<JobApplicationSnapshot_TalentPoolcorp> | GetAllRequestBuilder<JobApplicationSnapshot_Education> | GetAllRequestBuilder<JobApplicationSnapshot_TalentPool> | GetAllRequestBuilder<CandidateBackground_OutsideWorkExperience> | GetAllRequestBuilder<CandidateBackground_Certificates> | GetAllRequestBuilder<CandidateBackground_Languages> | GetAllRequestBuilder<JobApplicationSnapshot_InsideWorkExperience> | GetAllRequestBuilder<JobApplicationSnapshot_Certificates> | GetAllRequestBuilder<JobApplicationSnapshot_OutsideWorkExperience> | GetAllRequestBuilder<JobApplicationSnapshot_Languages> | GetAllRequestBuilder<CandidateBackground_TalentPool> | GetAllRequestBuilder<CandidateProfileExtension> | GetAllRequestBuilder<CandidateTags> | GetAllRequestBuilder<CandidateBackground_TalentPoolcorp> | GetByKeyRequestBuilder<CandidateBackground_InsideWorkExperience> | GetByKeyRequestBuilder<CandidateLight> | GetByKeyRequestBuilder<CandidateComments> | GetByKeyRequestBuilder<CandidateBackground_Education> | GetByKeyRequestBuilder<Candidate> | GetByKeyRequestBuilder<JobApplicationSnapshot_TalentPoolcorp> | GetByKeyRequestBuilder<JobApplicationSnapshot_Education> | GetByKeyRequestBuilder<JobApplicationSnapshot_TalentPool> | GetByKeyRequestBuilder<CandidateBackground_OutsideWorkExperience> | GetByKeyRequestBuilder<CandidateBackground_Certificates> | GetByKeyRequestBuilder<CandidateBackground_Languages> | GetByKeyRequestBuilder<JobApplicationSnapshot_InsideWorkExperience> | GetByKeyRequestBuilder<JobApplicationSnapshot_Certificates> | GetByKeyRequestBuilder<JobApplicationSnapshot_OutsideWorkExperience> | GetByKeyRequestBuilder<JobApplicationSnapshot_Languages> | GetByKeyRequestBuilder<CandidateBackground_TalentPool> | GetByKeyRequestBuilder<CandidateProfileExtension> | GetByKeyRequestBuilder<CandidateTags> | GetByKeyRequestBuilder<CandidateBackground_TalentPoolcorp>;
export type WriteSfoDataServiceRequestBuilder = CreateRequestBuilder<CandidateBackground_InsideWorkExperience> | UpdateRequestBuilder<CandidateBackground_InsideWorkExperience> | DeleteRequestBuilder<CandidateBackground_InsideWorkExperience> | CreateRequestBuilder<CandidateLight> | UpdateRequestBuilder<CandidateLight> | DeleteRequestBuilder<CandidateLight> | CreateRequestBuilder<CandidateComments> | UpdateRequestBuilder<CandidateComments> | DeleteRequestBuilder<CandidateComments> | CreateRequestBuilder<CandidateBackground_Education> | UpdateRequestBuilder<CandidateBackground_Education> | DeleteRequestBuilder<CandidateBackground_Education> | CreateRequestBuilder<Candidate> | UpdateRequestBuilder<Candidate> | DeleteRequestBuilder<Candidate> | CreateRequestBuilder<JobApplicationSnapshot_TalentPoolcorp> | UpdateRequestBuilder<JobApplicationSnapshot_TalentPoolcorp> | DeleteRequestBuilder<JobApplicationSnapshot_TalentPoolcorp> | CreateRequestBuilder<JobApplicationSnapshot_Education> | UpdateRequestBuilder<JobApplicationSnapshot_Education> | DeleteRequestBuilder<JobApplicationSnapshot_Education> | CreateRequestBuilder<JobApplicationSnapshot_TalentPool> | UpdateRequestBuilder<JobApplicationSnapshot_TalentPool> | DeleteRequestBuilder<JobApplicationSnapshot_TalentPool> | CreateRequestBuilder<CandidateBackground_OutsideWorkExperience> | UpdateRequestBuilder<CandidateBackground_OutsideWorkExperience> | DeleteRequestBuilder<CandidateBackground_OutsideWorkExperience> | CreateRequestBuilder<CandidateBackground_Certificates> | UpdateRequestBuilder<CandidateBackground_Certificates> | DeleteRequestBuilder<CandidateBackground_Certificates> | CreateRequestBuilder<CandidateBackground_Languages> | UpdateRequestBuilder<CandidateBackground_Languages> | DeleteRequestBuilder<CandidateBackground_Languages> | CreateRequestBuilder<JobApplicationSnapshot_InsideWorkExperience> | UpdateRequestBuilder<JobApplicationSnapshot_InsideWorkExperience> | DeleteRequestBuilder<JobApplicationSnapshot_InsideWorkExperience> | CreateRequestBuilder<JobApplicationSnapshot_Certificates> | UpdateRequestBuilder<JobApplicationSnapshot_Certificates> | DeleteRequestBuilder<JobApplicationSnapshot_Certificates> | CreateRequestBuilder<JobApplicationSnapshot_OutsideWorkExperience> | UpdateRequestBuilder<JobApplicationSnapshot_OutsideWorkExperience> | DeleteRequestBuilder<JobApplicationSnapshot_OutsideWorkExperience> | CreateRequestBuilder<JobApplicationSnapshot_Languages> | UpdateRequestBuilder<JobApplicationSnapshot_Languages> | DeleteRequestBuilder<JobApplicationSnapshot_Languages> | CreateRequestBuilder<CandidateBackground_TalentPool> | UpdateRequestBuilder<CandidateBackground_TalentPool> | DeleteRequestBuilder<CandidateBackground_TalentPool> | CreateRequestBuilder<CandidateProfileExtension> | UpdateRequestBuilder<CandidateProfileExtension> | DeleteRequestBuilder<CandidateProfileExtension> | CreateRequestBuilder<CandidateTags> | UpdateRequestBuilder<CandidateTags> | DeleteRequestBuilder<CandidateTags> | CreateRequestBuilder<CandidateBackground_TalentPoolcorp> | UpdateRequestBuilder<CandidateBackground_TalentPoolcorp> | DeleteRequestBuilder<CandidateBackground_TalentPoolcorp>;
