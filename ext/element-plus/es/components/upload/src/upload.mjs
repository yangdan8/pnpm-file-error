import { defineComponent, ref, resolveComponent, openBlock, createElementBlock, normalizeClass, withKeys, withModifiers, createBlock, withCtx, renderSlot, createElementVNode } from 'vue';
import { NOOP, hasOwn } from '@vue/shared';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import upload from './ajax.mjs';
import UploadDragger from './upload-dragger.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  components: {
    UploadDragger
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: "file"
    },
    data: {
      type: Object,
      default: () => null
    },
    headers: {
      type: Object,
      default: () => null
    },
    method: {
      type: String,
      default: "post"
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: null
    },
    accept: {
      type: String,
      default: ""
    },
    onStart: {
      type: Function,
      default: NOOP
    },
    onProgress: {
      type: Function,
      default: NOOP
    },
    onSuccess: {
      type: Function,
      default: NOOP
    },
    onError: {
      type: Function,
      default: NOOP
    },
    beforeUpload: {
      type: Function,
      default: NOOP
    },
    drag: {
      type: Boolean,
      default: false
    },
    onPreview: {
      type: Function,
      default: NOOP
    },
    onRemove: {
      type: Function,
      default: NOOP
    },
    fileList: {
      type: Array,
      default: () => []
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    listType: {
      type: String,
      default: "text"
    },
    httpRequest: {
      type: Function,
      default: () => upload
    },
    disabled: Boolean,
    limit: {
      type: Number,
      default: null
    },
    onExceed: {
      type: Function,
      default: NOOP
    }
  },
  setup(props) {
    const reqs = ref({});
    const ns = useNamespace("upload");
    const mouseover = ref(false);
    const inputRef = ref(null);
    function uploadFiles(files) {
      if (props.limit && props.fileList.length + files.length > props.limit) {
        props.onExceed(files, props.fileList);
        return;
      }
      let postFiles = Array.from(files);
      if (!props.multiple) {
        postFiles = postFiles.slice(0, 1);
      }
      if (postFiles.length === 0) {
        return;
      }
      postFiles.forEach((rawFile) => {
        props.onStart(rawFile);
        if (props.autoUpload)
          upload(rawFile);
      });
    }
    function upload(rawFile) {
      inputRef.value.value = null;
      if (!props.beforeUpload) {
        return post(rawFile);
      }
      const before = props.beforeUpload(rawFile);
      if (before instanceof Promise) {
        before.then((processedFile) => {
          const fileType = Object.prototype.toString.call(processedFile);
          if (fileType === "[object File]" || fileType === "[object Blob]") {
            if (fileType === "[object Blob]") {
              processedFile = new File([processedFile], rawFile.name, {
                type: rawFile.type
              });
            }
            for (const p in rawFile) {
              if (hasOwn(rawFile, p)) {
                processedFile[p] = rawFile[p];
              }
            }
            post(processedFile);
          } else {
            post(rawFile);
          }
        }).catch(() => {
          props.onRemove(null, rawFile);
        });
      } else if (before !== false) {
        post(rawFile);
      } else {
        props.onRemove(null, rawFile);
      }
    }
    function abort(file) {
      const _reqs = reqs.value;
      if (file) {
        let uid = file;
        if (file.uid)
          uid = file.uid;
        if (_reqs[uid]) {
          ;
          _reqs[uid].abort();
        }
      } else {
        Object.keys(_reqs).forEach((uid) => {
          if (_reqs[uid])
            _reqs[uid].abort();
          delete _reqs[uid];
        });
      }
    }
    function post(rawFile) {
      const { uid } = rawFile;
      const options = {
        headers: props.headers,
        withCredentials: props.withCredentials,
        file: rawFile,
        data: props.data,
        method: props.method,
        filename: props.name,
        action: props.action,
        onProgress: (e) => {
          props.onProgress(e, rawFile);
        },
        onSuccess: (res) => {
          props.onSuccess(res, rawFile);
          delete reqs.value[uid];
        },
        onError: (err) => {
          props.onError(err, rawFile);
          delete reqs.value[uid];
        }
      };
      const req = props.httpRequest(options);
      reqs.value[uid] = req;
      if (req instanceof Promise) {
        req.then(options.onSuccess, options.onError);
      }
    }
    function handleChange(e) {
      const files = e.target.files;
      if (!files)
        return;
      uploadFiles(files);
    }
    function handleClick() {
      if (!props.disabled) {
        inputRef.value.value = null;
        inputRef.value.click();
      }
    }
    function handleKeydown() {
      handleClick();
    }
    return {
      ns,
      reqs,
      mouseover,
      inputRef,
      abort,
      post,
      handleChange,
      handleClick,
      handleKeydown,
      upload,
      uploadFiles
    };
  }
});
const _hoisted_1 = ["name", "multiple", "accept"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_upload_dragger = resolveComponent("upload-dragger");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.m(_ctx.listType)]),
    tabindex: "0",
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"]), ["enter", "space"]))
  }, [
    _ctx.drag ? (openBlock(), createBlock(_component_upload_dragger, {
      key: 0,
      disabled: _ctx.disabled,
      onFile: _ctx.uploadFiles
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["disabled", "onFile"])) : renderSlot(_ctx.$slots, "default", { key: 1 }),
    createElementVNode("input", {
      ref: "inputRef",
      class: normalizeClass(_ctx.ns.e("input")),
      type: "file",
      name: _ctx.name,
      multiple: _ctx.multiple,
      accept: _ctx.accept,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args))
    }, null, 42, _hoisted_1)
  ], 34);
}
var Upload = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Upload as default };
//# sourceMappingURL=upload.mjs.map
