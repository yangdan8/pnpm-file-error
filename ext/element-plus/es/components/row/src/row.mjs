import { defineComponent, computed, provide, h } from 'vue';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import { buildProps } from '../../../utils/vue/props.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const rowProps = buildProps({
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    values: ["start", "center", "end", "space-around", "space-between"],
    default: "start"
  },
  align: {
    type: String,
    values: ["top", "middle", "bottom"],
    default: "top"
  }
});
const Row = defineComponent({
  name: "ElRow",
  props: rowProps,
  setup(props, { slots }) {
    const ns = useNamespace("row");
    const gutter = computed(() => props.gutter);
    provide("ElRow", {
      gutter
    });
    const style = computed(() => {
      const styles = {
        marginLeft: "",
        marginRight: ""
      };
      if (props.gutter) {
        styles.marginLeft = `-${props.gutter / 2}px`;
        styles.marginRight = styles.marginLeft;
      }
      return styles;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: [
          ns.b(),
          ns.is(`justify-${props.justify}`, props.justify !== "start"),
          ns.is(`align-${props.align}`, props.align !== "top")
        ],
        style: style.value
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});

export { Row as default, rowProps };
//# sourceMappingURL=row.mjs.map
