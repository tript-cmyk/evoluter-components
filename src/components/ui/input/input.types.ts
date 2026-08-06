import * as React from "react";

export enum INPUT_STATUS {
  DEFAULT = "default",
  ACTIVE = "active",
  SUCCESS = "success",
  ERROR = "error",
  DISABLED = "disabled",
  PROCESSING = "processing",
}

export enum INPUT_TYPE {
  TEXT = "text",
  PASSWORD = "password",
  TEL = "tel",
  SEARCH = "search",
  NUMBER = "number",
  TEXT_AREA = "textarea",
}

export enum CHARACTERS_PLACEMENT {
  BOTTOM_LEFT = "bottom-left",
  TOP_RIGHT = "top-right",
}

export enum ADDON_POSITION {
  LEFT = "left",
  RIGHT = "right",
}

export interface CountryOption {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
}

export interface InputBaseProps {
  status?: INPUT_STATUS;
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
  charactersPlacement?: CHARACTERS_PLACEMENT;
  containerClassName?: string;
  wrapperClassName?: string;
}

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement>, InputBaseProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, InputBaseProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface InputPasswordProps extends InputTextProps {
  showPassword?: boolean;
  onShowPasswordChange?: (show: boolean) => void;
}

export interface InputSearchProps extends InputTextProps {}

export interface InputPhoneProps extends InputTextProps {
  countryCode?: string;
  onCountryCodeChange?: (code: string) => void;
  countryOptions?: CountryOption[];
}

export interface InputNumberProps extends InputTextProps {
  stepControls?: boolean;
}

export type InputProps =
  | ({ type: INPUT_TYPE.TEXT_AREA } & Omit<InputTextAreaProps, "type">)
  | ({ type?: Exclude<INPUT_TYPE, INPUT_TYPE.TEXT_AREA> } & Omit<
      InputTextProps,
      "type"
    > & {
        countryCode?: string;
        onCountryCodeChange?: (code: string) => void;
        countryOptions?: CountryOption[];
        showPassword?: boolean;
        onShowPasswordChange?: (show: boolean) => void;
        stepControls?: boolean;
      });
