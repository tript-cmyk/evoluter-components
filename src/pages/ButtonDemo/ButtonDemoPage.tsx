import { Link } from "react-router-dom";
import { groups } from "./demo.data";
import { ButtonVariantGroup } from "./components/ButtonVariantGroup";
import Header from "../../components/layout/Header";

export default function ButtonDemoPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 p-6 sm:p-12">
      <Header />

      <div className="grid grid-cols-1 gap-8">
        {groups.map((group, groupIdx) => (
          <ButtonVariantGroup key={groupIdx} group={group} />
        ))}
      </div>
    </div>
  );
}
