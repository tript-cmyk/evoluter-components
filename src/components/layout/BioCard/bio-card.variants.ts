import { cva } from "class-variance-authority";

export const bioCardVariants = cva(
  "min-w-70 rounded-2xl flex items-center gap-4",
  {
    variants: {
      selected: {
        false: "bg-[#262626] text-white px-4 py-3 sm:py-4",
        true: "bg-[#FFB77A] text-black px-4 py-4 sm:py-6",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);
