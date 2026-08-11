import { useState } from "react";
import Header from "../../components/layout/Header";
import { Slider } from "../../components/ui/slider";

const SlidersDemoPage = () => {
  const [sound, setSound] = useState(0);

    console.log(sound);
    

  return (
    <div>
      <div className="max-w-7xl mx-auto space-y-12 sm:p-12">
        <Header />

        <div className="mx-auto w-full max-w-3xl rounded-lg bg-black p-8 text-white">
          <h2 className="mb-2">Sliders</h2>
          <Slider
            className="w-100"
            value={sound}
            onValueChange={(value) => setSound(value)}
            min={0}
            max={100}
            step={10}
            // defaultValue={0}
            // onValueChange={(value) => console.log("Slider Value:", value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SlidersDemoPage;
