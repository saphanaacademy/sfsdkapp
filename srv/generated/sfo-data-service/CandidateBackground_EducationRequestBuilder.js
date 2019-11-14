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
var CandidateBackground_Education_1 = require("./CandidateBackground_Education");
/**
 * Request builder class for operations supported on the [[CandidateBackground_Education]] entity.
 */
var CandidateBackground_EducationRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateBackground_EducationRequestBuilder, _super);
    function CandidateBackground_EducationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CandidateBackground_Education` entity based on its keys.
     * @param backgroundElementId Key property. See [[CandidateBackground_Education.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `CandidateBackground_Education` entity based on its keys.
     */
    CandidateBackground_EducationRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(CandidateBackground_Education_1.CandidateBackground_Education, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `CandidateBackground_Education` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateBackground_Education` entities.
     */
    CandidateBackground_EducationRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(CandidateBackground_Education_1.CandidateBackground_Education);
    };
    /**
     * Returns a request builder for creating a `CandidateBackground_Education` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateBackground_Education`.
     */
    CandidateBackground_EducationRequestBuilder.prototype.create = function (entity) {
        return new cloud_sdk_core_1.CreateRequestBuilder(CandidateBackground_Education_1.CandidateBackground_Education, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CandidateBackground_Education`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateBackground_Education`.
     */
    CandidateBackground_EducationRequestBuilder.prototype.update = function (entity) {
        return new cloud_sdk_core_1.UpdateRequestBuilder(CandidateBackground_Education_1.CandidateBackground_Education, entity);
    };
    return CandidateBackground_EducationRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.CandidateBackground_EducationRequestBuilder = CandidateBackground_EducationRequestBuilder;
//# sourceMappingURL=CandidateBackground_EducationRequestBuilder.js.map