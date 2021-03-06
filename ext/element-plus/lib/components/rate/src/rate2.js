'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
require('../../../tokens/index.js');
require('../../../utils/index.js');
require('../../../constants/index.js');
var index = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index.js');
var rate = require('./rate.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var form = require('../../../tokens/form.js');
var index$1 = require('../../../hooks/use-common-props/index.js');
var index$2 = require('../../../hooks/use-namespace/index.js');
var event = require('../../../constants/event.js');
var aria = require('../../../constants/aria.js');
var style = require('../../../utils/dom/style.js');

function getValueFromMap(value, map) {
  const isExcludedObject = (val) => shared.isObject(val);
  const matchedKeys = Object.keys(map).map((key) => +key).filter((key) => {
    const val = map[key];
    const excluded = isExcludedObject(val) ? val.excluded : false;
    return excluded ? value < key : value <= key;
  }).sort((a, b) => a - b);
  const matchedValue = map[matchedKeys[0]];
  return isExcludedObject(matchedValue) && matchedValue.value || matchedValue;
}
const _sfc_main = vue.defineComponent({
  name: "ElRate",
  components: {
    ElIcon: index.ElIcon,
    StarFilled: iconsVue.StarFilled,
    Star: iconsVue.Star
  },
  props: rate.rateProps,
  emits: rate.rateEmits,
  setup(props, { emit }) {
    const elForm = vue.inject(form.elFormKey, {});
    const rateSize = index$1.useSize();
    const ns = index$2.useNamespace("rate");
    const currentValue = vue.ref(props.modelValue);
    const hoverIndex = vue.ref(-1);
    const pointerAtLeftHalf = vue.ref(true);
    const rateKls = vue.computed(() => [ns.b(), ns.m(rateSize.value)]);
    const rateDisabled = vue.computed(() => props.disabled || elForm.disabled);
    const text = vue.computed(() => {
      let result = "";
      if (props.showScore) {
        result = props.scoreTemplate.replace(/\{\s*value\s*\}/, rateDisabled.value ? `${props.modelValue}` : `${currentValue.value}`);
      } else if (props.showText) {
        result = props.texts[Math.ceil(currentValue.value) - 1];
      }
      return result;
    });
    const valueDecimal = vue.computed(() => props.modelValue * 100 - Math.floor(props.modelValue) * 100);
    const colorMap = vue.computed(() => shared.isArray(props.colors) ? {
      [props.lowThreshold]: props.colors[0],
      [props.highThreshold]: { value: props.colors[1], excluded: true },
      [props.max]: props.colors[2]
    } : props.colors);
    const activeColor = vue.computed(() => getValueFromMap(currentValue.value, colorMap.value));
    const decimalStyle = vue.computed(() => {
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
    const componentMap = vue.computed(() => shared.isArray(props.icons) ? {
      [props.lowThreshold]: props.icons[0],
      [props.highThreshold]: {
        value: props.icons[1],
        excluded: true
      },
      [props.max]: props.icons[2]
    } : props.icons);
    const decimalIconComponent = vue.computed(() => getValueFromMap(props.modelValue, componentMap.value));
    const voidComponent = vue.computed(() => rateDisabled.value ? props.disabledvoidIcon : props.voidIcon);
    const activeComponent = vue.computed(() => getValueFromMap(currentValue.value, componentMap.value));
    const iconComponents = vue.computed(() => {
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
        emit(event.UPDATE_MODEL_EVENT, currentValue.value);
        if (props.modelValue !== currentValue.value) {
          emit("change", currentValue.value);
        }
      } else {
        emit(event.UPDATE_MODEL_EVENT, value);
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
      if (code === aria.EVENT_CODE.up || code === aria.EVENT_CODE.right) {
        if (props.allowHalf) {
          _currentValue += 0.5;
        } else {
          _currentValue += 1;
        }
        e.stopPropagation();
        e.preventDefault();
      } else if (code === aria.EVENT_CODE.left || code === aria.EVENT_CODE.down) {
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
      emit(event.UPDATE_MODEL_EVENT, _currentValue);
      emit("change", _currentValue);
      return _currentValue;
    }
    function setCurrentValue(value, event) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf) {
        let target = event.target;
        if (style.hasClass(target, ns.e("item"))) {
          target = target.querySelector(`.${ns.e("icon")}`);
        }
        if (target.clientWidth === 0 || style.hasClass(target, ns.e("decimal"))) {
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
    vue.watch(() => props.modelValue, (val) => {
      currentValue.value = val;
      pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
    });
    if (!props.modelValue) {
      emit(event.UPDATE_MODEL_EVENT, 0);
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
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(_ctx.rateKls),
    role: "slider",
    "aria-valuenow": _ctx.currentValue,
    "aria-valuetext": _ctx.text,
    "aria-valuemin": "0",
    "aria-valuemax": _ctx.max,
    tabindex: "0",
    onKeydown: _cache[1] || (_cache[1] = (...args) => _ctx.handleKey && _ctx.handleKey(...args))
  }, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.max, (item, key) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        key,
        class: vue.normalizeClass(_ctx.ns.e("item")),
        style: vue.normalizeStyle({ cursor: _ctx.rateDisabled ? "auto" : "pointer" }),
        onMousemove: ($event) => _ctx.setCurrentValue(item, $event),
        onMouseleave: _cache[0] || (_cache[0] = (...args) => _ctx.resetCurrentValue && _ctx.resetCurrentValue(...args)),
        onClick: ($event) => _ctx.selectValue(item)
      }, [
        vue.createVNode(_component_el_icon, {
          class: vue.normalizeClass([_ctx.ns.e("icon"), { hover: _ctx.hoverIndex === item }]),
          style: vue.normalizeStyle(_ctx.getIconStyle(item))
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.iconComponents[item - 1]))),
            _ctx.showDecimalIcon(item) ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
              key: 0,
              style: vue.normalizeStyle(_ctx.decimalStyle),
              class: vue.normalizeClass([_ctx.ns.e("icon"), _ctx.ns.e("decimal")])
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.decimalIconComponent)))
              ]),
              _: 1
            }, 8, ["style", "class"])) : vue.createCommentVNode("v-if", true)
          ]),
          _: 2
        }, 1032, ["class", "style"])
      ], 46, _hoisted_2);
    }), 128)),
    _ctx.showText || _ctx.showScore ? (vue.openBlock(), vue.createElementBlock("span", {
      key: 0,
      class: vue.normalizeClass(_ctx.ns.e("text")),
      style: vue.normalizeStyle({ color: _ctx.textColor })
    }, vue.toDisplayString(_ctx.text), 7)) : vue.createCommentVNode("v-if", true)
  ], 42, _hoisted_1);
}
var Rate = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Rate;
//# sourceMappingURL=rate2.js.map
