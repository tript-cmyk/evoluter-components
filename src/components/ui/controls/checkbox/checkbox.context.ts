import { createContext, useContext } from "react";
import type { CheckBoxGroupContextProps } from "./checkbox.types";

export const CheckBoxGroupContext =
  createContext<CheckBoxGroupContextProps | null>(null);

export const useCheckBoxGroup = () => useContext(CheckBoxGroupContext);
