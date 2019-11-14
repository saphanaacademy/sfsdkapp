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
var JobApplicationSnapshot_LanguagesRequestBuilder_1 = require("./JobApplicationSnapshot_LanguagesRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "JobApplicationSnapshot_Languages" of service "SFOData".
 */
var JobApplicationSnapshot_Languages = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_Languages, _super);
    function JobApplicationSnapshot_Languages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_Languages`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Languages`.
     */
    JobApplicationSnapshot_Languages.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(JobApplicationSnapshot_Languages);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Languages` entity type.
     * @returns A `JobApplicationSnapshot_Languages` request builder.
     */
    JobApplicationSnapshot_Languages.requestBuilder = function () {
        return new JobApplicationSnapshot_LanguagesRequestBuilder_1.JobApplicationSnapshot_LanguagesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Languages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Languages`.
     */
    JobApplicationSnapshot_Languages.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Languages);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationSnapshot_Languages.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for JobApplicationSnapshot_Languages.
     */
    JobApplicationSnapshot_Languages._entityName = 'JobApplicationSnapshot_Languages';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_Languages.
     */
    JobApplicationSnapshot_Languages._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationSnapshot_Languages._defaultServicePath = '/odata/v2';
    return JobApplicationSnapshot_Languages;
}(cloud_sdk_core_1.Entity));
exports.JobApplicationSnapshot_Languages = JobApplicationSnapshot_Languages;
(function (JobApplicationSnapshot_Languages) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.APPLICATION_ID = new cloud_sdk_core_1.BigNumberField('applicationId', JobApplicationSnapshot_Languages, 'Edm.Int64');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', JobApplicationSnapshot_Languages, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', JobApplicationSnapshot_Languages, 'Edm.Int64');
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.LANGUAGE = new cloud_sdk_core_1.StringField('language', JobApplicationSnapshot_Languages, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', JobApplicationSnapshot_Languages, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[readingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.READING_PROF = new cloud_sdk_core_1.StringField('readingProf', JobApplicationSnapshot_Languages, 'Edm.String');
    /**
     * Static representation of the [[speakingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.SPEAKING_PROF = new cloud_sdk_core_1.StringField('speakingProf', JobApplicationSnapshot_Languages, 'Edm.String');
    /**
     * Static representation of the [[writingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.WRITING_PROF = new cloud_sdk_core_1.StringField('writingProf', JobApplicationSnapshot_Languages, 'Edm.String');
    /**
     * All fields of the JobApplicationSnapshot_Languages entity.
     */
    JobApplicationSnapshot_Languages._allFields = [
        JobApplicationSnapshot_Languages.APPLICATION_ID,
        JobApplicationSnapshot_Languages.BACKGROUND_ELEMENT_ID,
        JobApplicationSnapshot_Languages.BG_ORDER_POS,
        JobApplicationSnapshot_Languages.LANGUAGE,
        JobApplicationSnapshot_Languages.LAST_MODIFIED_DATE_TIME,
        JobApplicationSnapshot_Languages.READING_PROF,
        JobApplicationSnapshot_Languages.SPEAKING_PROF,
        JobApplicationSnapshot_Languages.WRITING_PROF
    ];
    /**
     * All fields selector.
     */
    JobApplicationSnapshot_Languages.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', JobApplicationSnapshot_Languages);
    /**
     * All key fields of the JobApplicationSnapshot_Languages entity.
     */
    JobApplicationSnapshot_Languages._keyFields = [JobApplicationSnapshot_Languages.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Languages.
     */
    JobApplicationSnapshot_Languages._keys = JobApplicationSnapshot_Languages._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(JobApplicationSnapshot_Languages = exports.JobApplicationSnapshot_Languages || (exports.JobApplicationSnapshot_Languages = {}));
exports.JobApplicationSnapshot_Languages = JobApplicationSnapshot_Languages;
//# sourceMappingURL=JobApplicationSnapshot_Languages.js.map