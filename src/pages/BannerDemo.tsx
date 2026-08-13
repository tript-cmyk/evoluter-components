import Banner from "../components/layout/Banner";

export const BannerDemo = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl">Banner</h2>
      <Banner
        title="Ready to get started?"
        description="Join thousands of satisfied customers and experience the difference today."
        buttonText="Get Started"
        onActionClick={() => console.log("Banner clicked")}
      />
    </div>
  );
};
