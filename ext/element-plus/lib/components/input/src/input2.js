'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
var index = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../utils/index.js');
require('../../../hooks/index.js');
require('../../../constants/index.js');
var calcTextareaHeight = require('./calc-textarea-height.js');
var input = require('./input.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$1 = require('../../../hooks/use-attrs/index.js');
var index$2 = require('../../../hooks/use-form-item/index.js');
var index$3 = require('../../../hooks/use-common-props/index.js');
var index$4 = require('../../../hooks/use-namespace/index.js');
var icon = require('../../../utils/vue/icon.js');
var shared = require('@vue/shared');
var event = require('../../../constants/event.js');
var i18n = require('../../../utils/i18n.js');

const PENDANT_MAP = {
  suffix: "append",
  prefix: "prepend"
};
const _sfc_main = vue.defineComponent({
  name: "ElInput",
  components: { ElIcon: index.ElIcon, CircleClose: iconsVue.CircleClose, IconView: iconsVue.View },
  inheritAttrs: false,
  props: input.inputProps,
  emits: input.inputEmits,
  setup(props, { slots, emit, attrs: rawAttrs }) {
    const instance = vue.getCurrentInstance();
    const attrs = index$1.useAttrs();
    const { form, formItem } = index$2.useFormItem();
    const inputSize = index$3.useSize();
    const inputDisabled = index$3.useDisabled();
    const nsInput = index$4.useNamespace("input");
    const nsTextarea = index$4.useNamespace("textarea");
    const input = vue.ref();
    const textarea = vue.ref();
    const focused = vue.ref(false);
    const hovering = vue.ref(false);
    const isComposing = vue.ref(false);
    const passwordVisible = vue.ref(false);
    const _textareaCalcStyle = vue.shallowRef(props.inputStyle);
    const inputOrTextarea = vue.computed(() => input.value || textarea.value);
    const needStatusIcon = vue.computed(() => {
      var _a;
      return (_a = form == null ? void 0 : form.statusIcon) != null ? _a : false;
    });
    const validateState = vue.computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
    const validateIcon = vue.computed(() => icon.ValidateComponentsMap[validateState.value]);
    const containerStyle = vue.computed(() => rawAttrs.style);
    const computedTextareaStyle = vue.computed(() => [
      props.inputStyle,
      _textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = vue.computed(() => props.modelValue === null || props.modelValue === void 0 ? "" : String(props.modelValue));
    const showClear = vue.computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value));
    const showPwdVisible = vue.computed(() => props.showPassword && !inputDisabled.value && !props.readonly && (!!nativeInputValue.value || focused.value));
    const isWordLimitVisible = vue.computed(() => props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = vue.computed(() => Array.from(nativeInputValue.value).length);
    const inputExceed = vue.computed(() => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength));
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (!core.isClient || type !== "textarea")
        return;
      if (autosize) {
        const minRows = shared.isObject(autosize) ? autosize.minRows : void 0;
        const maxRows = shared.isObject(autosize) ? autosize.maxRows : void 0;
        _textareaCalcStyle.value = {
          ...calcTextareaHeight.calcTextareaHeight(textarea.value, minRows, maxRows)
        };
      } else {
        _textareaCalcStyle.value = {
          minHeight: calcTextareaHeight.calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const setNativeInputValue = () => {
      const input2 = inputOrTextarea.value;
      if (!input2 || input2.value === nativeInputValue.value)
        return;
      input2.value = nativeInputValue.value;
    };
    const calcIconOffset = (place) => {
      const { el } = instance.vnode;
      if (!el)
        return;
      const elList = Array.from(el.querySelectorAll(`.${nsInput.e(place)}`));
      const target = elList.find((item) => item.parentNode === el);
      if (!target)
        return;
      const pendant = PENDANT_MAP[place];
      if (slots[pendant]) {
        target.style.transform = `translateX(${place === "suffix" ? "-" : ""}${el.querySelector(`.${nsInput.be("group", pendant)}`).offsetWidth}px)`;
      } else {
        target.removeAttribute("style");
      }
    };
    const updateIconOffset = () => {
      calcIconOffset("prefix");
      calcIconOffset("suffix");
    };
    const handleInput = (event$1) => {
      const { value } = event$1.target;
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value)
        return;
      emit(event.UPDATE_MODEL_EVENT, value);
      emit("input", value);
      vue.nextTick(setNativeInputValue);
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const focus = () => {
      vue.nextTick(() => {
        var _a;
        (_a = inputOrTextarea.value) == null ? void 0 : _a.focus();
      });
    };
    const blur = () => {
      var _a;
      (_a = inputOrTextarea.value) == null ? void 0 : _a.blur();
    };
    const handleFocus = (event) => {
      focused.value = true;
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a;
      focused.value = false;
      emit("blur", event);
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur");
      }
    };
    const select = () => {
      var _a;
      (_a = inputOrTextarea.value) == null ? void 0 : _a.select();
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a;
      emit("compositionupdate", event);
      const text = (_a = event.target) == null ? void 0 : _a.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !i18n.isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const clear = () => {
      emit(event.UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const suffixVisible = vue.computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    vue.watch(() => props.modelValue, () => {
      var _a;
      vue.nextTick(resizeTextarea);
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change");
      }
    });
    vue.watch(nativeInputValue, () => setNativeInputValue());
    vue.watch(() => props.type, () => {
      vue.nextTick(() => {
        setNativeInputValue();
        resizeTextarea();
        updateIconOffset();
      });
    });
    vue.onMounted(() => {
      setNativeInputValue();
      updateIconOffset();
      vue.nextTick(resizeTextarea);
    });
    vue.onUpdated(() => {
      vue.nextTick(updateIconOffset);
    });
    const onMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const onMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    return {
      input,
      textarea,
      attrs,
      inputSize,
      validateState,
      validateIcon,
      containerStyle,
      computedTextareaStyle,
      inputDisabled,
      showClear,
      showPwdVisible,
      isWordLimitVisible,
      textLength,
      hovering,
      inputExceed,
      passwordVisible,
      inputOrTextarea,
      suffixVisible,
      needStatusIcon,
      resizeTextarea,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handlePasswordVisible,
      clear,
      select,
      focus,
      blur,
      onMouseLeave,
      onMouseEnter,
      handleKeydown,
      nsInput,
      nsTextarea
    };
  }
});
const _hoisted_1 = ["type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"];
const _hoisted_2 = ["tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_circle_close = vue.resolveComponent("circle-close");
  const _component_icon_view = vue.resolveComponent("icon-view");
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass([
      _ctx.type === "textarea" ? _ctx.nsTextarea.b() : _ctx.nsInput.b(),
      _ctx.nsInput.m(_ctx.inputSize),
      _ctx.nsInput.is("disabled", _ctx.inputDisabled),
      _ctx.nsInput.is("exceed", _ctx.inputExceed),
      {
        [_ctx.nsInput.b("group")]: _ctx.$slots.prepend || _ctx.$slots.append,
        [_ctx.nsInput.bm("group", "append")]: _ctx.$slots.append,
        [_ctx.nsInput.bm("group", "prepend")]: _ctx.$slots.prepend,
        [_ctx.nsInput.m("prefix")]: _ctx.$slots.prefix || _ctx.prefixIcon,
        [_ctx.nsInput.m("suffix")]: _ctx.$slots.suffix || _ctx.suffixIcon || _ctx.clearable || _ctx.showPassword,
        [_ctx.nsInput.m("suffix--password-clear")]: _ctx.clearable && _ctx.showPassword
      },
      _ctx.$attrs.class
    ]),
    style: vue.normalizeStyle(_ctx.containerStyle),
    onMouseenter: _cache[17] || (_cache[17] = (...args) => _ctx.onMouseEnter && _ctx.onMouseEnter(...args)),
    onMouseleave: _cache[18] || (_cache[18] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args))
  }, [
    vue.createCommentVNode(" input "),
    _ctx.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
      vue.createCommentVNode(" prepend slot "),
      _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass(_ctx.nsInput.be("group", "prepend"))
      }, [
        vue.renderSlot(_ctx.$slots, "prepend")
      ], 2)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("input", vue.mergeProps({
        ref: "input",
        class: _ctx.nsInput.e("inner")
      }, _ctx.attrs, {
        type: _ctx.showPassword ? _ctx.passwordVisible ? "text" : "password" : _ctx.type,
        disabled: _ctx.inputDisabled,
        readonly: _ctx.readonly,
        autocomplete: _ctx.autocomplete,
        tabindex: _ctx.tabindex,
        "aria-label": _ctx.label,
        placeholder: _ctx.placeholder,
        style: _ctx.inputStyle,
        onCompositionstart: _cache[0] || (_cache[0] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
        onCompositionupdate: _cache[1] || (_cache[1] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
        onCompositionend: _cache[2] || (_cache[2] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
        onInput: _cache[3] || (_cache[3] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        onFocus: _cache[4] || (_cache[4] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[5] || (_cache[5] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
        onChange: _cache[6] || (_cache[6] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onKeydown: _cache[7] || (_cache[7] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }), null, 16, _hoisted_1),
      vue.createCommentVNode(" prefix slot "),
      _ctx.$slots.prefix || _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 1,
        class: vue.normalizeClass(_ctx.nsInput.e("prefix"))
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(_ctx.nsInput.e("prefix-inner"))
        }, [
          vue.renderSlot(_ctx.$slots, "prefix"),
          _ctx.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 0,
            class: vue.normalizeClass(_ctx.nsInput.e("icon"))
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.prefixIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
        ], 2)
      ], 2)) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" suffix slot "),
      _ctx.suffixVisible ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 2,
        class: vue.normalizeClass(_ctx.nsInput.e("suffix"))
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(_ctx.nsInput.e("suffix-inner"))
        }, [
          !_ctx.showClear || !_ctx.showPwdVisible || !_ctx.isWordLimitVisible ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.renderSlot(_ctx.$slots, "suffix"),
            _ctx.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
              key: 0,
              class: vue.normalizeClass(_ctx.nsInput.e("icon"))
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.suffixIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
          ], 64)) : vue.createCommentVNode("v-if", true),
          _ctx.showClear ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 1,
            class: vue.normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("clear")]),
            onMousedown: _cache[8] || (_cache[8] = vue.withModifiers(() => {
            }, ["prevent"])),
            onClick: _ctx.clear
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_circle_close)
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : vue.createCommentVNode("v-if", true),
          _ctx.showPwdVisible ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 2,
            class: vue.normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("clear")]),
            onClick: _ctx.handlePasswordVisible
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_icon_view)
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : vue.createCommentVNode("v-if", true),
          _ctx.isWordLimitVisible ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 3,
            class: vue.normalizeClass(_ctx.nsInput.e("count"))
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(_ctx.nsInput.e("count-inner"))
            }, vue.toDisplayString(_ctx.textLength) + " / " + vue.toDisplayString(_ctx.attrs.maxlength), 3)
          ], 2)) : vue.createCommentVNode("v-if", true)
        ], 2),
        _ctx.validateState && _ctx.validateIcon && _ctx.needStatusIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
          key: 0,
          class: vue.normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("validateIcon")])
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.validateIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
      ], 2)) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" append slot "),
      _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 3,
        class: vue.normalizeClass(_ctx.nsInput.be("group", "append"))
      }, [
        vue.renderSlot(_ctx.$slots, "append")
      ], 2)) : vue.createCommentVNode("v-if", true)
    ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
      vue.createCommentVNode(" textarea "),
      vue.createElementVNode("textarea", vue.mergeProps({
        ref: "textarea",
        class: _ctx.nsTextarea.e("inner")
      }, _ctx.attrs, {
        tabindex: _ctx.tabindex,
        disabled: _ctx.inputDisabled,
        readonly: _ctx.readonly,
        autocomplete: _ctx.autocomplete,
        style: _ctx.computedTextareaStyle,
        "aria-label": _ctx.label,
        placeholder: _ctx.placeholder,
        onCompositionstart: _cache[9] || (_cache[9] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
        onCompositionupdate: _cache[10] || (_cache[10] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
        onCompositionend: _cache[11] || (_cache[11] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
        onInput: _cache[12] || (_cache[12] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        onFocus: _cache[13] || (_cache[13] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[14] || (_cache[14] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
        onChange: _cache[15] || (_cache[15] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onKeydown: _cache[16] || (_cache[16] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }), null, 16, _hoisted_2),
      _ctx.isWordLimitVisible ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 0,
        class: vue.normalizeClass(_ctx.nsInput.e("count"))
      }, vue.toDisplayString(_ctx.textLength) + " / " + vue.toDisplayString(_ctx.attrs.maxlength), 3)) : vue.createCommentVNode("v-if", true)
    ], 64))
  ], 38)), [
    [vue.vShow, _ctx.type !== "hidden"]
  ]);
}
var Input = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Input;
//# sourceMappingURL=input2.js.map
