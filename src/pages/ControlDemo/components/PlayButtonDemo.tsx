import { useState } from "react";
import {
  PLAY_BUTTON_SIZE,
  PlayButton,
} from "../../../components/ui/controls/play-button";

const PlayButtonDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mx-auto w-full max-w-xl rounded-lg bg-[#181818] p-6 text-left">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">Playback</h2>
        <p className="text-sm font-medium text-[#B3B3B3]">
          Current state:{" "}
          <span className="text-[#ABFFC3]">
            {isPlaying ? "playing" : "paused"}
          </span>
        </p>
      </div>

      <div className="mt-8 flex items-center gap-5">
        <PlayButton
          size={PLAY_BUTTON_SIZE.L}
          active={isPlaying}
          onClick={() => setIsPlaying((current) => !current)}
        />

        <div className="text-sm text-[#E5E5E5]">
          {isPlaying ? "Click to pause" : "Click to play"}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <PlayButton size={PLAY_BUTTON_SIZE.M} />
        <PlayButton size={PLAY_BUTTON_SIZE.S} />
        <PlayButton size={PLAY_BUTTON_SIZE.XS} />
        <PlayButton size={PLAY_BUTTON_SIZE.S} disabled />
        <PlayButton size={PLAY_BUTTON_SIZE.S} processing />
      </div>
    </div>
  );
};

export default PlayButtonDemo;
