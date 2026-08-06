import * as React from "react";
import { FiLoader, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { cn } from "../../../../../lib/cn";
import { INPUT_STATUS } from "../../input.types";
import { useInputContext } from "./InputRoot";

export interface FieldDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: INPUT_STATUS;
}

export function FieldDescription({
  children,
  className,
  status: statusProp,
  ...props
}: FieldDescriptionProps) {
  const context = useInputContext();
  const status = statusProp ?? context.status;

  let textClass = "text-[#808080]";
  let icon: React.ReactNode = null;

  if (status === INPUT_STATUS.SUCCESS) {
    textClass = "text-[#ABFFC3]";
    icon = <FiCheckCircle className="w-3.5 h-3.5 shrink-0" />;
  } else if (status === INPUT_STATUS.ERROR) {
    textClass = "text-[#FF5C5C]";
    icon = <FiAlertTriangle className="w-3.5 h-3.5 shrink-0" />;
  } else if (status === INPUT_STATUS.PROCESSING) {
    textClass = "text-[#808080]";
    icon = (
      <FiLoader className="w-3.5 h-3.5 shrink-0 animate-spin text-[#ABFFC3]" />
    );
  }

  if (!children) return null;

  return (
    <div
      className={cn(
        "text-[10px] font-medium tracking-wide flex items-center gap-1.5 select-none mt-1",
        textClass,
        className,
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}
