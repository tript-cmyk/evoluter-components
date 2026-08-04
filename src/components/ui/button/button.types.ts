import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./button.variants";

export const BUTTON_VARIANT = {
  PRIMARY_WHITE: "primaryWhite",
  PRIMARY_DARK: "primaryDark",
  SECONDARY_DARK: "secondaryDark",
  TEXT_DARK: "textDark",
  TEXT_WHITE: "textWhite",
} as const;
export type ButtonVariant =
  (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT];

export const BUTTON_SIZE = {
  XL: "xl",
  LARGE: "large",
  SMALL: "small",
} as const;
export type ButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];

export const ICON_POSITION = {
  LEFT: "left",
  RIGHT: "right",
} as const;
export type IconPosition = (typeof ICON_POSITION)[keyof typeof ICON_POSITION];

export interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    Omit<
      VariantProps<typeof buttonVariants>,
      "disabled" | "processing" | "variant" | "size"
    > {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  disabled?: boolean;
  processing?: boolean;
}
