declare const _default: import("vue").DefineComponent<{
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly lowThreshold: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, unknown, unknown, unknown>;
    readonly highThreshold: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 4, unknown, unknown, unknown>;
    readonly max: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
    readonly colors: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string[] | Record<number, string>>, () => ["var(--el-rate-star-color)", "var(--el-rate-star-color)", "var(--el-rate-star-color)"], unknown, unknown, unknown>;
    readonly voidColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "var(--el-rate-void-color)", unknown, unknown, unknown>;
    readonly disabledVoidColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "var(--el-rate-disable-void-color)", unknown, unknown, unknown>;
    readonly icons: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>)[] | Record<number, string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>[], unknown, unknown, unknown>;
    readonly voidIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, unknown, unknown, unknown>;
    readonly disabledvoidIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, unknown, unknown, unknown>;
    readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly allowHalf: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showText: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showScore: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "var(--el-rate-text-color)", unknown, unknown, unknown>;
    readonly texts: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string[]>, () => ["Extremely bad", "Disappointed", "Fair", "Satisfied", "Surprise"], unknown, unknown, unknown>;
    readonly scoreTemplate: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "{value}", unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<(new (...args: any[]) => ("default" | "small" | "large") & {}) | (() => "default" | "small" | "large") | ((new (...args: any[]) => ("default" | "small" | "large") & {}) | (() => "default" | "small" | "large"))[], unknown, unknown, unknown, "" | "default" | "small" | "large">;
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
    hoverIndex: import("vue").Ref<number>;
    currentValue: import("vue").Ref<number>;
    rateDisabled: import("vue").ComputedRef<boolean | undefined>;
    text: import("vue").ComputedRef<string>;
    decimalStyle: import("vue").ComputedRef<{
        color: string | {
            excluded?: boolean | undefined;
            value: string;
        };
        width: string;
    }>;
    decimalIconComponent: import("vue").ComputedRef<string | import("vue").ComponentOptions<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, any, any, any> | import("vue").FunctionalComponent<any, any> | {
        new (...args: any[]): any;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } | {
        excluded?: boolean | undefined;
        value: string | import("vue").ComponentOptions<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, any, any, any> | import("vue").FunctionalComponent<any, any> | {
            new (...args: any[]): any;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        };
    }>;
    iconComponents: import("vue").ComputedRef<any[]>;
    rateKls: import("vue").ComputedRef<string[]>;
    showDecimalIcon: (item: number) => boolean;
    getIconStyle: (item: number) => {
        color: string | {
            excluded?: boolean | undefined;
            value: string;
        };
    };
    selectValue: (value: number) => void;
    handleKey: (e: KeyboardEvent) => number | undefined;
    setCurrentValue: (value: number, event: MouseEvent) => void;
    resetCurrentValue: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: number) => boolean;
    "update:modelValue": (value: number) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly lowThreshold: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, unknown, unknown, unknown>;
    readonly highThreshold: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 4, unknown, unknown, unknown>;
    readonly max: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
    readonly colors: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string[] | Record<number, string>>, () => ["var(--el-rate-star-color)", "var(--el-rate-star-color)", "var(--el-rate-star-color)"], unknown, unknown, unknown>;
    readonly voidColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "var(--el-rate-void-color)", unknown, unknown, unknown>;
    readonly disabledVoidColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "var(--el-rate-disable-void-color)", unknown, unknown, unknown>;
    readonly icons: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>)[] | Record<number, string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>[], unknown, unknown, unknown>;
    readonly voidIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, unknown, unknown, unknown>;
    readonly disabledvoidIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, unknown, unknown, unknown>;
    readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly allowHalf: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showText: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showScore: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "var(--el-rate-text-color)", unknown, unknown, unknown>;
    readonly texts: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string[]>, () => ["Extremely bad", "Disappointed", "Fair", "Satisfied", "Surprise"], unknown, unknown, unknown>;
    readonly scoreTemplate: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "{value}", unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<(new (...args: any[]) => ("default" | "small" | "large") & {}) | (() => "default" | "small" | "large") | ((new (...args: any[]) => ("default" | "small" | "large") & {}) | (() => "default" | "small" | "large"))[], unknown, unknown, unknown, "" | "default" | "small" | "large">;
}>> & {
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {
    size: import("element-plus/es/utils").BuildPropType<(new (...args: any[]) => ("default" | "small" | "large") & {}) | (() => "default" | "small" | "large") | ((new (...args: any[]) => ("default" | "small" | "large") & {}) | (() => "default" | "small" | "large"))[], unknown, "" | "default" | "small" | "large">;
    disabled: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    modelValue: number;
    textColor: string;
    max: number;
    colors: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string[] | Record<number, string>>, unknown, unknown>;
    showText: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    lowThreshold: number;
    highThreshold: number;
    voidColor: string;
    disabledVoidColor: string;
    icons: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<(string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>)[] | Record<number, string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>>, unknown, unknown>;
    voidIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    disabledvoidIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    allowHalf: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    showScore: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    texts: string[];
    scoreTemplate: string;
}>;
export default _default;
