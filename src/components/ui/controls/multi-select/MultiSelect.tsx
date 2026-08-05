import { forwardRef } from "react";
import { LABEL_POSITION, type MultiSelectProps } from "./multi-select.types";
import { cn } from "../../../../lib/cn";
import { multiSelectVariants } from "./multi-select.variants";
import { IoCheckmarkOutline } from "react-icons/io5";

const Radio = forwardRef<HTMLInputElement, MultiSelectProps>(
  (props, inputRef) => {
    const {
      id,
      label,
      labelPosition = LABEL_POSITION.RIGHT,
      name,
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
            name={name}
            type="checkbox"
            className="sr-only"
            checked={checked}
            disabled={disabled}
            {...inputProps}
          />

          {labelPosition === LABEL_POSITION.LEFT && <span>{label}</span>}

          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${!disabled && "group-hover:bg-[#ABFFC3]/5 group-focus-within:bg-[#ABFFC3]/10 group-active:bg-[#ABFFC3]/15 "}`}
          >
            <div
              aria-hidden="true"
              className={cn(
                multiSelectVariants({ checked, disabled }),
                className,
              )}
            >
              {checked && <IoCheckmarkOutline />}
            </div>
          </div>

          {labelPosition === LABEL_POSITION.RIGHT && <span>{label}</span>}
        </label>
      </div>
    );
  },
);

export default Radio;
