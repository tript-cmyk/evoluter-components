import type { CASE_STUDY_CARD_TONE } from "./case-study-card.constants";

export interface CaseStudyCardProps {
    tone?: CASE_STUDY_CARD_TONE;
    imageUrl: string;
    title: string;
    description: string;
    actionButtonLabel?: string;
    onActionButtonClick?: () => void;
}