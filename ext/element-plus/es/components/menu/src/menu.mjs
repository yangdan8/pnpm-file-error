import { defineComponent, getCurrentInstance, ref, computed, nextTick, watch, provide, reactive, onMounted, withDirectives, h } from 'vue';
import '../../../directives/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { More } from '@element-plus/icons-vue';
import '../../../utils/index.mjs';
import Menu$1 from './utils/menu-bar.mjs';
import ElMenuCollapseTransition from './menu-collapse-transition.mjs';
import SubMenu from './sub-menu.mjs';
import { useMenuCssVar } from './use-menu-css-var.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props.mjs';
import { mutable } from '../../../utils/typescript.mjs';
import { isString, isObject } from '@vue/shared';
import Resize from '../../../directives/resize/index.mjs';

const menuProps = buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  }
});
const checkIndexPath = (indexPath) => Array.isArray(indexPath) && indexPath.every((path) => isString(path));
const menuEmits = {
  close: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => isString(index) && checkIndexPath(indexPath) && isObject(item) && (routerResult === void 0 || routerResult instanceof Promise)
};
var Menu = defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = ref();
    const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = ref(props.defaultActive);
    const items = ref({});
    const subMenus = ref({});
    const isMenuPopup = computed(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
      emit("open", index, indexPath);
    };
    const closeMenu = (index, indexPath) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
      emit("close", index, indexPath);
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index, indexPath);
      } else {
        openMenu(index, indexPath);
      }
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (index === void 0 || indexPath === void 0)
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      if (item) {
        activeIndex.value = item.index;
        initMenu();
      } else {
        activeIndex.value = val;
      }
    };
    const handleResize = () => {
      nextTick(() => instance.proxy.$forceUpdate());
    };
    watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    watch(items.value, () => initMenu());
    watch(() => props.collapse, (value) => {
      if (value)
        openedMenus.value = [];
    });
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      provide("rootMenu", reactive({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild: ref(false)
      });
    }
    onMounted(() => {
      initMenu();
      if (props.mode === "horizontal") {
        new Menu$1(instance.vnode.el);
      }
    });
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close: closeMenu,
        handleResize
      });
    }
    const flattedChildren = (children) => {
      const vnodes = Array.isArray(children) ? children : [children];
      const result = [];
      vnodes.forEach((child) => {
        if (Array.isArray(child.children)) {
          result.push(...flattedChildren(child.children));
        } else {
          result.push(child);
        }
      });
      return result;
    };
    const useVNodeResize = (vnode) => props.mode === "horizontal" ? withDirectives(vnode, [[Resize, handleResize]]) : vnode;
    return () => {
      var _a, _b, _c, _d;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const items2 = Array.from((_d = (_c = menu.value) == null ? void 0 : _c.childNodes) != null ? _d : []).filter((item) => item.nodeName !== "#text" || item.nodeValue);
        const originalSlot = flattedChildren(slot);
        const moreItemWidth = 64;
        const paddingLeft = parseInt(getComputedStyle(menu.value).paddingLeft, 10);
        const paddingRight = parseInt(getComputedStyle(menu.value).paddingRight, 10);
        const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
        let calcWidth = 0;
        let sliceIndex = 0;
        items2.forEach((item, index) => {
          calcWidth += item.offsetWidth || 0;
          if (calcWidth <= menuWidth - moreItemWidth) {
            sliceIndex = index + 1;
          }
        });
        const slotDefault = originalSlot.slice(0, sliceIndex);
        const slotMore = originalSlot.slice(sliceIndex);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(h(SubMenu, {
            index: "sub-menu-more",
            class: "el-sub-menu__hide-arrow"
          }, {
            title: () => h(ElIcon, {
              class: ["el-sub-menu__icon-more"]
            }, { default: () => h(More) }),
            default: () => slotMore
          }));
        }
      }
      const ulStyle = useMenuCssVar(props);
      const resizeMenu = (vNode) => props.ellipsis ? useVNodeResize(vNode) : vNode;
      const vMenu = resizeMenu(h("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          "el-menu": true,
          "el-menu--horizontal": props.mode === "horizontal",
          "el-menu--collapse": props.collapse
        }
      }, [...slot.map((vnode) => resizeMenu(vnode)), ...vShowMore]));
      if (props.collapseTransition && props.mode === "vertical") {
        return h(ElMenuCollapseTransition, () => vMenu);
      }
      return vMenu;
    };
  }
});

export { Menu as default, menuEmits, menuProps };
//# sourceMappingURL=menu.mjs.map
