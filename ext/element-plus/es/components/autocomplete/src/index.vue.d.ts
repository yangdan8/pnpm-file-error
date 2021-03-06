import type { Placement } from 'element-plus/es/components/popper';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: PropType<Placement>;
        validator: (val: string) => boolean;
        default: string;
    };
    fetchSuggestions: {
        type: PropType<(queryString: string, cb: (data: any[]) => void) => void>;
        default: () => void;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    triggerOnFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectWhenUnmatched: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: undefined;
    };
    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    highlightFirstItem: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    attrs: import("vue").ComputedRef<Record<string, unknown>>;
    suggestions: import("vue").Ref<any[]>;
    highlightedIndex: import("vue").Ref<number>;
    dropdownWidth: import("vue").Ref<string>;
    activated: import("vue").Ref<boolean>;
    suggestionDisabled: import("vue").Ref<boolean>;
    loading: import("vue").Ref<boolean>;
    inputRef: import("vue").Ref<{
        inputOrTextarea: HTMLInputElement | HTMLTextAreaElement;
        focus: () => void;
        $el: HTMLElement;
    } | null>;
    regionRef: import("vue").Ref<HTMLElement | null>;
    popper: import("vue").Ref<null>;
    id: import("vue").ComputedRef<string>;
    suggestionVisible: import("vue").ComputedRef<boolean>;
    suggestionLoading: import("vue").ComputedRef<boolean>;
    compatTeleported: import("vue").ComputedRef<boolean>;
    getData: (queryString: string) => void;
    handleInput: (value: string) => void;
    handleChange: (value: any) => void;
    handleFocus: (e: any) => void;
    handleBlur: (e: any) => void;
    handleClear: () => void;
    handleKeyEnter: () => void;
    close: () => void;
    focus: () => void;
    select: (item: any) => void;
    highlight: (index: number) => void;
    onSuggestionShow: () => void;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "input" | "clear" | "focus" | "blur" | "select")[], "update:modelValue" | "change" | "input" | "clear" | "blur" | "focus" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: PropType<Placement>;
        validator: (val: string) => boolean;
        default: string;
    };
    fetchSuggestions: {
        type: PropType<(queryString: string, cb: (data: any[]) => void) => void>;
        default: () => void;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    triggerOnFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectWhenUnmatched: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: undefined;
    };
    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    highlightFirstItem: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    placement: Placement;
    popperClass: string;
    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    valueKey: string;
    debounce: number;
    fetchSuggestions: (queryString: string, cb: (data: any[]) => void) => void;
    triggerOnFocus: boolean;
    selectWhenUnmatched: boolean;
    hideLoading: boolean;
    popperAppendToBody: boolean;
    highlightFirstItem: boolean;
}>;
export default _default;
