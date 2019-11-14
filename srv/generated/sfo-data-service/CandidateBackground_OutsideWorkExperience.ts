/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { CandidateBackground_OutsideWorkExperienceRequestBuilder } from './CandidateBackground_OutsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, OneToOneLink, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CandidateBackground_OutsideWorkExperience" of service "SFOData".
 */
export class CandidateBackground_OutsideWorkExperience extends Entity implements CandidateBackground_OutsideWorkExperienceType {
  /**
   * Technical entity name for CandidateBackground_OutsideWorkExperience.
   */
  static _entityName = 'CandidateBackground_OutsideWorkExperience';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateBackground_OutsideWorkExperience.
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
   * Type of Business.
   * @nullable
   */
  businessType?: string;
  /**
   * Candidate Id.
   */
  candidateId!: BigNumber;
  /**
   * Company Name.
   * @nullable
   */
  employer?: string;
  /**
   * Employer Address.
   * @nullable
   */
  employerAddress?: string;
  /**
   * Employer City.
   * @nullable
   */
  employerCity?: string;
  /**
   * Employer Contact Name.
   * @nullable
   */
  employerContact?: string;
  /**
   * Employer Country.
   * @nullable
   */
  employerCountry?: string;
  /**
   * Employer Contact Email.
   * @nullable
   */
  employerEmail?: string;
  /**
   * Employer Phone.
   * @nullable
   */
  employerPhone?: string;
  /**
   * Employer State.
   * @nullable
   */
  employerState?: string;
  /**
   * Employer Zip Code.
   * @nullable
   */
  employerZip?: string;
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
   * Is this your present employer?.
   * @nullable
   */
  presentEmployer?: string;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Title.
   * @nullable
   */
  startTitle?: string;
  /**
   * One-to-one navigation property to the [[Candidate]] entity.
   */
  candidate!: Candidate;

