import { FiLoader } from "react-icons/fi";
import { BUTTON_TYPE, ICON_POSITION } from "./button.types";
import type { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.variants";

const BUTTON_LOADER_CLASS = "h-4 w-4 animate-spin";
const BUTTON_CONTENT_CLASS = "relative z-10 inline-flex items-center gap-2";

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
  const displayIcon = processing ? (
    <FiLoader className={BUTTON_LOADER_CLASS} />
  ) : (
    icon
  );

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
      <span className={BUTTON_CONTENT_CLASS}>
        {iconPosition === ICON_POSITION.LEFT && displayIcon}

        {children && <span>{children}</span>}

        {iconPosition === ICON_POSITION.RIGHT && displayIcon}
      </span>
    </button>
  );
}
