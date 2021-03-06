'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index.js');
var badge = require('./badge.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElBadge",
  props: badge.badgeProps,
  setup(props) {
    const ns = index.useNamespace("badge");
    const content = vue.computed(() => {
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
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(_ctx.ns.b())
  }, [
    vue.renderSlot(_ctx.$slots, "default"),
    vue.createVNode(vue.Transition, {
      name: `${_ctx.ns.namespace.value}-zoom-in-center`
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("sup", {
          class: vue.normalizeClass([
            _ctx.ns.e("content"),
            _ctx.ns.em("content", _ctx.type),
            _ctx.ns.is("fixed", !!_ctx.$slots.default),
            _ctx.ns.is("dot", _ctx.isDot)
          ]),
          textContent: vue.toDisplayString(_ctx.content)
        }, null, 10, _hoisted_1), [
          [vue.vShow, !_ctx.hidden && (_ctx.content || _ctx.content === "0" || _ctx.isDot)]
        ])
      ]),
      _: 1
    }, 8, ["name"])
  ], 2);
}
var Badge = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Badge;
//# sourceMappingURL=badge2.js.map
