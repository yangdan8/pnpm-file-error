'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../constants/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var useCheckbox = require('./useCheckbox.js');
var validator = require('../../../utils/vue/validator.js');
var event = require('../../../constants/event.js');
var index = require('../../../hooks/use-common-props/index.js');
var index$1 = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElCheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: void 0
    },
    max: {
      type: Number,
      default: void 0
    },
    size: {
      type: String,
      validator: validator.isValidComponentSize
    },
    fill: {
      type: String,
      default: void 0
    },
    textColor: {
      type: String,
      default: void 0
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: [event.UPDATE_MODEL_EVENT, "change"],
  setup(props, { emit, slots }) {
    const { elFormItem } = useCheckbox.useCheckboxGroup();
    const checkboxGroupSize = index.useSize();
    const ns = index$1.useNamespace("checkbox");
    const changeEvent = (value) => {
      emit(event.UPDATE_MODEL_EVENT, value);
      vue.nextTick(() => {
        emit("change", value);
      });
    };
    const modelValue = vue.computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    vue.provide("CheckboxGroup", {
      name: "ElCheckboxGroup",
      modelValue,
      ...vue.toRefs(props),
      checkboxGroupSize,
      changeEvent
    });
    vue.watch(() => props.modelValue, () => {
      var _a;
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
    });
    return () => {
      return vue.h(props.tag, {
        class: ns.b("group"),
        role: "group",
        "aria-label": "checkbox-group"
      }, [vue.renderSlot(slots, "default")]);
    };
  }
});

exports["default"] = _sfc_main;
//# sourceMappingURL=checkbox-group.js.map
