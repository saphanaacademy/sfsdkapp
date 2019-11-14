/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { JobApplicationSnapshot_LanguagesRequestBuilder } from './JobApplicationSnapshot_LanguagesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "JobApplicationSnapshot_Languages" of service "SFOData".
 */
export class JobApplicationSnapshot_Languages extends Entity implements JobApplicationSnapshot_LanguagesType {
  /**
   * Technical entity name for JobApplicationSnapshot_Languages.
   */
  static _entityName = 'JobApplicationSnapshot_Languages';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationSnapshot_Languages.
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
   * Language.
   * @nullable
   */
  language?: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * Reading Proficiency.
   * @nullable
   */
  readingProf?: string;
  /**
   * Speaking Proficiency.
   * @nullable
   */
  speakingProf?: string;
  /**
   * Writing Proficiency.
   * @nullable
   */
  writingProf?: string;

  /**
   * Returns an entity builder to construct instances `JobApplicationSnapshot_Languages`.
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Languages`.
   */
  static builder(): EntityBuilderType<JobApplicationSnapshot_Languages, JobApplicationSnapshot_LanguagesTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationSnapshot_Languages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Languages` entity type.
   * @returns A `JobApplicationSnapshot_Languages` request builder.
   */
  static requestBuilder(): JobApplicationSnapshot_LanguagesRequestBuilder {
    return new JobApplicationSnapshot_LanguagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Languages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Languages`.
   */
  static customField(fieldName: string): CustomField<JobApplicationSnapshot_Languages> {
    return Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Languages);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface JobApplicationSnapshot_LanguagesType {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  language?: string;
  lastModifiedDateTime: Moment;
  readingProf?: string;
  speakingProf?: string;
  writingProf?: string;
}

export interface JobApplicationSnapshot_LanguagesTypeForceMandatory {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  language: string;
  lastModifiedDateTime: Moment;
  readingProf: string;
  speakingProf: string;
  writingProf: string;
}

export namespace JobApplicationSnapshot_Languages {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_Languages> = new BigNumberField('applicationId', JobApplicationSnapshot_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_Languages> = new BigNumberField('backgroundElementId', JobApplicationSnapshot_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_Languages> = new BigNumberField('bgOrderPos', JobApplicationSnapshot_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<JobApplicationSnapshot_Languages> = new StringField('language', JobApplicationSnapshot_Languages, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_Languages> = new DateField('lastModifiedDateTime', JobApplicationSnapshot_Languages, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[readingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READING_PROF: StringField<JobApplicationSnapshot_Languages> = new StringField('readingProf', JobApplicationSnapshot_Languages, 'Edm.String');
  /**
   * Static representation of the [[speakingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPEAKING_PROF: StringField<JobApplicationSnapshot_Languages> = new StringField('speakingProf', JobApplicationSnapshot_Languages, 'Edm.String');
  /**
   * Static representation of the [[writingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WRITING_PROF: StringField<JobApplicationSnapshot_Languages> = new StringField('writingProf', JobApplicationSnapshot_Languages, 'Edm.String');
  /**
   * All fields of the JobApplicationSnapshot_Languages entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationSnapshot_Languages> | StringField<JobApplicationSnapshot_Languages> | DateField<JobApplicationSnapshot_Languages>> = [
    JobApplicationSnapshot_Languages.APPLICATION_ID,
    JobApplicationSnapshot_Languages.BACKGROUND_ELEMENT_ID,
    JobApplicationSnapshot_Languages.BG_ORDER_POS,
    JobApplicationSnapshot_Languages.LANGUAGE,
    JobApplicationSnapshot_Languages.LAST_MODIFIED_DATE_TIME,
    JobApplicationSnapshot_Languages.READING_PROF,
    JobApplicationSnapshot_Languages.SPEAKING_PROF,
    JobApplicationSnapshot_Languages.WRITING_PROF
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationSnapshot_Languages> = new AllFields('*', JobApplicationSnapshot_Languages);
  /**
   * All key fields of the JobApplicationSnapshot_Languages entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationSnapshot_Languages>> = [JobApplicationSnapshot_Languages.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Languages.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationSnapshot_Languages> } = JobApplicationSnapshot_Languages._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationSnapshot_Languages> }, field: Selectable<JobApplicationSnapshot_Languages>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
