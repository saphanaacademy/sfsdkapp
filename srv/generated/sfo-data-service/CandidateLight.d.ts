/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { CandidateLightRequestBuilder } from './CandidateLightRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { StringField, DateField, BigNumberField, BooleanField, OneToOneLink, Link, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "CandidateLight" of service "SFOData".
 */
export declare class CandidateLight extends Entity implements CandidateLightType {
    /**
     * Technical entity name for CandidateLight.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateLight.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Address line 1.
     * @nullable
     */
    address?: string;
    /**
     * Address line 2.
     * @nullable
     */
    address2?: string;
    /**
     * Agreed to Privacy Statement.
     * @nullable
     */
    agreeToPrivacyStatement?: string;
    /**
     * Anonymized Flag.
     */
    anonymized: string;
    /**
     * Anonymized Date Time.
     */
    anonymizedDateTime: Moment;
    /**
     * Candidate Id.
     */
    candidateId: BigNumber;
    /**
     * Candidate Locale.
     */
    candidateLocale: string;
    /**
     * Primary Phone.
     * @nullable
     */
    cellPhone?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * Email Address.
     * @nullable
     */
    contactEmail?: string;
    /**
     * Country of Residence.
     * @nullable
     */
    country?: string;
    /**
     * Creation Date.
     */
    creationDateTime: Moment;
    /**
     * Current Title.
     * @nullable
     */
    currentTitle?: string;
    /**
     * Data Privacy Id.
     */
    dataPrivacyId: BigNumber;
    /**
     * Date of Availability.
     */
    dateofAvailability: Moment;
    /**
     * External Candidate.
     */
    externalCandidate: boolean;
    /**
     * First Name.
     * @nullable
     */
    firstName?: string;
    /**
     * Secondary Phone.
     * @nullable
     */
    homePhone?: string;
    /**
     * Last login date.
     */
    lastLoginDateTime: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Last Name.
     * @nullable
     */
    lastName?: string;
    /**
     * Middle Name.
     * @nullable
     */
    middleName?: string;
    /**
     * Partner Member Id.
     */
    partnerMemberId: string;
    /**
     * Partner Source.
     */
    partnerSource: BigNumber;
    /**
     * Password.
     * @nullable
     */
    password?: string;
    /**
     * Primary Email.
     */
    primaryEmail: string;
    /**
     * Privacy Acceptence Date.
     */
    privacyAcceptDateTime: Moment;
    /**
     * Public Intranet.
     */
    publicIntranet: boolean;
    /**
     * Share Profile flag.
     */
    shareProfile: string;
    /**
     * Users sys id.
     */
    usersSysId: string;
    /**
     * Visibility Option.
     */
    visibilityOption: boolean;
    /**
     * Zip Code.
     * @nullable
     */
    zip?: string;
    /**
     * One-to-one navigation property to the [[CandidateProfileExtension]] entity.
     */
    candidateProfileExtension: CandidateProfileExtension;
    /**
     * One-to-many navigation property to the [[CandidateBackground_Certificates]] entity.
     */
    certificates: CandidateBackground_Certificates[];
    /**
     * One-to-many navigation property to the [[CandidateBackground_Education]] entity.
     */
    education: CandidateBackground_Education[];
    /**
     * One-to-many navigation property to the [[CandidateBackground_InsideWorkExperience]] entity.
     */
    insideWorkExperience: CandidateBackground_InsideWorkExperience[];
    /**
     * One-to-many navigation property to the [[CandidateBackground_Languages]] entity.
     */
    languages: CandidateBackground_Languages[];
    /**
     * One-to-many navigation property to the [[CandidateBackground_OutsideWorkExperience]] entity.
     */
    outsideWorkExperience: CandidateBackground_OutsideWorkExperience[];
    /**
     * One-to-many navigation property to the [[CandidateTags]] entity.
     */
    tags: CandidateTags[];
    /**
     * One-to-many navigation property to the [[CandidateBackground_TalentPool]] entity.
     */
    talentPool: CandidateBackground_TalentPool[];
    /**
     * One-to-many navigation property to the [[CandidateBackground_TalentPoolcorp]] entity.
     */
    talentPoolcorp: CandidateBackground_TalentPoolcorp[];
    /**
     * Returns an entity builder to construct instances `CandidateLight`.
     * @returns A builder that constructs instances of entity type `CandidateLight`.
     */
    static builder(): EntityBuilderType<CandidateLight, CandidateLightTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateLight` entity type.
     * @returns A `CandidateLight` request builder.
     */
    static requestBuilder(): CandidateLightRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateLight`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateLight`.
     */
    static customField(fieldName: string): CustomField<CandidateLight>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CandidateProfileExtension, CandidateProfileExtensionType } from './CandidateProfileExtension';
import { CandidateBackground_Certificates, CandidateBackground_CertificatesType } from './CandidateBackground_Certificates';
import { CandidateBackground_Education, CandidateBackground_EducationType } from './CandidateBackground_Education';
import { CandidateBackground_InsideWorkExperience, CandidateBackground_InsideWorkExperienceType } from './CandidateBackground_InsideWorkExperience';
import { CandidateBackground_Languages, CandidateBackground_LanguagesType } from './CandidateBackground_Languages';
import { CandidateBackground_OutsideWorkExperience, CandidateBackground_OutsideWorkExperienceType } from './CandidateBackground_OutsideWorkExperience';
import { CandidateTags, CandidateTagsType } from './CandidateTags';
import { CandidateBackground_TalentPool, CandidateBackground_TalentPoolType } from './CandidateBackground_TalentPool';
import { CandidateBackground_TalentPoolcorp, CandidateBackground_TalentPoolcorpType } from './CandidateBackground_TalentPoolcorp';
export interface CandidateLightType {
    address?: string;
    address2?: string;
    agreeToPrivacyStatement?: string;
    anonymized: string;
    anonymizedDateTime: Moment;
    candidateId: BigNumber;
    candidateLocale: string;
    cellPhone?: string;
    city?: string;
    contactEmail?: string;
    country?: string;
    creationDateTime: Moment;
    currentTitle?: string;
    dataPrivacyId: BigNumber;
    dateofAvailability: Moment;
    externalCandidate: boolean;
    firstName?: string;
    homePhone?: string;
    lastLoginDateTime: Moment;
    lastModifiedDateTime: Moment;
    lastName?: string;
    middleName?: string;
    partnerMemberId: string;
    partnerSource: BigNumber;
    password?: string;
    primaryEmail: string;
    privacyAcceptDateTime: Moment;
    publicIntranet: boolean;
    shareProfile: string;
    usersSysId: string;
    visibilityOption: boolean;
    zip?: string;
    candidateProfileExtension: CandidateProfileExtensionType;
    certificates: CandidateBackground_CertificatesType[];
    education: CandidateBackground_EducationType[];
    insideWorkExperience: CandidateBackground_InsideWorkExperienceType[];
    languages: CandidateBackground_LanguagesType[];
    outsideWorkExperience: CandidateBackground_OutsideWorkExperienceType[];
    tags: CandidateTagsType[];
    talentPool: CandidateBackground_TalentPoolType[];
    talentPoolcorp: CandidateBackground_TalentPoolcorpType[];
}
export interface CandidateLightTypeForceMandatory {
    address: string;
    address2: string;
    agreeToPrivacyStatement: string;
    anonymized: string;
    anonymizedDateTime: Moment;
    candidateId: BigNumber;
    candidateLocale: string;
    cellPhone: string;
    city: string;
    contactEmail: string;
    country: string;
    creationDateTime: Moment;
    currentTitle: string;
    dataPrivacyId: BigNumber;
    dateofAvailability: Moment;
    externalCandidate: boolean;
    firstName: string;
    homePhone: string;
    lastLoginDateTime: Moment;
    lastModifiedDateTime: Moment;
    lastName: string;
    middleName: string;
    partnerMemberId: string;
    partnerSource: BigNumber;
    password: string;
    primaryEmail: string;
    privacyAcceptDateTime: Moment;
    publicIntranet: boolean;
    shareProfile: string;
    usersSysId: string;
    visibilityOption: boolean;
    zip: string;
    candidateProfileExtension: CandidateProfileExtensionType;
    certificates: CandidateBackground_CertificatesType[];
    education: CandidateBackground_EducationType[];
    insideWorkExperience: CandidateBackground_InsideWorkExperienceType[];
    languages: CandidateBackground_LanguagesType[];
    outsideWorkExperience: CandidateBackground_OutsideWorkExperienceType[];
    tags: CandidateTagsType[];
    talentPool: CandidateBackground_TalentPoolType[];
    talentPoolcorp: CandidateBackground_TalentPoolcorpType[];
}
export declare namespace CandidateLight {
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<CandidateLight>;
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_2: StringField<CandidateLight>;
    /**
     * Static representation of the [[agreeToPrivacyStatement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGREE_TO_PRIVACY_STATEMENT: StringField<CandidateLight>;
    /**
     * Static representation of the [[anonymized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANONYMIZED: StringField<CandidateLight>;
    /**
     * Static representation of the [[anonymizedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANONYMIZED_DATE_TIME: DateField<CandidateLight>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateLight>;
    /**
     * Static representation of the [[candidateLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_LOCALE: StringField<CandidateLight>;
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CELL_PHONE: StringField<CandidateLight>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<CandidateLight>;
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_EMAIL: StringField<CandidateLight>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<CandidateLight>;
    /**
     * Static representation of the [[creationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE_TIME: DateField<CandidateLight>;
    /**
     * Static representation of the [[currentTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_TITLE: StringField<CandidateLight>;
    /**
     * Static representation of the [[dataPrivacyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_PRIVACY_ID: BigNumberField<CandidateLight>;
    /**
     * Static representation of the [[dateofAvailability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATEOF_AVAILABILITY: DateField<CandidateLight>;
    /**
     * Static representation of the [[externalCandidate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CANDIDATE: BooleanField<CandidateLight>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<CandidateLight>;
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_PHONE: StringField<CandidateLight>;
    /**
     * Static representation of the [[lastLoginDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_LOGIN_DATE_TIME: DateField<CandidateLight>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CandidateLight>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<CandidateLight>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: StringField<CandidateLight>;
    /**
     * Static representation of the [[partnerMemberId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTNER_MEMBER_ID: StringField<CandidateLight>;
    /**
     * Static representation of the [[partnerSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTNER_SOURCE: BigNumberField<CandidateLight>;
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PASSWORD: StringField<CandidateLight>;
    /**
     * Static representation of the [[primaryEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIMARY_EMAIL: StringField<CandidateLight>;
    /**
     * Static representation of the [[privacyAcceptDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIVACY_ACCEPT_DATE_TIME: DateField<CandidateLight>;
    /**
     * Static representation of the [[publicIntranet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PUBLIC_INTRANET: BooleanField<CandidateLight>;
    /**
     * Static representation of the [[shareProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHARE_PROFILE: StringField<CandidateLight>;
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID: StringField<CandidateLight>;
    /**
     * Static representation of the [[visibilityOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VISIBILITY_OPTION: BooleanField<CandidateLight>;
    /**
     * Static representation of the [[zip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP: StringField<CandidateLight>;
    /**
     * Static representation of the one-to-one navigation property [[candidateProfileExtension]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_PROFILE_EXTENSION: OneToOneLink<CandidateLight, CandidateProfileExtension>;
    /**
     * Static representation of the one-to-many navigation property [[certificates]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CERTIFICATES: Link<CandidateLight, CandidateBackground_Certificates>;
    /**
     * Static representation of the one-to-many navigation property [[education]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDUCATION: Link<CandidateLight, CandidateBackground_Education>;
    /**
     * Static representation of the one-to-many navigation property [[insideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSIDE_WORK_EXPERIENCE: Link<CandidateLight, CandidateBackground_InsideWorkExperience>;
    /**
     * Static representation of the one-to-many navigation property [[languages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGES: Link<CandidateLight, CandidateBackground_Languages>;
    /**
     * Static representation of the one-to-many navigation property [[outsideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OUTSIDE_WORK_EXPERIENCE: Link<CandidateLight, CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the one-to-many navigation property [[tags]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAGS: Link<CandidateLight, CandidateTags>;
    /**
     * Static representation of the one-to-many navigation property [[talentPool]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL: Link<CandidateLight, CandidateBackground_TalentPool>;
    /**
     * Static representation of the one-to-many navigation property [[talentPoolcorp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOLCORP: Link<CandidateLight, CandidateBackground_TalentPoolcorp>;
    /**
     * All fields of the CandidateLight entity.
     */
    const _allFields: Array<StringField<CandidateLight> | DateField<CandidateLight> | BigNumberField<CandidateLight> | BooleanField<CandidateLight> | OneToOneLink<CandidateLight, CandidateProfileExtension> | Link<CandidateLight, CandidateBackground_Certificates> | Link<CandidateLight, CandidateBackground_Education> | Link<CandidateLight, CandidateBackground_InsideWorkExperience> | Link<CandidateLight, CandidateBackground_Languages> | Link<CandidateLight, CandidateBackground_OutsideWorkExperience> | Link<CandidateLight, CandidateTags> | Link<CandidateLight, CandidateBackground_TalentPool> | Link<CandidateLight, CandidateBackground_TalentPoolcorp>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateLight>;
    /**
     * All key fields of the CandidateLight entity.
     */
    const _keyFields: Array<Selectable<CandidateLight>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateLight.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateLight>;
    };
}
//# sourceMappingURL=CandidateLight.d.ts.map