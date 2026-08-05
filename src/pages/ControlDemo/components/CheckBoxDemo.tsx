import React, { useState } from "react";
import { CheckBox } from "../../../components/ui/controls/checkbox";

const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div className="bg-[#181818] px-4 py-6 rounded-md">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1 font-semibold"></div>
          <div className="col-span-1 font-semibold">Not checked</div>
          <div className="col-span-1 font-semibold">Checked</div>
          <div className="col-span-1 font-semibold">Check indeterminate</div>

          <div className="col-span-1 font-semibold">Default</div>
          <CheckBox
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
          />
          <CheckBox checked />
          <CheckBox indeterminate />

          <div className="col-span-1 font-semibold">Hover</div>
          <CheckBox />
          <CheckBox checked />
          <CheckBox indeterminate />

          <div className="col-span-1 font-semibold">Focused</div>
          <CheckBox />
          <CheckBox checked />
          <CheckBox indeterminate />

          <div className="col-span-1 font-semibold">Clicked</div>
          <CheckBox />
          <CheckBox checked />
          <CheckBox indeterminate />

          <div className="col-span-1 font-semibold">Disabled</div>
          <CheckBox disabled />
          <CheckBox disabled checked />
          <CheckBox disabled indeterminate />
        </div>
      </div>
    </div>
  );
};

export default CheckBoxDemo;
