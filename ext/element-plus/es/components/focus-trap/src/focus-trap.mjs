import { defineComponent, ref, provide, unref, onMounted, watch, onBeforeUnmount, renderSlot } from 'vue';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { getEdges, tryFocus, focusableStack, focusFirstDescendant, obtainAllFocusableElements } from './utils.mjs';
import { ON_MOUNT_FOCUS_EVT, ON_UNMOUNT_FOCUS_EVT, FOCUS_TRAP_INJECTION_KEY, FOCUS_ON_MOUNT, FOCUS_ON_MOUNT_OPTS, FOCUS_ON_UNMOUNT } from './tokens.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { EVENT_CODE } from '../../../constants/aria.mjs';
import { on, off } from '../../../utils/dom/event.mjs';

const _sfc_main = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean
  },
  emits: [ON_MOUNT_FOCUS_EVT, ON_UNMOUNT_FOCUS_EVT],
  setup(props, { emit }) {
    const focusTrapRef = ref();
    const forwardRef = ref(null);
    let lastFocusBeforeMounted;
    let lastFocusAfterMounted;
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      if (focusLayer.paused)
        return;
      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container)
            e.preventDefault();
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            e.preventDefault();
            if (loop)
              tryFocus(first, true);
          } else if (shiftKey && currentFocusingEl === first) {
            e.preventDefault();
            if (loop)
              tryFocus(last, true);
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    const focusOnMount = (e) => {
      emit(ON_MOUNT_FOCUS_EVT, e);
    };
    const focusOnUnmount = (e) => emit(ON_UNMOUNT_FOCUS_EVT, e);
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      const target = e.target;
      if (target && trapContainer.contains(target)) {
        lastFocusAfterMounted = target;
      } else {
        tryFocus(lastFocusAfterMounted, true);
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      if (!trapContainer.contains(e.relatedTarget)) {
        tryFocus(lastFocusAfterMounted, true);
      }
    };
    onMounted(() => {
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = document.activeElement;
        lastFocusBeforeMounted = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const mountEvent = new Event(FOCUS_ON_MOUNT, FOCUS_ON_MOUNT_OPTS);
          on(trapContainer, FOCUS_ON_MOUNT, focusOnMount);
          trapContainer.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
            if (document.activeElement === prevFocusedElement) {
              tryFocus(trapContainer);
            }
          }
        }
      }
      watch(() => props.trapped, (trapped) => {
        if (trapped) {
          on(document, "focusin", onFocusIn);
          on(document, "focusout", onFocusOut);
        } else {
          off(document, "focusin", onFocusIn);
          off(document, "focusout", onFocusOut);
        }
      }, { immediate: true });
    });
    onBeforeUnmount(() => {
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        off(trapContainer, FOCUS_ON_MOUNT, focusOnMount);
        const unmountEvent = new Event(FOCUS_ON_UNMOUNT, FOCUS_ON_MOUNT_OPTS);
        on(trapContainer, FOCUS_ON_UNMOUNT, focusOnUnmount);
        trapContainer.dispatchEvent(unmountEvent);
        if (!unmountEvent.defaultPrevented) {
          tryFocus(lastFocusBeforeMounted != null ? lastFocusBeforeMounted : document.body, true);
        }
        off(trapContainer, FOCUS_ON_UNMOUNT, focusOnUnmount);
        focusableStack.remove(focusLayer);
      }
    });
    return {
      focusTrapRef,
      forwardRef,
      onKeydown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { ElFocusTrap as default };
//# sourceMappingURL=focus-trap.mjs.map
