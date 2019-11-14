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
var JobApplicationSnapshot_TalentPoolcorpRequestBuilder_1 = require("./JobApplicationSnapshot_TalentPoolcorpRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "JobApplicationSnapshot_TalentPoolcorp" of service "SFOData".
 */
var JobApplicationSnapshot_TalentPoolcorp = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_TalentPoolcorp, _super);
    function JobApplicationSnapshot_TalentPoolcorp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_TalentPoolcorp`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_TalentPoolcorp`.
     */
    JobApplicationSnapshot_TalentPoolcorp.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(JobApplicationSnapshot_TalentPoolcorp);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_TalentPoolcorp` entity type.
     * @returns A `JobApplicationSnapshot_TalentPoolcorp` request builder.
     */
    JobApplicationSnapshot_TalentPoolcorp.requestBuilder = function () {
        return new JobApplicationSnapshot_TalentPoolcorpRequestBuilder_1.JobApplicationSnapshot_TalentPoolcorpRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_TalentPoolcorp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_TalentPoolcorp`.
     */
    JobApplicationSnapshot_TalentPoolcorp.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, JobApplicationSnapshot_TalentPoolcorp);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationSnapshot_TalentPoolcorp.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for JobApplicationSnapshot_TalentPoolcorp.
     */
    JobApplicationSnapshot_TalentPoolcorp._entityName = 'JobApplicationSnapshot_TalentPoolcorp';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_TalentPoolcorp.
     */
    JobApplicationSnapshot_TalentPoolcorp._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationSnapshot_TalentPoolcorp._defaultServicePath = '/odata/v2';
    return JobApplicationSnapshot_TalentPoolcorp;
}(cloud_sdk_core_1.Entity));
exports.JobApplicationSnapshot_TalentPoolcorp = JobApplicationSnapshot_TalentPoolcorp;
(function (JobApplicationSnapshot_TalentPoolcorp) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPoolcorp.APPLICATION_ID = new cloud_sdk_core_1.BigNumberField('applicationId', JobApplicationSnapshot_TalentPoolcorp, 'Edm.Int64');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPoolcorp.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', JobApplicationSnapshot_TalentPoolcorp, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPoolcorp.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', JobApplicationSnapshot_TalentPoolcorp, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPoolcorp.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', JobApplicationSnapshot_TalentPoolcorp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPoolcorp.START_DATE = new cloud_sdk_core_1.DateField('startDate', JobApplicationSnapshot_TalentPoolcorp, 'Edm.DateTime');
    /**
     * Static representation of the [[talentPoolComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPoolcorp.TALENT_POOL_COMMENTS = new cloud_sdk_core_1.StringField('talentPoolComments', JobApplicationSnapshot_TalentPoolcorp, 'Edm.String');
    /**
     * Static representation of the [[talentPoolStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPoolcorp.TALENT_POOL_STATUS = new cloud_sdk_core_1.StringField('talentPoolStatus', JobApplicationSnapshot_TalentPoolcorp, 'Edm.String');
    /**
     * Static representation of the [[talentPoolitemCorp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPoolcorp.TALENT_POOLITEM_CORP = new cloud_sdk_core_1.StringField('talentPoolitemCorp', JobApplicationSnapshot_TalentPoolcorp, 'Edm.String');
    /**
     * All fields of the JobApplicationSnapshot_TalentPoolcorp entity.
     */
    JobApplicationSnapshot_TalentPoolcorp._allFields = [
        JobApplicationSnapshot_TalentPoolcorp.APPLICATION_ID,
        JobApplicationSnapshot_TalentPoolcorp.BACKGROUND_ELEMENT_ID,
        JobApplicationSnapshot_TalentPoolcorp.BG_ORDER_POS,
        JobApplicationSnapshot_TalentPoolcorp.LAST_MODIFIED_DATE_TIME,
        JobApplicationSnapshot_TalentPoolcorp.START_DATE,
        JobApplicationSnapshot_TalentPoolcorp.TALENT_POOL_COMMENTS,
        JobApplicationSnapshot_TalentPoolcorp.TALENT_POOL_STATUS,
        JobApplicationSnapshot_TalentPoolcorp.TALENT_POOLITEM_CORP
    ];
    /**
     * All fields selector.
     */
    JobApplicationSnapshot_TalentPoolcorp.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', JobApplicationSnapshot_TalentPoolcorp);
    /**
     * All key fields of the JobApplicationSnapshot_TalentPoolcorp entity.
     */
    JobApplicationSnapshot_TalentPoolcorp._keyFields = [JobApplicationSnapshot_TalentPoolcorp.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_TalentPoolcorp.
     */
    JobApplicationSnapshot_TalentPoolcorp._keys = JobApplicationSnapshot_TalentPoolcorp._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(JobApplicationSnapshot_TalentPoolcorp = exports.JobApplicationSnapshot_TalentPoolcorp || (exports.JobApplicationSnapshot_TalentPoolcorp = {}));
exports.JobApplicationSnapshot_TalentPoolcorp = JobApplicationSnapshot_TalentPoolcorp;
//# sourceMappingURL=JobApplicationSnapshot_TalentPoolcorp.js.map