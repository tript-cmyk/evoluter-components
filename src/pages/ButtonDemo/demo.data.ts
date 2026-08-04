import type { ButtonVariant, ButtonSize } from "../../components/ui/button";

export interface GroupSpec {
  variant: ButtonVariant;
  size: ButtonSize;
  title: string;
}

export const groups: GroupSpec[] = [
  { variant: "primaryWhite", size: "xl", title: "Primary White XL" },
  { variant: "primaryWhite", size: "large", title: "Primary White large" },
  { variant: "primaryWhite", size: "small", title: "Primary White small" },

  { variant: "primaryDark", size: "xl", title: "Primary Dark XL" },
  { variant: "primaryDark", size: "large", title: "Primary Dark large" },
  { variant: "primaryDark", size: "small", title: "Primary Dark small" },

  { variant: "secondaryDark", size: "xl", title: "Secondary Dark XL" },
  { variant: "secondaryDark", size: "large", title: "Secondary Dark large" },
  { variant: "secondaryDark", size: "small", title: "Secondary Dark small" },

  { variant: "textDark", size: "xl", title: "Text Dark XL" },
  { variant: "textDark", size: "large", title: "Text Dark large" },
  { variant: "textDark", size: "small", title: "Text Dark small" },

  { variant: "textWhite", size: "xl", title: "Text White XL" },
  { variant: "textWhite", size: "large", title: "Text White large" },
  { variant: "textWhite", size: "small", title: "Text White small" },
];

export const getHoverClass = (variant: ButtonVariant) => {
  switch (variant) {
    case "primaryWhite":
    case "primaryDark":
    case "secondaryDark":
      return "[&_span:first-child]:[clip-path:circle(150%_at_50%_50%)] bg-[#ABFFC3] text-[#141414]";
    case "textDark":
    case "textWhite":
      return "text-[#40A05B] bg-transparent";
    default:
      return "";
  }
};

export const getActiveClass = (variant: ButtonVariant) => {
  switch (variant) {
    case "primaryWhite":
      return "";
    case "primaryDark":
      return "bg-[#262626] text-[#FFFFFF]";
    case "secondaryDark":
      return "bg-[#363636] text-[#FFFFFF]";
    case "textDark":
      return "text-[#262626] bg-transparent";
    case "textWhite":
      return "text-[#FFF] bg-transparent";
    default:
      return "";
  }
};
