import { IoIosArrowRoundForward } from "react-icons/io";
import { Button, ICON_POSITION } from "../../ui/button";
import { EXPERT_TYPE } from "./expert-card.constants";
import type { ExpertCardProps } from "./expert-card.types";
import {
  getButtonVariant,
  getDefaultAvatarWithExpertType,
  getToneWithExpertType,
} from "./expert-card.utils";
import { expertCardVariants } from "./expert-card.variants";

const ExpertCard = ({
  expertType = EXPERT_TYPE.DEVELOPER,
  avatarUrl = getDefaultAvatarWithExpertType(expertType),
  title = "John Doe",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  iconAction = <IoIosArrowRoundForward size={30} />,
  iconActionLabel = "Get started",
  onActionClick,
}: ExpertCardProps) => {
  return (
    <div
      className={expertCardVariants({
        tone: getToneWithExpertType(expertType),
      })}
    >
      <div className="size-20 sm:size-25">
        <img src={avatarUrl} className="w-full h-hull object-cover" />
      </div>
      <div className="text-center">
        <h2 className="font-semibold text-[20px] leading-8 my-2.5 sm:text-[24px]">
          {title}
        </h2>
        <div className="text-[12px]">{description}</div>
      </div>
      <div>
        <Button
          variant={getButtonVariant(getToneWithExpertType(expertType))}
          onClick={() => onActionClick?.()}
          icon={iconAction}
          iconPosition={ICON_POSITION.RIGHT}
        >
          {iconActionLabel}
        </Button>
      </div>
    </div>
  );
};

export default ExpertCard;
