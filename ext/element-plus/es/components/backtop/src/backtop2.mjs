import { defineComponent, shallowRef, ref, computed, onMounted, resolveComponent, openBlock, createBlock, Transition, withCtx, createElementBlock, normalizeStyle, normalizeClass, withModifiers, renderSlot, createVNode, createCommentVNode } from 'vue';
import { useThrottleFn, useEventListener } from '@vueuse/core';
import { ElIcon } from '../../icon/index.mjs';
import '../../../utils/index.mjs';
import { CaretTop } from '@element-plus/icons-vue';
import '../../../hooks/index.mjs';
import { backtopProps, backtopEmits } from './backtop.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { easeInOutCubic } from '../../../utils/animation.mjs';
import { throwError } from '../../../utils/error.mjs';

const COMPONENT_NAME = "ElBacktop";
const _sfc_main = defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElIcon,
    CaretTop
  },
  props: backtopProps,
  emits: backtopEmits,
  setup(props, { emit }) {
    const ns = useNamespace("backtop");
    const el = shallowRef(document.documentElement);
    const container = shallowRef(document);
    const visible = ref(false);
    const styleBottom = computed(() => `${props.bottom}px`);
    const styleRight = computed(() => `${props.right}px`);
    const scrollToTop = () => {
      if (!el.value)
        return;
      const beginTime = Date.now();
      const beginValue = el.value.scrollTop;
      const frameFunc = () => {
        if (!el.value)
          return;
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1) {
          el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress));
          requestAnimationFrame(frameFunc);
        } else {
          el.value.scrollTop = 0;
        }
      };
      requestAnimationFrame(frameFunc);
    };
    const handleScroll = () => {
      if (el.value)
        visible.value = el.value.scrollTop >= props.visibilityHeight;
    };
    const handleClick = (event) => {
      scrollToTop();
      emit("click", event);
    };
    const handleScrollThrottled = useThrottleFn(handleScroll, 300);
    onMounted(() => {
      var _a;
      if (props.target) {
        el.value = (_a = document.querySelector(props.target)) != null ? _a : void 0;
        if (!el.value) {
          throwError(COMPONENT_NAME, `target is not existed: ${props.target}`);
        }
        container.value = el.value;
      }
      useEventListener(container, "scroll", handleScrollThrottled);
    });
    return {
      visible,
      styleBottom,
      styleRight,
      handleClick,
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_caret_top = resolveComponent("caret-top");
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createBlock(Transition, {
    name: `${_ctx.ns.namespace.value}-fade-in`
  }, {
    default: withCtx(() => [
      _ctx.visible ? (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle({
          right: _ctx.styleRight,
          bottom: _ctx.styleBottom
        }),
        class: normalizeClass(_ctx.ns.b()),
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"]))
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createVNode(_component_el_icon, {
            class: normalizeClass(_ctx.ns.e("icon"))
          }, {
            default: withCtx(() => [
              createVNode(_component_caret_top)
            ]),
            _: 1
          }, 8, ["class"])
        ])
      ], 6)) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 8, ["name"]);
}
var Backtop = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Backtop as default };
//# sourceMappingURL=backtop2.mjs.map
