import type { ReactNode } from "react";
import type { PRICING_CARD_TONE } from "./pricing-card.constants";

export interface PricingCardOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  defaultChecked?: boolean;
}

export interface PricingCardProps {
  tone?: PRICING_CARD_TONE;
  title?: ReactNode;
  price?: ReactNode;
  description?: ReactNode;
  options?: PricingCardOption[];
  value?: string;
  defaultValue?: string;
  onChangeValue?: (value: string) => void;
  actionLabel?: ReactNode;
  actionIcon?: ReactNode;
  onActionClick?: () => void;
  disabled?: boolean;
  className?: string;
  name?: string;
}
