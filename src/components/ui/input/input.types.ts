import * as React from "react";

export const INPUT_STATUS = {
  DEFAULT: "default",
  ACTIVE: "active",
  SUCCESS: "success",
  ERROR: "error",
  DISABLED: "disabled",
  PROCESSING: "processing",
} as const;

export type InputStatus = (typeof INPUT_STATUS)[keyof typeof INPUT_STATUS];

export const INPUT_TYPE = {
  TEXT: "text",
  PASSWORD: "password",
  TEL: "tel",
  SEARCH: "search",
} as const;

export type InputType = (typeof INPUT_TYPE)[keyof typeof INPUT_TYPE];

export interface CountryOption {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
}

export const CHARACTERS_PLACEMENT = {
  BOTTOM_LEFT: "bottom-left",
  TOP_RIGHT: "top-right",
} as const;

export type CharactersPlacement =
  (typeof CHARACTERS_PLACEMENT)[keyof typeof CHARACTERS_PLACEMENT];

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
  charactersLimit?: number;
  charactersPlacement?: CharactersPlacement;
  countryCode?: string;
  onCountryCodeChange?: (code: string) => void;
  countryOptions?: CountryOption[];
  containerClassName?: string;
  wrapperClassName?: string;
  showPassword?: boolean;
  onShowPasswordChange?: (show: boolean) => void;
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
    type?: InputType;
    value?: string;
    onChange?: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
  };
export type { InputRootProps } from "./InputPrimitives";

export const ADDON_POSITION = {
  LEFT: "left",
  RIGHT: "right",
} as const;

export type AddonPosition =
  (typeof ADDON_POSITION)[keyof typeof ADDON_POSITION];
