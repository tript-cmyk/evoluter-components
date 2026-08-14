import { IoIosArrowRoundForward } from "react-icons/io";
import {
  Button,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  ICON_POSITION,
} from "../ui/button";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { Tag, TAG_VARIANT } from "../ui/tag";

interface TeamMemberProps {
  avatarUrl: string;
  name: string;
  role: string;
  skills: string[];
  toolNames: string[];
  previousCompany: string;
  onActionClick?: () => void;
}

const TeamMember = ({
  avatarUrl = "",
  name = "",
  role = "",
  skills = [],
  toolNames = [],
  previousCompany = "",
  onActionClick,
}: TeamMemberProps) => {
  return (
    <div className="flex flex-col gap-3 max-w-82 md:max-w-90 bg-[#141414] text-white p-4 rounded-2xl hover:bg-[#262626] duration-700">
      <div className="flex items-center justify-center">
        <img
          src={avatarUrl}
          alt={name}
          className="shrink-0 w-74 h-60 md:w-80 md:h-70 rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-3 items-start">
        <div className="flex flex-col items-start gap-1">
          <div className="font-bold text-[18px] md:text-[24px]">{name}</div>
          <div className="text-[#FFB77A] text-[16px]">{role}</div>
        </div>
        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex items-center gap-2 text-[14px]">
            <MdOutlineRocketLaunch />
            Skills
          </div>

          <div className="scrollbar-none w-full overflow-x-auto">
            <div className="w-max whitespace-nowrap text-[16px]">
              {skills.join(" • ")}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex items-center gap-2 text-[14px]">
            <FiTool size={16} />
            Tools
          </div>

          <div className="scrollbar-none w-full overflow-x-auto">
            <div className="flex w-max gap-2">
              {toolNames.map((tool) => (
                <Tag key={tool} label={tool} variant={TAG_VARIANT.GLASS} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-400"></hr>
      <div className="flex justify-between text-[14px]">
        <div className="flex flex-col items-start">
          <div>Previously at</div>
          <div>{previousCompany}</div>
        </div>
        <div>
          <Button
            variant={BUTTON_VARIANTS.SECONDARY}
            icon={<IoIosArrowRoundForward size={30} />}
            iconPosition={ICON_POSITION.RIGHT}
            onClick={() => onActionClick?.()}
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
