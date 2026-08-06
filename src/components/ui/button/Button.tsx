import { FiLoader } from "react-icons/fi";
import { cn } from "../../../lib/cn";
import { ICON_POSITION } from "./button.types";
import type { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.variants";

export function Button({
  children,
  variant,
  size,
  disabled = false,
  processing = false,
  icon,
  iconPosition = ICON_POSITION.LEFT,
  className,
  ...props
}: ButtonProps) {
  const displayIcon =
    icon && processing ? <FiLoader className="h-4 w-4 animate-spin" /> : icon;

  return (
    <button
      disabled={disabled || processing}
      className={cn(
        buttonVariants({
          variant,
          size,
          processing,
          disabled,
        }),
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {iconPosition === ICON_POSITION.LEFT && displayIcon}

        {children && <span>{children}</span>}

        {iconPosition === ICON_POSITION.RIGHT && displayIcon}
      </span>
    </button>
  );
}
