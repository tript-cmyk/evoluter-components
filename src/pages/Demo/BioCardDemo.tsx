import BioCard from "../../components/layout/BioCard/BioCard";

const BioCardDemo = () => {
  return (
    <div>
      <h2>Bio Card</h2>
      <BioCard
        avatarUrl="/images/bio-card-avatar.png"
        name="Frank Williams"
        role="Backend Developer"
        selected={true}
      />
    </div>
  );
};

export default BioCardDemo;
