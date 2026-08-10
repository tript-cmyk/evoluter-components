import { cva } from "class-variance-authority";

export const playButtonHaloVariants = cva(
  "inline-flex w-fit rounded-full p-px transition-colors duration-150 z-10",
  {
    variants: {
      state: {
        default: "",
        hover: "bg-linear-to-r from-[#FFB77A] to-[#ABFFC3]",
        clicked: "bg-linear-to-r from-[#FBA153] to-[#79FF9F]",
      },
      disabled: {
        true: "",
        false:
          "hover:bg-linear-to-r hover:from-[#FFB77A] hover:to-[#ABFFC3] active:bg-linear-to-r active:from-[#FBA153] active:to-[#79FF9F]",
      },
    },
    defaultVariants: {
      state: "default",
      disabled: false,
    },
  },
);

export const playButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full bg-[#ABFFC3]/60 text-black shadow-md transition-colors duration-150 z-10",
  {
    variants: {
      size: {
        l: "h-25 w-25",
        m: "h-20 w-20",
        s: "h-14 w-14",
        xs: "h-9 w-9",
      },
      active: {
        true: "bg-[#ABFFC3]",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed bg-[#B3B3B3]/60 text-[#575757]",
        false: "cursor-pointer",
      },
      processing: {
        true: "pointer-events-none bg-[#E5E5E5] text-[#808080]",
        false: "",
      },
    },
    defaultVariants: {
      size: "s",
      active: false,
      disabled: false,
      processing: false,
    },
  },
);

export const playButtonIconVariants = cva("text-current", {
  variants: {
    size: {
      l: "h-7 w-7",
      m: "h-5 w-5",
      s: "h-4 w-4",
      xs: "h-3 w-3",
    },
  },
  defaultVariants: {
    size: "s",
  },
});
