import { type InputTextProps } from "../input.types";
import { useInputController } from "../hooks/useInputController";
import {
  FieldDescription,
  InputIconGroup,
  InputControl,
  InputBorder,
  InputLabel,
  InputRoot,
  InputRightActions,
} from "../parts";
import { ADDON_POSITION, INPUT_STATUS, INPUT_TYPE } from "../input.constants";

export function InputText(props: InputTextProps) {
  const {
    type = INPUT_TYPE.TEXT,
    label,
    required,
    leftIcon,
    rightIcon,
    id,
    name,
    placeholder,
    title,
    readOnly,
  } = props;
  const controller = useInputController(props);
  const showRightActions =
    controller.showClear ||
    rightIcon ||
    controller.viewState.status !== INPUT_STATUS.DEFAULT;

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
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          title={title}
          readOnly={readOnly}
        />
        {showRightActions && (
          <InputIconGroup position={ADDON_POSITION.RIGHT}>
            <InputRightActions
              status={controller.viewState.status}
              showClear={controller.showClear}
              onClear={controller.handleClear}
              rightIcon={rightIcon}
            />
          </InputIconGroup>
        )}
      </InputBorder>
      <FieldDescription />
    </InputRoot>
  );
}
