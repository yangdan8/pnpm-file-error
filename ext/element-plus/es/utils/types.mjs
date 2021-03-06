import { isArray, isObject } from '@vue/shared';
export { isArray, isDate, isFunction, isObject, isPromise, isString, isSymbol } from '@vue/shared';
export { isBoolean, isNumber } from '@vueuse/core';
export { isVNode } from 'vue';

const isUndefined = (val) => val === void 0;
const isEmpty = (val) => !val && val !== 0 || isArray(val) && val.length === 0 || isObject(val) && !Object.keys(val).length;

export { isEmpty, isUndefined };
//# sourceMappingURL=types.mjs.map
