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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
          No Icon
        </div>
        <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
          Left Icon
        </div>
        <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
          Right Icon
        </div>
        <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
          Left & Right Icon
        </div>

        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          rightIcon={<FiStar />}
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
        />

        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          status="active"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
          status="active"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          rightIcon={<FiStar />}
          status="active"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          status="active"
        />

        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          status="active"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
          status="active"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          rightIcon={<FiStar />}
          status="active"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          status="active"
        />

        <Input label="Description (optional)" value="Placeholder" required />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          rightIcon={<FiStar />}
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
        />

        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          processing="Processing"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
          processing="Processing"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          rightIcon={<FiStar />}
          processing="Processing"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          processing="Processing"
        />

        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          processing="Processing"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
          processing="Processing"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          rightIcon={<FiStar />}
          processing="Processing"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          processing="Processing"
        />

        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          disabled
          hint="Hint"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
          disabled
          hint="Hint"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          rightIcon={<FiStar />}
          disabled
          hint="Hint"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          disabled
          hint="Hint"
        />

        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          disabled
          hint="Hint"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
          disabled
          hint="Hint"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          rightIcon={<FiStar />}
          disabled
          hint="Hint"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          disabled
          hint="Hint"
        />

        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          success="Success"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
          success="Success"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          rightIcon={<FiStar />}
          success="Success"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          success="Success"
        />

        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          success="Success"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
          success="Success"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          rightIcon={<FiStar />}
          success="Success"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          success="Success"
        />

        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          error="Error message"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
          error="Error message"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          rightIcon={<FiStar />}
          error="Error message"
        />
        <Input
          label="Description (optional)"
          placeholder="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          error="Error message"
        />

        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          error="Error message"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
          error="Error message"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          rightIcon={<FiStar />}
          error="Error message"
        />
        <Input
          label="Description (optional)"
          value="Placeholder"
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          error="Error message"
        />
      </div>
    </div>
  );
}
