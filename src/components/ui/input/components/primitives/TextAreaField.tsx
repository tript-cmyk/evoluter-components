import * as React from "react";
import { cn } from "../../../../../lib/cn";
import { INPUT_STATUS, CHARACTERS_PLACEMENT } from "../../input.types";
import { useInputContext } from "./InputRoot";
import { inputFieldVariants } from "../../input.variants";

export interface TextAreaFieldProps extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange"
> {
  ref?: React.Ref<HTMLTextAreaElement>;
}

export function TextAreaField({
  className,
  onFocus,
  onBlur,
  ref,
  ...props
}: TextAreaFieldProps) {
  const {
    status,
    value,
    onChangeValue,
    setFocused,
    disabled,
    charactersLimit,
    charactersPlacement,
  } = useInputContext();

  const isInputDisabled = disabled || status === INPUT_STATUS.PROCESSING;

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let val = e.target.value;
    if (charactersLimit !== undefined && val.length > charactersLimit) {
      val = val.substring(0, charactersLimit);
    }
    onChangeValue(val);
  };

  const commonClasses = inputFieldVariants({
    disabled: isInputDisabled,
    multiline: true,
  });
  const showBottomCharCount =
    charactersLimit && charactersPlacement === CHARACTERS_PLACEMENT.BOTTOM_LEFT;

  return (
    <div className="flex flex-col w-full h-full justify-between gap-2 relative">
      <textarea
        ref={ref}
        className={cn(commonClasses, className)}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={isInputDisabled}
        {...props}
      />
      {showBottomCharCount && (
        <span className="text-[10px] font-medium text-[#575757] tracking-wider select-none tab-nums self-start">
          {value.length} / {charactersLimit}
        </span>
      )}
    </div>
  );
}
