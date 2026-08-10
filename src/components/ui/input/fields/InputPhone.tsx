
import { type InputPhoneProps } from "../input.types";
import { useInputController } from "../hooks/useInputController";
import {
  FieldDescription,
  InputIconGroup,
  InputControl,
  InputBorder,
  InputLabel,
  InputRoot,
  InputRightActions,
  PhoneCountrySelect,
} from "../parts";
import { ADDON_POSITION, defaultCountryOptions, INPUT_TYPE } from "../input.constants";
import { useEffect, useState } from "react";

export function InputPhone({
  countryCode,
  onCountryCodeChange,
  countryOptions = defaultCountryOptions,
  ...props
}: InputPhoneProps) {
  const {
    label,
    required,
    id,
    name,
    placeholder,
    title,
    readOnly,
  } = props;
  const controller = useInputController(props);
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCode || countryOptions[0]?.code || "",
  );

  useEffect(() => {
    if (countryCode) {
      setSelectedCountryCode(countryCode);
    }
  }, [countryCode]);

  const handleCountryChange = (code: string) => {
    setSelectedCountryCode(code);
    onCountryCodeChange?.(code);
  };

  return (
    <InputRoot {...controller.rootProps}>
      <InputLabel required={required}>{label}</InputLabel>
      <InputBorder>
        <PhoneCountrySelect
          value={selectedCountryCode}
          options={countryOptions}
          disabled={controller.viewState.isDisabled || readOnly}
          onChange={handleCountryChange}
        />
        <InputControl
          type={INPUT_TYPE.TEL}
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
        </InputIconGroup>
      </InputBorder>
      <FieldDescription />
    </InputRoot>
  );
}
