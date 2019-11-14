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
export declare class CandidateBackground_TalentPoolcorp extends Entity implements CandidateBackground_TalentPoolcorpType {
    /**
     * Technical entity name for CandidateBackground_TalentPoolcorp.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_TalentPoolcorp.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Background Element Id.
     */
    backgroundElementId: BigNumber;
    /**
     * Background Order Position.
     */
    bgOrderPos: BigNumber;
    /**
     * Candidate Id.
     */
    candidateId: BigNumber;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
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
    candidate: Candidate;
    /**
     * Returns an entity builder to construct instances `CandidateBackground_TalentPoolcorp`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_TalentPoolcorp`.
     */
    static builder(): EntityBuilderType<CandidateBackground_TalentPoolcorp, CandidateBackground_TalentPoolcorpTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_TalentPoolcorp` entity type.
     * @returns A `CandidateBackground_TalentPoolcorp` request builder.
     */
    static requestBuilder(): CandidateBackground_TalentPoolcorpRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_TalentPoolcorp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_TalentPoolcorp`.
     */
    static customField(fieldName: string): CustomField<CandidateBackground_TalentPoolcorp>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace CandidateBackground_TalentPoolcorp {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_TalentPoolcorp>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<CandidateBackground_TalentPoolcorp>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateBackground_TalentPoolcorp>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_TalentPoolcorp>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<CandidateBackground_TalentPoolcorp>;
    /**
     * Static representation of the [[talentPoolComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL_COMMENTS: StringField<CandidateBackground_TalentPoolcorp>;
    /**
     * Static representation of the [[talentPoolStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL_STATUS: StringField<CandidateBackground_TalentPoolcorp>;
    /**
     * Static representation of the [[talentPoolitemCorp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOLITEM_CORP: StringField<CandidateBackground_TalentPoolcorp>;
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE: OneToOneLink<CandidateBackground_TalentPoolcorp, Candidate>;
    /**
     * All fields of the CandidateBackground_TalentPoolcorp entity.
     */
    const _allFields: Array<BigNumberField<CandidateBackground_TalentPoolcorp> | DateField<CandidateBackground_TalentPoolcorp> | StringField<CandidateBackground_TalentPoolcorp> | OneToOneLink<CandidateBackground_TalentPoolcorp, Candidate>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateBackground_TalentPoolcorp>;
    /**
     * All key fields of the CandidateBackground_TalentPoolcorp entity.
     */
    const _keyFields: Array<Selectable<CandidateBackground_TalentPoolcorp>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_TalentPoolcorp.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateBackground_TalentPoolcorp>;
    };
}
//# sourceMappingURL=CandidateBackground_TalentPoolcorp.d.ts.map