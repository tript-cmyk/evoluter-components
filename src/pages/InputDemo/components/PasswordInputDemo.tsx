import { Input } from "../../../components/ui/input";
import { FiLock } from "react-icons/fi";

export function PasswordInputDemo() {
  const testVal = "CaT789kdjf";

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-white mb-2">Password Input</h2>
        <p className="text-xs text-[#808080] mb-6">
          Includes show/hide eye toggle and custom left icon locks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Headers */}
        <div className="text-center font-semibold text-xs text-[#808080]">
          Simple Password
        </div>
        <div className="text-center font-semibold text-xs text-[#808080]">
          Lock Left Icon
        </div>
        <div className="text-center font-semibold text-xs text-[#808080]">
          Clearable Password
        </div>
        <div className="text-center font-semibold text-xs text-[#808080]">
          Full Complex Pass
        </div>

        {/* Row 1: Default */}
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          hint="Hint"
          clearable
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          hint="Hint"
          clearable
        />

        {/* Row 2: Active */}
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          status="active"
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          status="active"
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          status="active"
          hint="Hint"
          clearable
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          status="active"
          hint="Hint"
          clearable
        />

        {/* Row 3: Filled show password */}
        <Input
          type="password"
          label="Description"
          value={testVal}
          showPassword={true}
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          showPassword={true}
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          showPassword={true}
          hint="Hint"
          clearable
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          showPassword={true}
          hint="Hint"
          clearable
        />

        {/* Row 4: Filled hide password */}
        <Input
          type="password"
          label="Description"
          value={testVal}
          showPassword={false}
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          showPassword={false}
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          showPassword={false}
          hint="Hint"
          clearable
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          showPassword={false}
          hint="Hint"
          clearable
        />

        {/* Row 5: Disabled show password */}
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          disabled
          showPassword={true}
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          disabled
          showPassword={true}
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          disabled
          showPassword={true}
          hint="Hint"
          clearable
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          disabled
          showPassword={true}
          hint="Hint"
          clearable
        />

        {/* Row 6: Disabled filled show password */}
        <Input
          type="password"
          label="Description"
          value={testVal}
          disabled
          showPassword={true}
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          disabled
          showPassword={true}
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          disabled
          showPassword={true}
          hint="Hint"
          clearable
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          disabled
          showPassword={true}
          hint="Hint"
          clearable
        />

        {/* Row 7: Disabled filled hide password */}
        <Input
          type="password"
          label="Description"
          value={testVal}
          disabled
          showPassword={false}
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          disabled
          showPassword={false}
          hint="Hint"
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          disabled
          showPassword={false}
          hint="Hint"
          clearable
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          disabled
          showPassword={false}
          hint="Hint"
          clearable
        />

        {/* Row 8: Processing */}
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          processing="Processing"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          processing="Processing"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          processing="Processing"
          clearable
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          processing="Processing"
          clearable
        />

        {/* Row 9: Processing filled show password */}
        <Input
          type="password"
          label="Description"
          value={testVal}
          processing="Processing"
          showPassword={true}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          processing="Processing"
          showPassword={true}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          processing="Processing"
          showPassword={true}
          clearable
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          processing="Processing"
          showPassword={true}
          clearable
        />

        {/* Row 10: Processing filled hide password */}
        <Input
          type="password"
          label="Description"
          value={testVal}
          processing="Processing"
          showPassword={false}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          processing="Processing"
          showPassword={false}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          processing="Processing"
          showPassword={false}
          clearable
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          processing="Processing"
          showPassword={false}
          clearable
        />

        {/* Row 11: Success */}
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          success="Success"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          success="Success"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          success="Success"
          clearable
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          success="Success"
          clearable
        />

        {/* Row 12: Success filled show password */}
        <Input
          type="password"
          label="Description"
          value={testVal}
          success="Success"
          showPassword={true}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          success="Success"
          showPassword={true}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          success="Success"
          showPassword={true}
          clearable
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          success="Success"
          showPassword={true}
          clearable
        />

        {/* Row 13: Success filled hide password */}
        <Input
          type="password"
          label="Description"
          value={testVal}
          success="Success"
          showPassword={false}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          success="Success"
          showPassword={false}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          success="Success"
          showPassword={false}
          clearable
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          success="Success"
          showPassword={false}
          clearable
        />

        {/* Row 14: Error */}
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          error="Error message"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          error="Error message"
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          error="Error message"
          clearable
        />
        <Input
          type="password"
          label="Description"
          placeholder="Create password"
          leftIcon={<FiLock />}
          error="Error message"
          clearable
        />

        {/* Row 15: Error filled hide password */}
        <Input
          type="password"
          label="Description"
          value={testVal}
          error="Error message"
          showPassword={false}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          error="Error message"
          showPassword={false}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          error="Error message"
          showPassword={false}
          clearable
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          error="Error message"
          showPassword={false}
          clearable
        />

        {/* Row 16: Error filled show password */}
        <Input
          type="password"
          label="Description"
          value={testVal}
          error="Error message"
          showPassword={true}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          error="Error message"
          showPassword={true}
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          error="Error message"
          showPassword={true}
          clearable
        />
        <Input
          type="password"
          label="Description"
          value={testVal}
          leftIcon={<FiLock />}
          error="Error message"
          showPassword={true}
          clearable
        />
      </div>
    </div>
  );
}
