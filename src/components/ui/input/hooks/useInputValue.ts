import { useCallback, useState } from "react";
import type { UseInputValueOptions } from "../input.types";

export function useInputValue({
  value,
  defaultValue = "",
  onValueChange,
}: UseInputValueOptions) {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = useState(defaultValue);
  const activeValue = isControlled ? value : localValue;

  const setValue = useCallback(
    (nextValue: string) => {
      if (!isControlled) {
        setLocalValue(nextValue);
      }
      onValueChange?.(nextValue);
    },
    [isControlled, onValueChange],
  );

  return { value: activeValue, setValue, isControlled };
}
