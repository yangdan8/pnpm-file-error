export declare const ElSkeleton: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly animated: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly count: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 1, unknown, unknown, unknown>;
    readonly rows: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 3, unknown, unknown, unknown>;
    readonly loading: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly throttle: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
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
    uiLoading: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly animated: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly count: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 1, unknown, unknown, unknown>;
    readonly rows: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 3, unknown, unknown, unknown>;
    readonly loading: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly throttle: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
}>>, {
    loading: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    rows: number;
    animated: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    count: number;
    throttle: number;
}>> & {
    SkeletonItem: import("vue").DefineComponent<{
        readonly variant: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "button" | "circle" | "caption" | "image" | "rect" | "h1" | "h3" | "p", unknown>;
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly variant: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "button" | "circle" | "caption" | "image" | "rect" | "h1" | "h3" | "p", unknown>;
    }>>, {
        variant: import("element-plus/es/utils").BuildPropType<StringConstructor, "text" | "button" | "circle" | "caption" | "image" | "rect" | "h1" | "h3" | "p", unknown>;
    }>;
};
export default ElSkeleton;
export declare const ElSkeletonItem: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly variant: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "button" | "circle" | "caption" | "image" | "rect" | "h1" | "h3" | "p", unknown>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly variant: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "button" | "circle" | "caption" | "image" | "rect" | "h1" | "h3" | "p", unknown>;
}>>, {
    variant: import("element-plus/es/utils").BuildPropType<StringConstructor, "text" | "button" | "circle" | "caption" | "image" | "rect" | "h1" | "h3" | "p", unknown>;
}>>;
export * from './src/skeleton';
export * from './src/skeleton-item';
