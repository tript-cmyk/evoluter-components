import * as React from "react";
import { useState } from "react";
import { cn } from "../../../../lib/cn";
import { RADIO_STATE } from "./radio.constants";
import type { RadioProps } from "./radio.types";
import { radioCircleVariants, radioHaloVariants } from "./radio.variants";

const Radio = ({
  value,
  defaultValue,
  onValueChange,
  options = [],
  label,
  name,
  disabled = false,
  id,
  title,
  required,
  interactionState = RADIO_STATE.DEFAULT,
}: RadioProps) => {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = useState(defaultValue);
  const currentValue = isControlled ? value : localValue;

  const handleChange = (
    nextValue: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.checked) {
      return;
    }

    if (!isControlled) {
      setLocalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  return (
    <div
      id={id}
      title={title}
      className="flex w-full flex-col gap-2 text-left"
    >
      {label && (
        <span className="text-sm font-semibold text-white tracking-wide select-none">
          {label}
        </span>
      )}

      <div className="flex flex-row flex-wrap items-center gap-x-6 gap-y-3">
        {options.map((option) => {
          const optionDisabled = disabled || !!option.disabled;
          const checked = currentValue === option.value;

          return (
            <label
              key={option.value}
              className={cn(
                "group inline-flex items-center gap-2 select-none",
                optionDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer",
              )}
            >
              <input
                type="radio"
                className="sr-only"
                name={name}
                value={option.value}
                checked={checked}
                disabled={optionDisabled}
                required={required}
                onChange={(event) => handleChange(option.value, event)}
              />

              <span
                className={radioHaloVariants({
                  interactionState,
                  disabled: optionDisabled,
                })}
              >
                <span
                  className={cn(
                    radioCircleVariants({
                      checked,
                      disabled: optionDisabled,
                    }),
                  )}
                >
                  {checked && (
                    <span className="h-2.5 w-2.5 rounded-full bg-current" />
                  )}
                </span>
              </span>

              <span className="font-medium text-white select-none">
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
