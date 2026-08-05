export const CONTROLS = {
  CHECKBOX: "checkbox",
  RADIO: "radio",
  MULTI_SELECT: "multi-select",
  PLAY_BUTTON: "play-button",
} as const;

export type ControlTab = (typeof CONTROLS)[keyof typeof CONTROLS];

export const CONTROL_TABS: { value: ControlTab; label: string }[] = [
  { value: CONTROLS.CHECKBOX, label: "Checkbox" },
  { value: CONTROLS.RADIO, label: "Radio" },
  { value: CONTROLS.MULTI_SELECT, label: "Multi Select" },
  { value: CONTROLS.PLAY_BUTTON, label: "Play Button" },
];
