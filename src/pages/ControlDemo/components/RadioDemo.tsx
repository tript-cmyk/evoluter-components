import { Radio } from "../../../components/ui/controls/radio";

const RadioDemo = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white text-black px-4 py-6 rounded-md">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 font-semibold"></div>
          <div className="col-span-1 font-semibold">Not checked</div>
          <div className="col-span-1 font-semibold">Checked</div>

          <div className="col-span-1 font-semibold">Default</div>
          <Radio />
          <Radio checked />

          <div className="col-span-1 font-semibold">Hover</div>
          <Radio />
          <Radio checked />

          <div className="col-span-1 font-semibold">Focused</div>
          <Radio />
          <Radio checked />

          <div className="col-span-1 font-semibold">Clicked</div>
          <Radio />
          <Radio checked />

          <div className="col-span-1 font-semibold">Disabled</div>
          <Radio disabled />
          <Radio disabled checked />
        </div>
      </div>
    </div>
  );
};

export default RadioDemo;
