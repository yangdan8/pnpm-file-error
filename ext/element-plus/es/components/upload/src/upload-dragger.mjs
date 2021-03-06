import { defineComponent, inject, ref, openBlock, createElementBlock, normalizeClass, withModifiers, renderSlot } from 'vue';
import '../../../hooks/index.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElUploadDrag",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["file"],
  setup(props, { emit }) {
    const uploader = inject("uploader", {});
    const ns = useNamespace("upload");
    const dragover = ref(false);
    function onDrop(e) {
      var _a;
      if (props.disabled || !uploader)
        return;
      const accept = ((_a = uploader.props) == null ? void 0 : _a.accept) || uploader.accept;
      dragover.value = false;
      if (!accept) {
        emit("file", e.dataTransfer.files);
        return;
      }
      emit("file", Array.from(e.dataTransfer.files).filter((file) => {
        const { type, name } = file;
        const extension = name.indexOf(".") > -1 ? `.${name.split(".").pop()}` : "";
        const baseType = type.replace(/\/.*$/, "");
        return accept.split(",").map((type2) => type2.trim()).filter((type2) => type2).some((acceptedType) => {
          if (acceptedType.startsWith(".")) {
            return extension === acceptedType;
          }
          if (/\/\*$/.test(acceptedType)) {
            return baseType === acceptedType.replace(/\/\*$/, "");
          }
          if (/^[^/]+\/[^/]+$/.test(acceptedType)) {
            return type === acceptedType;
          }
          return false;
        });
      }));
    }
    function onDragover() {
      if (!props.disabled)
        dragover.value = true;
    }
    return {
      ns,
      dragover,
      onDrop,
      onDragover
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dragger"), _ctx.ns.is("dragover", _ctx.dragover)]),
    onDrop: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.onDrop && _ctx.onDrop(...args), ["prevent"])),
    onDragover: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.onDragover && _ctx.onDragover(...args), ["prevent"])),
    onDragleave: _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.dragover = false, ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 34);
}
var UploadDragger = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { UploadDragger as default };
//# sourceMappingURL=upload-dragger.mjs.map
