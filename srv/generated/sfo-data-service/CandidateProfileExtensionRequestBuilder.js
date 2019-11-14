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
Object.defineProperty(exports, "__esModule", { value: true });
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
var CandidateProfileExtension_1 = require("./CandidateProfileExtension");
/**
 * Request builder class for operations supported on the [[CandidateProfileExtension]] entity.
 */
var CandidateProfileExtensionRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateProfileExtensionRequestBuilder, _super);
    function CandidateProfileExtensionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CandidateProfileExtension` entity based on its keys.
     * @param candidateId Key property. See [[CandidateProfileExtension.candidateId]].
     * @returns A request builder for creating requests to retrieve one `CandidateProfileExtension` entity based on its keys.
     */
    CandidateProfileExtensionRequestBuilder.prototype.getByKey = function (candidateId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(CandidateProfileExtension_1.CandidateProfileExtension, { candidateId: candidateId });
    };
    /**
     * Returns a request builder for querying all `CandidateProfileExtension` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateProfileExtension` entities.
     */
    CandidateProfileExtensionRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(CandidateProfileExtension_1.CandidateProfileExtension);
    };
    /**
     * Returns a request builder for creating a `CandidateProfileExtension` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateProfileExtension`.
     */
    CandidateProfileExtensionRequestBuilder.prototype.create = function (entity) {
        return new cloud_sdk_core_1.CreateRequestBuilder(CandidateProfileExtension_1.CandidateProfileExtension, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CandidateProfileExtension`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateProfileExtension`.
     */
    CandidateProfileExtensionRequestBuilder.prototype.update = function (entity) {
        return new cloud_sdk_core_1.UpdateRequestBuilder(CandidateProfileExtension_1.CandidateProfileExtension, entity);
    };
    CandidateProfileExtensionRequestBuilder.prototype.delete = function (candidateIdOrEntity) {
        return new cloud_sdk_core_1.DeleteRequestBuilder(CandidateProfileExtension_1.CandidateProfileExtension, candidateIdOrEntity instanceof CandidateProfileExtension_1.CandidateProfileExtension ? candidateIdOrEntity : { candidateId: candidateIdOrEntity });
    };
    return CandidateProfileExtensionRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.CandidateProfileExtensionRequestBuilder = CandidateProfileExtensionRequestBuilder;
//# sourceMappingURL=CandidateProfileExtensionRequestBuilder.js.map