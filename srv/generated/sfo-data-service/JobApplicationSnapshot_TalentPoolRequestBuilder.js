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
var JobApplicationSnapshot_TalentPool_1 = require("./JobApplicationSnapshot_TalentPool");
/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_TalentPool]] entity.
 */
var JobApplicationSnapshot_TalentPoolRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_TalentPoolRequestBuilder, _super);
    function JobApplicationSnapshot_TalentPoolRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationSnapshot_TalentPool` entity based on its keys.
     * @param backgroundElementId Key property. See [[JobApplicationSnapshot_TalentPool.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_TalentPool` entity based on its keys.
     */
    JobApplicationSnapshot_TalentPoolRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(JobApplicationSnapshot_TalentPool_1.JobApplicationSnapshot_TalentPool, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationSnapshot_TalentPool` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_TalentPool` entities.
     */
    JobApplicationSnapshot_TalentPoolRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(JobApplicationSnapshot_TalentPool_1.JobApplicationSnapshot_TalentPool);
    };
    return JobApplicationSnapshot_TalentPoolRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.JobApplicationSnapshot_TalentPoolRequestBuilder = JobApplicationSnapshot_TalentPoolRequestBuilder;
//# sourceMappingURL=JobApplicationSnapshot_TalentPoolRequestBuilder.js.map