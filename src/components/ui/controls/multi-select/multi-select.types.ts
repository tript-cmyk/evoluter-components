import type { InputHTMLAttributes, ReactNode } from "react";

export const LABEL_POSITION = {
  LEFT: "left",
  RIGHT: "right",
} as const;

export type LabelPosition =
  (typeof LABEL_POSITION)[keyof typeof LABEL_POSITION];

export interface MultiSelectProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  label?: ReactNode;
  labelPosition?: LabelPosition;
}
