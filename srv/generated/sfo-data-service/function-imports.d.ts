/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { BigNumber } from 'bignumber.js';
import { FunctionImportRequestBuilder } from '@sap/cloud-sdk-core';
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
export declare function setSmsNotificationPreference(parameters: SetSmsNotificationPreferenceParameters): FunctionImportRequestBuilder<SetSmsNotificationPreferenceParameters, string>;
export declare const functionImports: {
    setSmsNotificationPreference: typeof setSmsNotificationPreference;
};
//# sourceMappingURL=function-imports.d.ts.map