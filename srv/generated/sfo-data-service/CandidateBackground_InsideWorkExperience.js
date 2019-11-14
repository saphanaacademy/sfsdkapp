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
var CandidateBackground_InsideWorkExperienceRequestBuilder_1 = require("./CandidateBackground_InsideWorkExperienceRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CandidateBackground_InsideWorkExperience" of service "SFOData".
 */
var CandidateBackground_InsideWorkExperience = /** @class */ (function (_super) {
    __extends(CandidateBackground_InsideWorkExperience, _super);
    function CandidateBackground_InsideWorkExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateBackground_InsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_InsideWorkExperience`.
     */
    CandidateBackground_InsideWorkExperience.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(CandidateBackground_InsideWorkExperience);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_InsideWorkExperience` entity type.
     * @returns A `CandidateBackground_InsideWorkExperience` request builder.
     */
    CandidateBackground_InsideWorkExperience.requestBuilder = function () {
        return new CandidateBackground_InsideWorkExperienceRequestBuilder_1.CandidateBackground_InsideWorkExperienceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_InsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_InsideWorkExperience`.
     */
    CandidateBackground_InsideWorkExperience.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, CandidateBackground_InsideWorkExperience);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateBackground_InsideWorkExperience.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for CandidateBackground_InsideWorkExperience.
     */
    CandidateBackground_InsideWorkExperience._entityName = 'CandidateBackground_InsideWorkExperience';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_InsideWorkExperience.
     */
    CandidateBackground_InsideWorkExperience._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateBackground_InsideWorkExperience._defaultServicePath = '/odata/v2';
    return CandidateBackground_InsideWorkExperience;
}(cloud_sdk_core_1.Entity));
exports.CandidateBackground_InsideWorkExperience = CandidateBackground_InsideWorkExperience;
var Candidate_1 = require("./Candidate");
(function (CandidateBackground_InsideWorkExperience) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_InsideWorkExperience.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', CandidateBackground_InsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_InsideWorkExperience.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', CandidateBackground_InsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_InsideWorkExperience.CANDIDATE_ID = new cloud_sdk_core_1.BigNumberField('candidateId', CandidateBackground_InsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_InsideWorkExperience.DEPARTMENT = new cloud_sdk_core_1.StringField('department', CandidateBackground_InsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_InsideWorkExperience.END_DATE = new cloud_sdk_core_1.DateField('endDate', CandidateBackground_InsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_InsideWorkExperience.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', CandidateBackground_InsideWorkExperience, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_InsideWorkExperience.START_DATE = new cloud_sdk_core_1.DateField('startDate', CandidateBackground_InsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_InsideWorkExperience.TITLE = new cloud_sdk_core_1.StringField('title', CandidateBackground_InsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_InsideWorkExperience.CANDIDATE = new cloud_sdk_core_1.OneToOneLink('candidate', CandidateBackground_InsideWorkExperience, Candidate_1.Candidate);
    /**
     * All fields of the CandidateBackground_InsideWorkExperience entity.
     */
    CandidateBackground_InsideWorkExperience._allFields = [
        CandidateBackground_InsideWorkExperience.BACKGROUND_ELEMENT_ID,
        CandidateBackground_InsideWorkExperience.BG_ORDER_POS,
        CandidateBackground_InsideWorkExperience.CANDIDATE_ID,
        CandidateBackground_InsideWorkExperience.DEPARTMENT,
        CandidateBackground_InsideWorkExperience.END_DATE,
        CandidateBackground_InsideWorkExperience.LAST_MODIFIED_DATE_TIME,
        CandidateBackground_InsideWorkExperience.START_DATE,
        CandidateBackground_InsideWorkExperience.TITLE,
        CandidateBackground_InsideWorkExperience.CANDIDATE
    ];
    /**
     * All fields selector.
     */
    CandidateBackground_InsideWorkExperience.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', CandidateBackground_InsideWorkExperience);
    /**
     * All key fields of the CandidateBackground_InsideWorkExperience entity.
     */
    CandidateBackground_InsideWorkExperience._keyFields = [CandidateBackground_InsideWorkExperience.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_InsideWorkExperience.
     */
    CandidateBackground_InsideWorkExperience._keys = CandidateBackground_InsideWorkExperience._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(CandidateBackground_InsideWorkExperience = exports.CandidateBackground_InsideWorkExperience || (exports.CandidateBackground_InsideWorkExperience = {}));
exports.CandidateBackground_InsideWorkExperience = CandidateBackground_InsideWorkExperience;
//# sourceMappingURL=CandidateBackground_InsideWorkExperience.js.map