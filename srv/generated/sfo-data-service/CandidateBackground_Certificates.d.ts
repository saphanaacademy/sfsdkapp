/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { CandidateBackground_CertificatesRequestBuilder } from './CandidateBackground_CertificatesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, OneToOneLink, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "CandidateBackground_Certificates" of service "SFOData".
 */
export declare class CandidateBackground_Certificates extends Entity implements CandidateBackground_CertificatesType {
    /**
     * Technical entity name for CandidateBackground_Certificates.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_Certificates.
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
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Expiration Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Institution.
     * @nullable
     */
    institution?: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Certification/License Country.
     * @nullable
     */
    licenseCountry?: string;
    /**
     * Name as appears on Certification/License.
     * @nullable
     */
    licenseName?: string;
    /**
     * Certification/License Number.
     * @nullable
     */
    licenseNumber?: string;
    /**
     * Certification/License State.
     * @nullable
     */
    licenseState?: string;
    /**
     * Certification/License Type.
     * @nullable
     */
    licenseType?: string;
    /**
     * Certification/License Name.
     * @nullable
     */
    name?: string;
    /**
     * Effective Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * One-to-one navigation property to the [[Candidate]] entity.
     */
    candidate: Candidate;
    /**
     * Returns an entity builder to construct instances `CandidateBackground_Certificates`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_Certificates`.
     */
    static builder(): EntityBuilderType<CandidateBackground_Certificates, CandidateBackground_CertificatesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_Certificates` entity type.
     * @returns A `CandidateBackground_Certificates` request builder.
     */
    static requestBuilder(): CandidateBackground_CertificatesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Certificates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_Certificates`.
     */
    static customField(fieldName: string): CustomField<CandidateBackground_Certificates>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Candidate, CandidateType } from './Candidate';
export interface CandidateBackground_CertificatesType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    candidateId: BigNumber;
    description?: string;
    endDate?: Moment;
    institution?: string;
    lastModifiedDateTime: Moment;
    licenseCountry?: string;
    licenseName?: string;
    licenseNumber?: string;
    licenseState?: string;
    licenseType?: string;
    name?: string;
    startDate?: Moment;
    candidate: CandidateType;
}
export interface CandidateBackground_CertificatesTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    candidateId: BigNumber;
    description: string;
    endDate: Moment;
    institution: string;
    lastModifiedDateTime: Moment;
    licenseCountry: string;
    licenseName: string;
    licenseNumber: string;
    licenseState: string;
    licenseType: string;
    name: string;
    startDate: Moment;
    candidate: CandidateType;
}
export declare namespace CandidateBackground_Certificates {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[institution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTITUTION: StringField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[licenseCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LICENSE_COUNTRY: StringField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[licenseName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LICENSE_NAME: StringField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[licenseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LICENSE_NUMBER: StringField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[licenseState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LICENSE_STATE: StringField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[licenseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LICENSE_TYPE: StringField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<CandidateBackground_Certificates>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<CandidateBackground_Certificates>;
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE: OneToOneLink<CandidateBackground_Certificates, Candidate>;
    /**
     * All fields of the CandidateBackground_Certificates entity.
     */
    const _allFields: Array<BigNumberField<CandidateBackground_Certificates> | StringField<CandidateBackground_Certificates> | DateField<CandidateBackground_Certificates> | OneToOneLink<CandidateBackground_Certificates, Candidate>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateBackground_Certificates>;
    /**
     * All key fields of the CandidateBackground_Certificates entity.
     */
    const _keyFields: Array<Selectable<CandidateBackground_Certificates>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_Certificates.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateBackground_Certificates>;
    };
}
//# sourceMappingURL=CandidateBackground_Certificates.d.ts.map