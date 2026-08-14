import { type ReactNode } from "react";

interface SimpleCardProps {
  icon: ReactNode;
  title: string;
}

const SimpleCard = ({ icon, title }: SimpleCardProps) => {
  return (
    <div className="max-w-82 md:max-w-90 flex flex-col items-center gap-2 px-10 py-2 md:px-20 md:py-6 rounded-lg bg-[#262626] text-white">
      <div className="w-15 h-15 md:w-20 md:h-20 ">{icon}</div>
      <h3 className="text-lg font-bold text-[24px] md:text-[28px]">{title}</h3>
    </div>
  );
};

export default SimpleCard;
