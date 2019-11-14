/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { CandidateProfileExtensionRequestBuilder } from './CandidateProfileExtensionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "CandidateProfileExtension" of service "SFOData".
 */
export declare class CandidateProfileExtension extends Entity implements CandidateProfileExtensionType {
    /**
     * Technical entity name for CandidateProfileExtension.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateProfileExtension.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Candidate ID.
     */
    candidateId: BigNumber;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * mdfSystemRecordStatus.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Returns an entity builder to construct instances `CandidateProfileExtension`.
     * @returns A builder that constructs instances of entity type `CandidateProfileExtension`.
     */
    static builder(): EntityBuilderType<CandidateProfileExtension, CandidateProfileExtensionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateProfileExtension` entity type.
     * @returns A `CandidateProfileExtension` request builder.
     */
    static requestBuilder(): CandidateProfileExtensionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateProfileExtension`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateProfileExtension`.
     */
    static customField(fieldName: string): CustomField<CandidateProfileExtension>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CandidateProfileExtensionType {
    candidateId: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
}
export interface CandidateProfileExtensionTypeForceMandatory {
    candidateId: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
}
export declare namespace CandidateProfileExtension {
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateProfileExtension>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<CandidateProfileExtension>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<CandidateProfileExtension>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<CandidateProfileExtension>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CandidateProfileExtension>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<CandidateProfileExtension>;
    /**
     * All fields of the CandidateProfileExtension entity.
     */
    const _allFields: Array<BigNumberField<CandidateProfileExtension> | StringField<CandidateProfileExtension> | DateField<CandidateProfileExtension>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateProfileExtension>;
    /**
     * All key fields of the CandidateProfileExtension entity.
     */
    const _keyFields: Array<Selectable<CandidateProfileExtension>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateProfileExtension.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateProfileExtension>;
    };
}
//# sourceMappingURL=CandidateProfileExtension.d.ts.map