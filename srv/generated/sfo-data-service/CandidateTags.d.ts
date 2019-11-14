/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { CandidateTagsRequestBuilder } from './CandidateTagsRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, Link, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "CandidateTags" of service "SFOData".
 */
export declare class CandidateTags extends Entity implements CandidateTagsType {
    /**
     * Technical entity name for CandidateTags.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateTags.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    tagId: BigNumber;
    /**
     * One-to-many navigation property to the [[Candidate]] entity.
     */
    candidates: Candidate[];
    /**
     * Returns an entity builder to construct instances `CandidateTags`.
     * @returns A builder that constructs instances of entity type `CandidateTags`.
     */
    static builder(): EntityBuilderType<CandidateTags, CandidateTagsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateTags` entity type.
     * @returns A `CandidateTags` request builder.
     */
    static requestBuilder(): CandidateTagsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateTags`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateTags`.
     */
    static customField(fieldName: string): CustomField<CandidateTags>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace CandidateTags {
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateTags>;
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<CandidateTags>;
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<CandidateTags>;
    /**
     * Static representation of the [[tagId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAG_ID: BigNumberField<CandidateTags>;
    /**
     * Static representation of the one-to-many navigation property [[candidates]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATES: Link<CandidateTags, Candidate>;
    /**
     * All fields of the CandidateTags entity.
     */
    const _allFields: Array<BigNumberField<CandidateTags> | StringField<CandidateTags> | Link<CandidateTags, Candidate>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateTags>;
    /**
     * All key fields of the CandidateTags entity.
     */
    const _keyFields: Array<Selectable<CandidateTags>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateTags.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateTags>;
    };
}
//# sourceMappingURL=CandidateTags.d.ts.map