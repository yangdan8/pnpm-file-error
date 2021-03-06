import { defineComponent, inject, ref, provide, computed, unref, onMounted, watch, openBlock, createElementBlock, normalizeStyle, normalizeClass, renderSlot } from 'vue';
import { createPopper } from '@popperjs/core';
import '../../../hooks/index.mjs';
import { POPPER_INJECTION_KEY, POPPER_CONTENT_INJECTION_KEY } from './tokens.mjs';
import { usePopperContentProps } from './popper.mjs';
import { buildPopperOptions, unwrapMeasurableEl } from './utils.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useZIndex } from '../../../hooks/use-z-index/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElPopperContent",
  props: usePopperContentProps,
  emits: ["mouseenter", "mouseleave"],
  setup(props) {
    const { triggerRef, popperInstanceRef, contentRef } = inject(POPPER_INJECTION_KEY, void 0);
    const { nextZIndex } = useZIndex();
    const ns = useNamespace("popper");
    const popperContentRef = ref(null);
    const arrowRef = ref(null);
    const arrowOffset = ref();
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset
    });
    const contentZIndex = ref(props.zIndex || nextZIndex());
    const contentStyle = computed(() => [{ zIndex: unref(contentZIndex) }, props.popperStyle]);
    const contentClass = computed(() => [
      ns.b(),
      ns.is("pure", props.pure),
      ns.is(props.effect),
      props.popperClass
    ]);
    const createPopperInstance = ({
      referenceEl,
      popperContentEl,
      arrowEl
    }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: unref(arrowOffset)
      });
      return createPopper(referenceEl, popperContentEl, options);
    };
    const updatePopper = () => {
      var _a;
      (_a = unref(popperInstanceRef)) == null ? void 0 : _a.update();
      contentZIndex.value = props.zIndex || nextZIndex();
    };
    onMounted(() => {
      let updateHandle;
      watch(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef), (val) => {
        var _a;
        updateHandle == null ? void 0 : updateHandle();
        if (val) {
          (_a = popperInstanceRef.value) == null ? void 0 : _a.destroy();
          const popperContentEl = unref(popperContentRef);
          contentRef.value = popperContentEl;
          const arrowEl = unref(arrowRef);
          const newInstance = createPopperInstance({
            referenceEl: val,
            popperContentEl: unref(popperContentRef),
            arrowEl
          });
          popperInstanceRef.value = newInstance;
          updateHandle = watch(() => val.getBoundingClientRect(), () => {
            updatePopper();
          }, {
            immediate: true
          });
        } else {
          popperInstanceRef.value = null;
        }
      }, {
        immediate: true
      });
      watch(() => buildPopperOptions(props, {
        arrowEl: unref(arrowRef),
        arrowOffset: unref(arrowOffset)
      }), (option) => {
        var _a;
        return (_a = popperInstanceRef.value) == null ? void 0 : _a.setOptions(option);
      });
    });
    return {
      ns,
      popperContentRef,
      popperInstanceRef,
      contentStyle,
      contentClass,
      updatePopper
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "popperContentRef",
    style: normalizeStyle(_ctx.contentStyle),
    class: normalizeClass(_ctx.contentClass),
    role: "tooltip",
    onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
    onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 38);
}
var ElPopperContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { ElPopperContent as default };
//# sourceMappingURL=content.mjs.map
