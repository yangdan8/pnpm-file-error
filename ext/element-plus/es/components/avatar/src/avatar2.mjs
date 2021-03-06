import { defineComponent, ref, computed, watch, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createBlock, withCtx, resolveDynamicComponent, renderSlot } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import { avatarProps, avatarEmits } from './avatar.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { isString } from '@vue/shared';
import { isNumber } from '@vueuse/core';
import { addUnit } from '../../../utils/vue/style.mjs';

const _sfc_main = defineComponent({
  name: "ElAvatar",
  components: {
    ElIcon
  },
  props: avatarProps,
  emits: avatarEmits,
  setup(props, { emit }) {
    const ns = useNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const { size, icon, shape } = props;
      const classList = [ns.b()];
      if (isString(size))
        classList.push(ns.m(size));
      if (icon)
        classList.push(ns.m("icon"));
      if (shape)
        classList.push(ns.m(shape));
      return classList;
    });
    const sizeStyle = computed(() => {
      const { size } = props;
      return isNumber(size) ? {
        "--el-avatar-size": addUnit(size)
      } : void 0;
    });
    const fitStyle = computed(() => ({
      objectFit: props.fit
    }));
    watch(() => props.src, () => hasLoadError.value = false);
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
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.avatarClass),
    style: normalizeStyle(_ctx.sizeStyle)
  }, [
    (_ctx.src || _ctx.srcSet) && !_ctx.hasLoadError ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: _ctx.src,
      alt: _ctx.alt,
      srcset: _ctx.srcSet,
      style: normalizeStyle(_ctx.fitStyle),
      onError: _cache[0] || (_cache[0] = (...args) => _ctx.handleError && _ctx.handleError(...args))
    }, null, 44, _hoisted_1)) : _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
      ]),
      _: 1
    })) : renderSlot(_ctx.$slots, "default", { key: 2 })
  ], 6);
}
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Avatar as default };
//# sourceMappingURL=avatar2.mjs.map
