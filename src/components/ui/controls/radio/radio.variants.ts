import { cva } from "class-variance-authority";

export const radioControlVariants = cva(
  [
    "inline-flex items-center justify-center w-4 h-4 rounded-full border-2 transition-all duration-150",
  ],
  {
    variants: {
      checked: {
        true: "bg-[#ABFFC3] border-[#141414] text-[#141414]",
        false: "bg-white border-[#B3B3B3] text-transparent",
      },

      disabled: {
        true: "cursor-not-allowed opacity-60",
        false: "cursor-pointer",
      },
    },

    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);

export const radioWrapperVariants = cva(
  ["flex items-center justify-center w-8 h-8 rounded-full transition-colors"],
  {
    variants: {
      disabled: {
        true: "",
        false:
          "group-hover:bg-[#141414]/5 group-focus-within:bg-[#141414]/10 group-active:bg-[#141414]/15",
      },
    },

    defaultVariants: {
      disabled: false,
    },
  },
);
