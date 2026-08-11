export interface SliderProps {
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
