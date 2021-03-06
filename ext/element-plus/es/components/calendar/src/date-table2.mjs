import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, Fragment, renderList, toDisplayString, createCommentVNode, createElementVNode, renderSlot } from 'vue';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import '../../../hooks/index.mjs';
import '../../time-picker/index.mjs';
import { dateTableProps, dateTableEmits } from './date-table.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { rangeArr } from '../../time-picker/src/common/date-utils.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

dayjs.extend(localeData);
const WEEK_DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const getPrevMonthLastDays = (date, count) => {
  const lastDay = date.subtract(1, "month").endOf("month").date();
  return rangeArr(count).map((_, index) => lastDay - (count - index - 1));
};
const getMonthDays = (date) => {
  const days = date.daysInMonth();
  return rangeArr(days).map((_, index) => index + 1);
};
const toNestedArr = (days) => rangeArr(days.length / 7).map((index) => {
  const start = index * 7;
  return days.slice(start, start + 7);
});
const _sfc_main = defineComponent({
  props: dateTableProps,
  emits: dateTableEmits,
  setup(props, { emit }) {
    const { t, lang } = useLocale();
    const nsTable = useNamespace("calendar-table");
    const nsDay = useNamespace("calendar-day");
    const now = dayjs().locale(lang.value);
    const firstDayOfWeek = now.$locale().weekStart || 0;
    const isInRange = computed(() => !!props.range && !!props.range.length);
    const rows = computed(() => {
      let days = [];
      if (isInRange.value) {
        const [start, end] = props.range;
        const currentMonthRange = rangeArr(end.date() - start.date() + 1).map((index) => ({
          text: start.date() + index,
          type: "current"
        }));
        let remaining = currentMonthRange.length % 7;
        remaining = remaining === 0 ? 0 : 7 - remaining;
        const nextMonthRange = rangeArr(remaining).map((_, index) => ({
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
        const nextMonthDays = rangeArr(42 - days.length).map((_, index) => ({
          text: index + 1,
          type: "next"
        }));
        days = days.concat(nextMonthDays);
      }
      return toNestedArr(days);
    });
    const weekDays = computed(() => {
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
  return openBlock(), createElementBlock("table", {
    class: normalizeClass([_ctx.nsTable.b(), _ctx.nsTable.is("range", _ctx.isInRange)]),
    cellspacing: "0",
    cellpadding: "0"
  }, [
    !_ctx.hideHeader ? (openBlock(), createElementBlock("thead", _hoisted_1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.weekDays, (day) => {
        return openBlock(), createElementBlock("th", { key: day }, toDisplayString(day), 1);
      }), 128))
    ])) : createCommentVNode("v-if", true),
    createElementVNode("tbody", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (row, index) => {
        return openBlock(), createElementBlock("tr", {
          key: index,
          class: normalizeClass({
            [_ctx.nsTable.e("row")]: true,
            [_ctx.nsTable.em("row", "hide-border")]: index === 0 && _ctx.hideHeader
          })
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, key) => {
            return openBlock(), createElementBlock("td", {
              key,
              class: normalizeClass(_ctx.getCellClass(cell)),
              onClick: ($event) => _ctx.handlePickDay(cell)
            }, [
              createElementVNode("div", {
                class: normalizeClass(_ctx.nsDay.b())
              }, [
                renderSlot(_ctx.$slots, "dateCell", {
                  data: _ctx.getSlotData(cell)
                }, () => [
                  createElementVNode("span", null, toDisplayString(cell.text), 1)
                ])
              ], 2)
            ], 10, _hoisted_2);
          }), 128))
        ], 2);
      }), 128))
    ])
  ], 2);
}
var DateTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { DateTable as default, getMonthDays, getPrevMonthLastDays };
//# sourceMappingURL=date-table2.mjs.map
