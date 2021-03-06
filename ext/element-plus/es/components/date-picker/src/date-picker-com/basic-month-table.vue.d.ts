import dayjs from 'dayjs';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    disabledDate: {
        type: PropType<(_: Date) => void>;
    };
    selectionMode: {
        type: StringConstructor;
        default: string;
    };
    minDate: {
        type: PropType<dayjs.Dayjs>;
    };
    maxDate: {
        type: PropType<dayjs.Dayjs>;
    };
    date: {
        type: PropType<dayjs.Dayjs>;
    };
    parsedValue: {
        type: PropType<dayjs.Dayjs>;
    };
    rangeState: {
        type: ObjectConstructor;
        default: () => {
            endDate: null;
            selecting: boolean;
        };
    };
}, {
    handleMouseMove: (event: any) => void;
    handleMonthTableClick: (event: any) => void;
    rows: import("vue").ComputedRef<never[][]>;
    getCellStyle: (cell: any) => any;
    t: import("element-plus/es/hooks").Translator;
    months: import("vue").Ref<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "pick" | "changerange")[], "select" | "pick" | "changerange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabledDate: {
        type: PropType<(_: Date) => void>;
    };
    selectionMode: {
        type: StringConstructor;
        default: string;
    };
    minDate: {
        type: PropType<dayjs.Dayjs>;
    };
    maxDate: {
        type: PropType<dayjs.Dayjs>;
    };
    date: {
        type: PropType<dayjs.Dayjs>;
    };
    parsedValue: {
        type: PropType<dayjs.Dayjs>;
    };
    rangeState: {
        type: ObjectConstructor;
        default: () => {
            endDate: null;
            selecting: boolean;
        };
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onPick?: ((...args: any[]) => any) | undefined;
    onChangerange?: ((...args: any[]) => any) | undefined;
}, {
    selectionMode: string;
    rangeState: Record<string, any>;
}>;
export default _default;
