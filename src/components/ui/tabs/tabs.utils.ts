import { TAB_ICON_POSITION, TAB_ITEM_POSITION } from "./tabs.constants";
import type { TabItem } from "./tabs.types";

export const getTabItemPosition = (index: number, total: number) => {
  if (total <= 1) {
    return TAB_ITEM_POSITION.ONLY;
  }

  if (index === 0) {
    return TAB_ITEM_POSITION.FIRST;
  }

  if (index === total - 1) {
    return TAB_ITEM_POSITION.LAST;
  }

  return TAB_ITEM_POSITION.MIDDLE;
};

export const getInitialTabValue = (
  items: TabItem[],
  value?: string,
  defaultValue?: string,
) => {
  if (value !== undefined) {
    return value;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  return items.find((item) => !item.disabled)?.value;
};

export const shouldShowLeftIcon = (iconPosition: TAB_ICON_POSITION) => {
  return (
    iconPosition === TAB_ICON_POSITION.LEFT ||
    iconPosition === TAB_ICON_POSITION.BOTH ||
    iconPosition === TAB_ICON_POSITION.ONLY
  );
};

export const shouldShowRightIcon = (iconPosition: TAB_ICON_POSITION) => {
  return (
    iconPosition === TAB_ICON_POSITION.RIGHT ||
    iconPosition === TAB_ICON_POSITION.BOTH
  );
};