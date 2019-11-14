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
var Candidate_1 = require("./Candidate");
/**
 * Request builder class for operations supported on the [[Candidate]] entity.
 */
var CandidateRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateRequestBuilder, _super);
    function CandidateRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Candidate` entity based on its keys.
     * @param candidateId Key property. See [[Candidate.candidateId]].
     * @returns A request builder for creating requests to retrieve one `Candidate` entity based on its keys.
     */
    CandidateRequestBuilder.prototype.getByKey = function (candidateId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(Candidate_1.Candidate, { candidateId: candidateId });
    };
    /**
     * Returns a request builder for querying all `Candidate` entities.
     * @returns A request builder for creating requests to retrieve all `Candidate` entities.
     */
    CandidateRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(Candidate_1.Candidate);
    };
    /**
     * Returns a request builder for creating a `Candidate` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Candidate`.
     */
    CandidateRequestBuilder.prototype.create = function (entity) {
        return new cloud_sdk_core_1.CreateRequestBuilder(Candidate_1.Candidate, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Candidate`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Candidate`.
     */
    CandidateRequestBuilder.prototype.update = function (entity) {
        return new cloud_sdk_core_1.UpdateRequestBuilder(Candidate_1.Candidate, entity);
    };
    return CandidateRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.CandidateRequestBuilder = CandidateRequestBuilder;
//# sourceMappingURL=CandidateRequestBuilder.js.map