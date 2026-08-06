import { cn } from "../../../../lib/cn";
import type { PlayButtonProps } from "./play-button.types";
import {
  playButtonIconVariants,
  playButtonVariants,
} from "./play-button.variants";
import { FaPlay } from "react-icons/fa";

const PlayButton = ({ size, className, ...props }: PlayButtonProps) => {
  return (
    <div className="inline-flex rounded-full w-fit p-px hover:bg-linear-to-r hover:from-[#FFB77A] hover:to-[#ABFFC3] active:bg-linear-to-r  active:from-[#fba153] active:to-[#79ff9f]">
      <button
        className={cn(playButtonVariants({ size }), className)}
        {...props}
      >
        <FaPlay className={playButtonIconVariants({ size })} />
      </button>
    </div>
  );
};

export default PlayButton;
