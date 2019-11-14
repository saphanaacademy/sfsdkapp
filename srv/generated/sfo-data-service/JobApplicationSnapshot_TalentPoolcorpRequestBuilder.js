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
var JobApplicationSnapshot_TalentPoolcorp_1 = require("./JobApplicationSnapshot_TalentPoolcorp");
/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_TalentPoolcorp]] entity.
 */
var JobApplicationSnapshot_TalentPoolcorpRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_TalentPoolcorpRequestBuilder, _super);
    function JobApplicationSnapshot_TalentPoolcorpRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationSnapshot_TalentPoolcorp` entity based on its keys.
     * @param backgroundElementId Key property. See [[JobApplicationSnapshot_TalentPoolcorp.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_TalentPoolcorp` entity based on its keys.
     */
    JobApplicationSnapshot_TalentPoolcorpRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(JobApplicationSnapshot_TalentPoolcorp_1.JobApplicationSnapshot_TalentPoolcorp, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationSnapshot_TalentPoolcorp` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_TalentPoolcorp` entities.
     */
    JobApplicationSnapshot_TalentPoolcorpRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(JobApplicationSnapshot_TalentPoolcorp_1.JobApplicationSnapshot_TalentPoolcorp);
    };
    return JobApplicationSnapshot_TalentPoolcorpRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.JobApplicationSnapshot_TalentPoolcorpRequestBuilder = JobApplicationSnapshot_TalentPoolcorpRequestBuilder;
//# sourceMappingURL=JobApplicationSnapshot_TalentPoolcorpRequestBuilder.js.map