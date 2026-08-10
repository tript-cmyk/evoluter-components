import { useState } from "react";
import { MultiSelect } from "../../../components/ui/controls/multi-select";

const GENRE_OPTIONS = [
  { label: "Action", value: "action" },
  { label: "Comedy", value: "comedy" },
  { label: "Drama", value: "drama" },
  { label: "Horror", value: "horror" },
  { label: "Sci-fi", value: "sci-fi" },
  { label: "Documentary", value: "documentary", disabled: true },
];

const MultiSelectDemo = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  return (
    <div className="mx-auto w-full max-w-xl rounded-lg bg-[#181818] p-6 text-left">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">Genres</h2>
        <p className="text-sm font-medium text-[#B3B3B3]">
          Selected value:{" "}
          <span className="text-[#ABFFC3]">
            {selectedGenres.length ? selectedGenres.join(", ") : "empty"}
          </span>
        </p>
      </div>

      <div className="mt-6">
        <MultiSelect
          name="genres"
          value={selectedGenres}
          onChangeValue={setSelectedGenres}
          options={GENRE_OPTIONS}
        />
      </div>
    </div>
  );
};

export default MultiSelectDemo;
