import * as React from "react";

export type InputStatus =
  | "default"
  | "active"
  | "success"
  | "error"
  | "disabled"
  | "processing";

export interface CountryOption {
  code: string;
  flag: string;
  name: string;
}

export interface InputBaseProps {
  status?: InputStatus;
  label?: string;
  required?: boolean;
  hint?: string;
  error?: string | boolean;
  success?: string | boolean;
  processing?: string | boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  multiline?: boolean;
  symbolsLimit?: number;
  symbolsPlacement?: "bottom-left" | "top-right";
  countryCode?: string;
  onCountryCodeChange?: (code: string) => void;
  countryOptions?: CountryOption[];
  containerClassName?: string;
  wrapperClassName?: string;
}

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type" | "value" | "onChange"
> &
  Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "size" | "value" | "onChange"
  > &
  InputBaseProps & {
    type?: string;
    value?: string;
    onChange?: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
  };
export type { InputRootProps } from "./InputPrimitives";
