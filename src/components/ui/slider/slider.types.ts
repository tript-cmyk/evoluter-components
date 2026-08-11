import type { SLIDER_VARIANT_SIZE } from "./slider.constants";

export interface SliderProps {
  variant?: SLIDER_VARIANT_SIZE;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  id?: string;
  name?: string;
  title?: string;
  className?: string;
  onValueChange?: (value: number) => void;
}
