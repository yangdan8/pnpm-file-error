import { defineComponent, ref, computed, resolveComponent, resolveDirective, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, createElementBlock, normalizeStyle, withModifiers, renderSlot, toDisplayString, resolveDynamicComponent, createCommentVNode, vShow } from 'vue';
import '../../../directives/index.mjs';
import { ElOverlay } from '../../overlay/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import { dialogProps, dialogEmits } from './dialog.mjs';
import { useDialog } from './use-dialog.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { CloseComponents } from '../../../utils/vue/icon.mjs';
import TrapFocus from '../../../directives/trap-focus/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { useSameTarget } from '../../../hooks/use-same-target/index.mjs';
import { useDraggable } from '../../../hooks/use-draggable/index.mjs';

const _sfc_main = defineComponent({
  name: "ElDialog",
  components: {
    ElOverlay,
    ElIcon,
    ...CloseComponents
  },
  directives: {
    TrapFocus
  },
  props: dialogProps,
  emits: dialogEmits,
  setup(props, ctx) {
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialog = useDialog(props, ctx, dialogRef);
    const overlayEvent = useSameTarget(dialog.onModalClick);
    const draggable = computed(() => props.draggable && !props.fullscreen);
    useDraggable(dialogRef, headerRef, draggable);
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
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_overlay = resolveComponent("el-overlay");
  const _directive_trap_focus = resolveDirective("trap-focus");
  return openBlock(), createBlock(Teleport, {
    to: "body",
    disabled: !_ctx.appendToBody
  }, [
    createVNode(Transition, {
      name: "dialog-fade",
      onAfterEnter: _ctx.afterEnter,
      onAfterLeave: _ctx.afterLeave,
      onBeforeLeave: _ctx.beforeLeave
    }, {
      default: withCtx(() => [
        withDirectives(createVNode(_component_el_overlay, {
          "custom-mask-event": "",
          mask: _ctx.modal,
          "overlay-class": _ctx.modalClass,
          "z-index": _ctx.zIndex
        }, {
          default: withCtx(() => [
            createElementVNode("div", {
              class: normalizeClass(`${_ctx.ns.namespace.value}-overlay-dialog`),
              onClick: _cache[2] || (_cache[2] = (...args) => _ctx.overlayEvent.onClick && _ctx.overlayEvent.onClick(...args)),
              onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.overlayEvent.onMousedown && _ctx.overlayEvent.onMousedown(...args)),
              onMouseup: _cache[4] || (_cache[4] = (...args) => _ctx.overlayEvent.onMouseup && _ctx.overlayEvent.onMouseup(...args))
            }, [
              withDirectives((openBlock(), createElementBlock("div", {
                ref: "dialogRef",
                class: normalizeClass([
                  _ctx.ns.b(),
                  _ctx.ns.is("fullscreen", _ctx.fullscreen),
                  _ctx.ns.is("draggable", _ctx.draggable),
                  { [_ctx.ns.m("center")]: _ctx.center },
                  _ctx.customClass
                ]),
                "aria-modal": "true",
                role: "dialog",
                "aria-label": _ctx.title || "dialog",
                style: normalizeStyle(_ctx.style),
                onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                }, ["stop"]))
              }, [
                createElementVNode("div", {
                  ref: "headerRef",
                  class: normalizeClass(_ctx.ns.e("header"))
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createElementVNode("span", {
                      class: normalizeClass(_ctx.ns.e("title"))
                    }, toDisplayString(_ctx.title), 3)
                  ]),
                  _ctx.showClose ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    "aria-label": "close",
                    class: normalizeClass(_ctx.ns.e("headerbtn")),
                    type: "button",
                    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
                  }, [
                    createVNode(_component_el_icon, {
                      class: normalizeClass(_ctx.ns.e("close"))
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || "close")))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ], 2)) : createCommentVNode("v-if", true)
                ], 2),
                _ctx.rendered ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.ns.e("body"))
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2)) : createCommentVNode("v-if", true),
                _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.ns.e("footer"))
                }, [
                  renderSlot(_ctx.$slots, "footer")
                ], 2)) : createCommentVNode("v-if", true)
              ], 14, _hoisted_1)), [
                [_directive_trap_focus]
              ])
            ], 34)
          ]),
          _: 3
        }, 8, ["mask", "overlay-class", "z-index"]), [
          [vShow, _ctx.visible]
        ])
      ]),
      _: 3
    }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
  ], 8, ["disabled"]);
}
var Dialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Dialog as default };
//# sourceMappingURL=dialog2.mjs.map
