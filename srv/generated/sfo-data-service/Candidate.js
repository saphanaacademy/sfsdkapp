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
var CandidateRequestBuilder_1 = require("./CandidateRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "Candidate" of service "SFOData".
 */
var Candidate = /** @class */ (function (_super) {
    __extends(Candidate, _super);
    function Candidate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Candidate`.
     * @returns A builder that constructs instances of entity type `Candidate`.
     */
    Candidate.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(Candidate);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Candidate` entity type.
     * @returns A `Candidate` request builder.
     */
    Candidate.requestBuilder = function () {
        return new CandidateRequestBuilder_1.CandidateRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Candidate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Candidate`.
     */
    Candidate.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, Candidate);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Candidate.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for Candidate.
     */
    Candidate._entityName = 'Candidate';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Candidate.
     */
    Candidate._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Candidate._defaultServicePath = '/odata/v2';
    return Candidate;
}(cloud_sdk_core_1.Entity));
exports.Candidate = Candidate;
var CandidateProfileExtension_1 = require("./CandidateProfileExtension");
var CandidateBackground_Certificates_1 = require("./CandidateBackground_Certificates");
var CandidateBackground_Education_1 = require("./CandidateBackground_Education");
var CandidateBackground_InsideWorkExperience_1 = require("./CandidateBackground_InsideWorkExperience");
var CandidateBackground_Languages_1 = require("./CandidateBackground_Languages");
var CandidateBackground_OutsideWorkExperience_1 = require("./CandidateBackground_OutsideWorkExperience");
var CandidateTags_1 = require("./CandidateTags");
var CandidateBackground_TalentPool_1 = require("./CandidateBackground_TalentPool");
var CandidateBackground_TalentPoolcorp_1 = require("./CandidateBackground_TalentPoolcorp");
(function (Candidate) {
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.ADDRESS = new cloud_sdk_core_1.StringField('address', Candidate, 'Edm.String');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.ADDRESS_2 = new cloud_sdk_core_1.StringField('address2', Candidate, 'Edm.String');
    /**
     * Static representation of the [[agreeToPrivacyStatement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.AGREE_TO_PRIVACY_STATEMENT = new cloud_sdk_core_1.StringField('agreeToPrivacyStatement', Candidate, 'Edm.String');
    /**
     * Static representation of the [[anonymized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.ANONYMIZED = new cloud_sdk_core_1.StringField('anonymized', Candidate, 'Edm.String');
    /**
     * Static representation of the [[anonymizedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.ANONYMIZED_DATE_TIME = new cloud_sdk_core_1.DateField('anonymizedDateTime', Candidate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.CANDIDATE_ID = new cloud_sdk_core_1.BigNumberField('candidateId', Candidate, 'Edm.Int64');
    /**
     * Static representation of the [[candidateLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.CANDIDATE_LOCALE = new cloud_sdk_core_1.StringField('candidateLocale', Candidate, 'Edm.String');
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.CELL_PHONE = new cloud_sdk_core_1.StringField('cellPhone', Candidate, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.CITY = new cloud_sdk_core_1.StringField('city', Candidate, 'Edm.String');
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.CONTACT_EMAIL = new cloud_sdk_core_1.StringField('contactEmail', Candidate, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.COUNTRY = new cloud_sdk_core_1.StringField('country', Candidate, 'Edm.String');
    /**
     * Static representation of the [[creationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.CREATION_DATE_TIME = new cloud_sdk_core_1.DateField('creationDateTime', Candidate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currentTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.CURRENT_TITLE = new cloud_sdk_core_1.StringField('currentTitle', Candidate, 'Edm.String');
    /**
     * Static representation of the [[dataPrivacyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.DATA_PRIVACY_ID = new cloud_sdk_core_1.BigNumberField('dataPrivacyId', Candidate, 'Edm.Int64');
    /**
     * Static representation of the [[dateofAvailability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.DATEOF_AVAILABILITY = new cloud_sdk_core_1.DateField('dateofAvailability', Candidate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCandidate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.EXTERNAL_CANDIDATE = new cloud_sdk_core_1.BooleanField('externalCandidate', Candidate, 'Edm.Boolean');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.FIRST_NAME = new cloud_sdk_core_1.StringField('firstName', Candidate, 'Edm.String');
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.HOME_PHONE = new cloud_sdk_core_1.StringField('homePhone', Candidate, 'Edm.String');
    /**
     * Static representation of the [[lastLoginDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.LAST_LOGIN_DATE_TIME = new cloud_sdk_core_1.DateField('lastLoginDateTime', Candidate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', Candidate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.LAST_NAME = new cloud_sdk_core_1.StringField('lastName', Candidate, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.MIDDLE_NAME = new cloud_sdk_core_1.StringField('middleName', Candidate, 'Edm.String');
    /**
     * Static representation of the [[partnerMemberId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.PARTNER_MEMBER_ID = new cloud_sdk_core_1.StringField('partnerMemberId', Candidate, 'Edm.String');
    /**
     * Static representation of the [[partnerSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.PARTNER_SOURCE = new cloud_sdk_core_1.BigNumberField('partnerSource', Candidate, 'Edm.Int64');
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.PASSWORD = new cloud_sdk_core_1.StringField('password', Candidate, 'Edm.String');
    /**
     * Static representation of the [[primaryEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.PRIMARY_EMAIL = new cloud_sdk_core_1.StringField('primaryEmail', Candidate, 'Edm.String');
    /**
     * Static representation of the [[privacyAcceptDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.PRIVACY_ACCEPT_DATE_TIME = new cloud_sdk_core_1.DateField('privacyAcceptDateTime', Candidate, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[publicIntranet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.PUBLIC_INTRANET = new cloud_sdk_core_1.BooleanField('publicIntranet', Candidate, 'Edm.Boolean');
    /**
     * Static representation of the [[shareProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.SHARE_PROFILE = new cloud_sdk_core_1.StringField('shareProfile', Candidate, 'Edm.String');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.USERS_SYS_ID = new cloud_sdk_core_1.StringField('usersSysId', Candidate, 'Edm.String');
    /**
     * Static representation of the [[visibilityOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.VISIBILITY_OPTION = new cloud_sdk_core_1.BooleanField('visibilityOption', Candidate, 'Edm.Boolean');
    /**
     * Static representation of the [[zip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.ZIP = new cloud_sdk_core_1.StringField('zip', Candidate, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[candidateProfileExtension]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.CANDIDATE_PROFILE_EXTENSION = new cloud_sdk_core_1.OneToOneLink('candidateProfileExtension', Candidate, CandidateProfileExtension_1.CandidateProfileExtension);
    /**
     * Static representation of the one-to-many navigation property [[certificates]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.CERTIFICATES = new cloud_sdk_core_1.Link('certificates', Candidate, CandidateBackground_Certificates_1.CandidateBackground_Certificates);
    /**
     * Static representation of the one-to-many navigation property [[education]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.EDUCATION = new cloud_sdk_core_1.Link('education', Candidate, CandidateBackground_Education_1.CandidateBackground_Education);
    /**
     * Static representation of the one-to-many navigation property [[insideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.INSIDE_WORK_EXPERIENCE = new cloud_sdk_core_1.Link('insideWorkExperience', Candidate, CandidateBackground_InsideWorkExperience_1.CandidateBackground_InsideWorkExperience);
    /**
     * Static representation of the one-to-many navigation property [[languages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.LANGUAGES = new cloud_sdk_core_1.Link('languages', Candidate, CandidateBackground_Languages_1.CandidateBackground_Languages);
    /**
     * Static representation of the one-to-many navigation property [[outsideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.OUTSIDE_WORK_EXPERIENCE = new cloud_sdk_core_1.Link('outsideWorkExperience', Candidate, CandidateBackground_OutsideWorkExperience_1.CandidateBackground_OutsideWorkExperience);
    /**
     * Static representation of the one-to-many navigation property [[tags]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.TAGS = new cloud_sdk_core_1.Link('tags', Candidate, CandidateTags_1.CandidateTags);
    /**
     * Static representation of the one-to-many navigation property [[talentPool]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.TALENT_POOL = new cloud_sdk_core_1.Link('talentPool', Candidate, CandidateBackground_TalentPool_1.CandidateBackground_TalentPool);
    /**
     * Static representation of the one-to-many navigation property [[talentPoolcorp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Candidate.TALENT_POOLCORP = new cloud_sdk_core_1.Link('talentPoolcorp', Candidate, CandidateBackground_TalentPoolcorp_1.CandidateBackground_TalentPoolcorp);
    /**
     * All fields of the Candidate entity.
     */
    Candidate._allFields = [
        Candidate.ADDRESS,
        Candidate.ADDRESS_2,
        Candidate.AGREE_TO_PRIVACY_STATEMENT,
        Candidate.ANONYMIZED,
        Candidate.ANONYMIZED_DATE_TIME,
        Candidate.CANDIDATE_ID,
        Candidate.CANDIDATE_LOCALE,
        Candidate.CELL_PHONE,
        Candidate.CITY,
        Candidate.CONTACT_EMAIL,
        Candidate.COUNTRY,
        Candidate.CREATION_DATE_TIME,
        Candidate.CURRENT_TITLE,
        Candidate.DATA_PRIVACY_ID,
        Candidate.DATEOF_AVAILABILITY,
        Candidate.EXTERNAL_CANDIDATE,
        Candidate.FIRST_NAME,
        Candidate.HOME_PHONE,
        Candidate.LAST_LOGIN_DATE_TIME,
        Candidate.LAST_MODIFIED_DATE_TIME,
        Candidate.LAST_NAME,
        Candidate.MIDDLE_NAME,
        Candidate.PARTNER_MEMBER_ID,
        Candidate.PARTNER_SOURCE,
        Candidate.PASSWORD,
        Candidate.PRIMARY_EMAIL,
        Candidate.PRIVACY_ACCEPT_DATE_TIME,
        Candidate.PUBLIC_INTRANET,
        Candidate.SHARE_PROFILE,
        Candidate.USERS_SYS_ID,
        Candidate.VISIBILITY_OPTION,
        Candidate.ZIP,
        Candidate.CANDIDATE_PROFILE_EXTENSION,
        Candidate.CERTIFICATES,
        Candidate.EDUCATION,
        Candidate.INSIDE_WORK_EXPERIENCE,
        Candidate.LANGUAGES,
        Candidate.OUTSIDE_WORK_EXPERIENCE,
        Candidate.TAGS,
        Candidate.TALENT_POOL,
        Candidate.TALENT_POOLCORP
    ];
    /**
     * All fields selector.
     */
    Candidate.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', Candidate);
    /**
     * All key fields of the Candidate entity.
     */
    Candidate._keyFields = [Candidate.CANDIDATE_ID];
    /**
     * Mapping of all key field names to the respective static field property Candidate.
     */
    Candidate._keys = Candidate._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(Candidate = exports.Candidate || (exports.Candidate = {}));
exports.Candidate = Candidate;
//# sourceMappingURL=Candidate.js.map