import type { ReactNode } from "react";

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({
  icon,
  title = "Tech services",
  description = "Have us build your software solutions",
}: ServiceCardProps) => {
  return (
    <div className="rounded-2xl p-0.5 hover:bg-linear-to-r hover:from-[#ABFFC3] hover:to-[#FFB77A] duration-300">
      <div className="w-60 sm:w-70 bg-[#262626] text-white rounded-2xl px-4 py-2 flex flex-col gap-1 items-center sm:px-8 sm:py-4 hover:bg-[#363636] duration-300">
        <div className="w-25 h-25 sm:w-30 sm:h-30">
          {icon ? (
            <img src="/images/service-card-gear.png" alt="Default Icon" />
          ) : (
            icon
          )}
        </div>
        <div className="font-bold text-[20px] sm:text-[24px]">{title}</div>
        <div className="text-[14px] text-center font-thin">{description}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
