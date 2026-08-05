import { cva } from "class-variance-authority";

export const multiSelectVariants = cva(
  "inline-flex justify-center items-center w-4 h-4 rounded-full border-2",
  {
    variants: {
      checked: {
        true: "",
        false: "",
      },

      disabled: {
        true: "cursor-not-allowed",
        false: "cursor-pointer",
      },
    },

    compoundVariants: [
      {
        checked: false,
        disabled: false,
        className: "bg-white border-[#E5E5E5]",
      },

      {
        checked: true,
        disabled: false,
        className: "bg-[#ABFFC3] border-[#E5E5E5s] text-black",
      },

      {
        checked: false,
        disabled: true,
        className: "bg-[#F2F2F2] border-[#E5E5E5]",
      },

      {
        checked: true,
        disabled: true,
        className: "bg-[#B3B3B3] border-[#B3B3B3] text-white",
      },
    ],

    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);
