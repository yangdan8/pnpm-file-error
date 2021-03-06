export declare const ElCalendar: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<DateConstructor, unknown, unknown, unknown, unknown>;
    readonly range: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<[Date, Date]>, unknown, unknown, unknown, [Date, Date]>;
}, {
    selectedDay: import("vue").Ref<import("dayjs").Dayjs | undefined>;
    curMonthDatePrefix: import("vue").ComputedRef<string>;
    i18nDate: import("vue").ComputedRef<string>;
    realSelectedDay: import("vue").WritableComputedRef<import("dayjs").Dayjs | undefined>;
    date: import("vue").ComputedRef<import("dayjs").Dayjs>;
    validatedRange: import("vue").ComputedRef<[import("dayjs").Dayjs, import("dayjs").Dayjs][]>;
    pickDay: (day: import("dayjs").Dayjs) => void;
    selectDate: (type: "prev-month" | "next-month" | "prev-year" | "next-year" | "today") => void;
    t: import("../..").Translator;
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Date) => boolean;
    input: (value: Date) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<DateConstructor, unknown, unknown, unknown, unknown>;
    readonly range: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<[Date, Date]>, unknown, unknown, unknown, [Date, Date]>;
}>> & {
    "onUpdate:modelValue"?: ((value: Date) => any) | undefined;
    onInput?: ((value: Date) => any) | undefined;
}, {
    modelValue: Date;
    range: [Date, Date];
}>> & Record<string, any>;
export default ElCalendar;
export * from './src/calendar';
