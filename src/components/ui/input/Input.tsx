import * as React from "react";
import {
  FiSearch,
  FiEye,
  FiEyeOff,
  FiX,
  FiChevronDown,
  FiCheckCircle,
  FiAlertTriangle,
  FiLoader,
} from "react-icons/fi";
import { cn } from "../../../lib/cn";
import {
  INPUT_STATUS,
  INPUT_TYPE,
  CHARACTERS_PLACEMENT,
  ADDON_POSITION,
  type InputProps,
} from "./input.types";
import { defaultCountries, flagUrl } from "./input.utils";
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
      type = INPUT_TYPE.TEXT,
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
      multiline = false,
      charactersLimit,
      charactersPlacement = CHARACTERS_PLACEMENT.BOTTOM_LEFT,
      countryCode,
      onCountryCodeChange,
      countryOptions = defaultCountries,
      containerClassName,
      wrapperClassName,
      value: valueProp,
      onChange,
      disabled = false,
      placeholder,
      showPassword: controlledShowPassword,
      onShowPasswordChange,
      ...props
    },
    ref,
  ) => {
    const isControlled = valueProp !== undefined;
    const [localValue, setLocalValue] = React.useState("");
    const activeValue = isControlled ? valueProp : localValue;

    const [localShowPassword, setLocalShowPassword] = React.useState(false);
    const showPassword =
      controlledShowPassword !== undefined
        ? controlledShowPassword
        : localShowPassword;

    const toggleShowPassword = () => {
      const nextShow = !showPassword;
      if (controlledShowPassword === undefined) {
        setLocalShowPassword(nextShow);
      }
      onShowPasswordChange?.(nextShow);
    };

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

    const handleSelectCountry = (code: string) => {
      setSelectedCountryCode(code);
      onCountryCodeChange?.(code);
      setIsDropdownOpen(false);
    };

    const activeCountry =
      countryOptions.find((c) => c.code === selectedCountryCode) ||
      countryOptions[0];

    const isPasswordType = type === INPUT_TYPE.PASSWORD;
    const resolvedInputType = isPasswordType
      ? showPassword
        ? INPUT_TYPE.TEXT
        : INPUT_TYPE.PASSWORD
      : type;

    const isClearButtonVisible =
      (clearable ||
        type === INPUT_TYPE.SEARCH ||
        type === INPUT_TYPE.TEL ||
        isPasswordType) &&
      activeValue.length > 0 &&
      !disabled &&
      !processing;

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
            } as any;
            onChange(dummyEvent);
          }
        }}
        multiline={multiline}
        charactersLimit={charactersLimit}
        charactersPlacement={charactersPlacement}
        className={containerClassName}
      >
        {label && <InputLabel required={required}>{label}</InputLabel>}

        <InputWrapper className={wrapperClassName}>
          {type === INPUT_TYPE.TEL && (
            <div
              ref={dropdownRef}
              className="relative flex items-center self-stretch h-full mr-2.5"
            >
              <button
                type="button"
                disabled={disabled || !!processing}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium text-[#FFF] hover:opacity-85 transition-opacity h-full focus:outline-none",
                  (disabled || !!processing) && "opacity-50 cursor-not-allowed",
                )}
              >
                {activeCountry?.code ? (
                  <img
                    src={flagUrl(activeCountry.code)}
                    width="20"
                    alt={activeCountry.name}
                    className="object-contain rounded-xs shrink-0"
                  />
                ) : (
                  <span>{activeCountry?.flag}</span>
                )}
                <FiChevronDown className="w-3.5 h-3.5 text-[#808080] shrink-0" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-[calc(100%+8px)] left-[-8px] z-50 bg-[#1e1e1e] border border-[#333333] rounded-lg p-1 shadow-2xl min-w-[220px] max-h-60 overflow-y-auto flex flex-col gap-0.5 scrollbar-thin">
                  {countryOptions.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => handleSelectCountry(c.code)}
                      className={cn(
                        "flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-left text-[#FFF] hover:bg-[#282828] rounded-md transition-colors w-full focus:outline-none cursor-pointer",
                        selectedCountryCode === c.code &&
                          "bg-[#282828] font-semibold text-[#ABFFC3]",
                      )}
                    >
                      {c.code ? (
                        <img
                          src={flagUrl(c.code)}
                          width="20"
                          alt={c.name}
                          className="object-contain rounded-xs shrink-0"
                        />
                      ) : (
                        <span className="text-sm shrink-0">{c.flag}</span>
                      )}
                      <span className="truncate">{c.name}</span>
                      <span className="ml-auto text-[10px] text-[#808080] shrink-0">
                        {c.dial_code || c.code}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              <div className="w-[1px] h-4 bg-[#333333] mx-2" />
            </div>
          )}

          {type === INPUT_TYPE.SEARCH && !leftIcon && (
            <InputAddon position={ADDON_POSITION.LEFT}>
              <FiSearch className="w-4 h-4 text-[#808080]" />
            </InputAddon>
          )}

          {leftIcon && type !== "tel" && (
            <InputAddon position={ADDON_POSITION.LEFT}>{leftIcon}</InputAddon>
          )}

          <InputField
            ref={ref}
            type={resolvedInputType}
            placeholder={placeholder}
            {...props}
          />

          <div
            className={cn(
              "flex items-center gap-2 shrink-0 select-none",
              multiline ? "absolute top-3.5 right-3.5" : "ml-2.5",
            )}
          >
            {isClearButtonVisible && (
              <button
                type="button"
                onClick={handleClear}
                className="text-[#808080] hover:text-[#FFF] transition-colors rounded-full focus:outline-none p-0.5"
              >
                <FiX className="w-3.5 h-3.5" />
              </button>
            )}

            {isPasswordType && (
              <button
                type="button"
                disabled={disabled || !!processing}
                onClick={toggleShowPassword}
                className={cn(
                  "text-[#808080] hover:text-[#FFF] transition-colors focus:outline-none p-0.5",
                  (disabled || !!processing) && "opacity-50 cursor-not-allowed",
                )}
              >
                {showPassword ? (
                  <FiEyeOff className="w-3.5 h-3.5" />
                ) : (
                  <FiEye className="w-3.5 h-3.5" />
                )}
              </button>
            )}

            {rightIcon && (
              <div className="text-[#808080] flex items-center justify-center">
                {computedStatus === INPUT_STATUS.PROCESSING ? (
                  <FiLoader className="w-4 h-4 shrink-0 animate-spin text-[#ABFFC3]" />
                ) : (
                  computedStatus !== INPUT_STATUS.SUCCESS &&
                  computedStatus !== INPUT_STATUS.ERROR &&
                  rightIcon
                )}
              </div>
            )}

            {!multiline &&
              computedStatus === INPUT_STATUS.SUCCESS &&
              (type === INPUT_TYPE.SEARCH ||
                type === INPUT_TYPE.TEL ||
                rightIcon) && (
                <div className="text-[#40A05B] flex items-center justify-center">
                  <FiCheckCircle className="w-4 h-4 shrink-0 text-[#ABFFC3]" />
                </div>
              )}
            {!multiline &&
              computedStatus === INPUT_STATUS.ERROR &&
              (type === INPUT_TYPE.SEARCH ||
                type === INPUT_TYPE.TEL ||
                rightIcon) && (
                <div className="text-[#FF5C5C] flex items-center justify-center">
                  <FiAlertTriangle className="w-4 h-4 shrink-0 text-[#FF5C5C]" />
                </div>
              )}
          </div>
        </InputWrapper>

        {helperText && <InputHelperText>{helperText}</InputHelperText>}
      </InputRoot>
    );
  },
);

Input.displayName = "Input";
export default Input;
