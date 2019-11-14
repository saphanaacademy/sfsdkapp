/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { JobApplicationSnapshot_EducationRequestBuilder } from './JobApplicationSnapshot_EducationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, NumberField, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "JobApplicationSnapshot_Education" of service "SFOData".
 */
export class JobApplicationSnapshot_Education extends Entity implements JobApplicationSnapshot_EducationType {
  /**
   * Technical entity name for JobApplicationSnapshot_Education.
   */
  static _entityName = 'JobApplicationSnapshot_Education';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationSnapshot_Education.
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
   * Degree.
   * @nullable
   */
  degree?: string;
  /**
   * Degree Date.
   * @nullable
   */
  degreeDate?: Moment;
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
   * Major.
   * @nullable
   */
  major?: string;
  /**
   * Are you a student?.
   * @nullable
   */
  presentStudent?: number;
  /**
   * School.
   * @nullable
   */
  school?: string;
  /**
   * School Address.
   * @nullable
   */
  schoolAddress?: string;
  /**
   * School City.
   * @nullable
   */
  schoolCity?: string;
  /**
   * School Country.
   * @nullable
   */
  schoolCountry?: string;
  /**
   * School Phone.
   * @nullable
   */
  schoolPhone?: string;
  /**
   * School State.
   * @nullable
   */
  schoolState?: string;
  /**
   * School Type.
   * @nullable
   */
  schoolType?: string;
  /**
   * School Zip Code.
   * @nullable
   */
  schoolZip?: string;
  /**
   * From Date.
   * @nullable
   */
  startDate?: Moment;

  /**
   * Returns an entity builder to construct instances `JobApplicationSnapshot_Education`.
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Education`.
   */
  static builder(): EntityBuilderType<JobApplicationSnapshot_Education, JobApplicationSnapshot_EducationTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationSnapshot_Education);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Education` entity type.
   * @returns A `JobApplicationSnapshot_Education` request builder.
   */
  static requestBuilder(): JobApplicationSnapshot_EducationRequestBuilder {
    return new JobApplicationSnapshot_EducationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Education`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Education`.
   */
  static customField(fieldName: string): CustomField<JobApplicationSnapshot_Education> {
    return Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Education);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface JobApplicationSnapshot_EducationType {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  degree?: string;
  degreeDate?: Moment;
  endDate?: Moment;
  lastModifiedDateTime: Moment;
  major?: string;
  presentStudent?: number;
  school?: string;
  schoolAddress?: string;
  schoolCity?: string;
  schoolCountry?: string;
  schoolPhone?: string;
  schoolState?: string;
  schoolType?: string;
  schoolZip?: string;
  startDate?: Moment;
}

export interface JobApplicationSnapshot_EducationTypeForceMandatory {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  degree: string;
  degreeDate: Moment;
  endDate: Moment;
  lastModifiedDateTime: Moment;
  major: string;
  presentStudent: number;
  school: string;
  schoolAddress: string;
  schoolCity: string;
  schoolCountry: string;
  schoolPhone: string;
  schoolState: string;
  schoolType: string;
  schoolZip: string;
  startDate: Moment;
}

export namespace JobApplicationSnapshot_Education {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_Education> = new BigNumberField('applicationId', JobApplicationSnapshot_Education, 'Edm.Int64');
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_Education> = new BigNumberField('backgroundElementId', JobApplicationSnapshot_Education, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_Education> = new BigNumberField('bgOrderPos', JobApplicationSnapshot_Education, 'Edm.Int64');
  /**
   * Static representation of the [[degree]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE: StringField<JobApplicationSnapshot_Education> = new StringField('degree', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[degreeDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_DATE: DateField<JobApplicationSnapshot_Education> = new DateField('degreeDate', JobApplicationSnapshot_Education, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<JobApplicationSnapshot_Education> = new DateField('endDate', JobApplicationSnapshot_Education, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_Education> = new DateField('lastModifiedDateTime', JobApplicationSnapshot_Education, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[major]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAJOR: StringField<JobApplicationSnapshot_Education> = new StringField('major', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[presentStudent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRESENT_STUDENT: NumberField<JobApplicationSnapshot_Education> = new NumberField('presentStudent', JobApplicationSnapshot_Education, 'Edm.Int32');
  /**
   * Static representation of the [[school]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL: StringField<JobApplicationSnapshot_Education> = new StringField('school', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_ADDRESS: StringField<JobApplicationSnapshot_Education> = new StringField('schoolAddress', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolCity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_CITY: StringField<JobApplicationSnapshot_Education> = new StringField('schoolCity', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_COUNTRY: StringField<JobApplicationSnapshot_Education> = new StringField('schoolCountry', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_PHONE: StringField<JobApplicationSnapshot_Education> = new StringField('schoolPhone', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_STATE: StringField<JobApplicationSnapshot_Education> = new StringField('schoolState', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_TYPE: StringField<JobApplicationSnapshot_Education> = new StringField('schoolType', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolZip]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_ZIP: StringField<JobApplicationSnapshot_Education> = new StringField('schoolZip', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<JobApplicationSnapshot_Education> = new DateField('startDate', JobApplicationSnapshot_Education, 'Edm.DateTime');
  /**
   * All fields of the JobApplicationSnapshot_Education entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationSnapshot_Education> | StringField<JobApplicationSnapshot_Education> | DateField<JobApplicationSnapshot_Education> | NumberField<JobApplicationSnapshot_Education>> = [
    JobApplicationSnapshot_Education.APPLICATION_ID,
    JobApplicationSnapshot_Education.BACKGROUND_ELEMENT_ID,
    JobApplicationSnapshot_Education.BG_ORDER_POS,
    JobApplicationSnapshot_Education.DEGREE,
    JobApplicationSnapshot_Education.DEGREE_DATE,
    JobApplicationSnapshot_Education.END_DATE,
    JobApplicationSnapshot_Education.LAST_MODIFIED_DATE_TIME,
    JobApplicationSnapshot_Education.MAJOR,
    JobApplicationSnapshot_Education.PRESENT_STUDENT,
    JobApplicationSnapshot_Education.SCHOOL,
    JobApplicationSnapshot_Education.SCHOOL_ADDRESS,
    JobApplicationSnapshot_Education.SCHOOL_CITY,
    JobApplicationSnapshot_Education.SCHOOL_COUNTRY,
    JobApplicationSnapshot_Education.SCHOOL_PHONE,
    JobApplicationSnapshot_Education.SCHOOL_STATE,
    JobApplicationSnapshot_Education.SCHOOL_TYPE,
    JobApplicationSnapshot_Education.SCHOOL_ZIP,
    JobApplicationSnapshot_Education.START_DATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationSnapshot_Education> = new AllFields('*', JobApplicationSnapshot_Education);
  /**
   * All key fields of the JobApplicationSnapshot_Education entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationSnapshot_Education>> = [JobApplicationSnapshot_Education.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Education.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationSnapshot_Education> } = JobApplicationSnapshot_Education._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationSnapshot_Education> }, field: Selectable<JobApplicationSnapshot_Education>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
