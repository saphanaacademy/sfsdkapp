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
var CandidateProfileExtensionRequestBuilder_1 = require("./CandidateProfileExtensionRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CandidateProfileExtension" of service "SFOData".
 */
var CandidateProfileExtension = /** @class */ (function (_super) {
    __extends(CandidateProfileExtension, _super);
    function CandidateProfileExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateProfileExtension`.
     * @returns A builder that constructs instances of entity type `CandidateProfileExtension`.
     */
    CandidateProfileExtension.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(CandidateProfileExtension);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateProfileExtension` entity type.
     * @returns A `CandidateProfileExtension` request builder.
     */
    CandidateProfileExtension.requestBuilder = function () {
        return new CandidateProfileExtensionRequestBuilder_1.CandidateProfileExtensionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateProfileExtension`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateProfileExtension`.
     */
    CandidateProfileExtension.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, CandidateProfileExtension);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateProfileExtension.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for CandidateProfileExtension.
     */
    CandidateProfileExtension._entityName = 'CandidateProfileExtension';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateProfileExtension.
     */
    CandidateProfileExtension._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateProfileExtension._defaultServicePath = '/odata/v2';
    return CandidateProfileExtension;
}(cloud_sdk_core_1.Entity));
exports.CandidateProfileExtension = CandidateProfileExtension;
(function (CandidateProfileExtension) {
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.CANDIDATE_ID = new cloud_sdk_core_1.BigNumberField('candidateId', CandidateProfileExtension, 'Edm.Int64');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.CREATED_BY = new cloud_sdk_core_1.StringField('createdBy', CandidateProfileExtension, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.CREATED_DATE_TIME = new cloud_sdk_core_1.DateField('createdDateTime', CandidateProfileExtension, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.LAST_MODIFIED_BY = new cloud_sdk_core_1.StringField('lastModifiedBy', CandidateProfileExtension, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', CandidateProfileExtension, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.MDF_SYSTEM_RECORD_STATUS = new cloud_sdk_core_1.StringField('mdfSystemRecordStatus', CandidateProfileExtension, 'Edm.String');
    /**
     * All fields of the CandidateProfileExtension entity.
     */
    CandidateProfileExtension._allFields = [
        CandidateProfileExtension.CANDIDATE_ID,
        CandidateProfileExtension.CREATED_BY,
        CandidateProfileExtension.CREATED_DATE_TIME,
        CandidateProfileExtension.LAST_MODIFIED_BY,
        CandidateProfileExtension.LAST_MODIFIED_DATE_TIME,
        CandidateProfileExtension.MDF_SYSTEM_RECORD_STATUS
    ];
    /**
     * All fields selector.
     */
    CandidateProfileExtension.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', CandidateProfileExtension);
    /**
     * All key fields of the CandidateProfileExtension entity.
     */
    CandidateProfileExtension._keyFields = [CandidateProfileExtension.CANDIDATE_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateProfileExtension.
     */
    CandidateProfileExtension._keys = CandidateProfileExtension._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(CandidateProfileExtension = exports.CandidateProfileExtension || (exports.CandidateProfileExtension = {}));
exports.CandidateProfileExtension = CandidateProfileExtension;
//# sourceMappingURL=CandidateProfileExtension.js.map