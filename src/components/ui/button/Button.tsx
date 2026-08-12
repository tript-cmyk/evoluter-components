import { FiLoader } from "react-icons/fi";
import type { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.variants";
import { BUTTON_TYPE, ICON_POSITION } from ".";

const displayIcon = (processing: boolean, icon: React.ReactNode) => {
  return processing ? <FiLoader className="h-4 w-4 animate-spin" /> : icon;
};

export function Button({
  children,
  variant,
  size,
  type = BUTTON_TYPE.BUTTON,
  disabled = false,
  processing = false,
  icon,
  iconPosition = ICON_POSITION.LEFT,
  onClick,
  id,
  name,
  value,
  title,
}: ButtonProps) {
  const isDisabled = disabled || processing;

  return (
    <button
      id={id}
      type={type}
      name={name}
      value={value}
      disabled={isDisabled}
      title={title}
      onClick={onClick}
      className={buttonVariants({
        variant,
        size,
        processing,
        disabled,
      })}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {iconPosition === ICON_POSITION.LEFT && displayIcon(processing, icon)}

        {children && <span>{children}</span>}

        {iconPosition === ICON_POSITION.RIGHT && displayIcon(processing, icon)}
      </span>
    </button>
  );
}
