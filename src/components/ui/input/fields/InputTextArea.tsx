import { type InputTextAreaProps } from "../input.types";
import { useInputController } from "../hooks/useInputController";
import {
  FieldDescription,
  InputIconGroup,
  InputBorder,
  InputLabel,
  InputRoot,
  InputRightActions,
  TextareaControl,
} from "../parts";
import { ADDON_POSITION, INPUT_STATUS } from "../input.constants";

export function InputTextArea(props: InputTextAreaProps) {
  const {
    label,
    required,
    id,
    name,
    placeholder,
    title,
    readOnly,
    rows,
  } = props;
  const controller = useInputController(props);
  const showRightActions =
    controller.showClear ||
    controller.viewState.status !== INPUT_STATUS.DEFAULT;

  return (
    <InputRoot {...controller.rootProps} multiline>
      <InputLabel required={required}>{label}</InputLabel>
      <InputBorder>
        <TextareaControl
          id={id}
          name={name}
          placeholder={placeholder}
          title={title}
          readOnly={readOnly}
          rows={rows}
        />
        {showRightActions && (
          <InputIconGroup position={ADDON_POSITION.RIGHT}>
            <InputRightActions
              status={controller.viewState.status}
              showClear={controller.showClear}
              onClear={controller.handleClear}
            />
          </InputIconGroup>
        )}
      </InputBorder>
      <FieldDescription />
    </InputRoot>
  );
}
