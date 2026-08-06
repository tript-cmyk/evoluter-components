import { cva } from "class-variance-authority";

export const checkBoxVariants = cva(
  "inline-flex justify-center items-center rounded-sm border-2 transition-all duration-150",
  {
    variants: {
      checked: {
        true: "",
        false: "",
      },

      indeterminate: {
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
        indeterminate: false,
        disabled: false,
        className: "bg-[#FFFFFF] border-[#E5E5E5]",
      },

      {
        checked: true,
        disabled: false,
        className: "bg-[#ABFFC3] border-[#ABFFC3] text-black",
      },

      {
        indeterminate: true,
        disabled: false,
        className: "bg-[#ABFFC3] border-[#ABFFC3] text-black",
      },

      {
        checked: false,
        indeterminate: false,
        disabled: true,
        className: "bg-[#F2F2F2] border-[#E5E5E5]",
      },

      {
        checked: true,
        disabled: true,
        className:
          "bg-[#B3B3B3] border-[#B3B3B3] text-[#FFFFFF] pointer-events-none",
      },

      {
        indeterminate: true,
        disabled: true,
        className:
          "bg-[#BDBDBD] border-[#BDBDBD] text-white pointer-events-none",
      },
    ],

    defaultVariants: {
      checked: false,
      indeterminate: false,
      disabled: false,
    },
  },
);
