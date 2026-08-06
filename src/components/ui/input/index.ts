export { Input } from "./Input";
export {
  InputRoot,
  InputLabel,
  InputWrapper,
  InputField,
  TextAreaField,
  InputAddon,
  InputAddonGroup,
  FieldDescription,
  InputHelperText,
} from "./components/primitives";

export {
  InputText,
  InputTextArea,
  InputPassword,
  InputSearch,
  InputPhone,
  InputNumber,
} from "./components/specialized";

export {
  INPUT_STATUS,
  INPUT_TYPE,
  CHARACTERS_PLACEMENT,
  ADDON_POSITION,
} from "./input.types";

export type {
  InputProps,
  CountryOption,
  InputTextProps,
  InputTextAreaProps,
  InputPasswordProps,
  InputSearchProps,
  InputPhoneProps,
  InputNumberProps,
} from "./input.types";

export * from "./input.utils";
export * from "./input.variants";
