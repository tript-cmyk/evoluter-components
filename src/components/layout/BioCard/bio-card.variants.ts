import { cva } from "class-variance-authority";

export const bioCardVariants = cva(
  "min-w-70 rounded-2xl px-4 py-2 md:px-6 md:py-4 flex items-center gap-4" ,
  {
    variants: {
      selected: {
        false: "bg-[#262626] text-white",
        true: "bg-[#FFB77A] text-black h-23 md:h-27",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);
