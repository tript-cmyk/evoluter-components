import { Button, BUTTON_VARIANTS } from "../ui/button";

interface BannerProps {
  title: string;
  description: string;
  buttonText?: string;
  onActionClick?: () => void;
}

const Banner = ({
  title = "Or you can hire entire team",
  description = "The best part? Your new tech team co-pilots your product with our suite of AI to provide increased productivity, reduce expenses and solve complex business problems.",
  buttonText = "Hire entire team",
  onActionClick,
}: BannerProps) => {
  return (
    <div className="flex flex-col gap-6 p-4 items-center max-w-70 sm:max-w-250 sm:flex-row sm:gap-40 sm:p-8 border border-[#141414] rounded-xl hover:bg-[#ABFFC3] duration-300">
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] sm:text-[24px] font-bold">{title}</h2>
        <div className="text-[14px]">{description}</div>
      </div>
      <div className="w-full sm:w-fit">
        <Button
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={() => onActionClick?.()}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
