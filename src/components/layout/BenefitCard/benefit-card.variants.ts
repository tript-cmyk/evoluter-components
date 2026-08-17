import { cva } from "class-variance-authority";

export const benefitCardVariants = cva(
  "flex flex-col gap-4 max-w-70 sm:max-w-82 rounded-2xl [clip-path:polygon(0_0,100%_0,100%_72%,85%_100%,0_100%)] p-4 sm:px-8 sm:py-6",
  {
    variants: {
      tone: {
        mint: "bg-[#ABFFC3]",
        orange: "bg-[#FFB77A]",
        white: "bg-white",
      },
    },
    defaultVariants: {
      tone: "mint",
    },
  },
);

export const iconBenefitCardVariants = cva(
  "flex justify-center items-center w-8 h-8 rounded-full",
  {
    variants: {
      tone: {
        mint: "bg-white text-black",
        orange: "bg-white text-black",
        white: "bg-black text-white",
      },
    },
    defaultVariants: {
      tone: "mint",
    },
  },
);
