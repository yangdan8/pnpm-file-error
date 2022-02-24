import type { SFCWithInstall } from 'element-plus/es/utils';
declare const _Select: SFCWithInstall<import("vue").DefineComponent<{
    allowCreate: BooleanConstructor;
    autocomplete: {
        type: import("vue").PropType<"none" | "both" | "inline" | "list">;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    effect: {
        type: import("vue").PropType<string>;
        default: string;
    };
    collapseTags: BooleanConstructor;
    defaultFirstOption: BooleanConstructor;
    disabled: BooleanConstructor;
    estimatedOptionHeight: {
        type: NumberConstructor;
        default: undefined;
    };
    filterable: BooleanConstructor;
    filterMethod: FunctionConstructor;
    height: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    id: StringConstructor;
    loading: BooleanConstructor;
    loadingText: StringConstructor;
    label: StringConstructor;
    modelValue: import("vue").PropType<any>;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    name: StringConstructor;
    noDataText: StringConstructor;
    noMatchText: StringConstructor;
    remoteMethod: FunctionConstructor;
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: import("vue").PropType<import("./src/select.types").OptionType<any>[]>;
        required: boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: undefined;
    };
    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
        default: () => Partial<import("@popperjs/core").Options>;
    };
    remote: BooleanConstructor;
    size: {
        type: import("vue").PropType<"default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    collapseTagSize: import("vue").ComputedRef<"default" | "small">;
    currentPlaceholder: import("vue").ComputedRef<string>;
    expanded: import("vue").Ref<boolean>;
    emptyText: import("vue").ComputedRef<string | false | null>;
    popupHeight: import("vue").ComputedRef<number>;
    debounce: import("vue").ComputedRef<0 | 300>;
    filteredOptions: import("vue").ComputedRef<never[]>;
    iconComponent: import("vue").ComputedRef<"" | import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
    iconReverse: import("vue").ComputedRef<string>;
    inputWrapperStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    popperSize: import("vue").Ref<number>;
    dropdownMenuVisible: import("vue").ComputedRef<boolean>;
    hasModelValue: import("vue").ComputedRef<boolean>;
    shouldShowPlaceholder: import("vue").ComputedRef<boolean>;
    selectDisabled: import("vue").ComputedRef<boolean | undefined>;
    selectSize: import("vue").ComputedRef<"default" | "small" | "large">;
    showClearBtn: import("vue").ComputedRef<boolean>;
    states: {
        inputValue: string;
        displayInputValue: string;
        calculatedWidth: number;
        cachedPlaceholder: string;
        cachedOptions: {
            [x: string]: any;
            label: string;
            created?: boolean | undefined;
            value: any;
        }[];
        createdOptions: {
            [x: string]: any;
            label: string;
            created?: boolean | undefined;
            value: any;
        }[];
        createdLabel: string;
        createdSelected: boolean;
        currentPlaceholder: string;
        hoveringIndex: number;
        comboBoxHovering: boolean;
        isOnComposition: boolean;
        isSilentBlur: boolean;
        isComposing: boolean;
        inputLength: number;
        selectWidth: number;
        initialInputHeight: number;
        previousQuery: null;
        previousValue: string;
        query: string;
        selectedLabel: string;
        softFocus: boolean;
        tagInMultiLine: boolean;
    };
    tagMaxWidth: import("vue").ComputedRef<number>;
    nsSelectV2: {
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
    nsInput: {
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
    calculatorRef: import("vue").Ref<HTMLElement>;
    controlRef: import("vue").Ref<null>;
    inputRef: import("vue").Ref<null>;
    menuRef: import("vue").Ref<null>;
    popper: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            offset: number;
            effect: string;
            style: import("vue").StyleValue;
            visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
            arrowOffset: number;
            boundariesPadding: number;
            fallbackPlacements: import("@popperjs/core").Placement[];
            gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("@popperjs/core").Placement, unknown>;
            popperOptions: Partial<import("@popperjs/core").Options>;
            strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
            className: string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            pure: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            popperClass: string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            popperStyle: import("vue").StyleValue;
            referenceEl: HTMLElement;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            content: string;
            showAfter: number;
            hideAfter: number;
            appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            transition: string;
            teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            persistent: boolean;
            trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
            virtualRef: import("..").Measurable;
            virtualTriggering: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            openDelay: number;
            visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
            virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").Measurable>, unknown, unknown, unknown, unknown>;
            virtualTriggering: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
            appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
            content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
            transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
            teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            pure: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
            popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@popperjs/core").Placement[]>, () => never[], unknown, unknown, unknown>;
            gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("@popperjs/core").Placement, unknown>;
            popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("@popperjs/core").Options>>, () => {}, unknown, unknown, unknown>;
            strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
            showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "offset" | "effect" | "style" | "visible" | "arrowOffset" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "placement" | "popperOptions" | "strategy" | "className" | "enterable" | "pure" | "popperClass" | "popperStyle" | "referenceEl" | "stopPopperMouseEvent" | "content" | "showAfter" | "hideAfter" | "appendTo" | "rawContent" | "transition" | "teleported" | "persistent" | "trigger" | "virtualRef" | "virtualTriggering" | "openDelay" | "visibleArrow" | "showArrow">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
            virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").Measurable>, unknown, unknown, unknown, unknown>;
            virtualTriggering: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
            appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
            content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
            transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
            teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            pure: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
            popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@popperjs/core").Placement[]>, () => never[], unknown, unknown, unknown>;
            gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("@popperjs/core").Placement, unknown>;
            popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("@popperjs/core").Options>>, () => {}, unknown, unknown, unknown>;
            strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
            showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        }, {
            compatShowAfter: import("vue").ComputedRef<number>;
            compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            popperRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, import("..").ElPopperInjectionContext, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<import("..").ElPopperInjectionContext> & {} & {} & import("vue").ComponentCustomProperties) | null>;
            open: import("vue").Ref<boolean>;
            hide: () => void;
            updatePopper: () => void;
            onOpen: () => void;
            onClose: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            disabled: boolean;
            offset: number;
            effect: string;
            style: import("vue").StyleValue;
            visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
            arrowOffset: number;
            boundariesPadding: number;
            fallbackPlacements: import("@popperjs/core").Placement[];
            gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("@popperjs/core").Placement, unknown>;
            popperOptions: Partial<import("@popperjs/core").Options>;
            strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
            className: string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            pure: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            popperClass: string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            popperStyle: import("vue").StyleValue;
            referenceEl: HTMLElement;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            content: string;
            showAfter: number;
            hideAfter: number;
            appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            transition: string;
            teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            persistent: boolean;
            trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
            virtualRef: import("..").Measurable;
            virtualTriggering: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            openDelay: number;
            visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
        visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
        hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
        showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
        arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
        disabled: BooleanConstructor;
        trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
        virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").Measurable>, unknown, unknown, unknown, unknown>;
        virtualTriggering: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
        appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
        content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        persistent: BooleanConstructor;
        ariaLabel: StringConstructor;
        visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
        transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
        teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
        className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
        effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
        enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        pure: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
        popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
        popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
        referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
        stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        zIndex: NumberConstructor;
        boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@popperjs/core").Placement[]>, () => never[], unknown, unknown, unknown>;
        gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
        placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("@popperjs/core").Placement, unknown>;
        popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("@popperjs/core").Options>>, () => {}, unknown, unknown, unknown>;
        strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
        showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        compatShowAfter: import("vue").ComputedRef<number>;
        compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
        popperRef: import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, import("..").ElPopperInjectionContext, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<import("..").ElPopperInjectionContext> & {} & {} & import("vue").ComponentCustomProperties) | null>;
        open: import("vue").Ref<boolean>;
        hide: () => void;
        updatePopper: () => void;
        onOpen: () => void;
        onClose: () => void;
    }> & {} & {} & import("vue").ComponentCustomProperties) | null>;
    selectRef: import("vue").Ref<null>;
    selectionRef: import("vue").Ref<null>;
    popperRef: import("vue").ComputedRef<HTMLElement | null | undefined>;
    validateState: import("vue").ComputedRef<string>;
    validateIcon: import("vue").ComputedRef<any>;
    compatTeleported: import("vue").ComputedRef<boolean>;
    debouncedOnInputChange: import("lodash").DebouncedFunc<() => Promise<void>>;
    deleteTag: (event: MouseEvent, tag: import("./src/select.types").Option<any>) => Promise<void> | undefined;
    getLabel: (item: unknown) => any;
    getValueKey: (item: unknown) => any;
    handleBlur: () => Promise<void>;
    handleClear: () => Promise<void>;
    handleClickOutside: () => Promise<void>;
    handleDel: (e: KeyboardEvent) => void;
    handleEsc: () => void;
    handleFocus: (event: FocusEvent) => void;
    handleMenuEnter: () => Promise<void>;
    handleResize: () => Promise<void> | undefined;
    toggleMenu: () => Promise<void> | undefined;
    scrollTo: (index: number) => void;
    onInput: (event: any) => Promise<void> | undefined;
    onKeyboardNavigate: (direction: "forward" | "backward", hoveringIndex?: number) => any;
    onKeyboardSelect: () => Promise<void> | undefined;
    onSelect: (option: import("./src/select.types").Option<any>, idx: number, byClick?: boolean) => void;
    onHover: (idx: number) => void;
    onUpdateInputValue: (val: string) => void;
    handleCompositionStart: () => void;
    handleCompositionEnd: (event: any) => void;
    handleCompositionUpdate: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "clear" | "focus" | "blur" | "visible-change" | "remove-tag")[], "update:modelValue" | "change" | "clear" | "blur" | "focus" | "visible-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    allowCreate: BooleanConstructor;
    autocomplete: {
        type: import("vue").PropType<"none" | "both" | "inline" | "list">;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    effect: {
        type: import("vue").PropType<string>;
        default: string;
    };
    collapseTags: BooleanConstructor;
    defaultFirstOption: BooleanConstructor;
    disabled: BooleanConstructor;
    estimatedOptionHeight: {
        type: NumberConstructor;
        default: undefined;
    };
    filterable: BooleanConstructor;
    filterMethod: FunctionConstructor;
    height: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    id: StringConstructor;
    loading: BooleanConstructor;
    loadingText: StringConstructor;
    label: StringConstructor;
    modelValue: import("vue").PropType<any>;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    name: StringConstructor;
    noDataText: StringConstructor;
    noMatchText: StringConstructor;
    remoteMethod: FunctionConstructor;
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: import("vue").PropType<import("./src/select.types").OptionType<any>[]>;
        required: boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: undefined;
    };
    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
        default: () => Partial<import("@popperjs/core").Options>;
    };
    remote: BooleanConstructor;
    size: {
        type: import("vue").PropType<"default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    "onRemove-tag"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    loading: boolean;
    height: number;
    effect: string;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popperClass: string;
    multiple: boolean;
    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    autocomplete: "none" | "both" | "inline" | "list";
    clearable: boolean;
    valueKey: string;
    popperAppendToBody: boolean;
    filterable: boolean;
    collapseTags: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    automaticDropdown: boolean;
    allowCreate: boolean;
    remote: boolean;
    multipleLimit: number;
    defaultFirstOption: boolean;
    reserveKeyword: boolean;
    estimatedOptionHeight: number;
    itemHeight: number;
    scrollbarAlwaysOn: boolean;
}>>;
export default _Select;
export declare const ElSelectV2: SFCWithInstall<import("vue").DefineComponent<{
    allowCreate: BooleanConstructor;
    autocomplete: {
        type: import("vue").PropType<"none" | "both" | "inline" | "list">;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    effect: {
        type: import("vue").PropType<string>;
        default: string;
    };
    collapseTags: BooleanConstructor;
    defaultFirstOption: BooleanConstructor;
    disabled: BooleanConstructor;
    estimatedOptionHeight: {
        type: NumberConstructor;
        default: undefined;
    };
    filterable: BooleanConstructor;
    filterMethod: FunctionConstructor;
    height: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    id: StringConstructor;
    loading: BooleanConstructor;
    loadingText: StringConstructor;
    label: StringConstructor;
    modelValue: import("vue").PropType<any>;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    name: StringConstructor;
    noDataText: StringConstructor;
    noMatchText: StringConstructor;
    remoteMethod: FunctionConstructor;
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: import("vue").PropType<import("./src/select.types").OptionType<any>[]>;
        required: boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: undefined;
    };
    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
        default: () => Partial<import("@popperjs/core").Options>;
    };
    remote: BooleanConstructor;
    size: {
        type: import("vue").PropType<"default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    collapseTagSize: import("vue").ComputedRef<"default" | "small">;
    currentPlaceholder: import("vue").ComputedRef<string>;
    expanded: import("vue").Ref<boolean>;
    emptyText: import("vue").ComputedRef<string | false | null>;
    popupHeight: import("vue").ComputedRef<number>;
    debounce: import("vue").ComputedRef<0 | 300>;
    filteredOptions: import("vue").ComputedRef<never[]>;
    iconComponent: import("vue").ComputedRef<"" | import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
    iconReverse: import("vue").ComputedRef<string>;
    inputWrapperStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    popperSize: import("vue").Ref<number>;
    dropdownMenuVisible: import("vue").ComputedRef<boolean>;
    hasModelValue: import("vue").ComputedRef<boolean>;
    shouldShowPlaceholder: import("vue").ComputedRef<boolean>;
    selectDisabled: import("vue").ComputedRef<boolean | undefined>;
    selectSize: import("vue").ComputedRef<"default" | "small" | "large">;
    showClearBtn: import("vue").ComputedRef<boolean>;
    states: {
        inputValue: string;
        displayInputValue: string;
        calculatedWidth: number;
        cachedPlaceholder: string;
        cachedOptions: {
            [x: string]: any;
            label: string;
            created?: boolean | undefined;
            value: any;
        }[];
        createdOptions: {
            [x: string]: any;
            label: string;
            created?: boolean | undefined;
            value: any;
        }[];
        createdLabel: string;
        createdSelected: boolean;
        currentPlaceholder: string;
        hoveringIndex: number;
        comboBoxHovering: boolean;
        isOnComposition: boolean;
        isSilentBlur: boolean;
        isComposing: boolean;
        inputLength: number;
        selectWidth: number;
        initialInputHeight: number;
        previousQuery: null;
        previousValue: string;
        query: string;
        selectedLabel: string;
        softFocus: boolean;
        tagInMultiLine: boolean;
    };
    tagMaxWidth: import("vue").ComputedRef<number>;
    nsSelectV2: {
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
    nsInput: {
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
    calculatorRef: import("vue").Ref<HTMLElement>;
    controlRef: import("vue").Ref<null>;
    inputRef: import("vue").Ref<null>;
    menuRef: import("vue").Ref<null>;
    popper: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            offset: number;
            effect: string;
            style: import("vue").StyleValue;
            visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
            arrowOffset: number;
            boundariesPadding: number;
            fallbackPlacements: import("@popperjs/core").Placement[];
            gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("@popperjs/core").Placement, unknown>;
            popperOptions: Partial<import("@popperjs/core").Options>;
            strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
            className: string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            pure: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            popperClass: string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            popperStyle: import("vue").StyleValue;
            referenceEl: HTMLElement;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            content: string;
            showAfter: number;
            hideAfter: number;
            appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            transition: string;
            teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            persistent: boolean;
            trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
            virtualRef: import("..").Measurable;
            virtualTriggering: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            openDelay: number;
            visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
            virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").Measurable>, unknown, unknown, unknown, unknown>;
            virtualTriggering: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
            appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
            content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
            transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
            teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            pure: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
            popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@popperjs/core").Placement[]>, () => never[], unknown, unknown, unknown>;
            gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("@popperjs/core").Placement, unknown>;
            popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("@popperjs/core").Options>>, () => {}, unknown, unknown, unknown>;
            strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
            showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "offset" | "effect" | "style" | "visible" | "arrowOffset" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "placement" | "popperOptions" | "strategy" | "className" | "enterable" | "pure" | "popperClass" | "popperStyle" | "referenceEl" | "stopPopperMouseEvent" | "content" | "showAfter" | "hideAfter" | "appendTo" | "rawContent" | "transition" | "teleported" | "persistent" | "trigger" | "virtualRef" | "virtualTriggering" | "openDelay" | "visibleArrow" | "showArrow">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
            virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").Measurable>, unknown, unknown, unknown, unknown>;
            virtualTriggering: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
            appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
            content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
            transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
            teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            pure: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
            popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@popperjs/core").Placement[]>, () => never[], unknown, unknown, unknown>;
            gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("@popperjs/core").Placement, unknown>;
            popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("@popperjs/core").Options>>, () => {}, unknown, unknown, unknown>;
            strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
            showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        }, {
            compatShowAfter: import("vue").ComputedRef<number>;
            compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            popperRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, import("..").ElPopperInjectionContext, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<import("..").ElPopperInjectionContext> & {} & {} & import("vue").ComponentCustomProperties) | null>;
            open: import("vue").Ref<boolean>;
            hide: () => void;
            updatePopper: () => void;
            onOpen: () => void;
            onClose: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            disabled: boolean;
            offset: number;
            effect: string;
            style: import("vue").StyleValue;
            visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
            arrowOffset: number;
            boundariesPadding: number;
            fallbackPlacements: import("@popperjs/core").Placement[];
            gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("@popperjs/core").Placement, unknown>;
            popperOptions: Partial<import("@popperjs/core").Options>;
            strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
            className: string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            pure: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            popperClass: string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | (string | {
                [x: string]: any;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            popperStyle: import("vue").StyleValue;
            referenceEl: HTMLElement;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            content: string;
            showAfter: number;
            hideAfter: number;
            appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            transition: string;
            teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            persistent: boolean;
            trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
            virtualRef: import("..").Measurable;
            virtualTriggering: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            openDelay: number;
            visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
        visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
        hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
        showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
        arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
        disabled: BooleanConstructor;
        trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
        virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").Measurable>, unknown, unknown, unknown, unknown>;
        virtualTriggering: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
        appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
        content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        persistent: BooleanConstructor;
        ariaLabel: StringConstructor;
        visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
        transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
        teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
        className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
        effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
        enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        pure: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
        popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | (string | {
            [x: string]: any;
        } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
        popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
        referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
        stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        zIndex: NumberConstructor;
        boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@popperjs/core").Placement[]>, () => never[], unknown, unknown, unknown>;
        gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
        placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("@popperjs/core").Placement, unknown>;
        popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("@popperjs/core").Options>>, () => {}, unknown, unknown, unknown>;
        strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
        showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        compatShowAfter: import("vue").ComputedRef<number>;
        compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
        popperRef: import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, import("..").ElPopperInjectionContext, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<import("..").ElPopperInjectionContext> & {} & {} & import("vue").ComponentCustomProperties) | null>;
        open: import("vue").Ref<boolean>;
        hide: () => void;
        updatePopper: () => void;
        onOpen: () => void;
        onClose: () => void;
    }> & {} & {} & import("vue").ComponentCustomProperties) | null>;
    selectRef: import("vue").Ref<null>;
    selectionRef: import("vue").Ref<null>;
    popperRef: import("vue").ComputedRef<HTMLElement | null | undefined>;
    validateState: import("vue").ComputedRef<string>;
    validateIcon: import("vue").ComputedRef<any>;
    compatTeleported: import("vue").ComputedRef<boolean>;
    debouncedOnInputChange: import("lodash").DebouncedFunc<() => Promise<void>>;
    deleteTag: (event: MouseEvent, tag: import("./src/select.types").Option<any>) => Promise<void> | undefined;
    getLabel: (item: unknown) => any;
    getValueKey: (item: unknown) => any;
    handleBlur: () => Promise<void>;
    handleClear: () => Promise<void>;
    handleClickOutside: () => Promise<void>;
    handleDel: (e: KeyboardEvent) => void;
    handleEsc: () => void;
    handleFocus: (event: FocusEvent) => void;
    handleMenuEnter: () => Promise<void>;
    handleResize: () => Promise<void> | undefined;
    toggleMenu: () => Promise<void> | undefined;
    scrollTo: (index: number) => void;
    onInput: (event: any) => Promise<void> | undefined;
    onKeyboardNavigate: (direction: "forward" | "backward", hoveringIndex?: number) => any;
    onKeyboardSelect: () => Promise<void> | undefined;
    onSelect: (option: import("./src/select.types").Option<any>, idx: number, byClick?: boolean) => void;
    onHover: (idx: number) => void;
    onUpdateInputValue: (val: string) => void;
    handleCompositionStart: () => void;
    handleCompositionEnd: (event: any) => void;
    handleCompositionUpdate: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "clear" | "focus" | "blur" | "visible-change" | "remove-tag")[], "update:modelValue" | "change" | "clear" | "blur" | "focus" | "visible-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    allowCreate: BooleanConstructor;
    autocomplete: {
        type: import("vue").PropType<"none" | "both" | "inline" | "list">;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    effect: {
        type: import("vue").PropType<string>;
        default: string;
    };
    collapseTags: BooleanConstructor;
    defaultFirstOption: BooleanConstructor;
    disabled: BooleanConstructor;
    estimatedOptionHeight: {
        type: NumberConstructor;
        default: undefined;
    };
    filterable: BooleanConstructor;
    filterMethod: FunctionConstructor;
    height: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    id: StringConstructor;
    loading: BooleanConstructor;
    loadingText: StringConstructor;
    label: StringConstructor;
    modelValue: import("vue").PropType<any>;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    name: StringConstructor;
    noDataText: StringConstructor;
    noMatchText: StringConstructor;
    remoteMethod: FunctionConstructor;
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: import("vue").PropType<import("./src/select.types").OptionType<any>[]>;
        required: boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: undefined;
    };
    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
        default: () => Partial<import("@popperjs/core").Options>;
    };
    remote: BooleanConstructor;
    size: {
        type: import("vue").PropType<"default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    "onRemove-tag"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    loading: boolean;
    height: number;
    effect: string;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popperClass: string;
    multiple: boolean;
    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    autocomplete: "none" | "both" | "inline" | "list";
    clearable: boolean;
    valueKey: string;
    popperAppendToBody: boolean;
    filterable: boolean;
    collapseTags: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    automaticDropdown: boolean;
    allowCreate: boolean;
    remote: boolean;
    multipleLimit: number;
    defaultFirstOption: boolean;
    reserveKeyword: boolean;
    estimatedOptionHeight: number;
    itemHeight: number;
    scrollbarAlwaysOn: boolean;
}>>;
export * from './src/token';
