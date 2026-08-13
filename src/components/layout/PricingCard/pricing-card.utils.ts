import { BUTTON_VARIANTS } from "../../ui/button";
import { PRICING_CARD_TONE } from "./pricing-card.constants";

export const getButtonVariant = (tone: PRICING_CARD_TONE) => {
  return tone === PRICING_CARD_TONE.DARK
    ? BUTTON_VARIANTS.DEFAULT
    : BUTTON_VARIANTS.OUTLINE;
};
