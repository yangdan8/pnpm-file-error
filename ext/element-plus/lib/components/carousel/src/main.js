'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var lodashUnified = require('lodash-unified');
require('../../../utils/index.js');
var index = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$1 = require('../../../hooks/use-namespace/index.js');
var error = require('../../../utils/error.js');
var resizeEvent = require('../../../utils/dom/resize-event.js');

const _sfc_main = vue.defineComponent({
  name: "ElCarousel",
  components: {
    ElIcon: index.ElIcon,
    ArrowLeft: iconsVue.ArrowLeft,
    ArrowRight: iconsVue.ArrowRight
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
    const ns = index$1.useNamespace("carousel");
    const data = vue.reactive({
      activeIndex: -1,
      containerWidth: 0,
      timer: null,
      hover: false
    });
    const root = vue.ref(null);
    const items = vue.ref([]);
    const arrowDisplay = vue.computed(() => props.arrow !== "never" && props.direction !== "vertical");
    const hasLabel = vue.computed(() => {
      return items.value.some((item) => item.label.toString().length > 0);
    });
    const carouselClasses = vue.computed(() => {
      const classes = [ns.b(), ns.m(props.direction)];
      if (props.type === "card") {
        classes.push(ns.m("card"));
      }
      return classes;
    });
    const indicatorsClasses = vue.computed(() => {
      const classes = [ns.e("indicators"), ns.em("indicators", props.direction)];
      if (hasLabel.value) {
        classes.push(ns.em("indicators", "labels"));
      }
      if (props.indicatorPosition === "outside" || props.type === "card") {
        classes.push(ns.em("indicators", "outside"));
      }
      return classes;
    });
    const throttledArrowClick = lodashUnified.throttle((index) => {
      setActiveItem(index);
    }, 300, { trailing: true });
    const throttledIndicatorHover = lodashUnified.throttle((index) => {
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
        error.debugWarn("Carousel", "index must be an integer.");
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
    vue.watch(() => data.activeIndex, (current, prev2) => {
      resetItemPosition(prev2);
      if (prev2 > -1) {
        emit("change", current, prev2);
      }
    });
    vue.watch(() => props.autoplay, (current) => {
      current ? startTimer() : pauseTimer();
    });
    vue.watch(() => props.loop, () => {
      setActiveItem(data.activeIndex);
    });
    vue.onMounted(() => {
      vue.nextTick(() => {
        resizeEvent.addResizeListener(root.value, resetItemPosition);
        if (props.initialIndex < items.value.length && props.initialIndex >= 0) {
          data.activeIndex = props.initialIndex;
        }
        startTimer();
      });
    });
    vue.onBeforeUnmount(() => {
      if (root.value)
        resizeEvent.removeResizeListener(root.value, resetItemPosition);
      pauseTimer();
    });
    vue.provide("injectCarouselScope", {
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
  const _component_arrow_left = vue.resolveComponent("arrow-left");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_arrow_right = vue.resolveComponent("arrow-right");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "root",
    class: vue.normalizeClass(_ctx.carouselClasses),
    onMouseenter: _cache[6] || (_cache[6] = vue.withModifiers((...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args), ["stop"])),
    onMouseleave: _cache[7] || (_cache[7] = vue.withModifiers((...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args), ["stop"]))
  }, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass(_ctx.ns.e("container")),
      style: vue.normalizeStyle({ height: _ctx.height })
    }, [
      _ctx.arrowDisplay ? (vue.openBlock(), vue.createBlock(vue.Transition, {
        key: 0,
        name: "carousel-arrow-left"
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("button", {
            type: "button",
            class: vue.normalizeClass([_ctx.ns.e("arrow"), _ctx.ns.em("arrow", "left")]),
            onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.handleButtonEnter("left")),
            onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.handleButtonLeave && _ctx.handleButtonLeave(...args)),
            onClick: _cache[2] || (_cache[2] = vue.withModifiers(($event) => _ctx.throttledArrowClick(_ctx.data.activeIndex - 1), ["stop"]))
          }, [
            vue.createVNode(_component_el_icon, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_arrow_left)
              ]),
              _: 1
            })
          ], 34), [
            [
              vue.vShow,
              (_ctx.arrow === "always" || _ctx.data.hover) && (_ctx.props.loop || _ctx.data.activeIndex > 0)
            ]
          ])
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true),
      _ctx.arrowDisplay ? (vue.openBlock(), vue.createBlock(vue.Transition, {
        key: 1,
        name: "carousel-arrow-right"
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("button", {
            type: "button",
            class: vue.normalizeClass([_ctx.ns.e("arrow"), _ctx.ns.em("arrow", "right")]),
            onMouseenter: _cache[3] || (_cache[3] = ($event) => _ctx.handleButtonEnter("right")),
            onMouseleave: _cache[4] || (_cache[4] = (...args) => _ctx.handleButtonLeave && _ctx.handleButtonLeave(...args)),
            onClick: _cache[5] || (_cache[5] = vue.withModifiers(($event) => _ctx.throttledArrowClick(_ctx.data.activeIndex + 1), ["stop"]))
          }, [
            vue.createVNode(_component_el_icon, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_arrow_right)
              ]),
              _: 1
            })
          ], 34), [
            [
              vue.vShow,
              (_ctx.arrow === "always" || _ctx.data.hover) && (_ctx.props.loop || _ctx.data.activeIndex < _ctx.items.length - 1)
            ]
          ])
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default")
    ], 6),
    _ctx.indicatorPosition !== "none" ? (vue.openBlock(), vue.createElementBlock("ul", {
      key: 0,
      class: vue.normalizeClass(_ctx.indicatorsClasses)
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.items, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("li", {
          key: index,
          class: vue.normalizeClass([
            _ctx.ns.e("indicator"),
            _ctx.ns.em("indicator", _ctx.direction),
            _ctx.ns.is("active", index === _ctx.data.activeIndex)
          ]),
          onMouseenter: ($event) => _ctx.throttledIndicatorHover(index),
          onClick: vue.withModifiers(($event) => _ctx.handleIndicatorClick(index), ["stop"])
        }, [
          vue.createElementVNode("button", {
            class: vue.normalizeClass(_ctx.ns.e("button"))
          }, [
            _ctx.hasLabel ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(item.label), 1)) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], 42, _hoisted_1);
      }), 128))
    ], 2)) : vue.createCommentVNode("v-if", true)
  ], 34);
}
var Carousel = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Carousel;
//# sourceMappingURL=main.js.map
