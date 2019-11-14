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
var CandidateTags_1 = require("./CandidateTags");
/**
 * Request builder class for operations supported on the [[CandidateTags]] entity.
 */
var CandidateTagsRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateTagsRequestBuilder, _super);
    function CandidateTagsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CandidateTags` entity based on its keys.
     * @param tagId Key property. See [[CandidateTags.tagId]].
     * @returns A request builder for creating requests to retrieve one `CandidateTags` entity based on its keys.
     */
    CandidateTagsRequestBuilder.prototype.getByKey = function (tagId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(CandidateTags_1.CandidateTags, { tagId: tagId });
    };
    /**
     * Returns a request builder for querying all `CandidateTags` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateTags` entities.
     */
    CandidateTagsRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(CandidateTags_1.CandidateTags);
    };
    /**
     * Returns a request builder for creating a `CandidateTags` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateTags`.
     */
    CandidateTagsRequestBuilder.prototype.create = function (entity) {
        return new cloud_sdk_core_1.CreateRequestBuilder(CandidateTags_1.CandidateTags, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CandidateTags`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateTags`.
     */
    CandidateTagsRequestBuilder.prototype.update = function (entity) {
        return new cloud_sdk_core_1.UpdateRequestBuilder(CandidateTags_1.CandidateTags, entity);
    };
    CandidateTagsRequestBuilder.prototype.delete = function (tagIdOrEntity) {
        return new cloud_sdk_core_1.DeleteRequestBuilder(CandidateTags_1.CandidateTags, tagIdOrEntity instanceof CandidateTags_1.CandidateTags ? tagIdOrEntity : { tagId: tagIdOrEntity });
    };
    return CandidateTagsRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.CandidateTagsRequestBuilder = CandidateTagsRequestBuilder;
//# sourceMappingURL=CandidateTagsRequestBuilder.js.map