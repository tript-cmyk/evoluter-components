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
  title = "Statistic Title",
  description = "statistic description",
}: StatisticCardProps) => {
  return (
    <div className={statisticCardVariants({ tone })}>
      {icon && (
        <div className="flex items-center justify-center gap-2">
          <div className={iconStatisticCardVariants({ tone })}>{icon}</div>
          <div className="font-bold text-sm md:text-base">{iconLabel}</div>
        </div>
      )}
      <div>
        <h3 className="text-lg md:text-2xl">{title}</h3>
        <p className="text-sm font-thin">{description}</p>
      </div>
    </div>
  );
};
