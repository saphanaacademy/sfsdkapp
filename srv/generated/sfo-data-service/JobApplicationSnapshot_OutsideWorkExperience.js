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
var JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder_1 = require("./JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "JobApplicationSnapshot_OutsideWorkExperience" of service "SFOData".
 */
var JobApplicationSnapshot_OutsideWorkExperience = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_OutsideWorkExperience, _super);
    function JobApplicationSnapshot_OutsideWorkExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_OutsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_OutsideWorkExperience`.
     */
    JobApplicationSnapshot_OutsideWorkExperience.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(JobApplicationSnapshot_OutsideWorkExperience);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_OutsideWorkExperience` entity type.
     * @returns A `JobApplicationSnapshot_OutsideWorkExperience` request builder.
     */
    JobApplicationSnapshot_OutsideWorkExperience.requestBuilder = function () {
        return new JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder_1.JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_OutsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_OutsideWorkExperience`.
     */
    JobApplicationSnapshot_OutsideWorkExperience.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, JobApplicationSnapshot_OutsideWorkExperience);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationSnapshot_OutsideWorkExperience.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for JobApplicationSnapshot_OutsideWorkExperience.
     */
    JobApplicationSnapshot_OutsideWorkExperience._entityName = 'JobApplicationSnapshot_OutsideWorkExperience';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_OutsideWorkExperience.
     */
    JobApplicationSnapshot_OutsideWorkExperience._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationSnapshot_OutsideWorkExperience._defaultServicePath = '/odata/v2';
    return JobApplicationSnapshot_OutsideWorkExperience;
}(cloud_sdk_core_1.Entity));
exports.JobApplicationSnapshot_OutsideWorkExperience = JobApplicationSnapshot_OutsideWorkExperience;
(function (JobApplicationSnapshot_OutsideWorkExperience) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.APPLICATION_ID = new cloud_sdk_core_1.BigNumberField('applicationId', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[businessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.BUSINESS_TYPE = new cloud_sdk_core_1.StringField('businessType', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER = new cloud_sdk_core_1.StringField('employer', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_ADDRESS = new cloud_sdk_core_1.StringField('employerAddress', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_CITY = new cloud_sdk_core_1.StringField('employerCity', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_CONTACT = new cloud_sdk_core_1.StringField('employerContact', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_COUNTRY = new cloud_sdk_core_1.StringField('employerCountry', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_EMAIL = new cloud_sdk_core_1.StringField('employerEmail', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_PHONE = new cloud_sdk_core_1.StringField('employerPhone', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_STATE = new cloud_sdk_core_1.StringField('employerState', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employerZip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_ZIP = new cloud_sdk_core_1.StringField('employerZip', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.END_DATE = new cloud_sdk_core_1.DateField('endDate', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[presentEmployer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.PRESENT_EMPLOYER = new cloud_sdk_core_1.StringField('presentEmployer', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.START_DATE = new cloud_sdk_core_1.DateField('startDate', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[startTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.START_TITLE = new cloud_sdk_core_1.StringField('startTitle', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * All fields of the JobApplicationSnapshot_OutsideWorkExperience entity.
     */
    JobApplicationSnapshot_OutsideWorkExperience._allFields = [
        JobApplicationSnapshot_OutsideWorkExperience.APPLICATION_ID,
        JobApplicationSnapshot_OutsideWorkExperience.BACKGROUND_ELEMENT_ID,
        JobApplicationSnapshot_OutsideWorkExperience.BG_ORDER_POS,
        JobApplicationSnapshot_OutsideWorkExperience.BUSINESS_TYPE,
        JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER,
        JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_ADDRESS,
        JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_CITY,
        JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_CONTACT,
        JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_COUNTRY,
        JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_EMAIL,
        JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_PHONE,
        JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_STATE,
        JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER_ZIP,
        JobApplicationSnapshot_OutsideWorkExperience.END_DATE,
        JobApplicationSnapshot_OutsideWorkExperience.LAST_MODIFIED_DATE_TIME,
        JobApplicationSnapshot_OutsideWorkExperience.PRESENT_EMPLOYER,
        JobApplicationSnapshot_OutsideWorkExperience.START_DATE,
        JobApplicationSnapshot_OutsideWorkExperience.START_TITLE
    ];
    /**
     * All fields selector.
     */
    JobApplicationSnapshot_OutsideWorkExperience.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', JobApplicationSnapshot_OutsideWorkExperience);
    /**
     * All key fields of the JobApplicationSnapshot_OutsideWorkExperience entity.
     */
    JobApplicationSnapshot_OutsideWorkExperience._keyFields = [JobApplicationSnapshot_OutsideWorkExperience.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_OutsideWorkExperience.
     */
    JobApplicationSnapshot_OutsideWorkExperience._keys = JobApplicationSnapshot_OutsideWorkExperience._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(JobApplicationSnapshot_OutsideWorkExperience = exports.JobApplicationSnapshot_OutsideWorkExperience || (exports.JobApplicationSnapshot_OutsideWorkExperience = {}));
exports.JobApplicationSnapshot_OutsideWorkExperience = JobApplicationSnapshot_OutsideWorkExperience;
//# sourceMappingURL=JobApplicationSnapshot_OutsideWorkExperience.js.map