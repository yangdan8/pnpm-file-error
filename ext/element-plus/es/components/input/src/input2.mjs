import { defineComponent, getCurrentInstance, ref, shallowRef, computed, nextTick, watch, onMounted, onUpdated, resolveComponent, withDirectives, openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, Fragment, renderSlot, createElementVNode, mergeProps, createBlock, withCtx, resolveDynamicComponent, withModifiers, createVNode, toDisplayString, vShow } from 'vue';
import { isClient } from '@vueuse/core';
import { ElIcon } from '../../icon/index.mjs';
import { CircleClose, View } from '@element-plus/icons-vue';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import '../../../constants/index.mjs';
import { calcTextareaHeight } from './calc-textarea-height.mjs';
import { inputProps, inputEmits } from './input.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useAttrs } from '../../../hooks/use-attrs/index.mjs';
import { useFormItem } from '../../../hooks/use-form-item/index.mjs';
import { useSize, useDisabled } from '../../../hooks/use-common-props/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { ValidateComponentsMap } from '../../../utils/vue/icon.mjs';
import { isObject } from '@vue/shared';
import { UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';
import { isKorean } from '../../../utils/i18n.mjs';

const PENDANT_MAP = {
  suffix: "append",
  prefix: "prepend"
};
const _sfc_main = defineComponent({
  name: "ElInput",
  components: { ElIcon, CircleClose, IconView: View },
  inheritAttrs: false,
  props: inputProps,
  emits: inputEmits,
  setup(props, { slots, emit, attrs: rawAttrs }) {
    const instance = getCurrentInstance();
    const attrs = useAttrs();
    const { form, formItem } = useFormItem();
    const inputSize = useSize();
    const inputDisabled = useDisabled();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const input = ref();
    const textarea = ref();
    const focused = ref(false);
    const hovering = ref(false);
    const isComposing = ref(false);
    const passwordVisible = ref(false);
    const _textareaCalcStyle = shallowRef(props.inputStyle);
    const inputOrTextarea = computed(() => input.value || textarea.value);
    const needStatusIcon = computed(() => {
      var _a;
      return (_a = form == null ? void 0 : form.statusIcon) != null ? _a : false;
    });
    const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
    const validateIcon = computed(() => ValidateComponentsMap[validateState.value]);
    const containerStyle = computed(() => rawAttrs.style);
    const computedTextareaStyle = computed(() => [
      props.inputStyle,
      _textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = computed(() => props.modelValue === null || props.modelValue === void 0 ? "" : String(props.modelValue));
    const showClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value));
    const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !props.readonly && (!!nativeInputValue.value || focused.value));
    const isWordLimitVisible = computed(() => props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = computed(() => Array.from(nativeInputValue.value).length);
    const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength));
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (!isClient || type !== "textarea")
        return;
      if (autosize) {
        const minRows = isObject(autosize) ? autosize.minRows : void 0;
        const maxRows = isObject(autosize) ? autosize.maxRows : void 0;
        _textareaCalcStyle.value = {
          ...calcTextareaHeight(textarea.value, minRows, maxRows)
        };
      } else {
        _textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight
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
    const handleInput = (event) => {
      const { value } = event.target;
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value)
        return;
      emit(UPDATE_MODEL_EVENT, value);
      emit("input", value);
      nextTick(setNativeInputValue);
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const focus = () => {
      nextTick(() => {
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
      isComposing.value = !isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const clear = () => {
      emit(UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    watch(() => props.modelValue, () => {
      var _a;
      nextTick(resizeTextarea);
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change");
      }
    });
    watch(nativeInputValue, () => setNativeInputValue());
    watch(() => props.type, () => {
      nextTick(() => {
        setNativeInputValue();
        resizeTextarea();
        updateIconOffset();
      });
    });
    onMounted(() => {
      setNativeInputValue();
      updateIconOffset();
      nextTick(resizeTextarea);
    });
    onUpdated(() => {
      nextTick(updateIconOffset);
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
  const _component_el_icon = resolveComponent("el-icon");
  const _component_circle_close = resolveComponent("circle-close");
  const _component_icon_view = resolveComponent("icon-view");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass([
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
    style: normalizeStyle(_ctx.containerStyle),
    onMouseenter: _cache[17] || (_cache[17] = (...args) => _ctx.onMouseEnter && _ctx.onMouseEnter(...args)),
    onMouseleave: _cache[18] || (_cache[18] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args))
  }, [
    createCommentVNode(" input "),
    _ctx.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createCommentVNode(" prepend slot "),
      _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.nsInput.be("group", "prepend"))
      }, [
        renderSlot(_ctx.$slots, "prepend")
      ], 2)) : createCommentVNode("v-if", true),
      createElementVNode("input", mergeProps({
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
      createCommentVNode(" prefix slot "),
      _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(_ctx.nsInput.e("prefix"))
      }, [
        createElementVNode("span", {
          class: normalizeClass(_ctx.nsInput.e("prefix-inner"))
        }, [
          renderSlot(_ctx.$slots, "prefix"),
          _ctx.prefixIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass(_ctx.nsInput.e("icon"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true)
        ], 2)
      ], 2)) : createCommentVNode("v-if", true),
      createCommentVNode(" suffix slot "),
      _ctx.suffixVisible ? (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(_ctx.nsInput.e("suffix"))
      }, [
        createElementVNode("span", {
          class: normalizeClass(_ctx.nsInput.e("suffix-inner"))
        }, [
          !_ctx.showClear || !_ctx.showPwdVisible || !_ctx.isWordLimitVisible ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            renderSlot(_ctx.$slots, "suffix"),
            _ctx.suffixIcon ? (openBlock(), createBlock(_component_el_icon, {
              key: 0,
              class: normalizeClass(_ctx.nsInput.e("icon"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ], 64)) : createCommentVNode("v-if", true),
          _ctx.showClear ? (openBlock(), createBlock(_component_el_icon, {
            key: 1,
            class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("clear")]),
            onMousedown: _cache[8] || (_cache[8] = withModifiers(() => {
            }, ["prevent"])),
            onClick: _ctx.clear
          }, {
            default: withCtx(() => [
              createVNode(_component_circle_close)
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
          _ctx.showPwdVisible ? (openBlock(), createBlock(_component_el_icon, {
            key: 2,
            class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("clear")]),
            onClick: _ctx.handlePasswordVisible
          }, {
            default: withCtx(() => [
              createVNode(_component_icon_view)
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
          _ctx.isWordLimitVisible ? (openBlock(), createElementBlock("span", {
            key: 3,
            class: normalizeClass(_ctx.nsInput.e("count"))
          }, [
            createElementVNode("span", {
              class: normalizeClass(_ctx.nsInput.e("count-inner"))
            }, toDisplayString(_ctx.textLength) + " / " + toDisplayString(_ctx.attrs.maxlength), 3)
          ], 2)) : createCommentVNode("v-if", true)
        ], 2),
        _ctx.validateState && _ctx.validateIcon && _ctx.needStatusIcon ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("validateIcon")])
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.validateIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true)
      ], 2)) : createCommentVNode("v-if", true),
      createCommentVNode(" append slot "),
      _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
        key: 3,
        class: normalizeClass(_ctx.nsInput.be("group", "append"))
      }, [
        renderSlot(_ctx.$slots, "append")
      ], 2)) : createCommentVNode("v-if", true)
    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createCommentVNode(" textarea "),
      createElementVNode("textarea", mergeProps({
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
      _ctx.isWordLimitVisible ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(_ctx.nsInput.e("count"))
      }, toDisplayString(_ctx.textLength) + " / " + toDisplayString(_ctx.attrs.maxlength), 3)) : createCommentVNode("v-if", true)
    ], 64))
  ], 38)), [
    [vShow, _ctx.type !== "hidden"]
  ]);
}
var Input = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Input as default };
//# sourceMappingURL=input2.mjs.map
