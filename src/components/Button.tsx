import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { FiLoader } from "react-icons/fi";
import { cn } from "../lib/utils";

const fillVariants = cva(
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

const buttonVariants = cva(
  [
    "relative overflow-hidden group",
    "inline-flex items-center justify-center gap-2",
    "rounded-lg",
    "font-semibold",
    "transition-colors duration-300",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "select-none",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primaryWhite:
          "bg-[#FFF] text-[#141414] disabled:bg-[#808080] disabled:text-[#B3B3B3]",

        primaryDark:
          "bg-black text-[#FFF] hover:text-[#141414] active:text-[#FFFFFF] disabled:bg-[#808080] disabled:text-[#B3B3B3]",

        secondaryDark:
          "bg-[#3C3C3C] text-[#FFF]  hover:text-[#141414] active:text-[#FFFFFF] disabled:bg-[#808080] disabled:text-[#B3B3B3]",

        textDark:
          "bg-transparent text-[#141414] hover:text-[#40A05B] active:text-[#262626] disabled:text-[#575757]",

        textWhite:
          "bg-transparent text-[#FFF] hover:text-[#40A05B] active:text-[#FFF] disabled:text-[#575757]",
      },

      size: {
        xl: "h-14 px-8 text-lg",
        large: "h-12 px-6 text-base",
        small: "h-10 px-4 text-sm",
      },

      processing: {
        true: "pointer-events-none",
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
        variant: "textDark",
        processing: true,
        className: "text-[#808080]",
      },
      {
        variant: "textWhite",
        processing: true,
        className: "text-[#808080]",
      },
    ],

    defaultVariants: {
      variant: "primaryDark",
      size: "large",
      iconOnly: false,
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  processing?: boolean;
}

export function Button({
  children,
  variant,
  size,
  className,
  icon,
  iconPosition = "left",
  iconOnly,
  processing = false,
  disabled,
  ...props
}: ButtonProps) {
  const displayIcon =
    icon && (processing ? <FiLoader className="h-4 w-4 animate-spin" /> : icon);

  return (
    <button
      disabled={disabled}
      className={cn(
        buttonVariants({
          variant,
          size,
          processing,
          iconOnly,
        }),
        className,
      )}
      {...props}
    >
      <span className={fillVariants({ variant })} />

      <span className="relative z-10 inline-flex items-center gap-2">
        {iconOnly ? (
          displayIcon
        ) : (
          <>
            {iconPosition === "left" && displayIcon}

            {children && <span>{children}</span>}

            {iconPosition === "right" && displayIcon}
          </>
        )}
      </span>
    </button>
  );
}
