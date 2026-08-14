import type { BENEFIT_CARD_TONE } from "./benefit-card.constants";

export interface BenefitCardProps {
  tone: BENEFIT_CARD_TONE;
  icon: React.ReactNode;
  title: string;
  description: string;
}
