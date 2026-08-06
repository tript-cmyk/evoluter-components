import { useState } from "react";
import Header from "../../components/layout/Header";
import { CONTROL_TABS, CONTROLS } from "./demo.data";
import CheckBoxDemo from "./components/CheckBoxDemo";
import RadioDemo from "./components/RadioDemo";
import MultiSelectDemo from "./components/MultiSelectDemo";
import PlayButtonDemo from "./components/PlayButtonDemo";
import { cn } from "../../lib/cn";

const ControlDemoPage = () => {
  const [activeTab, setActiveTab] = useState<CONTROLS>(CONTROLS.CHECKBOX);

  return (
    <div className="max-w-7xl mx-auto space-y-12 sm:p-12">
      <Header />

      <div className="flex w-fit mx-auto border p-1 bg-[#1E1E1E] rounded-lg border-[#2E2E2E]">
        {CONTROL_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "px-4 py-2 text-xs font-semibold rounded-md transition-all capitalize select-none cursor-pointer",
              activeTab === tab.value
                ? "bg-[#ABFFC3] text-[#121212] shadow"
                : "text-[#808080] hover:text-white",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {activeTab === CONTROLS.CHECKBOX && <CheckBoxDemo />}
        {activeTab === CONTROLS.RADIO && <RadioDemo />}
        {activeTab === CONTROLS.MULTI_SELECT && <MultiSelectDemo />}
        {activeTab === CONTROLS.PLAY_BUTTON && <PlayButtonDemo />}
      </div>
    </div>
  );
};

export default ControlDemoPage;
