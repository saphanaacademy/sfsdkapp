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
var CandidateTagsRequestBuilder_1 = require("./CandidateTagsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CandidateTags" of service "SFOData".
 */
var CandidateTags = /** @class */ (function (_super) {
    __extends(CandidateTags, _super);
    function CandidateTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateTags`.
     * @returns A builder that constructs instances of entity type `CandidateTags`.
     */
    CandidateTags.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(CandidateTags);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateTags` entity type.
     * @returns A `CandidateTags` request builder.
     */
    CandidateTags.requestBuilder = function () {
        return new CandidateTagsRequestBuilder_1.CandidateTagsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateTags`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateTags`.
     */
    CandidateTags.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, CandidateTags);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateTags.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for CandidateTags.
     */
    CandidateTags._entityName = 'CandidateTags';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateTags.
     */
    CandidateTags._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateTags._defaultServicePath = '/odata/v2';
    return CandidateTags;
}(cloud_sdk_core_1.Entity));
exports.CandidateTags = CandidateTags;
var Candidate_1 = require("./Candidate");
(function (CandidateTags) {
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateTags.CANDIDATE_ID = new cloud_sdk_core_1.BigNumberField('candidateId', CandidateTags, 'Edm.Int64');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateTags.LABEL = new cloud_sdk_core_1.StringField('label', CandidateTags, 'Edm.String');
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateTags.LOCALE = new cloud_sdk_core_1.StringField('locale', CandidateTags, 'Edm.String');
    /**
     * Static representation of the [[tagId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateTags.TAG_ID = new cloud_sdk_core_1.BigNumberField('tagId', CandidateTags, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[candidates]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateTags.CANDIDATES = new cloud_sdk_core_1.Link('candidates', CandidateTags, Candidate_1.Candidate);
    /**
     * All fields of the CandidateTags entity.
     */
    CandidateTags._allFields = [
        CandidateTags.CANDIDATE_ID,
        CandidateTags.LABEL,
        CandidateTags.LOCALE,
        CandidateTags.TAG_ID,
        CandidateTags.CANDIDATES
    ];
    /**
     * All fields selector.
     */
    CandidateTags.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', CandidateTags);
    /**
     * All key fields of the CandidateTags entity.
     */
    CandidateTags._keyFields = [CandidateTags.TAG_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateTags.
     */
    CandidateTags._keys = CandidateTags._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(CandidateTags = exports.CandidateTags || (exports.CandidateTags = {}));
exports.CandidateTags = CandidateTags;
//# sourceMappingURL=CandidateTags.js.map