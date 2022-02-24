'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index.js');
var radio = require('./radio.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElRadio",
  props: radio.radioProps,
  emits: radio.radioEmits,
  setup(props, { emit }) {
    const ns = index.useNamespace("radio");
    const { radioRef, isGroup, focus, size, disabled, tabIndex, modelValue } = radio.useRadio(props, emit);
    function handleChange() {
      vue.nextTick(() => emit("change", modelValue.value));
    }
    return {
      ns,
      focus,
      isGroup,
      modelValue,
      tabIndex,
      size,
      disabled,
      radioRef,
      handleChange
    };
  }
});
const _hoisted_1 = ["aria-checked", "aria-disabled", "tabindex"];
const _hoisted_2 = ["value", "name", "disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("label", {
    class: vue.normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.is("disabled", _ctx.disabled),
      _ctx.ns.is("focus", _ctx.focus),
      _ctx.ns.is("bordered", _ctx.border),
      _ctx.ns.is("checked", _ctx.modelValue === _ctx.label),
      _ctx.ns.m(_ctx.size)
    ]),
    role: "radio",
    "aria-checked": _ctx.modelValue === _ctx.label,
    "aria-disabled": _ctx.disabled,
    tabindex: _ctx.tabIndex,
    onKeydown: _cache[5] || (_cache[5] = vue.withKeys(vue.withModifiers(($event) => _ctx.modelValue = _ctx.disabled ? _ctx.modelValue : _ctx.label, ["stop", "prevent"]), ["space"]))
  }, [
    vue.createElementVNode("span", {
      class: vue.normalizeClass([
        _ctx.ns.e("input"),
        _ctx.ns.is("disabled", _ctx.disabled),
        _ctx.ns.is("checked", _ctx.modelValue === _ctx.label)
      ])
    }, [
      vue.createElementVNode("span", {
        class: vue.normalizeClass(_ctx.ns.e("inner"))
      }, null, 2),
      vue.withDirectives(vue.createElementVNode("input", {
        ref: "radioRef",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.modelValue = $event),
        class: vue.normalizeClass(_ctx.ns.e("original")),
        value: _ctx.label,
        type: "radio",
        "aria-hidden": "true",
        name: _ctx.name,
        disabled: _ctx.disabled,
        tabindex: "-1",
        onFocus: _cache[1] || (_cache[1] = ($event) => _ctx.focus = true),
        onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.focus = false),
        onChange: _cache[3] || (_cache[3] = (...args) => _ctx.handleChange && _ctx.handleChange(...args))
      }, null, 42, _hoisted_2), [
        [vue.vModelRadio, _ctx.modelValue]
      ])
    ], 2),
    vue.createElementVNode("span", {
      class: vue.normalizeClass(_ctx.ns.e("label")),
      onKeydown: _cache[4] || (_cache[4] = vue.withModifiers(() => {
      }, ["stop"]))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
      ])
    ], 34)
  ], 42, _hoisted_1);
}
var Radio = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Radio;
//# sourceMappingURL=radio2.js.map
