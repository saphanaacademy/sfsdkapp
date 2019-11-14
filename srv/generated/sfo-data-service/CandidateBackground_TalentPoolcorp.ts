/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { CandidateBackground_TalentPoolcorpRequestBuilder } from './CandidateBackground_TalentPoolcorpRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, DateField, StringField, OneToOneLink, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CandidateBackground_TalentPoolcorp" of service "SFOData".
 */
export class CandidateBackground_TalentPoolcorp extends Entity implements CandidateBackground_TalentPoolcorpType {
  /**
   * Technical entity name for CandidateBackground_TalentPoolcorp.
   */
  static _entityName = 'CandidateBackground_TalentPoolcorp';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateBackground_TalentPoolcorp.
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
   * Corporate Talent Pool.
   * @nullable
   */
  talentPoolitemCorp?: string;
  /**
   * One-to-one navigation property to the [[Candidate]] entity.
   */
  candidate!: Candidate;

  /**
   * Returns an entity builder to construct instances `CandidateBackground_TalentPoolcorp`.
   * @returns A builder that constructs instances of entity type `CandidateBackground_TalentPoolcorp`.
   */
  static builder(): EntityBuilderType<CandidateBackground_TalentPoolcorp, CandidateBackground_TalentPoolcorpTypeForceMandatory> {
    return Entity.entityBuilder(CandidateBackground_TalentPoolcorp);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateBackground_TalentPoolcorp` entity type.
   * @returns A `CandidateBackground_TalentPoolcorp` request builder.
   */
  static requestBuilder(): CandidateBackground_TalentPoolcorpRequestBuilder {
    return new CandidateBackground_TalentPoolcorpRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_TalentPoolcorp`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateBackground_TalentPoolcorp`.
   */
  static customField(fieldName: string): CustomField<CandidateBackground_TalentPoolcorp> {
    return Entity.customFieldSelector(fieldName, CandidateBackground_TalentPoolcorp);
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

export interface CandidateBackground_TalentPoolcorpType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  lastModifiedDateTime: Moment;
  startDate?: Moment;
  talentPoolComments?: string;
  talentPoolStatus?: string;
  talentPoolitemCorp?: string;
  candidate: CandidateType;
}

export interface CandidateBackground_TalentPoolcorpTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  lastModifiedDateTime: Moment;
  startDate: Moment;
  talentPoolComments: string;
  talentPoolStatus: string;
  talentPoolitemCorp: string;
  candidate: CandidateType;
}

export namespace CandidateBackground_TalentPoolcorp {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_TalentPoolcorp> = new BigNumberField('backgroundElementId', CandidateBackground_TalentPoolcorp, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<CandidateBackground_TalentPoolcorp> = new BigNumberField('bgOrderPos', CandidateBackground_TalentPoolcorp, 'Edm.Int64');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateBackground_TalentPoolcorp> = new BigNumberField('candidateId', CandidateBackground_TalentPoolcorp, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_TalentPoolcorp> = new DateField('lastModifiedDateTime', CandidateBackground_TalentPoolcorp, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<CandidateBackground_TalentPoolcorp> = new DateField('startDate', CandidateBackground_TalentPoolcorp, 'Edm.DateTime');
  /**
   * Static representation of the [[talentPoolComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL_COMMENTS: StringField<CandidateBackground_TalentPoolcorp> = new StringField('talentPoolComments', CandidateBackground_TalentPoolcorp, 'Edm.String');
  /**
   * Static representation of the [[talentPoolStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL_STATUS: StringField<CandidateBackground_TalentPoolcorp> = new StringField('talentPoolStatus', CandidateBackground_TalentPoolcorp, 'Edm.String');
  /**
   * Static representation of the [[talentPoolitemCorp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOLITEM_CORP: StringField<CandidateBackground_TalentPoolcorp> = new StringField('talentPoolitemCorp', CandidateBackground_TalentPoolcorp, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[candidate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: OneToOneLink<CandidateBackground_TalentPoolcorp, Candidate> = new OneToOneLink('candidate', CandidateBackground_TalentPoolcorp, Candidate);
  /**
   * All fields of the CandidateBackground_TalentPoolcorp entity.
   */
  export const _allFields: Array<BigNumberField<CandidateBackground_TalentPoolcorp> | DateField<CandidateBackground_TalentPoolcorp> | StringField<CandidateBackground_TalentPoolcorp> | OneToOneLink<CandidateBackground_TalentPoolcorp, Candidate>> = [
    CandidateBackground_TalentPoolcorp.BACKGROUND_ELEMENT_ID,
    CandidateBackground_TalentPoolcorp.BG_ORDER_POS,
    CandidateBackground_TalentPoolcorp.CANDIDATE_ID,
    CandidateBackground_TalentPoolcorp.LAST_MODIFIED_DATE_TIME,
    CandidateBackground_TalentPoolcorp.START_DATE,
    CandidateBackground_TalentPoolcorp.TALENT_POOL_COMMENTS,
    CandidateBackground_TalentPoolcorp.TALENT_POOL_STATUS,
    CandidateBackground_TalentPoolcorp.TALENT_POOLITEM_CORP,
    CandidateBackground_TalentPoolcorp.CANDIDATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateBackground_TalentPoolcorp> = new AllFields('*', CandidateBackground_TalentPoolcorp);
  /**
   * All key fields of the CandidateBackground_TalentPoolcorp entity.
   */
  export const _keyFields: Array<Selectable<CandidateBackground_TalentPoolcorp>> = [CandidateBackground_TalentPoolcorp.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateBackground_TalentPoolcorp.
   */
  export const _keys: { [keys: string]: Selectable<CandidateBackground_TalentPoolcorp> } = CandidateBackground_TalentPoolcorp._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateBackground_TalentPoolcorp> }, field: Selectable<CandidateBackground_TalentPoolcorp>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
