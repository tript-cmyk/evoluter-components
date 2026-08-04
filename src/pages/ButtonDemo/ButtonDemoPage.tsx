import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { groups, getHoverClass, getActiveClass } from "./demo.data";
import { Button } from "../../components/ui/button";

export default function ButtonDemoPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 p-6 sm:p-12">
      <div className="border-b border-[#222222] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <Link
          to="/inputs"
          className="px-5 py-2.5 bg-[#ABFFC3] text-[#121212] rounded-xl font-bold text-xs hover:opacity-90 transition-opacity inline-block select-none cursor-pointer tracking-wider uppercase shadow-lg shadow-[#ABFFC3]/10"
        >
          Go to Inputs
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {groups.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="bg-[#181818] border border-[#262626] rounded-2xl p-6 flex flex-col justify-between shadow-xl"
          >
            <h3 className="text-md font-bold text-white mb-6 tracking-tight">
              {group.title}
            </h3>

            <div className="grid grid-cols-5 gap-y-4 items-center">
              <div className="col-span-1 text-[10px] uppercase font-bold text-[#555] tracking-wider">
                State
              </div>
              <div className="col-span-1 text-center text-[10px] uppercase font-bold text-[#808080] tracking-wider">
                No Icon
              </div>
              <div className="col-span-1 text-center text-[10px] uppercase font-bold text-[#808080] tracking-wider">
                Left Icon
              </div>
              <div className="col-span-1 text-center text-[10px] uppercase font-bold text-[#808080] tracking-wider">
                Right Icon
              </div>
              <div className="col-span-1 text-center text-[10px] uppercase font-bold text-[#808080] tracking-wider">
                Icon
              </div>

              <div className="col-span-1 text-xs text-[#666] font-semibold">
                Default
              </div>
              <div className="col-span-1 flex justify-center">
                <Button variant={group.variant} size={group.size}>
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  iconPosition="right"
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  iconOnly
                />
              </div>

              <div className="col-span-1 text-xs text-[#666] font-semibold">
                Hover
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  className={getHoverClass(group.variant)}
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  className={getHoverClass(group.variant)}
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  iconPosition="right"
                  className={getHoverClass(group.variant)}
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  iconOnly
                  className={getHoverClass(group.variant)}
                />
              </div>

              <div className="col-span-1 text-xs text-[#666] font-semibold">
                Active
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  className={getActiveClass(group.variant)}
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  className={getActiveClass(group.variant)}
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  iconPosition="right"
                  className={getActiveClass(group.variant)}
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  iconOnly
                  className={getActiveClass(group.variant)}
                />
              </div>

              <div className="col-span-1 text-xs text-[#666] font-semibold">
                Disabled
              </div>
              <div className="col-span-1 flex justify-center">
                <Button variant={group.variant} size={group.size} disabled>
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  disabled
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  iconPosition="right"
                  disabled
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  iconOnly
                  disabled
                />
              </div>

              <div className="col-span-1 text-xs text-[#666] font-semibold">
                Processing
              </div>
              <div className="col-span-1 flex justify-center">
                <Button variant={group.variant} size={group.size} processing>
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  processing
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  iconPosition="right"
                  processing
                >
                  Button
                </Button>
              </div>
              <div className="col-span-1 flex justify-center">
                <Button
                  variant={group.variant}
                  size={group.size}
                  icon={<FiPlus />}
                  iconOnly
                  processing
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
