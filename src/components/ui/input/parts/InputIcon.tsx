import { useInputContext } from "../context/input.context";
import { ADDON_POSITION } from "../input.constants";
import { cn } from "../../../../lib/cn";
import type { InputIconGroupProps } from "../input.types";

export function InputIconGroup({
  children,
  position = ADDON_POSITION.LEFT,
}: InputIconGroupProps) {
  const { multiline } = useInputContext();

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 text-[#808080] shrink-0 transition-colors select-none",
        position === ADDON_POSITION.LEFT ? "mr-2.5" : "ml-2.5",
        multiline && position === ADDON_POSITION.RIGHT && "absolute top-3 right-3"
      )}
    >
      {children}
    </div>
  );
}
