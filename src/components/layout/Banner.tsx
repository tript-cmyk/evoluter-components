import { Button, BUTTON_VARIANTS } from "../ui/button";

const Banner = () => {
  return (
    <div className="flex flex-col gap-6 p-4 items-center md:flex-row md:gap-40 md:p-8 border border-[#141414] rounded-xl hover:bg-[#ABFFC3] duration-700">
      <div>
        <h2>Or you can hire entire team</h2>
        <div>
          The best part? Your new tech team co-pilots your product with our
          suite of AI to provide increased productivity, reduce expenses and
          solve complex business problems.
        </div>
      </div>
      <div>
        <Button variant={BUTTON_VARIANTS.OUTLINE}>Hire entire team</Button>
      </div>
    </div>
  );
};

export default Banner;
