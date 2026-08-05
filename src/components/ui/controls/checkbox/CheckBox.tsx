import { forwardRef } from "react";
import { LABEL_POSITION, type CheckBoxProps } from "./checkbox.types";
import { cn } from "../../../../lib/cn";
import { BsDashLg } from "react-icons/bs";
import { IoCheckmarkOutline } from "react-icons/io5";
import { checkBoxVariants } from "./checkbox.variants";

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, inputRef) => {
    const {
      label,
      labelPosition = LABEL_POSITION.RIGHT,
      indeterminate,
      id,
      checked,
      disabled,
      className,
      ...inputProps
    } = props;

    return (
      <div>
        <label
          className={cn(
            "group inline-flex items-center gap-2",
            disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
          )}
        >
          <input
            id={id}
            ref={inputRef}
            type="checkbox"
            className="sr-only"
            checked={checked}
            disabled={disabled}
            {...inputProps}
          />

          {labelPosition === LABEL_POSITION.LEFT && <span>{label}</span>}

          <div
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full transition-colors",
              !disabled &&
                "group-hover:bg-[#ABFFC3]/7 group-focus-within:bg-[#ABFFC3]/15 group-active:bg-[#ABFFC3]/25 ",
            )}
          >
            <div
              aria-hidden="true"
              className={cn(
                checkBoxVariants({ checked, disabled, indeterminate }),
                className,
              )}
            >
              {checked && !indeterminate && <IoCheckmarkOutline />}
              {indeterminate && <BsDashLg />}
            </div>
          </div>

          {labelPosition === LABEL_POSITION.RIGHT && <span>{label}</span>}
        </label>
      </div>
    );
  },
);

export default CheckBox;
