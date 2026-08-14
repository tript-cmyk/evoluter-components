import type { ReactNode } from "react";

interface StepCardBigProps {
  labelStep: string;
  title: string;
  description: string;
  image: ReactNode;
}

const StepCardBig = ({
  labelStep,
  title,
  description,
  image
}: StepCardBigProps) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row rounded-lg bg-[#141414] text-white p-4 md:max-w-280 md:p-10">
      <div className="flex flex-col items-start gap-4 md:w-1/2">
        <div className="px-3 py-1.5 bg-[#FFB77A] text-[#141414] font-semibold rounded-full text-sm mb-5">{labelStep}</div>
        <div className="text-xl font-bold md:text-4xl">{title}</div>
        <div className="text-xs md:text-base">{description}</div>
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2 shrink-0">
        {image}
      </div>
    </div>
  )
}

export default StepCardBig