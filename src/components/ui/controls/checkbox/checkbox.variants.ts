import { cva } from "class-variance-authority";

export const checkBoxHaloVariants = cva(
  "flex items-center justify-center rounded-full transition-colors duration-150 shrink-0 h-8 w-8",
  {
    variants: {
      interactionState: {
        default: "",
        hover: "bg-[#ABFFC3]/10",
        focused: "bg-[#ABFFC3]/15",
        clicked: "bg-[#ABFFC3]/25",
      },
      disabled: {
        true: "",
        false:
          "group-hover:bg-[#ABFFC3]/10 group-focus-within:bg-[#ABFFC3]/15 group-active:bg-[#ABFFC3]/25",
      },
    },
    defaultVariants: {
      interactionState: "default",
      disabled: false
    },
  },
);

export const checkBoxVariants = cva(
  "inline-flex justify-center items-center rounded-sm border transition-all duration-150 h-4 w-4 text-xs",
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
