import { cva } from "class-variance-authority";

export const sliderWidthVariants = cva("relative min-w-0 py-2", {
  variants: {
    variant: {
      desktop: "w-120",
      mobile: "w-70",
    },
    defaultVariants: {
      variant: "desktop",
    },
  },
});
