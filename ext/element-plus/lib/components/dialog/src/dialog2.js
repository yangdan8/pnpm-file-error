'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../directives/index.js');
var index = require('../../overlay/index.js');
var index$1 = require('../../icon/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var dialog = require('./dialog.js');
var useDialog = require('./use-dialog.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var icon = require('../../../utils/vue/icon.js');
var index$2 = require('../../../directives/trap-focus/index.js');
var index$3 = require('../../../hooks/use-namespace/index.js');
var index$4 = require('../../../hooks/use-same-target/index.js');
var index$5 = require('../../../hooks/use-draggable/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElDialog",
  components: {
    ElOverlay: index.ElOverlay,
    ElIcon: index$1.ElIcon,
    ...icon.CloseComponents
  },
  directives: {
    TrapFocus: index$2["default"]
  },
  props: dialog.dialogProps,
  emits: dialog.dialogEmits,
  setup(props, ctx) {
    const ns = index$3.useNamespace("dialog");
    const dialogRef = vue.ref();
    const headerRef = vue.ref();
    const dialog = useDialog.useDialog(props, ctx, dialogRef);
    const overlayEvent = index$4.useSameTarget(dialog.onModalClick);
    const draggable = vue.computed(() => props.draggable && !props.fullscreen);
    index$5.useDraggable(dialogRef, headerRef, draggable);
    return {
      ns,
      dialogRef,
      headerRef,
      overlayEvent,
      ...dialog
    };
  }
});
const _hoisted_1 = ["aria-label"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_el_overlay = vue.resolveComponent("el-overlay");
  const _directive_trap_focus = vue.resolveDirective("trap-focus");
  return vue.openBlock(), vue.createBlock(vue.Teleport, {
    to: "body",
    disabled: !_ctx.appendToBody
  }, [
    vue.createVNode(vue.Transition, {
      name: "dialog-fade",
      onAfterEnter: _ctx.afterEnter,
      onAfterLeave: _ctx.afterLeave,
      onBeforeLeave: _ctx.beforeLeave
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createVNode(_component_el_overlay, {
          "custom-mask-event": "",
          mask: _ctx.modal,
          "overlay-class": _ctx.modalClass,
          "z-index": _ctx.zIndex
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(`${_ctx.ns.namespace.value}-overlay-dialog`),
              onClick: _cache[2] || (_cache[2] = (...args) => _ctx.overlayEvent.onClick && _ctx.overlayEvent.onClick(...args)),
              onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.overlayEvent.onMousedown && _ctx.overlayEvent.onMousedown(...args)),
              onMouseup: _cache[4] || (_cache[4] = (...args) => _ctx.overlayEvent.onMouseup && _ctx.overlayEvent.onMouseup(...args))
            }, [
              vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
                ref: "dialogRef",
                class: vue.normalizeClass([
                  _ctx.ns.b(),
                  _ctx.ns.is("fullscreen", _ctx.fullscreen),
                  _ctx.ns.is("draggable", _ctx.draggable),
                  { [_ctx.ns.m("center")]: _ctx.center },
                  _ctx.customClass
                ]),
                "aria-modal": "true",
                role: "dialog",
                "aria-label": _ctx.title || "dialog",
                style: vue.normalizeStyle(_ctx.style),
                onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
                }, ["stop"]))
              }, [
                vue.createElementVNode("div", {
                  ref: "headerRef",
                  class: vue.normalizeClass(_ctx.ns.e("header"))
                }, [
                  vue.renderSlot(_ctx.$slots, "title", {}, () => [
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass(_ctx.ns.e("title"))
                    }, vue.toDisplayString(_ctx.title), 3)
                  ]),
                  _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("button", {
                    key: 0,
                    "aria-label": "close",
                    class: vue.normalizeClass(_ctx.ns.e("headerbtn")),
                    type: "button",
                    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
                  }, [
                    vue.createVNode(_component_el_icon, {
                      class: vue.normalizeClass(_ctx.ns.e("close"))
                    }, {
                      default: vue.withCtx(() => [
                        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.closeIcon || "close")))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ], 2)) : vue.createCommentVNode("v-if", true)
                ], 2),
                _ctx.rendered ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  class: vue.normalizeClass(_ctx.ns.e("body"))
                }, [
                  vue.renderSlot(_ctx.$slots, "default")
                ], 2)) : vue.createCommentVNode("v-if", true),
                _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 1,
                  class: vue.normalizeClass(_ctx.ns.e("footer"))
                }, [
                  vue.renderSlot(_ctx.$slots, "footer")
                ], 2)) : vue.createCommentVNode("v-if", true)
              ], 14, _hoisted_1)), [
                [_directive_trap_focus]
              ])
            ], 34)
          ]),
          _: 3
        }, 8, ["mask", "overlay-class", "z-index"]), [
          [vue.vShow, _ctx.visible]
        ])
      ]),
      _: 3
    }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
  ], 8, ["disabled"]);
}
var Dialog = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Dialog;
//# sourceMappingURL=dialog2.js.map
