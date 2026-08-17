import type { ReactNode } from "react";
import type { EXPERT_TYPE } from "./expert-card.constants";

export interface ExpertCardProps {
  expertType?: EXPERT_TYPE;
  avatarUrl?: string;
  title?: string;
  description?: string;
  iconAction?: ReactNode;
  iconActionLabel?: string;
  onActionClick?: () => void;
}
