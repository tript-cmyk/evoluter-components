import * as React from "react";
import type { InputContextValue } from "../input.types";

export const InputContext = React.createContext<InputContextValue | undefined>(
  undefined,
);

export function useInputContext() {
  const context = React.useContext(InputContext);
  if (!context) {
    throw new Error("Input parts must be used inside InputRoot.");
  }
  return context;
}
