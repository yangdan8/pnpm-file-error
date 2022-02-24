import type { ItemSize } from '../types';
declare const FixedSizeGrid: import("vue").DefineComponent<{
    readonly className: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly containerElement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | Element>, "div", unknown, unknown, unknown>;
    readonly data: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, () => [], unknown, unknown, unknown>;
    readonly direction: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "ltr", false, "ltr" | "rtl", never>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, true, unknown, unknown>;
    readonly innerElement: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ObjectConstructor], "div", unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
    readonly useIsScrolling: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [NumberConstructor, StringConstructor], unknown, false, unknown, unknown>;
    readonly perfMode: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly scrollbarAlwaysOn: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly columnCache: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly columnWidth: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | ItemSize>, never, true, never, never>;
    readonly estimatedColumnWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, false, never, never>;
    readonly estimatedRowHeight: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, false, never, never>;
    readonly initScrollLeft: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, false, never, never>;
    readonly initScrollTop: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, false, never, never>;
    readonly rowCache: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly rowHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | ItemSize>, never, true, never, never>;
    readonly totalColumn: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, true, never, never>;
    readonly totalRow: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, true, never, never>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "item-rendered")[], "scroll" | "item-rendered", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly className: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly containerElement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | Element>, "div", unknown, unknown, unknown>;
    readonly data: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, () => [], unknown, unknown, unknown>;
    readonly direction: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "ltr", false, "ltr" | "rtl", never>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, true, unknown, unknown>;
    readonly innerElement: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ObjectConstructor], "div", unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
    readonly useIsScrolling: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [NumberConstructor, StringConstructor], unknown, false, unknown, unknown>;
    readonly perfMode: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly scrollbarAlwaysOn: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly columnCache: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly columnWidth: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | ItemSize>, never, true, never, never>;
    readonly estimatedColumnWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, false, never, never>;
    readonly estimatedRowHeight: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, false, never, never>;
    readonly initScrollLeft: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, false, never, never>;
    readonly initScrollTop: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, false, never, never>;
    readonly rowCache: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly rowHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | ItemSize>, never, true, never, never>;
    readonly totalColumn: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, true, never, never>;
    readonly totalRow: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, true, never, never>;
}>> & {
    onScroll?: ((...args: any[]) => any) | undefined;
    "onItem-rendered"?: ((...args: any[]) => any) | undefined;
}, {
    data: any[];
    width: import("element-plus/es/utils").BuildPropType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    style: import("vue").StyleValue;
    className: string;
    direction: import("element-plus/es/utils").BuildPropType<StringConstructor, "ltr" | "rtl", never>;
    scrollbarAlwaysOn: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    perfMode: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    containerElement: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Element>, unknown, unknown>;
    innerElement: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
    useIsScrolling: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    columnCache: number;
    estimatedColumnWidth: number;
    estimatedRowHeight: number;
    initScrollLeft: number;
    initScrollTop: number;
    rowCache: number;
}>;
export default FixedSizeGrid;
