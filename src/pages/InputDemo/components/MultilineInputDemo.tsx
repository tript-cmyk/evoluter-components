import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { INITIAL_MULTI_VAL } from "../demo.data";

export function MultilineInputDemo() {
  const [multiVal, setMultiVal] = useState(INITIAL_MULTI_VAL);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-white mb-2">
          Multiline Input States
        </h2>
        <p className="text-xs text-[#808080] mb-6">
          Demonstrates textarea multiline inputs with character limits inside
          (symbols show) or outside (symbols hide).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="text-center font-semibold text-xs text-[#808080] mb-2">
          Symbols Show (Bottom Left Placement)
        </div>
        <div className="text-center font-semibold text-xs text-[#808080] mb-2">
          Symbols Hide (Top Right Placement)
        </div>

        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="bottom-left"
          hint="Hint"
        />
        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="top-right"
          hint="Hint"
        />

        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="bottom-left"
          status="active"
          hint="Hint"
        />
        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="top-right"
          status="active"
          hint="Hint"
        />

        <Input
          multiline
          label="Description"
          value={multiVal}
          onChange={(e) => setMultiVal(e.target.value)}
          charactersLimit={1200}
          charactersPlacement="bottom-left"
          status="active"
          hint="Hint"
          clearable
        />
        <Input
          multiline
          label="Description"
          value={multiVal}
          onChange={(e) => setMultiVal(e.target.value)}
          charactersLimit={1200}
          charactersPlacement="top-right"
          status="active"
          hint="Hint"
          clearable
        />

        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="bottom-left"
          processing="Processing"
        />
        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="top-right"
          processing="Processing"
        />

        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="bottom-left"
          disabled
          hint="Hint"
        />
        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="top-right"
          disabled
          hint="Hint"
        />

        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="bottom-left"
          error="Error message"
        />
        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="top-right"
          error="Error message"
        />

        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="bottom-left"
          success="Success"
        />
        <Input
          multiline
          label="Description"
          placeholder="Your message"
          charactersLimit={1200}
          charactersPlacement="top-right"
          success="Success"
        />
      </div>
    </div>
  );
}
