declare const _default: import("vue").DefineComponent<{
    readonly closable: BooleanConstructor;
    readonly type: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "info" | "danger", unknown>;
    readonly hit: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly color: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly size: import("../../../utils").BuildPropReturn<StringConstructor, unknown, unknown, "default" | "small" | "large", unknown>;
    readonly effect: import("../../../utils").BuildPropReturn<StringConstructor, "light", unknown, "plain" | "light" | "dark", unknown>;
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
    classes: import("vue").ComputedRef<string[]>;
    handleClose: (event: MouseEvent) => void;
    handleClick: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly closable: BooleanConstructor;
    readonly type: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "info" | "danger", unknown>;
    readonly hit: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly color: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly size: import("../../../utils").BuildPropReturn<StringConstructor, unknown, unknown, "default" | "small" | "large", unknown>;
    readonly effect: import("../../../utils").BuildPropReturn<StringConstructor, "light", unknown, "plain" | "light" | "dark", unknown>;
}>> & {
    onClose?: ((evt: MouseEvent) => any) | undefined;
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("../../../utils").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>;
    size: import("../../../utils").BuildPropType<StringConstructor, "default" | "small" | "large", unknown>;
    color: string;
    closable: boolean;
    effect: import("../../../utils").BuildPropType<StringConstructor, "plain" | "light" | "dark", unknown>;
    hit: boolean;
    disableTransitions: boolean;
}>;
export default _default;
