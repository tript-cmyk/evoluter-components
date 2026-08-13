import { useState, type MouseEvent } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { TAG_SHOW_ICON_POSITION, TAG_VARIANT } from "./tag.constants";
import type { TagProps } from "./tag.types";
import {
  iconTagBaseStyles,
  tagIconVariants,
  tagVariants,
} from "./tag.variants";
import { showLeftIcon, showRightIcon } from "./tag.utils";

const Tag = ({
  id,
  title,
  label,
  value,
  variant = TAG_VARIANT.DEFAULT,
  icon = TAG_SHOW_ICON_POSITION.NONE,
  leftIcon = <FiPlus />,
  rightIcon = <FiX />,
  selected,
  defaultSelected = false,
  disabled = false,
  processing = false,
  error = false,
  success = false,
  onClick,
  onRemove,
}: TagProps) => {
  const isControlled = selected !== undefined;
  const [localSelected, setLocalSelected] = useState(defaultSelected);

  const currentSelected = isControlled ? selected : localSelected;
  const isDisabled = disabled || processing;

  const content = label ?? value;

  const handleClick = (
    tagValue: string | undefined,
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    if (!tagValue || isDisabled) {
      return;
    }

    const nextSelected = !currentSelected;

    if (!isControlled) {
      setLocalSelected(nextSelected);
    }

    onClick?.(tagValue, nextSelected, event);
  };

  const handleRemove = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    if (!value || isDisabled) {
      return;
    }

    onRemove?.(value, event);
  };

  return (
    <button
      id={id}
      title={title}
      disabled={isDisabled}
      aria-pressed={currentSelected}
      className={tagVariants({
        variant,
        selected: currentSelected,
        disabled,
        processing,
        error,
        success,
      })}
      onClick={(event) => handleClick(value, event)}
    >
      {showLeftIcon(icon) && (
        <span className={tagIconVariants({ error, success })}>{leftIcon}</span>
      )}

      {content && <span>{content}</span>}

      {showRightIcon(icon) && (
        <span className={iconTagBaseStyles} onClick={handleRemove}>
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Tag;
