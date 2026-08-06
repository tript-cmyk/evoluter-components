import * as React from "react";
import { cn } from "../../../../../lib/cn";
import { CHARACTERS_PLACEMENT } from "../../input.types";
import { useInputContext } from "./InputRoot";

export interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  description?: string;
}

export function InputLabel({
  children,
  required,
  description,
  className,
  ...props
}: InputLabelProps) {
  const { charactersLimit, charactersPlacement, value } = useInputContext();

  const charCount = value.length;
  const showTopCharCount =
    charactersLimit && charactersPlacement === CHARACTERS_PLACEMENT.TOP_RIGHT;

  return (
    <div className="flex items-center justify-between w-full">
      <label
        className={cn(
          "text-xs font-medium text-[#808080] tracking-wide select-none flex items-center gap-0.5",
          className,
        )}
        {...props}
      >
        {children || description}
        {required && <span className="text-[#E9380D] font-bold ml-0.5">*</span>}
      </label>
      {showTopCharCount && (
        <span className="text-[10px] font-medium text-[#575757] tracking-wider">
          {charCount} / {charactersLimit}
        </span>
      )}
    </div>
  );
}
