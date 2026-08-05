import { useState } from "react";
import { MultiSelect } from "../../../components/ui/controls/multi-select";

const MultiSelectDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div className="bg-[#181818] px-4 py-6 rounded-md">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 font-semibold"></div>
          <div className="col-span-1 font-semibold">Not checked</div>
          <div className="col-span-1 font-semibold">Checked</div>

          <div className="col-span-1 font-semibold">Default</div>
          <MultiSelect
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <MultiSelect checked />

          <div className="col-span-1 font-semibold">Hover</div>
          <MultiSelect />
          <MultiSelect checked />

          <div className="col-span-1 font-semibold">Focused</div>
          <MultiSelect />
          <MultiSelect checked />

          <div className="col-span-1 font-semibold">Clicked</div>
          <MultiSelect />
          <MultiSelect checked />

          <div className="col-span-1 font-semibold">Disabled</div>
          <MultiSelect disabled />
          <MultiSelect disabled checked />
        </div>
      </div>
    </div>
  );
};

export default MultiSelectDemo;
