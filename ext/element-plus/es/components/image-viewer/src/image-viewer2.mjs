import { markRaw, defineComponent, ref, effectScope, computed, watch, nextTick, onMounted, resolveComponent, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, createElementVNode, normalizeClass, normalizeStyle, withModifiers, createCommentVNode, createElementBlock, Fragment, resolveDynamicComponent, renderList, withDirectives, vShow, renderSlot } from 'vue';
import { isNumber, useEventListener } from '@vueuse/core';
import { throttle } from 'lodash-unified';
import { ElIcon } from '../../icon/index.mjs';
import '../../../hooks/index.mjs';
import '../../../constants/index.mjs';
import '../../../utils/index.mjs';
import { FullScreen, ScaleToOriginal, Close, ArrowLeft, ArrowRight, ZoomOut, ZoomIn, RefreshLeft, RefreshRight } from '@element-plus/icons-vue';
import { imageViewerProps, imageViewerEmits } from './image-viewer.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { isFirefox } from '../../../utils/browser.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { useZIndex } from '../../../hooks/use-z-index/index.mjs';
import { EVENT_CODE } from '../../../constants/aria.mjs';

const Mode = {
  CONTAIN: {
    name: "contain",
    icon: markRaw(FullScreen)
  },
  ORIGINAL: {
    name: "original",
    icon: markRaw(ScaleToOriginal)
  }
};
const mousewheelEventName = isFirefox() ? "DOMMouseScroll" : "mousewheel";
const _sfc_main = defineComponent({
  name: "ElImageViewer",
  components: {
    ElIcon,
    Close,
    ArrowLeft,
    ArrowRight,
    ZoomOut,
    ZoomIn,
    RefreshLeft,
    RefreshRight
  },
  props: imageViewerProps,
  emits: imageViewerEmits,
  setup(props, { emit }) {
    const { t } = useLocale();
    const ns = useNamespace("image-viewer");
    const { nextZIndex } = useZIndex();
    const wrapper = ref();
    const imgRefs = ref([]);
    const scopeEventListener = effectScope();
    const loading = ref(true);
    const index = ref(props.initialIndex);
    const mode = ref(Mode.CONTAIN);
    const transform = ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const isSingle = computed(() => {
      const { urlList } = props;
      return urlList.length <= 1;
    });
    const isFirst = computed(() => {
      return index.value === 0;
    });
    const isLast = computed(() => {
      return index.value === props.urlList.length - 1;
    });
    const currentImg = computed(() => {
      return props.urlList[index.value];
    });
    const imgStyle = computed(() => {
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
    const computedZIndex = computed(() => {
      return isNumber(props.zIndex) ? props.zIndex : nextZIndex();
    });
    function hide() {
      unregisterEventListener();
      emit("close");
    }
    function registerEventListener() {
      const keydownHandler = throttle((e) => {
        switch (e.code) {
          case EVENT_CODE.esc:
            hide();
            break;
          case EVENT_CODE.space:
            toggleMode();
            break;
          case EVENT_CODE.left:
            prev();
            break;
          case EVENT_CODE.up:
            handleActions("zoomIn");
            break;
          case EVENT_CODE.right:
            next();
            break;
          case EVENT_CODE.down:
            handleActions("zoomOut");
            break;
        }
      });
      const mousewheelHandler = throttle((e) => {
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
        useEventListener(document, "keydown", keydownHandler);
        useEventListener(document, mousewheelEventName, mousewheelHandler);
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
      const dragHandler = throttle((ev) => {
        transform.value = {
          ...transform.value,
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY
        };
      });
      const removeMousemove = useEventListener(document, "mousemove", dragHandler);
      useEventListener(document, "mouseup", () => {
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
    watch(currentImg, () => {
      nextTick(() => {
        const $img = imgRefs.value[0];
        if (!($img == null ? void 0 : $img.complete)) {
          loading.value = true;
        }
      });
    });
    watch(index, (val) => {
      reset();
      emit("switch", val);
    });
    onMounted(() => {
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
  const _component_close = resolveComponent("close");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_left = resolveComponent("arrow-left");
  const _component_arrow_right = resolveComponent("arrow-right");
  const _component_zoom_out = resolveComponent("zoom-out");
  const _component_zoom_in = resolveComponent("zoom-in");
  const _component_refresh_left = resolveComponent("refresh-left");
  const _component_refresh_right = resolveComponent("refresh-right");
  return openBlock(), createBlock(Teleport, {
    to: "body",
    disabled: !_ctx.teleported
  }, [
    createVNode(Transition, {
      name: "viewer-fade",
      appear: ""
    }, {
      default: withCtx(() => [
        createElementVNode("div", {
          ref: "wrapper",
          tabindex: -1,
          class: normalizeClass(_ctx.ns.e("wrapper")),
          style: normalizeStyle({ zIndex: _ctx.computedZIndex })
        }, [
          createElementVNode("div", {
            class: normalizeClass(_ctx.ns.e("mask")),
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.hideOnClickModal && _ctx.hide(), ["self"]))
          }, null, 2),
          createCommentVNode(" CLOSE "),
          createElementVNode("span", {
            class: normalizeClass([_ctx.ns.e("btn"), _ctx.ns.e("close")]),
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.hide && _ctx.hide(...args))
          }, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_close)
              ]),
              _: 1
            })
          ], 2),
          createCommentVNode(" ARROW "),
          !_ctx.isSingle ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createElementVNode("span", {
              class: normalizeClass([
                _ctx.ns.e("btn"),
                _ctx.ns.e("prev"),
                _ctx.ns.is("disabled", !_ctx.infinite && _ctx.isFirst)
              ]),
              onClick: _cache[2] || (_cache[2] = (...args) => _ctx.prev && _ctx.prev(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_arrow_left)
                ]),
                _: 1
              })
            ], 2),
            createElementVNode("span", {
              class: normalizeClass([
                _ctx.ns.e("btn"),
                _ctx.ns.e("next"),
                _ctx.ns.is("disabled", !_ctx.infinite && _ctx.isLast)
              ]),
              onClick: _cache[3] || (_cache[3] = (...args) => _ctx.next && _ctx.next(...args))
            }, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_arrow_right)
                ]),
                _: 1
              })
            ], 2)
          ], 64)) : createCommentVNode("v-if", true),
          createCommentVNode(" ACTIONS "),
          createElementVNode("div", {
            class: normalizeClass([_ctx.ns.e("btn"), _ctx.ns.e("actions")])
          }, [
            createElementVNode("div", {
              class: normalizeClass(_ctx.ns.e("actions__inner"))
            }, [
              createVNode(_component_el_icon, {
                onClick: _cache[4] || (_cache[4] = ($event) => _ctx.handleActions("zoomOut"))
              }, {
                default: withCtx(() => [
                  createVNode(_component_zoom_out)
                ]),
                _: 1
              }),
              createVNode(_component_el_icon, {
                onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleActions("zoomIn"))
              }, {
                default: withCtx(() => [
                  createVNode(_component_zoom_in)
                ]),
                _: 1
              }),
              createElementVNode("i", {
                class: normalizeClass(_ctx.ns.e("actions__divider"))
              }, null, 2),
              createVNode(_component_el_icon, { onClick: _ctx.toggleMode }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.mode.icon)))
                ]),
                _: 1
              }, 8, ["onClick"]),
              createElementVNode("i", {
                class: normalizeClass(_ctx.ns.e("actions__divider"))
              }, null, 2),
              createVNode(_component_el_icon, {
                onClick: _cache[6] || (_cache[6] = ($event) => _ctx.handleActions("anticlockwise"))
              }, {
                default: withCtx(() => [
                  createVNode(_component_refresh_left)
                ]),
                _: 1
              }),
              createVNode(_component_el_icon, {
                onClick: _cache[7] || (_cache[7] = ($event) => _ctx.handleActions("clockwise"))
              }, {
                default: withCtx(() => [
                  createVNode(_component_refresh_right)
                ]),
                _: 1
              })
            ], 2)
          ], 2),
          createCommentVNode(" CANVAS "),
          createElementVNode("div", {
            class: normalizeClass(_ctx.ns.e("canvas"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.urlList, (url, i) => {
              return withDirectives((openBlock(), createElementBlock("img", {
                ref_for: true,
                ref: (el) => _ctx.imgRefs[i] = el,
                key: url,
                src: url,
                style: normalizeStyle(_ctx.imgStyle),
                class: normalizeClass(_ctx.ns.e("img")),
                onLoad: _cache[8] || (_cache[8] = (...args) => _ctx.handleImgLoad && _ctx.handleImgLoad(...args)),
                onError: _cache[9] || (_cache[9] = (...args) => _ctx.handleImgError && _ctx.handleImgError(...args)),
                onMousedown: _cache[10] || (_cache[10] = (...args) => _ctx.handleMouseDown && _ctx.handleMouseDown(...args))
              }, null, 46, _hoisted_1)), [
                [vShow, i === _ctx.index]
              ]);
            }), 128))
          ], 2),
          renderSlot(_ctx.$slots, "default")
        ], 6)
      ]),
      _: 3
    })
  ], 8, ["disabled"]);
}
var ImageViewer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { ImageViewer as default };
//# sourceMappingURL=image-viewer2.mjs.map
