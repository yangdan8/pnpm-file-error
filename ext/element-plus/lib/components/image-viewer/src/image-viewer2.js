'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
var lodashUnified = require('lodash-unified');
var index = require('../../icon/index.js');
require('../../../hooks/index.js');
require('../../../constants/index.js');
require('../../../utils/index.js');
var iconsVue = require('@element-plus/icons-vue');
var imageViewer = require('./image-viewer.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var browser = require('../../../utils/browser.js');
var index$1 = require('../../../hooks/use-locale/index.js');
var index$2 = require('../../../hooks/use-namespace/index.js');
var index$3 = require('../../../hooks/use-z-index/index.js');
var aria = require('../../../constants/aria.js');

const Mode = {
  CONTAIN: {
    name: "contain",
    icon: vue.markRaw(iconsVue.FullScreen)
  },
  ORIGINAL: {
    name: "original",
    icon: vue.markRaw(iconsVue.ScaleToOriginal)
  }
};
const mousewheelEventName = browser.isFirefox() ? "DOMMouseScroll" : "mousewheel";
const _sfc_main = vue.defineComponent({
  name: "ElImageViewer",
  components: {
    ElIcon: index.ElIcon,
    Close: iconsVue.Close,
    ArrowLeft: iconsVue.ArrowLeft,
    ArrowRight: iconsVue.ArrowRight,
    ZoomOut: iconsVue.ZoomOut,
    ZoomIn: iconsVue.ZoomIn,
    RefreshLeft: iconsVue.RefreshLeft,
    RefreshRight: iconsVue.RefreshRight
  },
  props: imageViewer.imageViewerProps,
  emits: imageViewer.imageViewerEmits,
  setup(props, { emit }) {
    const { t } = index$1.useLocale();
    const ns = index$2.useNamespace("image-viewer");
    const { nextZIndex } = index$3.useZIndex();
    const wrapper = vue.ref();
    const imgRefs = vue.ref([]);
    const scopeEventListener = vue.effectScope();
    const loading = vue.ref(true);
    const index = vue.ref(props.initialIndex);
    const mode = vue.ref(Mode.CONTAIN);
    const transform = vue.ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const isSingle = vue.computed(() => {
      const { urlList } = props;
      return urlList.length <= 1;
    });
    const isFirst = vue.computed(() => {
      return index.value === 0;
    });
    const isLast = vue.computed(() => {
      return index.value === props.urlList.length - 1;
    });
    const currentImg = vue.computed(() => {
      return props.urlList[index.value];
    });
    const imgStyle = vue.computed(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform.value;
      let translateX = offsetX / scale;
      let translateY = offsetY / scale;
      switch (deg % 360) {
        case 90:
        case -270:
          ;
          [translateX, translateY] = [translateY, -translateX];
          break;
        case 180:
        case -180:
          ;
          [translateX, translateY] = [-translateX, -translateY];
          break;
        case 270:
        case -90:
          ;
          [translateX, translateY] = [-translateY, translateX];
          break;
      }
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
        transition: enableTransition ? "transform .3s" : ""
      };
      if (mode.value.name === Mode.CONTAIN.name) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    });
    const computedZIndex = vue.computed(() => {
      return core.isNumber(props.zIndex) ? props.zIndex : nextZIndex();
    });
    function hide() {
      unregisterEventListener();
      emit("close");
    }
    function registerEventListener() {
      const keydownHandler = lodashUnified.throttle((e) => {
        switch (e.code) {
          case aria.EVENT_CODE.esc:
            hide();
            break;
          case aria.EVENT_CODE.space:
            toggleMode();
            break;
          case aria.EVENT_CODE.left:
            prev();
            break;
          case aria.EVENT_CODE.up:
            handleActions("zoomIn");
            break;
          case aria.EVENT_CODE.right:
            next();
            break;
          case aria.EVENT_CODE.down:
            handleActions("zoomOut");
            break;
        }
      });
      const mousewheelHandler = lodashUnified.throttle((e) => {
        const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
        if (delta > 0) {
          handleActions("zoomIn", {
            zoomRate: 1.2,
            enableTransition: false
          });
        } else {
          handleActions("zoomOut", {
            zoomRate: 1.2,
            enableTransition: false
          });
        }
      });
      scopeEventListener.run(() => {
        core.useEventListener(document, "keydown", keydownHandler);
        core.useEventListener(document, mousewheelEventName, mousewheelHandler);
      });
    }
    function unregisterEventListener() {
      scopeEventListener.stop();
    }
    function handleImgLoad() {
      loading.value = false;
    }
    function handleImgError(e) {
      loading.value = false;
      e.target.alt = t("el.image.error");
    }
    function handleMouseDown(e) {
      if (loading.value || e.button !== 0 || !wrapper.value)
        return;
      transform.value.enableTransition = false;
      const { offsetX, offsetY } = transform.value;
      const startX = e.pageX;
      const startY = e.pageY;
      const dragHandler = lodashUnified.throttle((ev) => {
        transform.value = {
          ...transform.value,
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY
        };
      });
      const removeMousemove = core.useEventListener(document, "mousemove", dragHandler);
      core.useEventListener(document, "mouseup", () => {
        removeMousemove();
      });
      e.preventDefault();
    }
    function reset() {
      transform.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    }
    function toggleMode() {
      if (loading.value)
        return;
      const modeNames = Object.keys(Mode);
      const modeValues = Object.values(Mode);
      const currentMode = mode.value.name;
      const index2 = modeValues.findIndex((i) => i.name === currentMode);
      const nextIndex = (index2 + 1) % modeNames.length;
      mode.value = Mode[modeNames[nextIndex]];
      reset();
    }
    function prev() {
      if (isFirst.value && !props.infinite)
        return;
      const len = props.urlList.length;
      index.value = (index.value - 1 + len) % len;
    }
    function next() {
      if (isLast.value && !props.infinite)
        return;
      const len = props.urlList.length;
      index.value = (index.value + 1) % len;
    }
    function handleActions(action, options = {}) {
      if (loading.value)
        return;
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: 1.4,
        rotateDeg: 90,
        enableTransition: true,
        ...options
      };
      switch (action) {
        case "zoomOut":
          if (transform.value.scale > 0.2) {
            transform.value.scale = parseFloat((transform.value.scale / zoomRate).toFixed(3));
          }
          break;
        case "zoomIn":
          if (transform.value.scale < 7) {
            transform.value.scale = parseFloat((transform.value.scale * zoomRate).toFixed(3));
          }
          break;
        case "clockwise":
          transform.value.deg += rotateDeg;
          break;
        case "anticlockwise":
          transform.value.deg -= rotateDeg;
          break;
      }
      transform.value.enableTransition = enableTransition;
    }
    vue.watch(currentImg, () => {
      vue.nextTick(() => {
        const $img = imgRefs.value[0];
        if (!($img == null ? void 0 : $img.complete)) {
          loading.value = true;
        }
      });
    });
    vue.watch(index, (val) => {
      reset();
      emit("switch", val);
    });
    vue.onMounted(() => {
      var _a, _b;
      registerEventListener();
      (_b = (_a = wrapper.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    });
    return {
      index,
      wrapper,
      imgRefs,
      isSingle,
      isFirst,
      isLast,
      currentImg,
      imgStyle,
      mode,
      computedZIndex,
      handleActions,
      prev,
      next,
      hide,
      toggleMode,
      handleImgLoad,
      handleImgError,
      handleMouseDown,
      ns
    };
  }
});
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close = vue.resolveComponent("close");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_arrow_left = vue.resolveComponent("arrow-left");
  const _component_arrow_right = vue.resolveComponent("arrow-right");
  const _component_zoom_out = vue.resolveComponent("zoom-out");
  const _component_zoom_in = vue.resolveComponent("zoom-in");
  const _component_refresh_left = vue.resolveComponent("refresh-left");
  const _component_refresh_right = vue.resolveComponent("refresh-right");
  return vue.openBlock(), vue.createBlock(vue.Teleport, {
    to: "body",
    disabled: !_ctx.teleported
  }, [
    vue.createVNode(vue.Transition, {
      name: "viewer-fade",
      appear: ""
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          ref: "wrapper",
          tabindex: -1,
          class: vue.normalizeClass(_ctx.ns.e("wrapper")),
          style: vue.normalizeStyle({ zIndex: _ctx.computedZIndex })
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(_ctx.ns.e("mask")),
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => _ctx.hideOnClickModal && _ctx.hide(), ["self"]))
          }, null, 2),
          vue.createCommentVNode(" CLOSE "),
          vue.createElementVNode("span", {
            class: vue.normalizeClass([_ctx.ns.e("btn"), _ctx.ns.e("close")]),
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.hide && _ctx.hide(...args))
          }, [
            vue.createVNode(_component_el_icon, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_close)
              ]),
              _: 1
            })
          ], 2),
          vue.createCommentVNode(" ARROW "),
          !_ctx.isSingle ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass([
                _ctx.ns.e("btn"),
                _ctx.ns.e("prev"),
                _ctx.ns.is("disabled", !_ctx.infinite && _ctx.isFirst)
              ]),
              onClick: _cache[2] || (_cache[2] = (...args) => _ctx.prev && _ctx.prev(...args))
            }, [
              vue.createVNode(_component_el_icon, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_arrow_left)
                ]),
                _: 1
              })
            ], 2),
            vue.createElementVNode("span", {
              class: vue.normalizeClass([
                _ctx.ns.e("btn"),
                _ctx.ns.e("next"),
                _ctx.ns.is("disabled", !_ctx.infinite && _ctx.isLast)
              ]),
              onClick: _cache[3] || (_cache[3] = (...args) => _ctx.next && _ctx.next(...args))
            }, [
              vue.createVNode(_component_el_icon, null, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_arrow_right)
                ]),
                _: 1
              })
            ], 2)
          ], 64)) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" ACTIONS "),
          vue.createElementVNode("div", {
            class: vue.normalizeClass([_ctx.ns.e("btn"), _ctx.ns.e("actions")])
          }, [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(_ctx.ns.e("actions__inner"))
            }, [
              vue.createVNode(_component_el_icon, {
                onClick: _cache[4] || (_cache[4] = ($event) => _ctx.handleActions("zoomOut"))
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_zoom_out)
                ]),
                _: 1
              }),
              vue.createVNode(_component_el_icon, {
                onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleActions("zoomIn"))
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_zoom_in)
                ]),
                _: 1
              }),
              vue.createElementVNode("i", {
                class: vue.normalizeClass(_ctx.ns.e("actions__divider"))
              }, null, 2),
              vue.createVNode(_component_el_icon, { onClick: _ctx.toggleMode }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.mode.icon)))
                ]),
                _: 1
              }, 8, ["onClick"]),
              vue.createElementVNode("i", {
                class: vue.normalizeClass(_ctx.ns.e("actions__divider"))
              }, null, 2),
              vue.createVNode(_component_el_icon, {
                onClick: _cache[6] || (_cache[6] = ($event) => _ctx.handleActions("anticlockwise"))
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_refresh_left)
                ]),
                _: 1
              }),
              vue.createVNode(_component_el_icon, {
                onClick: _cache[7] || (_cache[7] = ($event) => _ctx.handleActions("clockwise"))
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_refresh_right)
                ]),
                _: 1
              })
            ], 2)
          ], 2),
          vue.createCommentVNode(" CANVAS "),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(_ctx.ns.e("canvas"))
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.urlList, (url, i) => {
              return vue.withDirectives((vue.openBlock(), vue.createElementBlock("img", {
                ref_for: true,
                ref: (el) => _ctx.imgRefs[i] = el,
                key: url,
                src: url,
                style: vue.normalizeStyle(_ctx.imgStyle),
                class: vue.normalizeClass(_ctx.ns.e("img")),
                onLoad: _cache[8] || (_cache[8] = (...args) => _ctx.handleImgLoad && _ctx.handleImgLoad(...args)),
                onError: _cache[9] || (_cache[9] = (...args) => _ctx.handleImgError && _ctx.handleImgError(...args)),
                onMousedown: _cache[10] || (_cache[10] = (...args) => _ctx.handleMouseDown && _ctx.handleMouseDown(...args))
              }, null, 46, _hoisted_1)), [
                [vue.vShow, i === _ctx.index]
              ]);
            }), 128))
          ], 2),
          vue.renderSlot(_ctx.$slots, "default")
        ], 6)
      ]),
      _: 3
    })
  ], 8, ["disabled"]);
}
var ImageViewer = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = ImageViewer;
//# sourceMappingURL=image-viewer2.js.map
