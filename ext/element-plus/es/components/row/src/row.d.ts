import type { ExtractPropTypes } from 'vue';
export declare const rowProps: {
    readonly tag: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly gutter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly justify: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "start", unknown, "center" | "space-around" | "space-between" | "end" | "start", unknown>;
    readonly align: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "top", unknown, "top" | "bottom" | "middle", unknown>;
};
export declare type RowProps = ExtractPropTypes<typeof rowProps>;
declare const Row: import("vue").DefineComponent<{
    readonly tag: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly gutter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly justify: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "start", unknown, "center" | "space-around" | "space-between" | "end" | "start", unknown>;
    readonly align: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "top", unknown, "top" | "bottom" | "middle", unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly tag: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly gutter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly justify: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "start", unknown, "center" | "space-around" | "space-between" | "end" | "start", unknown>;
    readonly align: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "top", unknown, "top" | "bottom" | "middle", unknown>;
}>>, {
    justify: import("element-plus/es/utils").BuildPropType<StringConstructor, "center" | "space-around" | "space-between" | "end" | "start", unknown>;
    tag: string;
    gutter: number;
    align: import("element-plus/es/utils").BuildPropType<StringConstructor, "top" | "bottom" | "middle", unknown>;
}>;
export default Row;
export declare type RowInstance = InstanceType<typeof Row>;
