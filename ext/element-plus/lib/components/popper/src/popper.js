'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@popperjs/core');
require('../../../utils/index.js');
var props = require('../../../utils/vue/props.js');

const effects = ["light", "dark"];
const triggers = ["click", "contextmenu", "hover", "focus"];
const Effect = {
  LIGHT: "light",
  DARK: "dark"
};
const usePopperArrowProps = props.buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
const usePopperCoreConfigProps = props.buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: props.definePropType(Array),
    default: () => []
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: core.placements,
    default: "bottom"
  },
  popperOptions: {
    type: props.definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: ["fixed", "absolute"],
    default: "absolute"
  }
});
const usePopperProps = props.buildProps({
  autoClose: {
    type: Number,
    default: 0
  },
  cutoff: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
const usePopperContentProps = props.buildProps({
  ...usePopperCoreConfigProps,
  style: { type: props.definePropType([String, Array, Object]) },
  className: { type: props.definePropType([String, Array, Object]) },
  effect: {
    type: String,
    default: "dark"
  },
  enterable: {
    type: Boolean,
    default: true
  },
  pure: {
    type: Boolean
  },
  popperClass: {
    type: props.definePropType([String, Array, Object])
  },
  popperStyle: {
    type: props.definePropType([String, Array, Object])
  },
  referenceEl: {
    type: props.definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  zIndex: Number
});
const usePopperTriggerProps = props.buildProps({
  virtualRef: {
    type: props.definePropType(Object)
  },
  virtualTriggering: {
    type: Boolean
  }
});

exports.Effect = Effect;
exports.usePopperArrowProps = usePopperArrowProps;
exports.usePopperContentProps = usePopperContentProps;
exports.usePopperCoreConfigProps = usePopperCoreConfigProps;
exports.usePopperProps = usePopperProps;
exports.usePopperTriggerProps = usePopperTriggerProps;
//# sourceMappingURL=popper.js.map
