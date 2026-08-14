import { BsLightningCharge } from "react-icons/bs";
import BenefitCard, {
  BENEFIT_CARD_TONE,
} from "../../components/layout/BenefitCard";

const BenefitCardDemo = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl">Benefit Card</h2>
      <BenefitCard
        tone={BENEFIT_CARD_TONE.ORANGE}
        icon={<BsLightningCharge />}
        title="We scope the tasks"
        description="We'll build a clear roadmap, execution strategy, and development plan specific to your needs."
      />
    </div>
  );
};

export default BenefitCardDemo;
