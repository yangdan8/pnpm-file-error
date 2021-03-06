import type { configProviderProps } from 'element-plus/es/components/config-provider';
import type { InjectionKey, ExtractPropTypes, Ref } from 'vue';
export declare type ConfigProviderContext = Partial<ExtractPropTypes<typeof configProviderProps>>;
export declare const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>>;
