/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { JobApplicationSnapshot_EducationRequestBuilder } from './JobApplicationSnapshot_EducationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { BigNumberField, StringField, DateField, NumberField, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "JobApplicationSnapshot_Education" of service "SFOData".
 */
export declare class JobApplicationSnapshot_Education extends Entity implements JobApplicationSnapshot_EducationType {
    /**
     * Technical entity name for JobApplicationSnapshot_Education.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_Education.
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
     * Degree.
     * @nullable
     */
    degree?: string;
    /**
     * Degree Date.
     * @nullable
     */
    degreeDate?: Moment;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Major.
     * @nullable
     */
    major?: string;
    /**
     * Are you a student?.
     * @nullable
     */
    presentStudent?: number;
    /**
     * School.
     * @nullable
     */
    school?: string;
    /**
     * School Address.
     * @nullable
     */
    schoolAddress?: string;
    /**
     * School City.
     * @nullable
     */
    schoolCity?: string;
    /**
     * School Country.
     * @nullable
     */
    schoolCountry?: string;
    /**
     * School Phone.
     * @nullable
     */
    schoolPhone?: string;
    /**
     * School State.
     * @nullable
     */
    schoolState?: string;
    /**
     * School Type.
     * @nullable
     */
    schoolType?: string;
    /**
     * School Zip Code.
     * @nullable
     */
    schoolZip?: string;
    /**
     * From Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_Education`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Education`.
     */
    static builder(): EntityBuilderType<JobApplicationSnapshot_Education, JobApplicationSnapshot_EducationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Education` entity type.
     * @returns A `JobApplicationSnapshot_Education` request builder.
     */
    static requestBuilder(): JobApplicationSnapshot_EducationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Education`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Education`.
     */
    static customField(fieldName: string): CustomField<JobApplicationSnapshot_Education>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface JobApplicationSnapshot_EducationType {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    degree?: string;
    degreeDate?: Moment;
    endDate?: Moment;
    lastModifiedDateTime: Moment;
    major?: string;
    presentStudent?: number;
    school?: string;
    schoolAddress?: string;
    schoolCity?: string;
    schoolCountry?: string;
    schoolPhone?: string;
    schoolState?: string;
    schoolType?: string;
    schoolZip?: string;
    startDate?: Moment;
}
export interface JobApplicationSnapshot_EducationTypeForceMandatory {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    degree: string;
    degreeDate: Moment;
    endDate: Moment;
    lastModifiedDateTime: Moment;
    major: string;
    presentStudent: number;
    school: string;
    schoolAddress: string;
    schoolCity: string;
    schoolCountry: string;
    schoolPhone: string;
    schoolState: string;
    schoolType: string;
    schoolZip: string;
    startDate: Moment;
}
export declare namespace JobApplicationSnapshot_Education {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[degree]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE: StringField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[degreeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_DATE: DateField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[major]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR: StringField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[presentStudent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRESENT_STUDENT: NumberField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[school]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHOOL: StringField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[schoolAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHOOL_ADDRESS: StringField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[schoolCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHOOL_CITY: StringField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[schoolCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHOOL_COUNTRY: StringField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[schoolPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHOOL_PHONE: StringField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[schoolState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHOOL_STATE: StringField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[schoolType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHOOL_TYPE: StringField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[schoolZip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHOOL_ZIP: StringField<JobApplicationSnapshot_Education>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<JobApplicationSnapshot_Education>;
    /**
     * All fields of the JobApplicationSnapshot_Education entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationSnapshot_Education> | StringField<JobApplicationSnapshot_Education> | DateField<JobApplicationSnapshot_Education> | NumberField<JobApplicationSnapshot_Education>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationSnapshot_Education>;
    /**
     * All key fields of the JobApplicationSnapshot_Education entity.
     */
    const _keyFields: Array<Selectable<JobApplicationSnapshot_Education>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Education.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationSnapshot_Education>;
    };
}
//# sourceMappingURL=JobApplicationSnapshot_Education.d.ts.map