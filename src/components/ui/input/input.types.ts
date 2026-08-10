import type { ReactNode } from "react";
import type { ADDON_POSITION, CHARACTERS_PLACEMENT, INPUT_NUMBER_DIRECTION, INPUT_STATUS, INPUT_TYPE } from "./input.constants";

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
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  successMessage?: string;
  processing?: boolean;
  processingMessage?: string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  id?: string;
  name?: string;
  placeholder?: string;
  title?: string;
  maxLength?: number;
  characterCounter?: boolean;
  counterPlacement?: CHARACTERS_PLACEMENT;
}

export interface InputTextProps extends InputBaseProps {
  type?: INPUT_TYPE.TEXT;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export interface InputTextAreaProps extends InputBaseProps {
  type?: INPUT_TYPE.TEXT_AREA;
  rows?: number;
  resize?: false;
}

export interface InputPasswordProps extends InputBaseProps {
  type?: INPUT_TYPE.PASSWORD;
  showPassword?: boolean;
  defaultShowPassword?: boolean;
  onShowPasswordChange?: (show: boolean) => void;
  leftIcon?: ReactNode;
}

export interface InputSearchProps extends InputBaseProps {
  type?: INPUT_TYPE.SEARCH;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export interface InputPhoneProps extends InputBaseProps {
  type?: INPUT_TYPE.TEL;
  countryCode?: string;
  onCountryCodeChange?: (code: string) => void;
  countryOptions?: CountryOption[];
}

export interface InputNumberProps extends InputBaseProps {
  type?: INPUT_TYPE.NUMBER;
  min?: number;
  max?: number;
  step?: number;
  stepControls?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export type InputProps =
  | InputTextProps
  | InputTextAreaProps
  | InputPasswordProps
  | InputSearchProps
  | InputPhoneProps
  | InputNumberProps;

export interface InputClearButtonProps {
  onClear?: () => void;
}
export interface PasswordVisibilityButtonProps {
  disabled?: boolean;
  showPassword: boolean;
  onToggle: () => void;
}

export interface InputRightActionsProps {
  status: INPUT_STATUS;
  showClear?: boolean;
  onClear?: () => void;
  rightIcon?: ReactNode;
}

export interface FieldDescriptionOptions {
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  successMessage?: string;
  processing?: boolean;
  processingMessage?: string;
  hint?: string;
}

export interface InputStateOptions {
  status?: INPUT_STATUS;
  disabled?: boolean;
  processing?: boolean;
  success?: boolean;
  error?: boolean;
  value: string;
}

export interface InputStatusIconProps {
  status: INPUT_STATUS;
}

export interface InputControlProps {
  ref?: React.Ref<HTMLInputElement>;
  type?: INPUT_TYPE;
  id?: string;
  name?: string;
  placeholder?: string;
  title?: string;
  readOnly?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

export interface InputContextValue {
  status: INPUT_STATUS;
  fieldDescriptionStatus: INPUT_STATUS;
  disabled: boolean;
  focused: boolean;
  setFocused: (focused: boolean) => void;
  value: string;
  onChangeValue: (value: string) => void;
  multiline: boolean;
  maxLength?: number;
  characterCounter: boolean;
  counterPlacement: CHARACTERS_PLACEMENT;
  message?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface UseInputValueOptions {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export interface InputFrameProps {
  children: React.ReactNode;
}

export interface InputLabelProps {
  children?: React.ReactNode;
  required?: boolean;
}

export interface NumberStepperProps {
  onStep: (direction: INPUT_NUMBER_DIRECTION) => void;
}

export interface PhoneCountrySelectProps {
  value?: string;
  options: CountryOption[];
  disabled?: boolean;
  onChange?: (code: string) => void;
}

export interface TextareaControlProps {
  ref?: React.Ref<HTMLTextAreaElement>;
  id?: string;
  name?: string;
  placeholder?: string;
  title?: string;
  readOnly?: boolean;
  rows?: number;
}

export interface InputIconGroupProps {
  children: React.ReactNode;
  position?: ADDON_POSITION;
}

export interface InputRootProps {
  children: ReactNode;
  status: INPUT_STATUS;
  fieldDescriptionStatus: INPUT_STATUS;
  disabled: boolean;
  value: string;
  onChangeValue: (value: string) => void;
  multiline?: boolean;
  maxLength?: number;
  characterCounter?: boolean;
  counterPlacement?: CHARACTERS_PLACEMENT;
  message?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}
