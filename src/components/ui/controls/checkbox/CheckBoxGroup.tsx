import { useCallback, useMemo, useState } from "react";
import CheckBox from "./CheckBox";
import { CheckBoxGroupContext } from "./checkbox.context";
import type { CheckBoxGroupProps } from "./checkbox.types";

export const CheckBoxGroup = ({
  value,
  defaultValue = [],
  onChangeValue,
  options,
  label,
  disabled,
  name,
  id,
  title,
  children,
}: CheckBoxGroupProps) => {
  const isControlled = value !== undefined;

  const [localValue, setLocalValue] = useState<string[]>(defaultValue);

  const values = isControlled ? value : localValue;

  const toggle = useCallback(
    (itemValue: string, checked: boolean) => {
      const nextValues = checked
        ? Array.from(new Set([...values, itemValue]))
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
        id={id}
        title={title}
        className="flex w-full flex-col gap-2 text-left"
      >
        {label && (
          <span className="text-sm font-semibold text-white tracking-wide select-none">
            {label}
          </span>
        )}

        <div
          className="flex flex-row flex-wrap items-center gap-x-6 gap-y-3"
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
