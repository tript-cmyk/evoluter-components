import * as React from "react";
import {
  FiX,
  FiLoader,
  FiCheckCircle,
  FiAlertTriangle,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";
import {
  INPUT_STATUS,
  ADDON_POSITION,
  type InputNumberProps,
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

export function InputNumber({
  status = INPUT_STATUS.DEFAULT,
  label,
  required,
  hint,
  error,
  success,
  processing,
  leftIcon,
  rightIcon,
  clearable = false,
  onClear,
  charactersLimit,
  charactersPlacement,
  containerClassName,
  wrapperClassName,
  value: valueProp,
  onChange,
  disabled = false,
  stepControls = true,
  min,
  max,
  step = 1,
  children,
  ...props
}: InputNumberProps) {
  const isControlled = valueProp !== undefined;
  const [localValue, setLocalValue] = React.useState("");
  const activeValue = isControlled ? valueProp : localValue;

  const inputRef = React.useRef<HTMLInputElement | null>(null);

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

  const handleStep = (direction: "up" | "down") => {
    if (
      disabled ||
      computedStatus === INPUT_STATUS.PROCESSING ||
      !inputRef.current
    )
      return;

    const currentNum = parseFloat(activeValue) || 0;
    const stepVal = typeof step === "number" ? step : parseFloat(step) || 1;
    let nextNum =
      direction === "up" ? currentNum + stepVal : currentNum - stepVal;

    if (min !== undefined) {
      const minVal = typeof min === "number" ? min : parseFloat(min);
      if (!isNaN(minVal) && nextNum < minVal) nextNum = minVal;
    }
    if (max !== undefined) {
      const maxVal = typeof max === "number" ? max : parseFloat(max);
      if (!isNaN(maxVal) && nextNum > maxVal) nextNum = maxVal;
    }

    const nextValStr = nextNum.toString();

    if (!isControlled) {
      setLocalValue(nextValStr);
    }

    if (onChange) {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value",
      )?.set;
      nativeInputValueSetter?.call(inputRef.current, nextValStr);

      const event = new Event("input", { bubbles: true });
      inputRef.current.dispatchEvent(event);
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
        {leftIcon && (
          <InputAddonGroup position={ADDON_POSITION.LEFT}>
            <InputAddon>{leftIcon}</InputAddon>
          </InputAddonGroup>
        )}

        {children}

        <InputField
          ref={inputRef}
          type="number"
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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

          {stepControls &&
            !disabled &&
            computedStatus !== INPUT_STATUS.PROCESSING && (
              <div className="flex flex-col border border-[#333333] rounded-md overflow-hidden bg-[#262626]">
                <button
                  type="button"
                  onClick={() => handleStep("up")}
                  className="flex items-center justify-center px-1 py-0.5 text-[#808080] hover:text-[#FFF] hover:bg-[#333333] transition-colors border-b border-[#333333] focus:outline-none cursor-pointer"
                >
                  <FiChevronUp className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => handleStep("down")}
                  className="flex items-center justify-center px-1 py-0.5 text-[#808080] hover:text-[#FFF] hover:bg-[#333333] transition-colors focus:outline-none cursor-pointer"
                >
                  <FiChevronDown className="w-3 h-3" />
                </button>
              </div>
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
