import { INPUT_STATUS } from "../input.constants";
import type { FieldDescriptionOptions, InputStateOptions } from "../input.types";

export function getFieldDescriptionMessage({
  error,
  errorMessage,
  success,
  successMessage,
  processing,
  processingMessage,
  hint,
}: FieldDescriptionOptions) {
  if (error) return errorMessage ?? "Error message";
  if (success) return successMessage ?? "Success";
  if (processing) return processingMessage ?? "Processing";
  return hint;
}

export function getInputState({
  status = INPUT_STATUS.DEFAULT,
  disabled,
  processing,
  success,
  error,
  value,
}: InputStateOptions) {
  const filled = value.length > 0;
  let computedStatus = status;

  if (disabled) {
    computedStatus = INPUT_STATUS.DISABLED;
  } else if (error) {
    computedStatus = INPUT_STATUS.ERROR;
  } else if (success) {
    computedStatus = INPUT_STATUS.SUCCESS;
  } else if (processing) {
    computedStatus = INPUT_STATUS.PROCESSING;
  }

  return {
    status: computedStatus,
    fieldDescriptionStatus: getFieldDescriptionState(computedStatus),
    filled,
    isDisabled: disabled || computedStatus === INPUT_STATUS.PROCESSING,
    isProcessing: computedStatus === INPUT_STATUS.PROCESSING,
    isSuccess: computedStatus === INPUT_STATUS.SUCCESS,
    isError: computedStatus === INPUT_STATUS.ERROR,
  };
}

export function getFieldDescriptionState(status: INPUT_STATUS) {
  if (status === INPUT_STATUS.DISABLED) return INPUT_STATUS.DISABLED;
  if (status === INPUT_STATUS.ERROR) return INPUT_STATUS.ERROR;
  if (status === INPUT_STATUS.SUCCESS) return INPUT_STATUS.SUCCESS;
  if (status === INPUT_STATUS.PROCESSING) return INPUT_STATUS.PROCESSING;
  return INPUT_STATUS.DEFAULT;
}

export const getFlagUrl = (code: string) => {
  return `https://flagcdn.com/w20/${code.toLowerCase()}.png`;
};
