import { useState } from "react";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../components/ui/controls/radio";
import { GENDER_OPTIONS, GENDERS } from "../demo.data";

const RadioDemo = () => {
  const [gender, setGender] = useState<string>(GENDERS.MALE);

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="bg-white text-black px-6 py-6 rounded-md flex items-start flex-col w-fit">
          <RadioGroup value={gender} onValueChange={setGender} name="gender">
            {GENDER_OPTIONS.map(({ value, label }) => (
              <RadioGroupItem key={value} value={value} label={label} />
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default RadioDemo;
