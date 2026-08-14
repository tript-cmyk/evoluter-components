import type { BENEFIT_IMAGE_CARD_TONE } from "./benefit-image-card.constants";

export interface BenefitImageCardProps {
    tone: BENEFIT_IMAGE_CARD_TONE;
    imageUrl?: string;
    title: string;
    description: string;
}   