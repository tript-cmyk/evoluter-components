import type { BenefitCardProps } from "./benefit-card.types";
import {
  benefitCardVariants,
  iconBenefitCardVariants,
} from "./benefit-card.variants";

const BenefitCard = ({ tone, icon, title, description }: BenefitCardProps) => {
  return (
    <div className={benefitCardVariants({ tone })}>
      <div className="flex items-center gap-4">
        <div className={iconBenefitCardVariants({ tone })}>{icon}</div>
        <div className="font-bold text-[18px] md:text-[24px]">{title}</div>
      </div>
      <div className="text-gray-800 text-[16px]">{description}</div>
    </div>
  );
};

export default BenefitCard;
