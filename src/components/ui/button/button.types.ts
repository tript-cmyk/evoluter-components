import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./button.variants";

export type ButtonVariant =
  | "primaryWhite"
  | "primaryDark"
  | "secondaryDark"
  | "textDark"
  | "textWhite";

export type ButtonSize = "xl" | "large" | "small";

export interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    Omit<VariantProps<typeof buttonVariants>, "disabled" | "processing"> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  processing?: boolean;
}
