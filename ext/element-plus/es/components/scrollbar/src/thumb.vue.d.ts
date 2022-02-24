declare const _default: import("vue").DefineComponent<{
    readonly vertical: BooleanConstructor;
    readonly size: StringConstructor;
    readonly move: NumberConstructor;
    readonly ratio: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly always: BooleanConstructor;
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
    instance: import("vue").Ref<HTMLDivElement | undefined>;
    thumb: import("vue").Ref<HTMLDivElement | undefined>;
    bar: import("vue").ComputedRef<{
        offset: string;
        scroll: string;
        scrollSize: string;
        size: string;
        key: string;
        axis: string;
        client: string;
        direction: string;
    } | {
        offset: string;
        scroll: string;
        scrollSize: string;
        size: string;
        key: string;
        axis: string;
        client: string;
        direction: string;
    }>;
    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    visible: import("vue").Ref<boolean>;
    clickTrackHandler: (e: MouseEvent) => void;
    clickThumbHandler: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly vertical: BooleanConstructor;
    readonly size: StringConstructor;
    readonly move: NumberConstructor;
    readonly ratio: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly always: BooleanConstructor;
}>>, {
    always: boolean;
    vertical: boolean;
}>;
export default _default;
