import { defineComponent, ref, unref, computed, resolveComponent, openBlock, createBlock, mergeProps, withCtx, createElementVNode, normalizeClass, normalizeStyle, resolveDynamicComponent, createCommentVNode, createTextVNode, toDisplayString, createVNode, renderSlot } from 'vue';
import { ElButton } from '../../button/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { ElTooltip } from '../../tooltip/index.mjs';
import '../../popper/index.mjs';
import '../../../hooks/index.mjs';
import { popconfirmProps } from './popconfirm.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useDeprecateAppendToBody } from '../../popper/src/deprecation.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const COMPONENT_NAME = "ElPopconfirm";
const _sfc_main = defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElButton,
    ElTooltip,
    ElIcon
  },
  props: popconfirmProps,
  setup(props) {
    const { compatTeleported } = useDeprecateAppendToBody(COMPONENT_NAME, "appendToBody");
    const { t } = useLocale();
    const ns = useNamespace("popconfirm");
    const tooltipRef = ref();
    const hidePopper = () => {
      var _a, _b;
      (_b = (_a = unref(tooltipRef)) == null ? void 0 : _a.onClose) == null ? void 0 : _b.call(_a);
    };
    const handleCallback = () => {
      hidePopper();
    };
    const confirm = (e) => {
      var _a;
      (_a = props.onConfirm) == null ? void 0 : _a.call(props, e);
      handleCallback();
    };
    const cancel = (e) => {
      var _a;
      (_a = props.onCancel) == null ? void 0 : _a.call(props, e);
      handleCallback();
    };
    const finalConfirmButtonText = computed(() => props.confirmButtonText || t("el.popconfirm.confirmButtonText"));
    const finalCancelButtonText = computed(() => props.cancelButtonText || t("el.popconfirm.cancelButtonText"));
    return {
      finalConfirmButtonText,
      finalCancelButtonText,
      tooltipRef,
      ns,
      compatTeleported,
      confirm,
      cancel
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createBlock(_component_el_tooltip, mergeProps({ ref: "tooltipRef" }, _ctx.$attrs, {
    trigger: "click",
    effect: "light",
    "popper-class": `${_ctx.ns.namespace.value}-popover`,
    teleported: _ctx.compatTeleported,
    "fallback-placements": ["bottom", "top", "right", "left"],
    "hide-after": _ctx.hideAfter,
    persistent: ""
  }), {
    content: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.ns.b())
      }, [
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("main"))
        }, [
          !_ctx.hideIcon && _ctx.icon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass(_ctx.ns.e("icon")),
            style: normalizeStyle({ color: _ctx.iconColor })
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
            ]),
            _: 1
          }, 8, ["class", "style"])) : createCommentVNode("v-if", true),
          createTextVNode(" " + toDisplayString(_ctx.title), 1)
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("action"))
        }, [
          createVNode(_component_el_button, {
            size: "small",
            type: _ctx.cancelButtonType,
            onClick: _ctx.cancel
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.finalCancelButtonText), 1)
            ]),
            _: 1
          }, 8, ["type", "onClick"]),
          createVNode(_component_el_button, {
            size: "small",
            type: _ctx.confirmButtonType,
            onClick: _ctx.confirm
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.finalConfirmButtonText), 1)
            ]),
            _: 1
          }, 8, ["type", "onClick"])
        ], 2)
      ], 2)
    ]),
    default: withCtx(() => [
      _ctx.$slots.reference ? renderSlot(_ctx.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 16, ["popper-class", "teleported", "hide-after"]);
}
var Popconfirm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Popconfirm as default };
//# sourceMappingURL=popconfirm2.mjs.map
