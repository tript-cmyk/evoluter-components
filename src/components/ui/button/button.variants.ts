import { cva } from "class-variance-authority";

export const fillVariants = cva(
  [
    "absolute inset-0",
    "-z-0",
    "[clip-path:circle(0%_at_50%_50%)]",
    "transition-[clip-path]",
    "duration-700",
    "ease-out",
    "group-hover:[clip-path:circle(150%_at_50%_50%)]",
  ],
  {
    variants: {
      variant: {
        primaryWhite: "bg-[#ABFFC3] group-active:bg-[#FFFFFF]",

        primaryDark: "bg-[#ABFFC3] group-active:bg-[#262626]",

        secondaryDark: "bg-[#ABFFC3] group-active:bg-[#363636]",

        textDark: "hidden",

        textWhite: "hidden",
      },
    },
  },
);

export const buttonVariants = cva(
  [
    "relative overflow-hidden group",
    "inline-flex items-center justify-center gap-2",
    "rounded-lg",
    "font-semibold",
    "transition-colors duration-300",
    "select-none",
    "cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ABFFC3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]",
  ],
  {
    variants: {
      variant: {
        primaryWhite: "bg-[#FFF] text-[#141414]",

        primaryDark:
          "bg-black text-[#FFF] hover:text-[#141414] active:text-[#FFFFFF]",

        secondaryDark:
          "bg-[#3C3C3C] text-[#FFF] hover:text-[#141414] active:text-[#FFFFFF]",

        textDark:
          "bg-transparent text-[#141414] hover:text-[#40A05B] active:text-[#262626]",

        textWhite:
          "bg-transparent text-[#FFF] hover:text-[#40A05B] active:text-[#FFF]",
      },

      size: {
        xl: "h-14 px-8 text-lg",
        large: "h-12 px-6 text-base",
        small: "h-10 px-4 text-sm",
      },

      processing: {
        true: "pointer-events-none opacity-80",
        false: "",
      },

      disabled: {
        true: "pointer-events-none opacity-50",
        false: "",
      },

      iconOnly: {
        true: "aspect-square px-0",
        false: "",
      },
    },

    compoundVariants: [
      { size: "xl", iconOnly: true, className: "w-14" },
      { size: "large", iconOnly: true, className: "w-12" },
      { size: "small", iconOnly: true, className: "w-10" },

      {
        variant: ["primaryWhite", "primaryDark", "secondaryDark"],
        disabled: true,
        className: "bg-[#808080] text-[#B3B3B3]",
      },
      {
        variant: ["textDark", "textWhite"],
        disabled: true,
        className: "text-[#575757]",
      },

      {
        variant: "primaryWhite",
        processing: true,
        className: "bg-[#E5E5E5] text-[#808080]",
      },
      {
        variant: "primaryDark",
        processing: true,
        className: "bg-[#363636] text-[#F2F2F2]",
      },
      {
        variant: "secondaryDark",
        processing: true,
        className: "bg-[#575757] text-[#F2F2F2]",
      },
      {
        variant: ["textDark", "textWhite"],
        processing: true,
        className: "text-[#808080]",
      },
    ],

    defaultVariants: {
      variant: "primaryDark",
      size: "large",
      iconOnly: false,
      disabled: false,
      processing: false,
    },
  },
);
