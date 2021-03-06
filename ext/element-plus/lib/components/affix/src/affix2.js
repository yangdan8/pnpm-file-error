'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var affix = require('./affix.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');
var scroll = require('../../../utils/dom/scroll.js');

const _sfc_main = vue.defineComponent({
  name: "ElAffix",
  props: affix.affixProps,
  emits: affix.affixEmits,
  setup(props, { emit }) {
    const ns = index.useNamespace("affix");
    const target = vue.shallowRef();
    const root = vue.shallowRef();
    const scrollContainer = vue.shallowRef();
    const state = vue.reactive({
      fixed: false,
      height: 0,
      width: 0,
      scrollTop: 0,
      clientHeight: 0,
      transform: 0
    });
    const rootStyle = vue.computed(() => {
      return {
        height: state.fixed ? `${state.height}px` : "",
        width: state.fixed ? `${state.width}px` : ""
      };
    });
    const affixStyle = vue.computed(() => {
      if (!state.fixed)
        return;
      const offset = props.offset ? `${props.offset}px` : 0;
      const transform = state.transform ? `translateY(${state.transform}px)` : "";
      return {
        height: `${state.height}px`,
        width: `${state.width}px`,
        top: props.position === "top" ? offset : "",
        bottom: props.position === "bottom" ? offset : "",
        transform,
        zIndex: props.zIndex
      };
    });
    const update = () => {
      if (!root.value || !target.value || !scrollContainer.value)
        return;
      const rootRect = root.value.getBoundingClientRect();
      const targetRect = target.value.getBoundingClientRect();
      state.height = rootRect.height;
      state.width = rootRect.width;
      state.scrollTop = scrollContainer.value instanceof Window ? document.documentElement.scrollTop : scrollContainer.value.scrollTop || 0;
      state.clientHeight = document.documentElement.clientHeight;
      if (props.position === "top") {
        if (props.target) {
          const difference = targetRect.bottom - props.offset - state.height;
          state.fixed = props.offset > rootRect.top && targetRect.bottom > 0;
          state.transform = difference < 0 ? difference : 0;
        } else {
          state.fixed = props.offset > rootRect.top;
        }
      } else {
        if (props.target) {
          const difference = state.clientHeight - targetRect.top - props.offset - state.height;
          state.fixed = state.clientHeight - props.offset < rootRect.bottom && state.clientHeight > targetRect.top;
          state.transform = difference < 0 ? -difference : 0;
        } else {
          state.fixed = state.clientHeight - props.offset < rootRect.bottom;
        }
      }
    };
    const onScroll = () => {
      update();
      emit("scroll", {
        scrollTop: state.scrollTop,
        fixed: state.fixed
      });
    };
    vue.watch(() => state.fixed, () => {
      emit("change", state.fixed);
    });
    vue.onMounted(() => {
      var _a;
      if (props.target) {
        target.value = (_a = document.querySelector(props.target)) != null ? _a : void 0;
        if (!target.value) {
          throw new Error(`Target is not existed: ${props.target}`);
        }
      } else {
        target.value = document.documentElement;
      }
      scrollContainer.value = scroll.getScrollContainer(root.value, true);
    });
    core.useEventListener(scrollContainer, "scroll", onScroll);
    core.useResizeObserver(root, () => update());
    core.useResizeObserver(target, () => update());
    return {
      ns,
      root,
      state,
      rootStyle,
      affixStyle,
      update
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "root",
    class: vue.normalizeClass(_ctx.ns.b()),
    style: vue.normalizeStyle(_ctx.rootStyle)
  }, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass({ [_ctx.ns.m("fixed")]: _ctx.state.fixed }),
      style: vue.normalizeStyle(_ctx.affixStyle)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6)
  ], 6);
}
var Affix = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Affix;
//# sourceMappingURL=affix2.js.map
