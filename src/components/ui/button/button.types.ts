import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./button.variants";

export const ButtonVariant = {
  PRIMARY_WHITE: "primaryWhite",
  PRIMARY_DARK: "primaryDark",
  SECONDARY_DARK: "secondaryDark",
  TEXT_DARK: "textDark",
  TEXT_WHITE: "textWhite",
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

export const ButtonSize = {
  XL: "xl",
  LARGE: "large",
  SMALL: "small",
} as const;
export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

export const IconPosition = {
  LEFT: "left",
  RIGHT: "right",
} as const;
export type IconPosition = (typeof IconPosition)[keyof typeof IconPosition];

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
