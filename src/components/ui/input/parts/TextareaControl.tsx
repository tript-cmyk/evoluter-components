import { inputControlVariants } from "../input.variants";
import { useInputContext } from "../context/input.context";
import type { TextareaControlProps } from "../input.types";
import { CHARACTERS_PLACEMENT, INPUT_STATUS } from "../input.constants";

export function TextareaControl({
  ref,
  id,
  name,
  placeholder,
  title,
  readOnly,
  rows,
}: TextareaControlProps) {
  const {
    status,
    value,
    onChangeValue,
    setFocused,
    disabled,
    maxLength,
    characterCounter,
    counterPlacement,
    onFocus,
    onBlur,
  } = useInputContext();
  const isInputDisabled = disabled || status === INPUT_STATUS.PROCESSING;
  const showBottomCounter =
    characterCounter !== undefined &&
    maxLength != undefined &&
    counterPlacement === CHARACTERS_PLACEMENT.BOTTOM_LEFT;

  const handleFocus = () => {
    setFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur?.();
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextValue =
      maxLength !== undefined
        ? event.target.value.slice(0, maxLength)
        : event.target.value;
    onChangeValue(nextValue);
  };

  return (
    <div className="flex flex-col w-full h-full justify-between gap-2 relative">
      <textarea
        ref={ref}
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        title={title}
        readOnly={readOnly}
        className={inputControlVariants({
          disabled: isInputDisabled,
          multiline: true,
        })}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={isInputDisabled}
      />
      {showBottomCounter && (
        <span className="text-[10px] font-medium text-[#575757] tracking-wider select-none tab-nums self-start">
          {value.length} / {maxLength}
        </span>
      )}
    </div>
  );
}
