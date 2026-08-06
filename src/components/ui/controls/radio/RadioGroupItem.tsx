import { useId } from "react";
import { cn } from "../../../../lib/cn";
import { useRadioGroupContext } from "./radio-group.context";
import { type RadioGroupItemProps } from "./radio.types";
import { radioControlVariants, radioWrapperVariants } from "./radio.variants";

const RadioGroupItem = ({
  id,
  value,
  label,
  disabled = false,
  className,
  ...props
}: RadioGroupItemProps) => {
  const generatedId = useId();

  const {
    value: groupValue,
    name,
    disabled: groupDisabled,
    onValueChange,
  } = useRadioGroupContext();

  const radioId = id ?? generatedId;
  const isDisabled = disabled || groupDisabled;

  const checked = groupValue === value;

  return (
    <label
      htmlFor={radioId}
      className={cn(
        "group inline-flex items-center gap-2",
        isDisabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
      )}
    >
      <input
        id={radioId}
        type="radio"
        className="sr-only"
        name={name}
        value={value}
        checked={checked}
        disabled={isDisabled}
        onChange={() => onValueChange?.(value)}
        {...props}
      />

      <div
        className={radioWrapperVariants({
          disabled: isDisabled,
        })}
      >
        <div
          className={cn(
            radioControlVariants({
              checked,
              disabled: isDisabled,
            }),
            className,
          )}
        >
          {checked && <div className="w-2 h-2 rounded-full bg-current" />}
        </div>
      </div>

      {label && <span>{label}</span>}
    </label>
  );
};

export default RadioGroupItem;
