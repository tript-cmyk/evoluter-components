import { useState } from "react";
import { Link } from "react-router-dom";
import { INPUT_TABS } from "./demo.data";
import type { InputTab } from "./demo.data";
import { SimpleInputDemo } from "./components/SimpleInputDemo";
import { MultilineInputDemo } from "./components/MultilineInputDemo";
import { SpecialInputDemo } from "./components/SpecialInputDemo";
import { PasswordInputDemo } from "./components/PasswordInputDemo";
import { LongInputDemo } from "./components/LongInputDemo";

export default function InputDemoPage() {
  const [activeTab, setActiveTab] = useState<InputTab>("simple");

  return (
    <div className="max-w-7xl mx-auto space-y-12 sm:p-12">
      <div className="mb-10 border-b border-[#222222] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex-1">
          <Link
            to="/buttons"
            className="px-5 py-2.5 bg-[#ABFFC3] text-[#121212] rounded-xl font-bold text-xs hover:opacity-90 transition-opacity inline-block select-none cursor-pointer tracking-wider uppercase shadow-lg shadow-[#ABFFC3]/10"
          >
            Go to Buttons
          </Link>
        </div>

        <div className="flex bg-[#1E1E1E] p-1 rounded-lg border border-[#2E2E2E] gap-1 shrink-0 self-start md:self-auto">
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
      </div>

      <div>
        {activeTab === "simple" && <SimpleInputDemo />}
        {activeTab === "multiline" && <MultilineInputDemo />}
        {activeTab === "special" && <SpecialInputDemo />}
        {activeTab === "password" && <PasswordInputDemo />}
        {activeTab === "long" && <LongInputDemo />}
      </div>
    </div>
  );
}
