import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';

const calendarProps = buildProps({
  modelValue: {
    type: Date
  },
  range: {
    type: definePropType(Array),
    validator: (range) => Array.isArray(range) && range.length === 2 && range.every((item) => item instanceof Date)
  }
});
const calendarEmits = {
  [UPDATE_MODEL_EVENT]: (value) => value instanceof Date,
  input: (value) => value instanceof Date
};

export { calendarEmits, calendarProps };
//# sourceMappingURL=calendar.mjs.map
