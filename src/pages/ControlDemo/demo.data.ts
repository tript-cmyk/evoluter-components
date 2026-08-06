export enum CONTROLS {
  CHECKBOX = "checkbox",
  RADIO = "radio",
  MULTI_SELECT = "multi-select",
  PLAY_BUTTON = "play-button",
}

export const CONTROL_TABS: { value: CONTROLS; label: string }[] = [
  { value: CONTROLS.CHECKBOX, label: "Checkbox" },
  { value: CONTROLS.RADIO, label: "Radio" },
  { value: CONTROLS.MULTI_SELECT, label: "Multi Select" },
  { value: CONTROLS.PLAY_BUTTON, label: "Play Button" },
];

export const CHECKBOX_OPTIONS = [
  { value: "game", label: "Game" },
  { value: "music", label: "Music" },
  { value: "football", label: "Football" },
  { value: "hiking", label: "Hiking" },
  { value: "chess", label: "Chess" },
  { value: "tennis", label: "Tennis" },
  { value: "others", label: "Others" },
];
