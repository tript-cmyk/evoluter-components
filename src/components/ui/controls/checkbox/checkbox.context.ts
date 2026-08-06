import { createContext, useContext } from "react";

interface CheckBoxGroupContextProps {
  values: string[];
  toggle: (value: string, checked: boolean) => void;
  disabled?: boolean;
  name?: string;
}

export const CheckBoxGroupContext =
  createContext<CheckBoxGroupContextProps | null>(null);

export const useCheckBoxGroup = () => useContext(CheckBoxGroupContext);
