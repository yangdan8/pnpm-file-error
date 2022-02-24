import { nextTick } from 'vue';
import type { Options } from 'element-plus/es/components/popper';
import type { ComputedRef, PropType, Ref } from 'vue';
import type { CascaderValue, CascaderNode, Tag } from 'element-plus/es/components/cascader-panel';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<"default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    placeholder: {
        type: StringConstructor;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    filterMethod: {
        type: PropType<(node: CascaderNode, keyword: string) => boolean>;
        default: (node: CascaderNode, keyword: string) => boolean;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    showAllLevels: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapseTags: BooleanConstructor;
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    beforeFilter: {
        type: PropType<(value: string) => boolean | Promise<any>>;
        default: () => boolean;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: undefined;
    };
    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    modelValue: PropType<import("../../cascader-panel/src/node").CascaderValue>;
    options: {
        type: PropType<import("../../cascader-panel/src/node").CascaderOption[]>;
        default: () => import("../../cascader-panel/src/node").CascaderOption[];
    };
    props: {
        type: PropType<import("../../cascader-panel/src/node").CascaderProps>;
        default: () => import("../../cascader-panel/src/node").CascaderProps;
    };
}, {
    popperOptions: Partial<Options>;
    tooltipRef: Ref<({
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
            fallbackPlacements: import("element-plus/es/components/popper").Placement[];
            gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus/es/components/popper").Placement, unknown>;
            popperOptions: Partial<Options>;
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
            virtualRef: import("element-plus/es/components/popper").Measurable;
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
            virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Measurable>, unknown, unknown, unknown, unknown>;
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
            fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Placement[]>, () => never[], unknown, unknown, unknown>;
            gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus/es/components/popper").Placement, unknown>;
            popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<Options>>, () => {}, unknown, unknown, unknown>;
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
            virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Measurable>, unknown, unknown, unknown, unknown>;
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
            fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Placement[]>, () => never[], unknown, unknown, unknown>;
            gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus/es/components/popper").Placement, unknown>;
            popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<Options>>, () => {}, unknown, unknown, unknown>;
            strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
            showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        }, {
            compatShowAfter: ComputedRef<number>;
            compatShowArrow: ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            popperRef: Ref<({
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
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, import("element-plus/es/components/popper").ElPopperInjectionContext, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
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
                $nextTick: typeof nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<import("element-plus/es/components/popper").ElPopperInjectionContext> & {} & {} & import("vue").ComponentCustomProperties) | null>;
            open: Ref<boolean>;
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
            fallbackPlacements: import("element-plus/es/components/popper").Placement[];
            gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus/es/components/popper").Placement, unknown>;
            popperOptions: Partial<Options>;
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
            virtualRef: import("element-plus/es/components/popper").Measurable;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
        visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
        hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
        showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
        arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
        disabled: BooleanConstructor;
        trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
        virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Measurable>, unknown, unknown, unknown, unknown>;
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
        fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Placement[]>, () => never[], unknown, unknown, unknown>;
        gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
        placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus/es/components/popper").Placement, unknown>;
        popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<Options>>, () => {}, unknown, unknown, unknown>;
        strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
        showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        compatShowAfter: ComputedRef<number>;
        compatShowArrow: ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
        popperRef: Ref<({
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
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, import("element-plus/es/components/popper").ElPopperInjectionContext, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
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
            $nextTick: typeof nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<import("element-plus/es/components/popper").ElPopperInjectionContext> & {} & {} & import("vue").ComponentCustomProperties) | null>;
        open: Ref<boolean>;
        hide: () => void;
        updatePopper: () => void;
        onOpen: () => void;
        onClose: () => void;
    }> & {} & {} & import("vue").ComponentCustomProperties) | null>;
    popperPaneRef: ComputedRef<HTMLElement | null | undefined>;
    input: Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: string;
            size: import("element-plus/es/utils").BuildPropType<StringConstructor, "default" | "small" | "large", never>;
            disabled: boolean;
            modelValue: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number | null | undefined>, unknown, unknown>;
            label: string;
            resize: import("element-plus/es/utils").BuildPropType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>;
            autosize: boolean | {
                minRows?: number | undefined;
                maxRows?: number | undefined;
            };
            autocomplete: string;
            placeholder: string;
            form: string;
            readonly: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            clearable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            showPassword: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            showWordLimit: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            suffixIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
            prefixIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
            tabindex: import("element-plus/es/utils").BuildPropType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            validateEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            inputStyle: import("vue").StyleValue;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "default" | "small" | "large", never>;
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number | null | undefined>, "", unknown, unknown, unknown>;
            readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, unknown, unknown>;
            readonly resize: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "none" | "both" | "horizontal" | "vertical", unknown>;
            readonly autosize: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | {
                minRows?: number | undefined;
                maxRows?: number | undefined;
            }>, false, unknown, unknown, unknown>;
            readonly autocomplete: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "off", unknown, unknown, unknown>;
            readonly placeholder: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            readonly form: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly readonly: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly clearable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly showPassword: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly showWordLimit: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly suffixIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
            readonly prefixIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
            readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            readonly tabindex: import("element-plus/es/utils").BuildPropReturn<readonly [NumberConstructor, StringConstructor], unknown, unknown, unknown, unknown>;
            readonly validateEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly inputStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
        }>> & {
            onChange?: ((value: string) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            onKeydown?: ((evt: KeyboardEvent) => any) | undefined;
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onInput?: ((value: string) => any) | undefined;
            onClear?: (() => any) | undefined;
            onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "size" | "disabled" | "modelValue" | "label" | "resize" | "autosize" | "autocomplete" | "placeholder" | "form" | "readonly" | "clearable" | "showPassword" | "showWordLimit" | "suffixIcon" | "prefixIcon" | "tabindex" | "validateEvent" | "inputStyle">;
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
        $emit: ((event: "update:modelValue", value: string) => void) & ((event: "change", value: string) => void) & ((event: "input", value: string) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "clear") => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "keydown", evt: KeyboardEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "default" | "small" | "large", never>;
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number | null | undefined>, "", unknown, unknown, unknown>;
            readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, unknown, unknown>;
            readonly resize: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "none" | "both" | "horizontal" | "vertical", unknown>;
            readonly autosize: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | {
                minRows?: number | undefined;
                maxRows?: number | undefined;
            }>, false, unknown, unknown, unknown>;
            readonly autocomplete: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "off", unknown, unknown, unknown>;
            readonly placeholder: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            readonly form: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly readonly: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly clearable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly showPassword: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly showWordLimit: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly suffixIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
            readonly prefixIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
            readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            readonly tabindex: import("element-plus/es/utils").BuildPropReturn<readonly [NumberConstructor, StringConstructor], unknown, unknown, unknown, unknown>;
            readonly validateEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly inputStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
        }>> & {
            onChange?: ((value: string) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            onKeydown?: ((evt: KeyboardEvent) => any) | undefined;
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onInput?: ((value: string) => any) | undefined;
            onClear?: (() => any) | undefined;
            onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
        }, {
            input: Ref<HTMLInputElement | undefined>;
            textarea: Ref<HTMLTextAreaElement | undefined>;
            attrs: ComputedRef<Record<string, unknown>>;
            inputSize: ComputedRef<"default" | "small" | "large">;
            validateState: ComputedRef<string>;
            validateIcon: ComputedRef<any>;
            containerStyle: ComputedRef<import("vue").StyleValue>;
            computedTextareaStyle: ComputedRef<import("vue").StyleValue>;
            inputDisabled: ComputedRef<boolean>;
            showClear: ComputedRef<boolean>;
            showPwdVisible: ComputedRef<boolean>;
            isWordLimitVisible: ComputedRef<boolean>;
            textLength: ComputedRef<number>;
            hovering: Ref<boolean>;
            inputExceed: ComputedRef<boolean>;
            passwordVisible: Ref<boolean>;
            inputOrTextarea: ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
            suffixVisible: ComputedRef<boolean>;
            needStatusIcon: ComputedRef<boolean>;
            resizeTextarea: () => void;
            handleInput: (event: Event) => void;
            handleChange: (event: Event) => void;
            handleFocus: (event: FocusEvent) => void;
            handleBlur: (event: FocusEvent) => void;
            handleCompositionStart: (event: CompositionEvent) => void;
            handleCompositionUpdate: (event: CompositionEvent) => void;
            handleCompositionEnd: (event: CompositionEvent) => void;
            handlePasswordVisible: () => void;
            clear: () => void;
            select: () => void;
            focus: () => void;
            blur: () => void;
            onMouseLeave: (evt: MouseEvent) => void;
            onMouseEnter: (evt: MouseEvent) => void;
            handleKeydown: (evt: KeyboardEvent) => void;
            nsInput: {
                namespace: ComputedRef<string>;
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
            nsTextarea: {
                namespace: ComputedRef<string>;
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
            "update:modelValue": (value: string) => boolean;
            input: (value: string) => boolean;
            change: (value: string) => boolean;
            focus: (evt: FocusEvent) => boolean;
            blur: (evt: FocusEvent) => boolean;
            clear: () => boolean;
            mouseleave: (evt: MouseEvent) => boolean;
            mouseenter: (evt: MouseEvent) => boolean;
            keydown: (evt: KeyboardEvent) => boolean;
            compositionstart: (evt: CompositionEvent) => boolean;
            compositionupdate: (evt: CompositionEvent) => boolean;
            compositionend: (evt: CompositionEvent) => boolean;
        }, string, {
            type: string;
            size: import("element-plus/es/utils").BuildPropType<StringConstructor, "default" | "small" | "large", never>;
            disabled: boolean;
            modelValue: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number | null | undefined>, unknown, unknown>;
            label: string;
            resize: import("element-plus/es/utils").BuildPropType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>;
            autosize: boolean | {
                minRows?: number | undefined;
                maxRows?: number | undefined;
            };
            autocomplete: string;
            placeholder: string;
            form: string;
            readonly: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            clearable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            showPassword: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            showWordLimit: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            suffixIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
            prefixIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
            tabindex: import("element-plus/es/utils").BuildPropType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            validateEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            inputStyle: import("vue").StyleValue;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "default" | "small" | "large", never>;
        readonly disabled: BooleanConstructor;
        readonly modelValue: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number | null | undefined>, "", unknown, unknown, unknown>;
        readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, unknown, unknown>;
        readonly resize: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "none" | "both" | "horizontal" | "vertical", unknown>;
        readonly autosize: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | {
            minRows?: number | undefined;
            maxRows?: number | undefined;
        }>, false, unknown, unknown, unknown>;
        readonly autocomplete: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "off", unknown, unknown, unknown>;
        readonly placeholder: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        readonly form: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly readonly: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly clearable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly showPassword: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly showWordLimit: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly suffixIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
        readonly prefixIcon: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
        readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        readonly tabindex: import("element-plus/es/utils").BuildPropReturn<readonly [NumberConstructor, StringConstructor], unknown, unknown, unknown, unknown>;
        readonly validateEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly inputStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    }>> & {
        onChange?: ((value: string) => any) | undefined;
        onMouseenter?: ((evt: MouseEvent) => any) | undefined;
        onMouseleave?: ((evt: MouseEvent) => any) | undefined;
        onKeydown?: ((evt: KeyboardEvent) => any) | undefined;
        onFocus?: ((evt: FocusEvent) => any) | undefined;
        onBlur?: ((evt: FocusEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
        onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
        onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
        onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        input: Ref<HTMLInputElement | undefined>;
        textarea: Ref<HTMLTextAreaElement | undefined>;
        attrs: ComputedRef<Record<string, unknown>>;
        inputSize: ComputedRef<"default" | "small" | "large">;
        validateState: ComputedRef<string>;
        validateIcon: ComputedRef<any>;
        containerStyle: ComputedRef<import("vue").StyleValue>;
        computedTextareaStyle: ComputedRef<import("vue").StyleValue>;
        inputDisabled: ComputedRef<boolean>;
        showClear: ComputedRef<boolean>;
        showPwdVisible: ComputedRef<boolean>;
        isWordLimitVisible: ComputedRef<boolean>;
        textLength: ComputedRef<number>;
        hovering: Ref<boolean>;
        inputExceed: ComputedRef<boolean>;
        passwordVisible: Ref<boolean>;
        inputOrTextarea: ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
        suffixVisible: ComputedRef<boolean>;
        needStatusIcon: ComputedRef<boolean>;
        resizeTextarea: () => void;
        handleInput: (event: Event) => void;
        handleChange: (event: Event) => void;
        handleFocus: (event: FocusEvent) => void;
        handleBlur: (event: FocusEvent) => void;
        handleCompositionStart: (event: CompositionEvent) => void;
        handleCompositionUpdate: (event: CompositionEvent) => void;
        handleCompositionEnd: (event: CompositionEvent) => void;
        handlePasswordVisible: () => void;
        clear: () => void;
        select: () => void;
        focus: () => void;
        blur: () => void;
        onMouseLeave: (evt: MouseEvent) => void;
        onMouseEnter: (evt: MouseEvent) => void;
        handleKeydown: (evt: KeyboardEvent) => void;
        nsInput: {
            namespace: ComputedRef<string>;
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
        nsTextarea: {
            namespace: ComputedRef<string>;
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
    }> & {} & {} & import("vue").ComponentCustomProperties) | null>;
    tagWrapper: Ref<null>;
    panel: Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            props: import("../../cascader-panel/src/node").CascaderProps;
            border: boolean;
            options: import("../../cascader-panel/src/node").CascaderOption[];
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            border: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderLabel: PropType<import("../../cascader-panel/src/node").RenderLabel>;
            modelValue: PropType<import("../../cascader-panel/src/node").CascaderValue>;
            options: {
                type: PropType<import("../../cascader-panel/src/node").CascaderOption[]>;
                default: () => import("../../cascader-panel/src/node").CascaderOption[];
            };
            props: {
                type: PropType<import("../../cascader-panel/src/node").CascaderProps>;
                default: () => import("../../cascader-panel/src/node").CascaderProps;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "props" | "border" | "options">;
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
        $emit: (event: "update:modelValue" | "change" | "close" | "expand-change", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            border: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderLabel: PropType<import("../../cascader-panel/src/node").RenderLabel>;
            modelValue: PropType<import("../../cascader-panel/src/node").CascaderValue>;
            options: {
                type: PropType<import("../../cascader-panel/src/node").CascaderOption[]>;
                default: () => import("../../cascader-panel/src/node").CascaderOption[];
            };
            props: {
                type: PropType<import("../../cascader-panel/src/node").CascaderProps>;
                default: () => import("../../cascader-panel/src/node").CascaderProps;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
        }, {
            menuList: Ref<any[]>;
            menus: Ref<{
                readonly uid: number;
                readonly level: number;
                readonly value: import("../../cascader-panel/src/node").CascaderNodeValue;
                readonly label: string;
                readonly pathNodes: any[];
                readonly pathValues: import("../../cascader-panel/src/node").CascaderNodeValue[];
                readonly pathLabels: string[];
                childrenData: {
                    [x: string]: unknown;
                    label?: string | undefined;
                    value?: import("../../cascader-panel/src/node").CascaderNodeValue | undefined;
                    children?: any[] | undefined;
                    disabled?: boolean | undefined;
                    leaf?: boolean | undefined;
                }[] | undefined;
                children: any[];
                text: string;
                loaded: boolean;
                checked: boolean;
                indeterminate: boolean;
                loading: boolean;
                readonly data: {
                    [x: string]: unknown;
                    label?: string | undefined;
                    value?: import("../../cascader-panel/src/node").CascaderNodeValue | undefined;
                    children?: any[] | undefined;
                    disabled?: boolean | undefined;
                    leaf?: boolean | undefined;
                } | null;
                readonly config: {
                    expandTrigger: import("../../cascader-panel/src/node").ExpandTrigger;
                    multiple: boolean;
                    checkStrictly: boolean;
                    emitPath: boolean;
                    lazy: boolean;
                    lazyLoad: import("../../cascader-panel/src/node").LazyLoad;
                    value: string;
                    label: string;
                    children: string;
                    disabled: string | import("../../cascader-panel/src/node").isDisabled;
                    leaf: string | import("../../cascader-panel/src/node").isLeaf;
                    hoverThreshold: number;
                };
                readonly parent?: any | undefined;
                readonly root: boolean;
                readonly isDisabled: boolean;
                readonly isLeaf: boolean;
                readonly valueByOption: import("../../cascader-panel/src/node").CascaderNodeValue | import("../../cascader-panel/src/node").CascaderNodeValue[];
                appendChild: (childData: import("../../cascader-panel/src/node").CascaderOption) => CascaderNode;
                calcText: (allLevels: boolean, separator: string) => string;
                broadcast: (event: string, ...args: unknown[]) => void;
                emit: (event: string, ...args: unknown[]) => void;
                onParentCheck: (checked: boolean) => void;
                onChildCheck: () => void;
                setCheckState: (checked: boolean) => void;
                doCheck: (checked: boolean) => void;
            }[][]>;
            checkedNodes: Ref<{
                readonly uid: number;
                readonly level: number;
                readonly value: import("../../cascader-panel/src/node").CascaderNodeValue;
                readonly label: string;
                readonly pathNodes: any[];
                readonly pathValues: import("../../cascader-panel/src/node").CascaderNodeValue[];
                readonly pathLabels: string[];
                childrenData: {
                    [x: string]: unknown;
                    label?: string | undefined;
                    value?: import("../../cascader-panel/src/node").CascaderNodeValue | undefined;
                    children?: any[] | undefined;
                    disabled?: boolean | undefined;
                    leaf?: boolean | undefined;
                }[] | undefined;
                children: any[];
                text: string;
                loaded: boolean;
                checked: boolean;
                indeterminate: boolean;
                loading: boolean;
                readonly data: {
                    [x: string]: unknown;
                    label?: string | undefined;
                    value?: import("../../cascader-panel/src/node").CascaderNodeValue | undefined;
                    children?: any[] | undefined;
                    disabled?: boolean | undefined;
                    leaf?: boolean | undefined;
                } | null;
                readonly config: {
                    expandTrigger: import("../../cascader-panel/src/node").ExpandTrigger;
                    multiple: boolean;
                    checkStrictly: boolean;
                    emitPath: boolean;
                    lazy: boolean;
                    lazyLoad: import("../../cascader-panel/src/node").LazyLoad;
                    value: string;
                    label: string;
                    children: string;
                    disabled: string | import("../../cascader-panel/src/node").isDisabled;
                    leaf: string | import("../../cascader-panel/src/node").isLeaf;
                    hoverThreshold: number;
                };
                readonly parent?: any | undefined;
                readonly root: boolean;
                readonly isDisabled: boolean;
                readonly isLeaf: boolean;
                readonly valueByOption: import("../../cascader-panel/src/node").CascaderNodeValue | import("../../cascader-panel/src/node").CascaderNodeValue[];
                appendChild: (childData: import("../../cascader-panel/src/node").CascaderOption) => CascaderNode;
                calcText: (allLevels: boolean, separator: string) => string;
                broadcast: (event: string, ...args: unknown[]) => void;
                emit: (event: string, ...args: unknown[]) => void;
                onParentCheck: (checked: boolean) => void;
                onChildCheck: () => void;
                setCheckState: (checked: boolean) => void;
                doCheck: (checked: boolean) => void;
            }[]>;
            handleKeyDown: (e: KeyboardEvent) => void;
            handleCheckChange: (node: CascaderNode, checked: boolean, emitClose?: boolean | undefined) => void;
            getFlattedNodes: (leafOnly: boolean) => CascaderNode[] | undefined;
            getCheckedNodes: (leafOnly: boolean) => CascaderNode[] | undefined;
            clearCheckedNodes: () => void;
            calculateCheckedValue: () => void;
            scrollToExpandingNode: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "close" | "expand-change")[], string, {
            props: import("../../cascader-panel/src/node").CascaderProps;
            border: boolean;
            options: import("../../cascader-panel/src/node").CascaderOption[];
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        renderLabel: PropType<import("../../cascader-panel/src/node").RenderLabel>;
        modelValue: PropType<import("../../cascader-panel/src/node").CascaderValue>;
        options: {
            type: PropType<import("../../cascader-panel/src/node").CascaderOption[]>;
            default: () => import("../../cascader-panel/src/node").CascaderOption[];
        };
        props: {
            type: PropType<import("../../cascader-panel/src/node").CascaderProps>;
            default: () => import("../../cascader-panel/src/node").CascaderProps;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        menuList: Ref<any[]>;
        menus: Ref<{
            readonly uid: number;
            readonly level: number;
            readonly value: import("../../cascader-panel/src/node").CascaderNodeValue;
            readonly label: string;
            readonly pathNodes: any[];
            readonly pathValues: import("../../cascader-panel/src/node").CascaderNodeValue[];
            readonly pathLabels: string[];
            childrenData: {
                [x: string]: unknown;
                label?: string | undefined;
                value?: import("../../cascader-panel/src/node").CascaderNodeValue | undefined;
                children?: any[] | undefined;
                disabled?: boolean | undefined;
                leaf?: boolean | undefined;
            }[] | undefined;
            children: any[];
            text: string;
            loaded: boolean;
            checked: boolean;
            indeterminate: boolean;
            loading: boolean;
            readonly data: {
                [x: string]: unknown;
                label?: string | undefined;
                value?: import("../../cascader-panel/src/node").CascaderNodeValue | undefined;
                children?: any[] | undefined;
                disabled?: boolean | undefined;
                leaf?: boolean | undefined;
            } | null;
            readonly config: {
                expandTrigger: import("../../cascader-panel/src/node").ExpandTrigger;
                multiple: boolean;
                checkStrictly: boolean;
                emitPath: boolean;
                lazy: boolean;
                lazyLoad: import("../../cascader-panel/src/node").LazyLoad;
                value: string;
                label: string;
                children: string;
                disabled: string | import("../../cascader-panel/src/node").isDisabled;
                leaf: string | import("../../cascader-panel/src/node").isLeaf;
                hoverThreshold: number;
            };
            readonly parent?: any | undefined;
            readonly root: boolean;
            readonly isDisabled: boolean;
            readonly isLeaf: boolean;
            readonly valueByOption: import("../../cascader-panel/src/node").CascaderNodeValue | import("../../cascader-panel/src/node").CascaderNodeValue[];
            appendChild: (childData: import("../../cascader-panel/src/node").CascaderOption) => CascaderNode;
            calcText: (allLevels: boolean, separator: string) => string;
            broadcast: (event: string, ...args: unknown[]) => void;
            emit: (event: string, ...args: unknown[]) => void;
            onParentCheck: (checked: boolean) => void;
            onChildCheck: () => void;
            setCheckState: (checked: boolean) => void;
            doCheck: (checked: boolean) => void;
        }[][]>;
        checkedNodes: Ref<{
            readonly uid: number;
            readonly level: number;
            readonly value: import("../../cascader-panel/src/node").CascaderNodeValue;
            readonly label: string;
            readonly pathNodes: any[];
            readonly pathValues: import("../../cascader-panel/src/node").CascaderNodeValue[];
            readonly pathLabels: string[];
            childrenData: {
                [x: string]: unknown;
                label?: string | undefined;
                value?: import("../../cascader-panel/src/node").CascaderNodeValue | undefined;
                children?: any[] | undefined;
                disabled?: boolean | undefined;
                leaf?: boolean | undefined;
            }[] | undefined;
            children: any[];
            text: string;
            loaded: boolean;
            checked: boolean;
            indeterminate: boolean;
            loading: boolean;
            readonly data: {
                [x: string]: unknown;
                label?: string | undefined;
                value?: import("../../cascader-panel/src/node").CascaderNodeValue | undefined;
                children?: any[] | undefined;
                disabled?: boolean | undefined;
                leaf?: boolean | undefined;
            } | null;
            readonly config: {
                expandTrigger: import("../../cascader-panel/src/node").ExpandTrigger;
                multiple: boolean;
                checkStrictly: boolean;
                emitPath: boolean;
                lazy: boolean;
                lazyLoad: import("../../cascader-panel/src/node").LazyLoad;
                value: string;
                label: string;
                children: string;
                disabled: string | import("../../cascader-panel/src/node").isDisabled;
                leaf: string | import("../../cascader-panel/src/node").isLeaf;
                hoverThreshold: number;
            };
            readonly parent?: any | undefined;
            readonly root: boolean;
            readonly isDisabled: boolean;
            readonly isLeaf: boolean;
            readonly valueByOption: import("../../cascader-panel/src/node").CascaderNodeValue | import("../../cascader-panel/src/node").CascaderNodeValue[];
            appendChild: (childData: import("../../cascader-panel/src/node").CascaderOption) => CascaderNode;
            calcText: (allLevels: boolean, separator: string) => string;
            broadcast: (event: string, ...args: unknown[]) => void;
            emit: (event: string, ...args: unknown[]) => void;
            onParentCheck: (checked: boolean) => void;
            onChildCheck: () => void;
            setCheckState: (checked: boolean) => void;
            doCheck: (checked: boolean) => void;
        }[]>;
        handleKeyDown: (e: KeyboardEvent) => void;
        handleCheckChange: (node: CascaderNode, checked: boolean, emitClose?: boolean | undefined) => void;
        getFlattedNodes: (leafOnly: boolean) => CascaderNode[] | undefined;
        getCheckedNodes: (leafOnly: boolean) => CascaderNode[] | undefined;
        clearCheckedNodes: () => void;
        calculateCheckedValue: () => void;
        scrollToExpandingNode: () => void;
    }> & {} & {} & import("vue").ComponentCustomProperties) | null>;
    suggestionPanel: Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            height: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            always: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            maxHeight: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            native: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            wrapStyle: import("vue").StyleValue;
            wrapClass: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            viewClass: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            viewStyle: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            tag: string;
            minSize: number;
            noresize: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly height: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
            readonly maxHeight: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
            readonly native: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly wrapStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, "", unknown, unknown, unknown>;
            readonly wrapClass: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
            readonly viewClass: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
            readonly viewStyle: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
            readonly always: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly minSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 20, unknown, unknown, unknown>;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "height" | "always" | "maxHeight" | "native" | "wrapStyle" | "wrapClass" | "viewClass" | "viewStyle" | "tag" | "minSize" | "noresize">;
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
        $emit: (event: "scroll", args_0: {
            scrollTop: number;
            scrollLeft: number;
        }) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly height: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
            readonly maxHeight: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
            readonly native: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly wrapStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, "", unknown, unknown, unknown>;
            readonly wrapClass: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
            readonly viewClass: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
            readonly viewStyle: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
            readonly always: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly minSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 20, unknown, unknown, unknown>;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        }, {
            ns: {
                namespace: ComputedRef<string>;
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
            scrollbar$: Ref<HTMLDivElement | undefined>;
            wrap$: Ref<HTMLDivElement | undefined>;
            resize$: Ref<HTMLElement | undefined>;
            barRef: Ref<any>;
            moveX: Ref<number>;
            moveY: Ref<number>;
            ratioX: Ref<number>;
            ratioY: Ref<number>;
            sizeWidth: Ref<string>;
            sizeHeight: Ref<string>;
            style: ComputedRef<import("vue").StyleValue>;
            update: () => void;
            handleScroll: () => void;
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            scroll: ({ scrollTop, scrollLeft, }: {
                scrollTop: number;
                scrollLeft: number;
            }) => boolean;
        }, string, {
            height: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            always: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            maxHeight: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            native: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            wrapStyle: import("vue").StyleValue;
            wrapClass: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            viewClass: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            viewStyle: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            tag: string;
            minSize: number;
            noresize: boolean;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly height: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly maxHeight: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly native: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly wrapStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, "", unknown, unknown, unknown>;
        readonly wrapClass: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
        readonly viewClass: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
        readonly viewStyle: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
        readonly noresize: BooleanConstructor;
        readonly tag: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
        readonly always: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly minSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 20, unknown, unknown, unknown>;
    }>> & {
        onScroll?: ((args_0: {
            scrollTop: number;
            scrollLeft: number;
        }) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        ns: {
            namespace: ComputedRef<string>;
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
        scrollbar$: Ref<HTMLDivElement | undefined>;
        wrap$: Ref<HTMLDivElement | undefined>;
        resize$: Ref<HTMLElement | undefined>;
        barRef: Ref<any>;
        moveX: Ref<number>;
        moveY: Ref<number>;
        ratioX: Ref<number>;
        ratioY: Ref<number>;
        sizeWidth: Ref<string>;
        sizeHeight: Ref<string>;
        style: ComputedRef<import("vue").StyleValue>;
        update: () => void;
        handleScroll: () => void;
        setScrollTop: (value: number) => void;
        setScrollLeft: (value: number) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties) | null>;
    popperVisible: Ref<boolean>;
    inputHover: Ref<boolean>;
    inputPlaceholder: ComputedRef<string>;
    filtering: Ref<boolean>;
    presentText: ComputedRef<string>;
    checkedValue: ComputedRef<CascaderValue>;
    inputValue: Ref<string>;
    searchInputValue: Ref<string>;
    presentTags: Ref<Tag[]>;
    suggestions: Ref<CascaderNode[]>;
    isDisabled: ComputedRef<boolean | undefined>;
    isOnComposition: Ref<boolean>;
    realSize: ComputedRef<"default" | "small" | "large">;
    tagSize: ComputedRef<"default" | "small">;
    multiple: ComputedRef<boolean>;
    readonly: ComputedRef<boolean>;
    clearBtnVisible: ComputedRef<boolean>;
    compatTeleported: ComputedRef<boolean>;
    t: import("element-plus/es/hooks").Translator;
    togglePopperVisible: (visible?: boolean | undefined) => void;
    hideSuggestionPanel: () => void;
    deleteTag: (tag: Tag) => void;
    focusFirstNode: () => void;
    getCheckedNodes: (leafOnly: boolean) => CascaderNode[] | undefined;
    handleExpandChange: (value: CascaderValue) => void;
    handleKeyDown: (e: KeyboardEvent) => void;
    handleComposition: (event: CompositionEvent) => void;
    handleClear: () => void;
    handleSuggestionClick: (node: CascaderNode) => void;
    handleSuggestionKeyDown: (e: KeyboardEvent) => void;
    handleDelete: () => void;
    handleInput: (val: string, e?: KeyboardEvent | undefined) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "focus" | "blur" | "expand-change" | "visible-change" | "remove-tag")[], "update:modelValue" | "change" | "blur" | "focus" | "expand-change" | "visible-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<"default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    placeholder: {
        type: StringConstructor;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    filterMethod: {
        type: PropType<(node: CascaderNode, keyword: string) => boolean>;
        default: (node: CascaderNode, keyword: string) => boolean;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    showAllLevels: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapseTags: BooleanConstructor;
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    beforeFilter: {
        type: PropType<(value: string) => boolean | Promise<any>>;
        default: () => boolean;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: undefined;
    };
    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    modelValue: PropType<import("../../cascader-panel/src/node").CascaderValue>;
    options: {
        type: PropType<import("../../cascader-panel/src/node").CascaderOption[]>;
        default: () => import("../../cascader-panel/src/node").CascaderOption[];
    };
    props: {
        type: PropType<import("../../cascader-panel/src/node").CascaderProps>;
        default: () => import("../../cascader-panel/src/node").CascaderProps;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    "onRemove-tag"?: ((...args: any[]) => any) | undefined;
}, {
    separator: string;
    disabled: boolean;
    props: import("../../cascader-panel/src/node").CascaderProps;
    popperClass: string;
    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    clearable: boolean;
    debounce: number;
    popperAppendToBody: boolean;
    options: import("../../cascader-panel/src/node").CascaderOption[];
    filterable: boolean;
    filterMethod: (node: CascaderNode, keyword: string) => boolean;
    showAllLevels: boolean;
    collapseTags: boolean;
    beforeFilter: (value: string) => boolean | Promise<any>;
}>;
export default _default;
