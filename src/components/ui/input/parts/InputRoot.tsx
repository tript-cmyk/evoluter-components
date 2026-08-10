import { useMemo, useState, type ReactNode } from "react";
import { InputContext } from "../context/input.context";
import { CHARACTERS_PLACEMENT, INPUT_STATUS } from "../input.constants";

export interface InputRootProps {
  children: ReactNode;
  status: INPUT_STATUS;
  fieldDescriptionStatus: INPUT_STATUS;
  disabled: boolean;
  value: string;
  onChangeValue: (value: string) => void;
  multiline?: boolean;
  maxLength?: number;
  characterCounter?: boolean;
  counterPlacement?: CHARACTERS_PLACEMENT;
  message?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function InputRoot({
  children,
  status,
  fieldDescriptionStatus,
  disabled,
  value,
  onChangeValue,
  multiline = false,
  maxLength,
  characterCounter = false,
  counterPlacement = CHARACTERS_PLACEMENT.BOTTOM_LEFT,
  message,
  onFocus,
  onBlur,
}: InputRootProps) {
  const [focused, setFocused] = useState(false);
  const viewStatus: INPUT_STATUS =
    focused ? INPUT_STATUS.ACTIVE : status;

  const contextValue = useMemo(
    () => ({
      status: viewStatus,
      fieldDescriptionStatus,
      disabled,
      focused,
      setFocused,
      value,
      onChangeValue,
      multiline,
      maxLength,
      characterCounter,
      counterPlacement,
      message,
      onFocus,
      onBlur,
    }),
    [
      viewStatus,
      fieldDescriptionStatus,
      disabled,
      focused,
      value,
      onChangeValue,
      multiline,
      maxLength,
      characterCounter,
      counterPlacement,
      message,
      onFocus,
      onBlur,
    ],
  );

  return (
    <InputContext.Provider value={contextValue}>
      <div className="flex flex-col gap-1.5 w-full text-left">{children}</div>
    </InputContext.Provider>
  );
}
