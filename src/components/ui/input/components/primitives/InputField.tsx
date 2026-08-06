import * as React from "react";
import { cn } from "../../../../../lib/cn";
import { INPUT_STATUS } from "../../input.types";
import { useInputContext } from "./InputRoot";
import { inputFieldVariants } from "../../input.variants";

export interface InputFieldProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
> {
  ref?: React.Ref<HTMLInputElement>;
}

export function InputField({
  className,
  onFocus,
  onBlur,
  ref,
  ...props
}: InputFieldProps) {
  const {
    status,
    value,
    onChangeValue,
    setFocused,
    disabled,
    charactersLimit,
  } = useInputContext();

  const isInputDisabled = disabled || status === INPUT_STATUS.PROCESSING;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (charactersLimit !== undefined && val.length > charactersLimit) {
      val = val.substring(0, charactersLimit);
    }
    onChangeValue(val);
  };

  const commonClasses = inputFieldVariants({
    disabled: isInputDisabled,
    multiline: false,
  });

  return (
    <input
      ref={ref}
      className={cn(commonClasses, className)}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={isInputDisabled}
      {...props}
    />
  );
}
