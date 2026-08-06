import { forwardRef, useMemo, useState } from "react";
import { cn } from "../../../../lib/cn";
import type { RadioGroupProps } from "./radio.types";
import { RadioGroupContext } from "./radio-group.context";

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      name,
      disabled = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);

    const currentValue = value ?? internalValue;

    const handleValueChange = (nextValue: string) => {
      if (value === undefined) {
        setInternalValue(nextValue);
      }

      onValueChange?.(nextValue);
    };

    const contextValue = useMemo(
      () => ({
        value: currentValue,
        name,
        disabled,
        onValueChange: handleValueChange,
      }),
      [currentValue, name, disabled, onValueChange, value],
    );

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <div
          ref={ref}
          role="radiogroup"
          className={cn("flex flex-col gap-2", className)}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  },
);

export default RadioGroup;
