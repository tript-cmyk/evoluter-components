export const INITIAL_INTERACTIVE_VAL = "Your text";
export const INITIAL_TEL_VAL = "+380 (67) 333 - 22 - 22";
export const INITIAL_PW_VAL = "CaT789kdjf";
export const INITIAL_MULTI_VAL =
  "This is a long string of text that will wrap eventually—good thing we have an input";

export type InputTab = "simple" | "multiline" | "special" | "password" | "long";

export const INPUT_TABS: { value: InputTab; label: string }[] = [
  { value: "simple", label: "simple input" },
  { value: "multiline", label: "multiline input" },
  { value: "special", label: "Search & Phone" },
  { value: "password", label: "password input" },
  { value: "long", label: "long input" },
];
