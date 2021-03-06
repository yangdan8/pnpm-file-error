import type { ExtractPropTypes, StyleValue } from 'vue';
import type { Placement, Options } from '@popperjs/core';
declare const effects: readonly ["light", "dark"];
declare const triggers: readonly ["click", "contextmenu", "hover", "focus"];
export declare const Effect: {
    LIGHT: string;
    DARK: string;
};
export declare type PopperEffect = typeof effects[number];
export declare type PopperTrigger = typeof triggers[number];
export declare type Measurable = {
    getBoundingClientRect: () => DOMRect;
};
declare type ClassObjectType = Record<string, any>;
declare type ClassType = string | ClassObjectType | ClassType[];
export declare const usePopperArrowProps: {
    readonly arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
};
export declare const usePopperCoreConfigProps: {
    readonly boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Placement[]>, () => never[], unknown, unknown, unknown>;
    readonly gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
    readonly placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, Placement, unknown>;
    readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<Options>>, () => {}, unknown, unknown, unknown>;
    readonly strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
};
export declare const usePopperProps: {
    readonly autoClose: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly cutoff: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
};
export declare const usePopperContentProps: {
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<StyleValue>, unknown, unknown, unknown, unknown>;
    readonly className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ClassType>, unknown, unknown, unknown, unknown>;
    readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
    readonly enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly pure: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
    readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ClassType>, unknown, unknown, unknown, unknown>;
    readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<StyleValue>, unknown, unknown, unknown, unknown>;
    readonly referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
    readonly stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly zIndex: NumberConstructor;
    readonly boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Placement[]>, () => never[], unknown, unknown, unknown>;
    readonly gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
    readonly placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, Placement, unknown>;
    readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<Options>>, () => {}, unknown, unknown, unknown>;
    readonly strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
};
export declare const usePopperTriggerProps: {
    readonly virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Measurable>, unknown, unknown, unknown, unknown>;
    readonly virtualTriggering: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
};
export declare type UsePopperProps = ExtractPropTypes<typeof usePopperProps>;
export declare type UsePopperCoreConfigProps = ExtractPropTypes<typeof usePopperCoreConfigProps>;
export {};
