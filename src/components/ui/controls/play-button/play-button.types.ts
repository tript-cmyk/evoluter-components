import type { ButtonHTMLAttributes } from "react";

export enum PLAY_BUTTON_SIZE {
  L = "l",
  M = "m",
  S = "s",
  XS = "xs",
}

export interface PlayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: PLAY_BUTTON_SIZE;
}
