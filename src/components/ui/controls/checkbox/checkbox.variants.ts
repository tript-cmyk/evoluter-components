import { cva } from "class-variance-authority";

export const checkBoxVariants = cva(
  "inline-flex justify-center items-center w-4 h-4 rounded-sm border-2",
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
        className: "bg-white border-gray-300",
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
        className: "bg-gray-100 border-gray-200",
      },

      {
        checked: true,
        disabled: true,
        className:
          "bg-[#B3B3B3] border-[#B3B3B3] text-white pointer-events-none",
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
