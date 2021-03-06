declare const _default: import("vue").DefineComponent<{
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    id: import("vue").Ref<string>;
    handleKeydown: (event: Event) => void;
    handleFocus: (event: Event) => void;
    handleMousedown: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "mousedown" | "keydown")[], "focus" | "keydown" | "mousedown", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onKeydown?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onMousedown?: ((...args: any[]) => any) | undefined;
}, {
    active: boolean;
    focusable: boolean;
}>;
export default _default;
