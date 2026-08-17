import { cva } from "class-variance-authority";

export const stepCardVariants = cva(
  "flex flex-col gap-6 rounded-lg bg-[#141414] text-white p-4 sm:flex-row sm:p-10",
  {
    variants: {
      size: {
        big: "sm:max-w-200",
        small: "max-w-50 sm:max-w-100",
      },
    },
    defaultVariants: {
      size: "big",
    },
  },
);

export const stepCardLabelStepVariants = cva(
  "px-3 py-1.5  text-[#141414] font-semibold rounded-full text-sm mb-5",
  {
    variants: {
      size: {
        big: "bg-[#FFB77A]",
        small: "bg-[#ABFFC3]",
      },
    },
    defaultVariants: {
      size: "big",
    },
  },
);

export const stepCardTitleVariants = cva("font-bold", {
  variants: {
    size: {
      big: "text-[26px] sm:text-[30px]",
      small: "text-[18px]",
    },
  },
  defaultVariants: {
    size: "big",
  },
});

export const stepCardDescriptionVariants = cva("text-gray-300", {
  variants: {
    size: {
      big: "text-[12px] sm:text-[14px]",
      small: "text-[10px] sm:text-[12px]",
    },
  },
  defaultVariants: {
    size: "big",
  },
});
