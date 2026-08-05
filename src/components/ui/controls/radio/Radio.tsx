import { forwardRef } from "react";
import { LABEL_POSITION, type RadioProps } from "./radio.types";
import { cn } from "../../../../lib/cn";
import { radioVariants } from "./radio.variants";
import { GoDotFill } from "react-icons/go";

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, inputRef) => {
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
          type="radio"
          className="sr-only"
          checked={checked}
          disabled={disabled}
          {...inputProps}
        />

        {labelPosition === LABEL_POSITION.LEFT && <span>{label}</span>}

        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${!disabled && "group-hover:bg-[#141414]/5 group-focus-within:bg-[#141414]/10 group-active:bg-[#141414]/15 "}`}
        >
          <div
            aria-hidden="true"
            className={cn(radioVariants({ checked, disabled }), className)}
          >
            {checked && <GoDotFill />}
          </div>
        </div>

        {labelPosition === LABEL_POSITION.RIGHT && <span>{label}</span>}
      </label>
    </div>
  );
});

export default Radio;
