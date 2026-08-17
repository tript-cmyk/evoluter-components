import Banner from "../../components/layout/Banner";

export const BannerDemo = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl">Banner</h2>
      <Banner
        title="Or you can hire entire team"
        description="The best part? Your new tech team co-pilots your product with our suite of AI to provide increased productivity, reduce expenses and solve complex business problems."
        buttonText="Hire entire team"
        onActionClick={() => console.log("Banner clicked")}
      />
    </div>
  );
};
