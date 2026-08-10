import * as React from "react";
import { cn } from "../../../../lib/cn";
import { inputControlVariants } from "../input.variants";
import { useInputContext } from "../context/input.context";
import { INPUT_STATUS, INPUT_TYPE } from "../input.constants";
import type { InputControlProps } from "../input.types";

export function InputControl({
  ref,
  type = INPUT_TYPE.TEXT,
  id,
  name,
  placeholder,
  title,
  readOnly,
  min,
  max,
  step,
}: InputControlProps) {
  const {
    status,
    value,
    onChangeValue,
    setFocused,
    disabled,
    maxLength,
    onFocus,
    onBlur,
  } = useInputContext();
  const isInputDisabled = disabled || status === INPUT_STATUS.PROCESSING;

  const handleFocus = () => {
    setFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur?.();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue =
      maxLength !== undefined
        ? event.target.value.slice(0, maxLength)
        : event.target.value;
    onChangeValue(nextValue);
  };

  return (
    <input
      ref={ref}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      title={title}
      readOnly={readOnly}
      min={min}
      max={max}
      step={step}
      className={cn(
        inputControlVariants({
          disabled: isInputDisabled,
          multiline: false,
        }),
        type === INPUT_TYPE.NUMBER &&
          "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
      )}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={isInputDisabled}
    />
  );
}
