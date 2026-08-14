import type { BioCardProps } from "./bio-card.types";
import { bioCardVariants } from "./bio-card.variants";

const BioCard = ({ avatarUrl, name, role, selected }: BioCardProps) => {
  return (
    <div className="rounded-2xl p-0.5 hover:bg-linear-to-r hover:from-[#ABFFC3] hover:to-[#FFB77A] duration-300">
      <div className={bioCardVariants({ selected })}>
        <div className="shrink-0">
          <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex flex-col items-start gap-0.5">
          <div className="font-bold text-[16px]">{name}</div>
          <div className="text-[14px]">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default BioCard;
