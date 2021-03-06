declare const _default: import("vue").DefineComponent<{
    readonly visibilityHeight: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly right: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly bottom: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
}, {
    visible: import("vue").Ref<boolean>;
    styleBottom: import("vue").ComputedRef<string>;
    styleRight: import("vue").ComputedRef<string>;
    handleClick: (event: MouseEvent) => void;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly visibilityHeight: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly right: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly bottom: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    right: number;
    bottom: number;
    target: string;
    visibilityHeight: number;
}>;
export default _default;
