import { type ReactNode } from "react";

interface SimpleCardProps {
  icon: ReactNode;
  title: string;
}

const SimpleCard = ({ icon, title }: SimpleCardProps) => {
  return (
    <div className="max-w-82 flex flex-col items-center gap-2 px-10 py-2 rounded-lg bg-[#262626] text-white sm:px-12 sm:py-6 sm:max-w-80">
      <div className="w-15 h-15 sm:w-20 sm:h-20 ">{icon}</div>
      <h3 className="text-lg font-bold text-[20px] sm:text-[24px]">{title}</h3>
    </div>
  );
};

export default SimpleCard;
