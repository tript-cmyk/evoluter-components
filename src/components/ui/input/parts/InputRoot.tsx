import { useMemo, useState } from "react";
import { InputContext } from "../context/input.context";
import { CHARACTERS_PLACEMENT, INPUT_STATUS } from "../input.constants";
import type { InputRootProps } from "../input.types";

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
