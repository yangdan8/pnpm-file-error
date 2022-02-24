import { ref, watch } from 'vue';
import { NOOP } from '@vue/shared';
import { cloneDeep } from 'lodash-unified';

function getFile(rawFile, uploadFiles) {
  return uploadFiles.find((file) => file.uid === rawFile.uid);
}
function genUid(seed) {
  return Date.now() + seed;
}
var useHandlers = (props) => {
  const uploadFiles = ref([]);
  const uploadRef = ref(null);
  let tempIndex = 1;
  function abort(file) {
    uploadRef.value.abort(file);
  }
  function clearFiles(status = ["ready", "uploading", "success", "fail"]) {
    uploadFiles.value = uploadFiles.value.filter((row) => {
      return !status.includes(row.status);
    });
  }
  function handleError(err, rawFile) {
    const file = getFile(rawFile, uploadFiles.value);
    file.status = "fail";
    uploadFiles.value.splice(uploadFiles.value.indexOf(file), 1);
    props.onError(err, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  }
  function handleProgress(ev, rawFile) {
    const file = getFile(rawFile, uploadFiles.value);
    props.onProgress(ev, file, uploadFiles.value);
    file.status = "uploading";
    file.percentage = ev.percent || 0;
  }
  function handleSuccess(res, rawFile) {
    const file = getFile(rawFile, uploadFiles.value);
    if (file) {
      file.status = "success";
      file.response = res;
      props.onSuccess(res, file, uploadFiles.value);
      props.onChange(file, uploadFiles.value);
    }
  }
  function handleStart(rawFile) {
    const uid = genUid(tempIndex++);
    rawFile.uid = uid;
    const file = {
      name: rawFile.name,
      percentage: 0,
      status: "ready",
      size: rawFile.size,
      raw: rawFile,
      uid
    };
    if (props.listType === "picture-card" || props.listType === "picture") {
      try {
        file.url = URL.createObjectURL(rawFile);
      } catch (err) {
        console.error("[Element Error][Upload]", err);
        props.onError(err, file, uploadFiles.value);
      }
    }
    uploadFiles.value.push(file);
    props.onChange(file, uploadFiles.value);
  }
  function handleRemove(file, raw) {
    if (raw) {
      file = getFile(raw, uploadFiles.value);
    }
    const revokeObjectURL = () => {
      if (file.url && file.url.indexOf("blob:") === 0) {
        URL.revokeObjectURL(file.url);
      }
    };
    const doRemove = () => {
      abort(file);
      const fileList = uploadFiles.value;
      fileList.splice(fileList.indexOf(file), 1);
      props.onRemove(file, fileList);
      revokeObjectURL();
    };
    if (!props.beforeRemove) {
      doRemove();
    } else if (typeof props.beforeRemove === "function") {
      const before = props.beforeRemove(file, uploadFiles.value);
      if (before instanceof Promise) {
        before.then(() => {
          doRemove();
        }).catch(NOOP);
      } else if (before !== false) {
        doRemove();
      }
    }
  }
  function submit() {
    uploadFiles.value.filter((file) => file.status === "ready").forEach((file) => {
      uploadRef.value.upload(file.raw);
    });
  }
  watch(() => props.listType, (val) => {
    if (val === "picture-card" || val === "picture") {
      uploadFiles.value = uploadFiles.value.map((file) => {
        if (!file.url && file.raw) {
          try {
            file.url = URL.createObjectURL(file.raw);
          } catch (err) {
            props.onError(err, file, uploadFiles.value);
          }
        }
        return file;
      });
    }
  });
  watch(() => props.fileList, (fileList) => {
    uploadFiles.value = fileList.map((file) => {
      const cloneFile = cloneDeep(file);
      return {
        ...cloneFile,
        uid: file.uid || genUid(tempIndex++),
        status: file.status || "success"
      };
    });
  }, {
    immediate: true,
    deep: true
  });
  return {
    abort,
    clearFiles,
    handleError,
    handleProgress,
    handleStart,
    handleSuccess,
    handleRemove,
    submit,
    uploadFiles,
    uploadRef
  };
};

export { useHandlers as default };
//# sourceMappingURL=useHandlers.mjs.map
