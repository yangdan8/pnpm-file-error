import { defineComponent, getCurrentInstance, inject, ref, watch, nextTick, openBlock, createElementBlock, normalizeClass, normalizeStyle } from 'vue';
import { capitalize } from '@vue/shared';
import { useResizeObserver } from '@vueuse/core';
import '../../../tokens/index.mjs';
import '../../../utils/index.mjs';
import { tabBar } from './tab-bar.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { tabsRootContextKey } from '../../../tokens/tabs.mjs';
import { throwError } from '../../../utils/error.mjs';

const COMPONENT_NAME = "ElTabBar";
const _sfc_main = defineComponent({
  name: COMPONENT_NAME,
  props: tabBar,
  setup(props) {
    const instance = getCurrentInstance();
    const rootTabs = inject(tabsRootContextKey);
    if (!rootTabs)
      throwError(COMPONENT_NAME, "must use with ElTabs");
    const bar$ = ref();
    const barStyle = ref();
    const getBarStyle = () => {
      let offset = 0;
      let tabSize = 0;
      const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
      const sizeDir = sizeName === "width" ? "x" : "y";
      props.tabs.every((tab) => {
        var _a, _b, _c, _d;
        const $el = (_b = (_a = instance.parent) == null ? void 0 : _a.refs) == null ? void 0 : _b[`tab-${tab.paneName}`];
        if (!$el)
          return false;
        if (!tab.active) {
          return true;
        }
        tabSize = $el[`client${capitalize(sizeName)}`];
        const position = sizeDir === "x" ? "left" : "top";
        offset = $el.getBoundingClientRect()[position] - ((_d = (_c = $el.parentElement) == null ? void 0 : _c.getBoundingClientRect()[position]) != null ? _d : 0);
        const tabStyles = window.getComputedStyle($el);
        if (sizeName === "width") {
          if (props.tabs.length > 1) {
            tabSize -= parseFloat(tabStyles.paddingLeft) + parseFloat(tabStyles.paddingRight);
          }
          offset += parseFloat(tabStyles.paddingLeft);
        }
        return false;
      });
      return {
        [sizeName]: `${tabSize}px`,
        transform: `translate${capitalize(sizeDir)}(${offset}px)`
      };
    };
    const update = () => barStyle.value = getBarStyle();
    watch(() => props.tabs, async () => {
      await nextTick();
      update();
    }, { immediate: true });
    useResizeObserver(bar$, () => update());
    return {
      bar$,
      rootTabs,
      barStyle,
      update
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "bar$",
    class: normalizeClass(["el-tabs__active-bar", `is-${_ctx.rootTabs.props.tabPosition}`]),
    style: normalizeStyle(_ctx.barStyle)
  }, null, 6);
}
var TabBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { TabBar as default };
//# sourceMappingURL=tab-bar2.mjs.map
