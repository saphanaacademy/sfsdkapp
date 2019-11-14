/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { JobApplicationSnapshot_TalentPoolRequestBuilder } from './JobApplicationSnapshot_TalentPoolRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, DateField, StringField, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "JobApplicationSnapshot_TalentPool" of service "SFOData".
 */
export declare class JobApplicationSnapshot_TalentPool extends Entity implements JobApplicationSnapshot_TalentPoolType {
    /**
     * Technical entity name for JobApplicationSnapshot_TalentPool.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_TalentPool.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Application Id.
     */
    applicationId: BigNumber;
    /**
     * Background Element Id.
     */
    backgroundElementId: BigNumber;
    /**
     * Background Order Position.
     */
    bgOrderPos: BigNumber;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Date last updated.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Comments.
     * @nullable
     */
    talentPoolComments?: string;
    /**
     * Talent Status.
     * @nullable
     */
    talentPoolStatus?: string;
    /**
     * Candidate Talent Pool.
     * @nullable
     */
    talentPoolitem?: string;
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_TalentPool`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_TalentPool`.
     */
    static builder(): EntityBuilderType<JobApplicationSnapshot_TalentPool, JobApplicationSnapshot_TalentPoolTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_TalentPool` entity type.
     * @returns A `JobApplicationSnapshot_TalentPool` request builder.
     */
    static requestBuilder(): JobApplicationSnapshot_TalentPoolRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_TalentPool`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_TalentPool`.
     */
    static customField(fieldName: string): CustomField<JobApplicationSnapshot_TalentPool>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface JobApplicationSnapshot_TalentPoolType {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDateTime: Moment;
    startDate?: Moment;
    talentPoolComments?: string;
    talentPoolStatus?: string;
    talentPoolitem?: string;
}
export interface JobApplicationSnapshot_TalentPoolTypeForceMandatory {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDateTime: Moment;
    startDate: Moment;
    talentPoolComments: string;
    talentPoolStatus: string;
    talentPoolitem: string;
}
export declare namespace JobApplicationSnapshot_TalentPool {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_TalentPool>;
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_TalentPool>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_TalentPool>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_TalentPool>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<JobApplicationSnapshot_TalentPool>;
    /**
     * Static representation of the [[talentPoolComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL_COMMENTS: StringField<JobApplicationSnapshot_TalentPool>;
    /**
     * Static representation of the [[talentPoolStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL_STATUS: StringField<JobApplicationSnapshot_TalentPool>;
    /**
     * Static representation of the [[talentPoolitem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOLITEM: StringField<JobApplicationSnapshot_TalentPool>;
    /**
     * All fields of the JobApplicationSnapshot_TalentPool entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationSnapshot_TalentPool> | DateField<JobApplicationSnapshot_TalentPool> | StringField<JobApplicationSnapshot_TalentPool>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationSnapshot_TalentPool>;
    /**
     * All key fields of the JobApplicationSnapshot_TalentPool entity.
     */
    const _keyFields: Array<Selectable<JobApplicationSnapshot_TalentPool>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_TalentPool.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationSnapshot_TalentPool>;
    };
}
//# sourceMappingURL=JobApplicationSnapshot_TalentPool.d.ts.map