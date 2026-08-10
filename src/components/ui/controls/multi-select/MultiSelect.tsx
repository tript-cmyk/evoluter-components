import * as React from "react";
import { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { cn } from "../../../../lib/cn";
import { MULTI_SELECT_STATE } from "./multi-select.constants";
import type { MultiSelectProps } from "./multi-select.types";
import {
  multiSelectCircleVariants,
  multiSelectHaloVariants,
} from "./multi-select.variants";
import { getNextValues } from "./multi-select.utils";

const MultiSelect = ({
  value,
  defaultValue = [],
  onChangeValue,
  options = [],
  label,
  disabled = false,
  name,
  id,
  title,
  required,
  interactionState = MULTI_SELECT_STATE.DEFAULT,
}: MultiSelectProps) => {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = useState<string[]>(defaultValue);
  const values = isControlled ? value : localValue;

  const handleChange = (
    itemValue: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const nextValues = getNextValues(values, itemValue, event.target.checked);

    if (!isControlled) {
      setLocalValue(nextValues);
    }

    onChangeValue?.(nextValues);
  };

  return (
    <div id={id} title={title} className="flex w-full flex-col gap-2 text-left">
      {label && (
        <span className="text-sm font-semibold text-white tracking-wide select-none">
          {label}
        </span>
      )}

      <div className="flex flex-row flex-wrap items-center gap-x-6 gap-y-3">
        {options.map((option) => {
          const optionDisabled = disabled || !!option.disabled;
          const checked = values.includes(option.value);

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
                type="checkbox"
                className="sr-only"
                checked={checked}
                disabled={optionDisabled}
                name={name}
                value={option.value}
                required={required}
                onChange={(event) => handleChange(option.value, event)}
              />

              <span
                className={multiSelectHaloVariants({
                  interactionState,
                  disabled: optionDisabled,
                })}
              >
                <span
                  className={cn(
                    multiSelectCircleVariants({
                      checked,
                      disabled: optionDisabled,
                    }),
                  )}
                >
                  {checked && (
                    <IoCheckmarkOutline className="h-full w-full p-px" />
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

MultiSelect.displayName = "MultiSelect";

export default MultiSelect;
