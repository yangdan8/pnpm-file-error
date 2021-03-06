import { defineComponent, inject, watch, resolveComponent, openBlock, createBlock, mergeProps, withCtx, renderSlot, createCommentVNode } from 'vue';
import '../../slot/index.mjs';
import '../../../hooks/index.mjs';
import { usePopperTriggerProps } from './popper.mjs';
import { POPPER_INJECTION_KEY } from './tokens.mjs';
import { unwrapMeasurableEl } from './utils.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import OnlyChild from '../../slot/src/only-child.mjs';
import { useForwardRef } from '../../../hooks/use-forward-ref/index.mjs';

const _sfc_main = defineComponent({
  name: "ElPopperTrigger",
  components: { ElOnlyChild: OnlyChild },
  inheritAttrs: false,
  props: {
    ...usePopperTriggerProps,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
    onKeydown: Function,
    onFocus: Function,
    onBlur: Function,
    onContextmenu: Function,
    id: String,
    open: Boolean
  },
  setup(props) {
    const { triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    watch(() => props.virtualRef, (val) => {
      if (val) {
        triggerRef.value = unwrapMeasurableEl(val);
      }
    }, {
      immediate: true
    });
    watch(() => triggerRef.value, (el, prevEl) => {
      if (el && el instanceof HTMLElement) {
        ;
        [
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((eventName) => {
          const handler = props[eventName];
          if (handler) {
            ;
            el.addEventListener(eventName.slice(2).toLowerCase(), handler);
            prevEl == null ? void 0 : prevEl.removeEventListener(eventName.slice(2).toLowerCase(), handler);
          }
        });
      }
    }, {
      immediate: true
    });
    return {
      triggerRef
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_only_child = resolveComponent("el-only-child");
  return !_ctx.virtualTriggering ? (openBlock(), createBlock(_component_el_only_child, mergeProps({ key: 0 }, _ctx.$attrs, {
    "aria-describedby": _ctx.open ? _ctx.id : void 0
  }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["aria-describedby"])) : createCommentVNode("v-if", true);
}
var ElPopperTrigger = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { ElPopperTrigger as default };
//# sourceMappingURL=trigger.mjs.map
