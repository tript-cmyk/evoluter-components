import type { MouseEventHandler } from "react";
import type {
  PLAY_BUTTON_SIZE,
  PLAY_BUTTON_STATE,
} from "./play-button.constants";

export interface PlayButtonProps {
  size?: PLAY_BUTTON_SIZE;
  disabled?: boolean;
  processing?: boolean;
  active?: boolean;
  state?: PLAY_BUTTON_STATE;
  id?: string;
  name?: string;
  value?: string;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
