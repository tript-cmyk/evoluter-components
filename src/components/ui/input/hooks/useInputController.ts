
import { useCallback } from "react";
import type { InputBaseProps } from "../input.types";
import { getFieldDescriptionMessage, getInputState } from "../utils/input.utils";
import { useInputValue } from "./useInputValue";

export function useInputController({
  status,
  error,
  errorMessage,
  success,
  successMessage,
  processing,
  processingMessage,
  disabled = false,
  readOnly,
  hint,
  clearable = true,
  value: valueProp,
  defaultValue,
  onValueChange,
  onFocus,
  onBlur,
  maxLength,
  characterCounter = false,
  counterPlacement,
}: InputBaseProps) {
  const { value, setValue, isControlled } = useInputValue({
    value: valueProp,
    defaultValue,
    onValueChange,
  });

  const viewState = getInputState({
    status,
    disabled,
    processing,
    success,
    error,
    value,
  });

  const message = getFieldDescriptionMessage({
    error,
    errorMessage,
    success,
    successMessage,
    processing,
    processingMessage,
    hint,
  });

  const showClear =
    clearable && viewState.filled && !viewState.isDisabled && !readOnly;

  const handleClear = useCallback(() => {
    setValue("");
  }, [setValue]);

  const rootProps = {
    status: viewState.status,
    fieldDescriptionStatus: viewState.fieldDescriptionStatus,
    disabled: viewState.isDisabled,
    value,
    onChangeValue: setValue,
    maxLength,
    characterCounter,
    counterPlacement,
    message,
    onFocus,
    onBlur,
  };

  return {
    value,
    setValue,
    isControlled,
    viewState,
    message,
    showClear,
    handleClear,
    rootProps,
  };
}
