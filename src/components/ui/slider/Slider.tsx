import { useMemo, useState, type CSSProperties } from "react";
import { cn } from "../../../lib/cn";
import {
  SLIDER_DEFAULT_MAX,
  SLIDER_DEFAULT_MIN,
  SLIDER_DEFAULT_STEP,
} from "./slider.constants";
import type { SliderProps } from "./slider.types";
import {
  getBoundedSliderValue,
  getInitialSliderValue,
  getSliderPercentage,
} from "./slider.utils";

const Slider = ({
  value,
  defaultValue,
  min = SLIDER_DEFAULT_MIN,
  max = SLIDER_DEFAULT_MAX,
  step = SLIDER_DEFAULT_STEP,
  disabled = false,
  id,
  name,
  title,
  onValueChange,
}: SliderProps) => {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = useState(
    getInitialSliderValue(value, defaultValue, min, max),
  );
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);

  const currentValue = getBoundedSliderValue(
    isControlled ? value : localValue,
    min,
    max,
  );

  const percentage = useMemo(
    () => getSliderPercentage(currentValue, min, max),
    [currentValue, min, max],
  );

  const handleChange = (nextValue: number) => {
    const boundedValue = getBoundedSliderValue(nextValue, min, max);

    if (!isControlled) {
      setLocalValue(boundedValue);
    }

    onValueChange?.(boundedValue);
  };

  return (
    <div className="relative min-w-0 py-2 w-70 md:w-120">
      <div className="relative h-7 w-full min-w-28 select-none">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#646464]" />
        <div
          className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#ABFFC3]"
          style={{ width: `${percentage}%` }}
        />
        <span
          className={cn(
            "absolute top-1/2 z-10 flex h-5 min-w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#666666] bg-white px-2 text-[10px] font-bold leading-none text-[#0D0D0D] shadow-sm transition-colors",
            (focused || dragging) && "border-[#ABFFC3] bg-[#ABFFC3]",
            disabled && "opacity-50",
          )}
          style={
            {
              left: `clamp(18px, ${percentage}%, calc(100% - 18px))`,
            } as CSSProperties
          }
        >
          {currentValue}
        </span>
        <input
          id={id}
          name={name}
          title={title}
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          disabled={disabled}
          className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
          onChange={(event) => handleChange(Number(event.target.value))}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onPointerDown={() => setDragging(true)}
          onPointerUp={() => setDragging(false)}
          onPointerCancel={() => setDragging(false)}
        />
      </div>
    </div>
  );
};

export default Slider;
