import {
  stepCardDescriptionVariants,
  stepCardLabelStepVariants,
  stepCardTitleVariants,
  stepCardVariants,
} from "./step-card.variants";
import { showImage } from "./step-card.utils";
import type { StepCardProps } from "./step-card.types";

const StepCard = ({
  size,
  labelStep,
  title,
  description,
  imageUrl,
}: StepCardProps) => {
  return (
    <div className={stepCardVariants({ size })}>
      <div className="flex flex-col items-start gap-2 sm:flex-1">
        <div className={stepCardLabelStepVariants({ size })}>{labelStep}</div>
        <div className={stepCardTitleVariants({ size })}>{title}</div>
        <div className={stepCardDescriptionVariants({ size })}>
          {description}
        </div>
      </div>
      {imageUrl && showImage(size) && (
        <div className="flex items-center justify-center w-full sm:w-1/2 shrink-0">
          <img src={imageUrl} alt={title} />
        </div>
      )}
    </div>
  );
};

export default StepCard;
