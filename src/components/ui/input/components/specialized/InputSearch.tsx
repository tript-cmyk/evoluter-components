import * as React from "react";
import { FiX, FiLoader, FiCheckCircle, FiAlertTriangle, FiSearch } from "react-icons/fi";
import {
  INPUT_STATUS,
  ADDON_POSITION,
  type InputSearchProps,
} from "../../input.types";
import {
  InputRoot,
  InputLabel,
  InputWrapper,
  InputField,
  InputAddonGroup,
  InputAddon,
  FieldDescription,
} from "../primitives";

export function InputSearch({
  status = INPUT_STATUS.DEFAULT,
  label,
  required,
  hint,
  error,
  success,
  processing,
  leftIcon,
  rightIcon,
  clearable = true,
  onClear,
  charactersLimit,
  charactersPlacement,
  containerClassName,
  wrapperClassName,
  value: valueProp,
  onChange,
  disabled = false,
  children,
  ...props
}: InputSearchProps) {
  const isControlled = valueProp !== undefined;
  const [localValue, setLocalValue] = React.useState("");
  const activeValue = isControlled ? valueProp : localValue;

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

  const helperText =
    typeof error === "string"
      ? error
      : typeof success === "string"
        ? success
        : typeof processing === "string"
          ? processing
          : hint;

  const handleClear = () => {
    if (!isControlled) {
      setLocalValue("");
    }
    onClear?.();
    if (onChange) {
      const dummyEvent = {
        target: { value: "" },
        currentTarget: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(dummyEvent);
    }
  };

  const isClearButtonVisible =
    clearable && activeValue.length > 0 && !disabled && !processing;

  return (
    <InputRoot
      status={computedStatus}
      disabled={disabled}
      value={activeValue}
      onChangeValue={(val) => {
        if (!isControlled) {
          setLocalValue(val);
        }
        if (onChange) {
          const dummyEvent = {
            target: { value: val },
            currentTarget: { value: val },
          } as unknown as React.ChangeEvent<HTMLInputElement>;
          onChange(dummyEvent);
        }
      }}
      charactersLimit={charactersLimit}
      charactersPlacement={charactersPlacement}
      className={containerClassName}
    >
      {label && <InputLabel required={required}>{label}</InputLabel>}

      <InputWrapper className={wrapperClassName}>
        <InputAddonGroup position={ADDON_POSITION.LEFT}>
          {leftIcon ? (
            <InputAddon>{leftIcon}</InputAddon>
          ) : (
            <InputAddon>
              <FiSearch className="w-4 h-4 text-[#808080]" />
            </InputAddon>
          )}
        </InputAddonGroup>

        {children}

        <InputField
          type="text"
          disabled={disabled}
          {...props}
        />

        <InputAddonGroup position={ADDON_POSITION.RIGHT}>
          {isClearButtonVisible && (
            <button
              type="button"
              onClick={handleClear}
              className="text-[#808080] hover:text-[#FFF] transition-colors rounded-full focus:outline-none p-0.5 cursor-pointer"
            >
              <FiX className="w-3.5 h-3.5" />
            </button>
          )}

          {rightIcon && (
            <InputAddon>
              {computedStatus === INPUT_STATUS.PROCESSING ? (
                <FiLoader className="w-4 h-4 shrink-0 animate-spin text-[#ABFFC3]" />
              ) : (
                computedStatus !== INPUT_STATUS.SUCCESS &&
                computedStatus !== INPUT_STATUS.ERROR &&
                rightIcon
              )}
            </InputAddon>
          )}

          {computedStatus === INPUT_STATUS.SUCCESS && (
            <InputAddon className="text-[#40A05B]">
              <FiCheckCircle className="w-4 h-4 shrink-0 text-[#ABFFC3]" />
            </InputAddon>
          )}

          {computedStatus === INPUT_STATUS.ERROR && (
            <InputAddon className="text-[#FF5C5C]">
              <FiAlertTriangle className="w-4 h-4 shrink-0 text-[#FF5C5C]" />
            </InputAddon>
          )}
        </InputAddonGroup>
      </InputWrapper>

      {helperText && <FieldDescription>{helperText}</FieldDescription>}
    </InputRoot>
  );
}
