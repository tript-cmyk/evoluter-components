import { cva } from "class-variance-authority";

export const tabItemVariants = cva(
  "inline-flex items-center justify-center gap-1.5 font-bold transition-colors duration-300 select-none h-9 min-w-28 px-6 text-xs",
  {
    variants: {
      position: {
        first: "rounded-l-md rounded-r-none",
        middle: "rounded-none",
        last: "rounded-l-none rounded-r-md",
        only: "rounded-md",
      },
      active: {
        true: "bg-white text-[#0D0D0D]",
        false: "bg-[#0D0D0D] text-white",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "cursor-pointer hover:bg-[#ABFFC3] hover:text-[#0D0D0D]",
      },
    },
    defaultVariants: {
      position: "only",
      active: false,
      disabled: false,
    },
  },
);