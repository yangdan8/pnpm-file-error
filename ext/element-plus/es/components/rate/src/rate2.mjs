import { defineComponent, inject, ref, computed, watch, resolveComponent, openBlock, createElementBlock, normalizeClass, Fragment, renderList, normalizeStyle, createVNode, withCtx, createBlock, resolveDynamicComponent, createCommentVNode, toDisplayString } from 'vue';
import { isObject, isArray } from '@vue/shared';
import '../../../tokens/index.mjs';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { StarFilled, Star } from '@element-plus/icons-vue';
import '../../../hooks/index.mjs';
import { rateProps, rateEmits } from './rate.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { elFormKey } from '../../../tokens/form.mjs';
import { useSize } from '../../../hooks/use-common-props/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';
import { EVENT_CODE } from '../../../constants/aria.mjs';
import { hasClass } from '../../../utils/dom/style.mjs';

function getValueFromMap(value, map) {
  const isExcludedObject = (val) => isObject(val);
  const matchedKeys = Object.keys(map).map((key) => +key).filter((key) => {
    const val = map[key];
    const excluded = isExcludedObject(val) ? val.excluded : false;
    return excluded ? value < key : value <= key;
  }).sort((a, b) => a - b);
  const matchedValue = map[matchedKeys[0]];
  return isExcludedObject(matchedValue) && matchedValue.value || matchedValue;
}
const _sfc_main = defineComponent({
  name: "ElRate",
  components: {
    ElIcon,
    StarFilled,
    Star
  },
  props: rateProps,
  emits: rateEmits,
  setup(props, { emit }) {
    const elForm = inject(elFormKey, {});
    const rateSize = useSize();
    const ns = useNamespace("rate");
    const currentValue = ref(props.modelValue);
    const hoverIndex = ref(-1);
    const pointerAtLeftHalf = ref(true);
    const rateKls = computed(() => [ns.b(), ns.m(rateSize.value)]);
    const rateDisabled = computed(() => props.disabled || elForm.disabled);
    const text = computed(() => {
      let result = "";
      if (props.showScore) {
        result = props.scoreTemplate.replace(/\{\s*value\s*\}/, rateDisabled.value ? `${props.modelValue}` : `${currentValue.value}`);
      } else if (props.showText) {
        result = props.texts[Math.ceil(currentValue.value) - 1];
      }
      return result;
    });
    const valueDecimal = computed(() => props.modelValue * 100 - Math.floor(props.modelValue) * 100);
    const colorMap = computed(() => isArray(props.colors) ? {
      [props.lowThreshold]: props.colors[0],
      [props.highThreshold]: { value: props.colors[1], excluded: true },
      [props.max]: props.colors[2]
    } : props.colors);
    const activeColor = computed(() => getValueFromMap(currentValue.value, colorMap.value));
    const decimalStyle = computed(() => {
      let width = "";
      if (rateDisabled.value) {
        width = `${valueDecimal.value}%`;
      } else if (props.allowHalf) {
        width = "50%";
      }
      return {
        color: activeColor.value,
        width
      };
    });
    const componentMap = computed(() => isArray(props.icons) ? {
      [props.lowThreshold]: props.icons[0],
      [props.highThreshold]: {
        value: props.icons[1],
        excluded: true
      },
      [props.max]: props.icons[2]
    } : props.icons);
    const decimalIconComponent = computed(() => getValueFromMap(props.modelValue, componentMap.value));
    const voidComponent = computed(() => rateDisabled.value ? props.disabledvoidIcon : props.voidIcon);
    const activeComponent = computed(() => getValueFromMap(currentValue.value, componentMap.value));
    const iconComponents = computed(() => {
      const result = Array(props.max);
      const threshold = currentValue.value;
      result.fill(activeComponent.value, 0, threshold);
      result.fill(voidComponent.value, threshold, props.max);
      return result;
    });
    function showDecimalIcon(item) {
      const showWhenDisabled = rateDisabled.value && valueDecimal.value > 0 && item - 1 < props.modelValue && item > props.modelValue;
      const showWhenAllowHalf = props.allowHalf && pointerAtLeftHalf.value && item - 0.5 <= currentValue.value && item > currentValue.value;
      return showWhenDisabled || showWhenAllowHalf;
    }
    function getIconStyle(item) {
      const voidColor = rateDisabled.value ? props.disabledVoidColor : props.voidColor;
      return {
        color: item <= currentValue.value ? activeColor.value : voidColor
      };
    }
    function selectValue(value) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf && pointerAtLeftHalf.value) {
        emit(UPDATE_MODEL_EVENT, currentValue.value);
        if (props.modelValue !== currentValue.value) {
          emit("change", currentValue.value);
        }
      } else {
        emit(UPDATE_MODEL_EVENT, value);
        if (props.modelValue !== value) {
          emit("change", value);
        }
      }
    }
    function handleKey(e) {
      if (rateDisabled.value) {
        return;
      }
      let _currentValue = currentValue.value;
      const code = e.code;
      if (code === EVENT_CODE.up || code === EVENT_CODE.right) {
        if (props.allowHalf) {
          _currentValue += 0.5;
        } else {
          _currentValue += 1;
        }
        e.stopPropagation();
        e.preventDefault();
      } else if (code === EVENT_CODE.left || code === EVENT_CODE.down) {
        if (props.allowHalf) {
          _currentValue -= 0.5;
        } else {
          _currentValue -= 1;
        }
        e.stopPropagation();
        e.preventDefault();
      }
      _currentValue = _currentValue < 0 ? 0 : _currentValue;
      _currentValue = _currentValue > props.max ? props.max : _currentValue;
      emit(UPDATE_MODEL_EVENT, _currentValue);
      emit("change", _currentValue);
      return _currentValue;
    }
    function setCurrentValue(value, event) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf) {
        let target = event.target;
        if (hasClass(target, ns.e("item"))) {
          target = target.querySelector(`.${ns.e("icon")}`);
        }
        if (target.clientWidth === 0 || hasClass(target, ns.e("decimal"))) {
          target = target.parentNode;
        }
        pointerAtLeftHalf.value = event.offsetX * 2 <= target.clientWidth;
        currentValue.value = pointerAtLeftHalf.value ? value - 0.5 : value;
      } else {
        currentValue.value = value;
      }
      hoverIndex.value = value;
    }
    function resetCurrentValue() {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf) {
        pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
      }
      currentValue.value = props.modelValue;
      hoverIndex.value = -1;
    }
    watch(() => props.modelValue, (val) => {
      currentValue.value = val;
      pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
    });
    if (!props.modelValue) {
      emit(UPDATE_MODEL_EVENT, 0);
    }
    return {
      ns,
      hoverIndex,
      currentValue,
      rateDisabled,
      text,
      decimalStyle,
      decimalIconComponent,
      iconComponents,
      rateKls,
      showDecimalIcon,
      getIconStyle,
      selectValue,
      handleKey,
      setCurrentValue,
      resetCurrentValue
    };
  }
});
const _hoisted_1 = ["aria-valuenow", "aria-valuetext", "aria-valuemax"];
const _hoisted_2 = ["onMousemove", "onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.rateKls),
    role: "slider",
    "aria-valuenow": _ctx.currentValue,
    "aria-valuetext": _ctx.text,
    "aria-valuemin": "0",
    "aria-valuemax": _ctx.max,
    tabindex: "0",
    onKeydown: _cache[1] || (_cache[1] = (...args) => _ctx.handleKey && _ctx.handleKey(...args))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.max, (item, key) => {
      return openBlock(), createElementBlock("span", {
        key,
        class: normalizeClass(_ctx.ns.e("item")),
        style: normalizeStyle({ cursor: _ctx.rateDisabled ? "auto" : "pointer" }),
        onMousemove: ($event) => _ctx.setCurrentValue(item, $event),
        onMouseleave: _cache[0] || (_cache[0] = (...args) => _ctx.resetCurrentValue && _ctx.resetCurrentValue(...args)),
        onClick: ($event) => _ctx.selectValue(item)
      }, [
        createVNode(_component_el_icon, {
          class: normalizeClass([_ctx.ns.e("icon"), { hover: _ctx.hoverIndex === item }]),
          style: normalizeStyle(_ctx.getIconStyle(item))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponents[item - 1]))),
            _ctx.showDecimalIcon(item) ? (openBlock(), createBlock(_component_el_icon, {
              key: 0,
              style: normalizeStyle(_ctx.decimalStyle),
              class: normalizeClass([_ctx.ns.e("icon"), _ctx.ns.e("decimal")])
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.decimalIconComponent)))
              ]),
              _: 1
            }, 8, ["style", "class"])) : createCommentVNode("v-if", true)
          ]),
          _: 2
        }, 1032, ["class", "style"])
      ], 46, _hoisted_2);
    }), 128)),
    _ctx.showText || _ctx.showScore ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(_ctx.ns.e("text")),
      style: normalizeStyle({ color: _ctx.textColor })
    }, toDisplayString(_ctx.text), 7)) : createCommentVNode("v-if", true)
  ], 42, _hoisted_1);
}
var Rate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Rate as default };
//# sourceMappingURL=rate2.mjs.map
