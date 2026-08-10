import {  type InputLabelProps } from "../input.types";
import { useInputContext } from "../context/input.context";
import { CHARACTERS_PLACEMENT } from "../input.constants";

export function InputLabel({ children, required }: InputLabelProps) {
  const { maxLength, characterCounter, counterPlacement, value } =
    useInputContext();
  const showTopCounter =
    characterCounter &&
    maxLength !== undefined &&
    counterPlacement === CHARACTERS_PLACEMENT.TOP_RIGHT;

  if (!children && !showTopCounter) return null;

  return (
    <div className="flex items-center justify-between w-full">
      {children && (
        <label className="text-xs font-medium text-[#808080] tracking-wide select-none flex items-center gap-0.5">
          {children}
          {required && (
            <span className="text-[#E9380D] font-bold ml-0.5">*</span>
          )}
        </label>
      )}
      {showTopCounter && (
        <span className="text-[10px] font-medium text-[#575757] tracking-wider">
          {value.length} / {maxLength}
        </span>
      )}
    </div>
  );
}
