/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { JobApplicationSnapshot_CertificatesRequestBuilder } from './JobApplicationSnapshot_CertificatesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "JobApplicationSnapshot_Certificates" of service "SFOData".
 */
export declare class JobApplicationSnapshot_Certificates extends Entity implements JobApplicationSnapshot_CertificatesType {
    /**
     * Technical entity name for JobApplicationSnapshot_Certificates.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_Certificates.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Application Id.
     */
    applicationId: BigNumber;
    /**
     * Background Element Id.
     */
    backgroundElementId: BigNumber;
    /**
     * Background Order Position.
     */
    bgOrderPos: BigNumber;
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
     * Returns an entity builder to construct instances `JobApplicationSnapshot_Certificates`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Certificates`.
     */
    static builder(): EntityBuilderType<JobApplicationSnapshot_Certificates, JobApplicationSnapshot_CertificatesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Certificates` entity type.
     * @returns A `JobApplicationSnapshot_Certificates` request builder.
     */
    static requestBuilder(): JobApplicationSnapshot_CertificatesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Certificates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Certificates`.
     */
    static customField(fieldName: string): CustomField<JobApplicationSnapshot_Certificates>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface JobApplicationSnapshot_CertificatesType {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
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
}
export interface JobApplicationSnapshot_CertificatesTypeForceMandatory {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
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
}
export declare namespace JobApplicationSnapshot_Certificates {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[institution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTITUTION: StringField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[licenseCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LICENSE_COUNTRY: StringField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[licenseName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LICENSE_NAME: StringField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[licenseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LICENSE_NUMBER: StringField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[licenseState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LICENSE_STATE: StringField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[licenseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LICENSE_TYPE: StringField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<JobApplicationSnapshot_Certificates>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<JobApplicationSnapshot_Certificates>;
    /**
     * All fields of the JobApplicationSnapshot_Certificates entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationSnapshot_Certificates> | StringField<JobApplicationSnapshot_Certificates> | DateField<JobApplicationSnapshot_Certificates>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationSnapshot_Certificates>;
    /**
     * All key fields of the JobApplicationSnapshot_Certificates entity.
     */
    const _keyFields: Array<Selectable<JobApplicationSnapshot_Certificates>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Certificates.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationSnapshot_Certificates>;
    };
}
//# sourceMappingURL=JobApplicationSnapshot_Certificates.d.ts.map