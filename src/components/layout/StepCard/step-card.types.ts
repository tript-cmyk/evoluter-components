import type { STEP_CARD_SIZES } from "./step-card.constants";

export interface StepCardProps {
  size?: STEP_CARD_SIZES;
  labelStep: string;
  title: string;
  description: string;
  imageUrl?: string;
}
