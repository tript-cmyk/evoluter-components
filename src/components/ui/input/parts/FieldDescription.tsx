import { FiAlertTriangle, FiCheckCircle, FiLoader } from "react-icons/fi";
import { fieldDescriptionVariants } from "../input.variants";
import { useInputContext } from "../context/input.context";
import { INPUT_STATUS } from "../input.constants";

export function getFieldDescriptionIcon(fieldDescriptionStatus: INPUT_STATUS) {
   const icon =
    fieldDescriptionStatus === INPUT_STATUS.PROCESSING ? (
      <FiLoader className="w-3.5 h-3.5 shrink-0 animate-spin text-[#ABFFC3]" />
    ) : fieldDescriptionStatus === INPUT_STATUS.SUCCESS ? (
      <FiCheckCircle className="w-3.5 h-3.5 shrink-0" />
    ) : fieldDescriptionStatus === INPUT_STATUS.ERROR ? (
      <FiAlertTriangle className="w-3.5 h-3.5 shrink-0" />
    ) : null;
    return icon;
}

export function FieldDescription() {
  const { fieldDescriptionStatus, message } = useInputContext();

  if (!message) return null;

  return (
    <div className={fieldDescriptionVariants({ status: fieldDescriptionStatus })}>
      {getFieldDescriptionIcon(fieldDescriptionStatus)}
      <span>{message}</span>
    </div>
  );
}
