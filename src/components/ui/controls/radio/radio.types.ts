import type { ReactNode } from "react";
import type { RADIO_STATE } from "./radio.constants";

export interface RadioOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface RadioProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options?: RadioOption[];
  label?: ReactNode;
  name?: string;
  disabled?: boolean;
  id?: string;
  title?: string;
  required?: boolean;
  interactionState?: RADIO_STATE;
}
