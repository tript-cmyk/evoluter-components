import SimpleCard from "../../components/layout/SimpleCard";


const SimpleCardDemo = () => {
  return (
    <div>
      <h2>Simple Card</h2>
      <SimpleCard
        icon={<img src="/images/azur.png" />}
        title="Microsoft Partner"
      />
    </div>
  );
};

export default SimpleCardDemo;
