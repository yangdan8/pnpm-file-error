import { defineComponent, inject, withDirectives, cloneVNode, Fragment, Text, h, Comment } from 'vue';
import { NOOP, isObject } from '@vue/shared';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import { FORWARD_REF_INJECTION_KEY, useForwardRefDirective } from '../../../hooks/use-forward-ref/index.mjs';
import { debugWarn } from '../../../utils/error.mjs';

const NAME = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME,
  setup(_, { slots, attrs }) {
    var _a;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY, void 0);
    const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection.setForwardRef) != null ? _a : NOOP);
    return () => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        debugWarn(NAME, "ElOnlyChild requires exact only one valid child.");
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        debugWarn(NAME, "no valid child node found");
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [
        [forwardRefDirective]
      ]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  return h("span", { class: "el-only-child__content" }, [s]);
}

export { OnlyChild as default };
//# sourceMappingURL=only-child.mjs.map
