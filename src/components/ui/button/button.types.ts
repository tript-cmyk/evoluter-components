import type { ButtonHTMLAttributes } from "react";

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

export enum ICON_POSITION {
  LEFT = "left",
  RIGHT = "right",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANTS;
  size?: BUTTON_SIZES;
  disabled?: boolean;
  processing?: boolean;
  icon?: React.ReactNode;
  iconPosition?: ICON_POSITION;
}
