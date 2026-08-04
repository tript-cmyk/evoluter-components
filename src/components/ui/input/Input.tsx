import * as React from "react";
import {
  FiSearch,
  FiEye,
  FiEyeOff,
  FiX,
  FiChevronDown,
  FiCheckCircle,
  FiAlertTriangle,
} from "react-icons/fi";
import { cn } from "../../../lib/cn";
import type { InputProps } from "./input.types";
import { defaultCountries } from "./input.utils";
import {
  InputRoot,
  InputLabel,
  InputWrapper,
  InputField,
  InputAddon,
  InputHelperText,
} from "./InputPrimitives";

export const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    {
      type = "text",
      status = "default",
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
      multiline = false,
      symbolsLimit,
      symbolsPlacement = "bottom-left",
      countryCode,
      onCountryCodeChange,
      countryOptions = defaultCountries,
      containerClassName,
      wrapperClassName,
      value: valueProp,
      onChange,
      disabled = false,
      placeholder,
      ...props
    },
    ref,
  ) => {
    // Controlled vs Uncontrolled value state management
    const isControlled = valueProp !== undefined;
    const [localValue, setLocalValue] = React.useState("");
    const activeValue = isControlled ? valueProp : localValue;

    // Password visibility state
    const [showPassword, setShowPassword] = React.useState(false);

    // Country dropdown state
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = React.useState(
      countryCode || countryOptions[0]?.code,
    );
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (countryCode !== undefined) {
        setSelectedCountryCode(countryCode);
      }
    }, [countryCode]);

    // Close country selector dropdown on click outside
    React.useEffect(() => {
      if (!isDropdownOpen) return;
      const handleClickOutside = (e: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target as Node)
        ) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [isDropdownOpen]);

    // Determine target operational status
    let computedStatus = status;
    if (disabled) {
      computedStatus = "disabled";
    } else if (error) {
      computedStatus = "error";
    } else if (success) {
      computedStatus = "success";
    } else if (processing) {
      computedStatus = "processing";
    }

    // Helper text value resolution
    const helperText =
      typeof error === "string"
        ? error
        : typeof success === "string"
          ? success
          : typeof processing === "string"
            ? processing
            : hint;

    // Handle clear action
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

    // Select country callback
    const handleSelectCountry = (code: string) => {
      setSelectedCountryCode(code);
      onCountryCodeChange?.(code);
      setIsDropdownOpen(false);
    };

    // Active country representation
    const activeCountry =
      countryOptions.find((c) => c.code === selectedCountryCode) ||
      countryOptions[0];

    // Determine type for password field toggling
    const isPasswordType = type === "password";
    const resolvedInputType = isPasswordType
      ? showPassword
        ? "text"
        : "password"
      : type;

    // Show clear button logic
    const isClearButtonVisible =
      (clearable || type === "search" || type === "tel" || isPasswordType) &&
      activeValue.length > 0 &&
      !disabled;

    return (
      <InputRoot
        status={computedStatus}
        disabled={disabled}
        value={activeValue}
        onChangeValue={(val) => {
          // Sync state back to controller/local
          if (!isControlled) {
            setLocalValue(val);
          }
          if (onChange) {
            const dummyEvent = {
              target: { value: val },
              currentTarget: { value: val },
            } as any;
            onChange(dummyEvent);
          }
        }}
        multiline={multiline}
        symbolsLimit={symbolsLimit}
        symbolsPlacement={symbolsPlacement}
        className={containerClassName}
      >
        {/* Label */}
        {label && <InputLabel required={required}>{label}</InputLabel>}

        {/* Input Field and Wrapper */}
        <InputWrapper className={wrapperClassName}>
          {/* Tel variant: Country selector prefix */}
          {type === "tel" && (
            <div
              ref={dropdownRef}
              className="relative flex items-center self-stretch h-full mr-2.5"
            >
              <button
                type="button"
                disabled={disabled}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium text-[#FFF] hover:opacity-85 transition-opacity h-full focus:outline-none",
                  disabled && "opacity-50 cursor-not-allowed",
                )}
              >
                <span>{activeCountry?.flag}</span>
                <FiChevronDown className="w-3.5 h-3.5 text-[#808080]" />
              </button>

              {/* Country dropdown menu list */}
              {isDropdownOpen && (
                <div className="absolute top-[calc(100%+8px)] left-[-8px] z-50 bg-[#1e1e1e] border border-[#333333] rounded-lg p-1 shadow-2xl min-w-[130px] flex flex-col gap-0.5">
                  {countryOptions.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => handleSelectCountry(c.code)}
                      className={cn(
                        "flex items-center gap-2 px-2.5 py-1.5 text-xs text-left text-[#FFF] hover:bg-[#282828] rounded-md transition-colors w-full focus:outline-none",
                        selectedCountryCode === c.code &&
                          "bg-[#282828] font-semibold text-[#ABFFC3]",
                      )}
                    >
                      <span className="text-sm">{c.flag}</span>
                      <span className="truncate">{c.name}</span>
                      <span className="ml-auto text-[10px] text-[#808080]">
                        {c.code}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Selector Divider line */}
              <div className="w-[1px] h-4 bg-[#333333] mx-2" />
            </div>
          )}

          {/* Regular left icon / search icon */}
          {type === "search" && !leftIcon && (
            <InputAddon position="left">
              <FiSearch className="w-4 h-4 text-[#808080]" />
            </InputAddon>
          )}

          {leftIcon && type !== "tel" && (
            <InputAddon position="left">{leftIcon}</InputAddon>
          )}

          {/* Actual text field / area input */}
          <InputField
            ref={ref}
            type={resolvedInputType}
            placeholder={placeholder}
            {...props}
          />

          {/* Right Icon slots (clear button, password toggle, status spinners/checkmarks/warnings) */}
          <div
            className={cn(
              "flex items-center gap-2 shrink-0 select-none",
              multiline ? "absolute top-3.5 right-3.5" : "ml-2.5",
            )}
          >
            {/* Clear Button */}
            {isClearButtonVisible && (
              <button
                type="button"
                onClick={handleClear}
                className="text-[#808080] hover:text-[#FFF] transition-colors rounded-full focus:outline-none p-0.5"
              >
                <FiX className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Password Visibility Toggle */}
            {isPasswordType && (
              <button
                type="button"
                disabled={disabled}
                onClick={() => setShowPassword(!showPassword)}
                className={cn(
                  "text-[#808080] hover:text-[#FFF] transition-colors focus:outline-none p-0.5",
                  disabled && "opacity-50 cursor-not-allowed",
                )}
              >
                {showPassword ? (
                  <FiEyeOff className="w-3.5 h-3.5" />
                ) : (
                  <FiEye className="w-3.5 h-3.5" />
                )}
              </button>
            )}

            {/* Custom Right icon */}
            {rightIcon && !computedStatus.match(/success|error|processing/) && (
              <div className="text-[#808080] flex items-center justify-center">
                {rightIcon}
              </div>
            )}

            {/* Success and Error state indicators (rendered inline inside the input box on the right if not multiline) */}
            {!multiline &&
              computedStatus === "success" &&
              (type === "search" || type === "tel" || rightIcon) && (
                <div className="text-[#40A05B] flex items-center justify-center">
                  <FiCheckCircle className="w-4 h-4 shrink-0 text-[#ABFFC3]" />
                </div>
              )}
            {!multiline &&
              computedStatus === "error" &&
              (type === "search" || type === "tel" || rightIcon) && (
                <div className="text-[#FF5C5C] flex items-center justify-center">
                  <FiAlertTriangle className="w-4 h-4 shrink-0 text-[#FF5C5C]" />
                </div>
              )}
          </div>
        </InputWrapper>

        {/* Helper Text */}
        {helperText && <InputHelperText>{helperText}</InputHelperText>}
      </InputRoot>
    );
  },
);

Input.displayName = "Input";
export default Input;
