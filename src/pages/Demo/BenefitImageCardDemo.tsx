import BenefitImageCard from "../../components/layout/BenefitImageCard/BenefitImageCard";
import { BENEFIT_IMAGE_CARD_TONE } from "../../components/layout/BenefitImageCard/benefit-image-card.constants";

const BenefitImageCardDemo = () => {
  return (
    <div>
      <h2>Benefit Image Card</h2>
      <BenefitImageCard
        tone={BENEFIT_IMAGE_CARD_TONE.MINT}
        title="Domain Expertise"
        description="Domain experts across 20+ capabilities, including cloud services, applications, and Al/ML meet your "
      />
    </div>
  );
};

export default BenefitImageCardDemo;
