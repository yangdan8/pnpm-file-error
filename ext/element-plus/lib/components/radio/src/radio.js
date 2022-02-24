'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index.js');
require('../../../constants/index.js');
require('../../../tokens/index.js');
require('../../../hooks/index.js');
var props = require('../../../utils/vue/props.js');
var index = require('../../../hooks/use-common-props/index.js');
var event = require('../../../constants/event.js');
var shared = require('@vue/shared');
var core = require('@vueuse/core');
var radio = require('../../../tokens/radio.js');

const radioPropsBase = props.buildProps({
  size: index.useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
});
const radioProps = props.buildProps({
  ...radioPropsBase,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
});
const radioEmits = {
  [event.UPDATE_MODEL_EVENT]: (val) => shared.isString(val) || core.isNumber(val) || core.isBoolean(val),
  change: (val) => shared.isString(val) || core.isNumber(val) || core.isBoolean(val)
};
const useRadio = (props, emit) => {
  const radioRef = vue.ref();
  const radioGroup = vue.inject(radio.radioGroupKey, void 0);
  const isGroup = vue.computed(() => !!radioGroup);
  const modelValue = vue.computed({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit(event.UPDATE_MODEL_EVENT, val);
      }
      radioRef.value.checked = props.modelValue === props.label;
    }
  });
  const size = index.useSize(vue.computed(() => radioGroup == null ? void 0 : radioGroup.size));
  const disabled = index.useDisabled(vue.computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
  const focus = vue.ref(false);
  const tabIndex = vue.computed(() => {
    return disabled.value || isGroup.value && modelValue.value !== props.label ? -1 : 0;
  });
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue
  };
};

exports.radioEmits = radioEmits;
exports.radioProps = radioProps;
exports.radioPropsBase = radioPropsBase;
exports.useRadio = useRadio;
//# sourceMappingURL=radio.js.map
