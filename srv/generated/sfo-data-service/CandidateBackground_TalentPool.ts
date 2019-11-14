/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { CandidateBackground_TalentPoolRequestBuilder } from './CandidateBackground_TalentPoolRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, DateField, StringField, OneToOneLink, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CandidateBackground_TalentPool" of service "SFOData".
 */
export class CandidateBackground_TalentPool extends Entity implements CandidateBackground_TalentPoolType {
  /**
   * Technical entity name for CandidateBackground_TalentPool.
   */
  static _entityName = 'CandidateBackground_TalentPool';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateBackground_TalentPool.
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
   * Candidate Talent Pool.
   * @nullable
   */
  talentPoolitem?: string;
  /**
   * One-to-one navigation property to the [[Candidate]] entity.
   */
  candidate!: Candidate;

  /**
   * Returns an entity builder to construct instances `CandidateBackground_TalentPool`.
   * @returns A builder that constructs instances of entity type `CandidateBackground_TalentPool`.
   */
  static builder(): EntityBuilderType<CandidateBackground_TalentPool, CandidateBackground_TalentPoolTypeForceMandatory> {
    return Entity.entityBuilder(CandidateBackground_TalentPool);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateBackground_TalentPool` entity type.
   * @returns A `CandidateBackground_TalentPool` request builder.
   */
  static requestBuilder(): CandidateBackground_TalentPoolRequestBuilder {
    return new CandidateBackground_TalentPoolRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_TalentPool`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateBackground_TalentPool`.
   */
  static customField(fieldName: string): CustomField<CandidateBackground_TalentPool> {
    return Entity.customFieldSelector(fieldName, CandidateBackground_TalentPool);
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

export interface CandidateBackground_TalentPoolType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  lastModifiedDateTime: Moment;
  startDate?: Moment;
  talentPoolComments?: string;
  talentPoolStatus?: string;
  talentPoolitem?: string;
  candidate: CandidateType;
}

export interface CandidateBackground_TalentPoolTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  lastModifiedDateTime: Moment;
  startDate: Moment;
  talentPoolComments: string;
  talentPoolStatus: string;
  talentPoolitem: string;
  candidate: CandidateType;
}

export namespace CandidateBackground_TalentPool {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_TalentPool> = new BigNumberField('backgroundElementId', CandidateBackground_TalentPool, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<CandidateBackground_TalentPool> = new BigNumberField('bgOrderPos', CandidateBackground_TalentPool, 'Edm.Int64');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateBackground_TalentPool> = new BigNumberField('candidateId', CandidateBackground_TalentPool, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_TalentPool> = new DateField('lastModifiedDateTime', CandidateBackground_TalentPool, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<CandidateBackground_TalentPool> = new DateField('startDate', CandidateBackground_TalentPool, 'Edm.DateTime');
  /**
   * Static representation of the [[talentPoolComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL_COMMENTS: StringField<CandidateBackground_TalentPool> = new StringField('talentPoolComments', CandidateBackground_TalentPool, 'Edm.String');
  /**
   * Static representation of the [[talentPoolStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL_STATUS: StringField<CandidateBackground_TalentPool> = new StringField('talentPoolStatus', CandidateBackground_TalentPool, 'Edm.String');
  /**
   * Static representation of the [[talentPoolitem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOLITEM: StringField<CandidateBackground_TalentPool> = new StringField('talentPoolitem', CandidateBackground_TalentPool, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[candidate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: OneToOneLink<CandidateBackground_TalentPool, Candidate> = new OneToOneLink('candidate', CandidateBackground_TalentPool, Candidate);
  /**
   * All fields of the CandidateBackground_TalentPool entity.
   */
  export const _allFields: Array<BigNumberField<CandidateBackground_TalentPool> | DateField<CandidateBackground_TalentPool> | StringField<CandidateBackground_TalentPool> | OneToOneLink<CandidateBackground_TalentPool, Candidate>> = [
    CandidateBackground_TalentPool.BACKGROUND_ELEMENT_ID,
    CandidateBackground_TalentPool.BG_ORDER_POS,
    CandidateBackground_TalentPool.CANDIDATE_ID,
    CandidateBackground_TalentPool.LAST_MODIFIED_DATE_TIME,
    CandidateBackground_TalentPool.START_DATE,
    CandidateBackground_TalentPool.TALENT_POOL_COMMENTS,
    CandidateBackground_TalentPool.TALENT_POOL_STATUS,
    CandidateBackground_TalentPool.TALENT_POOLITEM,
    CandidateBackground_TalentPool.CANDIDATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateBackground_TalentPool> = new AllFields('*', CandidateBackground_TalentPool);
  /**
   * All key fields of the CandidateBackground_TalentPool entity.
   */
  export const _keyFields: Array<Selectable<CandidateBackground_TalentPool>> = [CandidateBackground_TalentPool.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateBackground_TalentPool.
   */
  export const _keys: { [keys: string]: Selectable<CandidateBackground_TalentPool> } = CandidateBackground_TalentPool._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateBackground_TalentPool> }, field: Selectable<CandidateBackground_TalentPool>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
