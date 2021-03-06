'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../tooltip/index.js');
require('../../popper/index.js');
require('../../../utils/index.js');
var useMenu = require('./use-menu.js');
var menuItem = require('./menu-item.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var error = require('../../../utils/error.js');
var popper = require('../../popper/src/popper.js');

const COMPONENT_NAME = "ElMenuItem";
const _sfc_main = vue.defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElTooltip: index.ElTooltip
  },
  props: menuItem.menuItemProps,
  emits: menuItem.menuItemEmits,
  setup(props, { emit }) {
    const instance = vue.getCurrentInstance();
    const rootMenu = vue.inject("rootMenu");
    if (!rootMenu)
      error.throwError(COMPONENT_NAME, "can not inject root menu");
    const { parentMenu, paddingStyle, indexPath } = useMenu["default"](instance, vue.toRef(props, "index"));
    const subMenu = vue.inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      error.throwError(COMPONENT_NAME, "can not inject sub menu");
    const active = vue.computed(() => props.index === rootMenu.activeIndex);
    const item = vue.reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    vue.onMounted(() => {
      subMenu.addSubMenu(item);
      rootMenu.addMenuItem(item);
    });
    vue.onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeMenuItem(item);
    });
    return {
      Effect: popper.Effect,
      parentMenu,
      rootMenu,
      paddingStyle,
      active,
      handleClick
    };
  }
});
const _hoisted_1 = { style: {
  position: "absolute",
  left: 0,
  top: 0,
  height: "100%",
  width: "100%",
  display: "inline-block",
  boxSizing: "border-box",
  padding: "0 20px"
} };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = vue.resolveComponent("el-tooltip");
  return vue.openBlock(), vue.createElementBlock("li", {
    class: vue.normalizeClass(["el-menu-item", {
      "is-active": _ctx.active,
      "is-disabled": _ctx.disabled
    }]),
    role: "menuitem",
    tabindex: "-1",
    style: vue.normalizeStyle(_ctx.paddingStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (vue.openBlock(), vue.createBlock(_component_el_tooltip, {
      key: 0,
      effect: _ctx.Effect.DARK,
      placement: "right",
      persistent: ""
    }, {
      content: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "title")
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["effect"])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
      vue.renderSlot(_ctx.$slots, "default"),
      vue.renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 6);
}
var MenuItem = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = MenuItem;
//# sourceMappingURL=menu-item2.js.map
