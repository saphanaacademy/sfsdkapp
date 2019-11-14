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
var JobApplicationSnapshot_EducationRequestBuilder_1 = require("./JobApplicationSnapshot_EducationRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "JobApplicationSnapshot_Education" of service "SFOData".
 */
var JobApplicationSnapshot_Education = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_Education, _super);
    function JobApplicationSnapshot_Education() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_Education`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Education`.
     */
    JobApplicationSnapshot_Education.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(JobApplicationSnapshot_Education);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Education` entity type.
     * @returns A `JobApplicationSnapshot_Education` request builder.
     */
    JobApplicationSnapshot_Education.requestBuilder = function () {
        return new JobApplicationSnapshot_EducationRequestBuilder_1.JobApplicationSnapshot_EducationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Education`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Education`.
     */
    JobApplicationSnapshot_Education.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Education);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationSnapshot_Education.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for JobApplicationSnapshot_Education.
     */
    JobApplicationSnapshot_Education._entityName = 'JobApplicationSnapshot_Education';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_Education.
     */
    JobApplicationSnapshot_Education._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationSnapshot_Education._defaultServicePath = '/odata/v2';
    return JobApplicationSnapshot_Education;
}(cloud_sdk_core_1.Entity));
exports.JobApplicationSnapshot_Education = JobApplicationSnapshot_Education;
(function (JobApplicationSnapshot_Education) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.APPLICATION_ID = new cloud_sdk_core_1.BigNumberField('applicationId', JobApplicationSnapshot_Education, 'Edm.Int64');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', JobApplicationSnapshot_Education, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', JobApplicationSnapshot_Education, 'Edm.Int64');
    /**
     * Static representation of the [[degree]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.DEGREE = new cloud_sdk_core_1.StringField('degree', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[degreeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.DEGREE_DATE = new cloud_sdk_core_1.DateField('degreeDate', JobApplicationSnapshot_Education, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.END_DATE = new cloud_sdk_core_1.DateField('endDate', JobApplicationSnapshot_Education, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', JobApplicationSnapshot_Education, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[major]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.MAJOR = new cloud_sdk_core_1.StringField('major', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[presentStudent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.PRESENT_STUDENT = new cloud_sdk_core_1.NumberField('presentStudent', JobApplicationSnapshot_Education, 'Edm.Int32');
    /**
     * Static representation of the [[school]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.SCHOOL = new cloud_sdk_core_1.StringField('school', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[schoolAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.SCHOOL_ADDRESS = new cloud_sdk_core_1.StringField('schoolAddress', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[schoolCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.SCHOOL_CITY = new cloud_sdk_core_1.StringField('schoolCity', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[schoolCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.SCHOOL_COUNTRY = new cloud_sdk_core_1.StringField('schoolCountry', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[schoolPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.SCHOOL_PHONE = new cloud_sdk_core_1.StringField('schoolPhone', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[schoolState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.SCHOOL_STATE = new cloud_sdk_core_1.StringField('schoolState', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[schoolType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.SCHOOL_TYPE = new cloud_sdk_core_1.StringField('schoolType', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[schoolZip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.SCHOOL_ZIP = new cloud_sdk_core_1.StringField('schoolZip', JobApplicationSnapshot_Education, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Education.START_DATE = new cloud_sdk_core_1.DateField('startDate', JobApplicationSnapshot_Education, 'Edm.DateTime');
    /**
     * All fields of the JobApplicationSnapshot_Education entity.
     */
    JobApplicationSnapshot_Education._allFields = [
        JobApplicationSnapshot_Education.APPLICATION_ID,
        JobApplicationSnapshot_Education.BACKGROUND_ELEMENT_ID,
        JobApplicationSnapshot_Education.BG_ORDER_POS,
        JobApplicationSnapshot_Education.DEGREE,
        JobApplicationSnapshot_Education.DEGREE_DATE,
        JobApplicationSnapshot_Education.END_DATE,
        JobApplicationSnapshot_Education.LAST_MODIFIED_DATE_TIME,
        JobApplicationSnapshot_Education.MAJOR,
        JobApplicationSnapshot_Education.PRESENT_STUDENT,
        JobApplicationSnapshot_Education.SCHOOL,
        JobApplicationSnapshot_Education.SCHOOL_ADDRESS,
        JobApplicationSnapshot_Education.SCHOOL_CITY,
        JobApplicationSnapshot_Education.SCHOOL_COUNTRY,
        JobApplicationSnapshot_Education.SCHOOL_PHONE,
        JobApplicationSnapshot_Education.SCHOOL_STATE,
        JobApplicationSnapshot_Education.SCHOOL_TYPE,
        JobApplicationSnapshot_Education.SCHOOL_ZIP,
        JobApplicationSnapshot_Education.START_DATE
    ];
    /**
     * All fields selector.
     */
    JobApplicationSnapshot_Education.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', JobApplicationSnapshot_Education);
    /**
     * All key fields of the JobApplicationSnapshot_Education entity.
     */
    JobApplicationSnapshot_Education._keyFields = [JobApplicationSnapshot_Education.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Education.
     */
    JobApplicationSnapshot_Education._keys = JobApplicationSnapshot_Education._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(JobApplicationSnapshot_Education = exports.JobApplicationSnapshot_Education || (exports.JobApplicationSnapshot_Education = {}));
exports.JobApplicationSnapshot_Education = JobApplicationSnapshot_Education;
//# sourceMappingURL=JobApplicationSnapshot_Education.js.map