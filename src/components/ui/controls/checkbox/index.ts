import CheckBoxOriginal from "./CheckBox";
import CheckBoxGroup from "./CheckBoxGroup";

type CheckBoxComponentType = typeof CheckBoxOriginal & {
  Group: typeof CheckBoxGroup;
};

const CheckBox = CheckBoxOriginal as CheckBoxComponentType;
CheckBox.Group = CheckBoxGroup;

export { CheckBox, CheckBoxGroup };
export { LABEL_POSITION, DIRECTION } from "./checkbox.types";
export type {
  CheckBoxProps,
  CheckBoxGroupProps,
  CheckBoxGroupOption,
} from "./checkbox.types";
export { checkBoxVariants } from "./checkbox.variants";
