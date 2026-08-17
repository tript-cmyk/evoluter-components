import { cva } from "class-variance-authority";

export const benefitImageCardVariants = cva(
  "max-w-60 sm:max-w-80 rounded-2xl p-4 flex flex-col items-center sm:p-8",
  {
    variants: {
      tone: {
        dark: "bg-[#0D0D0D] text-white ",
        orange: "bg-[#FFB77A] text-black",
        mint: "bg-[#ABFFC3] text-black",
      },
    },
    defaultVariants: {
      tone: "mint",
    },
  },
);