  /**
   * Returns an entity builder to construct instances `CandidateBackground_OutsideWorkExperience`.
   * @returns A builder that constructs instances of entity type `CandidateBackground_OutsideWorkExperience`.
   */
  static builder(): EntityBuilderType<CandidateBackground_OutsideWorkExperience, CandidateBackground_OutsideWorkExperienceTypeForceMandatory> {
    return Entity.entityBuilder(CandidateBackground_OutsideWorkExperience);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateBackground_OutsideWorkExperience` entity type.
   * @returns A `CandidateBackground_OutsideWorkExperience` request builder.
   */
  static requestBuilder(): CandidateBackground_OutsideWorkExperienceRequestBuilder {
    return new CandidateBackground_OutsideWorkExperienceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_OutsideWorkExperience`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateBackground_OutsideWorkExperience`.
   */
  static customField(fieldName: string): CustomField<CandidateBackground_OutsideWorkExperience> {
    return Entity.customFieldSelector(fieldName, CandidateBackground_OutsideWorkExperience);
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

export interface CandidateBackground_OutsideWorkExperienceType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  businessType?: string;
  candidateId: BigNumber;
  employer?: string;
  employerAddress?: string;
  employerCity?: string;
  employerContact?: string;
  employerCountry?: string;
  employerEmail?: string;
  employerPhone?: string;
  employerState?: string;
  employerZip?: string;
  endDate?: Moment;
  lastModifiedDateTime: Moment;
  presentEmployer?: string;
  startDate?: Moment;
  startTitle?: string;
  candidate: CandidateType;
}

export interface CandidateBackground_OutsideWorkExperienceTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  businessType: string;
  candidateId: BigNumber;
  employer: string;
  employerAddress: string;
  employerCity: string;
  employerContact: string;
  employerCountry: string;
  employerEmail: string;
  employerPhone: string;
  employerState: string;
  employerZip: string;
  endDate: Moment;
  lastModifiedDateTime: Moment;
  presentEmployer: string;
  startDate: Moment;
  startTitle: string;
  candidate: CandidateType;
}

export namespace CandidateBackground_OutsideWorkExperience {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_OutsideWorkExperience> = new BigNumberField('backgroundElementId', CandidateBackground_OutsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<CandidateBackground_OutsideWorkExperience> = new BigNumberField('bgOrderPos', CandidateBackground_OutsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[businessType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_TYPE: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('businessType', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateBackground_OutsideWorkExperience> = new BigNumberField('candidateId', CandidateBackground_OutsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[employer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('employer', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[employerAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER_ADDRESS: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('employerAddress', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[employerCity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER_CITY: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('employerCity', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[employerContact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER_CONTACT: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('employerContact', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[employerCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER_COUNTRY: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('employerCountry', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[employerEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER_EMAIL: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('employerEmail', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[employerPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER_PHONE: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('employerPhone', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[employerState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER_STATE: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('employerState', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[employerZip]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER_ZIP: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('employerZip', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<CandidateBackground_OutsideWorkExperience> = new DateField('endDate', CandidateBackground_OutsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_OutsideWorkExperience> = new DateField('lastModifiedDateTime', CandidateBackground_OutsideWorkExperience, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[presentEmployer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRESENT_EMPLOYER: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('presentEmployer', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<CandidateBackground_OutsideWorkExperience> = new DateField('startDate', CandidateBackground_OutsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[startTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TITLE: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('startTitle', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[candidate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: OneToOneLink<CandidateBackground_OutsideWorkExperience, Candidate> = new OneToOneLink('candidate', CandidateBackground_OutsideWorkExperience, Candidate);
  /**
   * All fields of the CandidateBackground_OutsideWorkExperience entity.
   */
  export const _allFields: Array<BigNumberField<CandidateBackground_OutsideWorkExperience> | StringField<CandidateBackground_OutsideWorkExperience> | DateField<CandidateBackground_OutsideWorkExperience> | OneToOneLink<CandidateBackground_OutsideWorkExperience, Candidate>> = [
    CandidateBackground_OutsideWorkExperience.BACKGROUND_ELEMENT_ID,
    CandidateBackground_OutsideWorkExperience.BG_ORDER_POS,
    CandidateBackground_OutsideWorkExperience.BUSINESS_TYPE,
    CandidateBackground_OutsideWorkExperience.CANDIDATE_ID,
    CandidateBackground_OutsideWorkExperience.EMPLOYER,
    CandidateBackground_OutsideWorkExperience.EMPLOYER_ADDRESS,
    CandidateBackground_OutsideWorkExperience.EMPLOYER_CITY,
    CandidateBackground_OutsideWorkExperience.EMPLOYER_CONTACT,
    CandidateBackground_OutsideWorkExperience.EMPLOYER_COUNTRY,
    CandidateBackground_OutsideWorkExperience.EMPLOYER_EMAIL,
    CandidateBackground_OutsideWorkExperience.EMPLOYER_PHONE,
    CandidateBackground_OutsideWorkExperience.EMPLOYER_STATE,
    CandidateBackground_OutsideWorkExperience.EMPLOYER_ZIP,
    CandidateBackground_OutsideWorkExperience.END_DATE,
    CandidateBackground_OutsideWorkExperience.LAST_MODIFIED_DATE_TIME,
    CandidateBackground_OutsideWorkExperience.PRESENT_EMPLOYER,
    CandidateBackground_OutsideWorkExperience.START_DATE,
    CandidateBackground_OutsideWorkExperience.START_TITLE,
    CandidateBackground_OutsideWorkExperience.CANDIDATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateBackground_OutsideWorkExperience> = new AllFields('*', CandidateBackground_OutsideWorkExperience);
  /**
   * All key fields of the CandidateBackground_OutsideWorkExperience entity.
   */
  export const _keyFields: Array<Selectable<CandidateBackground_OutsideWorkExperience>> = [CandidateBackground_OutsideWorkExperience.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateBackground_OutsideWorkExperience.
   */
  export const _keys: { [keys: string]: Selectable<CandidateBackground_OutsideWorkExperience> } = CandidateBackground_OutsideWorkExperience._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateBackground_OutsideWorkExperience> }, field: Selectable<CandidateBackground_OutsideWorkExperience>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
