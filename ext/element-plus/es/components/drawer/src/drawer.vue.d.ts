declare const _default: import("vue").DefineComponent<{
    readonly direction: import("../../../utils").BuildPropReturn<StringConstructor, "rtl", unknown, "ltr" | "rtl" | "ttb" | "btt", unknown>;
    readonly size: import("../../../utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "30%", unknown, unknown, unknown>;
    readonly withHeader: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly modalFade: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly appendToBody: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly beforeClose: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<(...args: any[]) => void>, unknown, unknown, unknown, unknown>;
    readonly destroyOnClose: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly center: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly customClass: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly closeIcon: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly closeOnClickModal: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly closeOnPressEscape: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly fullscreen: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly draggable: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly lockScroll: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly modal: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly showClose: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly title: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly openDelay: import("../../../utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly closeDelay: import("../../../utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly top: import("../../../utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly modelValue: import("../../../utils").BuildPropReturn<BooleanConstructor, unknown, true, unknown, unknown>;
    readonly modalClass: StringConstructor;
    readonly width: import("../../../utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, unknown, unknown, unknown>;
    readonly zIndex: import("../../../utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
}, {
    drawerRef: import("vue").Ref<HTMLElement | undefined>;
    isHorizontal: import("vue").ComputedRef<boolean>;
    drawerSize: import("vue").ComputedRef<string>;
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
    afterEnter: () => void;
    afterLeave: () => void;
    beforeLeave: () => void;
    handleClose: () => void;
    onModalClick: () => void;
    close: () => void;
    doClose: () => void;
    closed: import("vue").Ref<boolean>;
    style: import("vue").ComputedRef<import("vue").CSSProperties>;
    rendered: import("vue").Ref<boolean>;
    visible: import("vue").Ref<boolean>;
    zIndex: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    "update:modelValue": (value: boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly direction: import("../../../utils").BuildPropReturn<StringConstructor, "rtl", unknown, "ltr" | "rtl" | "ttb" | "btt", unknown>;
    readonly size: import("../../../utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "30%", unknown, unknown, unknown>;
    readonly withHeader: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly modalFade: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly appendToBody: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly beforeClose: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<(...args: any[]) => void>, unknown, unknown, unknown, unknown>;
    readonly destroyOnClose: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly center: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly customClass: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly closeIcon: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly closeOnClickModal: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly closeOnPressEscape: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly fullscreen: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly draggable: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly lockScroll: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly modal: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly showClose: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly title: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly openDelay: import("../../../utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly closeDelay: import("../../../utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly top: import("../../../utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly modelValue: import("../../../utils").BuildPropReturn<BooleanConstructor, unknown, true, unknown, unknown>;
    readonly modalClass: StringConstructor;
    readonly width: import("../../../utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, unknown, unknown, unknown>;
    readonly zIndex: import("../../../utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
}>> & {
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onOpened?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
}, {
    size: import("../../../utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    zIndex: number;
    top: string;
    width: import("../../../utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    title: string;
    center: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    direction: import("../../../utils").BuildPropType<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown>;
    draggable: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    openDelay: number;
    showClose: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    appendToBody: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    beforeClose: (...args: any[]) => void;
    destroyOnClose: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    customClass: string;
    closeIcon: import("../../../utils").BuildPropType<import("../../../utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    closeOnClickModal: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    closeOnPressEscape: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    fullscreen: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    lockScroll: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    modal: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    closeDelay: number;
    withHeader: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    modalFade: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
}>;
export default _default;
