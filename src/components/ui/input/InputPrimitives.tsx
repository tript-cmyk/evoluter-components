import * as React from "react";
import { FiLoader, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { cn } from "../../../lib/cn";
import type { InputStatus } from "./input.types";

interface InputContextValue {
  status: InputStatus;
  disabled: boolean;
  focused: boolean;
  setFocused: (focused: boolean) => void;
  value: string;
  onChangeValue: (val: string) => void;
  multiline: boolean;
  symbolsLimit?: number;
  symbolsPlacement?: "bottom-left" | "top-right";
}

const InputContext = React.createContext<InputContextValue | undefined>(
  undefined,
);

export function useInputContext() {
  const context = React.useContext(InputContext);
  if (!context) {
    throw new Error(
      "Input compound subcomponents must be rendered within an InputRoot",
    );
  }
  return context;
}

export interface InputRootProps {
  children: React.ReactNode;
  status?: InputStatus;
  disabled?: boolean;
  value?: string;
  onChangeValue?: (val: string) => void;
  multiline?: boolean;
  symbolsLimit?: number;
  symbolsPlacement?: "bottom-left" | "top-right";
  className?: string;
}

export function InputRoot({
  children,
  status = "default",
  disabled = false,
  value = "",
  onChangeValue = () => {},
  multiline = false,
  symbolsLimit,
  symbolsPlacement = "bottom-left",
  className,
}: InputRootProps) {
  const [focused, setFocused] = React.useState(false);

  let computedStatus: InputStatus = status;
  if (disabled) {
    computedStatus = "disabled";
  } else if (focused && status === "default") {
    computedStatus = "active";
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
      symbolsLimit,
      symbolsPlacement,
    }),
    [
      computedStatus,
      disabled,
      focused,
      value,
      onChangeValue,
      multiline,
      symbolsLimit,
      symbolsPlacement,
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

export interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  description?: string;
}

export function InputLabel({
  children,
  required,
  description,
  className,
  ...props
}: InputLabelProps) {
  const { symbolsLimit, symbolsPlacement, value } = useInputContext();

  const charCount = value.length;
  const showTopCharCount = symbolsLimit && symbolsPlacement === "top-right";

  return (
    <div className="flex items-center justify-between w-full">
      <label
        className={cn(
          "text-xs font-medium text-[#808080] tracking-wide select-none flex items-center gap-0.5",
          className,
        )}
        {...props}
      >
        {children || description}
        {required && <span className="text-[#ABFFC3] font-bold ml-0.5">*</span>}
      </label>
      {showTopCharCount && (
        <span className="text-[10px] font-medium text-[#575757] tracking-wider tab-nums">
          {charCount} / {symbolsLimit}
        </span>
      )}
    </div>
  );
}

export interface InputWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export function InputWrapper({
  children,
  className,
  ...props
}: InputWrapperProps) {
  const { status, multiline } = useInputContext();

  return (
    <div
      className={cn(
        "relative w-full rounded-lg bg-[#212121] border transition-all duration-200 flex",
        multiline
          ? "items-start min-h-[120px] p-3 flex-col gap-2"
          : "items-center px-3.5 h-11",
        // Status border color styling
        status === "default" && "border-[#333333] hover:border-[#444444]",
        status === "active" &&
          "border-[#ABFFC3] shadow-[0_0_8px_rgba(171,255,195,0.15)]",
        status === "success" && "border-[#40A05B]",
        status === "error" &&
          "border-[#FF5C5C] shadow-[0_0_8px_rgba(255,92,92,0.08)]",
        status === "processing" && "border-[#333333]",
        status === "disabled" &&
          "border-[#2A2A2A] bg-[#1A1A1A] opacity-50 pointer-events-none cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type InputFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
> &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange">;

export const InputField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputFieldProps
>(({ className, onFocus, onBlur, ...props }, ref) => {
  const {
    multiline,
    value,
    onChangeValue,
    setFocused,
    disabled,
    symbolsLimit,
    symbolsPlacement,
  } = useInputContext();

  const handleFocus = (e: React.FocusEvent<any>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<any>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let val = e.target.value;
    if (symbolsLimit !== undefined && val.length > symbolsLimit) {
      val = val.substring(0, symbolsLimit);
    }
    onChangeValue(val);
  };

  const commonClasses = cn(
    "w-full bg-transparent border-0 outline-none text-[#FFF] placeholder:text-[#575757]",
    "text-sm font-normal antialiased tracking-wide transition-colors",
    "focus:outline-none focus:ring-0",
    disabled && "cursor-not-allowed text-[#808080]",
    className,
  );

  if (multiline) {
    const showBottomCharCount =
      symbolsLimit && symbolsPlacement === "bottom-left";
    return (
      <div className="flex flex-col w-full h-full justify-between gap-2 relative">
        <textarea
          ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
          className={cn(
            commonClasses,
            "resize-none h-full min-h-[80px] w-full pr-6",
          )}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
        {showBottomCharCount && (
          <span className="text-[10px] font-medium text-[#575757] tracking-wider select-none tab-nums self-start">
            {value.length} / {symbolsLimit}
          </span>
        )}
      </div>
    );
  }

  return (
    <input
      ref={ref as React.ForwardedRef<HTMLInputElement>}
      className={cn(
        commonClasses,
        "h-full py-2.5 overflow-ellipsis whitespace-nowrap",
      )}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      {...props}
    />
  );
});

InputField.displayName = "InputField";

export interface InputAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "left" | "right";
}

export function InputAddon({
  children,
  position = "left",
  className,
  ...props
}: InputAddonProps) {
  const { multiline } = useInputContext();

  return (
    <div
      className={cn(
        "flex items-center justify-center text-[#808080] shrink-0 transition-colors select-none",
        position === "left" ? "mr-2.5" : "ml-2.5",
        multiline && position === "right" && "absolute top-3 right-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface InputHelperTextProps extends React.HTMLAttributes<HTMLDivElement> {}

export function InputHelperText({
  children,
  className,
  ...props
}: InputHelperTextProps) {
  const { status } = useInputContext();

  // Pick color and icon based on current context status
  let textClass = "text-[#808080]";
  let icon: React.ReactNode = null;

  if (status === "success") {
    textClass = "text-[#ABFFC3]";
    icon = <FiCheckCircle className="w-3.5 h-3.5 shrink-0" />;
  } else if (status === "error") {
    textClass = "text-[#FF5C5C]";
    icon = <FiAlertTriangle className="w-3.5 h-3.5 shrink-0" />;
  } else if (status === "processing") {
    textClass = "text-[#808080]";
    icon = (
      <FiLoader className="w-3.5 h-3.5 shrink-0 animate-spin text-[#ABFFC3]" />
    );
  }

  // If there's children, override/combine
  if (!children) return null;

  return (
    <div
      className={cn(
        "text-[10px] font-medium tracking-wide flex items-center gap-1.5 select-none mt-1",
        textClass,
        className,
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}
