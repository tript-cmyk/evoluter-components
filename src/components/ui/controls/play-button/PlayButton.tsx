import { FiLoader } from "react-icons/fi";
import { FaPause, FaPlay } from "react-icons/fa";
import { cn } from "../../../../lib/cn";
import {
  PLAY_BUTTON_SIZE,
  PLAY_BUTTON_STATE,
} from "./play-button.constants";
import type { PlayButtonProps } from "./play-button.types";
import {
  playButtonIconVariants,
  playButtonHaloVariants,
  playButtonVariants,
} from "./play-button.variants";

const PlayButton = ({
  size = PLAY_BUTTON_SIZE.S,
  disabled = false,
  processing = false,
  active = false,
  state = PLAY_BUTTON_STATE.DEFAULT,
  id,
  name,
  value,
  title,
  onClick,
}: PlayButtonProps) => {
  const isDisabled = disabled || processing;

  return (
    <span
      className={playButtonHaloVariants({
        state,
        disabled: isDisabled,
      })}
    >
      <button
        id={id}
        name={name}
        value={value}
        title={title}
        disabled={isDisabled}
        onClick={onClick}
        className={playButtonVariants({
          size,
          active,
          disabled,
          processing,
        })}
      >
        {processing ? (
          <FiLoader
            className={cn(playButtonIconVariants({ size }), "animate-spin")}
          />
        ) : active ? (
          <FaPause className={playButtonIconVariants({ size })} />
        ) : (
          <FaPlay className={playButtonIconVariants({ size })} />
        )}
      </button>
    </span>
  );
};

export default PlayButton;
