import SimpleCaseStudyCard from "../../components/layout/SimpleCaseStudyCard";

const SimpleCaseStudyCardDemo = () => {
  return (
    <div>
      <h2>Simple Case Study Card</h2>
      <SimpleCaseStudyCard
        imageUrl="/images/node_js.png"
        title="Developer"
        selected={false}
      />
    </div>
  );
};

export default SimpleCaseStudyCardDemo;
