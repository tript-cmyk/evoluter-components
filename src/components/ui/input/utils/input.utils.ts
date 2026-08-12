import {
  DEFAULT_PHONE_PATTERN,
  INPUT_STATUS,
  REGEX_NUMBER_ONLY,
} from "../input.constants";
import type {
  CountryOption,
  FieldDescriptionOptions,
  InputPhoneValue,
  InputStateOptions,
} from "../input.types";

export function getFieldDescriptionMessage({
  error,
  errorMessage,
  success,
  successMessage,
  processing,
  processingMessage,
  hint,
}: FieldDescriptionOptions) {
  if (error) return errorMessage ?? "Error message";
  if (success) return successMessage ?? "Success";
  if (processing) return processingMessage ?? "Processing";
  return hint;
}

export function getInputState({
  status = INPUT_STATUS.DEFAULT,
  disabled,
  processing,
  success,
  error,
  value,
}: InputStateOptions) {
  const filled = value.length > 0;
  let computedStatus = status;

  if (disabled) {
    computedStatus = INPUT_STATUS.DISABLED;
  } else if (error) {
    computedStatus = INPUT_STATUS.ERROR;
  } else if (success) {
    computedStatus = INPUT_STATUS.SUCCESS;
  } else if (processing) {
    computedStatus = INPUT_STATUS.PROCESSING;
  }

  return {
    status: computedStatus,
    fieldDescriptionStatus: computedStatus,
    filled,
    isDisabled: disabled || computedStatus === INPUT_STATUS.PROCESSING,
    isProcessing: computedStatus === INPUT_STATUS.PROCESSING,
    isSuccess: computedStatus === INPUT_STATUS.SUCCESS,
    isError: computedStatus === INPUT_STATUS.ERROR,
  };
}

export const getFlagUrl = (code: string) => {
  return `https://flagcdn.com/w20/${code.toLowerCase()}.png`;
};

function getPhoneCountry(countryCode: string, countryOptions: CountryOption[]) {
  return (
    countryOptions.find((option) => option.code === countryCode) ||
    countryOptions[0]
  );
}

export function getPhoneNationalValue(
  value: string,
  countryCode: string,
  countryOptions: CountryOption[],
) {
  const country = getPhoneCountry(countryCode, countryOptions);
  const dialDigits = country?.dial_code.replace(REGEX_NUMBER_ONLY, "") ?? "";
  const valueDigits = value.replace(REGEX_NUMBER_ONLY, "");

  if (value.trim().startsWith("+") && valueDigits.startsWith(dialDigits)) {
    return valueDigits.slice(dialDigits.length);
  }

  return value;
}

export function formatPhoneNationalValue(
  value: string,
  pattern = DEFAULT_PHONE_PATTERN,
) {
  const digits = value.replace(REGEX_NUMBER_ONLY, "");

  const groupSizes = pattern
    .trim()
    .split(/\s+/)
    .map((group) => group.length)
    .filter((size) => size > 0);

  if (groupSizes.length === 0) {
    return digits;
  }

  const groups: string[] = [];
  let cursor = 0;

  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];
    const isLastGroup = i === groupSizes.length - 1;

    const end = isLastGroup ? digits.length : cursor + size;

    const group = digits.slice(cursor, end);

    if (group) {
      groups.push(group);
    }

    cursor = end;
  }

  return groups.join(" ");
}

export function buildPhoneValue(
  value: string,
  countryCode: string,
  countryOptions: CountryOption[],
  pattern?: string,
): InputPhoneValue {
  const country = getPhoneCountry(countryCode, countryOptions);
  const dialCode = country?.dial_code ?? "";
  const normalizedValue = getPhoneNationalValue(
    value,
    country?.code ?? countryCode,
    countryOptions,
  ).replace(REGEX_NUMBER_ONLY, "");
  const formattedValue = formatPhoneNationalValue(normalizedValue, pattern);
  const internationalValue = normalizedValue
    ? `${dialCode} ${formattedValue}`
    : "";

  return {
    value: internationalValue,
    countryCode: country?.code ?? countryCode,
    dialCode,
    country,
    internationalValue,
  };
}
