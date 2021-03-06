'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@popperjs/core');
require('../../../hooks/index.js');
var tokens = require('./tokens.js');
var popper = require('./popper.js');
var utils = require('./utils.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-z-index/index.js');
var index$1 = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElPopperContent",
  props: popper.usePopperContentProps,
  emits: ["mouseenter", "mouseleave"],
  setup(props) {
    const { triggerRef, popperInstanceRef, contentRef } = vue.inject(tokens.POPPER_INJECTION_KEY, void 0);
    const { nextZIndex } = index.useZIndex();
    const ns = index$1.useNamespace("popper");
    const popperContentRef = vue.ref(null);
    const arrowRef = vue.ref(null);
    const arrowOffset = vue.ref();
    vue.provide(tokens.POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset
    });
    const contentZIndex = vue.ref(props.zIndex || nextZIndex());
    const contentStyle = vue.computed(() => [{ zIndex: vue.unref(contentZIndex) }, props.popperStyle]);
    const contentClass = vue.computed(() => [
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
      const options = utils.buildPopperOptions(props, {
        arrowEl,
        arrowOffset: vue.unref(arrowOffset)
      });
      return core.createPopper(referenceEl, popperContentEl, options);
    };
    const updatePopper = () => {
      var _a;
      (_a = vue.unref(popperInstanceRef)) == null ? void 0 : _a.update();
      contentZIndex.value = props.zIndex || nextZIndex();
    };
    vue.onMounted(() => {
      let updateHandle;
      vue.watch(() => utils.unwrapMeasurableEl(props.referenceEl) || vue.unref(triggerRef), (val) => {
        var _a;
        updateHandle == null ? void 0 : updateHandle();
        if (val) {
          (_a = popperInstanceRef.value) == null ? void 0 : _a.destroy();
          const popperContentEl = vue.unref(popperContentRef);
          contentRef.value = popperContentEl;
          const arrowEl = vue.unref(arrowRef);
          const newInstance = createPopperInstance({
            referenceEl: val,
            popperContentEl: vue.unref(popperContentRef),
            arrowEl
          });
          popperInstanceRef.value = newInstance;
          updateHandle = vue.watch(() => val.getBoundingClientRect(), () => {
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
      vue.watch(() => utils.buildPopperOptions(props, {
        arrowEl: vue.unref(arrowRef),
        arrowOffset: vue.unref(arrowOffset)
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
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "popperContentRef",
    style: vue.normalizeStyle(_ctx.contentStyle),
    class: vue.normalizeClass(_ctx.contentClass),
    role: "tooltip",
    onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
    onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 38);
}
var ElPopperContent = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = ElPopperContent;
//# sourceMappingURL=content.js.map
