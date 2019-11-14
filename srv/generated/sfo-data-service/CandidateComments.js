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
var CandidateCommentsRequestBuilder_1 = require("./CandidateCommentsRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "CandidateComments" of service "SFOData".
 */
var CandidateComments = /** @class */ (function (_super) {
    __extends(CandidateComments, _super);
    function CandidateComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateComments`.
     * @returns A builder that constructs instances of entity type `CandidateComments`.
     */
    CandidateComments.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(CandidateComments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateComments` entity type.
     * @returns A `CandidateComments` request builder.
     */
    CandidateComments.requestBuilder = function () {
        return new CandidateCommentsRequestBuilder_1.CandidateCommentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateComments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateComments`.
     */
    CandidateComments.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, CandidateComments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateComments.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for CandidateComments.
     */
    CandidateComments._entityName = 'CandidateComments';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateComments.
     */
    CandidateComments._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateComments._defaultServicePath = '/odata/v2';
    return CandidateComments;
}(cloud_sdk_core_1.Entity));
exports.CandidateComments = CandidateComments;
var Candidate_1 = require("./Candidate");
(function (CandidateComments) {
    /**
     * Static representation of the [[associatedCommentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateComments.ASSOCIATED_COMMENT_ID = new cloud_sdk_core_1.BigNumberField('associatedCommentId', CandidateComments, 'Edm.Int64');
    /**
     * Static representation of the [[associatedId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateComments.ASSOCIATED_ID = new cloud_sdk_core_1.BigNumberField('associatedId', CandidateComments, 'Edm.Int64');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateComments.CANDIDATE_ID = new cloud_sdk_core_1.BigNumberField('candidateId', CandidateComments, 'Edm.Int64');
    /**
     * Static representation of the [[commentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateComments.COMMENT_ID = new cloud_sdk_core_1.BigNumberField('commentId', CandidateComments, 'Edm.Int64');
    /**
     * Static representation of the [[commentator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateComments.COMMENTATOR = new cloud_sdk_core_1.StringField('commentator', CandidateComments, 'Edm.String');
    /**
     * Static representation of the [[content]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateComments.CONTENT = new cloud_sdk_core_1.StringField('content', CandidateComments, 'Edm.String');
    /**
     * Static representation of the [[hasAssociatedComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateComments.HAS_ASSOCIATED_COMMENT = new cloud_sdk_core_1.StringField('hasAssociatedComment', CandidateComments, 'Edm.String');
    /**
     * Static representation of the [[migratedCommentatorUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateComments.MIGRATED_COMMENTATOR_USER_NAME = new cloud_sdk_core_1.StringField('migratedCommentatorUserName', CandidateComments, 'Edm.String');
    /**
     * Static representation of the [[refType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateComments.REF_TYPE = new cloud_sdk_core_1.StringField('refType', CandidateComments, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateComments.CANDIDATE = new cloud_sdk_core_1.OneToOneLink('candidate', CandidateComments, Candidate_1.Candidate);
    /**
     * All fields of the CandidateComments entity.
     */
    CandidateComments._allFields = [
        CandidateComments.ASSOCIATED_COMMENT_ID,
        CandidateComments.ASSOCIATED_ID,
        CandidateComments.CANDIDATE_ID,
        CandidateComments.COMMENT_ID,
        CandidateComments.COMMENTATOR,
        CandidateComments.CONTENT,
        CandidateComments.HAS_ASSOCIATED_COMMENT,
        CandidateComments.MIGRATED_COMMENTATOR_USER_NAME,
        CandidateComments.REF_TYPE,
        CandidateComments.CANDIDATE
    ];
    /**
     * All fields selector.
     */
    CandidateComments.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', CandidateComments);
    /**
     * All key fields of the CandidateComments entity.
     */
    CandidateComments._keyFields = [CandidateComments.COMMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateComments.
     */
    CandidateComments._keys = CandidateComments._keyFields.reduce(function (acc, field) {
        acc[field.fieldName] = field;
        return acc;
    }, {});
})(CandidateComments = exports.CandidateComments || (exports.CandidateComments = {}));
exports.CandidateComments = CandidateComments;
//# sourceMappingURL=CandidateComments.js.map