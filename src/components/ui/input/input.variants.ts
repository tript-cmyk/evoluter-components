import { cva } from "class-variance-authority";

export const inputWrapperVariants = cva(
  "relative w-full rounded-lg bg-[#212121] border transition-all duration-200 flex",
  {
    variants: {
      status: {
        default:
          "border-[#333333] hover:border-[#444444] focus-within:border-[#ABFFC3] focus-within:shadow-[0_0_8px_rgba(171,255,195,0.15)]",
        active: "border-[#ABFFC3] shadow-[0_0_8px_rgba(171,255,195,0.15)]",
        success: "border-[#40A05B] focus-within:border-[#40A05B]",
        error:
          "border-[#FF5C5C] shadow-[0_0_8px_rgba(255,92,92,0.08)] focus-within:border-[#FF5C5C]",
        processing: "border-[#333333]",
        disabled:
          "border-[#2A2A2A] bg-[#1A1A1A] opacity-50 pointer-events-none cursor-not-allowed",
      },
      multiline: {
        true: "items-start min-h-[120px] p-3 flex-col gap-2 h-auto",
        false: "items-center px-3.5 h-11",
      },
    },
    defaultVariants: {
      status: "default",
      multiline: false,
    },
  },
);

export const inputFieldVariants = cva(
  "w-full bg-transparent border-0 outline-none text-[#FFF] placeholder:text-[#575757] text-sm font-normal antialiased tracking-wide transition-colors focus:outline-none focus:ring-0",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed text-[#808080]",
        false: "",
      },
      multiline: {
        true: "resize-none h-full min-h-[80px] w-full pr-6",
        false: "h-full py-2.5 overflow-ellipsis whitespace-nowrap",
      },
    },
    defaultVariants: {
      disabled: false,
      multiline: false,
    },
  },
);
