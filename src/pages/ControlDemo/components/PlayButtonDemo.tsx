import {
  PLAY_BUTTON_SIZE,
  PlayButton,
} from "../../../components/ui/controls/play-button";

const PlayButtonDemo = () => {
  return (
    <div className="bg-white text-black px-4 py-6 rounded-md">
      <div className="grid grid-cols-4 gap-6 items-center">
        <div className="col-span-1 font-semibold">L</div>
        <div className="col-span-1 font-semibold">M</div>
        <div className="col-span-1 font-semibold">S</div>
        <div className="col-span-1 font-semibold">XS</div>

        <PlayButton size={PLAY_BUTTON_SIZE.L} />
        <PlayButton size={PLAY_BUTTON_SIZE.M} />
        <PlayButton size={PLAY_BUTTON_SIZE.S} />
        <PlayButton size={PLAY_BUTTON_SIZE.XS} />
      </div>
    </div>
  );
};

export default PlayButtonDemo;
