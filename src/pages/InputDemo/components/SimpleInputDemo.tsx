import { Input } from "../../../components/ui/input";
import { FiStar } from "react-icons/fi";

export function SimpleInputDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-white mb-2">
          Simple Input States
        </h2>
        <p className="text-xs text-[#808080] mb-6">
          Demonstrates Simple Input variations across states and icon
          alignments.
        </p>
      </div>

      <Input
        label="Description (optional)"
        placeholder="Placeholder"
        required
        leftIcon={<FiStar />}
      />
    </div>
  );
}
