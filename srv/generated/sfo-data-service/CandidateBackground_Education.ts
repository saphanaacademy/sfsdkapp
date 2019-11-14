/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { CandidateBackground_EducationRequestBuilder } from './CandidateBackground_EducationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, NumberField, OneToOneLink, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CandidateBackground_Education" of service "SFOData".
 */
export class CandidateBackground_Education extends Entity implements CandidateBackground_EducationType {
  /**
   * Technical entity name for CandidateBackground_Education.
   */
  static _entityName = 'CandidateBackground_Education';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateBackground_Education.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Background Element Id.
   */
  backgroundElementId!: BigNumber;
  /**
   * Background Order Position.
   */
  bgOrderPos!: BigNumber;
  /**
   * Candidate Id.
   */
  candidateId!: BigNumber;
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
   * One-to-one navigation property to the [[Candidate]] entity.
   */
  candidate!: Candidate;

  /**
   * Returns an entity builder to construct instances `CandidateBackground_Education`.
   * @returns A builder that constructs instances of entity type `CandidateBackground_Education`.
   */
  static builder(): EntityBuilderType<CandidateBackground_Education, CandidateBackground_EducationTypeForceMandatory> {
    return Entity.entityBuilder(CandidateBackground_Education);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateBackground_Education` entity type.
   * @returns A `CandidateBackground_Education` request builder.
   */
  static requestBuilder(): CandidateBackground_EducationRequestBuilder {
    return new CandidateBackground_EducationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Education`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateBackground_Education`.
   */
  static customField(fieldName: string): CustomField<CandidateBackground_Education> {
    return Entity.customFieldSelector(fieldName, CandidateBackground_Education);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Candidate, CandidateType } from './Candidate';

export interface CandidateBackground_EducationType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
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
  candidate: CandidateType;
}

export interface CandidateBackground_EducationTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
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
  candidate: CandidateType;
}

export namespace CandidateBackground_Education {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_Education> = new BigNumberField('backgroundElementId', CandidateBackground_Education, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<CandidateBackground_Education> = new BigNumberField('bgOrderPos', CandidateBackground_Education, 'Edm.Int64');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateBackground_Education> = new BigNumberField('candidateId', CandidateBackground_Education, 'Edm.Int64');
  /**
   * Static representation of the [[degree]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE: StringField<CandidateBackground_Education> = new StringField('degree', CandidateBackground_Education, 'Edm.String');
  /**
   * Static representation of the [[degreeDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_DATE: DateField<CandidateBackground_Education> = new DateField('degreeDate', CandidateBackground_Education, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<CandidateBackground_Education> = new DateField('endDate', CandidateBackground_Education, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_Education> = new DateField('lastModifiedDateTime', CandidateBackground_Education, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[major]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAJOR: StringField<CandidateBackground_Education> = new StringField('major', CandidateBackground_Education, 'Edm.String');
  /**
   * Static representation of the [[presentStudent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRESENT_STUDENT: NumberField<CandidateBackground_Education> = new NumberField('presentStudent', CandidateBackground_Education, 'Edm.Int32');
  /**
   * Static representation of the [[school]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL: StringField<CandidateBackground_Education> = new StringField('school', CandidateBackground_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_ADDRESS: StringField<CandidateBackground_Education> = new StringField('schoolAddress', CandidateBackground_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolCity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_CITY: StringField<CandidateBackground_Education> = new StringField('schoolCity', CandidateBackground_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_COUNTRY: StringField<CandidateBackground_Education> = new StringField('schoolCountry', CandidateBackground_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_PHONE: StringField<CandidateBackground_Education> = new StringField('schoolPhone', CandidateBackground_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_STATE: StringField<CandidateBackground_Education> = new StringField('schoolState', CandidateBackground_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_TYPE: StringField<CandidateBackground_Education> = new StringField('schoolType', CandidateBackground_Education, 'Edm.String');
  /**
   * Static representation of the [[schoolZip]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL_ZIP: StringField<CandidateBackground_Education> = new StringField('schoolZip', CandidateBackground_Education, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<CandidateBackground_Education> = new DateField('startDate', CandidateBackground_Education, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[candidate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: OneToOneLink<CandidateBackground_Education, Candidate> = new OneToOneLink('candidate', CandidateBackground_Education, Candidate);
  /**
   * All fields of the CandidateBackground_Education entity.
   */
  export const _allFields: Array<BigNumberField<CandidateBackground_Education> | StringField<CandidateBackground_Education> | DateField<CandidateBackground_Education> | NumberField<CandidateBackground_Education> | OneToOneLink<CandidateBackground_Education, Candidate>> = [
    CandidateBackground_Education.BACKGROUND_ELEMENT_ID,
    CandidateBackground_Education.BG_ORDER_POS,
    CandidateBackground_Education.CANDIDATE_ID,
    CandidateBackground_Education.DEGREE,
    CandidateBackground_Education.DEGREE_DATE,
    CandidateBackground_Education.END_DATE,
    CandidateBackground_Education.LAST_MODIFIED_DATE_TIME,
    CandidateBackground_Education.MAJOR,
    CandidateBackground_Education.PRESENT_STUDENT,
    CandidateBackground_Education.SCHOOL,
    CandidateBackground_Education.SCHOOL_ADDRESS,
    CandidateBackground_Education.SCHOOL_CITY,
    CandidateBackground_Education.SCHOOL_COUNTRY,
    CandidateBackground_Education.SCHOOL_PHONE,
    CandidateBackground_Education.SCHOOL_STATE,
    CandidateBackground_Education.SCHOOL_TYPE,
    CandidateBackground_Education.SCHOOL_ZIP,
    CandidateBackground_Education.START_DATE,
    CandidateBackground_Education.CANDIDATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateBackground_Education> = new AllFields('*', CandidateBackground_Education);
  /**
   * All key fields of the CandidateBackground_Education entity.
   */
  export const _keyFields: Array<Selectable<CandidateBackground_Education>> = [CandidateBackground_Education.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateBackground_Education.
   */
  export const _keys: { [keys: string]: Selectable<CandidateBackground_Education> } = CandidateBackground_Education._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateBackground_Education> }, field: Selectable<CandidateBackground_Education>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
