'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../tokens/index.js');
require('../../../utils/index.js');
var tabPane = require('./tab-pane.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var tabs = require('../../../tokens/tabs.js');
var error = require('../../../utils/error.js');

const COMPONENT_NAME = "ElTabPane";
const _sfc_main = vue.defineComponent({
  name: COMPONENT_NAME,
  props: tabPane.tabPaneProps,
  setup(props) {
    const instance = vue.getCurrentInstance();
    const tabsRoot = vue.inject(tabs.tabsRootContextKey);
    if (!tabsRoot)
      error.throwError(COMPONENT_NAME, `must use with ElTabs`);
    const index = vue.ref();
    const loaded = vue.ref(false);
    const isClosable = vue.computed(() => props.closable || tabsRoot.props.closable);
    const active = core.eagerComputed(() => tabsRoot.currentName.value === (props.name || index.value));
    const paneName = vue.computed(() => props.name || index.value);
    const shouldBeRender = core.eagerComputed(() => !props.lazy || loaded.value || active.value);
    vue.watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    tabsRoot.updatePaneState(vue.reactive({
      uid: instance.uid,
      instance: vue.markRaw(instance),
      props,
      paneName,
      active,
      index,
      isClosable
    }));
    return {
      active,
      paneName,
      shouldBeRender
    };
  }
});
const _hoisted_1 = ["id", "aria-hidden", "aria-labelledby"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.shouldBeRender ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    id: `pane-${_ctx.paneName}`,
    class: "el-tab-pane",
    role: "tabpanel",
    "aria-hidden": !_ctx.active,
    "aria-labelledby": `tab-${_ctx.paneName}`
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1)), [
    [vue.vShow, _ctx.active]
  ]) : vue.createCommentVNode("v-if", true);
}
var TabPane = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = TabPane;
//# sourceMappingURL=tab-pane2.js.map
