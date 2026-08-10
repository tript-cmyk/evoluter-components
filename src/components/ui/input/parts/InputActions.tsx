import {
  FiAlertTriangle,
  FiCheckCircle,
  FiEye,
  FiEyeOff,
  FiLoader,
  FiX,
} from "react-icons/fi";
import {
  type InputClearButtonProps,
  type InputRightActionsProps,
  type InputStatusIconProps,
  type PasswordVisibilityButtonProps,
} from "../input.types";
import { cn } from "../../../../lib/cn";
import { INPUT_STATUS } from "../input.constants";

export function InputClearButton({ onClear }: InputClearButtonProps) {
  return (
    <button
      type="button"
      onClick={onClear}
      className="text-[#808080] hover:text-white transition-colors rounded-full focus:outline-none p-0.5 cursor-pointer"
    >
      <FiX className="w-3.5 h-3.5" />
    </button>
  );
}

export function InputStatusIcon({ status }: InputStatusIconProps) {
  if (status === INPUT_STATUS.SUCCESS) {
    return <FiCheckCircle className="w-4 h-4 shrink-0 text-[#00B861]" />;
  }

  if (status === INPUT_STATUS.ERROR) {
    return <FiAlertTriangle className="w-4 h-4 shrink-0 text-[#FF4A1C]" />;
  }

  return null;
}

export function InputRightActions({
  status,
  showClear,
  onClear,
  rightIcon,
}: InputRightActionsProps) {
  const isProcessing = status === INPUT_STATUS.PROCESSING;
  const isSuccess = status === INPUT_STATUS.SUCCESS;
  const isError = status === INPUT_STATUS.ERROR;

  return (
    <>
      {showClear && <InputClearButton onClear={onClear} />}
      {!isProcessing && !isSuccess && !isError && rightIcon && (
        rightIcon
      )}
      {rightIcon && isProcessing && (
        <FiLoader className="w-4 h-4 shrink-0 animate-spin text-[#ABFFC3]" />
      )}
      {rightIcon && <InputStatusIcon status={status} />}
    </>
  );
}

export function PasswordVisibilityButton({
  disabled,
  showPassword,
  onToggle,
}: PasswordVisibilityButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onToggle}
      className={cn(
        "text-[#CFCFCF] hover:text-white transition-colors focus:outline-none p-0.5 cursor-pointer",
        disabled ? "opacity-50 cursor-not-allowed" : "",
      )}
    >
      {showPassword ? (
        <FiEyeOff className="w-3.5 h-3.5" />
      ) : (
        <FiEye className="w-3.5 h-3.5" />
      )}
    </button>
  );
}
