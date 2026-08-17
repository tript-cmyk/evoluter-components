import type { PricingCardOption } from "./pricing-card.types";

export enum PRICING_CARD_TONE {
  MINT = "mint",
  DARK = "dark",
  ORANGE = "orange",
}

export enum PRICING_PLANS_DEFAULT_OPTION_VALUES {
  DEVELOPERS_ENGINEERS = "developers-engineers",
  DESIGNERS = "designers",
  PRODUCT_EXPERTS = "product-experts",
  FRACTIONAL_EXECUTIVES = "fractional-executives",
}

export const defaultOptions: PricingCardOption[] = [
  {
    value: PRICING_PLANS_DEFAULT_OPTION_VALUES.DEVELOPERS_ENGINEERS,
    label: "Developers + Engineers",
    defaultChecked: true,
  },
  { value: PRICING_PLANS_DEFAULT_OPTION_VALUES.DESIGNERS, label: "Designers" },
  {
    value: PRICING_PLANS_DEFAULT_OPTION_VALUES.PRODUCT_EXPERTS,
    label: "Product Experts",
  },
  {
    value: PRICING_PLANS_DEFAULT_OPTION_VALUES.FRACTIONAL_EXECUTIVES,
    label: "Fractional Executives",
  },
];

export const getDefaultValue = (options: PricingCardOption[]) => {
  return options.find((option) => option.defaultChecked)?.value;
};
