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
var CandidateComments_1 = require("./CandidateComments");
/**
 * Request builder class for operations supported on the [[CandidateComments]] entity.
 */
var CandidateCommentsRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateCommentsRequestBuilder, _super);
    function CandidateCommentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CandidateComments` entity based on its keys.
     * @param commentId Key property. See [[CandidateComments.commentId]].
     * @returns A request builder for creating requests to retrieve one `CandidateComments` entity based on its keys.
     */
    CandidateCommentsRequestBuilder.prototype.getByKey = function (commentId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(CandidateComments_1.CandidateComments, { commentId: commentId });
    };
    /**
     * Returns a request builder for querying all `CandidateComments` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateComments` entities.
     */
    CandidateCommentsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(CandidateComments_1.CandidateComments);
    };
    /**
     * Returns a request builder for creating a `CandidateComments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateComments`.
     */
    CandidateCommentsRequestBuilder.prototype.create = function (entity) {
        return new cloud_sdk_core_1.CreateRequestBuilder(CandidateComments_1.CandidateComments, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CandidateComments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateComments`.
     */
    CandidateCommentsRequestBuilder.prototype.update = function (entity) {
        return new cloud_sdk_core_1.UpdateRequestBuilder(CandidateComments_1.CandidateComments, entity);
    };
    return CandidateCommentsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.CandidateCommentsRequestBuilder = CandidateCommentsRequestBuilder;
//# sourceMappingURL=CandidateCommentsRequestBuilder.js.map