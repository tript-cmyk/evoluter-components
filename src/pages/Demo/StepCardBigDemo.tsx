import StepCardBig from "../../components/layout/StepCardBig";

const StepCardBigDemo = () => {
  return (
    <div>
      <h2>Step Card Big</h2>
      <div className="px-10">
        <StepCardBig
          labelStep="Step 1"
          title="Talk to one of our industry Experts"
          description="The best part? Your new tech team co-pilots your product with our suite of AI to provide increased productivity, reduce expenses and solve complex business problems."
          image={<img src="images/step-card-big-demo.png" alt="Step Image" />}
        />
      </div>
    </div>
  );
};

export default StepCardBigDemo;
