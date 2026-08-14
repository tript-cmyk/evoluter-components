import { IoIosArrowRoundForward } from "react-icons/io";
import { Button, ICON_POSITION } from "../../ui/button";
import { EXPERT_TYPE } from "./expert-card.constants";
import type { ExpertCardProps } from "./expert-card.types";
import { getButtonVariant, getToneWithExpertType } from "./expert-card.utils";
import { expertCardVariants } from "./expert-card.variants";

export const getDefaultAvatarWithExpertType = (expertType: EXPERT_TYPE) => {
  switch (expertType) {
    case EXPERT_TYPE.DEVELOPER:
      return <img src="/images/indian-man.png" alt="Developer" />;
    case EXPERT_TYPE.DESIGNER:
      return <img src="/images/man-in-hat.png" alt="Designer" />;
    case EXPERT_TYPE.MANAGER:
      return <img src="/images/woman-with-phone.png" alt="Manager" />;
    default:
      return <img src="/images/indian-man.png" alt="Developer" />;
  }
};

const ExpertCard = ({
  expertType = EXPERT_TYPE.DEVELOPER,
  avatar = getDefaultAvatarWithExpertType(expertType),
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
      <div>{avatar}</div>
      <div className="text-center">
        <h2>{title}</h2>
        <div>{description}</div>
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
