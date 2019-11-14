/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { CandidateTagsRequestBuilder } from './CandidateTagsRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, Link, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "CandidateTags" of service "SFOData".
 */
export class CandidateTags extends Entity implements CandidateTagsType {
  /**
   * Technical entity name for CandidateTags.
   */
  static _entityName = 'CandidateTags';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateTags.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * candidateId.
   * @nullable
   */
  candidateId?: BigNumber;
  /**
   * label.
   * @nullable
   */
  label?: string;
  /**
   * Locale.
   * @nullable
   */
  locale?: string;
  /**
   * Tag Id.
   */
  tagId!: BigNumber;
  /**
   * One-to-many navigation property to the [[Candidate]] entity.
   */
  candidates!: Candidate[];

  /**
   * Returns an entity builder to construct instances `CandidateTags`.
   * @returns A builder that constructs instances of entity type `CandidateTags`.
   */
  static builder(): EntityBuilderType<CandidateTags, CandidateTagsTypeForceMandatory> {
    return Entity.entityBuilder(CandidateTags);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateTags` entity type.
   * @returns A `CandidateTags` request builder.
   */
  static requestBuilder(): CandidateTagsRequestBuilder {
    return new CandidateTagsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateTags`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateTags`.
   */
  static customField(fieldName: string): CustomField<CandidateTags> {
    return Entity.customFieldSelector(fieldName, CandidateTags);
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

export interface CandidateTagsType {
  candidateId?: BigNumber;
  label?: string;
  locale?: string;
  tagId: BigNumber;
  candidates: CandidateType[];
}

export interface CandidateTagsTypeForceMandatory {
  candidateId: BigNumber;
  label: string;
  locale: string;
  tagId: BigNumber;
  candidates: CandidateType[];
}

export namespace CandidateTags {
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateTags> = new BigNumberField('candidateId', CandidateTags, 'Edm.Int64');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<CandidateTags> = new StringField('label', CandidateTags, 'Edm.String');
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<CandidateTags> = new StringField('locale', CandidateTags, 'Edm.String');
  /**
   * Static representation of the [[tagId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAG_ID: BigNumberField<CandidateTags> = new BigNumberField('tagId', CandidateTags, 'Edm.Int64');
  /**
   * Static representation of the one-to-many navigation property [[candidates]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATES: Link<CandidateTags, Candidate> = new Link('candidates', CandidateTags, Candidate);
  /**
   * All fields of the CandidateTags entity.
   */
  export const _allFields: Array<BigNumberField<CandidateTags> | StringField<CandidateTags> | Link<CandidateTags, Candidate>> = [
    CandidateTags.CANDIDATE_ID,
    CandidateTags.LABEL,
    CandidateTags.LOCALE,
    CandidateTags.TAG_ID,
    CandidateTags.CANDIDATES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateTags> = new AllFields('*', CandidateTags);
  /**
   * All key fields of the CandidateTags entity.
   */
  export const _keyFields: Array<Selectable<CandidateTags>> = [CandidateTags.TAG_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateTags.
   */
  export const _keys: { [keys: string]: Selectable<CandidateTags> } = CandidateTags._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateTags> }, field: Selectable<CandidateTags>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
