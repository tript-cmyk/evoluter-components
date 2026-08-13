import { cva } from "class-variance-authority";

export const iconTagBaseStyles = "inline-flex shrink-0 items-center justify-center text-current h-2.5 w-2.5 md:h-3 md:w-3";

export const tagVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center border font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#00A344]/40 focus-visible:ring-offset-2 disabled:pointer-events-none min-h-5 gap-1.5 px-2 py-1 text-[10px] md:min-h-7 md:gap-2 md:px-3 md:py-2 md:text-xs",
  {
    variants: {
      variant: {
        default: "rounded-md",
        colorGreen: "rounded-full",
        colorOrange: "rounded-full",
        glass: "rounded-full backdrop-blur-md",
      },
      selected: {
        true: "",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed border-transparent bg-[#363636] text-[#808080]",
        false: "cursor-pointer",
      },
      processing: {
        true: "cursor-wait border-transparent bg-[#363636] text-[#B3B3B3]",
        false: "",
      },
      error: {
        true: "border-[#E9380D] bg-[#2E2222] text-white hover:border-[#E9380D] hover:bg-[#2E2222] active:bg-[#2E2222]",
        false: "",
      },
      success: {
        true: "border-[#00A344] bg-[#1D3025] text-white hover:border-[#00A344] hover:bg-[#1D3025] active:bg-[#1D3025]",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        selected: false,
        disabled: false,
        processing: false,
        error: false,
        success: false,
        className:
          "border-transparent bg-[#262626] text-white hover:border-[#00A344] hover:bg-[#1C2A22] active:bg-[#07130D]",
      },
      {
        variant: "colorGreen",
        selected: false,
        disabled: false,
        processing: false,
        error: false,
        success: false,
        className:
          "border-transparent bg-[#ABFFC3] text-[#141414] hover:bg-[#92F7B0] active:bg-[#7DEA9D]",
      },
      {
        variant: "colorOrange",
        selected: false,
        disabled: false,
        processing: false,
        error: false,
        success: false,
        className:
          "border-transparent bg-[#FFB77A] text-[#141414] hover:bg-[#FFA45B] active:bg-[#F5913D]",
      },
      {
        variant: "glass",
        selected: false,
        disabled: false,
        processing: false,
        error: false,
        success: false,
        className:
          "border-white/15 bg-white/10 text-[#ABFFC3] hover:bg-white/15 active:bg-white/10",
      },
      {
        selected: true,
        disabled: false,
        processing: false,
        error: false,
        success: false,
        className:
          "border-[#ABFFC3] bg-[#ABFFC3] text-[#141414] hover:bg-[#ABFFC3] active:bg-[#ABFFC3]",
      },
    ],
    defaultVariants: {
      variant: "default",
      selected: false,
      disabled: false,
      processing: false,
      error: false,
      success: false,
    },
  },
);

export const tagIconVariants = cva(
  iconTagBaseStyles,
  {
    variants: {
      error: {
        true: "text-red-500",
        false: "",
      },
      success: {
        true: "text-green-500",
        false: "",
      },
    }
  },
);
