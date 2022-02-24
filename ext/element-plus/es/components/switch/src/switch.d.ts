import type Switch from './switch.vue';
import type { ExtractPropTypes } from 'vue';
export declare const switchProps: {
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [BooleanConstructor, StringConstructor, NumberConstructor], false, unknown, unknown, unknown>;
    readonly value: import("element-plus/es/utils").BuildPropReturn<readonly [BooleanConstructor, StringConstructor, NumberConstructor], false, unknown, unknown, unknown>;
    readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 40, unknown, unknown, unknown>;
    readonly inlinePrompt: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly activeIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly inactiveIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly activeText: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly inactiveText: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly activeColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly inactiveColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly borderColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly activeValue: import("element-plus/es/utils").BuildPropReturn<readonly [BooleanConstructor, StringConstructor, NumberConstructor], true, unknown, unknown, unknown>;
    readonly inactiveValue: import("element-plus/es/utils").BuildPropReturn<readonly [BooleanConstructor, StringConstructor, NumberConstructor], false, unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly validateEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly id: StringConstructor;
    readonly loading: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly beforeChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<() => Promise<boolean> | boolean>, unknown, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<(new (...args: any[]) => ("default" | "small" | "large") & {}) | (() => "default" | "small" | "large") | ((new (...args: any[]) => ("default" | "small" | "large") & {}) | (() => "default" | "small" | "large"))[], unknown, unknown, unknown, "" | "default" | "small" | "large">;
};
export declare type SwitchProps = ExtractPropTypes<typeof switchProps>;
export declare const switchEmits: {
    "update:modelValue": (val: boolean | string | number) => boolean;
    change: (val: boolean | string | number) => boolean;
    input: (val: boolean | string | number) => boolean;
};
export declare type SwitchEmits = typeof switchEmits;
export declare type SwitchInstance = InstanceType<typeof Switch>;
