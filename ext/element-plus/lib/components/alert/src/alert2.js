'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var alert = require('./alert.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var icon = require('../../../utils/vue/icon.js');
var index$1 = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElAlert",
  components: {
    ElIcon: index.ElIcon,
    ...icon.TypeComponents
  },
  props: alert.alertProps,
  emits: alert.alertEmits,
  setup(props, { emit, slots }) {
    const ns = index$1.useNamespace("alert");
    const visible = vue.ref(true);
    const iconComponent = vue.computed(() => icon.TypeComponentsMap[props.type] || icon.TypeComponentsMap["info"]);
    const isBigIcon = vue.computed(() => props.description || slots.default ? ns.is("big") : "");
    const isBoldTitle = vue.computed(() => props.description || slots.default ? ns.is("bold") : "");
    const close = (evt) => {
      visible.value = false;
      emit("close", evt);
    };
    return {
      ns,
      visible,
      iconComponent,
      isBigIcon,
      isBoldTitle,
      close
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_close = vue.resolveComponent("close");
  return vue.openBlock(), vue.createBlock(vue.Transition, {
    name: _ctx.ns.b("fade")
  }, {
    default: vue.withCtx(() => [
      vue.withDirectives(vue.createElementVNode("div", {
        class: vue.normalizeClass([_ctx.ns.b(), _ctx.ns.m(_ctx.type), _ctx.ns.is("center", _ctx.center), _ctx.ns.is(_ctx.effect)]),
        role: "alert"
      }, [
        _ctx.showIcon && _ctx.iconComponent ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
          key: 0,
          class: vue.normalizeClass([_ctx.ns.e("icon"), _ctx.isBigIcon])
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.ns.e("content"))
        }, [
          _ctx.title || _ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass([_ctx.ns.e("title"), _ctx.isBoldTitle])
          }, [
            vue.renderSlot(_ctx.$slots, "title", {}, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
            ])
          ], 2)) : vue.createCommentVNode("v-if", true),
          _ctx.$slots.default || _ctx.description ? (vue.openBlock(), vue.createElementBlock("p", {
            key: 1,
            class: vue.normalizeClass(_ctx.ns.e("description"))
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.description), 1)
            ])
          ], 2)) : vue.createCommentVNode("v-if", true),
          _ctx.closable ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
            _ctx.closeText ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass([_ctx.ns.e("close-btn"), _ctx.ns.is("customed")]),
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args))
            }, vue.toDisplayString(_ctx.closeText), 3)) : (vue.openBlock(), vue.createBlock(_component_el_icon, {
              key: 1,
              class: vue.normalizeClass(_ctx.ns.e("close-btn")),
              onClick: _ctx.close
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_close)
              ]),
              _: 1
            }, 8, ["class", "onClick"]))
          ], 2112)) : vue.createCommentVNode("v-if", true)
        ], 2)
      ], 2), [
        [vue.vShow, _ctx.visible]
      ])
    ]),
    _: 3
  }, 8, ["name"]);
}
var Alert = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Alert;
//# sourceMappingURL=alert2.js.map
