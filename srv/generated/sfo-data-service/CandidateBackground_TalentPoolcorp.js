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
var CandidateBackground_TalentPoolcorpRequestBuilder_1 = require("./CandidateBackground_TalentPoolcorpRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CandidateBackground_TalentPoolcorp" of service "SFOData".
 */
var CandidateBackground_TalentPoolcorp = /** @class */ (function (_super) {
    __extends(CandidateBackground_TalentPoolcorp, _super);
    function CandidateBackground_TalentPoolcorp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateBackground_TalentPoolcorp`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_TalentPoolcorp`.
     */
    CandidateBackground_TalentPoolcorp.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(CandidateBackground_TalentPoolcorp);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_TalentPoolcorp` entity type.
     * @returns A `CandidateBackground_TalentPoolcorp` request builder.
     */
    CandidateBackground_TalentPoolcorp.requestBuilder = function () {
        return new CandidateBackground_TalentPoolcorpRequestBuilder_1.CandidateBackground_TalentPoolcorpRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_TalentPoolcorp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_TalentPoolcorp`.
     */
    CandidateBackground_TalentPoolcorp.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, CandidateBackground_TalentPoolcorp);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateBackground_TalentPoolcorp.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for CandidateBackground_TalentPoolcorp.
     */
    CandidateBackground_TalentPoolcorp._entityName = 'CandidateBackground_TalentPoolcorp';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_TalentPoolcorp.
     */
    CandidateBackground_TalentPoolcorp._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateBackground_TalentPoolcorp._defaultServicePath = '/odata/v2';
    return CandidateBackground_TalentPoolcorp;
}(cloud_sdk_core_1.Entity));
exports.CandidateBackground_TalentPoolcorp = CandidateBackground_TalentPoolcorp;
var Candidate_1 = require("./Candidate");
(function (CandidateBackground_TalentPoolcorp) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPoolcorp.BACKGROUND_ELEMENT_ID = new cloud_sdk_core_1.BigNumberField('backgroundElementId', CandidateBackground_TalentPoolcorp, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPoolcorp.BG_ORDER_POS = new cloud_sdk_core_1.BigNumberField('bgOrderPos', CandidateBackground_TalentPoolcorp, 'Edm.Int64');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPoolcorp.CANDIDATE_ID = new cloud_sdk_core_1.BigNumberField('candidateId', CandidateBackground_TalentPoolcorp, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPoolcorp.LAST_MODIFIED_DATE_TIME = new cloud_sdk_core_1.DateField('lastModifiedDateTime', CandidateBackground_TalentPoolcorp, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPoolcorp.START_DATE = new cloud_sdk_core_1.DateField('startDate', CandidateBackground_TalentPoolcorp, 'Edm.DateTime');
    /**
     * Static representation of the [[talentPoolComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPoolcorp.TALENT_POOL_COMMENTS = new cloud_sdk_core_1.StringField('talentPoolComments', CandidateBackground_TalentPoolcorp, 'Edm.String');
    /**
     * Static representation of the [[talentPoolStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPoolcorp.TALENT_POOL_STATUS = new cloud_sdk_core_1.StringField('talentPoolStatus', CandidateBackground_TalentPoolcorp, 'Edm.String');
    /**
     * Static representation of the [[talentPoolitemCorp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPoolcorp.TALENT_POOLITEM_CORP = new cloud_sdk_core_1.StringField('talentPoolitemCorp', CandidateBackground_TalentPoolcorp, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_TalentPoolcorp.CANDIDATE = new cloud_sdk_core_1.OneToOneLink('candidate', CandidateBackground_TalentPoolcorp, Candidate_1.Candidate);
    /**
     * All fields of the CandidateBackground_TalentPoolcorp entity.
     */
    CandidateBackground_TalentPoolcorp._allFields = [
        CandidateBackground_TalentPoolcorp.BACKGROUND_ELEMENT_ID,
        CandidateBackground_TalentPoolcorp.BG_ORDER_POS,
        CandidateBackground_TalentPoolcorp.CANDIDATE_ID,
        CandidateBackground_TalentPoolcorp.LAST_MODIFIED_DATE_TIME,
        CandidateBackground_TalentPoolcorp.START_DATE,
        CandidateBackground_TalentPoolcorp.TALENT_POOL_COMMENTS,
        CandidateBackground_TalentPoolcorp.TALENT_POOL_STATUS,
        CandidateBackground_TalentPoolcorp.TALENT_POOLITEM_CORP,
        CandidateBackground_TalentPoolcorp.CANDIDATE
    ];
    /**
     * All fields selector.
     */
    CandidateBackground_TalentPoolcorp.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', CandidateBackground_TalentPoolcorp);
    /**
     * All key fields of the CandidateBackground_TalentPoolcorp entity.
     */
    CandidateBackground_TalentPoolcorp._keyFields = [CandidateBackground_TalentPoolcorp.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_TalentPoolcorp.
     */
    CandidateBackground_TalentPoolcorp._keys = CandidateBackground_TalentPoolcorp._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(CandidateBackground_TalentPoolcorp = exports.CandidateBackground_TalentPoolcorp || (exports.CandidateBackground_TalentPoolcorp = {}));
exports.CandidateBackground_TalentPoolcorp = CandidateBackground_TalentPoolcorp;
//# sourceMappingURL=CandidateBackground_TalentPoolcorp.js.map