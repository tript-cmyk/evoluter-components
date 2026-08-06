import * as React from "react";
import { cn } from "../../../../../lib/cn";

export interface InputAddonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function InputAddon({ children, className, ...props }: InputAddonProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center text-[#808080] shrink-0 transition-colors select-none",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
