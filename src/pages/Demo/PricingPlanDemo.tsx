import { useState } from "react";
import PricingCard, {
  defaultOptions,
  PRICING_CARD_TONE,
} from "../../components/layout/PricingCard";
import { PRICING_PLANS_DEFAULT_OPTION_VALUES } from "../../components/layout/PricingCard/pricing-card.constants";

export const PricingPlanDemo = () => {
  const [selectedPlan, setSelectedPlan] = useState(
    PRICING_PLANS_DEFAULT_OPTION_VALUES.DEVELOPERS_ENGINEERS,
  );

  const handlePlanChange = (value: PRICING_PLANS_DEFAULT_OPTION_VALUES) => {
    setSelectedPlan(value);
  };

  const handleActionClick = () => {
    if (!selectedPlan) {
      alert("Please select a plan before proceeding.");
      return;
    }
    console.log(selectedPlan);
  };

  return (
    <div>
      <h2>Pricing Plans</h2>
      <div className="flex gap-10">
        <PricingCard
          tone={PRICING_CARD_TONE.MINT}
          value={selectedPlan}
          onChangeValue={handlePlanChange}
          options={defaultOptions}
          onActionClick={handleActionClick}
        />
        {/* <PricingCard tone={PRICING_CARD_TONE.DARK} />
            <PricingCard tone={PRICING_CARD_TONE.ORANGE} /> */}
        {/* <PricingCard /> */}
        {/* <PricingCard /> */}
      </div>
    </div>
  );
};
