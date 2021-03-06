export declare const ElTabs: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly activeName: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly tabPosition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "top", unknown, "top" | "right" | "bottom" | "left", unknown>;
    readonly beforeLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(newTabName: string | number, oldTabName: string | number) => boolean | void | Promise<boolean | void>>, () => boolean, unknown, unknown, unknown>;
    readonly stretch: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (tabName: string | number) => boolean;
    input: (tabName: string | number) => boolean;
    'tab-click': (pane: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            readonly disabled: boolean;
            readonly name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly label: string;
            readonly closable: boolean;
            readonly lazy: boolean;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => boolean;
    edit: (paneName: string | number | null, action: "add" | "remove") => boolean;
    'tab-remove': (paneName: string | number) => boolean;
    'tab-add': () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly activeName: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly tabPosition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "top", unknown, "top" | "right" | "bottom" | "left", unknown>;
    readonly beforeLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(newTabName: string | number, oldTabName: string | number) => boolean | void | Promise<boolean | void>>, () => boolean, unknown, unknown, unknown>;
    readonly stretch: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((tabName: string | number) => any) | undefined;
    onInput?: ((tabName: string | number) => any) | undefined;
    "onTab-click"?: ((pane: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            readonly disabled: boolean;
            readonly name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly label: string;
            readonly closable: boolean;
            readonly lazy: boolean;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => any) | undefined;
    onEdit?: ((paneName: string | number | null, action: "add" | "remove") => any) | undefined;
    "onTab-remove"?: ((paneName: string | number) => any) | undefined;
    "onTab-add"?: (() => any) | undefined;
}, {
    type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "card" | "border-card", unknown>;
    modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    closable: boolean;
    activeName: string;
    tabPosition: import("element-plus/es/utils").BuildPropType<StringConstructor, "top" | "right" | "bottom" | "left", unknown>;
    beforeLeave: (newTabName: string | number, oldTabName: string | number) => boolean | void | Promise<boolean | void>;
    addable: boolean;
    editable: boolean;
    stretch: boolean;
}>> & {
    TabPane: import("vue").DefineComponent<{
        readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly closable: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly lazy: BooleanConstructor;
    }, {
        active: Readonly<import("vue").Ref<boolean>>;
        paneName: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined>;
        shouldBeRender: Readonly<import("vue").Ref<boolean>>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly closable: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly lazy: BooleanConstructor;
    }>>, {
        disabled: boolean;
        name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        label: string;
        closable: boolean;
        lazy: boolean;
    }>;
};
export default ElTabs;
export declare const ElTabPane: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly lazy: BooleanConstructor;
}, {
    active: Readonly<import("vue").Ref<boolean>>;
    paneName: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined>;
    shouldBeRender: Readonly<import("vue").Ref<boolean>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly lazy: BooleanConstructor;
}>>, {
    disabled: boolean;
    name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    label: string;
    closable: boolean;
    lazy: boolean;
}>>;
export * from './src/tabs';
export * from './src/tab-bar';
export * from './src/tab-nav';
export * from './src/tab-pane';
