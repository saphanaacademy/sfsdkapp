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
var JobApplicationSnapshot_TalentPoolRequestBuilder_1 = require("./JobApplicationSnapshot_TalentPoolRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "JobApplicationSnapshot_TalentPool" of service "SFOData".
 */
var JobApplicationSnapshot_TalentPool = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_TalentPool, _super);
    function JobApplicationSnapshot_TalentPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_TalentPool`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_TalentPool`.
     */
    JobApplicationSnapshot_TalentPool.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(JobApplicationSnapshot_TalentPool);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_TalentPool` entity type.
     * @returns A `JobApplicationSnapshot_TalentPool` request builder.
     */
    JobApplicationSnapshot_TalentPool.requestBuilder = function () {
        return new JobApplicationSnapshot_TalentPoolRequestBuilder_1.JobApplicationSnapshot_TalentPoolRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_TalentPool`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_TalentPool`.
     */
    JobApplicationSnapshot_TalentPool.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, JobApplicationSnapshot_TalentPool);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationSnapshot_TalentPool.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for JobApplicationSnapshot_TalentPool.
     */
    JobApplicationSnapshot_TalentPool._entityName = 'JobApplicationSnapshot_TalentPool';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_TalentPool.
     */
    JobApplicationSnapshot_TalentPool._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationSnapshot_TalentPool._defaultServicePath = '/odata/v2';
    return JobApplicationSnapshot_TalentPool;
}(cloud_sdk_core_1.Entity));
exports.JobApplicationSnapshot_TalentPool = JobApplicationSnapshot_TalentPool;
(function (JobApplicationSnapshot_TalentPool) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPool.APPLICATION_ID = new cloud_sdk_core_1.BigNumberField('applicationId', JobApplicationSnapshot_TalentPool, 'Edm.Int64');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPool.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', JobApplicationSnapshot_TalentPool, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPool.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', JobApplicationSnapshot_TalentPool, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPool.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', JobApplicationSnapshot_TalentPool, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPool.START_DATE = new cloud_sdk_core_1.DateField('startDate', JobApplicationSnapshot_TalentPool, 'Edm.DateTime');
    /**
     * Static representation of the [[talentPoolComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPool.TALENT_POOL_COMMENTS = new cloud_sdk_core_1.StringField('talentPoolComments', JobApplicationSnapshot_TalentPool, 'Edm.String');
    /**
     * Static representation of the [[talentPoolStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPool.TALENT_POOL_STATUS = new cloud_sdk_core_1.StringField('talentPoolStatus', JobApplicationSnapshot_TalentPool, 'Edm.String');
    /**
     * Static representation of the [[talentPoolitem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_TalentPool.TALENT_POOLITEM = new cloud_sdk_core_1.StringField('talentPoolitem', JobApplicationSnapshot_TalentPool, 'Edm.String');
    /**
     * All fields of the JobApplicationSnapshot_TalentPool entity.
     */
    JobApplicationSnapshot_TalentPool._allFields = [
        JobApplicationSnapshot_TalentPool.APPLICATION_ID,
        JobApplicationSnapshot_TalentPool.BACKGROUND_ELEMENT_ID,
        JobApplicationSnapshot_TalentPool.BG_ORDER_POS,
        JobApplicationSnapshot_TalentPool.LAST_MODIFIED_DATE_TIME,
        JobApplicationSnapshot_TalentPool.START_DATE,
        JobApplicationSnapshot_TalentPool.TALENT_POOL_COMMENTS,
        JobApplicationSnapshot_TalentPool.TALENT_POOL_STATUS,
        JobApplicationSnapshot_TalentPool.TALENT_POOLITEM
    ];
    /**
     * All fields selector.
     */
    JobApplicationSnapshot_TalentPool.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', JobApplicationSnapshot_TalentPool);
    /**
     * All key fields of the JobApplicationSnapshot_TalentPool entity.
     */
    JobApplicationSnapshot_TalentPool._keyFields = [JobApplicationSnapshot_TalentPool.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_TalentPool.
     */
    JobApplicationSnapshot_TalentPool._keys = JobApplicationSnapshot_TalentPool._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(JobApplicationSnapshot_TalentPool = exports.JobApplicationSnapshot_TalentPool || (exports.JobApplicationSnapshot_TalentPool = {}));
exports.JobApplicationSnapshot_TalentPool = JobApplicationSnapshot_TalentPool;
//# sourceMappingURL=JobApplicationSnapshot_TalentPool.js.map