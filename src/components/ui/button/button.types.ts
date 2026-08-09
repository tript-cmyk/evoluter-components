import type { MouseEventHandler, ReactNode } from "react";

export enum BUTTON_VARIANTS {
  DEFAULT = "default",
  OUTLINE = "outline",
  SECONDARY = "secondary",
  GHOST = "ghost",
  DARK = "dark",
}

export enum BUTTON_SIZES {
  SM = "sm",
  LG = "lg",
  XL = "xl",
}

export enum BUTTON_TYPE {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export enum ICON_POSITION {
  LEFT = "left",
  RIGHT = "right",
}

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
