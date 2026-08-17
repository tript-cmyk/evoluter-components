import { BUTTON_VARIANTS } from "../../ui/button";
import { CASE_STUDY_CARD_TONE } from "./case-study-card.constants";

export const getCaseStudyCardButtonVariant = (tone: CASE_STUDY_CARD_TONE) => {
  return tone === CASE_STUDY_CARD_TONE.BLACK ||
    tone === CASE_STUDY_CARD_TONE.GREY
    ? BUTTON_VARIANTS.DEFAULT
    : BUTTON_VARIANTS.OUTLINE;
};
