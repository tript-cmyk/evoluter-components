import { Input } from "../../../components/ui/input";

export function LongInputDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-white mb-2">
          Long String & Truncation
        </h2>
        <p className="text-xs text-[#808080] mb-6">
          Verifies that long overflow strings truncate properly with ellipses in
          various icon combinations.
        </p>
      </div>

      <Input
        label="Description (optional)"
        value="This is a long string of text that will get truncated if it is too long to fit in the input field."
        required
      />
    </div>
  );
}
