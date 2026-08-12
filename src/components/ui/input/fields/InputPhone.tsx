
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
import { ADDON_POSITION, DEFAULT_PHONE_PATTERN, defaultCountryOptions, INPUT_TYPE } from "../input.constants";
import { useEffect, useState } from "react";
import { buildPhoneValue, getPhoneNationalValue } from "../utils/input.utils";

export function InputPhone({
  countryCode,
  onCountryCodeChange,
  countryOptions = defaultCountryOptions,
  onPhoneValueChange,
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
  const selectedCountry =
    countryOptions.find((option) => option.code === selectedCountryCode) ||
    countryOptions[0];
  const nationalValue = getPhoneNationalValue(
    controller.value,
    selectedCountryCode,
    countryOptions,
  );
  const phonePlaceholderPattern = placeholder ?? DEFAULT_PHONE_PATTERN;
  const displayValue = controller.value
    ? buildPhoneValue(
        controller.value,
        selectedCountryCode,
        countryOptions,
        phonePlaceholderPattern,
      )
        .internationalValue
    : "";
  const phonePlaceholder =
    `${selectedCountry?.dial_code ?? ""} ${phonePlaceholderPattern}`.trim();

  useEffect(() => {
    if (countryCode !== undefined) {
      setSelectedCountryCode(countryCode);
    }
  }, [countryCode]);

  const handleValueChange = (nextValue: string) => {
    const phoneValue = buildPhoneValue(
      nextValue,
      selectedCountryCode,
      countryOptions,
      phonePlaceholderPattern,
    );
    controller.setValue(phoneValue.internationalValue);
    onPhoneValueChange?.(phoneValue);
  };

  const handleCountryChange = (code: string) => {
    const phoneValue = buildPhoneValue(
      nationalValue,
      code,
      countryOptions,
      phonePlaceholderPattern,
    );

    setSelectedCountryCode(code);
    onCountryCodeChange?.(code);
    controller.setValue(phoneValue.internationalValue);
    onPhoneValueChange?.(phoneValue);
  };

  return (
    <InputRoot
      {...controller.rootProps}
      value={displayValue}
      onChangeValue={handleValueChange}
    >
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
          placeholder={phonePlaceholder}
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
