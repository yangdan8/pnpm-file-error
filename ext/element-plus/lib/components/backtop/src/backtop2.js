'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
var index = require('../../icon/index.js');
require('../../../utils/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index.js');
var backtop = require('./backtop.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$1 = require('../../../hooks/use-namespace/index.js');
var animation = require('../../../utils/animation.js');
var error = require('../../../utils/error.js');

const COMPONENT_NAME = "ElBacktop";
const _sfc_main = vue.defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElIcon: index.ElIcon,
    CaretTop: iconsVue.CaretTop
  },
  props: backtop.backtopProps,
  emits: backtop.backtopEmits,
  setup(props, { emit }) {
    const ns = index$1.useNamespace("backtop");
    const el = vue.shallowRef(document.documentElement);
    const container = vue.shallowRef(document);
    const visible = vue.ref(false);
    const styleBottom = vue.computed(() => `${props.bottom}px`);
    const styleRight = vue.computed(() => `${props.right}px`);
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
          el.value.scrollTop = beginValue * (1 - animation.easeInOutCubic(progress));
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
    const handleScrollThrottled = core.useThrottleFn(handleScroll, 300);
    vue.onMounted(() => {
      var _a;
      if (props.target) {
        el.value = (_a = document.querySelector(props.target)) != null ? _a : void 0;
        if (!el.value) {
          error.throwError(COMPONENT_NAME, `target is not existed: ${props.target}`);
        }
        container.value = el.value;
      }
      core.useEventListener(container, "scroll", handleScrollThrottled);
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
  const _component_caret_top = vue.resolveComponent("caret-top");
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createBlock(vue.Transition, {
    name: `${_ctx.ns.namespace.value}-fade-in`
  }, {
    default: vue.withCtx(() => [
      _ctx.visible ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        style: vue.normalizeStyle({
          right: _ctx.styleRight,
          bottom: _ctx.styleBottom
        }),
        class: vue.normalizeClass(_ctx.ns.b()),
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"]))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createVNode(_component_el_icon, {
            class: vue.normalizeClass(_ctx.ns.e("icon"))
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_caret_top)
            ]),
            _: 1
          }, 8, ["class"])
        ])
      ], 6)) : vue.createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 8, ["name"]);
}
var Backtop = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Backtop;
//# sourceMappingURL=backtop2.js.map
