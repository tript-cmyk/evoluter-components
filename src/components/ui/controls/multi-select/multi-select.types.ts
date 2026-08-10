import type { ReactNode } from "react";
import type { MULTI_SELECT_STATE } from "./multi-select.constants";

export interface MultiSelectOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface MultiSelectProps {
  value?: string[];
  defaultValue?: string[];
  onChangeValue?: (value: string[]) => void;
  options?: MultiSelectOption[];
  label?: ReactNode;
  disabled?: boolean;
  name?: string;
  id?: string;
  title?: string;
  required?: boolean;
  interactionState?: MULTI_SELECT_STATE;
}
