"use strict";
/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CandidateLightRequestBuilder_1 = require("./CandidateLightRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CandidateLight" of service "SFOData".
 */
var CandidateLight = /** @class */ (function (_super) {
    __extends(CandidateLight, _super);
    function CandidateLight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateLight`.
     * @returns A builder that constructs instances of entity type `CandidateLight`.
     */
    CandidateLight.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(CandidateLight);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateLight` entity type.
     * @returns A `CandidateLight` request builder.
     */
    CandidateLight.requestBuilder = function () {
        return new CandidateLightRequestBuilder_1.CandidateLightRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateLight`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateLight`.
     */
    CandidateLight.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, CandidateLight);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateLight.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for CandidateLight.
     */
    CandidateLight._entityName = 'CandidateLight';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateLight.
     */
    CandidateLight._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateLight._defaultServicePath = '/odata/v2';
    return CandidateLight;
}(cloud_sdk_core_1.Entity));
exports.CandidateLight = CandidateLight;
var CandidateProfileExtension_1 = require("./CandidateProfileExtension");
var CandidateBackground_Certificates_1 = require("./CandidateBackground_Certificates");
var CandidateBackground_Education_1 = require("./CandidateBackground_Education");
var CandidateBackground_InsideWorkExperience_1 = require("./CandidateBackground_InsideWorkExperience");
var CandidateBackground_Languages_1 = require("./CandidateBackground_Languages");
var CandidateBackground_OutsideWorkExperience_1 = require("./CandidateBackground_OutsideWorkExperience");
var CandidateTags_1 = require("./CandidateTags");
var CandidateBackground_TalentPool_1 = require("./CandidateBackground_TalentPool");
var CandidateBackground_TalentPoolcorp_1 = require("./CandidateBackground_TalentPoolcorp");
(function (CandidateLight) {
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.ADDRESS = new cloud_sdk_core_1.StringField('address', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.ADDRESS_2 = new cloud_sdk_core_1.StringField('address2', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[agreeToPrivacyStatement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.AGREE_TO_PRIVACY_STATEMENT = new cloud_sdk_core_1.StringField('agreeToPrivacyStatement', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[anonymized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.ANONYMIZED = new cloud_sdk_core_1.StringField('anonymized', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[anonymizedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.ANONYMIZED_DATE_TIME = new cloud_sdk_core_1.DateField('anonymizedDateTime', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CANDIDATE_ID = new cloud_sdk_core_1.BigNumberField('candidateId', CandidateLight, 'Edm.Int64');
    /**
     * Static representation of the [[candidateLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CANDIDATE_LOCALE = new cloud_sdk_core_1.StringField('candidateLocale', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CELL_PHONE = new cloud_sdk_core_1.StringField('cellPhone', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CITY = new cloud_sdk_core_1.StringField('city', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CONTACT_EMAIL = new cloud_sdk_core_1.StringField('contactEmail', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.COUNTRY = new cloud_sdk_core_1.StringField('country', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[creationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CREATION_DATE_TIME = new cloud_sdk_core_1.DateField('creationDateTime', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currentTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CURRENT_TITLE = new cloud_sdk_core_1.StringField('currentTitle', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[dataPrivacyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.DATA_PRIVACY_ID = new cloud_sdk_core_1.BigNumberField('dataPrivacyId', CandidateLight, 'Edm.Int64');
    /**
     * Static representation of the [[dateofAvailability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.DATEOF_AVAILABILITY = new cloud_sdk_core_1.DateField('dateofAvailability', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCandidate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.EXTERNAL_CANDIDATE = new cloud_sdk_core_1.BooleanField('externalCandidate', CandidateLight, 'Edm.Boolean');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.FIRST_NAME = new cloud_sdk_core_1.StringField('firstName', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.HOME_PHONE = new cloud_sdk_core_1.StringField('homePhone', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[lastLoginDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.LAST_LOGIN_DATE_TIME = new cloud_sdk_core_1.DateField('lastLoginDateTime', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.LAST_NAME = new cloud_sdk_core_1.StringField('lastName', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.MIDDLE_NAME = new cloud_sdk_core_1.StringField('middleName', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[partnerMemberId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PARTNER_MEMBER_ID = new cloud_sdk_core_1.StringField('partnerMemberId', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[partnerSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PARTNER_SOURCE = new cloud_sdk_core_1.BigNumberField('partnerSource', CandidateLight, 'Edm.Int64');
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PASSWORD = new cloud_sdk_core_1.StringField('password', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[primaryEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PRIMARY_EMAIL = new cloud_sdk_core_1.StringField('primaryEmail', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[privacyAcceptDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PRIVACY_ACCEPT_DATE_TIME = new cloud_sdk_core_1.DateField('privacyAcceptDateTime', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[publicIntranet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PUBLIC_INTRANET = new cloud_sdk_core_1.BooleanField('publicIntranet', CandidateLight, 'Edm.Boolean');
    /**
     * Static representation of the [[shareProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.SHARE_PROFILE = new cloud_sdk_core_1.StringField('shareProfile', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.USERS_SYS_ID = new cloud_sdk_core_1.StringField('usersSysId', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[visibilityOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.VISIBILITY_OPTION = new cloud_sdk_core_1.BooleanField('visibilityOption', CandidateLight, 'Edm.Boolean');
    /**
     * Static representation of the [[zip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.ZIP = new cloud_sdk_core_1.StringField('zip', CandidateLight, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[candidateProfileExtension]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CANDIDATE_PROFILE_EXTENSION = new cloud_sdk_core_1.OneToOneLink('candidateProfileExtension', CandidateLight, CandidateProfileExtension_1.CandidateProfileExtension);
    /**
     * Static representation of the one-to-many navigation property [[certificates]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CERTIFICATES = new cloud_sdk_core_1.Link('certificates', CandidateLight, CandidateBackground_Certificates_1.CandidateBackground_Certificates);
    /**
     * Static representation of the one-to-many navigation property [[education]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.EDUCATION = new cloud_sdk_core_1.Link('education', CandidateLight, CandidateBackground_Education_1.CandidateBackground_Education);
    /**
     * Static representation of the one-to-many navigation property [[insideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.INSIDE_WORK_EXPERIENCE = new cloud_sdk_core_1.Link('insideWorkExperience', CandidateLight, CandidateBackground_InsideWorkExperience_1.CandidateBackground_InsideWorkExperience);
    /**
     * Static representation of the one-to-many navigation property [[languages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.LANGUAGES = new cloud_sdk_core_1.Link('languages', CandidateLight, CandidateBackground_Languages_1.CandidateBackground_Languages);
    /**
     * Static representation of the one-to-many navigation property [[outsideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.OUTSIDE_WORK_EXPERIENCE = new cloud_sdk_core_1.Link('outsideWorkExperience', CandidateLight, CandidateBackground_OutsideWorkExperience_1.CandidateBackground_OutsideWorkExperience);
    /**
     * Static representation of the one-to-many navigation property [[tags]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.TAGS = new cloud_sdk_core_1.Link('tags', CandidateLight, CandidateTags_1.CandidateTags);
    /**
     * Static representation of the one-to-many navigation property [[talentPool]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.TALENT_POOL = new cloud_sdk_core_1.Link('talentPool', CandidateLight, CandidateBackground_TalentPool_1.CandidateBackground_TalentPool);
    /**
     * Static representation of the one-to-many navigation property [[talentPoolcorp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.TALENT_POOLCORP = new cloud_sdk_core_1.Link('talentPoolcorp', CandidateLight, CandidateBackground_TalentPoolcorp_1.CandidateBackground_TalentPoolcorp);
    /**
     * All fields of the CandidateLight entity.
     */
    CandidateLight._allFields = [
        CandidateLight.ADDRESS,
        CandidateLight.ADDRESS_2,
        CandidateLight.AGREE_TO_PRIVACY_STATEMENT,
        CandidateLight.ANONYMIZED,
        CandidateLight.ANONYMIZED_DATE_TIME,
        CandidateLight.CANDIDATE_ID,
        CandidateLight.CANDIDATE_LOCALE,
        CandidateLight.CELL_PHONE,
        CandidateLight.CITY,
        CandidateLight.CONTACT_EMAIL,
        CandidateLight.COUNTRY,
        CandidateLight.CREATION_DATE_TIME,
        CandidateLight.CURRENT_TITLE,
        CandidateLight.DATA_PRIVACY_ID,
        CandidateLight.DATEOF_AVAILABILITY,
        CandidateLight.EXTERNAL_CANDIDATE,
        CandidateLight.FIRST_NAME,
        CandidateLight.HOME_PHONE,
        CandidateLight.LAST_LOGIN_DATE_TIME,
        CandidateLight.LAST_MODIFIED_DATE_TIME,
        CandidateLight.LAST_NAME,
        CandidateLight.MIDDLE_NAME,
        CandidateLight.PARTNER_MEMBER_ID,
        CandidateLight.PARTNER_SOURCE,
        CandidateLight.PASSWORD,
        CandidateLight.PRIMARY_EMAIL,
        CandidateLight.PRIVACY_ACCEPT_DATE_TIME,
        CandidateLight.PUBLIC_INTRANET,
        CandidateLight.SHARE_PROFILE,
        CandidateLight.USERS_SYS_ID,
        CandidateLight.VISIBILITY_OPTION,
        CandidateLight.ZIP,
        CandidateLight.CANDIDATE_PROFILE_EXTENSION,
        CandidateLight.CERTIFICATES,
        CandidateLight.EDUCATION,
        CandidateLight.INSIDE_WORK_EXPERIENCE,
        CandidateLight.LANGUAGES,
        CandidateLight.OUTSIDE_WORK_EXPERIENCE,
        CandidateLight.TAGS,
        CandidateLight.TALENT_POOL,
        CandidateLight.TALENT_POOLCORP
    ];
    /**
     * All fields selector.
     */
    CandidateLight.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', CandidateLight);
    /**
     * All key fields of the CandidateLight entity.
     */
    CandidateLight._keyFields = [CandidateLight.CANDIDATE_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateLight.
     */
    CandidateLight._keys = CandidateLight._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(CandidateLight = exports.CandidateLight || (exports.CandidateLight = {}));
exports.CandidateLight = CandidateLight;
//# sourceMappingURL=CandidateLight.js.map