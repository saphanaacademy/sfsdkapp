/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { CandidateBackground_LanguagesRequestBuilder } from './CandidateBackground_LanguagesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, OneToOneLink, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CandidateBackground_Languages" of service "SFOData".
 */
export class CandidateBackground_Languages extends Entity implements CandidateBackground_LanguagesType {
  /**
   * Technical entity name for CandidateBackground_Languages.
   */
  static _entityName = 'CandidateBackground_Languages';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateBackground_Languages.
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
   * One-to-one navigation property to the [[Candidate]] entity.
   */
  candidate!: Candidate;

  /**
   * Returns an entity builder to construct instances `CandidateBackground_Languages`.
   * @returns A builder that constructs instances of entity type `CandidateBackground_Languages`.
   */
  static builder(): EntityBuilderType<CandidateBackground_Languages, CandidateBackground_LanguagesTypeForceMandatory> {
    return Entity.entityBuilder(CandidateBackground_Languages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateBackground_Languages` entity type.
   * @returns A `CandidateBackground_Languages` request builder.
   */
  static requestBuilder(): CandidateBackground_LanguagesRequestBuilder {
    return new CandidateBackground_LanguagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Languages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateBackground_Languages`.
   */
  static customField(fieldName: string): CustomField<CandidateBackground_Languages> {
    return Entity.customFieldSelector(fieldName, CandidateBackground_Languages);
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

export interface CandidateBackground_LanguagesType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  language?: string;
  lastModifiedDateTime: Moment;
  readingProf?: string;
  speakingProf?: string;
  writingProf?: string;
  candidate: CandidateType;
}

export interface CandidateBackground_LanguagesTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  language: string;
  lastModifiedDateTime: Moment;
  readingProf: string;
  speakingProf: string;
  writingProf: string;
  candidate: CandidateType;
}

export namespace CandidateBackground_Languages {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_Languages> = new BigNumberField('backgroundElementId', CandidateBackground_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<CandidateBackground_Languages> = new BigNumberField('bgOrderPos', CandidateBackground_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateBackground_Languages> = new BigNumberField('candidateId', CandidateBackground_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<CandidateBackground_Languages> = new StringField('language', CandidateBackground_Languages, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_Languages> = new DateField('lastModifiedDateTime', CandidateBackground_Languages, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[readingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READING_PROF: StringField<CandidateBackground_Languages> = new StringField('readingProf', CandidateBackground_Languages, 'Edm.String');
  /**
   * Static representation of the [[speakingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPEAKING_PROF: StringField<CandidateBackground_Languages> = new StringField('speakingProf', CandidateBackground_Languages, 'Edm.String');
  /**
   * Static representation of the [[writingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WRITING_PROF: StringField<CandidateBackground_Languages> = new StringField('writingProf', CandidateBackground_Languages, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[candidate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: OneToOneLink<CandidateBackground_Languages, Candidate> = new OneToOneLink('candidate', CandidateBackground_Languages, Candidate);
  /**
   * All fields of the CandidateBackground_Languages entity.
   */
  export const _allFields: Array<BigNumberField<CandidateBackground_Languages> | StringField<CandidateBackground_Languages> | DateField<CandidateBackground_Languages> | OneToOneLink<CandidateBackground_Languages, Candidate>> = [
    CandidateBackground_Languages.BACKGROUND_ELEMENT_ID,
    CandidateBackground_Languages.BG_ORDER_POS,
    CandidateBackground_Languages.CANDIDATE_ID,
    CandidateBackground_Languages.LANGUAGE,
    CandidateBackground_Languages.LAST_MODIFIED_DATE_TIME,
    CandidateBackground_Languages.READING_PROF,
    CandidateBackground_Languages.SPEAKING_PROF,
    CandidateBackground_Languages.WRITING_PROF,
    CandidateBackground_Languages.CANDIDATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateBackground_Languages> = new AllFields('*', CandidateBackground_Languages);
  /**
   * All key fields of the CandidateBackground_Languages entity.
   */
  export const _keyFields: Array<Selectable<CandidateBackground_Languages>> = [CandidateBackground_Languages.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateBackground_Languages.
   */
  export const _keys: { [keys: string]: Selectable<CandidateBackground_Languages> } = CandidateBackground_Languages._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateBackground_Languages> }, field: Selectable<CandidateBackground_Languages>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
