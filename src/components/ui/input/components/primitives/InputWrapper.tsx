import * as React from "react";
import { cn } from "../../../../../lib/cn";
import { useInputContext } from "./InputRoot";
import { inputWrapperVariants } from "../../input.variants";

export interface InputWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export function InputWrapper({
  children,
  className,
  ...props
}: InputWrapperProps) {
  const { status, multiline } = useInputContext();

  return (
    <div
      className={cn(inputWrapperVariants({ status, multiline }), className)}
      {...props}
    >
      {children}
    </div>
  );
}
