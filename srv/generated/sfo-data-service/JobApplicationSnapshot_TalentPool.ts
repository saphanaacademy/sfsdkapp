/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { JobApplicationSnapshot_TalentPoolRequestBuilder } from './JobApplicationSnapshot_TalentPoolRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, DateField, StringField, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "JobApplicationSnapshot_TalentPool" of service "SFOData".
 */
export class JobApplicationSnapshot_TalentPool extends Entity implements JobApplicationSnapshot_TalentPoolType {
  /**
   * Technical entity name for JobApplicationSnapshot_TalentPool.
   */
  static _entityName = 'JobApplicationSnapshot_TalentPool';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationSnapshot_TalentPool.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Application Id.
   */
  applicationId!: BigNumber;
  /**
   * Background Element Id.
   */
  backgroundElementId!: BigNumber;
  /**
   * Background Order Position.
   */
  bgOrderPos!: BigNumber;
  /**
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * Date last updated.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Comments.
   * @nullable
   */
  talentPoolComments?: string;
  /**
   * Talent Status.
   * @nullable
   */
  talentPoolStatus?: string;
  /**
   * Candidate Talent Pool.
   * @nullable
   */
  talentPoolitem?: string;

  /**
   * Returns an entity builder to construct instances `JobApplicationSnapshot_TalentPool`.
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_TalentPool`.
   */
  static builder(): EntityBuilderType<JobApplicationSnapshot_TalentPool, JobApplicationSnapshot_TalentPoolTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationSnapshot_TalentPool);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_TalentPool` entity type.
   * @returns A `JobApplicationSnapshot_TalentPool` request builder.
   */
  static requestBuilder(): JobApplicationSnapshot_TalentPoolRequestBuilder {
    return new JobApplicationSnapshot_TalentPoolRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_TalentPool`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_TalentPool`.
   */
  static customField(fieldName: string): CustomField<JobApplicationSnapshot_TalentPool> {
    return Entity.customFieldSelector(fieldName, JobApplicationSnapshot_TalentPool);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface JobApplicationSnapshot_TalentPoolType {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  lastModifiedDateTime: Moment;
  startDate?: Moment;
  talentPoolComments?: string;
  talentPoolStatus?: string;
  talentPoolitem?: string;
}

export interface JobApplicationSnapshot_TalentPoolTypeForceMandatory {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  lastModifiedDateTime: Moment;
  startDate: Moment;
  talentPoolComments: string;
  talentPoolStatus: string;
  talentPoolitem: string;
}

export namespace JobApplicationSnapshot_TalentPool {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_TalentPool> = new BigNumberField('applicationId', JobApplicationSnapshot_TalentPool, 'Edm.Int64');
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_TalentPool> = new BigNumberField('backgroundElementId', JobApplicationSnapshot_TalentPool, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_TalentPool> = new BigNumberField('bgOrderPos', JobApplicationSnapshot_TalentPool, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_TalentPool> = new DateField('lastModifiedDateTime', JobApplicationSnapshot_TalentPool, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<JobApplicationSnapshot_TalentPool> = new DateField('startDate', JobApplicationSnapshot_TalentPool, 'Edm.DateTime');
  /**
   * Static representation of the [[talentPoolComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL_COMMENTS: StringField<JobApplicationSnapshot_TalentPool> = new StringField('talentPoolComments', JobApplicationSnapshot_TalentPool, 'Edm.String');
  /**
   * Static representation of the [[talentPoolStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL_STATUS: StringField<JobApplicationSnapshot_TalentPool> = new StringField('talentPoolStatus', JobApplicationSnapshot_TalentPool, 'Edm.String');
  /**
   * Static representation of the [[talentPoolitem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOLITEM: StringField<JobApplicationSnapshot_TalentPool> = new StringField('talentPoolitem', JobApplicationSnapshot_TalentPool, 'Edm.String');
  /**
   * All fields of the JobApplicationSnapshot_TalentPool entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationSnapshot_TalentPool> | DateField<JobApplicationSnapshot_TalentPool> | StringField<JobApplicationSnapshot_TalentPool>> = [
    JobApplicationSnapshot_TalentPool.APPLICATION_ID,
    JobApplicationSnapshot_TalentPool.BACKGROUND_ELEMENT_ID,
    JobApplicationSnapshot_TalentPool.BG_ORDER_POS,
    JobApplicationSnapshot_TalentPool.LAST_MODIFIED_DATE_TIME,
    JobApplicationSnapshot_TalentPool.START_DATE,
    JobApplicationSnapshot_TalentPool.TALENT_POOL_COMMENTS,
    JobApplicationSnapshot_TalentPool.TALENT_POOL_STATUS,
    JobApplicationSnapshot_TalentPool.TALENT_POOLITEM
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationSnapshot_TalentPool> = new AllFields('*', JobApplicationSnapshot_TalentPool);
  /**
   * All key fields of the JobApplicationSnapshot_TalentPool entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationSnapshot_TalentPool>> = [JobApplicationSnapshot_TalentPool.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationSnapshot_TalentPool.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationSnapshot_TalentPool> } = JobApplicationSnapshot_TalentPool._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationSnapshot_TalentPool> }, field: Selectable<JobApplicationSnapshot_TalentPool>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
