export declare const ElMenu: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly mode: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "vertical", unknown, "horizontal" | "vertical", unknown>;
    readonly defaultActive: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly defaultOpeneds: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string[]>, () => [], unknown, unknown, unknown>;
    readonly uniqueOpened: BooleanConstructor;
    readonly router: BooleanConstructor;
    readonly menuTrigger: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "hover", unknown, "click" | "hover", unknown>;
    readonly collapse: BooleanConstructor;
    readonly backgroundColor: StringConstructor;
    readonly textColor: StringConstructor;
    readonly activeTextColor: StringConstructor;
    readonly collapseTransition: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly ellipsis: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (index: string, indexPath: string[]) => boolean;
    open: (index: string, indexPath: string[]) => boolean;
    select: (index: string, indexPath: string[], item: import("./src/types").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure> | undefined) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly mode: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "vertical", unknown, "horizontal" | "vertical", unknown>;
    readonly defaultActive: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly defaultOpeneds: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string[]>, () => [], unknown, unknown, unknown>;
    readonly uniqueOpened: BooleanConstructor;
    readonly router: BooleanConstructor;
    readonly menuTrigger: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "hover", unknown, "click" | "hover", unknown>;
    readonly collapse: BooleanConstructor;
    readonly backgroundColor: StringConstructor;
    readonly textColor: StringConstructor;
    readonly activeTextColor: StringConstructor;
    readonly collapseTransition: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly ellipsis: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
}>> & {
    onClose?: ((index: string, indexPath: string[]) => any) | undefined;
    onOpen?: ((index: string, indexPath: string[]) => any) | undefined;
    onSelect?: ((index: string, indexPath: string[], item: import("./src/types").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure> | undefined) => any) | undefined;
}, {
    mode: import("element-plus/es/utils").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    ellipsis: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    collapse: boolean;
    defaultActive: string;
    defaultOpeneds: string[];
    menuTrigger: import("element-plus/es/utils").BuildPropType<StringConstructor, "click" | "hover", unknown>;
    collapseTransition: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    uniqueOpened: boolean;
    router: boolean;
}>> & {
    MenuItem: import("vue").DefineComponent<{
        readonly index: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | null>, null, unknown, unknown, unknown>;
        readonly route: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }, {
        Effect: {
            LIGHT: string;
            DARK: string;
        };
        parentMenu: import("vue").ComputedRef<import("vue").ComponentInternalInstance>;
        rootMenu: import("./src/types").MenuProvider;
        paddingStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        active: import("vue").ComputedRef<boolean>;
        handleClick: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (item: import("./src/types").MenuItemRegistered) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly index: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | null>, null, unknown, unknown, unknown>;
        readonly route: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }>> & {
        onClick?: ((item: import("./src/types").MenuItemRegistered) => any) | undefined;
    }, {
        disabled: boolean;
        index: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | null>, unknown, unknown>;
        route: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown>;
    }>;
    MenuItemGroup: import("vue").DefineComponent<{
        readonly title: StringConstructor;
    }, {
        levelPadding: import("vue").ComputedRef<number>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly title: StringConstructor;
    }>>, {}>;
    SubMenu: import("vue").DefineComponent<{
        readonly index: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, true, unknown, unknown>;
        readonly showTimeout: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly hideTimeout: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly popperClass: StringConstructor;
        readonly disabled: BooleanConstructor;
        readonly popperAppendToBody: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly index: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, true, unknown, unknown>;
        readonly showTimeout: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly hideTimeout: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly popperClass: StringConstructor;
        readonly disabled: BooleanConstructor;
        readonly popperAppendToBody: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    }>>, {
        disabled: boolean;
        popperAppendToBody: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        showTimeout: number;
        hideTimeout: number;
    }>;
};
export default ElMenu;
export declare const ElMenuItem: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly index: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | null>, null, unknown, unknown, unknown>;
    readonly route: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
}, {
    Effect: {
        LIGHT: string;
        DARK: string;
    };
    parentMenu: import("vue").ComputedRef<import("vue").ComponentInternalInstance>;
    rootMenu: import("./src/types").MenuProvider;
    paddingStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    active: import("vue").ComputedRef<boolean>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (item: import("./src/types").MenuItemRegistered) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly index: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | null>, null, unknown, unknown, unknown>;
    readonly route: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
}>> & {
    onClick?: ((item: import("./src/types").MenuItemRegistered) => any) | undefined;
}, {
    disabled: boolean;
    index: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | null>, unknown, unknown>;
    route: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown>;
}>>;
export declare const ElMenuItemGroup: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly title: StringConstructor;
}, {
    levelPadding: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: StringConstructor;
}>>, {}>>;
export declare const ElSubMenu: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly index: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, true, unknown, unknown>;
    readonly showTimeout: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly hideTimeout: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly popperClass: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly popperAppendToBody: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly index: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, true, unknown, unknown>;
    readonly showTimeout: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly hideTimeout: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly popperClass: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly popperAppendToBody: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
}>>, {
    disabled: boolean;
    popperAppendToBody: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    showTimeout: number;
    hideTimeout: number;
}>>;
export * from './src/menu';
export * from './src/menu-item';
export * from './src/menu-item-group';
export * from './src/sub-menu';
export * from './src/types';
