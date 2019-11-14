/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { CandidateBackground_InsideWorkExperienceRequestBuilder } from './CandidateBackground_InsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, OneToOneLink, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CandidateBackground_InsideWorkExperience" of service "SFOData".
 */
export class CandidateBackground_InsideWorkExperience extends Entity implements CandidateBackground_InsideWorkExperienceType {
  /**
   * Technical entity name for CandidateBackground_InsideWorkExperience.
   */
  static _entityName = 'CandidateBackground_InsideWorkExperience';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateBackground_InsideWorkExperience.
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
   * One-to-one navigation property to the [[Candidate]] entity.
   */
  candidate!: Candidate;

  /**
   * Returns an entity builder to construct instances `CandidateBackground_InsideWorkExperience`.
   * @returns A builder that constructs instances of entity type `CandidateBackground_InsideWorkExperience`.
   */
  static builder(): EntityBuilderType<CandidateBackground_InsideWorkExperience, CandidateBackground_InsideWorkExperienceTypeForceMandatory> {
    return Entity.entityBuilder(CandidateBackground_InsideWorkExperience);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateBackground_InsideWorkExperience` entity type.
   * @returns A `CandidateBackground_InsideWorkExperience` request builder.
   */
  static requestBuilder(): CandidateBackground_InsideWorkExperienceRequestBuilder {
    return new CandidateBackground_InsideWorkExperienceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_InsideWorkExperience`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateBackground_InsideWorkExperience`.
   */
  static customField(fieldName: string): CustomField<CandidateBackground_InsideWorkExperience> {
    return Entity.customFieldSelector(fieldName, CandidateBackground_InsideWorkExperience);
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

export interface CandidateBackground_InsideWorkExperienceType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  department?: string;
  endDate?: Moment;
  lastModifiedDateTime: Moment;
  startDate?: Moment;
  title?: string;
  candidate: CandidateType;
}

export interface CandidateBackground_InsideWorkExperienceTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  department: string;
  endDate: Moment;
  lastModifiedDateTime: Moment;
  startDate: Moment;
  title: string;
  candidate: CandidateType;
}

export namespace CandidateBackground_InsideWorkExperience {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_InsideWorkExperience> = new BigNumberField('backgroundElementId', CandidateBackground_InsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<CandidateBackground_InsideWorkExperience> = new BigNumberField('bgOrderPos', CandidateBackground_InsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateBackground_InsideWorkExperience> = new BigNumberField('candidateId', CandidateBackground_InsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<CandidateBackground_InsideWorkExperience> = new StringField('department', CandidateBackground_InsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<CandidateBackground_InsideWorkExperience> = new DateField('endDate', CandidateBackground_InsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_InsideWorkExperience> = new DateField('lastModifiedDateTime', CandidateBackground_InsideWorkExperience, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<CandidateBackground_InsideWorkExperience> = new DateField('startDate', CandidateBackground_InsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<CandidateBackground_InsideWorkExperience> = new StringField('title', CandidateBackground_InsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[candidate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: OneToOneLink<CandidateBackground_InsideWorkExperience, Candidate> = new OneToOneLink('candidate', CandidateBackground_InsideWorkExperience, Candidate);
  /**
   * All fields of the CandidateBackground_InsideWorkExperience entity.
   */
  export const _allFields: Array<BigNumberField<CandidateBackground_InsideWorkExperience> | StringField<CandidateBackground_InsideWorkExperience> | DateField<CandidateBackground_InsideWorkExperience> | OneToOneLink<CandidateBackground_InsideWorkExperience, Candidate>> = [
    CandidateBackground_InsideWorkExperience.BACKGROUND_ELEMENT_ID,
    CandidateBackground_InsideWorkExperience.BG_ORDER_POS,
    CandidateBackground_InsideWorkExperience.CANDIDATE_ID,
    CandidateBackground_InsideWorkExperience.DEPARTMENT,
    CandidateBackground_InsideWorkExperience.END_DATE,
    CandidateBackground_InsideWorkExperience.LAST_MODIFIED_DATE_TIME,
    CandidateBackground_InsideWorkExperience.START_DATE,
    CandidateBackground_InsideWorkExperience.TITLE,
    CandidateBackground_InsideWorkExperience.CANDIDATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateBackground_InsideWorkExperience> = new AllFields('*', CandidateBackground_InsideWorkExperience);
  /**
   * All key fields of the CandidateBackground_InsideWorkExperience entity.
   */
  export const _keyFields: Array<Selectable<CandidateBackground_InsideWorkExperience>> = [CandidateBackground_InsideWorkExperience.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateBackground_InsideWorkExperience.
   */
  export const _keys: { [keys: string]: Selectable<CandidateBackground_InsideWorkExperience> } = CandidateBackground_InsideWorkExperience._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateBackground_InsideWorkExperience> }, field: Selectable<CandidateBackground_InsideWorkExperience>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
