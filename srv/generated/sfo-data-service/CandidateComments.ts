/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { CandidateCommentsRequestBuilder } from './CandidateCommentsRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, OneToOneLink, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CandidateComments" of service "SFOData".
 */
export class CandidateComments extends Entity implements CandidateCommentsType {
  /**
   * Technical entity name for CandidateComments.
   */
  static _entityName = 'CandidateComments';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateComments.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Associated Comment Id.
   * @nullable
   */
  associatedCommentId?: BigNumber;
  /**
   * Associated Id.
   * @nullable
   */
  associatedId?: BigNumber;
  /**
   * Candidate Id.
   * @nullable
   */
  candidateId?: BigNumber;
  /**
   * Comment Id.
   */
  commentId!: BigNumber;
  /**
   * Commentator.
   * @nullable
   */
  commentator?: string;
  /**
   * Content.
   * @nullable
   */
  content?: string;
  /**
   * Has Associated Comment.
   * @nullable
   */
  hasAssociatedComment?: string;
  /**
   * Migrated Commentator User Name.
   * @nullable
   */
  migratedCommentatorUserName?: string;
  /**
   * Reference Type.
   * @nullable
   */
  refType?: string;
  /**
   * One-to-one navigation property to the [[Candidate]] entity.
   */
  candidate!: Candidate;

  /**
   * Returns an entity builder to construct instances `CandidateComments`.
   * @returns A builder that constructs instances of entity type `CandidateComments`.
   */
  static builder(): EntityBuilderType<CandidateComments, CandidateCommentsTypeForceMandatory> {
    return Entity.entityBuilder(CandidateComments);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateComments` entity type.
   * @returns A `CandidateComments` request builder.
   */
  static requestBuilder(): CandidateCommentsRequestBuilder {
    return new CandidateCommentsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateComments`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateComments`.
   */
  static customField(fieldName: string): CustomField<CandidateComments> {
    return Entity.customFieldSelector(fieldName, CandidateComments);
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

export interface CandidateCommentsType {
  associatedCommentId?: BigNumber;
  associatedId?: BigNumber;
  candidateId?: BigNumber;
  commentId: BigNumber;
  commentator?: string;
  content?: string;
  hasAssociatedComment?: string;
  migratedCommentatorUserName?: string;
  refType?: string;
  candidate: CandidateType;
}

export interface CandidateCommentsTypeForceMandatory {
  associatedCommentId: BigNumber;
  associatedId: BigNumber;
  candidateId: BigNumber;
  commentId: BigNumber;
  commentator: string;
  content: string;
  hasAssociatedComment: string;
  migratedCommentatorUserName: string;
  refType: string;
  candidate: CandidateType;
}

export namespace CandidateComments {
  /**
   * Static representation of the [[associatedCommentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSOCIATED_COMMENT_ID: BigNumberField<CandidateComments> = new BigNumberField('associatedCommentId', CandidateComments, 'Edm.Int64');
  /**
   * Static representation of the [[associatedId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSOCIATED_ID: BigNumberField<CandidateComments> = new BigNumberField('associatedId', CandidateComments, 'Edm.Int64');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateComments> = new BigNumberField('candidateId', CandidateComments, 'Edm.Int64');
  /**
   * Static representation of the [[commentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_ID: BigNumberField<CandidateComments> = new BigNumberField('commentId', CandidateComments, 'Edm.Int64');
  /**
   * Static representation of the [[commentator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTATOR: StringField<CandidateComments> = new StringField('commentator', CandidateComments, 'Edm.String');
  /**
   * Static representation of the [[content]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTENT: StringField<CandidateComments> = new StringField('content', CandidateComments, 'Edm.String');
  /**
   * Static representation of the [[hasAssociatedComment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_ASSOCIATED_COMMENT: StringField<CandidateComments> = new StringField('hasAssociatedComment', CandidateComments, 'Edm.String');
  /**
   * Static representation of the [[migratedCommentatorUserName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIGRATED_COMMENTATOR_USER_NAME: StringField<CandidateComments> = new StringField('migratedCommentatorUserName', CandidateComments, 'Edm.String');
  /**
   * Static representation of the [[refType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REF_TYPE: StringField<CandidateComments> = new StringField('refType', CandidateComments, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[candidate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: OneToOneLink<CandidateComments, Candidate> = new OneToOneLink('candidate', CandidateComments, Candidate);
  /**
   * All fields of the CandidateComments entity.
   */
  export const _allFields: Array<BigNumberField<CandidateComments> | StringField<CandidateComments> | OneToOneLink<CandidateComments, Candidate>> = [
    CandidateComments.ASSOCIATED_COMMENT_ID,
    CandidateComments.ASSOCIATED_ID,
    CandidateComments.CANDIDATE_ID,
    CandidateComments.COMMENT_ID,
    CandidateComments.COMMENTATOR,
    CandidateComments.CONTENT,
    CandidateComments.HAS_ASSOCIATED_COMMENT,
    CandidateComments.MIGRATED_COMMENTATOR_USER_NAME,
    CandidateComments.REF_TYPE,
    CandidateComments.CANDIDATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateComments> = new AllFields('*', CandidateComments);
  /**
   * All key fields of the CandidateComments entity.
   */
  export const _keyFields: Array<Selectable<CandidateComments>> = [CandidateComments.COMMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateComments.
   */
  export const _keys: { [keys: string]: Selectable<CandidateComments> } = CandidateComments._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateComments> }, field: Selectable<CandidateComments>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
