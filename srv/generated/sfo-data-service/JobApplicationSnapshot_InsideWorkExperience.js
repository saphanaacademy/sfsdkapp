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
var JobApplicationSnapshot_InsideWorkExperienceRequestBuilder_1 = require("./JobApplicationSnapshot_InsideWorkExperienceRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "JobApplicationSnapshot_InsideWorkExperience" of service "SFOData".
 */
var JobApplicationSnapshot_InsideWorkExperience = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_InsideWorkExperience, _super);
    function JobApplicationSnapshot_InsideWorkExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_InsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_InsideWorkExperience`.
     */
    JobApplicationSnapshot_InsideWorkExperience.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(JobApplicationSnapshot_InsideWorkExperience);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_InsideWorkExperience` entity type.
     * @returns A `JobApplicationSnapshot_InsideWorkExperience` request builder.
     */
    JobApplicationSnapshot_InsideWorkExperience.requestBuilder = function () {
        return new JobApplicationSnapshot_InsideWorkExperienceRequestBuilder_1.JobApplicationSnapshot_InsideWorkExperienceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_InsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_InsideWorkExperience`.
     */
    JobApplicationSnapshot_InsideWorkExperience.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, JobApplicationSnapshot_InsideWorkExperience);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationSnapshot_InsideWorkExperience.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for JobApplicationSnapshot_InsideWorkExperience.
     */
    JobApplicationSnapshot_InsideWorkExperience._entityName = 'JobApplicationSnapshot_InsideWorkExperience';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_InsideWorkExperience.
     */
    JobApplicationSnapshot_InsideWorkExperience._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationSnapshot_InsideWorkExperience._defaultServicePath = '/odata/v2';
    return JobApplicationSnapshot_InsideWorkExperience;
}(cloud_sdk_core_1.Entity));
exports.JobApplicationSnapshot_InsideWorkExperience = JobApplicationSnapshot_InsideWorkExperience;
(function (JobApplicationSnapshot_InsideWorkExperience) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_InsideWorkExperience.APPLICATION_ID = new cloud_sdk_core_1.BigNumberField('applicationId', JobApplicationSnapshot_InsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_InsideWorkExperience.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', JobApplicationSnapshot_InsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_InsideWorkExperience.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', JobApplicationSnapshot_InsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_InsideWorkExperience.DEPARTMENT = new cloud_sdk_core_1.StringField('department', JobApplicationSnapshot_InsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_InsideWorkExperience.END_DATE = new cloud_sdk_core_1.DateField('endDate', JobApplicationSnapshot_InsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_InsideWorkExperience.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', JobApplicationSnapshot_InsideWorkExperience, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_InsideWorkExperience.START_DATE = new cloud_sdk_core_1.DateField('startDate', JobApplicationSnapshot_InsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_InsideWorkExperience.TITLE = new cloud_sdk_core_1.StringField('title', JobApplicationSnapshot_InsideWorkExperience, 'Edm.String');
    /**
     * All fields of the JobApplicationSnapshot_InsideWorkExperience entity.
     */
    JobApplicationSnapshot_InsideWorkExperience._allFields = [
        JobApplicationSnapshot_InsideWorkExperience.APPLICATION_ID,
        JobApplicationSnapshot_InsideWorkExperience.BACKGROUND_ELEMENT_ID,
        JobApplicationSnapshot_InsideWorkExperience.BG_ORDER_POS,
        JobApplicationSnapshot_InsideWorkExperience.DEPARTMENT,
        JobApplicationSnapshot_InsideWorkExperience.END_DATE,
        JobApplicationSnapshot_InsideWorkExperience.LAST_MODIFIED_DATE_TIME,
        JobApplicationSnapshot_InsideWorkExperience.START_DATE,
        JobApplicationSnapshot_InsideWorkExperience.TITLE
    ];
    /**
     * All fields selector.
     */
    JobApplicationSnapshot_InsideWorkExperience.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', JobApplicationSnapshot_InsideWorkExperience);
    /**
     * All key fields of the JobApplicationSnapshot_InsideWorkExperience entity.
     */
    JobApplicationSnapshot_InsideWorkExperience._keyFields = [JobApplicationSnapshot_InsideWorkExperience.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_InsideWorkExperience.
     */
    JobApplicationSnapshot_InsideWorkExperience._keys = JobApplicationSnapshot_InsideWorkExperience._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(JobApplicationSnapshot_InsideWorkExperience = exports.JobApplicationSnapshot_InsideWorkExperience || (exports.JobApplicationSnapshot_InsideWorkExperience = {}));
exports.JobApplicationSnapshot_InsideWorkExperience = JobApplicationSnapshot_InsideWorkExperience;
//# sourceMappingURL=JobApplicationSnapshot_InsideWorkExperience.js.map