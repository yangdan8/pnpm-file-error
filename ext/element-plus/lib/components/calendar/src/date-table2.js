'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dayjs = require('dayjs');
var localeData = require('dayjs/plugin/localeData');
require('../../../hooks/index.js');
require('../../time-picker/index.js');
var dateTable = require('./date-table.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var dateUtils = require('../../time-picker/src/common/date-utils.js');
var index = require('../../../hooks/use-locale/index.js');
var index$1 = require('../../../hooks/use-namespace/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var localeData__default = /*#__PURE__*/_interopDefaultLegacy(localeData);

dayjs__default["default"].extend(localeData__default["default"]);
const WEEK_DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const getPrevMonthLastDays = (date, count) => {
  const lastDay = date.subtract(1, "month").endOf("month").date();
  return dateUtils.rangeArr(count).map((_, index) => lastDay - (count - index - 1));
};
const getMonthDays = (date) => {
  const days = date.daysInMonth();
  return dateUtils.rangeArr(days).map((_, index) => index + 1);
};
const toNestedArr = (days) => dateUtils.rangeArr(days.length / 7).map((index) => {
  const start = index * 7;
  return days.slice(start, start + 7);
});
const _sfc_main = vue.defineComponent({
  props: dateTable.dateTableProps,
  emits: dateTable.dateTableEmits,
  setup(props, { emit }) {
    const { t, lang } = index.useLocale();
    const nsTable = index$1.useNamespace("calendar-table");
    const nsDay = index$1.useNamespace("calendar-day");
    const now = dayjs__default["default"]().locale(lang.value);
    const firstDayOfWeek = now.$locale().weekStart || 0;
    const isInRange = vue.computed(() => !!props.range && !!props.range.length);
    const rows = vue.computed(() => {
      let days = [];
      if (isInRange.value) {
        const [start, end] = props.range;
        const currentMonthRange = dateUtils.rangeArr(end.date() - start.date() + 1).map((index) => ({
          text: start.date() + index,
          type: "current"
        }));
        let remaining = currentMonthRange.length % 7;
        remaining = remaining === 0 ? 0 : 7 - remaining;
        const nextMonthRange = dateUtils.rangeArr(remaining).map((_, index) => ({
          text: index + 1,
          type: "next"
        }));
        days = currentMonthRange.concat(nextMonthRange);
      } else {
        const firstDay = props.date.startOf("month").day() || 7;
        const prevMonthDays = getPrevMonthLastDays(props.date, firstDay - firstDayOfWeek).map((day) => ({
          text: day,
          type: "prev"
        }));
        const currentMonthDays = getMonthDays(props.date).map((day) => ({
          text: day,
          type: "current"
        }));
        days = [...prevMonthDays, ...currentMonthDays];
        const nextMonthDays = dateUtils.rangeArr(42 - days.length).map((_, index) => ({
          text: index + 1,
          type: "next"
        }));
        days = days.concat(nextMonthDays);
      }
      return toNestedArr(days);
    });
    const weekDays = vue.computed(() => {
      const start = firstDayOfWeek;
      if (start === 0) {
        return WEEK_DAYS.map((_) => t(`el.datepicker.weeks.${_}`));
      } else {
        return WEEK_DAYS.slice(start).concat(WEEK_DAYS.slice(0, start)).map((_) => t(`el.datepicker.weeks.${_}`));
      }
    });
    const getFormattedDate = (day, type) => {
      switch (type) {
        case "prev":
          return props.date.startOf("month").subtract(1, "month").date(day);
        case "next":
          return props.date.startOf("month").add(1, "month").date(day);
        case "current":
          return props.date.date(day);
      }
    };
    const getCellClass = ({ text, type }) => {
      const classes = [type];
      if (type === "current") {
        const date = getFormattedDate(text, type);
        if (date.isSame(props.selectedDay, "day")) {
          classes.push("is-selected");
        }
        if (date.isSame(now, "day")) {
          classes.push("is-today");
        }
      }
      return classes;
    };
    const handlePickDay = ({ text, type }) => {
      const date = getFormattedDate(text, type);
      emit("pick", date);
    };
    const getSlotData = ({ text, type }) => {
      const day = getFormattedDate(text, type);
      return {
        isSelected: day.isSame(props.selectedDay),
        type: `${type}-month`,
        day: day.format("YYYY-MM-DD"),
        date: day.toDate()
      };
    };
    return {
      isInRange,
      weekDays,
      rows,
      getCellClass,
      handlePickDay,
      getSlotData,
      nsTable,
      nsDay
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("table", {
    class: vue.normalizeClass([_ctx.nsTable.b(), _ctx.nsTable.is("range", _ctx.isInRange)]),
    cellspacing: "0",
    cellpadding: "0"
  }, [
    !_ctx.hideHeader ? (vue.openBlock(), vue.createElementBlock("thead", _hoisted_1, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.weekDays, (day) => {
        return vue.openBlock(), vue.createElementBlock("th", { key: day }, vue.toDisplayString(day), 1);
      }), 128))
    ])) : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("tbody", null, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.rows, (row, index) => {
        return vue.openBlock(), vue.createElementBlock("tr", {
          key: index,
          class: vue.normalizeClass({
            [_ctx.nsTable.e("row")]: true,
            [_ctx.nsTable.em("row", "hide-border")]: index === 0 && _ctx.hideHeader
          })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(row, (cell, key) => {
            return vue.openBlock(), vue.createElementBlock("td", {
              key,
              class: vue.normalizeClass(_ctx.getCellClass(cell)),
              onClick: ($event) => _ctx.handlePickDay(cell)
            }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(_ctx.nsDay.b())
              }, [
                vue.renderSlot(_ctx.$slots, "dateCell", {
                  data: _ctx.getSlotData(cell)
                }, () => [
                  vue.createElementVNode("span", null, vue.toDisplayString(cell.text), 1)
                ])
              ], 2)
            ], 10, _hoisted_2);
          }), 128))
        ], 2);
      }), 128))
    ])
  ], 2);
}
var DateTable = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = DateTable;
exports.getMonthDays = getMonthDays;
exports.getPrevMonthLastDays = getPrevMonthLastDays;
//# sourceMappingURL=date-table2.js.map
