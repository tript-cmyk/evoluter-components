import { STEP_CARD_SIZES } from "./step-card.constants";

export const showImage = (size: STEP_CARD_SIZES): boolean => {
  switch (size) {
    case STEP_CARD_SIZES.BIG:
      return true;
    case STEP_CARD_SIZES.SMALL:
      return false;
    default:
      return true;
  }
};
