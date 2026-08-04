import { FiLoader } from "react-icons/fi";
import { fillVariants, buttonVariants } from "./button.variants";
import { type ButtonProps } from "./button.types";
import { cn } from "../../../lib/cn";

export function Button({
  children,
  variant,
  size,
  className,
  icon,
  iconPosition = "left",
  iconOnly,
  processing = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const isDisabled = processing || disabled;

  const displayIcon =
    icon && processing ? <FiLoader className="h-4 w-4 animate-spin" /> : icon;

  return (
    <button
      disabled={isDisabled}
      className={cn(
        buttonVariants({
          variant,
          size,
          processing,
          disabled,
          iconOnly,
        }),
        className,
      )}
      {...props}
    >
      <span className={fillVariants({ variant })} />

      <span className="relative z-10 inline-flex items-center gap-2">
        {iconOnly ? (
          displayIcon
        ) : (
          <>
            {iconPosition === "left" && displayIcon}

            {children && <span>{children}</span>}

            {iconPosition === "right" && displayIcon}
          </>
        )}
      </span>
    </button>
  );
}
