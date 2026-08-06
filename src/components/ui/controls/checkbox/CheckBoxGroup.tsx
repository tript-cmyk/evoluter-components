import { useCallback, useMemo, useState } from "react";
import { cn } from "../../../../lib/cn";
import CheckBox from "./CheckBox";
import { CheckBoxGroupContext } from "./checkbox.context";
import { DIRECTION, type CheckBoxGroupProps } from "./checkbox.types";

export const CheckBoxGroup = ({
  value,
  defaultValue = [],
  onChangeValue,
  options,
  direction = DIRECTION.HORIZONTAL,
  className,
  label,
  disabled,
  name,
  children,
  ...restProps
}: CheckBoxGroupProps) => {
  const isControlled = value !== undefined;

  const [localValue, setLocalValue] = useState<string[]>(defaultValue);

  const values = isControlled ? value : localValue;

  const toggle = useCallback(
    (itemValue: string, checked: boolean) => {
      const nextValues = checked
        ? [...values, itemValue]
        : values.filter((v) => v !== itemValue);

      if (!isControlled) {
        setLocalValue(nextValues);
      }

      onChangeValue?.(nextValues);
    },
    [values, isControlled, onChangeValue],
  );

  const contextValue = useMemo(
    () => ({
      values,
      toggle,
      disabled,
      name,
    }),
    [values, toggle, disabled, name],
  );

  return (
    <CheckBoxGroupContext.Provider value={contextValue}>
      <div
        className={cn("flex flex-col gap-2 w-full text-left", className)}
        {...restProps}
      >
        {label && (
          <span className="text-sm font-semibold text-white tracking-wide select-none">
            {label}
          </span>
        )}

        <div
          className={cn(
            "flex flex-wrap gap-x-6 gap-y-3",
            direction === "vertical"
              ? "flex-col items-start"
              : "flex-row items-center",
          )}
        >
          {options?.map((option) => (
            <CheckBox
              key={option.value}
              value={option.value}
              label={option.label}
              disabled={option.disabled}
              indeterminate={option.indeterminate}
            />
          ))}

          {children}
        </div>
      </div>
    </CheckBoxGroupContext.Provider>
  );
};

export default CheckBoxGroup;
