import { defineComponent, computed, ref, nextTick, watch, onMounted, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createElementVNode, toDisplayString, mergeProps, Fragment, createBlock, withCtx, createCommentVNode } from 'vue';
import { isString } from '@vue/shared';
import { isBoolean, isClient, useThrottleFn, useEventListener } from '@vueuse/core';
import '../../../hooks/index.mjs';
import { ElImageViewer } from '../../image-viewer/index.mjs';
import '../../../utils/index.mjs';
import { imageProps, imageEmits } from './image.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useDeprecated } from '../../../hooks/use-deprecated/index.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { useAttrs } from '../../../hooks/use-attrs/index.mjs';
import { isInContainer } from '../../../utils/dom/position.mjs';
import { getScrollContainer } from '../../../utils/dom/scroll.mjs';

const isHtmlElement = (e) => e && e.nodeType === Node.ELEMENT_NODE;
let prevOverflow = "";
const _sfc_main = defineComponent({
  name: "ElImage",
  components: {
    ImageViewer: ElImageViewer
  },
  inheritAttrs: false,
  props: imageProps,
  emits: imageEmits,
  setup(props, { emit, attrs: rawAttrs }) {
    useDeprecated({
      scope: "el-image",
      from: "append-to-body",
      replacement: "preview-teleported",
      version: "2.2.0",
      ref: "https://element-plus.org/en-US/component/image.html#image-attributess"
    }, computed(() => isBoolean(props.appendToBody)));
    const { t } = useLocale();
    const ns = useNamespace("image");
    const attrs = useAttrs();
    const hasLoadError = ref(false);
    const loading = ref(true);
    const imgWidth = ref(0);
    const imgHeight = ref(0);
    const showViewer = ref(false);
    const container = ref();
    const _scrollContainer = ref();
    let stopScrollListener;
    let stopWheelListener;
    const containerStyle = computed(() => rawAttrs.style);
    const imageStyle = computed(() => {
      const { fit } = props;
      if (isClient && fit) {
        return { objectFit: fit };
      }
      return {};
    });
    const preview = computed(() => {
      const { previewSrcList } = props;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const teleported = computed(() => {
      return props.appendToBody || props.previewTeleported;
    });
    const imageIndex = computed(() => {
      const { previewSrcList, initialIndex } = props;
      let previewIndex = initialIndex;
      if (initialIndex > previewSrcList.length - 1) {
        previewIndex = 0;
      }
      return previewIndex;
    });
    const loadImage = () => {
      if (!isClient)
        return;
      loading.value = true;
      hasLoadError.value = false;
      const img = new Image();
      const currentImageSrc = props.src;
      img.addEventListener("load", (e) => {
        if (currentImageSrc !== props.src) {
          return;
        }
        handleLoad(e, img);
      });
      img.addEventListener("error", (e) => {
        if (currentImageSrc !== props.src) {
          return;
        }
        handleError(e);
      });
      Object.entries(attrs.value).forEach(([key, value]) => {
        if (key.toLowerCase() === "onload")
          return;
        img.setAttribute(key, value);
      });
      img.src = currentImageSrc;
    };
    function handleLoad(e, img) {
      imgWidth.value = img.width;
      imgHeight.value = img.height;
      loading.value = false;
      hasLoadError.value = false;
    }
    function handleError(event) {
      loading.value = false;
      hasLoadError.value = true;
      emit("error", event);
    }
    function handleLazyLoad() {
      if (isInContainer(container.value, _scrollContainer.value)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200);
    async function addLazyLoadListener() {
      var _a;
      if (!isClient)
        return;
      await nextTick();
      const { scrollContainer } = props;
      if (isHtmlElement(scrollContainer)) {
        _scrollContainer.value = scrollContainer;
      } else if (isString(scrollContainer) && scrollContainer !== "") {
        _scrollContainer.value = (_a = document.querySelector(scrollContainer)) != null ? _a : void 0;
      } else if (container.value) {
        _scrollContainer.value = getScrollContainer(container.value);
      }
      if (_scrollContainer.value) {
        stopScrollListener = useEventListener(_scrollContainer, "scroll", lazyLoadHandler);
        setTimeout(() => handleLazyLoad(), 100);
      }
    }
    function removeLazyLoadListener() {
      if (!isClient || !_scrollContainer.value || !lazyLoadHandler)
        return;
      stopScrollListener();
      _scrollContainer.value = void 0;
    }
    function wheelHandler(e) {
      if (!e.ctrlKey)
        return;
      if (e.deltaY < 0) {
        e.preventDefault();
        return false;
      } else if (e.deltaY > 0) {
        e.preventDefault();
        return false;
      }
    }
    function clickHandler() {
      if (!preview.value)
        return;
      stopWheelListener = useEventListener("wheel", wheelHandler, {
        passive: false
      });
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      showViewer.value = true;
    }
    function closeViewer() {
      stopWheelListener == null ? void 0 : stopWheelListener();
      document.body.style.overflow = prevOverflow;
      showViewer.value = false;
      emit("close");
    }
    function switchViewer(val) {
      emit("switch", val);
    }
    watch(() => props.src, () => {
      if (props.lazy) {
        loading.value = true;
        hasLoadError.value = false;
        removeLazyLoadListener();
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    onMounted(() => {
      if (props.lazy) {
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    return {
      attrs,
      loading,
      hasLoadError,
      showViewer,
      containerStyle,
      imageStyle,
      preview,
      imageIndex,
      container,
      ns,
      teleported,
      clickHandler,
      closeViewer,
      switchViewer,
      t
    };
  }
});
const _hoisted_1 = ["src"];
const _hoisted_2 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_image_viewer = resolveComponent("image-viewer");
  return openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass([_ctx.ns.b(), _ctx.$attrs.class]),
    style: normalizeStyle(_ctx.containerStyle)
  }, [
    _ctx.loading ? renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.ns.e("placeholder"))
      }, null, 2)
    ]) : _ctx.hasLoadError ? renderSlot(_ctx.$slots, "error", { key: 1 }, () => [
      createElementVNode("div", {
        class: normalizeClass(_ctx.ns.e("error"))
      }, toDisplayString(_ctx.t("el.image.error")), 3)
    ]) : (openBlock(), createElementBlock("img", mergeProps({ key: 2 }, _ctx.attrs, {
      src: _ctx.src,
      style: _ctx.imageStyle,
      class: [_ctx.ns.e("inner"), _ctx.preview ? _ctx.ns.e("preview") : ""],
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args))
    }), null, 16, _hoisted_1)),
    _ctx.preview ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
      _ctx.showViewer ? (openBlock(), createBlock(_component_image_viewer, {
        key: 0,
        "z-index": _ctx.zIndex,
        "initial-index": _ctx.imageIndex,
        "url-list": _ctx.previewSrcList,
        "hide-on-click-modal": _ctx.hideOnClickModal,
        teleported: _ctx.teleported,
        onClose: _ctx.closeViewer,
        onSwitch: _ctx.switchViewer
      }, {
        default: withCtx(() => [
          _ctx.$slots.viewer ? (openBlock(), createElementBlock("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "viewer")
          ])) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["z-index", "initial-index", "url-list", "hide-on-click-modal", "teleported", "onClose", "onSwitch"])) : createCommentVNode("v-if", true)
    ], 2112)) : createCommentVNode("v-if", true)
  ], 6);
}
var Image$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Image$1 as default };
//# sourceMappingURL=image2.mjs.map
