import type { MouseEvent, ReactNode } from "react";
import type {
  TAG_SHOW_ICON_POSITION,
  TAG_VARIANT,
} from "./tag.constants";

export interface TagProps {
  id?: string;
  title?: string;
  label?: string;
  value?: string;
  variant?: TAG_VARIANT;
  icon?: TAG_SHOW_ICON_POSITION;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  selected?: boolean;
  defaultSelected?: boolean;
  defaultRemoved?: boolean;
  disabled?: boolean;
  processing?: boolean;
  error?: boolean;
  success?: boolean;
  onClick?: (
    value?: string,
    selected?: boolean,
    event?: MouseEvent<HTMLButtonElement>,
  ) => void;
  onRemove?: (value?: string, event?: MouseEvent<HTMLElement>) => void;
}
