import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { INPUT_NUMBER_DIRECTION } from "../input.constants";
import type { NumberStepperProps } from "../input.types";

export function NumberStepper({ onStep }: NumberStepperProps) {
  return (
    <div className="flex flex-col border border-[#333333] rounded-md overflow-hidden bg-[#262626]">
      <button
        type="button"
        onClick={() => onStep(INPUT_NUMBER_DIRECTION.UP)}
        className="flex items-center justify-center px-1 py-0.5 text-[#808080] hover:text-white hover:bg-[#333333] transition-colors border-b border-[#333333] focus:outline-none cursor-pointer"

      >
        <FiChevronUp className="w-3 h-3" />
      </button>
      <button
        type="button"
        onClick={() => onStep(INPUT_NUMBER_DIRECTION.DOWN)}
        className="flex items-center justify-center px-1 py-0.5 text-[#808080] hover:text-white hover:bg-[#333333] transition-colors focus:outline-none cursor-pointer"
      >
        <FiChevronDown className="w-3 h-3" />
      </button>
    </div>
  );
}
