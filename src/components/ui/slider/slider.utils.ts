import {
  SLIDER_DEFAULT_MAX,
  SLIDER_DEFAULT_MIN,
} from "./slider.constants";

export const getBoundedSliderValue = (
  value: number,
  min = SLIDER_DEFAULT_MIN,
  max = SLIDER_DEFAULT_MAX,
) => Math.min(Math.max(value, min), max);

export const getSliderPercentage = (
  value: number,
  min = SLIDER_DEFAULT_MIN,
  max = SLIDER_DEFAULT_MAX,
) => {
  if (max <= min) {
    return 0;
  }

  return ((getBoundedSliderValue(value, min, max) - min) / (max - min)) * 100;
};

export const getInitialSliderValue = (
  value?: number,
  defaultValue?: number,
  min = SLIDER_DEFAULT_MIN,
  max = SLIDER_DEFAULT_MAX,
) => {
  if (value !== undefined) {
    return getBoundedSliderValue(value, min, max);
  }

  if (defaultValue !== undefined) {
    return getBoundedSliderValue(defaultValue, min, max);
  }

  return min;
};
