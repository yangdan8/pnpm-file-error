'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var shared = require('@vue/shared');
var core = require('@vueuse/core');
var vue = require('vue');

const isUndefined = (val) => val === void 0;
const isEmpty = (val) => !val && val !== 0 || shared.isArray(val) && val.length === 0 || shared.isObject(val) && !Object.keys(val).length;

Object.defineProperty(exports, 'isArray', {
  enumerable: true,
  get: function () { return shared.isArray; }
});
Object.defineProperty(exports, 'isDate', {
  enumerable: true,
  get: function () { return shared.isDate; }
});
Object.defineProperty(exports, 'isFunction', {
  enumerable: true,
  get: function () { return shared.isFunction; }
});
Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function () { return shared.isObject; }
});
Object.defineProperty(exports, 'isPromise', {
  enumerable: true,
  get: function () { return shared.isPromise; }
});
Object.defineProperty(exports, 'isString', {
  enumerable: true,
  get: function () { return shared.isString; }
});
Object.defineProperty(exports, 'isSymbol', {
  enumerable: true,
  get: function () { return shared.isSymbol; }
});
Object.defineProperty(exports, 'isBoolean', {
  enumerable: true,
  get: function () { return core.isBoolean; }
});
Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function () { return core.isNumber; }
});
Object.defineProperty(exports, 'isVNode', {
  enumerable: true,
  get: function () { return vue.isVNode; }
});
exports.isEmpty = isEmpty;
exports.isUndefined = isUndefined;
//# sourceMappingURL=types.js.map
