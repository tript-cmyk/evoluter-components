import type { BenefitImageCardProps } from "./benefit-image-card.types";
import { benefitImageCardVariants } from "./benefit-image-card.variants";
import { BENEFIT_IMAGE_CARD_TONE } from "./benefit-image-card.constants";

const BenefitImageCard = ({
  tone = BENEFIT_IMAGE_CARD_TONE.MINT,
  imageUrl = "/images/web-2.png",
  title,
  description,
}: BenefitImageCardProps) => {
  return (
    <div className={benefitImageCardVariants({ tone })}>
      <div className="w-25 h-25 sm:w-35 sm:h-35">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="font-bold text-[18px] sm:text-[22px]">{title}</div>
        <div className="text-center text-[12px] sm:text-[14px]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default BenefitImageCard;
