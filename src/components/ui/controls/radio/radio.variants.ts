import { cva } from "class-variance-authority";

export const radioHaloVariants = cva(
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-150",
  {
    variants: {
      interactionState: {
        default: "",
        hover: "bg-[#141414]/10",
        focused: "bg-[#141414]/15",
        clicked: "bg-[#141414]/25",
      },
      disabled: {
        true: "",
        false:
          "group-hover:bg-[#141414]/10 group-focus-within:bg-[#141414]/15 group-active:bg-[#141414]/25",
      },
    },
    defaultVariants: {
      interactionState: "default",
      disabled: false,
    },
  },
);

export const radioCircleVariants = cva(
  "inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-150",
  {
    variants: {
      checked: {
        true: "",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed",
        false: "cursor-pointer",
      },
    },
    compoundVariants: [
      {
        checked: false,
        disabled: false,
        className: "border-[#B3B3B3] bg-white",
      },
      {
        checked: true,
        disabled: false,
        className: "border-[#141414] bg-[#ABFFC3] text-[#141414]",
      },
      {
        checked: false,
        disabled: true,
        className: "border-[#E5E5E5] bg-[#F2F2F2]",
      },
      {
        checked: true,
        disabled: true,
        className: "border-[#B3B3B3] bg-white text-[#B3B3B3]",
      },
    ],
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);

export const radioWrapperVariants = cva(
  "flex flex-wrap gap-x-3 gap-y-1 text-xs md:gap-x-6 md:gap-y-3",
  {
    variants: {
      direction: {
        horizontal: "flex-row items-center",
        vertical: "flex-col items-start",
      },
    },
    defaultVariants: {
      direction: "horizontal",
    },
  },
);
