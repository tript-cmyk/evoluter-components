import {
  iconStatisticCardVariants,
  statisticCardVariants,
} from "./statistic-card.variants";
import { STATISTIC_CARD_TONE } from "./statistic-card.constants";
import type { StatisticCardProps } from "./statistic-card.types";

export const StatisticCard = ({
  tone = STATISTIC_CARD_TONE.MINT,
  icon,
  iconLabel,
  title = "Statistic title",
  description = "statistic description",
}: StatisticCardProps) => {
  return (
    <div className={statisticCardVariants({ tone })}>
      {icon && (
        <div className="flex items-center justify-center gap-2">
          <div className={iconStatisticCardVariants({ tone })}>{icon}</div>
          <div className="font-bold text-sm sm:text-base">{iconLabel}</div>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg sm:text-[32px] font-bold">{title}</h3>
        <p className="text-[12px] font-thin mb-5">{description}</p>
      </div>
    </div>
  );
};
