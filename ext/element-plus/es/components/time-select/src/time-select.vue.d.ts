import type { PropType, Component } from 'vue';
declare const _default: import("vue").DefineComponent<{
    format: {
        type: StringConstructor;
        default: string;
    };
    modelValue: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: PropType<string>;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<"default" | "small" | "large">;
        default: string;
        validator: (value: string) => boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    start: {
        type: StringConstructor;
        default: string;
    };
    end: {
        type: StringConstructor;
        default: string;
    };
    step: {
        type: StringConstructor;
        default: string;
    };
    minTime: {
        type: StringConstructor;
        default: string;
    };
    maxTime: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    clearIcon: {
        type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
}, {
    select: import("vue").Ref<null>;
    value: import("vue").ComputedRef<string | undefined>;
    items: import("vue").ComputedRef<never[]>;
    blur: () => void;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "focus" | "blur")[], "update:modelValue" | "change" | "blur" | "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    format: {
        type: StringConstructor;
        default: string;
    };
    modelValue: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: PropType<string>;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<"default" | "small" | "large">;
        default: string;
        validator: (value: string) => boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    start: {
        type: StringConstructor;
        default: string;
    };
    end: {
        type: StringConstructor;
        default: string;
    };
    step: {
        type: StringConstructor;
        default: string;
    };
    minTime: {
        type: StringConstructor;
        default: string;
    };
    maxTime: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    clearIcon: {
        type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    size: "default" | "small" | "large";
    disabled: boolean;
    name: string;
    editable: boolean;
    effect: string;
    end: string;
    start: string;
    placeholder: string;
    clearable: boolean;
    prefixIcon: string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    format: string;
    clearIcon: string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    step: string;
    minTime: string;
    maxTime: string;
}>;
export default _default;
