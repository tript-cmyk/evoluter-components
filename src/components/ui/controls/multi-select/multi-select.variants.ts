import { cva } from "class-variance-authority";

export const multiSelectHaloVariants = cva(
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-150",
  {
    variants: {
      interactionState: {
        default: "",
        hover: "bg-[#ABFFC3]/10",
        focused: "bg-[#ABFFC3]/15",
        clicked: "bg-[#ABFFC3]/25",
      },
      disabled: {
        true: "",
        false:
          "group-hover:bg-[#ABFFC3]/10 group-focus-within:bg-[#ABFFC3]/15 group-active:bg-[#ABFFC3]/25",
      },
    },
    defaultVariants: {
      interactionState: "default",
      disabled: false,
    },
  },
);

export const multiSelectCircleVariants = cva(
  "inline-flex h-4 w-4 items-center justify-center rounded-full border text-xs transition-all duration-150",
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
        className: "border-[#E5E5E5] bg-white",
      },
      {
        checked: true,
        disabled: false,
        className: "border-[#ABFFC3] bg-[#ABFFC3] text-black",
      },
      {
        checked: false,
        disabled: true,
        className: "border-[#E5E5E5] bg-[#F2F2F2]",
      },
      {
        checked: true,
        disabled: true,
        className: "border-[#B3B3B3] bg-[#B3B3B3] text-white",
      },
    ],
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);
