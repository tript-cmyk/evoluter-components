import { cva } from "class-variance-authority";

export const playButtonVariants = cva(
  "inline-flex justify-center items-center rounded-full shadow-md bg-[#ABFFC399] cursor-pointer",
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
      l: "w-7 h-7",
      m: "w-5 h-5",
      s: "w-4 h-4",
      xs: "w-3 h-3",
    },
  },
  defaultVariants: {
    size: "s",
  },
});
