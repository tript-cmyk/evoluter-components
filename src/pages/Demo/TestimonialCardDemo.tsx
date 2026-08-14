import TestimonialCard from "../../components/layout/TestimonialCard";

const TestimonialCardDemo = () => {
  return (
    <div>
      <h2>Testimonial Card</h2>
      <TestimonialCard
        content="Evoluter helps entrepreneurs tap into the global talent pool to hire elite, pre-vetted remote engineers at the push of a button. Evoluter helps entrepreneurs tap into the global talent pool to hire elite, pre-vetted remote engineers at the push of a button"
        name="Mickael Grants"
        roleName="CEO"
        companyName="Apples to Oranges"
      />
    </div>
  );
};

export default TestimonialCardDemo;
