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
var JobApplicationSnapshot_Languages_1 = require("./JobApplicationSnapshot_Languages");
/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_Languages]] entity.
 */
var JobApplicationSnapshot_LanguagesRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_LanguagesRequestBuilder, _super);
    function JobApplicationSnapshot_LanguagesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationSnapshot_Languages` entity based on its keys.
     * @param backgroundElementId Key property. See [[JobApplicationSnapshot_Languages.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_Languages` entity based on its keys.
     */
    JobApplicationSnapshot_LanguagesRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(JobApplicationSnapshot_Languages_1.JobApplicationSnapshot_Languages, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationSnapshot_Languages` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_Languages` entities.
     */
    JobApplicationSnapshot_LanguagesRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(JobApplicationSnapshot_Languages_1.JobApplicationSnapshot_Languages);
    };
    return JobApplicationSnapshot_LanguagesRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.JobApplicationSnapshot_LanguagesRequestBuilder = JobApplicationSnapshot_LanguagesRequestBuilder;
//# sourceMappingURL=JobApplicationSnapshot_LanguagesRequestBuilder.js.map