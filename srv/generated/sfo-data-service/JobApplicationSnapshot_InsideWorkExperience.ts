/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { JobApplicationSnapshot_InsideWorkExperienceRequestBuilder } from './JobApplicationSnapshot_InsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "JobApplicationSnapshot_InsideWorkExperience" of service "SFOData".
 */
export class JobApplicationSnapshot_InsideWorkExperience extends Entity implements JobApplicationSnapshot_InsideWorkExperienceType {
  /**
   * Technical entity name for JobApplicationSnapshot_InsideWorkExperience.
   */
  static _entityName = 'JobApplicationSnapshot_InsideWorkExperience';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationSnapshot_InsideWorkExperience.
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
   * Department.
   * @nullable
   */
  department?: string;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * From Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Position Title.
   * @nullable
   */
  title?: string;

  /**
   * Returns an entity builder to construct instances `JobApplicationSnapshot_InsideWorkExperience`.
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_InsideWorkExperience`.
   */
  static builder(): EntityBuilderType<JobApplicationSnapshot_InsideWorkExperience, JobApplicationSnapshot_InsideWorkExperienceTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationSnapshot_InsideWorkExperience);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_InsideWorkExperience` entity type.
   * @returns A `JobApplicationSnapshot_InsideWorkExperience` request builder.
   */
  static requestBuilder(): JobApplicationSnapshot_InsideWorkExperienceRequestBuilder {
    return new JobApplicationSnapshot_InsideWorkExperienceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_InsideWorkExperience`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_InsideWorkExperience`.
   */
  static customField(fieldName: string): CustomField<JobApplicationSnapshot_InsideWorkExperience> {
    return Entity.customFieldSelector(fieldName, JobApplicationSnapshot_InsideWorkExperience);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface JobApplicationSnapshot_InsideWorkExperienceType {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  department?: string;
  endDate?: Moment;
  lastModifiedDateTime: Moment;
  startDate?: Moment;
  title?: string;
}

export interface JobApplicationSnapshot_InsideWorkExperienceTypeForceMandatory {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  department: string;
  endDate: Moment;
  lastModifiedDateTime: Moment;
  startDate: Moment;
  title: string;
}

export namespace JobApplicationSnapshot_InsideWorkExperience {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_InsideWorkExperience> = new BigNumberField('applicationId', JobApplicationSnapshot_InsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_InsideWorkExperience> = new BigNumberField('backgroundElementId', JobApplicationSnapshot_InsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_InsideWorkExperience> = new BigNumberField('bgOrderPos', JobApplicationSnapshot_InsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<JobApplicationSnapshot_InsideWorkExperience> = new StringField('department', JobApplicationSnapshot_InsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<JobApplicationSnapshot_InsideWorkExperience> = new DateField('endDate', JobApplicationSnapshot_InsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_InsideWorkExperience> = new DateField('lastModifiedDateTime', JobApplicationSnapshot_InsideWorkExperience, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<JobApplicationSnapshot_InsideWorkExperience> = new DateField('startDate', JobApplicationSnapshot_InsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<JobApplicationSnapshot_InsideWorkExperience> = new StringField('title', JobApplicationSnapshot_InsideWorkExperience, 'Edm.String');
  /**
   * All fields of the JobApplicationSnapshot_InsideWorkExperience entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationSnapshot_InsideWorkExperience> | StringField<JobApplicationSnapshot_InsideWorkExperience> | DateField<JobApplicationSnapshot_InsideWorkExperience>> = [
    JobApplicationSnapshot_InsideWorkExperience.APPLICATION_ID,
    JobApplicationSnapshot_InsideWorkExperience.BACKGROUND_ELEMENT_ID,
    JobApplicationSnapshot_InsideWorkExperience.BG_ORDER_POS,
    JobApplicationSnapshot_InsideWorkExperience.DEPARTMENT,
    JobApplicationSnapshot_InsideWorkExperience.END_DATE,
    JobApplicationSnapshot_InsideWorkExperience.LAST_MODIFIED_DATE_TIME,
    JobApplicationSnapshot_InsideWorkExperience.START_DATE,
    JobApplicationSnapshot_InsideWorkExperience.TITLE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationSnapshot_InsideWorkExperience> = new AllFields('*', JobApplicationSnapshot_InsideWorkExperience);
  /**
   * All key fields of the JobApplicationSnapshot_InsideWorkExperience entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationSnapshot_InsideWorkExperience>> = [JobApplicationSnapshot_InsideWorkExperience.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationSnapshot_InsideWorkExperience.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationSnapshot_InsideWorkExperience> } = JobApplicationSnapshot_InsideWorkExperience._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationSnapshot_InsideWorkExperience> }, field: Selectable<JobApplicationSnapshot_InsideWorkExperience>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
