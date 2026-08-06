import { createContext, useContext } from "react";
import type { RadioGroupContextValue } from "./radio.types";

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(
  null,
);

export function useRadioGroupContext() {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error("RadioGroupItem must be used inside RadioGroup");
  }

  return context;
}
