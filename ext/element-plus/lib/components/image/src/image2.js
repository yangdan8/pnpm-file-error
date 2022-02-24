'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var core = require('@vueuse/core');
require('../../../hooks/index.js');
var index = require('../../image-viewer/index.js');
require('../../../utils/index.js');
var image = require('./image.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$1 = require('../../../hooks/use-deprecated/index.js');
var index$2 = require('../../../hooks/use-locale/index.js');
var index$3 = require('../../../hooks/use-namespace/index.js');
var index$4 = require('../../../hooks/use-attrs/index.js');
var position = require('../../../utils/dom/position.js');
var scroll = require('../../../utils/dom/scroll.js');

const isHtmlElement = (e) => e && e.nodeType === Node.ELEMENT_NODE;
let prevOverflow = "";
const _sfc_main = vue.defineComponent({
  name: "ElImage",
  components: {
    ImageViewer: index.ElImageViewer
  },
  inheritAttrs: false,
  props: image.imageProps,
  emits: image.imageEmits,
  setup(props, { emit, attrs: rawAttrs }) {
    index$1.useDeprecated({
      scope: "el-image",
      from: "append-to-body",
      replacement: "preview-teleported",
      version: "2.2.0",
      ref: "https://element-plus.org/en-US/component/image.html#image-attributess"
    }, vue.computed(() => core.isBoolean(props.appendToBody)));
    const { t } = index$2.useLocale();
    const ns = index$3.useNamespace("image");
    const attrs = index$4.useAttrs();
    const hasLoadError = vue.ref(false);
    const loading = vue.ref(true);
    const imgWidth = vue.ref(0);
    const imgHeight = vue.ref(0);
    const showViewer = vue.ref(false);
    const container = vue.ref();
    const _scrollContainer = vue.ref();
    let stopScrollListener;
    let stopWheelListener;
    const containerStyle = vue.computed(() => rawAttrs.style);
    const imageStyle = vue.computed(() => {
      const { fit } = props;
      if (core.isClient && fit) {
        return { objectFit: fit };
      }
      return {};
    });
    const preview = vue.computed(() => {
      const { previewSrcList } = props;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const teleported = vue.computed(() => {
      return props.appendToBody || props.previewTeleported;
    });
    const imageIndex = vue.computed(() => {
      const { previewSrcList, initialIndex } = props;
      let previewIndex = initialIndex;
      if (initialIndex > previewSrcList.length - 1) {
        previewIndex = 0;
      }
      return previewIndex;
    });
    const loadImage = () => {
      if (!core.isClient)
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
      if (position.isInContainer(container.value, _scrollContainer.value)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    const lazyLoadHandler = core.useThrottleFn(handleLazyLoad, 200);
    async function addLazyLoadListener() {
      var _a;
      if (!core.isClient)
        return;
      await vue.nextTick();
      const { scrollContainer } = props;
      if (isHtmlElement(scrollContainer)) {
        _scrollContainer.value = scrollContainer;
      } else if (shared.isString(scrollContainer) && scrollContainer !== "") {
        _scrollContainer.value = (_a = document.querySelector(scrollContainer)) != null ? _a : void 0;
      } else if (container.value) {
        _scrollContainer.value = scroll.getScrollContainer(container.value);
      }
      if (_scrollContainer.value) {
        stopScrollListener = core.useEventListener(_scrollContainer, "scroll", lazyLoadHandler);
        setTimeout(() => handleLazyLoad(), 100);
      }
    }
    function removeLazyLoadListener() {
      if (!core.isClient || !_scrollContainer.value || !lazyLoadHandler)
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
      stopWheelListener = core.useEventListener("wheel", wheelHandler, {
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
    vue.watch(() => props.src, () => {
      if (props.lazy) {
        loading.value = true;
        hasLoadError.value = false;
        removeLazyLoadListener();
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    vue.onMounted(() => {
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
  const _component_image_viewer = vue.resolveComponent("image-viewer");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "container",
    class: vue.normalizeClass([_ctx.ns.b(), _ctx.$attrs.class]),
    style: vue.normalizeStyle(_ctx.containerStyle)
  }, [
    _ctx.loading ? vue.renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.ns.e("placeholder"))
      }, null, 2)
    ]) : _ctx.hasLoadError ? vue.renderSlot(_ctx.$slots, "error", { key: 1 }, () => [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.ns.e("error"))
      }, vue.toDisplayString(_ctx.t("el.image.error")), 3)
    ]) : (vue.openBlock(), vue.createElementBlock("img", vue.mergeProps({ key: 2 }, _ctx.attrs, {
      src: _ctx.src,
      style: _ctx.imageStyle,
      class: [_ctx.ns.e("inner"), _ctx.preview ? _ctx.ns.e("preview") : ""],
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args))
    }), null, 16, _hoisted_1)),
    _ctx.preview ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
      _ctx.showViewer ? (vue.openBlock(), vue.createBlock(_component_image_viewer, {
        key: 0,
        "z-index": _ctx.zIndex,
        "initial-index": _ctx.imageIndex,
        "url-list": _ctx.previewSrcList,
        "hide-on-click-modal": _ctx.hideOnClickModal,
        teleported: _ctx.teleported,
        onClose: _ctx.closeViewer,
        onSwitch: _ctx.switchViewer
      }, {
        default: vue.withCtx(() => [
          _ctx.$slots.viewer ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
            vue.renderSlot(_ctx.$slots, "viewer")
          ])) : vue.createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["z-index", "initial-index", "url-list", "hide-on-click-modal", "teleported", "onClose", "onSwitch"])) : vue.createCommentVNode("v-if", true)
    ], 2112)) : vue.createCommentVNode("v-if", true)
  ], 6);
}
var Image$1 = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Image$1;
//# sourceMappingURL=image2.js.map
