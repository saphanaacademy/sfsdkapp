/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { BigNumber } from 'bignumber.js';
import { transformReturnValueForEdmType, edmToTs, FunctionImportRequestBuilder, FunctionImportParameter } from '@sap/cloud-sdk-core';

/**
 * Type of the parameters to be passed to [[setSmsNotificationPreference]].
 */
export interface SetSmsNotificationPreferenceParameters {
  /**
   * Opt In.
   */
  optIn: boolean;
  /**
   * Candidate Id.
   */
  candidateId: BigNumber;
  /**
   * Iso Country Code.
   */
  isoCountryCode: string;
  /**
   * Cell Phone.
   */
  cellPhone: string;
}

/**
 * Set Sms Notification Preference.
 *
 * @param parameters Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function setSmsNotificationPreference(parameters: SetSmsNotificationPreferenceParameters): FunctionImportRequestBuilder<SetSmsNotificationPreferenceParameters, string> {
  const params = {
    optIn: new FunctionImportParameter('optIn', 'Edm.Boolean', parameters.optIn),
    candidateId: new FunctionImportParameter('candidateId', 'Edm.Int64', parameters.candidateId),
    isoCountryCode: new FunctionImportParameter('isoCountryCode', 'Edm.String', parameters.isoCountryCode),
    cellPhone: new FunctionImportParameter('cellPhone', 'Edm.String', parameters.cellPhone)
  }

  return new FunctionImportRequestBuilder('post', '/odata/v2', 'setSmsNotificationPreference', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, Edm.String)), params);
}

export const functionImports = {
  setSmsNotificationPreference
};
