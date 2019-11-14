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
var CandidateBackground_TalentPoolRequestBuilder_1 = require("./CandidateBackground_TalentPoolRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CandidateBackground_TalentPool" of service "SFOData".
 */
var CandidateBackground_TalentPool = /** @class */ (function (_super) {
    __extends(CandidateBackground_TalentPool, _super);
    function CandidateBackground_TalentPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateBackground_TalentPool`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_TalentPool`.
     */
    CandidateBackground_TalentPool.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(CandidateBackground_TalentPool);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_TalentPool` entity type.
     * @returns A `CandidateBackground_TalentPool` request builder.
     */
    CandidateBackground_TalentPool.requestBuilder = function () {
        return new CandidateBackground_TalentPoolRequestBuilder_1.CandidateBackground_TalentPoolRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_TalentPool`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_TalentPool`.
     */
    CandidateBackground_TalentPool.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, CandidateBackground_TalentPool);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateBackground_TalentPool.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for CandidateBackground_TalentPool.
     */
    CandidateBackground_TalentPool._entityName = 'CandidateBackground_TalentPool';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_TalentPool.
     */
    CandidateBackground_TalentPool._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateBackground_TalentPool._defaultServicePath = '/odata/v2';
    return CandidateBackground_TalentPool;
}(cloud_sdk_core_1.Entity));
exports.CandidateBackground_TalentPool = CandidateBackground_TalentPool;
var Candidate_1 = require("./Candidate");
(function (CandidateBackground_TalentPool) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPool.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', CandidateBackground_TalentPool, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPool.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', CandidateBackground_TalentPool, 'Edm.Int64');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPool.CANDIDATE_ID = new cloud_sdk_core_1.BigNumberField('candidateId', CandidateBackground_TalentPool, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPool.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', CandidateBackground_TalentPool, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPool.START_DATE = new cloud_sdk_core_1.DateField('startDate', CandidateBackground_TalentPool, 'Edm.DateTime');
    /**
     * Static representation of the [[talentPoolComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPool.TALENT_POOL_COMMENTS = new cloud_sdk_core_1.StringField('talentPoolComments', CandidateBackground_TalentPool, 'Edm.String');
    /**
     * Static representation of the [[talentPoolStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPool.TALENT_POOL_STATUS = new cloud_sdk_core_1.StringField('talentPoolStatus', CandidateBackground_TalentPool, 'Edm.String');
    /**
     * Static representation of the [[talentPoolitem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPool.TALENT_POOLITEM = new cloud_sdk_core_1.StringField('talentPoolitem', CandidateBackground_TalentPool, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPool.CANDIDATE = new cloud_sdk_core_1.OneToOneLink('candidate', CandidateBackground_TalentPool, Candidate_1.Candidate);
    /**
     * All fields of the CandidateBackground_TalentPool entity.
     */
    CandidateBackground_TalentPool._allFields = [
        CandidateBackground_TalentPool.BACKGROUND_ELEMENT_ID,
        CandidateBackground_TalentPool.BG_ORDER_POS,
        CandidateBackground_TalentPool.CANDIDATE_ID,
        CandidateBackground_TalentPool.LAST_MODIFIED_DATE_TIME,
        CandidateBackground_TalentPool.START_DATE,
        CandidateBackground_TalentPool.TALENT_POOL_COMMENTS,
        CandidateBackground_TalentPool.TALENT_POOL_STATUS,
        CandidateBackground_TalentPool.TALENT_POOLITEM,
        CandidateBackground_TalentPool.CANDIDATE
    ];
    /**
     * All fields selector.
     */
    CandidateBackground_TalentPool.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', CandidateBackground_TalentPool);
    /**
     * All key fields of the CandidateBackground_TalentPool entity.
     */
    CandidateBackground_TalentPool._keyFields = [CandidateBackground_TalentPool.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_TalentPool.
     */
    CandidateBackground_TalentPool._keys = CandidateBackground_TalentPool._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(CandidateBackground_TalentPool = exports.CandidateBackground_TalentPool || (exports.CandidateBackground_TalentPool = {}));
exports.CandidateBackground_TalentPool = CandidateBackground_TalentPool;
//# sourceMappingURL=CandidateBackground_TalentPool.js.map