import {
  type InputProps,
  type InputPasswordProps,
  type InputSearchProps,
  type InputPhoneProps,
  type InputNumberProps,
  type InputTextAreaProps,
  type InputTextProps,
} from "./input.types";
import {
  InputText,
  InputTextArea,
  InputPassword,
  InputSearch,
  InputPhone,
  InputNumber,
} from "./fields";
import { INPUT_TYPE } from "./input.constants";

export function Input(props: InputProps) {
  const { type = INPUT_TYPE.TEXT } = props;
  switch (type) {
    case INPUT_TYPE.PASSWORD:
      return <InputPassword {...(props as InputPasswordProps)} />;
    case INPUT_TYPE.SEARCH:
      return <InputSearch {...(props as InputSearchProps)} />;
    case INPUT_TYPE.TEL:
      return <InputPhone {...(props as InputPhoneProps)} />;
    case INPUT_TYPE.NUMBER:
      return <InputNumber {...(props as InputNumberProps)} />;
    case INPUT_TYPE.TEXT_AREA:
      return <InputTextArea {...(props as InputTextAreaProps)} />;
    default:
      return <InputText {...(props as InputTextProps)} />;
  }
}

export default Input;
