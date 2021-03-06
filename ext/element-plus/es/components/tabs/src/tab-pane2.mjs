import { defineComponent, getCurrentInstance, inject, ref, computed, watch, reactive, markRaw, withDirectives, openBlock, createElementBlock, renderSlot, vShow, createCommentVNode } from 'vue';
import { eagerComputed } from '@vueuse/core';
import '../../../tokens/index.mjs';
import '../../../utils/index.mjs';
import { tabPaneProps } from './tab-pane.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { tabsRootContextKey } from '../../../tokens/tabs.mjs';
import { throwError } from '../../../utils/error.mjs';

const COMPONENT_NAME = "ElTabPane";
const _sfc_main = defineComponent({
  name: COMPONENT_NAME,
  props: tabPaneProps,
  setup(props) {
    const instance = getCurrentInstance();
    const tabsRoot = inject(tabsRootContextKey);
    if (!tabsRoot)
      throwError(COMPONENT_NAME, `must use with ElTabs`);
    const index = ref();
    const loaded = ref(false);
    const isClosable = computed(() => props.closable || tabsRoot.props.closable);
    const active = eagerComputed(() => tabsRoot.currentName.value === (props.name || index.value));
    const paneName = computed(() => props.name || index.value);
    const shouldBeRender = eagerComputed(() => !props.lazy || loaded.value || active.value);
    watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    tabsRoot.updatePaneState(reactive({
      uid: instance.uid,
      instance: markRaw(instance),
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
  return _ctx.shouldBeRender ? withDirectives((openBlock(), createElementBlock("div", {
    key: 0,
    id: `pane-${_ctx.paneName}`,
    class: "el-tab-pane",
    role: "tabpanel",
    "aria-hidden": !_ctx.active,
    "aria-labelledby": `tab-${_ctx.paneName}`
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1)), [
    [vShow, _ctx.active]
  ]) : createCommentVNode("v-if", true);
}
var TabPane = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { TabPane as default };
//# sourceMappingURL=tab-pane2.mjs.map
