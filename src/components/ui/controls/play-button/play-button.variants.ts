import { cva } from "class-variance-authority";

export const playButtonVariants = cva(
  "inline-flex justify-center items-center rounded-full shadow-md bg-[#ABFFC399] cursor-pointer hover:bg-[#ABFFC3CC] duration-700 transition-all",
  {
    variants: {
      size: {
        l: "w-25 h-25",
        m: "w-20 h-20",
        s: "w-14 h-14",
        xs: "w-9 h-9",
      },
    },
    defaultVariants: {
      size: "s",
    },
  },
);

export const playButtonIconVariants = cva("text-black", {
  variants: {
    size: {
      l: "text-3xl",
      m: "text-2xl",
      s: "text-base",
      xs: "text-xs",
    },
  },
  defaultVariants: {
    size: "s",
  },
});
