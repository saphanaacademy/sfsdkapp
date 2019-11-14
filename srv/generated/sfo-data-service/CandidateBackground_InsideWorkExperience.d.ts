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
export declare class CandidateBackground_InsideWorkExperience extends Entity implements CandidateBackground_InsideWorkExperienceType {
    /**
     * Technical entity name for CandidateBackground_InsideWorkExperience.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_InsideWorkExperience.
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
    lastModifiedDateTime: Moment;
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
    candidate: Candidate;
    /**
     * Returns an entity builder to construct instances `CandidateBackground_InsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_InsideWorkExperience`.
     */
    static builder(): EntityBuilderType<CandidateBackground_InsideWorkExperience, CandidateBackground_InsideWorkExperienceTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_InsideWorkExperience` entity type.
     * @returns A `CandidateBackground_InsideWorkExperience` request builder.
     */
    static requestBuilder(): CandidateBackground_InsideWorkExperienceRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_InsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_InsideWorkExperience`.
     */
    static customField(fieldName: string): CustomField<CandidateBackground_InsideWorkExperience>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace CandidateBackground_InsideWorkExperience {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_InsideWorkExperience>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<CandidateBackground_InsideWorkExperience>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateBackground_InsideWorkExperience>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: StringField<CandidateBackground_InsideWorkExperience>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<CandidateBackground_InsideWorkExperience>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_InsideWorkExperience>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<CandidateBackground_InsideWorkExperience>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<CandidateBackground_InsideWorkExperience>;
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE: OneToOneLink<CandidateBackground_InsideWorkExperience, Candidate>;
    /**
     * All fields of the CandidateBackground_InsideWorkExperience entity.
     */
    const _allFields: Array<BigNumberField<CandidateBackground_InsideWorkExperience> | StringField<CandidateBackground_InsideWorkExperience> | DateField<CandidateBackground_InsideWorkExperience> | OneToOneLink<CandidateBackground_InsideWorkExperience, Candidate>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateBackground_InsideWorkExperience>;
    /**
     * All key fields of the CandidateBackground_InsideWorkExperience entity.
     */
    const _keyFields: Array<Selectable<CandidateBackground_InsideWorkExperience>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_InsideWorkExperience.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateBackground_InsideWorkExperience>;
    };
}
//# sourceMappingURL=CandidateBackground_InsideWorkExperience.d.ts.map