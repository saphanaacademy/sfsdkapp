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
var CandidateBackground_CertificatesRequestBuilder_1 = require("./CandidateBackground_CertificatesRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CandidateBackground_Certificates" of service "SFOData".
 */
var CandidateBackground_Certificates = /** @class */ (function (_super) {
    __extends(CandidateBackground_Certificates, _super);
    function CandidateBackground_Certificates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateBackground_Certificates`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_Certificates`.
     */
    CandidateBackground_Certificates.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(CandidateBackground_Certificates);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_Certificates` entity type.
     * @returns A `CandidateBackground_Certificates` request builder.
     */
    CandidateBackground_Certificates.requestBuilder = function () {
        return new CandidateBackground_CertificatesRequestBuilder_1.CandidateBackground_CertificatesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Certificates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_Certificates`.
     */
    CandidateBackground_Certificates.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, CandidateBackground_Certificates);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateBackground_Certificates.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for CandidateBackground_Certificates.
     */
    CandidateBackground_Certificates._entityName = 'CandidateBackground_Certificates';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_Certificates.
     */
    CandidateBackground_Certificates._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateBackground_Certificates._defaultServicePath = '/odata/v2';
    return CandidateBackground_Certificates;
}(cloud_sdk_core_1.Entity));
exports.CandidateBackground_Certificates = CandidateBackground_Certificates;
var Candidate_1 = require("./Candidate");
(function (CandidateBackground_Certificates) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', CandidateBackground_Certificates, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', CandidateBackground_Certificates, 'Edm.Int64');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.CANDIDATE_ID = new cloud_sdk_core_1.BigNumberField('candidateId', CandidateBackground_Certificates, 'Edm.Int64');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.DESCRIPTION = new cloud_sdk_core_1.StringField('description', CandidateBackground_Certificates, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.END_DATE = new cloud_sdk_core_1.DateField('endDate', CandidateBackground_Certificates, 'Edm.DateTime');
    /**
     * Static representation of the [[institution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.INSTITUTION = new cloud_sdk_core_1.StringField('institution', CandidateBackground_Certificates, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', CandidateBackground_Certificates, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[licenseCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.LICENSE_COUNTRY = new cloud_sdk_core_1.StringField('licenseCountry', CandidateBackground_Certificates, 'Edm.String');
    /**
     * Static representation of the [[licenseName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.LICENSE_NAME = new cloud_sdk_core_1.StringField('licenseName', CandidateBackground_Certificates, 'Edm.String');
    /**
     * Static representation of the [[licenseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.LICENSE_NUMBER = new cloud_sdk_core_1.StringField('licenseNumber', CandidateBackground_Certificates, 'Edm.String');
    /**
     * Static representation of the [[licenseState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.LICENSE_STATE = new cloud_sdk_core_1.StringField('licenseState', CandidateBackground_Certificates, 'Edm.String');
    /**
     * Static representation of the [[licenseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.LICENSE_TYPE = new cloud_sdk_core_1.StringField('licenseType', CandidateBackground_Certificates, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.NAME = new cloud_sdk_core_1.StringField('name', CandidateBackground_Certificates, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.START_DATE = new cloud_sdk_core_1.DateField('startDate', CandidateBackground_Certificates, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Certificates.CANDIDATE = new cloud_sdk_core_1.OneToOneLink('candidate', CandidateBackground_Certificates, Candidate_1.Candidate);
    /**
     * All fields of the CandidateBackground_Certificates entity.
     */
    CandidateBackground_Certificates._allFields = [
        CandidateBackground_Certificates.BACKGROUND_ELEMENT_ID,
        CandidateBackground_Certificates.BG_ORDER_POS,
        CandidateBackground_Certificates.CANDIDATE_ID,
        CandidateBackground_Certificates.DESCRIPTION,
        CandidateBackground_Certificates.END_DATE,
        CandidateBackground_Certificates.INSTITUTION,
        CandidateBackground_Certificates.LAST_MODIFIED_DATE_TIME,
        CandidateBackground_Certificates.LICENSE_COUNTRY,
        CandidateBackground_Certificates.LICENSE_NAME,
        CandidateBackground_Certificates.LICENSE_NUMBER,
        CandidateBackground_Certificates.LICENSE_STATE,
        CandidateBackground_Certificates.LICENSE_TYPE,
        CandidateBackground_Certificates.NAME,
        CandidateBackground_Certificates.START_DATE,
        CandidateBackground_Certificates.CANDIDATE
    ];
    /**
     * All fields selector.
     */
    CandidateBackground_Certificates.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', CandidateBackground_Certificates);
    /**
     * All key fields of the CandidateBackground_Certificates entity.
     */
    CandidateBackground_Certificates._keyFields = [CandidateBackground_Certificates.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_Certificates.
     */
    CandidateBackground_Certificates._keys = CandidateBackground_Certificates._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(CandidateBackground_Certificates = exports.CandidateBackground_Certificates || (exports.CandidateBackground_Certificates = {}));
exports.CandidateBackground_Certificates = CandidateBackground_Certificates;
//# sourceMappingURL=CandidateBackground_Certificates.js.map