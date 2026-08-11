import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Header from "../../components/layout/Header";
import { TAB_ICON_POSITION, Tabs } from "../../components/ui/tabs";

const PLAN_TABS = [
  { label: "Starter", value: "starter", icon: <FaStar /> },
  { label: "Growth", value: "growth", icon: <FaStar /> },
  { label: "Scale", value: "scale", icon: <FaStar /> },
  {
    label: "Enterprise",
    value: "enterprise",
    icon: <FaStar />,
    disabled: true,
  },
  { label: "Custom", value: "custom", icon: <FaStar /> },
];

const TabsControlDemo = () => {
  const [planTab, setPlanTab] = useState("starter");

  return (
    <div className="max-w-7xl mx-auto space-y-12 sm:p-12">
      <Header />

      <div className="mx-auto w-full max-w-3xl rounded-lg bg-[#EEF3F4] p-8 text-[#333333]">
        <h2 className="mb-2">Current Tab: {planTab}</h2>
        <Tabs
          value={planTab}
          onValueChange={setPlanTab}
          items={PLAN_TABS}
          iconPosition={TAB_ICON_POSITION.LEFT}
        />
      </div>
    </div>
  );
};

export default TabsControlDemo;
