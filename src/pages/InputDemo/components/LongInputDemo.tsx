import { Input } from "../../../components/ui/input";
import { FiStar } from "react-icons/fi";

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
          value="This is a long string of text that will get truncated if it is too long to fit in the input field."
          required
        />
        <Input
          label="Description (optional)"
          value="This is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
        />
        <Input
          label="Description (optional)"
          value="This is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          rightIcon={<FiStar />}
        />
        <Input
          label="Description (optional)"
          value="This is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
        />

        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          status="active"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
          status="active"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          rightIcon={<FiStar />}
          status="active"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          status="active"
        />

        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          status="disabled"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
          status="disabled"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          rightIcon={<FiStar />}
          status="disabled"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          status="disabled"
        />

        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          status="processing"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
          status="processing"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          rightIcon={<FiStar />}
          status="processing"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          status="processing"
        />

        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          status="error"
          error="error message"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
          status="error"
          error="error message"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          rightIcon={<FiStar />}
          status="error"
          error="error message"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          status="error"
          error="error message"
        />

        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          status="success"
          success="Success"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
          status="success"
          success="Success"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          rightIcon={<FiStar />}
          status="success"
          success="Success"
        />
        <Input
          label="Description (optional)"
          value="...is a long string of text that will get truncated if it is too long to fit in the input field."
          required
          leftIcon={<FiStar />}
          rightIcon={<FiStar />}
          status="success"
          success="Success"
        />
      </div>
    </div>
  );
}
