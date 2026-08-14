import { IoIosArrowRoundForward } from "react-icons/io";
import { cn } from "../../../lib/cn";
import { Button, ICON_POSITION } from "../../ui/button";
import { Radio } from "../../ui/controls/radio";
import {
  defaultOptions,
  getDefaultValue,
  PRICING_CARD_TONE,
} from "./pricing-card.constants";
import type { PricingCardProps } from "./pricing-card.types";
import {
  pricingCardDividerVariants,
  pricingCardVariants,
} from "./pricing-card.variants";
import { getButtonVariant } from "./pricing-card.utils";
import { RADIO_DIRECTION } from "../../ui/controls/radio/radio.constants";

export function PricingCard({
  tone = PRICING_CARD_TONE.MINT,
  title = "Starting Out",
  price = "$0-$20K",
  description = "What superheroes does your team need? Select one or more options.",
  options = defaultOptions,
  value,
  defaultValue,
  onChangeValue,
  actionLabel = "Get started",
  actionIcon = <IoIosArrowRoundForward size={22} />,
  onActionClick,
  disabled = false,
  className,
  name,
}: PricingCardProps) {
  return (
    <article className={cn(pricingCardVariants({ tone, disabled }), className)}>
      <div className="flex flex-col gap-4">
        <h3 className="text-base font-bold">{title}</h3>
        <div className={pricingCardDividerVariants({ tone })} />
        <p className="text-xl md:text-2xl  font-bold tracking-normal">
          {price}
        </p>
      </div>

      <p className="mt-4 text-xs font-semibold">{description}</p>

      <Radio
        className="mt-3"
        direction={RADIO_DIRECTION.VERTICAL}
        name={name}
        options={options}
        value={value}
        defaultValue={defaultValue ?? getDefaultValue(options)}
        disabled={disabled}
        onValueChange={onChangeValue}
      />

      <div className="mt-6">
        <Button
          variant={getButtonVariant(tone)}
          icon={actionIcon}
          iconPosition={ICON_POSITION.RIGHT}
          disabled={disabled}
          onClick={() => onActionClick?.()}
        >
          {actionLabel}
        </Button>
      </div>
    </article>
  );
}

export default PricingCard;
