import { useMemo, useState } from "react";
import { CheckBox } from "../../../components/ui/controls/checkbox";

const HOBBY_OPTIONS = [
  { label: "Reading", value: "reading" },
  { label: "Gaming", value: "gaming" },
  { label: "Music", value: "music" },
  { label: "Cooking", value: "cooking" },
  { label: "Travel", value: "travel" },
  { label: "Sport", value: "sport", disabled: true },
  { label: "Other", value: "other" },
];

const ENABLED_HOBBY_VALUES = HOBBY_OPTIONS.filter(
  (option) => !option.disabled,
).map((option) => option.value);

const CheckBoxDemo = () => {
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  const selectedEnabledCount = useMemo(
    () =>
      selectedHobbies.filter((value) => ENABLED_HOBBY_VALUES.includes(value))
        .length,
    [selectedHobbies],
  );

  const isAllSelected = selectedEnabledCount === ENABLED_HOBBY_VALUES.length;
  const isIndeterminate = selectedEnabledCount > 0 && !isAllSelected;

  const handleToggleAll = () => {
    setSelectedHobbies(isAllSelected ? [] : ENABLED_HOBBY_VALUES);
  };

  return (
    <div className="mx-auto w-full max-w-xl rounded-lg bg-[#181818] p-6 text-left">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">Hobbies</h2>
        <p className="text-sm font-medium text-[#B3B3B3]">
          Selected value:{" "}
          <span className="text-[#ABFFC3]">
            {selectedHobbies.length ? selectedHobbies.join(", ") : "empty"}
          </span>
        </p>
      </div>

      <div className="mt-6 border-b border-[#363636] pb-4">
        <CheckBox
          label="Select all hobbies"
          checked={isAllSelected}
          indeterminate={isIndeterminate}
          onChange={handleToggleAll}
        />
      </div>

      <div className="mt-6">
        <CheckBox.Group
          name="hobbies"
          value={selectedHobbies}
          onChangeValue={setSelectedHobbies}
          options={HOBBY_OPTIONS}
        />
      </div>
    </div>
  );
};

export default CheckBoxDemo;
