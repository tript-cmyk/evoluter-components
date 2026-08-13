import { Button, BUTTON_VARIANTS } from "../ui/button";

interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
}

const Banner = (props: BannerProps) => {
  const { title, description, buttonText } = props;

  return (
    <div className="flex flex-col gap-6 p-4 items-center md:flex-row md:gap-40 md:p-8 border border-[#141414] rounded-xl hover:bg-[#ABFFC3] duration-700">
      <div>
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
      <div>
        <Button variant={BUTTON_VARIANTS.OUTLINE}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default Banner;
