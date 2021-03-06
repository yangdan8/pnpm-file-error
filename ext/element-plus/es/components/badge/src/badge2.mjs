import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot, createVNode, Transition, withCtx, withDirectives, createElementVNode, toDisplayString, vShow } from 'vue';
import '../../../hooks/index.mjs';
import { badgeProps } from './badge.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElBadge",
  props: badgeProps,
  setup(props) {
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (typeof props.value === "number" && typeof props.max === "number") {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    return {
      ns,
      content
    };
  }
});
const _hoisted_1 = ["textContent"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    renderSlot(_ctx.$slots, "default"),
    createVNode(Transition, {
      name: `${_ctx.ns.namespace.value}-zoom-in-center`
    }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("sup", {
          class: normalizeClass([
            _ctx.ns.e("content"),
            _ctx.ns.em("content", _ctx.type),
            _ctx.ns.is("fixed", !!_ctx.$slots.default),
            _ctx.ns.is("dot", _ctx.isDot)
          ]),
          textContent: toDisplayString(_ctx.content)
        }, null, 10, _hoisted_1), [
          [vShow, !_ctx.hidden && (_ctx.content || _ctx.content === "0" || _ctx.isDot)]
        ])
      ]),
      _: 1
    }, 8, ["name"])
  ], 2);
}
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Badge as default };
//# sourceMappingURL=badge2.mjs.map
