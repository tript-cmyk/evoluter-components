import type { PricingCardOption } from "./pricing-card.types";

export enum PRICING_CARD_TONE {
  MINT = "mint",
  DARK = "dark",
  ORANGE = "orange",
}

export const defaultOptions: PricingCardOption[] = [
  {
    value: "developers-engineers",
    label: "Developers + Engineers",
    defaultChecked: true,
  },
  { value: "designers", label: "Designers" },
  { value: "product-experts", label: "Product Experts" },
  { value: "fractional-executives", label: "Fractional Executives" },
];

export const getDefaultValue = (options: PricingCardOption[]) => {
  return options.find((option) => option.defaultChecked)?.value;
};
