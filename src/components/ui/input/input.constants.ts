import type { CountryOption } from "./input.types";
import countryData from "../../../data/country_dial_info.json";

export enum INPUT_STATUS {
  DEFAULT = "default",
  SUCCESS = "success",
  ERROR = "error",
  DISABLED = "disabled",
  PROCESSING = "processing",
  ACTIVE = "active"
}

export enum INPUT_TYPE {
  TEXT = "text",
  PASSWORD = "password",
  TEL = "tel",
  SEARCH = "search",
  NUMBER = "number",
  TEXT_AREA = "textarea",
}

export enum CHARACTERS_PLACEMENT {
  BOTTOM_LEFT = "bottom-left",
  TOP_RIGHT = "top-right",
}

export enum ADDON_POSITION {
  LEFT = "left",
  RIGHT = "right",
}

export enum INPUT_NUMBER_DIRECTION {
  UP = "up",
  DOWN = "down",
}

export const defaultCountryOptions: CountryOption[] = countryData as CountryOption[];
