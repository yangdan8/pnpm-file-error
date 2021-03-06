declare const _default: import("vue").DefineComponent<{
    loop: BooleanConstructor;
    trapped: BooleanConstructor;
}, {
    focusTrapRef: import("vue").Ref<HTMLElement | null | undefined>;
    forwardRef: import("vue").Ref<HTMLElement | null>;
    onKeydown: (e: KeyboardEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("mountOnFocus" | "unmountOnFocus")[], "mountOnFocus" | "unmountOnFocus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    loop: BooleanConstructor;
    trapped: BooleanConstructor;
}>> & {
    onMountOnFocus?: ((...args: any[]) => any) | undefined;
    onUnmountOnFocus?: ((...args: any[]) => any) | undefined;
}, {
    loop: boolean;
    trapped: boolean;
}>;
export default _default;
