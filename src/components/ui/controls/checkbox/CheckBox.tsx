import * as React from "react";
import { forwardRef, useState, useEffect, useRef } from "react";
import { LABEL_POSITION, type CheckBoxProps } from "./checkbox.types";
import { cn } from "../../../../lib/cn";
import { BsDashLg } from "react-icons/bs";
import { IoCheckmarkOutline } from "react-icons/io5";
import { checkBoxVariants } from "./checkbox.variants";
import { useCheckBoxGroup } from "./checkbox.context";

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>((props, ref) => {
  const groupContext = useCheckBoxGroup();

  const {
    label,
    labelPosition = LABEL_POSITION.RIGHT,
    indeterminate,
    id,
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    className,
    containerClassName,
    onChange,
    value,
    name: nameProp,
    ...inputProps
  } = props;

  const isControlled = checkedProp !== undefined;
  const isGrouped = !!groupContext;

  const [localChecked, setLocalChecked] = useState<boolean>(
    defaultChecked ?? false,
  );

  const checked =
    isGrouped && value !== undefined
      ? groupContext.values.includes(value as string)
      : isControlled
        ? !!checkedProp
        : localChecked;

  const disabled = groupContext?.disabled || disabledProp;
  const name = groupContext?.name || nameProp;

  const localRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localRef.current) {
      localRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  const setRefs = (node: HTMLInputElement | null) => {
    (localRef as any).current = node;
    if (ref) {
      if (typeof ref === "function") {
        ref(node);
      } else {
        (ref as any).current = node;
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled && !isGrouped) {
      setLocalChecked(e.target.checked);
    }
    onChange?.(e);
    if (isGrouped && value !== undefined) {
      groupContext.toggle(value as string, e.target.checked);
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center",
        containerClassName || className,
      )}
    >
      <label
        className={cn(
          "group inline-flex items-center gap-2 select-none",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        )}
      >
        <input
          id={id}
          ref={setRefs}
          type="checkbox"
          className="sr-only"
          checked={checked}
          disabled={disabled}
          name={name}
          value={value}
          onChange={handleChange}
          {...inputProps}
        />

        {labelPosition === LABEL_POSITION.LEFT && (
          <span className="font-medium text-white select-none">{label}</span>
        )}

        <div
          className={cn(
            "flex items-center justify-center rounded-full transition-colors shrink-0",
            !disabled &&
              "group-hover:bg-[#ABFFC3]/7 group-focus-within:bg-[#ABFFC3]/15 group-active:bg-[#ABFFC3]/25 ",
          )}
        >
          <div
            aria-hidden="true"
            className={cn(
              checkBoxVariants({ checked, disabled, indeterminate }),
            )}
          >
            {checked && !indeterminate && (
              <IoCheckmarkOutline className="w-full h-full p-[1px]" />
            )}
            {indeterminate && <BsDashLg className="w-full h-full p-[1px]" />}
          </div>
        </div>

        {labelPosition === LABEL_POSITION.RIGHT && (
          <span className="font-medium text-white select-none">{label}</span>
        )}
      </label>
    </div>
  );
});

CheckBox.displayName = "CheckBox";

export default CheckBox;
