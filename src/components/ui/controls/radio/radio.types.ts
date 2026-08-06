import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export enum RADIO_ATTRIBUTES_EXCEPT {
  TYPE = "type",
  CHECKED = "checked",
  ONCHANGE = "onChange",
  NAME = "name",
}

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
}

export interface RadioGroupItemProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  RADIO_ATTRIBUTES_EXCEPT
> {
  value: string;
  label?: ReactNode;
}

export interface RadioGroupContextValue {
  value?: string;
  name?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
}
