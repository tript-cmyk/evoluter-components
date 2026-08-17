import StepCard, { STEP_CARD_SIZES } from "../../components/layout/StepCard";

const StepCardDemo = () => {
  return (
    <div>
      <h2>Step Card</h2>
      <div className="px-10">
        <StepCard
          size={STEP_CARD_SIZES.SMALL}
          labelStep="Step 1"
          title="Talk to one of our industry Experts"
          description="The best part? Your new tech team co-pilots your product with our suite of AI to provide increased productivity, reduce expenses and solve complex business problems."
          imageUrl="/images/step-card-big-demo.png"
        />
      </div>
    </div>
  );
};

export default StepCardDemo;
