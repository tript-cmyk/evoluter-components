import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { BsDashLg } from "react-icons/bs";
import { IoCheckmarkOutline } from "react-icons/io5";
import { cn } from "../../../../lib/cn";
import { CHECKBOX_STATE } from "./checkbox.constants";
import { useCheckBoxGroup } from "./checkbox.context";
import type { CheckBoxProps } from "./checkbox.types";
import {
  checkBoxHaloVariants,
  checkBoxVariants,
} from "./checkbox.variants";

const resolveChecked = ({
  checked,
  checkedProp,
  isControlled,
  value,
  groupValues,
}: {
  checked: boolean;
  checkedProp?: boolean;
  isControlled: boolean;
  value?: string;
  groupValues?: string[];
}) => {
  if (groupValues && value !== undefined) {
    return groupValues.includes(value);
  }

  if (isControlled) {
    return !!checkedProp;
  }

  return checked;
};

const CheckBox = (props: CheckBoxProps) => {
  const groupContext = useCheckBoxGroup();

  const {
    label,
    interactionState = CHECKBOX_STATE.DEFAULT,
    indeterminate = false,
    id,
    checked: checkedProp,
    defaultChecked = false,
    disabled: disabledProp = false,
    onChange,
    onFocus,
    onBlur,
    value,
    name: nameProp,
    title,
    required,
  } = props;

  const isControlled = checkedProp !== undefined;
  const isGrouped = !!groupContext;
  const [localChecked, setLocalChecked] = useState(defaultChecked);
  const localRef = useRef<HTMLInputElement>(null);

  const checked = resolveChecked({
    checked: localChecked,
    checkedProp,
    isControlled,
    value,
    groupValues: groupContext?.values,
  });

  const disabled = !!groupContext?.disabled || disabledProp;
  const name = groupContext?.name || nameProp;

  useEffect(() => {
    if (localRef.current) {
      localRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled && !isGrouped) {
      setLocalChecked(event.target.checked);
    }

    if (isGrouped && value !== undefined) {
      groupContext.toggle(value, event.target.checked);
    }

    onChange?.(event);
  };

  return (
    <div className="inline-flex items-center">
      <label
        className={cn(
          "group inline-flex items-center gap-2 select-none",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        )}
      >
        <input
          id={id}
          ref={localRef}
          type="checkbox"
          className="sr-only"
          checked={checked}
          disabled={disabled}
          name={name}
          value={value}
          title={title}
          required={required}
          aria-checked={indeterminate ? "mixed" : checked}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <span
          className={checkBoxHaloVariants({
            interactionState,
            disabled,
          })}
        >
          <span
            className={cn(
              checkBoxVariants({ checked, disabled, indeterminate }),
            )}
          >
            {checked && !indeterminate && (
              <IoCheckmarkOutline className="h-full w-full p-px" />
            )}
            {indeterminate && <BsDashLg className="h-full w-full p-px" />}
          </span>
        </span>

        {label && (
          <span className="font-medium text-white select-none">{label}</span>
        )}
      </label>
    </div>
  );
};

export default CheckBox;
