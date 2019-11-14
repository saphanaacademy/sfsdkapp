/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { CandidateCommentsRequestBuilder } from './CandidateCommentsRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, OneToOneLink, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "CandidateComments" of service "SFOData".
 */
export declare class CandidateComments extends Entity implements CandidateCommentsType {
    /**
     * Technical entity name for CandidateComments.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateComments.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    commentId: BigNumber;
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
    candidate: Candidate;
    /**
     * Returns an entity builder to construct instances `CandidateComments`.
     * @returns A builder that constructs instances of entity type `CandidateComments`.
     */
    static builder(): EntityBuilderType<CandidateComments, CandidateCommentsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateComments` entity type.
     * @returns A `CandidateComments` request builder.
     */
    static requestBuilder(): CandidateCommentsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateComments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateComments`.
     */
    static customField(fieldName: string): CustomField<CandidateComments>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace CandidateComments {
    /**
     * Static representation of the [[associatedCommentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSOCIATED_COMMENT_ID: BigNumberField<CandidateComments>;
    /**
     * Static representation of the [[associatedId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSOCIATED_ID: BigNumberField<CandidateComments>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateComments>;
    /**
     * Static representation of the [[commentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT_ID: BigNumberField<CandidateComments>;
    /**
     * Static representation of the [[commentator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTATOR: StringField<CandidateComments>;
    /**
     * Static representation of the [[content]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTENT: StringField<CandidateComments>;
    /**
     * Static representation of the [[hasAssociatedComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_ASSOCIATED_COMMENT: StringField<CandidateComments>;
    /**
     * Static representation of the [[migratedCommentatorUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIGRATED_COMMENTATOR_USER_NAME: StringField<CandidateComments>;
    /**
     * Static representation of the [[refType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REF_TYPE: StringField<CandidateComments>;
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE: OneToOneLink<CandidateComments, Candidate>;
    /**
     * All fields of the CandidateComments entity.
     */
    const _allFields: Array<BigNumberField<CandidateComments> | StringField<CandidateComments> | OneToOneLink<CandidateComments, Candidate>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateComments>;
    /**
     * All key fields of the CandidateComments entity.
     */
    const _keyFields: Array<Selectable<CandidateComments>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateComments.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateComments>;
    };
}
//# sourceMappingURL=CandidateComments.d.ts.map