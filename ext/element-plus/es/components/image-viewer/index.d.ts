export declare const ElImageViewer: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly urlList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string[]>, () => [], unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    readonly initialIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly infinite: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly hideOnClickModal: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
}, {
    index: import("vue").Ref<number>;
    wrapper: import("vue").Ref<HTMLDivElement | undefined>;
    imgRefs: import("vue").Ref<any[]>;
    isSingle: import("vue").ComputedRef<boolean>;
    isFirst: import("vue").ComputedRef<boolean>;
    isLast: import("vue").ComputedRef<boolean>;
    currentImg: import("vue").ComputedRef<string>;
    imgStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    mode: import("vue").Ref<{
        name: string;
        icon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }>;
    computedZIndex: import("vue").ComputedRef<number>;
    handleActions: (action: import("./src/image-viewer.vue").ImageViewerAction, options?: {}) => void;
    prev: () => void;
    next: () => void;
    hide: () => void;
    toggleMode: () => void;
    handleImgLoad: () => void;
    handleImgError: (e: Event) => void;
    handleMouseDown: (e: MouseEvent) => void;
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
    close: () => boolean;
    switch: (index: number) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly urlList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string[]>, () => [], unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    readonly initialIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly infinite: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly hideOnClickModal: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
}>> & {
    onClose?: (() => any) | undefined;
    onSwitch?: ((index: number) => any) | undefined;
}, {
    zIndex: number;
    infinite: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    initialIndex: number;
    urlList: string[];
    hideOnClickModal: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
}>> & Record<string, any>;
export default ElImageViewer;
export * from './src/image-viewer';
