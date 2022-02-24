'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../tooltip/index.js');
require('../../popper/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var popover = require('./popover.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$1 = require('../../../hooks/use-namespace/index.js');
var shared = require('@vue/shared');
var deprecation = require('../../popper/src/deprecation.js');

const emits = ["update:visible", "after-enter", "after-leave"];
const COMPONENT_NAME = "ElPopover";
const _sfc_main = vue.defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElTooltip: index.ElTooltip
  },
  props: popover.usePopoverProps,
  emits,
  setup(props, { emit }) {
    const ns = index$1.useNamespace("popover");
    const tooltipRef = vue.ref(null);
    const popperRef = vue.computed(() => {
      var _a;
      return (_a = vue.unref(tooltipRef)) == null ? void 0 : _a.popperRef;
    });
    const width = vue.computed(() => {
      if (shared.isString(props.width)) {
        return props.width;
      }
      return `${props.width}px`;
    });
    const style = vue.computed(() => {
      return [
        {
          width: width.value
        },
        props.popperStyle
      ];
    });
    const kls = vue.computed(() => {
      return [ns.b(), props.popperClass, { [ns.m("plain")]: !!props.content }];
    });
    const { compatTeleported } = deprecation.useDeprecateAppendToBody(COMPONENT_NAME, "appendToBody");
    const hide = () => {
      var _a;
      (_a = tooltipRef.value) == null ? void 0 : _a.hide();
    };
    const afterEnter = () => {
      emit("after-enter");
    };
    const afterLeave = () => {
      emit("after-leave");
    };
    return {
      compatTeleported,
      ns,
      kls,
      style,
      tooltipRef,
      popperRef,
      hide,
      afterEnter,
      afterLeave
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = vue.resolveComponent("el-tooltip");
  return vue.openBlock(), vue.createBlock(_component_el_tooltip, vue.mergeProps({ ref: "tooltipRef" }, _ctx.$attrs, {
    trigger: _ctx.trigger,
    placement: _ctx.placement,
    disabled: _ctx.disabled,
    visible: _ctx.visible,
    transition: _ctx.transition,
    "popper-options": _ctx.popperOptions,
    tabindex: _ctx.tabindex,
    "append-to-body": _ctx.appendToBody,
    content: _ctx.content,
    offset: _ctx.offset,
    "show-after": _ctx.showAfter,
    "hide-after": _ctx.hideAfter,
    "auto-close": _ctx.autoClose,
    "show-arrow": _ctx.showArrow,
    "aria-label": _ctx.title,
    effect: _ctx.effect,
    enterable: _ctx.enterable,
    "popper-class": _ctx.kls,
    "popper-style": _ctx.style,
    teleported: _ctx.compatTeleported,
    persistent: "",
    onShow: _ctx.afterEnter,
    onHide: _ctx.afterLeave
  }), {
    content: vue.withCtx(() => [
      _ctx.title ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass(_ctx.ns.e("title")),
        role: "title"
      }, vue.toDisplayString(_ctx.title), 3)) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        vue.createTextVNode(vue.toDisplayString(_ctx.content), 1)
      ])
    ]),
    default: vue.withCtx(() => [
      _ctx.$slots.reference ? vue.renderSlot(_ctx.$slots, "reference", { key: 0 }) : vue.createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "append-to-body", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "onShow", "onHide"]);
}
var Popover = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Popover;
//# sourceMappingURL=index.js.map
