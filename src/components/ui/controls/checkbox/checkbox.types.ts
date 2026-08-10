import type { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";
import type { CHECKBOX_STATE } from "./checkbox.constants";

export interface CheckBoxProps {
  label?: ReactNode;
  interactionState?: CHECKBOX_STATE;
  indeterminate?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: string;
  name?: string;
  id?: string;
  title?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

export interface CheckBoxGroupOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  indeterminate?: boolean;
}

export interface CheckBoxGroupProps {
  value?: string[];
  defaultValue?: string[];
  onChangeValue?: (value: string[]) => void;
  options?: CheckBoxGroupOption[];
  label?: ReactNode;
  disabled?: boolean;
  name?: string;
  id?: string;
  title?: string;
  children?: ReactNode;
}

export interface CheckBoxGroupContextProps {
  values: string[];
  toggle: (value: string, checked: boolean) => void;
  disabled?: boolean;
  name?: string;
}
