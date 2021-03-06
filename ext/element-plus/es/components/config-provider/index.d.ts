export declare const ElConfigProvider: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly locale: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Language>, unknown, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "default" | "small" | "large", unknown>;
    readonly button: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").ButtonConfigContext>, unknown, unknown, unknown, unknown>;
    readonly message: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").MessageConfigContext>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    readonly namespace: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el", unknown, unknown, unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly locale: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Language>, unknown, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "default" | "small" | "large", unknown>;
    readonly button: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").ButtonConfigContext>, unknown, unknown, unknown, unknown>;
    readonly message: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").MessageConfigContext>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    readonly namespace: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el", unknown, unknown, unknown>;
}>>, {
    button: import("..").ButtonConfigContext;
    size: import("element-plus/es/utils").BuildPropType<StringConstructor, "default" | "small" | "large", unknown>;
    locale: any;
    message: import("..").MessageConfigContext;
    zIndex: number;
    namespace: string;
}>> & Record<string, any>;
export default ElConfigProvider;
export * from './src/config-provider';
