import { cn } from "../../lib/cn";

interface CaseStudyCardProps {
  imageUrl: string;
  title: string;
  selected?: boolean;
}

const CaseStudyCard = ({
  imageUrl,
  title = "Developer",
  selected,
}: CaseStudyCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-0.5 hover:bg-linear-to-r hover:from-[#ABFFC3] hover:to-[#FFB77A] duration-300",
        selected &&
          "hover:bg-linear-to-r hover:from-[#ABFFC3] hover:to-[#ABFFC3]",
      )}
    >
      <div
        className={cn(
          "w-full flex flex-col items-center gap-2 bg-[#262626] text-white rounded-2xl p-2 sm:px-8 sm:py-6 hover:bg-[#363636] duration-300",
          selected && "bg-[#0D0D0D]",
        )}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="text-[16px] font-bold">{title}</div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
