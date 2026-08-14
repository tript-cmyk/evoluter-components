import { Button, BUTTON_VARIANTS } from "../ui/button";

interface BannerProps {
  title: string;
  description: string;
  onActionClick?: () => void;
  buttonText: string;
}

const Banner = ({
  title = "Or you can hire entire team",
  description = "The best part? Your new tech team co-pilots your product with our suite of AI to provide increased productivity, reduce expenses and solve complex business problems.",
  buttonText = "Hire entire team",
  onActionClick,
}: BannerProps) => {
  return (
    <div className="flex flex-col gap-6 p-4 items-center md:flex-row md:gap-40 md:p-8 border border-[#141414] rounded-xl hover:bg-[#ABFFC3] duration-700">
      <div>
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
      <div>
        <Button variant={BUTTON_VARIANTS.OUTLINE} onClick={() => onActionClick?.()}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
