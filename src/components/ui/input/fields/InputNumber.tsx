import { type InputNumberProps } from "../input.types";
import { useInputController } from "../hooks/useInputController";
import {
  FieldDescription,
  InputIconGroup,
  InputControl,
  InputBorder,
  InputLabel,
  InputRoot,
  InputRightActions,
  NumberStepper,
} from "../parts";
import {
  ADDON_POSITION,
  INPUT_NUMBER_DIRECTION,
  INPUT_TYPE,
} from "../input.constants";

export function InputNumber(props: InputNumberProps) {
  const {
    label,
    required,
    leftIcon,
    rightIcon,
    id,
    name,
    placeholder,
    title,
    readOnly,
    min,
    max,
    step = 1,
    stepControls = true,
  } = props;
  const controller = useInputController(props);

  const handleStep = (direction: INPUT_NUMBER_DIRECTION) => {
    if (controller.viewState.isDisabled || readOnly) return;

    const currentValue = Number.parseFloat(controller.value);
    const currentNumber = Number.isNaN(currentValue) ? 0 : currentValue;
    const nextRaw =
      direction === INPUT_NUMBER_DIRECTION.UP
        ? currentNumber + step
        : currentNumber - step;
    const nextWithMin = min !== undefined ? Math.max(min, nextRaw) : nextRaw;
    const nextValue =
      max !== undefined ? Math.min(max, nextWithMin) : nextWithMin;
    controller.setValue(String(nextValue));
  };

  return (
    <InputRoot {...controller.rootProps}>
      <InputLabel required={required}>{label}</InputLabel>
      <InputBorder>
        {leftIcon && (
          <InputIconGroup position={ADDON_POSITION.LEFT}>
            {leftIcon}
          </InputIconGroup>
        )}
        <InputControl
          type={INPUT_TYPE.NUMBER}
          id={id}
          name={name}
          placeholder={placeholder}
          title={title}
          readOnly={readOnly}
          min={min}
          max={max}
          step={step}
        />
        <InputIconGroup position={ADDON_POSITION.RIGHT}>
          <InputRightActions
            status={controller.viewState.status}
            showClear={controller.showClear}
            onClear={controller.handleClear}
            rightIcon={rightIcon}
          />
          {stepControls && !controller.viewState.isDisabled && !readOnly && (
            <NumberStepper onStep={handleStep} />
          )}
        </InputIconGroup>
      </InputBorder>
      <FieldDescription />
    </InputRoot>
  );
}
