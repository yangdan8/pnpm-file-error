import { defineComponent, watch, renderSlot } from 'vue';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props.mjs';
import { provideGlobalConfig } from '../../../hooks/use-global-config/index.mjs';

const messageConfig = {};
const configProviderProps = buildProps({
  locale: {
    type: definePropType(Object)
  },
  size: {
    type: String,
    values: ["large", "default", "small"]
  },
  button: {
    type: definePropType(Object)
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: {
    type: Number
  },
  namespace: {
    type: String,
    default: "el"
  }
});
var ConfigProvider = defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});

export { configProviderProps, ConfigProvider as default, messageConfig };
//# sourceMappingURL=config-provider.mjs.map
