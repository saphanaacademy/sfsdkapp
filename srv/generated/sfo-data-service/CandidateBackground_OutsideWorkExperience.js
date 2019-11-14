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
var CandidateBackground_OutsideWorkExperienceRequestBuilder_1 = require("./CandidateBackground_OutsideWorkExperienceRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CandidateBackground_OutsideWorkExperience" of service "SFOData".
 */
var CandidateBackground_OutsideWorkExperience = /** @class */ (function (_super) {
    __extends(CandidateBackground_OutsideWorkExperience, _super);
    function CandidateBackground_OutsideWorkExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateBackground_OutsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_OutsideWorkExperience`.
     */
    CandidateBackground_OutsideWorkExperience.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(CandidateBackground_OutsideWorkExperience);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_OutsideWorkExperience` entity type.
     * @returns A `CandidateBackground_OutsideWorkExperience` request builder.
     */
    CandidateBackground_OutsideWorkExperience.requestBuilder = function () {
        return new CandidateBackground_OutsideWorkExperienceRequestBuilder_1.CandidateBackground_OutsideWorkExperienceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_OutsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_OutsideWorkExperience`.
     */
    CandidateBackground_OutsideWorkExperience.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, CandidateBackground_OutsideWorkExperience);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateBackground_OutsideWorkExperience.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for CandidateBackground_OutsideWorkExperience.
     */
    CandidateBackground_OutsideWorkExperience._entityName = 'CandidateBackground_OutsideWorkExperience';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_OutsideWorkExperience.
     */
    CandidateBackground_OutsideWorkExperience._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateBackground_OutsideWorkExperience._defaultServicePath = '/odata/v2';
    return CandidateBackground_OutsideWorkExperience;
}(cloud_sdk_core_1.Entity));
exports.CandidateBackground_OutsideWorkExperience = CandidateBackground_OutsideWorkExperience;
var Candidate_1 = require("./Candidate");
(function (CandidateBackground_OutsideWorkExperience) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', CandidateBackground_OutsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', CandidateBackground_OutsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[businessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.BUSINESS_TYPE = new cloud_sdk_core_1.StringField('businessType', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.CANDIDATE_ID = new cloud_sdk_core_1.BigNumberField('candidateId', CandidateBackground_OutsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[employer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.EMPLOYER = new cloud_sdk_core_1.StringField('employer', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.EMPLOYER_ADDRESS = new cloud_sdk_core_1.StringField('employerAddress', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.EMPLOYER_CITY = new cloud_sdk_core_1.StringField('employerCity', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.EMPLOYER_CONTACT = new cloud_sdk_core_1.StringField('employerContact', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.EMPLOYER_COUNTRY = new cloud_sdk_core_1.StringField('employerCountry', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.EMPLOYER_EMAIL = new cloud_sdk_core_1.StringField('employerEmail', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.EMPLOYER_PHONE = new cloud_sdk_core_1.StringField('employerPhone', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.EMPLOYER_STATE = new cloud_sdk_core_1.StringField('employerState', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerZip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.EMPLOYER_ZIP = new cloud_sdk_core_1.StringField('employerZip', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.END_DATE = new cloud_sdk_core_1.DateField('endDate', CandidateBackground_OutsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', CandidateBackground_OutsideWorkExperience, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[presentEmployer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.PRESENT_EMPLOYER = new cloud_sdk_core_1.StringField('presentEmployer', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.START_DATE = new cloud_sdk_core_1.DateField('startDate', CandidateBackground_OutsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[startTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.START_TITLE = new cloud_sdk_core_1.StringField('startTitle', CandidateBackground_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_OutsideWorkExperience.CANDIDATE = new cloud_sdk_core_1.OneToOneLink('candidate', CandidateBackground_OutsideWorkExperience, Candidate_1.Candidate);
    /**
     * All fields of the CandidateBackground_OutsideWorkExperience entity.
     */
    CandidateBackground_OutsideWorkExperience._allFields = [
        CandidateBackground_OutsideWorkExperience.BACKGROUND_ELEMENT_ID,
        CandidateBackground_OutsideWorkExperience.BG_ORDER_POS,
        CandidateBackground_OutsideWorkExperience.BUSINESS_TYPE,
        CandidateBackground_OutsideWorkExperience.CANDIDATE_ID,
        CandidateBackground_OutsideWorkExperience.EMPLOYER,
        CandidateBackground_OutsideWorkExperience.EMPLOYER_ADDRESS,
        CandidateBackground_OutsideWorkExperience.EMPLOYER_CITY,
        CandidateBackground_OutsideWorkExperience.EMPLOYER_CONTACT,
        CandidateBackground_OutsideWorkExperience.EMPLOYER_COUNTRY,
        CandidateBackground_OutsideWorkExperience.EMPLOYER_EMAIL,
        CandidateBackground_OutsideWorkExperience.EMPLOYER_PHONE,
        CandidateBackground_OutsideWorkExperience.EMPLOYER_STATE,
        CandidateBackground_OutsideWorkExperience.EMPLOYER_ZIP,
        CandidateBackground_OutsideWorkExperience.END_DATE,
        CandidateBackground_OutsideWorkExperience.LAST_MODIFIED_DATE_TIME,
        CandidateBackground_OutsideWorkExperience.PRESENT_EMPLOYER,
        CandidateBackground_OutsideWorkExperience.START_DATE,
        CandidateBackground_OutsideWorkExperience.START_TITLE,
        CandidateBackground_OutsideWorkExperience.CANDIDATE
    ];
    /**
     * All fields selector.
     */
    CandidateBackground_OutsideWorkExperience.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', CandidateBackground_OutsideWorkExperience);
    /**
     * All key fields of the CandidateBackground_OutsideWorkExperience entity.
     */
    CandidateBackground_OutsideWorkExperience._keyFields = [CandidateBackground_OutsideWorkExperience.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_OutsideWorkExperience.
     */
    CandidateBackground_OutsideWorkExperience._keys = CandidateBackground_OutsideWorkExperience._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(CandidateBackground_OutsideWorkExperience = exports.CandidateBackground_OutsideWorkExperience || (exports.CandidateBackground_OutsideWorkExperience = {}));
exports.CandidateBackground_OutsideWorkExperience = CandidateBackground_OutsideWorkExperience;
//# sourceMappingURL=CandidateBackground_OutsideWorkExperience.js.map