import { Button, BUTTON_VARIANTS } from "../ui/button";
import { Tag, TAG_VARIANT } from "../ui/tag";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  tags: string[];
  labelButton?: string;
  onActionClick?: () => void;
}

const ProjectCard = ({
  imageUrl = "",
  title = "",
  tags = [],
  labelButton = "View Project",
  onActionClick,
}: ProjectCardProps) => {
  return (
    <div className="rounded-2xl p-px hover:bg-linear-to-r hover:from-[#ABFFC3] hover:to-[#FFB77A] duration-300">
      <div className="bg-[#141414] text-white rounded-2xl p-4 flex flex-col gap-4 max-w-70 sm:max-w-80 hover:bg-[#262626]">
        <div className="shrink-0 w-full h-48 rounded-md overflow-hidden">
          <img
            src={imageUrl}
            alt="Project Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-[20px] font-bold">{title}</div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag variant={TAG_VARIANT.GLASS} key={tag} label={tag} />
            ))}
          </div>
        </div>
        <Button
          variant={BUTTON_VARIANTS.SECONDARY}
          onClick={() => onActionClick?.()}
        >
          {labelButton}
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
