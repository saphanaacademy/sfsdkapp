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
var CandidateBackground_InsideWorkExperience_1 = require("./CandidateBackground_InsideWorkExperience");
/**
 * Request builder class for operations supported on the [[CandidateBackground_InsideWorkExperience]] entity.
 */
var CandidateBackground_InsideWorkExperienceRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateBackground_InsideWorkExperienceRequestBuilder, _super);
    function CandidateBackground_InsideWorkExperienceRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CandidateBackground_InsideWorkExperience` entity based on its keys.
     * @param backgroundElementId Key property. See [[CandidateBackground_InsideWorkExperience.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `CandidateBackground_InsideWorkExperience` entity based on its keys.
     */
    CandidateBackground_InsideWorkExperienceRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(CandidateBackground_InsideWorkExperience_1.CandidateBackground_InsideWorkExperience, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `CandidateBackground_InsideWorkExperience` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateBackground_InsideWorkExperience` entities.
     */
    CandidateBackground_InsideWorkExperienceRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(CandidateBackground_InsideWorkExperience_1.CandidateBackground_InsideWorkExperience);
    };
    /**
     * Returns a request builder for creating a `CandidateBackground_InsideWorkExperience` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateBackground_InsideWorkExperience`.
     */
    CandidateBackground_InsideWorkExperienceRequestBuilder.prototype.create = function (entity) {
        return new cloud_sdk_core_1.CreateRequestBuilder(CandidateBackground_InsideWorkExperience_1.CandidateBackground_InsideWorkExperience, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CandidateBackground_InsideWorkExperience`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateBackground_InsideWorkExperience`.
     */
    CandidateBackground_InsideWorkExperienceRequestBuilder.prototype.update = function (entity) {
        return new cloud_sdk_core_1.UpdateRequestBuilder(CandidateBackground_InsideWorkExperience_1.CandidateBackground_InsideWorkExperience, entity);
    };
    return CandidateBackground_InsideWorkExperienceRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.CandidateBackground_InsideWorkExperienceRequestBuilder = CandidateBackground_InsideWorkExperienceRequestBuilder;
//# sourceMappingURL=CandidateBackground_InsideWorkExperienceRequestBuilder.js.map