"use strict";
/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * Set Sms Notification Preference.
 *
 * @param parameters Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function setSmsNotificationPreference(parameters) {
    var params = {
        optIn: new cloud_sdk_core_1.FunctionImportParameter('optIn', 'Edm.Boolean', parameters.optIn),
        candidateId: new cloud_sdk_core_1.FunctionImportParameter('candidateId', 'Edm.Int64', parameters.candidateId),
        isoCountryCode: new cloud_sdk_core_1.FunctionImportParameter('isoCountryCode', 'Edm.String', parameters.isoCountryCode),
        cellPhone: new cloud_sdk_core_1.FunctionImportParameter('cellPhone', 'Edm.String', parameters.cellPhone)
    };
    return new cloud_sdk_core_1.FunctionImportRequestBuilder('post', '/odata/v2', 'setSmsNotificationPreference', function (data) { return cloud_sdk_core_1.transformReturnValueForEdmType(data, function (val) { return cloud_sdk_core_1.edmToTs(val, Edm.String); }); }, params);
}
exports.setSmsNotificationPreference = setSmsNotificationPreference;
exports.functionImports = {
    setSmsNotificationPreference: setSmsNotificationPreference
};
//# sourceMappingURL=function-imports.js.map