'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var ajax = require('./ajax.js');
var uploadDragger = require('./upload-dragger.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  components: {
    UploadDragger: uploadDragger["default"]
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
      default: shared.NOOP
    },
    onProgress: {
      type: Function,
      default: shared.NOOP
    },
    onSuccess: {
      type: Function,
      default: shared.NOOP
    },
    onError: {
      type: Function,
      default: shared.NOOP
    },
    beforeUpload: {
      type: Function,
      default: shared.NOOP
    },
    drag: {
      type: Boolean,
      default: false
    },
    onPreview: {
      type: Function,
      default: shared.NOOP
    },
    onRemove: {
      type: Function,
      default: shared.NOOP
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
      default: () => ajax["default"]
    },
    disabled: Boolean,
    limit: {
      type: Number,
      default: null
    },
    onExceed: {
      type: Function,
      default: shared.NOOP
    }
  },
  setup(props) {
    const reqs = vue.ref({});
    const ns = index.useNamespace("upload");
    const mouseover = vue.ref(false);
    const inputRef = vue.ref(null);
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
              if (shared.hasOwn(rawFile, p)) {
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
  const _component_upload_dragger = vue.resolveComponent("upload-dragger");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass([_ctx.ns.b(), _ctx.ns.m(_ctx.listType)]),
    tabindex: "0",
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    onKeydown: _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"]), ["enter", "space"]))
  }, [
    _ctx.drag ? (vue.openBlock(), vue.createBlock(_component_upload_dragger, {
      key: 0,
      disabled: _ctx.disabled,
      onFile: _ctx.uploadFiles
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["disabled", "onFile"])) : vue.renderSlot(_ctx.$slots, "default", { key: 1 }),
    vue.createElementVNode("input", {
      ref: "inputRef",
      class: vue.normalizeClass(_ctx.ns.e("input")),
      type: "file",
      name: _ctx.name,
      multiple: _ctx.multiple,
      accept: _ctx.accept,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args))
    }, null, 42, _hoisted_1)
  ], 34);
}
var Upload = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Upload;
//# sourceMappingURL=upload.js.map
