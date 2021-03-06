'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var avatar = require('./avatar.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$1 = require('../../../hooks/use-namespace/index.js');
var shared = require('@vue/shared');
var core = require('@vueuse/core');
var style = require('../../../utils/vue/style.js');

const _sfc_main = vue.defineComponent({
  name: "ElAvatar",
  components: {
    ElIcon: index.ElIcon
  },
  props: avatar.avatarProps,
  emits: avatar.avatarEmits,
  setup(props, { emit }) {
    const ns = index$1.useNamespace("avatar");
    const hasLoadError = vue.ref(false);
    const avatarClass = vue.computed(() => {
      const { size, icon, shape } = props;
      const classList = [ns.b()];
      if (shared.isString(size))
        classList.push(ns.m(size));
      if (icon)
        classList.push(ns.m("icon"));
      if (shape)
        classList.push(ns.m(shape));
      return classList;
    });
    const sizeStyle = vue.computed(() => {
      const { size } = props;
      return core.isNumber(size) ? {
        "--el-avatar-size": style.addUnit(size)
      } : void 0;
    });
    const fitStyle = vue.computed(() => ({
      objectFit: props.fit
    }));
    vue.watch(() => props.src, () => hasLoadError.value = false);
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return {
      hasLoadError,
      avatarClass,
      sizeStyle,
      fitStyle,
      handleError
    };
  }
});
const _hoisted_1 = ["src", "alt", "srcset"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("span", {
    class: vue.normalizeClass(_ctx.avatarClass),
    style: vue.normalizeStyle(_ctx.sizeStyle)
  }, [
    (_ctx.src || _ctx.srcSet) && !_ctx.hasLoadError ? (vue.openBlock(), vue.createElementBlock("img", {
      key: 0,
      src: _ctx.src,
      alt: _ctx.alt,
      srcset: _ctx.srcSet,
      style: vue.normalizeStyle(_ctx.fitStyle),
      onError: _cache[0] || (_cache[0] = (...args) => _ctx.handleError && _ctx.handleError(...args))
    }, null, 44, _hoisted_1)) : _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 1 }, {
      default: vue.withCtx(() => [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
      ]),
      _: 1
    })) : vue.renderSlot(_ctx.$slots, "default", { key: 2 })
  ], 6);
}
var Avatar = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Avatar;
//# sourceMappingURL=avatar2.js.map
