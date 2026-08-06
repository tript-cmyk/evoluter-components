import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export enum LABEL_POSITION {
  LEFT = "left",
  RIGHT = "right",
}

export enum DIRECTION {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export interface CheckBoxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  label?: ReactNode;
  labelPosition?: LABEL_POSITION;
  indeterminate?: boolean;
  containerClassName?: string;
}

export interface CheckBoxGroupOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  indeterminate?: boolean;
}

export interface CheckBoxGroupProps extends HTMLAttributes<HTMLDivElement> {
  value?: string[];
  defaultValue?: string[];
  onChangeValue?: (value: string[]) => void;

  options?: CheckBoxGroupOption[];

  direction?: DIRECTION;

  label?: ReactNode;
  disabled?: boolean;
  name?: string;

  children?: ReactNode;
}
