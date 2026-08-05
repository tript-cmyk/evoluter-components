import { forwardRef } from "react";
import type { PlayButtonProps } from "./play-button.types";
import {
  playButtonIconVariants,
  playButtonVariants,
} from "./play-button.variants";
import { FaPlay } from "react-icons/fa";

const PlayButton = forwardRef<HTMLButtonElement, PlayButtonProps>(
  ({ size, ...props }, ref) => {
    return (
      <div
        className="inline-flex
          rounded-full
          w-fit
          p-px
          transition-all
          hover:bg-linear-to-r
          hover:from-[#FFB77A]
          hover:to-[#ABFFC3]"
      >
        <button ref={ref} className={playButtonVariants({ size })} {...props}>
          <FaPlay className={playButtonIconVariants({ size })} />
        </button>
      </div>
    );
  },
);

export default PlayButton;
