export const INITIAL_INTERACTIVE_VAL = "Your text";
export const INITIAL_TEL_VAL = "+84 905 838 294";
export const INITIAL_PW_VAL = "CaT789kdjf";
export const INITIAL_MULTI_VAL =
  "This is a long string of text that will wrap eventually—good thing we have an input";

export const INPUT = {
  SIMPLE: "simple",
  MULTI_LINE: "multiline",
  SPECIAL: "special",
  PASSWORD: "password",
  LONG: "long",
} as const;

export type InputTab = (typeof INPUT)[keyof typeof INPUT];

export const INPUT_TABS: { value: InputTab; label: string }[] = [
  { value: INPUT.SIMPLE, label: "simple input" },
  { value: INPUT.MULTI_LINE, label: "multiline input" },
  { value: INPUT.SPECIAL, label: "Search & Phone" },
  { value: INPUT.PASSWORD, label: "password input" },
  { value: INPUT.LONG, label: "long input" },
];
