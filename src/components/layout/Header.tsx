import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b border-[#222222] pb-6 flex justify-start gap-4">
      <Link
        to="/buttons"
        className="px-5 py-2.5 bg-[#ABFFC3] text-[#121212] rounded-xl font-bold text-xs hover:opacity-90 transition-opacity inline-block select-none cursor-pointer tracking-wider uppercase shadow-lg shadow-[#ABFFC3]/10"
      >
        Buttons
      </Link>
      <Link
        to="/inputs"
        className="px-5 py-2.5 bg-[#ABFFC3] text-[#121212] rounded-xl font-bold text-xs hover:opacity-90 transition-opacity inline-block select-none cursor-pointer tracking-wider uppercase shadow-lg shadow-[#ABFFC3]/10"
      >
        Inputs
      </Link>
      <Link
        to="/controls"
        className="px-5 py-2.5 bg-[#ABFFC3] text-[#121212] rounded-xl font-bold text-xs hover:opacity-90 transition-opacity inline-block select-none cursor-pointer tracking-wider uppercase shadow-lg shadow-[#ABFFC3]/10"
      >
        Controls
      </Link>
      <Link
        to="/tabs"
        className="px-5 py-2.5 bg-[#ABFFC3] text-[#121212] rounded-xl font-bold text-xs hover:opacity-90 transition-opacity inline-block select-none cursor-pointer tracking-wider uppercase shadow-lg shadow-[#ABFFC3]/10"
      >
        Tabs
      </Link>
      <Link
        to="/sliders"
        className="px-5 py-2.5 bg-[#ABFFC3] text-[#121212] rounded-xl font-bold text-xs hover:opacity-90 transition-opacity inline-block select-none cursor-pointer tracking-wider uppercase shadow-lg shadow-[#ABFFC3]/10"
      >
        Sliders
      </Link>
      <Link
        to="/tags"
        className="px-5 py-2.5 bg-[#ABFFC3] text-[#121212] rounded-xl font-bold text-xs hover:opacity-90 transition-opacity inline-block select-none cursor-pointer tracking-wider uppercase shadow-lg shadow-[#ABFFC3]/10"
      >
        Tags
      </Link>
    </div>
  );
};

export default Header;
