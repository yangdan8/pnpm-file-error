'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var index$1 = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index.js');
var index = require('../../progress/index.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$2 = require('../../../hooks/use-locale/index.js');
var index$3 = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElUploadList",
  components: {
    ElProgress: index.ElProgress,
    ElIcon: index$1.ElIcon,
    Document: iconsVue.Document,
    Delete: iconsVue.Delete,
    Close: iconsVue.Close,
    ZoomIn: iconsVue.ZoomIn,
    Check: iconsVue.Check,
    CircleCheck: iconsVue.CircleCheck
  },
  props: {
    files: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    handlePreview: {
      type: Function,
      default: () => shared.NOOP
    },
    listType: {
      type: String,
      default: "text"
    }
  },
  emits: ["remove"],
  setup(props, { emit }) {
    const { t } = index$2.useLocale();
    const nsUpload = index$3.useNamespace("upload");
    const nsIcon = index$3.useNamespace("icon");
    const nsList = index$3.useNamespace("list");
    const handleClick = (file) => {
      props.handlePreview(file);
    };
    const onFileClicked = (e) => {
      ;
      e.target.focus();
    };
    const handleRemove = (file) => {
      emit("remove", file);
    };
    return {
      focusing: vue.ref(false),
      handleClick,
      handleRemove,
      onFileClicked,
      t,
      nsUpload,
      nsIcon,
      nsList
    };
  }
});
const _hoisted_1 = ["onKeydown"];
const _hoisted_2 = ["src"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_document = vue.resolveComponent("document");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_circle_check = vue.resolveComponent("circle-check");
  const _component_check = vue.resolveComponent("check");
  const _component_close = vue.resolveComponent("close");
  const _component_el_progress = vue.resolveComponent("el-progress");
  const _component_zoom_in = vue.resolveComponent("zoom-in");
  const _component_delete = vue.resolveComponent("delete");
  return vue.openBlock(), vue.createBlock(vue.TransitionGroup, {
    tag: "ul",
    class: vue.normalizeClass([
      _ctx.nsUpload.b("list"),
      _ctx.nsUpload.bm("list", _ctx.listType),
      _ctx.nsUpload.is("disabled", _ctx.disabled)
    ]),
    name: _ctx.nsList.b()
  }, {
    default: vue.withCtx(() => [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.files, (file) => {
        return vue.openBlock(), vue.createElementBlock("li", {
          key: file.uid || file,
          class: vue.normalizeClass([
            _ctx.nsUpload.be("list", "item"),
            _ctx.nsUpload.is(file.status),
            { focusing: _ctx.focusing }
          ]),
          tabindex: "0",
          onKeydown: vue.withKeys(($event) => !_ctx.disabled && _ctx.handleRemove(file), ["delete"]),
          onFocus: _cache[0] || (_cache[0] = ($event) => _ctx.focusing = true),
          onBlur: _cache[1] || (_cache[1] = ($event) => _ctx.focusing = false),
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onFileClicked && _ctx.onFileClicked(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "default", { file }, () => [
            file.status !== "uploading" && ["picture-card", "picture"].includes(_ctx.listType) ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 0,
              class: vue.normalizeClass(_ctx.nsUpload.be("list", "item-thumbnail")),
              src: file.url,
              alt: ""
            }, null, 10, _hoisted_2)) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("a", {
              class: vue.normalizeClass(_ctx.nsUpload.be("list", "item-name")),
              onClick: ($event) => _ctx.handleClick(file)
            }, [
              vue.createVNode(_component_el_icon, {
                class: vue.normalizeClass(_ctx.nsIcon.m("document"))
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_document)
                ]),
                _: 1
              }, 8, ["class"]),
              vue.createTextVNode(" " + vue.toDisplayString(file.name), 1)
            ], 10, _hoisted_3),
            vue.createElementVNode("label", {
              class: vue.normalizeClass(_ctx.nsUpload.be("list", "item-status-label"))
            }, [
              _ctx.listType === "text" ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
                key: 0,
                class: vue.normalizeClass([_ctx.nsIcon.m("upload-success"), _ctx.nsIcon.m("circle-check")])
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_circle_check)
                ]),
                _: 1
              }, 8, ["class"])) : ["picture-card", "picture"].includes(_ctx.listType) ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
                key: 1,
                class: vue.normalizeClass([_ctx.nsIcon.m("upload-success"), _ctx.nsIcon.m("check")])
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_check)
                ]),
                _: 1
              }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
            ], 2),
            !_ctx.disabled ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
              key: 1,
              class: vue.normalizeClass(_ctx.nsIcon.m("close")),
              onClick: ($event) => _ctx.handleRemove(file)
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_close)
              ]),
              _: 2
            }, 1032, ["class", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),
            vue.createCommentVNode(" This is a bug which needs to be fixed "),
            vue.createCommentVNode(" TODO: Fix the incorrect navigation interaction "),
            !_ctx.disabled ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 2,
              class: vue.normalizeClass(_ctx.nsIcon.m("close-tip"))
            }, vue.toDisplayString(_ctx.t("el.upload.deleteTip")), 3)) : vue.createCommentVNode("v-if", true),
            file.status === "uploading" ? (vue.openBlock(), vue.createBlock(_component_el_progress, {
              key: 3,
              type: _ctx.listType === "picture-card" ? "circle" : "line",
              "stroke-width": _ctx.listType === "picture-card" ? 6 : 2,
              percentage: +file.percentage,
              style: { "margin-top": "0.5rem" }
            }, null, 8, ["type", "stroke-width", "percentage"])) : vue.createCommentVNode("v-if", true),
            _ctx.listType === "picture-card" ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 4,
              class: vue.normalizeClass(_ctx.nsUpload.be("list", "item-actions"))
            }, [
              vue.createElementVNode("span", {
                class: vue.normalizeClass(_ctx.nsUpload.be("list", "item-preview")),
                onClick: ($event) => _ctx.handlePreview(file)
              }, [
                vue.createVNode(_component_el_icon, {
                  class: vue.normalizeClass(_ctx.nsIcon.m("zoom-in"))
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_zoom_in)
                  ]),
                  _: 1
                }, 8, ["class"])
              ], 10, _hoisted_4),
              !_ctx.disabled ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                class: vue.normalizeClass(_ctx.nsUpload.be("list", "item-delete")),
                onClick: ($event) => _ctx.handleRemove(file)
              }, [
                vue.createVNode(_component_el_icon, {
                  class: vue.normalizeClass(_ctx.nsIcon.m("delete"))
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_delete)
                  ]),
                  _: 1
                }, 8, ["class"])
              ], 10, _hoisted_5)) : vue.createCommentVNode("v-if", true)
            ], 2)) : vue.createCommentVNode("v-if", true)
          ])
        ], 42, _hoisted_1);
      }), 128))
    ]),
    _: 3
  }, 8, ["class", "name"]);
}
var UploadList = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = UploadList;
//# sourceMappingURL=upload-list.js.map
