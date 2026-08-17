import { cva } from "class-variance-authority";

export const caseStudyCardVariants = cva(
  "max-w-60 sm:max-w-75 sm:p-6 p-4 flex flex-col items-start rounded-2xl gap-2",
  {
    variants: {
      tone: {
        black: "bg-[#0D0D0D] text-white hover:bg-[#262626]",
        orange: "bg-[#FFB77A] text-black hover:bg-[#F19444  ]",
        mint: "bg-[#ABFFC3] text-black hover:bg-[#74E494]",
        grey: "bg-[#262626] text-white hover:bg-[#0D0D0D]",
      },
    },
    defaultVariants: {
      tone: "black",
    },
  },
);
