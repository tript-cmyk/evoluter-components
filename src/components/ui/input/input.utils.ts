import type { CountryOption } from "./input.types";
import countryData from "../../../data/country_dial_info.json";

export const defaultCountries: CountryOption[] = countryData as CountryOption[];

export const flagUrl = (code: string) => {
  return `https://flagcdn.com/w20/${code.toLowerCase()}.png`;
};
