import { cva } from "class-variance-authority";

export const statisticCardVariants = cva(
  "flex flex-col items-start gap-2 md:gap-4 md:px-6 md:py-4 p-2 text-[#141414] w-90 rounded-2xl [clip-path:polygon(0_0,100%_0,100%_72%,85%_100%,0_100%)]",
  {
    variants: {
      tone: {
        mint: "bg-[#ABFFC3]",
        white: "bg-[#FCFCFC]",
        orange: "bg-[#FFB978]",
      },
    },
    defaultVariants: {
      tone: "mint",
    },
  },
);

export const iconStatisticCardVariants = cva(
  "w-10 h-10 rounded-full flex items-center justify-center text-[16px]",
  {
    variants: {
      tone: {
        mint: "bg-white text-black",
        white: "bg-black text-white",
        orange: "bg-white text-black",
      },
    },
    defaultVariants: {
      tone: "mint",
    },
  },
);
