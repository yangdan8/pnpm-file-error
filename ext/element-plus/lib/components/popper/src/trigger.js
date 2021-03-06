'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../slot/index.js');
require('../../../hooks/index.js');
var popper = require('./popper.js');
var tokens = require('./tokens.js');
var utils = require('./utils.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var onlyChild = require('../../slot/src/only-child.js');
var index = require('../../../hooks/use-forward-ref/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElPopperTrigger",
  components: { ElOnlyChild: onlyChild["default"] },
  inheritAttrs: false,
  props: {
    ...popper.usePopperTriggerProps,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
    onKeydown: Function,
    onFocus: Function,
    onBlur: Function,
    onContextmenu: Function,
    id: String,
    open: Boolean
  },
  setup(props) {
    const { triggerRef } = vue.inject(tokens.POPPER_INJECTION_KEY, void 0);
    index.useForwardRef(triggerRef);
    vue.watch(() => props.virtualRef, (val) => {
      if (val) {
        triggerRef.value = utils.unwrapMeasurableEl(val);
      }
    }, {
      immediate: true
    });
    vue.watch(() => triggerRef.value, (el, prevEl) => {
      if (el && el instanceof HTMLElement) {
        ;
        [
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((eventName) => {
          const handler = props[eventName];
          if (handler) {
            ;
            el.addEventListener(eventName.slice(2).toLowerCase(), handler);
            prevEl == null ? void 0 : prevEl.removeEventListener(eventName.slice(2).toLowerCase(), handler);
          }
        });
      }
    }, {
      immediate: true
    });
    return {
      triggerRef
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_only_child = vue.resolveComponent("el-only-child");
  return !_ctx.virtualTriggering ? (vue.openBlock(), vue.createBlock(_component_el_only_child, vue.mergeProps({ key: 0 }, _ctx.$attrs, {
    "aria-describedby": _ctx.open ? _ctx.id : void 0
  }), {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["aria-describedby"])) : vue.createCommentVNode("v-if", true);
}
var ElPopperTrigger = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = ElPopperTrigger;
//# sourceMappingURL=trigger.js.map
