import * as React from "react";
import { cn } from "../../../../../lib/cn";
import { INPUT_STATUS, CHARACTERS_PLACEMENT } from "../../input.types";

export interface InputContextValue {
  status: INPUT_STATUS;
  disabled: boolean;
  focused: boolean;
  setFocused: (focused: boolean) => void;
  value: string;
  onChangeValue: (val: string) => void;
  multiline: boolean;
  charactersLimit?: number;
  charactersPlacement?: CHARACTERS_PLACEMENT;
}

export const InputContext = React.createContext<InputContextValue | undefined>(
  undefined,
);

export function useInputContext() {
  const context = React.useContext(InputContext);
  return (
    context || {
      status: INPUT_STATUS.DEFAULT,
      disabled: false,
      focused: false,
      setFocused: () => {},
      value: "",
      onChangeValue: () => {},
      multiline: false,
    }
  );
}

export interface InputRootProps {
  children: React.ReactNode;
  status?: INPUT_STATUS;
  disabled?: boolean;
  value?: string;
  onChangeValue?: (val: string) => void;
  multiline?: boolean;
  charactersLimit?: number;
  charactersPlacement?: CHARACTERS_PLACEMENT;
  className?: string;
}

export function InputRoot({
  children,
  status = INPUT_STATUS.DEFAULT,
  disabled = false,
  value = "",
  onChangeValue = () => {},
  multiline = false,
  charactersLimit,
  charactersPlacement = CHARACTERS_PLACEMENT.BOTTOM_LEFT,
  className,
}: InputRootProps) {
  const [focused, setFocused] = React.useState(false);

  let computedStatus: INPUT_STATUS = status;
  if (disabled) {
    computedStatus = INPUT_STATUS.DISABLED;
  } else if (focused && status === INPUT_STATUS.DEFAULT) {
    computedStatus = INPUT_STATUS.ACTIVE;
  }

  const contextValue = React.useMemo(
    () => ({
      status: computedStatus,
      disabled,
      focused,
      setFocused,
      value,
      onChangeValue,
      multiline,
      charactersLimit,
      charactersPlacement,
    }),
    [
      computedStatus,
      disabled,
      focused,
      value,
      onChangeValue,
      multiline,
      charactersLimit,
      charactersPlacement,
    ],
  );

  return (
    <InputContext.Provider value={contextValue}>
      <div className={cn("flex flex-col gap-1.5 w-full text-left", className)}>
        {children}
      </div>
    </InputContext.Provider>
  );
}
