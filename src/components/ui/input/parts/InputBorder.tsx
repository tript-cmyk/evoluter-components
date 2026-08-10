import { inputBorderVariants } from "../input.variants";
import { useInputContext } from "../context/input.context";
import type { InputFrameProps } from "../input.types";

export function InputBorder({ children }: InputFrameProps) {
  const { status, multiline, value } = useInputContext();

  return (
    <div
      className={inputBorderVariants({
        status,
        multiline,
        filled: value.length > 0,
      })}
    >
      {children}
    </div>
  );
}
