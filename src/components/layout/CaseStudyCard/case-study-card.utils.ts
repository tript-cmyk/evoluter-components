import { BUTTON_VARIANTS } from "../../ui/button";
import { CASE_STUDY_CARD_TONE } from "./case-study-card.constants";

export const getCaseStudyCardButtonVariant = (tone: CASE_STUDY_CARD_TONE) => {
  if (tone === CASE_STUDY_CARD_TONE.BLACK || tone === CASE_STUDY_CARD_TONE.GREY)
    return BUTTON_VARIANTS.DEFAULT;
  return BUTTON_VARIANTS.DARK;
};
