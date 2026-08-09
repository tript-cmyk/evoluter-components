import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "relative overflow-hidden group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-[#FFFFFF] text-[#141414] hover:bg-[#ABFFC3] active:bg-[#FFFFFF]",
        outline:
          "bg-[#141414] text-[#FFFFFF] hover:bg-[#ABFFC3] hover:text-[#141414] active:bg-[#262626]/15 active:text-[#FFFFFF]",
        secondary:
          "bg-[#363636]/20 text-[#FFFFFF] hover:bg-[#ABFFC3] hover:text-[#141414]/10 active:bg-[#363636]/20",
        ghost: "bg-transparent text-[#FFFFFF] hover:text-[#40A05B]",
        dark: "bg-transparent text-[#141414]/10 hover:text-[#40A05B] active:text-[#262626]/15",
      },

      size: {
        sm: "px-5 py-2.5",
        lg: "px-6 py-3",
        xl: "px-8 py-4",
      },

      processing: {
        true: "pointer-events-none",
        false: "",
      },

      disabled: {
        true: "pointer-events-none",
        false: "",
      },
    },

    compoundVariants: [
      {
        variant: "default",
        disabled: true,
        className: "bg-[#808080]/50 text-[#B3B3B3]/70",
      },
      {
        variant: "default",
        processing: true,
        className: "bg-[#E5E5E5]/90 text-[#808080]/50 ",
      },
      {
        variant: "outline",
        disabled: true,
        className: "bg-[#808080]/50 text-[#B3B3B3]/70",
      },
      {
        variant: "outline",
        processing: true,
        className: "bg-[#363636]/20 text-[#F2F2F2]/95 ",
      },
      {
        variant: "secondary",
        disabled: true,
        className: "bg-[#808080]/50 text-[#B3B3B3]/70",
      },
      {
        variant: "secondary",
        processing: true,
        className: "bg-[#575757]/30 text-[#F2F2F2]/95 ",
      },
      {
        variant: "ghost",
        disabled: true,
        className: "text-[#575757]/30",
      },
      {
        variant: "ghost",
        processing: true,
        className: "text-[#808080]/50",
      },
      {
        variant: "dark",
        disabled: true,
        className: "text-[#575757]/30",
      },
      {
        variant: "dark",
        processing: true,
        className: "text-[#808080]/50 ",
      },
    ],

    defaultVariants: {
      variant: "default",
      size: "sm",
      processing: false,
      disabled: false,
    },
  },
);
