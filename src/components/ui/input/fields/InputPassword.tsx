
import { type InputPasswordProps } from "../input.types";
import { useInputController } from "../hooks/useInputController";
import {
  FieldDescription,
  InputIconGroup,
  InputControl,
  InputBorder,
  InputLabel,
  InputRoot,
  InputRightActions,
  PasswordVisibilityButton,
} from "../parts";
import { ADDON_POSITION, INPUT_TYPE } from "../input.constants";
import { useState } from "react";

export function InputPassword(props: InputPasswordProps) {
  const {
    label,
    required,
    leftIcon,
    id,
    name,
    placeholder,
    title,
    readOnly,
    showPassword: controlledShowPassword,
    defaultShowPassword = false,
    onShowPasswordChange,
  } = props;

  const controller = useInputController(props);
  const [localShowPassword, setLocalShowPassword] =
    useState(defaultShowPassword);
  const showPassword = controlledShowPassword ? controlledShowPassword : localShowPassword;

  const handleTogglePassword = () => {
    const nextShowPassword = !showPassword;
    if (controlledShowPassword === undefined) {
      setLocalShowPassword(nextShowPassword);
    }
    onShowPasswordChange?.(nextShowPassword);
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
          type={showPassword ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD}
          id={id}
          name={name}
          placeholder={placeholder}
          title={title}
          readOnly={readOnly}
        />
        <InputIconGroup position={ADDON_POSITION.RIGHT}>
          <InputRightActions
            status={controller.viewState.status}
            showClear={controller.showClear}
            onClear={controller.handleClear}
          />
          <PasswordVisibilityButton
            disabled={controller.viewState.isDisabled}
            showPassword={showPassword}
            onToggle={handleTogglePassword}
          />
        </InputIconGroup>
      </InputBorder>
      <FieldDescription />
    </InputRoot>
  );
}
