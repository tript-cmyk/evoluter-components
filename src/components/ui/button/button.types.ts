import type { MouseEventHandler, ReactNode } from "react";
import type {
  BUTTON_SIZES,
  BUTTON_TYPE,
  BUTTON_VARIANTS,
  ICON_POSITION,
} from "./button.constants";

export interface ButtonProps {
  variant?: BUTTON_VARIANTS;
  size?: BUTTON_SIZES;
  type?: BUTTON_TYPE;
  disabled?: boolean;
  processing?: boolean;
  icon?: ReactNode;
  iconPosition?: ICON_POSITION;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  id?: string;
  name?: string;
  value?: string;
  title?: string;
}
