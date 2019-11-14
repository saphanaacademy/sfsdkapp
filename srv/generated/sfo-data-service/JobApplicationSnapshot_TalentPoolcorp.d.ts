/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { JobApplicationSnapshot_TalentPoolcorpRequestBuilder } from './JobApplicationSnapshot_TalentPoolcorpRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, DateField, StringField, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "JobApplicationSnapshot_TalentPoolcorp" of service "SFOData".
 */
export declare class JobApplicationSnapshot_TalentPoolcorp extends Entity implements JobApplicationSnapshot_TalentPoolcorpType {
    /**
     * Technical entity name for JobApplicationSnapshot_TalentPoolcorp.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_TalentPoolcorp.
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
     * Corporate Talent Pool.
     * @nullable
     */
    talentPoolitemCorp?: string;
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_TalentPoolcorp`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_TalentPoolcorp`.
     */
    static builder(): EntityBuilderType<JobApplicationSnapshot_TalentPoolcorp, JobApplicationSnapshot_TalentPoolcorpTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_TalentPoolcorp` entity type.
     * @returns A `JobApplicationSnapshot_TalentPoolcorp` request builder.
     */
    static requestBuilder(): JobApplicationSnapshot_TalentPoolcorpRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_TalentPoolcorp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_TalentPoolcorp`.
     */
    static customField(fieldName: string): CustomField<JobApplicationSnapshot_TalentPoolcorp>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface JobApplicationSnapshot_TalentPoolcorpType {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDateTime: Moment;
    startDate?: Moment;
    talentPoolComments?: string;
    talentPoolStatus?: string;
    talentPoolitemCorp?: string;
}
export interface JobApplicationSnapshot_TalentPoolcorpTypeForceMandatory {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDateTime: Moment;
    startDate: Moment;
    talentPoolComments: string;
    talentPoolStatus: string;
    talentPoolitemCorp: string;
}
export declare namespace JobApplicationSnapshot_TalentPoolcorp {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_TalentPoolcorp>;
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_TalentPoolcorp>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_TalentPoolcorp>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_TalentPoolcorp>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<JobApplicationSnapshot_TalentPoolcorp>;
    /**
     * Static representation of the [[talentPoolComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL_COMMENTS: StringField<JobApplicationSnapshot_TalentPoolcorp>;
    /**
     * Static representation of the [[talentPoolStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL_STATUS: StringField<JobApplicationSnapshot_TalentPoolcorp>;
    /**
     * Static representation of the [[talentPoolitemCorp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOLITEM_CORP: StringField<JobApplicationSnapshot_TalentPoolcorp>;
    /**
     * All fields of the JobApplicationSnapshot_TalentPoolcorp entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationSnapshot_TalentPoolcorp> | DateField<JobApplicationSnapshot_TalentPoolcorp> | StringField<JobApplicationSnapshot_TalentPoolcorp>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationSnapshot_TalentPoolcorp>;
    /**
     * All key fields of the JobApplicationSnapshot_TalentPoolcorp entity.
     */
    const _keyFields: Array<Selectable<JobApplicationSnapshot_TalentPoolcorp>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_TalentPoolcorp.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationSnapshot_TalentPoolcorp>;
    };
}
//# sourceMappingURL=JobApplicationSnapshot_TalentPoolcorp.d.ts.map