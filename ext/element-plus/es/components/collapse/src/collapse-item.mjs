import { defineComponent, inject, ref, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, withKeys, withModifiers, renderSlot, createTextVNode, toDisplayString, createVNode, withCtx, withDirectives, vShow } from 'vue';
import '../../../utils/index.mjs';
import _CollapseTransition from '../../collapse-transition/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { ArrowRight } from '@element-plus/icons-vue';
import '../../../hooks/index.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { generateId } from '../../../utils/rand.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElCollapseItem",
  components: { ElCollapseTransition: _CollapseTransition, ElIcon, ArrowRight },
  props: {
    title: {
      type: String,
      default: ""
    },
    name: {
      type: [String, Number],
      default: () => {
        return generateId();
      }
    },
    disabled: Boolean
  },
  setup(props) {
    const collapse = inject("collapse");
    const ns = useNamespace("collapse");
    const contentWrapStyle = ref({
      height: "auto",
      display: "block"
    });
    const contentHeight = ref(0);
    const focusing = ref(false);
    const isClick = ref(false);
    const id = ref(generateId());
    const isActive = computed(() => {
      return (collapse == null ? void 0 : collapse.activeNames.value.indexOf(props.name)) > -1;
    });
    const handleFocus = () => {
      setTimeout(() => {
        if (!isClick.value) {
          focusing.value = true;
        } else {
          isClick.value = false;
        }
      }, 50);
    };
    const handleHeaderClick = () => {
      if (props.disabled)
        return;
      collapse == null ? void 0 : collapse.handleItemClick(props.name);
      focusing.value = false;
      isClick.value = true;
    };
    const handleEnterClick = () => {
      collapse == null ? void 0 : collapse.handleItemClick(props.name);
    };
    return {
      isActive,
      contentWrapStyle,
      contentHeight,
      focusing,
      isClick,
      id,
      ns,
      handleFocus,
      handleHeaderClick,
      handleEnterClick,
      collapse
    };
  }
});
const _hoisted_1 = ["aria-expanded", "aria-controls", "aria-describedby"];
const _hoisted_2 = ["id", "tabindex"];
const _hoisted_3 = ["id", "aria-hidden", "aria-labelledby"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_right = resolveComponent("arrow-right");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_collapse_transition = resolveComponent("el-collapse-transition");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      _ctx.ns.b("item"),
      _ctx.ns.is("active", _ctx.isActive),
      _ctx.ns.is("disabled", _ctx.disabled)
    ])
  }, [
    createElementVNode("div", {
      role: "tab",
      "aria-expanded": _ctx.isActive,
      "aria-controls": _ctx.ns.b(`content-${_ctx.id}`),
      "aria-describedby": _ctx.ns.b(`content-${_ctx.id}`)
    }, [
      createElementVNode("div", {
        id: _ctx.ns.b(`head-${_ctx.id}`),
        class: normalizeClass([
          _ctx.ns.be("item", "header"),
          _ctx.ns.is("active", _ctx.isActive),
          { focusing: _ctx.focusing }
        ]),
        role: "button",
        tabindex: _ctx.disabled ? -1 : 0,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleHeaderClick && _ctx.handleHeaderClick(...args)),
        onKeyup: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => _ctx.handleEnterClick && _ctx.handleEnterClick(...args), ["stop"]), ["space", "enter"])),
        onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.focusing = false)
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ]),
        createVNode(_component_el_icon, {
          class: normalizeClass([_ctx.ns.be("item", "arrow"), _ctx.ns.is("active", _ctx.isActive)])
        }, {
          default: withCtx(() => [
            createVNode(_component_arrow_right)
          ]),
          _: 1
        }, 8, ["class"])
      ], 42, _hoisted_2)
    ], 8, _hoisted_1),
    createVNode(_component_el_collapse_transition, null, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          id: _ctx.ns.b(`content-${_ctx.id}`),
          class: normalizeClass(_ctx.ns.be("item", "wrap")),
          role: "tabpanel",
          "aria-hidden": !_ctx.isActive,
          "aria-labelledby": _ctx.ns.b(`head-${_ctx.id}`)
        }, [
          createElementVNode("div", {
            class: normalizeClass(_ctx.ns.be("item", "content"))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 10, _hoisted_3), [
          [vShow, _ctx.isActive]
        ])
      ]),
      _: 3
    })
  ], 2);
}
var CollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { CollapseItem as default };
//# sourceMappingURL=collapse-item.mjs.map
