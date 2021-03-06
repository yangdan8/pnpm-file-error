import type { Ref, ExtractPropTypes } from 'vue';
export declare const createModelToggleComposable: (name: string) => {
    useModelToggle: ({ indicator, shouldHideWhenRouteChanges, shouldProceed, onShow, onHide, }: ModelToggleParams) => {
        hide: () => void;
        show: () => void;
        toggle: () => void;
    };
    useModelToggleProps: {
        [x: string]: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, false, never, never> | import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
    };
    useModelToggleEmits: string[];
};
declare const useModelToggle: ({ indicator, shouldHideWhenRouteChanges, shouldProceed, onShow, onHide, }: ModelToggleParams) => {
    hide: () => void;
    show: () => void;
    toggle: () => void;
}, useModelToggleProps: {
    [x: string]: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, false, never, never> | import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
}, useModelToggleEmits: string[];
export { useModelToggle, useModelToggleEmits, useModelToggleProps };
export declare type UseModelToggleProps = ExtractPropTypes<typeof useModelToggleProps>;
export declare type ModelToggleParams = {
    indicator: Ref<boolean>;
    shouldHideWhenRouteChanges?: Ref<boolean>;
    shouldProceed?: () => boolean;
    onShow?: () => void;
    onHide?: () => void;
};
