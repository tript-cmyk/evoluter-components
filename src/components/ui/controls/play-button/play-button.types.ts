import type { ButtonHTMLAttributes } from "react";

export const PLAY_BUTTON_SIZE = {
  L: "l",
  M: "m",
  S: "s",
  XS: "xs",
} as const;

export type PlayButtonSize =
  (typeof PLAY_BUTTON_SIZE)[keyof typeof PLAY_BUTTON_SIZE];

export interface PlayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: PlayButtonSize;
}
