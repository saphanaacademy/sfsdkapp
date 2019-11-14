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
var CandidateBackground_Certificates_1 = require("./CandidateBackground_Certificates");
/**
 * Request builder class for operations supported on the [[CandidateBackground_Certificates]] entity.
 */
var CandidateBackground_CertificatesRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateBackground_CertificatesRequestBuilder, _super);
    function CandidateBackground_CertificatesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CandidateBackground_Certificates` entity based on its keys.
     * @param backgroundElementId Key property. See [[CandidateBackground_Certificates.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `CandidateBackground_Certificates` entity based on its keys.
     */
    CandidateBackground_CertificatesRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(CandidateBackground_Certificates_1.CandidateBackground_Certificates, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `CandidateBackground_Certificates` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateBackground_Certificates` entities.
     */
    CandidateBackground_CertificatesRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(CandidateBackground_Certificates_1.CandidateBackground_Certificates);
    };
    /**
     * Returns a request builder for creating a `CandidateBackground_Certificates` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateBackground_Certificates`.
     */
    CandidateBackground_CertificatesRequestBuilder.prototype.create = function (entity) {
        return new cloud_sdk_core_1.CreateRequestBuilder(CandidateBackground_Certificates_1.CandidateBackground_Certificates, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CandidateBackground_Certificates`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CandidateBackground_Certificates`.
     */
    CandidateBackground_CertificatesRequestBuilder.prototype.update = function (entity) {
        return new cloud_sdk_core_1.UpdateRequestBuilder(CandidateBackground_Certificates_1.CandidateBackground_Certificates, entity);
    };
    return CandidateBackground_CertificatesRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.CandidateBackground_CertificatesRequestBuilder = CandidateBackground_CertificatesRequestBuilder;
//# sourceMappingURL=CandidateBackground_CertificatesRequestBuilder.js.map