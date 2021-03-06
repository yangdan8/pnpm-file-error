'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
var tinycolor = require('@ctrl/tinycolor');
var index$4 = require('../../icon/index.js');
require('../../../hooks/index.js');
require('../../../tokens/index.js');
var button = require('./button.js');
var button$1 = require('../../../tokens/button.js');
var index = require('../../../hooks/use-global-config/index.js');
var index$1 = require('../../../hooks/use-namespace/index.js');
var index$2 = require('../../../hooks/use-form-item/index.js');
var index$3 = require('../../../hooks/use-common-props/index.js');

const _hoisted_1 = ["disabled", "autofocus", "type"];
const __default__ = {
  name: "ElButton"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: button.buttonProps,
  emits: button.buttonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const slots = vue.useSlots();
    const buttonGroupContext = vue.inject(button$1.buttonGroupContextKey, void 0);
    const globalConfig = index.useGlobalConfig("button");
    const ns = index$1.useNamespace("button");
    const { form } = index$2.useFormItem();
    const _size = index$3.useSize(vue.computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
    const _disabled = index$3.useDisabled();
    const _ref = vue.ref();
    const _type = vue.computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
    const autoInsertSpace = vue.computed(() => {
      var _a, _b, _c;
      return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.autoInsertSpace) != null ? _c : false;
    });
    const shouldAddSpace = vue.computed(() => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === vue.Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text);
        }
      }
      return false;
    });
    const typeColor = vue.computed(() => core.useCssVar(`--el-color-${props.type}`).value);
    const buttonStyle = vue.computed(() => {
      let styles = {};
      const buttonColor = props.color || typeColor.value;
      if (buttonColor) {
        const color = new tinycolor.TinyColor(buttonColor);
        const shadeBgColor = color.shade(10).toString();
        if (props.plain) {
          styles = {
            "--el-button-bg-color": color.tint(90).toString(),
            "--el-button-text-color": buttonColor,
            "--el-button-hover-text-color": "var(--el-color-white)",
            "--el-button-hover-bg-color": buttonColor,
            "--el-button-hover-border-color": buttonColor,
            "--el-button-active-bg-color": shadeBgColor,
            "--el-button-active-text-color": "var(--el-color-white)",
            "--el-button-active-border-color": shadeBgColor
          };
        } else {
          const tintBgColor = color.tint(20).toString();
          styles = {
            "--el-button-bg-color": buttonColor,
            "--el-button-border-color": buttonColor,
            "--el-button-hover-bg-color": tintBgColor,
            "--el-button-hover-border-color": tintBgColor,
            "--el-button-active-bg-color": shadeBgColor,
            "--el-button-active-border-color": shadeBgColor
          };
        }
        if (_disabled.value) {
          const disabledButtonColor = color.tint(50).toString();
          styles["--el-button-disabled-bg-color"] = disabledButtonColor;
          styles["--el-button-disabled-border-color"] = disabledButtonColor;
        }
      }
      return styles;
    });
    const handleClick = (evt) => {
      if (props.nativeType === "reset") {
        form == null ? void 0 : form.resetFields();
      }
      emit("click", evt);
    };
    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        ref_key: "_ref",
        ref: _ref,
        class: vue.normalizeClass([
          vue.unref(ns).b(),
          vue.unref(ns).m(vue.unref(_type)),
          vue.unref(ns).m(vue.unref(_size)),
          vue.unref(ns).is("disabled", vue.unref(_disabled)),
          vue.unref(ns).is("loading", _ctx.loading),
          vue.unref(ns).is("plain", _ctx.plain),
          vue.unref(ns).is("round", _ctx.round),
          vue.unref(ns).is("circle", _ctx.circle)
        ]),
        disabled: vue.unref(_disabled) || _ctx.loading,
        autofocus: _ctx.autofocus,
        type: _ctx.nativeType,
        style: vue.normalizeStyle(vue.unref(buttonStyle)),
        onClick: handleClick
      }, [
        _ctx.loading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          _ctx.$slots.loading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }) : (vue.openBlock(), vue.createBlock(vue.unref(index$4.ElIcon), {
            key: 1,
            class: vue.normalizeClass(vue.unref(ns).is("loading"))
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 2112)) : _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.unref(index$4.ElIcon), { key: 1 }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : vue.createCommentVNode("v-if", true),
        _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 2,
          class: vue.normalizeClass({ [vue.unref(ns).em("text", "expand")]: vue.unref(shouldAddSpace) })
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)) : vue.createCommentVNode("v-if", true)
      ], 14, _hoisted_1);
    };
  }
});

exports["default"] = _sfc_main;
//# sourceMappingURL=button2.js.map
