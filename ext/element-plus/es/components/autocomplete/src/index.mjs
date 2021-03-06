import { defineComponent, ref, computed, nextTick, onMounted, resolveComponent, resolveDirective, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, normalizeStyle, createVNode, createElementBlock, Fragment, renderList, renderSlot, createTextVNode, toDisplayString, withDirectives, mergeProps, withKeys, withModifiers, createSlots } from 'vue';
import { NOOP, isArray } from '@vue/shared';
import { debounce } from 'lodash-unified';
import '../../../hooks/index.mjs';
import '../../../directives/index.mjs';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { ElInput } from '../../input/index.mjs';
import { ElScrollbar } from '../../scrollbar/index.mjs';
import { ElTooltip } from '../../tooltip/index.mjs';
import '../../popper/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { Loading } from '@element-plus/icons-vue';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import ClickOutside from '../../../directives/click-outside/index.mjs';
import { useTooltipContentProps } from '../../tooltip/src/tooltip.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { useDeprecateAppendToBody } from '../../popper/src/deprecation.mjs';
import { useAttrs } from '../../../hooks/use-attrs/index.mjs';
import { generateId } from '../../../utils/rand.mjs';
import { throwError } from '../../../utils/error.mjs';

const COMPONENT_NAME = "ElAutocomplete";
const _sfc_main = defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElTooltip,
    ElInput,
    ElScrollbar,
    ElIcon,
    Loading
  },
  directives: {
    clickoutside: ClickOutside
  },
  inheritAttrs: false,
  props: {
    valueKey: {
      type: String,
      default: "value"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    debounce: {
      type: Number,
      default: 300
    },
    placement: {
      type: String,
      validator: (val) => {
        return [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end"
        ].includes(val);
      },
      default: "bottom-start"
    },
    fetchSuggestions: {
      type: Function,
      default: NOOP
    },
    popperClass: {
      type: String,
      default: ""
    },
    triggerOnFocus: {
      type: Boolean,
      default: true
    },
    selectWhenUnmatched: {
      type: Boolean,
      default: false
    },
    hideLoading: {
      type: Boolean,
      default: false
    },
    popperAppendToBody: {
      type: Boolean,
      default: void 0
    },
    teleported: useTooltipContentProps.teleported,
    highlightFirstItem: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    "input",
    "change",
    "focus",
    "blur",
    "clear",
    "select"
  ],
  setup(props, ctx) {
    const ns = useNamespace("autocomplete");
    const { compatTeleported } = useDeprecateAppendToBody(COMPONENT_NAME, "popperAppendToBody");
    const attrs = useAttrs();
    const suggestions = ref([]);
    const highlightedIndex = ref(-1);
    const dropdownWidth = ref("");
    const activated = ref(false);
    const suggestionDisabled = ref(false);
    const loading = ref(false);
    const inputRef = ref(null);
    const regionRef = ref(null);
    const popper = ref(null);
    const id = computed(() => {
      return ns.b(String(generateId()));
    });
    const suggestionVisible = computed(() => {
      const isValidData = isArray(suggestions.value) && suggestions.value.length > 0;
      return (isValidData || loading.value) && activated.value;
    });
    const suggestionLoading = computed(() => {
      return !props.hideLoading && loading.value;
    });
    const onSuggestionShow = () => {
      nextTick(() => {
        if (suggestionVisible.value) {
          dropdownWidth.value = `${inputRef.value.$el.offsetWidth}px`;
        }
      });
    };
    onMounted(() => {
      inputRef.value.inputOrTextarea.setAttribute("role", "textbox");
      inputRef.value.inputOrTextarea.setAttribute("aria-autocomplete", "list");
      inputRef.value.inputOrTextarea.setAttribute("aria-controls", "id");
      inputRef.value.inputOrTextarea.setAttribute("aria-activedescendant", `${id.value}-item-${highlightedIndex.value}`);
    });
    const getData = (queryString) => {
      if (suggestionDisabled.value) {
        return;
      }
      loading.value = true;
      props.fetchSuggestions(queryString, (suggestionsArg) => {
        loading.value = false;
        if (suggestionDisabled.value) {
          return;
        }
        if (isArray(suggestionsArg)) {
          suggestions.value = suggestionsArg;
          highlightedIndex.value = props.highlightFirstItem ? 0 : -1;
        } else {
          throwError("ElAutocomplete", "autocomplete suggestions must be an array");
        }
      });
    };
    const debouncedGetData = debounce(getData, props.debounce);
    const handleInput = (value) => {
      ctx.emit("input", value);
      ctx.emit(UPDATE_MODEL_EVENT, value);
      suggestionDisabled.value = false;
      if (!props.triggerOnFocus && !value) {
        suggestionDisabled.value = true;
        suggestions.value = [];
        return;
      }
      debouncedGetData(value);
    };
    const handleChange = (value) => {
      ctx.emit("change", value);
    };
    const handleFocus = (e) => {
      activated.value = true;
      ctx.emit("focus", e);
      if (props.triggerOnFocus) {
        debouncedGetData(String(props.modelValue));
      }
    };
    const handleBlur = (e) => {
      ctx.emit("blur", e);
    };
    const handleClear = () => {
      activated.value = false;
      ctx.emit(UPDATE_MODEL_EVENT, "");
      ctx.emit("clear");
    };
    const handleKeyEnter = () => {
      if (suggestionVisible.value && highlightedIndex.value >= 0 && highlightedIndex.value < suggestions.value.length) {
        select(suggestions.value[highlightedIndex.value]);
      } else if (props.selectWhenUnmatched) {
        ctx.emit("select", { value: props.modelValue });
        nextTick(() => {
          suggestions.value = [];
          highlightedIndex.value = -1;
        });
      }
    };
    const close = () => {
      activated.value = false;
    };
    const focus = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const select = (item) => {
      ctx.emit("input", item[props.valueKey]);
      ctx.emit(UPDATE_MODEL_EVENT, item[props.valueKey]);
      ctx.emit("select", item);
      nextTick(() => {
        suggestions.value = [];
        highlightedIndex.value = -1;
      });
    };
    const highlight = (index) => {
      if (!suggestionVisible.value || loading.value) {
        return;
      }
      if (index < 0) {
        highlightedIndex.value = -1;
        return;
      }
      if (index >= suggestions.value.length) {
        index = suggestions.value.length - 1;
      }
      const suggestion = regionRef.value.querySelector(`.${ns.be("suggestion", "wrap")}`);
      const suggestionList = suggestion.querySelectorAll(`.${ns.be("suggestion", "list")} li`);
      const highlightItem = suggestionList[index];
      const scrollTop = suggestion.scrollTop;
      const { offsetTop, scrollHeight } = highlightItem;
      if (offsetTop + scrollHeight > scrollTop + suggestion.clientHeight) {
        suggestion.scrollTop += scrollHeight;
      }
      if (offsetTop < scrollTop) {
        suggestion.scrollTop -= scrollHeight;
      }
      highlightedIndex.value = index;
      inputRef.value.inputOrTextarea.setAttribute("aria-activedescendant", `${id.value}-item-${highlightedIndex.value}`);
    };
    return {
      attrs,
      suggestions,
      highlightedIndex,
      dropdownWidth,
      activated,
      suggestionDisabled,
      loading,
      inputRef,
      regionRef,
      popper,
      id,
      suggestionVisible,
      suggestionLoading,
      compatTeleported,
      getData,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleClear,
      handleKeyEnter,
      close,
      focus,
      select,
      highlight,
      onSuggestionShow,
      ns
    };
  }
});
const _hoisted_1 = ["aria-expanded", "aria-owns"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["id", "aria-selected", "onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_loading = resolveComponent("loading");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(_component_el_tooltip, {
    ref: "popper",
    visible: _ctx.suggestionVisible,
    "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => _ctx.suggestionVisible = $event),
    placement: _ctx.placement,
    "fallback-placements": ["bottom-start", "top-start"],
    "popper-class": `${_ctx.ns.e("popper")} ${_ctx.popperClass}`,
    teleported: _ctx.compatTeleported,
    "gpu-acceleration": false,
    pure: "",
    "manual-mode": "",
    effect: "light",
    trigger: "click",
    transition: `${_ctx.ns.namespace.value}-zoom-in-top`,
    persistent: "",
    onShow: _ctx.onSuggestionShow
  }, {
    content: withCtx(() => [
      createElementVNode("div", {
        ref: "regionRef",
        class: normalizeClass([_ctx.ns.b("suggestion"), _ctx.ns.is("loading", _ctx.suggestionLoading)]),
        style: normalizeStyle({ minWidth: _ctx.dropdownWidth, outline: "none" }),
        role: "region"
      }, [
        createVNode(_component_el_scrollbar, {
          id: _ctx.id,
          tag: "ul",
          "wrap-class": _ctx.ns.be("suggestion", "wrap"),
          "view-class": _ctx.ns.be("suggestion", "list"),
          role: "listbox"
        }, {
          default: withCtx(() => [
            _ctx.suggestionLoading ? (openBlock(), createElementBlock("li", _hoisted_2, [
              createVNode(_component_el_icon, { class: "is-loading" }, {
                default: withCtx(() => [
                  createVNode(_component_loading)
                ]),
                _: 1
              })
            ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.suggestions, (item, index) => {
              return openBlock(), createElementBlock("li", {
                id: `${_ctx.id}-item-${index}`,
                key: index,
                class: normalizeClass({ highlighted: _ctx.highlightedIndex === index }),
                role: "option",
                "aria-selected": _ctx.highlightedIndex === index,
                onClick: ($event) => _ctx.select(item)
              }, [
                renderSlot(_ctx.$slots, "default", { item }, () => [
                  createTextVNode(toDisplayString(item[_ctx.valueKey]), 1)
                ])
              ], 10, _hoisted_3);
            }), 128))
          ]),
          _: 3
        }, 8, ["id", "wrap-class", "view-class"])
      ], 6)
    ]),
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.ns.b(), _ctx.$attrs.class]),
        style: normalizeStyle(_ctx.$attrs.style),
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": _ctx.suggestionVisible,
        "aria-owns": _ctx.id
      }, [
        createVNode(_component_el_input, mergeProps({ ref: "inputRef" }, _ctx.attrs, {
          "model-value": _ctx.modelValue,
          onInput: _ctx.handleInput,
          onChange: _ctx.handleChange,
          onFocus: _ctx.handleFocus,
          onBlur: _ctx.handleBlur,
          onClear: _ctx.handleClear,
          onKeydown: [
            _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => _ctx.highlight(_ctx.highlightedIndex - 1), ["prevent"]), ["up"])),
            _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.highlight(_ctx.highlightedIndex + 1), ["prevent"]), ["down"])),
            withKeys(_ctx.handleKeyEnter, ["enter"]),
            withKeys(_ctx.close, ["tab"])
          ]
        }), createSlots({ _: 2 }, [
          _ctx.$slots.prepend ? {
            name: "prepend",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "prepend")
            ])
          } : void 0,
          _ctx.$slots.append ? {
            name: "append",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "append")
            ])
          } : void 0,
          _ctx.$slots.prefix ? {
            name: "prefix",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "prefix")
            ])
          } : void 0,
          _ctx.$slots.suffix ? {
            name: "suffix",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "suffix")
            ])
          } : void 0
        ]), 1040, ["model-value", "onInput", "onChange", "onFocus", "onBlur", "onClear", "onKeydown"])
      ], 14, _hoisted_1)), [
        [_directive_clickoutside, _ctx.close]
      ])
    ]),
    _: 3
  }, 8, ["visible", "placement", "popper-class", "teleported", "transition", "onShow"]);
}
var Autocomplete = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Autocomplete as default };
//# sourceMappingURL=index.mjs.map
