/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { JobApplicationSnapshot_CertificatesRequestBuilder } from './JobApplicationSnapshot_CertificatesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "JobApplicationSnapshot_Certificates" of service "SFOData".
 */
export class JobApplicationSnapshot_Certificates extends Entity implements JobApplicationSnapshot_CertificatesType {
  /**
   * Technical entity name for JobApplicationSnapshot_Certificates.
   */
  static _entityName = 'JobApplicationSnapshot_Certificates';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationSnapshot_Certificates.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * Application Id.
   */
  applicationId!: BigNumber;
  /**
   * Background Element Id.
   */
  backgroundElementId!: BigNumber;
  /**
   * Background Order Position.
   */
  bgOrderPos!: BigNumber;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Expiration Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Institution.
   * @nullable
   */
  institution?: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * Certification/License Country.
   * @nullable
   */
  licenseCountry?: string;
  /**
   * Name as appears on Certification/License.
   * @nullable
   */
  licenseName?: string;
  /**
   * Certification/License Number.
   * @nullable
   */
  licenseNumber?: string;
  /**
   * Certification/License State.
   * @nullable
   */
  licenseState?: string;
  /**
   * Certification/License Type.
   * @nullable
   */
  licenseType?: string;
  /**
   * Certification/License Name.
   * @nullable
   */
  name?: string;
  /**
   * Effective Date.
   * @nullable
   */
  startDate?: Moment;

  /**
   * Returns an entity builder to construct instances `JobApplicationSnapshot_Certificates`.
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Certificates`.
   */
  static builder(): EntityBuilderType<JobApplicationSnapshot_Certificates, JobApplicationSnapshot_CertificatesTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationSnapshot_Certificates);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Certificates` entity type.
   * @returns A `JobApplicationSnapshot_Certificates` request builder.
   */
  static requestBuilder(): JobApplicationSnapshot_CertificatesRequestBuilder {
    return new JobApplicationSnapshot_CertificatesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Certificates`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Certificates`.
   */
  static customField(fieldName: string): CustomField<JobApplicationSnapshot_Certificates> {
    return Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Certificates);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface JobApplicationSnapshot_CertificatesType {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  description?: string;
  endDate?: Moment;
  institution?: string;
  lastModifiedDateTime: Moment;
  licenseCountry?: string;
  licenseName?: string;
  licenseNumber?: string;
  licenseState?: string;
  licenseType?: string;
  name?: string;
  startDate?: Moment;
}

export interface JobApplicationSnapshot_CertificatesTypeForceMandatory {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  description: string;
  endDate: Moment;
  institution: string;
  lastModifiedDateTime: Moment;
  licenseCountry: string;
  licenseName: string;
  licenseNumber: string;
  licenseState: string;
  licenseType: string;
  name: string;
  startDate: Moment;
}

export namespace JobApplicationSnapshot_Certificates {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_Certificates> = new BigNumberField('applicationId', JobApplicationSnapshot_Certificates, 'Edm.Int64');
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_Certificates> = new BigNumberField('backgroundElementId', JobApplicationSnapshot_Certificates, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_Certificates> = new BigNumberField('bgOrderPos', JobApplicationSnapshot_Certificates, 'Edm.Int64');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<JobApplicationSnapshot_Certificates> = new StringField('description', JobApplicationSnapshot_Certificates, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<JobApplicationSnapshot_Certificates> = new DateField('endDate', JobApplicationSnapshot_Certificates, 'Edm.DateTime');
  /**
   * Static representation of the [[institution]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTITUTION: StringField<JobApplicationSnapshot_Certificates> = new StringField('institution', JobApplicationSnapshot_Certificates, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_Certificates> = new DateField('lastModifiedDateTime', JobApplicationSnapshot_Certificates, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[licenseCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LICENSE_COUNTRY: StringField<JobApplicationSnapshot_Certificates> = new StringField('licenseCountry', JobApplicationSnapshot_Certificates, 'Edm.String');
  /**
   * Static representation of the [[licenseName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LICENSE_NAME: StringField<JobApplicationSnapshot_Certificates> = new StringField('licenseName', JobApplicationSnapshot_Certificates, 'Edm.String');
  /**
   * Static representation of the [[licenseNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LICENSE_NUMBER: StringField<JobApplicationSnapshot_Certificates> = new StringField('licenseNumber', JobApplicationSnapshot_Certificates, 'Edm.String');
  /**
   * Static representation of the [[licenseState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LICENSE_STATE: StringField<JobApplicationSnapshot_Certificates> = new StringField('licenseState', JobApplicationSnapshot_Certificates, 'Edm.String');
  /**
   * Static representation of the [[licenseType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LICENSE_TYPE: StringField<JobApplicationSnapshot_Certificates> = new StringField('licenseType', JobApplicationSnapshot_Certificates, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<JobApplicationSnapshot_Certificates> = new StringField('name', JobApplicationSnapshot_Certificates, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<JobApplicationSnapshot_Certificates> = new DateField('startDate', JobApplicationSnapshot_Certificates, 'Edm.DateTime');
  /**
   * All fields of the JobApplicationSnapshot_Certificates entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationSnapshot_Certificates> | StringField<JobApplicationSnapshot_Certificates> | DateField<JobApplicationSnapshot_Certificates>> = [
    JobApplicationSnapshot_Certificates.APPLICATION_ID,
    JobApplicationSnapshot_Certificates.BACKGROUND_ELEMENT_ID,
    JobApplicationSnapshot_Certificates.BG_ORDER_POS,
    JobApplicationSnapshot_Certificates.DESCRIPTION,
    JobApplicationSnapshot_Certificates.END_DATE,
    JobApplicationSnapshot_Certificates.INSTITUTION,
    JobApplicationSnapshot_Certificates.LAST_MODIFIED_DATE_TIME,
    JobApplicationSnapshot_Certificates.LICENSE_COUNTRY,
    JobApplicationSnapshot_Certificates.LICENSE_NAME,
    JobApplicationSnapshot_Certificates.LICENSE_NUMBER,
    JobApplicationSnapshot_Certificates.LICENSE_STATE,
    JobApplicationSnapshot_Certificates.LICENSE_TYPE,
    JobApplicationSnapshot_Certificates.NAME,
    JobApplicationSnapshot_Certificates.START_DATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationSnapshot_Certificates> = new AllFields('*', JobApplicationSnapshot_Certificates);
  /**
   * All key fields of the JobApplicationSnapshot_Certificates entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationSnapshot_Certificates>> = [JobApplicationSnapshot_Certificates.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Certificates.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationSnapshot_Certificates> } = JobApplicationSnapshot_Certificates._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationSnapshot_Certificates> }, field: Selectable<JobApplicationSnapshot_Certificates>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
