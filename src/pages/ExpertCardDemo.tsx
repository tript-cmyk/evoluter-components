import { IoIosArrowRoundForward } from "react-icons/io";
import ExpertCard, { EXPERT_TYPE } from "../components/layout/ExpertCard";

const ExpertCardDemo = () => {
  const handleActionClick = () => {
    console.log("Action button clicked");
  };

  return (
    <div>
      <h2>Expert Card</h2>
      <div className="flex flex-wrap gap-4">
        <ExpertCard
          expertType={EXPERT_TYPE.MANAGER}
          title="Hire Developers"
          description="At the push of a button, our platform enables you to hire an outsourced tech, product or"
          iconAction={<IoIosArrowRoundForward size={30} />}
          iconActionLabel="Get started"
          onActionClick={handleActionClick}
        />
      </div>
    </div>
  );
};

export default ExpertCardDemo;
