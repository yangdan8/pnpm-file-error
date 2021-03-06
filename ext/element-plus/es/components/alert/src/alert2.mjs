import { defineComponent, ref, computed, resolveComponent, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, resolveDynamicComponent, createCommentVNode, createElementBlock, renderSlot, createTextVNode, toDisplayString, Fragment, createVNode, vShow } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import { alertProps, alertEmits } from './alert.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { TypeComponents, TypeComponentsMap } from '../../../utils/vue/icon.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElAlert",
  components: {
    ElIcon,
    ...TypeComponents
  },
  props: alertProps,
  emits: alertEmits,
  setup(props, { emit, slots }) {
    const ns = useNamespace("alert");
    const visible = ref(true);
    const iconComponent = computed(() => TypeComponentsMap[props.type] || TypeComponentsMap["info"]);
    const isBigIcon = computed(() => props.description || slots.default ? ns.is("big") : "");
    const isBoldTitle = computed(() => props.description || slots.default ? ns.is("bold") : "");
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
  const _component_el_icon = resolveComponent("el-icon");
  const _component_close = resolveComponent("close");
  return openBlock(), createBlock(Transition, {
    name: _ctx.ns.b("fade")
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        class: normalizeClass([_ctx.ns.b(), _ctx.ns.m(_ctx.type), _ctx.ns.is("center", _ctx.center), _ctx.ns.is(_ctx.effect)]),
        role: "alert"
      }, [
        _ctx.showIcon && _ctx.iconComponent ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: normalizeClass([_ctx.ns.e("icon"), _ctx.isBigIcon])
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("content"))
        }, [
          _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([_ctx.ns.e("title"), _ctx.isBoldTitle])
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ], 2)) : createCommentVNode("v-if", true),
          _ctx.$slots.default || _ctx.description ? (openBlock(), createElementBlock("p", {
            key: 1,
            class: normalizeClass(_ctx.ns.e("description"))
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(_ctx.description), 1)
            ])
          ], 2)) : createCommentVNode("v-if", true),
          _ctx.closable ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            _ctx.closeText ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([_ctx.ns.e("close-btn"), _ctx.ns.is("customed")]),
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args))
            }, toDisplayString(_ctx.closeText), 3)) : (openBlock(), createBlock(_component_el_icon, {
              key: 1,
              class: normalizeClass(_ctx.ns.e("close-btn")),
              onClick: _ctx.close
            }, {
              default: withCtx(() => [
                createVNode(_component_close)
              ]),
              _: 1
            }, 8, ["class", "onClick"]))
          ], 2112)) : createCommentVNode("v-if", true)
        ], 2)
      ], 2), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  }, 8, ["name"]);
}
var Alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Alert as default };
//# sourceMappingURL=alert2.mjs.map
