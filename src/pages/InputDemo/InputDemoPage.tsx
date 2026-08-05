import { useState } from "react";
import { INPUT, INPUT_TABS } from "./demo.data";
import type { InputTab } from "./demo.data";
import { SimpleInputDemo } from "./components/SimpleInputDemo";
import { MultilineInputDemo } from "./components/MultilineInputDemo";
import { SpecialInputDemo } from "./components/SpecialInputDemo";
import { PasswordInputDemo } from "./components/PasswordInputDemo";
import { LongInputDemo } from "./components/LongInputDemo";
import Header from "../../components/layout/Header";

export default function InputDemoPage() {
  const [activeTab, setActiveTab] = useState<InputTab>(INPUT.SIMPLE);

  return (
    <div className="max-w-7xl mx-auto space-y-12 sm:p-12">
      <Header />

      <div className="flex w-fit mx-auto border p-1 bg-[#1E1E1E] rounded-lg border-[#2E2E2E]">
        {INPUT_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all capitalize select-none cursor-pointer ${
              activeTab === tab.value
                ? "bg-[#ABFFC3] text-[#121212] shadow"
                : "text-[#808080] hover:text-[#FFF]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {activeTab === INPUT.SIMPLE && <SimpleInputDemo />}
        {activeTab === INPUT.MULTI_LINE && <MultilineInputDemo />}
        {activeTab === INPUT.SPECIAL && <SpecialInputDemo />}
        {activeTab === INPUT.PASSWORD && <PasswordInputDemo />}
        {activeTab === INPUT.LONG && <LongInputDemo />}
      </div>
    </div>
  );
}
