import * as React from "react";
import { cn } from "../../../../../lib/cn";
import { ADDON_POSITION } from "../../input.types";
import { useInputContext } from "./InputRoot";

export interface InputAddonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: ADDON_POSITION;
}

export function InputAddonGroup({
  children,
  position = ADDON_POSITION.LEFT,
  className,
  ...props
}: InputAddonGroupProps) {
  const { multiline } = useInputContext();

  return (
    <div
      className={cn(
        "flex items-center gap-2 shrink-0 select-none",
        position === ADDON_POSITION.LEFT ? "mr-2.5" : "ml-2.5",
        multiline &&
          position === ADDON_POSITION.RIGHT &&
          "absolute top-3 right-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
