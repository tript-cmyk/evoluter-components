import { caseStudyCardVariants } from "./case-study-card.variants";
import type { CaseStudyCardProps } from "./case-study-card.types";
import { Button } from "../../ui/button";
import { getCaseStudyCardButtonVariant } from "./case-study-card.utils";
import { CASE_STUDY_CARD_TONE } from "./case-study-card.constants";

const CaseStudyCard = ({
  tone = CASE_STUDY_CARD_TONE.BLACK,
  imageUrl = "",
  title = "",
  description = "",
  actionButtonLabel = "Read Case Study",
  onActionButtonClick,
}: CaseStudyCardProps) => {
  return (
    <div className={caseStudyCardVariants({ tone })}>
      <div className="w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="text-[14px] font-bold sm:text-[20px]">{title}</div>
      <div className="line-clamp-2 text-gray-500 text-[12px]">
        {description}
      </div>
      <Button
        variant={getCaseStudyCardButtonVariant(tone)}
        onClick={() => onActionButtonClick?.()}
      >
        {actionButtonLabel}
      </Button>
    </div>
  );
};

export default CaseStudyCard;
