import { BUTTON_VARIANTS } from "../../ui/button";
import { EXPERT_TONE, EXPERT_TYPE } from "./expert-card.constants";

export const getToneWithExpertType = (expertType: EXPERT_TYPE): EXPERT_TONE => {
  switch (expertType) {
    case EXPERT_TYPE.DEVELOPER:
      return EXPERT_TONE.BLACK;
    case EXPERT_TYPE.DESIGNER:
      return EXPERT_TONE.ORANGE;
    case EXPERT_TYPE.MANAGER:
      return EXPERT_TONE.MINT;
    default:
      return EXPERT_TONE.BLACK;
  }
};

export const getDefaultAvatarWithExpertType = (expertType: EXPERT_TYPE) => {
  switch (expertType) {
    case EXPERT_TYPE.DEVELOPER:
      return "/images/indian-man.png";
    case EXPERT_TYPE.DESIGNER:
      return "/images/man-in-hat.png";
    case EXPERT_TYPE.MANAGER:
      return "/images/woman-with-phone.png";
    default:
      return "/images/indian-man.png";
  }
};

export const getButtonVariant = (tone: EXPERT_TONE) => {
  return tone === EXPERT_TONE.BLACK
    ? BUTTON_VARIANTS.GHOST
    : BUTTON_VARIANTS.DARK;
};
