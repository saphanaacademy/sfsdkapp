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
var CandidateBackground_TalentPool_1 = require("./CandidateBackground_TalentPool");
/**
 * Request builder class for operations supported on the [[CandidateBackground_TalentPool]] entity.
 */
var CandidateBackground_TalentPoolRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateBackground_TalentPoolRequestBuilder, _super);
    function CandidateBackground_TalentPoolRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CandidateBackground_TalentPool` entity based on its keys.
     * @param backgroundElementId Key property. See [[CandidateBackground_TalentPool.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `CandidateBackground_TalentPool` entity based on its keys.
     */
    CandidateBackground_TalentPoolRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(CandidateBackground_TalentPool_1.CandidateBackground_TalentPool, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `CandidateBackground_TalentPool` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateBackground_TalentPool` entities.
     */
    CandidateBackground_TalentPoolRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(CandidateBackground_TalentPool_1.CandidateBackground_TalentPool);
    };
    /**
     * Returns a request builder for creating a `CandidateBackground_TalentPool` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateBackground_TalentPool`.
     */
    CandidateBackground_TalentPoolRequestBuilder.prototype.create = function (entity) {
        return new cloud_sdk_core_1.CreateRequestBuilder(CandidateBackground_TalentPool_1.CandidateBackground_TalentPool, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CandidateBackground_TalentPool`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateBackground_TalentPool`.
     */
    CandidateBackground_TalentPoolRequestBuilder.prototype.update = function (entity) {
        return new cloud_sdk_core_1.UpdateRequestBuilder(CandidateBackground_TalentPool_1.CandidateBackground_TalentPool, entity);
    };
    return CandidateBackground_TalentPoolRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.CandidateBackground_TalentPoolRequestBuilder = CandidateBackground_TalentPoolRequestBuilder;
//# sourceMappingURL=CandidateBackground_TalentPoolRequestBuilder.js.map