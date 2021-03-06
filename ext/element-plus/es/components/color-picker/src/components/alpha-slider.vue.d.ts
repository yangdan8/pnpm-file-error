import type { PropType } from 'vue';
import type { Nullable } from 'element-plus/es/utils';
import type Color from '../color';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<Color>;
        required: true;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    thumb: import("vue").ShallowRef<Nullable<HTMLElement>>;
    bar: import("vue").ShallowRef<Nullable<HTMLElement>>;
    thumbLeft: import("vue").Ref<number>;
    thumbTop: import("vue").Ref<number>;
    background: import("vue").Ref<Nullable<string>>;
    handleClick: (event: Event) => void;
    update: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<Color>;
        required: true;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    vertical: boolean;
}>;
export default _default;
