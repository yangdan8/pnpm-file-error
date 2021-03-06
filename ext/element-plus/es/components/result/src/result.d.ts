import type { Component, ExtractPropTypes } from 'vue';
import type Result from './result.vue';
export declare const IconMap: {
    readonly success: "icon-success";
    readonly warning: "icon-warning";
    readonly error: "icon-error";
    readonly info: "icon-info";
};
export declare const IconComponentMap: Record<typeof IconMap[keyof typeof IconMap], Component>;
export declare const resultProps: {
    readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly subTitle: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly icon: import("element-plus/es/utils").BuildPropReturn<unknown, "info", unknown, "success" | "warning" | "info" | "error", unknown>;
};
export declare type ResultProps = ExtractPropTypes<typeof resultProps>;
export declare type ResultInstance = InstanceType<typeof Result>;
