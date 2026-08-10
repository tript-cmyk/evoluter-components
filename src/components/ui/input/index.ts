export { InputContext, useInputContext } from "./context/input.context";
export {
  InputText,
  InputTextArea,
  InputPassword,
  InputSearch,
  InputPhone,
  InputNumber,
} from "./fields";

export { useInputController, useInputValue } from "./hooks";

export {
  getFieldDescriptionIcon,
  FieldDescription,
  InputClearButton,
  InputStatusIcon,
  InputRightActions,
  PasswordVisibilityButton,
  InputControl,
  InputBorder,
  InputIconGroup,
  InputLabel,
  InputRoot,
  NumberStepper,
  PhoneCountrySelect,
  TextareaControl,
} from "./parts";

export type {
  InputProps,
  InputBaseProps,
  CountryOption,
  InputTextProps,
  InputTextAreaProps,
  InputPasswordProps,
  InputSearchProps,
  InputPhoneProps,
  InputNumberProps,
  FieldDescriptionOptions,
  InputStateOptions,
  InputIconGroupProps,
  InputClearButtonProps,
  InputContextValue,
  InputControlProps,
  InputFrameProps,
  InputLabelProps,
  InputRightActionsProps,
  InputStatusIconProps,
  NumberStepperProps,
  PasswordVisibilityButtonProps,
  PhoneCountrySelectProps,
  TextareaControlProps,
  UseInputValueOptions,
} from "./input.types";

export {
  ADDON_POSITION,
  CHARACTERS_PLACEMENT,
  INPUT_NUMBER_DIRECTION,
  INPUT_STATUS,
  INPUT_TYPE,
  defaultCountryOptions,
} from "./input.constants";

export { getFieldDescriptionMessage, getFieldDescriptionState, getFlagUrl, getInputState } from "./utils/input.utils";
