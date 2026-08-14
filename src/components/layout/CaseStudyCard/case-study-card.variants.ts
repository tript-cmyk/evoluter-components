import { cva } from "class-variance-authority";

export const caseStudyCardVariants = cva("max-w-70 sm:max-w-85 sm:p-6 p-4 flex flex-col items-start rounded-2xl gap-2", {
    variants: {
        tone: {
            black: "bg-[#0D0D0D] text-white",
            orange: "bg-[#FFB77A] text-black",
            mint: "bg-[#ABFFC3] text-black",
            grey: "bg-[#F0F0F0] text-black"
        }
    },
    defaultVariants: {
        tone: "black"
    }
})