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
var CandidateBackground_Languages_1 = require("./CandidateBackground_Languages");
/**
 * Request builder class for operations supported on the [[CandidateBackground_Languages]] entity.
 */
var CandidateBackground_LanguagesRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateBackground_LanguagesRequestBuilder, _super);
    function CandidateBackground_LanguagesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CandidateBackground_Languages` entity based on its keys.
     * @param backgroundElementId Key property. See [[CandidateBackground_Languages.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `CandidateBackground_Languages` entity based on its keys.
     */
    CandidateBackground_LanguagesRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(CandidateBackground_Languages_1.CandidateBackground_Languages, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `CandidateBackground_Languages` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateBackground_Languages` entities.
     */
    CandidateBackground_LanguagesRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(CandidateBackground_Languages_1.CandidateBackground_Languages);
    };
    /**
     * Returns a request builder for creating a `CandidateBackground_Languages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateBackground_Languages`.
     */
    CandidateBackground_LanguagesRequestBuilder.prototype.create = function (entity) {
        return new cloud_sdk_core_1.CreateRequestBuilder(CandidateBackground_Languages_1.CandidateBackground_Languages, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CandidateBackground_Languages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateBackground_Languages`.
     */
    CandidateBackground_LanguagesRequestBuilder.prototype.update = function (entity) {
        return new cloud_sdk_core_1.UpdateRequestBuilder(CandidateBackground_Languages_1.CandidateBackground_Languages, entity);
    };
    return CandidateBackground_LanguagesRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.CandidateBackground_LanguagesRequestBuilder = CandidateBackground_LanguagesRequestBuilder;
//# sourceMappingURL=CandidateBackground_LanguagesRequestBuilder.js.map