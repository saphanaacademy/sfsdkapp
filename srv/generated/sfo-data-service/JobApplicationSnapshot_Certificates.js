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
var JobApplicationSnapshot_CertificatesRequestBuilder_1 = require("./JobApplicationSnapshot_CertificatesRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "JobApplicationSnapshot_Certificates" of service "SFOData".
 */
var JobApplicationSnapshot_Certificates = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_Certificates, _super);
    function JobApplicationSnapshot_Certificates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_Certificates`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Certificates`.
     */
    JobApplicationSnapshot_Certificates.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(JobApplicationSnapshot_Certificates);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Certificates` entity type.
     * @returns A `JobApplicationSnapshot_Certificates` request builder.
     */
    JobApplicationSnapshot_Certificates.requestBuilder = function () {
        return new JobApplicationSnapshot_CertificatesRequestBuilder_1.JobApplicationSnapshot_CertificatesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Certificates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Certificates`.
     */
    JobApplicationSnapshot_Certificates.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Certificates);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationSnapshot_Certificates.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for JobApplicationSnapshot_Certificates.
     */
    JobApplicationSnapshot_Certificates._entityName = 'JobApplicationSnapshot_Certificates';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_Certificates.
     */
    JobApplicationSnapshot_Certificates._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationSnapshot_Certificates._defaultServicePath = '/odata/v2';
    return JobApplicationSnapshot_Certificates;
}(cloud_sdk_core_1.Entity));
exports.JobApplicationSnapshot_Certificates = JobApplicationSnapshot_Certificates;
(function (JobApplicationSnapshot_Certificates) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.APPLICATION_ID = new cloud_sdk_core_1.BigNumberField('applicationId', JobApplicationSnapshot_Certificates, 'Edm.Int64');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', JobApplicationSnapshot_Certificates, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', JobApplicationSnapshot_Certificates, 'Edm.Int64');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.DESCRIPTION = new cloud_sdk_core_1.StringField('description', JobApplicationSnapshot_Certificates, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.END_DATE = new cloud_sdk_core_1.DateField('endDate', JobApplicationSnapshot_Certificates, 'Edm.DateTime');
    /**
     * Static representation of the [[institution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.INSTITUTION = new cloud_sdk_core_1.StringField('institution', JobApplicationSnapshot_Certificates, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', JobApplicationSnapshot_Certificates, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[licenseCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.LICENSE_COUNTRY = new cloud_sdk_core_1.StringField('licenseCountry', JobApplicationSnapshot_Certificates, 'Edm.String');
    /**
     * Static representation of the [[licenseName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.LICENSE_NAME = new cloud_sdk_core_1.StringField('licenseName', JobApplicationSnapshot_Certificates, 'Edm.String');
    /**
     * Static representation of the [[licenseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.LICENSE_NUMBER = new cloud_sdk_core_1.StringField('licenseNumber', JobApplicationSnapshot_Certificates, 'Edm.String');
    /**
     * Static representation of the [[licenseState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.LICENSE_STATE = new cloud_sdk_core_1.StringField('licenseState', JobApplicationSnapshot_Certificates, 'Edm.String');
    /**
     * Static representation of the [[licenseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.LICENSE_TYPE = new cloud_sdk_core_1.StringField('licenseType', JobApplicationSnapshot_Certificates, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.NAME = new cloud_sdk_core_1.StringField('name', JobApplicationSnapshot_Certificates, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Certificates.START_DATE = new cloud_sdk_core_1.DateField('startDate', JobApplicationSnapshot_Certificates, 'Edm.DateTime');
    /**
     * All fields of the JobApplicationSnapshot_Certificates entity.
     */
    JobApplicationSnapshot_Certificates._allFields = [
        JobApplicationSnapshot_Certificates.APPLICATION_ID,
        JobApplicationSnapshot_Certificates.BACKGROUND_ELEMENT_ID,
        JobApplicationSnapshot_Certificates.BG_ORDER_POS,
        JobApplicationSnapshot_Certificates.DESCRIPTION,
        JobApplicationSnapshot_Certificates.END_DATE,
        JobApplicationSnapshot_Certificates.INSTITUTION,
        JobApplicationSnapshot_Certificates.LAST_MODIFIED_DATE_TIME,
        JobApplicationSnapshot_Certificates.LICENSE_COUNTRY,
        JobApplicationSnapshot_Certificates.LICENSE_NAME,
        JobApplicationSnapshot_Certificates.LICENSE_NUMBER,
        JobApplicationSnapshot_Certificates.LICENSE_STATE,
        JobApplicationSnapshot_Certificates.LICENSE_TYPE,
        JobApplicationSnapshot_Certificates.NAME,
        JobApplicationSnapshot_Certificates.START_DATE
    ];
    /**
     * All fields selector.
     */
    JobApplicationSnapshot_Certificates.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', JobApplicationSnapshot_Certificates);
    /**
     * All key fields of the JobApplicationSnapshot_Certificates entity.
     */
    JobApplicationSnapshot_Certificates._keyFields = [JobApplicationSnapshot_Certificates.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Certificates.
     */
    JobApplicationSnapshot_Certificates._keys = JobApplicationSnapshot_Certificates._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(JobApplicationSnapshot_Certificates = exports.JobApplicationSnapshot_Certificates || (exports.JobApplicationSnapshot_Certificates = {}));
exports.JobApplicationSnapshot_Certificates = JobApplicationSnapshot_Certificates;
//# sourceMappingURL=JobApplicationSnapshot_Certificates.js.map