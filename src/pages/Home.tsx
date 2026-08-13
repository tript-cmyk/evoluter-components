import { useState } from "react";
import Banner from "../components/layout/Banner";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import PricingPlan, { PricingCard } from "../components/layout/PricingCard";
import {
  defaultOptions,
  PRICING_CARD_TONE,
} from "../components/layout/PricingCard/pricing-card.constants";
import { PricingPlanDemo } from "./PricingPlanDemo";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* <h2 className="font-bold text-2xl">Footer</h2>
      <Footer /> */}

      {/* <h2 className="font-bold text-2xl">Header</h2>
      <Header /> */}

      <h2 className="font-bold text-2xl">Banner</h2>
      {/* <Banner
        title="Ready to get started?"
        description="Join thousands of satisfied customers and experience the difference today."
        buttonText="Get Started"
        onClick={() => console.log("Banner clicked")}
      /> */}

      <PricingPlanDemo />
    </div>
  );
};

export default Home;
