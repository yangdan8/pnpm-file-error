declare const _default: import("vue").DefineComponent<{
    readonly value: import("../../../utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly max: import("../../../utils").BuildPropReturn<NumberConstructor, 99, unknown, unknown, unknown>;
    readonly isDot: BooleanConstructor;
    readonly hidden: BooleanConstructor;
    readonly type: import("../../../utils").BuildPropReturn<StringConstructor, "danger", unknown, "primary" | "success" | "warning" | "info" | "danger", unknown>;
}, {
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
    content: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly value: import("../../../utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly max: import("../../../utils").BuildPropReturn<NumberConstructor, 99, unknown, unknown, unknown>;
    readonly isDot: BooleanConstructor;
    readonly hidden: BooleanConstructor;
    readonly type: import("../../../utils").BuildPropReturn<StringConstructor, "danger", unknown, "primary" | "success" | "warning" | "info" | "danger", unknown>;
}>>, {
    type: import("../../../utils").BuildPropType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>;
    hidden: boolean;
    value: import("../../../utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    max: number;
    isDot: boolean;
}>;
export default _default;
