'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var lodashUnified = require('lodash-unified');
require('../../../hooks/index.js');
require('../../../directives/index.js');
require('../../../utils/index.js');
require('../../../constants/index.js');
var index$1 = require('../../input/index.js');
var index$2 = require('../../scrollbar/index.js');
var index = require('../../tooltip/index.js');
require('../../popper/index.js');
var index$3 = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$4 = require('../../../directives/click-outside/index.js');
var tooltip = require('../../tooltip/src/tooltip.js');
var event = require('../../../constants/event.js');
var index$5 = require('../../../hooks/use-namespace/index.js');
var deprecation = require('../../popper/src/deprecation.js');
var index$6 = require('../../../hooks/use-attrs/index.js');
var rand = require('../../../utils/rand.js');
var error = require('../../../utils/error.js');

const COMPONENT_NAME = "ElAutocomplete";
const _sfc_main = vue.defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElTooltip: index.ElTooltip,
    ElInput: index$1.ElInput,
    ElScrollbar: index$2.ElScrollbar,
    ElIcon: index$3.ElIcon,
    Loading: iconsVue.Loading
  },
  directives: {
    clickoutside: index$4["default"]
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
      default: shared.NOOP
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
    teleported: tooltip.useTooltipContentProps.teleported,
    highlightFirstItem: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    event.UPDATE_MODEL_EVENT,
    "input",
    "change",
    "focus",
    "blur",
    "clear",
    "select"
  ],
  setup(props, ctx) {
    const ns = index$5.useNamespace("autocomplete");
    const { compatTeleported } = deprecation.useDeprecateAppendToBody(COMPONENT_NAME, "popperAppendToBody");
    const attrs = index$6.useAttrs();
    const suggestions = vue.ref([]);
    const highlightedIndex = vue.ref(-1);
    const dropdownWidth = vue.ref("");
    const activated = vue.ref(false);
    const suggestionDisabled = vue.ref(false);
    const loading = vue.ref(false);
    const inputRef = vue.ref(null);
    const regionRef = vue.ref(null);
    const popper = vue.ref(null);
    const id = vue.computed(() => {
      return ns.b(String(rand.generateId()));
    });
    const suggestionVisible = vue.computed(() => {
      const isValidData = shared.isArray(suggestions.value) && suggestions.value.length > 0;
      return (isValidData || loading.value) && activated.value;
    });
    const suggestionLoading = vue.computed(() => {
      return !props.hideLoading && loading.value;
    });
    const onSuggestionShow = () => {
      vue.nextTick(() => {
        if (suggestionVisible.value) {
          dropdownWidth.value = `${inputRef.value.$el.offsetWidth}px`;
        }
      });
    };
    vue.onMounted(() => {
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
        if (shared.isArray(suggestionsArg)) {
          suggestions.value = suggestionsArg;
          highlightedIndex.value = props.highlightFirstItem ? 0 : -1;
        } else {
          error.throwError("ElAutocomplete", "autocomplete suggestions must be an array");
        }
      });
    };
    const debouncedGetData = lodashUnified.debounce(getData, props.debounce);
    const handleInput = (value) => {
      ctx.emit("input", value);
      ctx.emit(event.UPDATE_MODEL_EVENT, value);
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
      ctx.emit(event.UPDATE_MODEL_EVENT, "");
      ctx.emit("clear");
    };
    const handleKeyEnter = () => {
      if (suggestionVisible.value && highlightedIndex.value >= 0 && highlightedIndex.value < suggestions.value.length) {
        select(suggestions.value[highlightedIndex.value]);
      } else if (props.selectWhenUnmatched) {
        ctx.emit("select", { value: props.modelValue });
        vue.nextTick(() => {
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
      ctx.emit(event.UPDATE_MODEL_EVENT, item[props.valueKey]);
      ctx.emit("select", item);
      vue.nextTick(() => {
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
  const _component_el_input = vue.resolveComponent("el-input");
  const _component_loading = vue.resolveComponent("loading");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_el_scrollbar = vue.resolveComponent("el-scrollbar");
  const _component_el_tooltip = vue.resolveComponent("el-tooltip");
  const _directive_clickoutside = vue.resolveDirective("clickoutside");
  return vue.openBlock(), vue.createBlock(_component_el_tooltip, {
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
    content: vue.withCtx(() => [
      vue.createElementVNode("div", {
        ref: "regionRef",
        class: vue.normalizeClass([_ctx.ns.b("suggestion"), _ctx.ns.is("loading", _ctx.suggestionLoading)]),
        style: vue.normalizeStyle({ minWidth: _ctx.dropdownWidth, outline: "none" }),
        role: "region"
      }, [
        vue.createVNode(_component_el_scrollbar, {
          id: _ctx.id,
          tag: "ul",
          "wrap-class": _ctx.ns.be("suggestion", "wrap"),
          "view-class": _ctx.ns.be("suggestion", "list"),
          role: "listbox"
        }, {
          default: vue.withCtx(() => [
            _ctx.suggestionLoading ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_2, [
              vue.createVNode(_component_el_icon, { class: "is-loading" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_loading)
                ]),
                _: 1
              })
            ])) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(_ctx.suggestions, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                id: `${_ctx.id}-item-${index}`,
                key: index,
                class: vue.normalizeClass({ highlighted: _ctx.highlightedIndex === index }),
                role: "option",
                "aria-selected": _ctx.highlightedIndex === index,
                onClick: ($event) => _ctx.select(item)
              }, [
                vue.renderSlot(_ctx.$slots, "default", { item }, () => [
                  vue.createTextVNode(vue.toDisplayString(item[_ctx.valueKey]), 1)
                ])
              ], 10, _hoisted_3);
            }), 128))
          ]),
          _: 3
        }, 8, ["id", "wrap-class", "view-class"])
      ], 6)
    ]),
    default: vue.withCtx(() => [
      vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([_ctx.ns.b(), _ctx.$attrs.class]),
        style: vue.normalizeStyle(_ctx.$attrs.style),
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": _ctx.suggestionVisible,
        "aria-owns": _ctx.id
      }, [
        vue.createVNode(_component_el_input, vue.mergeProps({ ref: "inputRef" }, _ctx.attrs, {
          "model-value": _ctx.modelValue,
          onInput: _ctx.handleInput,
          onChange: _ctx.handleChange,
          onFocus: _ctx.handleFocus,
          onBlur: _ctx.handleBlur,
          onClear: _ctx.handleClear,
          onKeydown: [
            _cache[0] || (_cache[0] = vue.withKeys(vue.withModifiers(($event) => _ctx.highlight(_ctx.highlightedIndex - 1), ["prevent"]), ["up"])),
            _cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers(($event) => _ctx.highlight(_ctx.highlightedIndex + 1), ["prevent"]), ["down"])),
            vue.withKeys(_ctx.handleKeyEnter, ["enter"]),
            vue.withKeys(_ctx.close, ["tab"])
          ]
        }), vue.createSlots({ _: 2 }, [
          _ctx.$slots.prepend ? {
            name: "prepend",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "prepend")
            ])
          } : void 0,
          _ctx.$slots.append ? {
            name: "append",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "append")
            ])
          } : void 0,
          _ctx.$slots.prefix ? {
            name: "prefix",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "prefix")
            ])
          } : void 0,
          _ctx.$slots.suffix ? {
            name: "suffix",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "suffix")
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
var Autocomplete = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Autocomplete;
//# sourceMappingURL=index.js.map
