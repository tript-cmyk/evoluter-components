import { cva } from "class-variance-authority";

export const expertCardVariants = cva("flex flex-col items-center gap-2 w-74 md:w-90 rounded-lg px-6 py-8", {
    variants: {
        tone: {
            black: "bg-[#0D0D0D] text-white hover:bg-[#363636]",
            orange: "bg-[#FFB77A] text-black hover:bg-[#F19444]",
            mint: "bg-[#ABFFC3] text-black hover:bg-[#74E494]",
        }
    },
    defaultVariants: {
        tone: "black"
    }
})