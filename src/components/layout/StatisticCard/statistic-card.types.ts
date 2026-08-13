import type { ReactNode } from "react";
import type { STATISTIC_CARD_TONE } from "./statistic-card.constants";

export interface StatisticCardProps {
  tone?: STATISTIC_CARD_TONE;
  icon?: ReactNode;
  iconLabel?: string;
  title: string;
  description?: string;
}
