import { useState } from "react";
import Header from "../../components/layout/Header";
import {
  TAG_SHOW_ICON_POSITION,
  TAG_SIZE,
  TAG_VARIANT,
  Tag,
} from "../../components/ui/tag";

const INITIAL_TAGS = [
  { label: "React", value: "react" },
  { label: "TypeScript", value: "typescript", success: true },
  { label: "Design System", value: "design-system", error: true },
  { label: "Accessibility", value: "accessibility", disabled: true },
];

const TagDemoPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(["react"]);

  const handleClick = (value?: string, selected?: boolean) => {
    if (!value) {
      return;
    }

    setSelectedTags((currentTags) =>
      selected
        ? Array.from(new Set([...currentTags, value]))
        : currentTags.filter((tagValue) => tagValue !== value),
    );
  };

  const handleRemove = (value?: string) => {
    if (!value) {
      return;
    }

    setSelectedTags((currentTags) =>
      currentTags.filter((tagValue) => tagValue !== value),
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 sm:p-12">
      <Header />

      <div className="mx-auto w-full max-w-3xl rounded-lg bg-[#EEF3F4] p-8 text-[#333333]">
        <h1 className="text-4xl font-bold text-[#0D0D0D]">Tags</h1>

        <section className="mt-8">
          <h2 className="text-sm font-bold text-[#333333]">Choose tags</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {INITIAL_TAGS.map((tag) => (
              <Tag
                key={tag.value}
                label={tag.label}
                value={tag.value}
                success={tag.success}
                error={tag.error}
                size={TAG_SIZE.DESKTOP}
                disabled={tag.disabled}
                onClick={handleClick}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold text-[#333333]">Selected values</h2>
          <div className="mt-3 rounded-md bg-white p-4 text-sm font-semibold text-[#0D0D0D]">
            {selectedTags.length > 0 ? selectedTags.join(", ") : "No tags"}
          </div>
        </section>

        <div className="mt-8 p-10">
          <Tag
            label="Tag"
            // size={TAG_SIZE.MOBILE}
            icon={TAG_SHOW_ICON_POSITION.BOTH}
            // value="Test"
            // success
            // disabled
            // onClick={(value, selected) => handleClick(value, selected)}
          />
        </div>

        <div className="mt-8 bg-black p-10 flex items-center gap-2">
          <Tag
            label="Platform"
            variant={TAG_VARIANT.COLOR_ORANGE}
            // size={TAG_SIZE.MOBILE}
            // icon={TAG_SHOW_ICON_POSITION.LEFT}
            value="Test"
          />
          <Tag
            label="Platform"
            variant={TAG_VARIANT.COLOR_GREEN}
            // size={TAG_SIZE.MOBILE}
            // icon={TAG_SHOW_ICON_POSITION.RIGHT}
            value="Test"
          />
          <Tag
            label="Platform"
            variant={TAG_VARIANT.GLASS}
            // size={TAG_SIZE.MOBILE}
            // icon={TAG_SHOW_ICON_POSITION.BOTH}
            value="Test"
          />
        </div>
      </div>
    </div>
  );
};

export default TagDemoPage;
