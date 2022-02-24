import { defineComponent, ref, computed, resolveComponent, openBlock, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, createElementBlock, Fragment, renderList } from 'vue';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { ElSelect } from '../../select/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { Clock, CircleClose } from '@element-plus/icons-vue';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

dayjs.extend(customParseFormat);
const { Option: ElOption } = ElSelect;
const parseTime = (time) => {
  const values = (time || "").split(":");
  if (values.length >= 2) {
    let hours = parseInt(values[0], 10);
    const minutes = parseInt(values[1], 10);
    const timeUpper = time.toUpperCase();
    if (timeUpper.includes("AM") && hours === 12) {
      hours = 0;
    } else if (timeUpper.includes("PM") && hours !== 12) {
      hours += 12;
    }
    return {
      hours,
      minutes
    };
  }
  return null;
};
const compareTime = (time1, time2) => {
  const value1 = parseTime(time1);
  const value2 = parseTime(time2);
  const minutes1 = value1.minutes + value1.hours * 60;
  const minutes2 = value2.minutes + value2.hours * 60;
  if (minutes1 === minutes2) {
    return 0;
  }
  return minutes1 > minutes2 ? 1 : -1;
};
const padTime = (time) => {
  return `${time}`.padStart(2, "0");
};
const formatTime = (time) => {
  return `${padTime(time.hours)}:${padTime(time.minutes)}`;
};
const nextTime = (time, step) => {
  const timeValue = parseTime(time);
  const stepValue = parseTime(step);
  const next = {
    hours: timeValue.hours,
    minutes: timeValue.minutes
  };
  next.minutes += stepValue.minutes;
  next.hours += stepValue.hours;
  next.hours += Math.floor(next.minutes / 60);
  next.minutes = next.minutes % 60;
  return formatTime(next);
};
const _sfc_main = defineComponent({
  name: "ElTimeSelect",
  components: { ElSelect, ElOption, ElIcon },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    format: {
      type: String,
      default: "HH:mm"
    },
    modelValue: String,
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    effect: {
      type: String,
      default: "light"
    },
    clearable: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => !value || ["large", "default", "small"].indexOf(value) !== -1
    },
    placeholder: {
      type: String,
      default: ""
    },
    start: {
      type: String,
      default: "09:00"
    },
    end: {
      type: String,
      default: "18:00"
    },
    step: {
      type: String,
      default: "00:30"
    },
    minTime: {
      type: String,
      default: ""
    },
    maxTime: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    prefixIcon: {
      type: [String, Object],
      default: Clock
    },
    clearIcon: {
      type: [String, Object],
      default: CircleClose
    }
  },
  emits: ["change", "blur", "focus", "update:modelValue"],
  setup(props) {
    const select = ref(null);
    const value = computed(() => props.modelValue);
    const start = computed(() => {
      const time = parseTime(props.start);
      return formatTime(time);
    });
    const end = computed(() => {
      const time = parseTime(props.end);
      return formatTime(time);
    });
    const step = computed(() => {
      const time = parseTime(props.step);
      return formatTime(time);
    });
    const minTime = computed(() => {
      const time = parseTime(props.minTime);
      return time ? formatTime(time) : null;
    });
    const maxTime = computed(() => {
      const time = parseTime(props.maxTime);
      return time ? formatTime(time) : null;
    });
    const items = computed(() => {
      const result = [];
      if (props.start && props.end && props.step) {
        let current = start.value;
        let currentTime;
        while (compareTime(current, end.value) <= 0) {
          currentTime = dayjs(current, "HH:mm").format(props.format);
          result.push({
            value: currentTime,
            disabled: compareTime(current, minTime.value || "-1:-1") <= 0 || compareTime(current, maxTime.value || "100:100") >= 0
          });
          current = nextTime(current, step.value);
        }
      }
      return result;
    });
    const blur = () => {
      var _a, _b;
      (_b = (_a = select.value) == null ? void 0 : _a.blur) == null ? void 0 : _b.call(_a);
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = select.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    return {
      select,
      value,
      items,
      blur,
      focus
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_select = resolveComponent("el-select");
  return openBlock(), createBlock(_component_el_select, {
    ref: "select",
    "model-value": _ctx.value,
    disabled: _ctx.disabled,
    clearable: _ctx.clearable,
    "clear-icon": _ctx.clearIcon,
    size: _ctx.size,
    effect: _ctx.effect,
    placeholder: _ctx.placeholder,
    "default-first-option": "",
    filterable: _ctx.editable,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = (event) => _ctx.$emit("update:modelValue", event)),
    onChange: _cache[1] || (_cache[1] = (event) => _ctx.$emit("change", event)),
    onBlur: _cache[2] || (_cache[2] = (event) => _ctx.$emit("blur", event)),
    onFocus: _cache[3] || (_cache[3] = (event) => _ctx.$emit("focus", event))
  }, {
    prefix: withCtx(() => [
      _ctx.prefixIcon ? (openBlock(), createBlock(_component_el_icon, {
        key: 0,
        class: "el-input__prefix-icon"
      }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true)
    ]),
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
        return openBlock(), createBlock(_component_el_option, {
          key: item.value,
          label: item.value,
          value: item.value,
          disabled: item.disabled
        }, null, 8, ["label", "value", "disabled"]);
      }), 128))
    ]),
    _: 1
  }, 8, ["model-value", "disabled", "clearable", "clear-icon", "size", "effect", "placeholder", "filterable"]);
}
var TimeSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { TimeSelect as default };
//# sourceMappingURL=time-select.mjs.map
