import { STEP_CARD_SIZES } from "./step-card.constants";

export const showImage = (size: STEP_CARD_SIZES): boolean => {
  return size === STEP_CARD_SIZES.BIG;
};
