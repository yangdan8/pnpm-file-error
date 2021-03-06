import { defineComponent, reactive, ref, computed, watch, onMounted, nextTick, onBeforeUnmount, provide, resolveComponent, openBlock, createElementBlock, normalizeClass, withModifiers, createElementVNode, normalizeStyle, createBlock, Transition, withCtx, withDirectives, createVNode, vShow, createCommentVNode, renderSlot, Fragment, renderList, toDisplayString } from 'vue';
import { throttle } from 'lodash-unified';
import '../../../utils/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import '../../../hooks/index.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { debugWarn } from '../../../utils/error.mjs';
import { addResizeListener, removeResizeListener } from '../../../utils/dom/resize-event.mjs';

const _sfc_main = defineComponent({
  name: "ElCarousel",
  components: {
    ElIcon,
    ArrowLeft,
    ArrowRight
  },
  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    height: { type: String, default: "" },
    trigger: {
      type: String,
      default: "hover"
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3e3
    },
    indicatorPosition: { type: String, default: "" },
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: String,
      default: "hover"
    },
    type: { type: String, default: "" },
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].includes(val);
      }
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const ns = useNamespace("carousel");
    const data = reactive({
      activeIndex: -1,
      containerWidth: 0,
      timer: null,
      hover: false
    });
    const root = ref(null);
    const items = ref([]);
    const arrowDisplay = computed(() => props.arrow !== "never" && props.direction !== "vertical");
    const hasLabel = computed(() => {
      return items.value.some((item) => item.label.toString().length > 0);
    });
    const carouselClasses = computed(() => {
      const classes = [ns.b(), ns.m(props.direction)];
      if (props.type === "card") {
        classes.push(ns.m("card"));
      }
      return classes;
    });
    const indicatorsClasses = computed(() => {
      const classes = [ns.e("indicators"), ns.em("indicators", props.direction)];
      if (hasLabel.value) {
        classes.push(ns.em("indicators", "labels"));
      }
      if (props.indicatorPosition === "outside" || props.type === "card") {
        classes.push(ns.em("indicators", "outside"));
      }
      return classes;
    });
    const throttledArrowClick = throttle((index) => {
      setActiveItem(index);
    }, 300, { trailing: true });
    const throttledIndicatorHover = throttle((index) => {
      handleIndicatorHover(index);
    }, 300);
    function pauseTimer() {
      if (data.timer) {
        clearInterval(data.timer);
        data.timer = null;
      }
    }
    function startTimer() {
      if (props.interval <= 0 || !props.autoplay || data.timer)
        return;
      data.timer = setInterval(() => playSlides(), props.interval);
    }
    const playSlides = () => {
      if (data.activeIndex < items.value.length - 1) {
        data.activeIndex = data.activeIndex + 1;
      } else if (props.loop) {
        data.activeIndex = 0;
      }
    };
    function setActiveItem(index) {
      if (typeof index === "string") {
        const filteredItems = items.value.filter((item) => item.name === index);
        if (filteredItems.length > 0) {
          index = items.value.indexOf(filteredItems[0]);
        }
      }
      index = Number(index);
      if (isNaN(index) || index !== Math.floor(index)) {
        debugWarn("Carousel", "index must be an integer.");
        return;
      }
      const length = items.value.length;
      const oldIndex = data.activeIndex;
      if (index < 0) {
        data.activeIndex = props.loop ? length - 1 : 0;
      } else if (index >= length) {
        data.activeIndex = props.loop ? 0 : length - 1;
      } else {
        data.activeIndex = index;
      }
      if (oldIndex === data.activeIndex) {
        resetItemPosition(oldIndex);
      }
    }
    function resetItemPosition(oldIndex) {
      items.value.forEach((item, index) => {
        item.translateItem(index, data.activeIndex, oldIndex);
      });
    }
    function addItem(item) {
      items.value.push(item);
    }
    function removeItem(uid) {
      const index = items.value.findIndex((item) => item.uid === uid);
      if (index !== -1) {
        items.value.splice(index, 1);
        if (data.activeIndex === index)
          next();
      }
    }
    function itemInStage(item, index) {
      const length = items.value.length;
      if (index === length - 1 && item.inStage && items.value[0].active || item.inStage && items.value[index + 1] && items.value[index + 1].active) {
        return "left";
      } else if (index === 0 && item.inStage && items.value[length - 1].active || item.inStage && items.value[index - 1] && items.value[index - 1].active) {
        return "right";
      }
      return false;
    }
    function handleMouseEnter() {
      data.hover = true;
      if (props.pauseOnHover) {
        pauseTimer();
      }
    }
    function handleMouseLeave() {
      data.hover = false;
      startTimer();
    }
    function handleButtonEnter(arrow) {
      if (props.direction === "vertical")
        return;
      items.value.forEach((item, index) => {
        if (arrow === itemInStage(item, index)) {
          item.hover = true;
        }
      });
    }
    function handleButtonLeave() {
      if (props.direction === "vertical")
        return;
      items.value.forEach((item) => {
        item.hover = false;
      });
    }
    function handleIndicatorClick(index) {
      data.activeIndex = index;
    }
    function handleIndicatorHover(index) {
      if (props.trigger === "hover" && index !== data.activeIndex) {
        data.activeIndex = index;
      }
    }
    function prev() {
      setActiveItem(data.activeIndex - 1);
    }
    function next() {
      setActiveItem(data.activeIndex + 1);
    }
    watch(() => data.activeIndex, (current, prev2) => {
      resetItemPosition(prev2);
      if (prev2 > -1) {
        emit("change", current, prev2);
      }
    });
    watch(() => props.autoplay, (current) => {
      current ? startTimer() : pauseTimer();
    });
    watch(() => props.loop, () => {
      setActiveItem(data.activeIndex);
    });
    onMounted(() => {
      nextTick(() => {
        addResizeListener(root.value, resetItemPosition);
        if (props.initialIndex < items.value.length && props.initialIndex >= 0) {
          data.activeIndex = props.initialIndex;
        }
        startTimer();
      });
    });
    onBeforeUnmount(() => {
      if (root.value)
        removeResizeListener(root.value, resetItemPosition);
      pauseTimer();
    });
    provide("injectCarouselScope", {
      root,
      direction: props.direction,
      type: props.type,
      items,
      loop: props.loop,
      addItem,
      removeItem,
      setActiveItem
    });
    return {
      data,
      props,
      items,
      arrowDisplay,
      carouselClasses,
      indicatorsClasses,
      hasLabel,
      handleMouseEnter,
      handleMouseLeave,
      handleIndicatorClick,
      throttledArrowClick,
      throttledIndicatorHover,
      handleButtonEnter,
      handleButtonLeave,
      prev,
      next,
      setActiveItem,
      root,
      ns
    };
  }
});
const _hoisted_1 = ["onMouseenter", "onClick"];
const _hoisted_2 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_left = resolveComponent("arrow-left");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_right = resolveComponent("arrow-right");
  return openBlock(), createElementBlock("div", {
    ref: "root",
    class: normalizeClass(_ctx.carouselClasses),
    onMouseenter: _cache[6] || (_cache[6] = withModifiers((...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args), ["stop"])),
    onMouseleave: _cache[7] || (_cache[7] = withModifiers((...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args), ["stop"]))
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("container")),
      style: normalizeStyle({ height: _ctx.height })
    }, [
      _ctx.arrowDisplay ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: "carousel-arrow-left"
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("button", {
            type: "button",
            class: normalizeClass([_ctx.ns.e("arrow"), _ctx.ns.em("arrow", "left")]),
            onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.handleButtonEnter("left")),
            onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.handleButtonLeave && _ctx.handleButtonLeave(...args)),
            onClick: _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.throttledArrowClick(_ctx.data.activeIndex - 1), ["stop"]))
          }, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_arrow_left)
              ]),
              _: 1
            })
          ], 34), [
            [
              vShow,
              (_ctx.arrow === "always" || _ctx.data.hover) && (_ctx.props.loop || _ctx.data.activeIndex > 0)
            ]
          ])
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      _ctx.arrowDisplay ? (openBlock(), createBlock(Transition, {
        key: 1,
        name: "carousel-arrow-right"
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("button", {
            type: "button",
            class: normalizeClass([_ctx.ns.e("arrow"), _ctx.ns.em("arrow", "right")]),
            onMouseenter: _cache[3] || (_cache[3] = ($event) => _ctx.handleButtonEnter("right")),
            onMouseleave: _cache[4] || (_cache[4] = (...args) => _ctx.handleButtonLeave && _ctx.handleButtonLeave(...args)),
            onClick: _cache[5] || (_cache[5] = withModifiers(($event) => _ctx.throttledArrowClick(_ctx.data.activeIndex + 1), ["stop"]))
          }, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_arrow_right)
              ]),
              _: 1
            })
          ], 34), [
            [
              vShow,
              (_ctx.arrow === "always" || _ctx.data.hover) && (_ctx.props.loop || _ctx.data.activeIndex < _ctx.items.length - 1)
            ]
          ])
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ], 6),
    _ctx.indicatorPosition !== "none" ? (openBlock(), createElementBlock("ul", {
      key: 0,
      class: normalizeClass(_ctx.indicatorsClasses)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
        return openBlock(), createElementBlock("li", {
          key: index,
          class: normalizeClass([
            _ctx.ns.e("indicator"),
            _ctx.ns.em("indicator", _ctx.direction),
            _ctx.ns.is("active", index === _ctx.data.activeIndex)
          ]),
          onMouseenter: ($event) => _ctx.throttledIndicatorHover(index),
          onClick: withModifiers(($event) => _ctx.handleIndicatorClick(index), ["stop"])
        }, [
          createElementVNode("button", {
            class: normalizeClass(_ctx.ns.e("button"))
          }, [
            _ctx.hasLabel ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(item.label), 1)) : createCommentVNode("v-if", true)
          ], 2)
        ], 42, _hoisted_1);
      }), 128))
    ], 2)) : createCommentVNode("v-if", true)
  ], 34);
}
var Carousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Carousel as default };
//# sourceMappingURL=main.mjs.map
