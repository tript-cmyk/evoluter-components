import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { INITIAL_INTERACTIVE_VAL, INITIAL_TEL_VAL } from "../demo.data";

export function SpecialInputDemo() {
  const [interactiveVal, setInteractiveVal] = useState(INITIAL_INTERACTIVE_VAL);
  const [telVal, setTelVal] = useState(INITIAL_TEL_VAL);

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Search Input</h2>
          <p className="text-xs text-[#808080] mb-6">
            Built-in search icon on left and clear button on right when filled.
          </p>
          <div className="space-y-4">
            <Input
              type="search"
              label="Description"
              placeholder="Search"
              hint="Hint"
            />
            <Input
              type="search"
              label="Description"
              placeholder="Search"
              status="active"
              hint="Hint"
            />
            <Input
              type="search"
              label="Description"
              value={interactiveVal}
              onChange={(e) => setInteractiveVal(e.target.value)}
              hint="Hint"
            />
            <Input
              type="search"
              label="Description"
              placeholder="Search"
              disabled
              hint="Hint"
            />
            <Input
              type="search"
              label="Description"
              value="Your text"
              disabled
              hint="Hint"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            Phone Number Input
          </h2>
          <p className="text-xs text-[#808080] mb-6">
            Interactive country flag drop-down and input mask placeholder.
          </p>
          <div className="space-y-4">
            <Input
              type="tel"
              label="Description"
              countryCode="VN"
              placeholder="+84 000 000 000"
              hint="Hint"
            />
            <Input
              type="tel"
              label="Description"
              countryCode="VN"
              placeholder="+84 000 000 000"
              status="active"
              hint="Hint"
            />
            <Input
              type="tel"
              label="Description"
              countryCode="VN"
              value={telVal}
              onChange={(e) => setTelVal(e.target.value)}
              hint="Hint"
            />
            <Input
              type="tel"
              label="Description"
              countryCode="VN"
              placeholder="+84 000 000 000"
              processing="Processing"
            />
            <Input
              type="tel"
              label="Description"
              countryCode="VN"
              value={telVal}
              processing="Processing"
            />
            <Input
              type="tel"
              label="Description"
              countryCode="VN"
              placeholder="+84 000 000 000"
              disabled
              hint="Hint"
            />
            <Input
              type="tel"
              label="Description"
              countryCode="VN"
              placeholder="+84 000 000 000"
              success="Success"
            />
            <Input
              type="tel"
              label="Description"
              countryCode="VN"
              placeholder="+84 000 000 000"
              error="Error message"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
