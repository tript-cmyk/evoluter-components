import CaseStudyCard from "../../components/layout/CaseStudyCard/CaseStudyCard";

const CaseStudyCardDemo = () => {
  return (
    <div>
      <h2>Case Study Card</h2>
      <CaseStudyCard
        imageUrl="/images/case-study.png"
        title="A healthcare patient engagement app brings revenue and productivity"
        description="How does a leading healthcare services provider make healthcare more accessible and effective for patients?"
      />
    </div>
  );
};

export default CaseStudyCardDemo;
