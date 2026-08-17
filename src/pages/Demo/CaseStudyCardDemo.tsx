import CaseStudyCard, {
  CASE_STUDY_CARD_TONE,
} from "../../components/layout/CaseStudyCard";

const CaseStudyCardDemo = () => {
  const handleCaseStudyClick = () => {
    console.log("Case Study Clicked");
  };

  return (
    <div>
      <h2>Case Study Card</h2>
      <CaseStudyCard
        tone={CASE_STUDY_CARD_TONE.ORANGE}
        imageUrl="/images/case-study.png"
        title="A healthcare patient engagement app brings revenue and productivity"
        description="How does a leading healthcare services provider make healthcare more accessible and effective for patients?"
        onActionButtonClick={handleCaseStudyClick}
      />
    </div>
  );
};

export default CaseStudyCardDemo;
