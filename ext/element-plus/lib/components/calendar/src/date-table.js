'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index.js');
var props = require('../../../utils/vue/props.js');
var shared = require('@vue/shared');

const dateTableProps = props.buildProps({
  selectedDay: {
    type: props.definePropType(Object)
  },
  range: {
    type: props.definePropType(Array)
  },
  date: {
    type: props.definePropType(Object),
    required: true
  },
  hideHeader: {
    type: Boolean
  }
});
const dateTableEmits = {
  pick: (value) => shared.isObject(value)
};

exports.dateTableEmits = dateTableEmits;
exports.dateTableProps = dateTableProps;
//# sourceMappingURL=date-table.js.map
