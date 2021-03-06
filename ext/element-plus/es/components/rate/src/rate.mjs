import { StarFilled, Star } from '@element-plus/icons-vue';
import '../../../constants/index.mjs';
import '../../../utils/index.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props.mjs';
import { mutable } from '../../../utils/typescript.mjs';
import { iconPropType } from '../../../utils/vue/icon.mjs';
import { isValidComponentSize } from '../../../utils/vue/validator.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';

const rateProps = buildProps({
  modelValue: {
    type: Number,
    default: 0
  },
  lowThreshold: {
    type: Number,
    default: 2
  },
  highThreshold: {
    type: Number,
    default: 4
  },
  max: {
    type: Number,
    default: 5
  },
  colors: {
    type: definePropType([Array, Object]),
    default: () => mutable([
      "var(--el-rate-star-color)",
      "var(--el-rate-star-color)",
      "var(--el-rate-star-color)"
    ])
  },
  voidColor: {
    type: String,
    default: "var(--el-rate-void-color)"
  },
  disabledVoidColor: {
    type: String,
    default: "var(--el-rate-disable-void-color)"
  },
  icons: {
    type: definePropType([Array, Object]),
    default: () => [StarFilled, StarFilled, StarFilled]
  },
  voidIcon: {
    type: iconPropType,
    default: () => Star
  },
  disabledvoidIcon: {
    type: iconPropType,
    default: () => StarFilled
  },
  disabled: {
    type: Boolean,
    default: false
  },
  allowHalf: {
    type: Boolean,
    default: false
  },
  showText: {
    type: Boolean,
    default: false
  },
  showScore: {
    type: Boolean,
    default: false
  },
  textColor: {
    type: String,
    default: "var(--el-rate-text-color)"
  },
  texts: {
    type: definePropType(Array),
    default: () => mutable([
      "Extremely bad",
      "Disappointed",
      "Fair",
      "Satisfied",
      "Surprise"
    ])
  },
  scoreTemplate: {
    type: String,
    default: "{value}"
  },
  size: {
    type: String,
    validator: isValidComponentSize
  }
});
const rateEmits = {
  change: (value) => typeof value === "number",
  [UPDATE_MODEL_EVENT]: (value) => typeof value === "number"
};

export { rateEmits, rateProps };
//# sourceMappingURL=rate.mjs.map
