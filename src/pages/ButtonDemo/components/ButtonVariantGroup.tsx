import { FiPlus } from "react-icons/fi";
import { Button } from "../../../components/ui/button";
import { getHoverClass, getActiveClass } from "../demo.data";
import type { GroupSpec } from "../demo.data";

interface ButtonVariantGroupProps {
  group: GroupSpec;
}

export function ButtonVariantGroup({ group }: ButtonVariantGroupProps) {
  return (
    <div className="bg-[#181818] border border-[#262626] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
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
          <Button variant={group.variant} size={group.size} icon={<FiPlus />}>
            Button
          </Button>
        </div>
        <div className="col-span-1 flex justify-center">
          <Button variant={group.variant} size={group.size} icon={<FiPlus />}>
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
  );
}
