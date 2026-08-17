import { BsLightningCharge } from "react-icons/bs";
import {
  STATISTIC_CARD_TONE,
  StatisticCard,
} from "../../components/layout/StatisticCard";

const StatisticCardDemo = () => {
  return (
    <div>
      <h2>Statistic Card</h2>
      <div className="flex flex-wrap gap-4">
        {/* <StatisticCard
          tone={STATISTIC_CARD_TONE.MINT}
          title="4 days"
          description="to fill most roles, sometimes same day."
        /> */}
        {/* <StatisticCard
          tone={STATISTIC_CARD_TONE.WHITE}
          title="$410M+"
          description="Amount of money raised on our clients completed app developments projects"
          icon={<BsLightningCharge />}
          iconLabel="Speed"
        /> */}
        <StatisticCard
          tone={STATISTIC_CARD_TONE.MINT}
          title="$410M+"
          description="Amount of money raised on our clients completed app developments projects"
          icon={<BsLightningCharge />}
          iconLabel="Speed"
        />
      </div>
    </div>
  );
};

export default StatisticCardDemo;
