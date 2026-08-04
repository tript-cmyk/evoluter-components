import { Link } from "react-router-dom";
import { groups } from "./demo.data";
import { ButtonVariantGroup } from "./components/ButtonVariantGroup";

export default function ButtonDemoPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 p-6 sm:p-12">
      <div className="border-b border-[#222222] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <Link
          to="/inputs"
          className="px-5 py-2.5 bg-[#ABFFC3] text-[#121212] rounded-xl font-bold text-xs hover:opacity-90 transition-opacity inline-block select-none cursor-pointer tracking-wider uppercase shadow-lg shadow-[#ABFFC3]/10"
        >
          Go to Inputs
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {groups.map((group, groupIdx) => (
          <ButtonVariantGroup key={groupIdx} group={group} />
        ))}
      </div>
    </div>
  );
}
