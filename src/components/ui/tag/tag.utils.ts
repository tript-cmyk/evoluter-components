import { TAG_SHOW_ICON_POSITION } from "./tag.constants";

export const showLeftIcon = (icon: TAG_SHOW_ICON_POSITION) => {
  return (
    icon === TAG_SHOW_ICON_POSITION.LEFT ||
    icon === TAG_SHOW_ICON_POSITION.BOTH
  );
};

export const showRightIcon = (
  icon: TAG_SHOW_ICON_POSITION
) => {
  return (
    icon === TAG_SHOW_ICON_POSITION.RIGHT ||
    icon === TAG_SHOW_ICON_POSITION.BOTH
  );
};
