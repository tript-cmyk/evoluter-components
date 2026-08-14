interface TestimonialCardProps {
  content: string;
  name: string;
  roleName: string;
  companyName: string;
}

const TestimonialCard = ({
  content,
  name,
  roleName,
  companyName,
}: TestimonialCardProps) => {
  return (
    <div className="sm:[clip-path:polygon(0_0,100%_0,100%_72%,85%_100%,0_100%)] max-w-70 sm:max-w-100 sm:p-8 bg-[#363636] text-white p-4 rounded-2xl">
      <div className="flex flex-col gap-3 items-start">
        <div className="text-[12px]">"{content}"</div>
        <div className="sm:flex sm:gap-2">
          <div className="font-bold text-[14px]">{name}</div>
          <div className="hidden sm:block">&bull;</div>
          <div className="text-[12px] inline-flex items-center gap-1">
            <span>{roleName}</span> of{" "}
            <span className="text-[#FFB77A]">{companyName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
