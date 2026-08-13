import { cva } from "class-variance-authority";

export const pricingCardVariants = cva(
  "flex w-full min-w-0 flex-col rounded-lg border p-2 md:px-6 md:py-4 text-left transition-colors duration-200 max-w-70",
  {
    variants: {
      tone: {
        mint: "border-[#ABFFC3] bg-[#ABFFC3] text-[#141414] hover:bg-[#6BDB89]",
        dark: "border-[#141414] bg-[#141414] text-white hover:bg-[#363636]",
        orange:
          "border-[#FFB978] bg-[#FFB978] text-[#141414] hover:bg-[#F9943D]",
      },
      disabled: {
        true: "pointer-events-none opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      tone: "mint",
      disabled: false,
    },
  },
);

export const pricingCardDividerVariants = cva("h-px w-full border-0", {
  variants: {
    tone: {
      mint: "bg-[#141414]/35",
      dark: "bg-white/35",
      orange: "bg-[#141414]/35",
    },
  },
  defaultVariants: {
    tone: "mint",
  },
});
