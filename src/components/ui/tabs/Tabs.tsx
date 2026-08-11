import { useState } from "react";
import { TAB_ICON_POSITION } from "./tabs.constants";
import type { TabsProps } from "./tabs.types";
import {
  getInitialTabValue,
  getTabItemPosition,
  shouldShowLeftIcon,
  shouldShowRightIcon,
} from "./tabs.utils";
import { tabItemVariants } from "./tabs.variants";
import { cn } from "../../../lib/cn";

const renderIcon = (icon: React.ReactNode) => {
  return <span className="h-3 w-3 shrink-0 text-current">{icon}</span>;
};

const Tabs = ({
  items,
  value,
  defaultValue,
  onValueChange,
  iconPosition = TAB_ICON_POSITION.NONE,
  disabled = false,
  id,
  name,
  title,
}: TabsProps) => {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = useState(getInitialTabValue(items, value, defaultValue));
  const currentValue = isControlled ? value : localValue;

  const handleChange = (nextValue: string) => {
    if (!isControlled) {
      setLocalValue(nextValue);
    }
    onValueChange?.(nextValue);
  };

  return (
    <div
      id={id}
      title={title}
      className="inline-flex w-fit items-center gap-1.5 overflow-hidden rounded-md p-1.5 bg-[#0D0D0D] text-white"
    >
      {items.map((item, index) => {
        const itemDisabled = disabled || !!item.disabled;
        const active = currentValue === item.value;
        const position = getTabItemPosition(index, items.length);
        const hasIcon = !!item.icon;

        return (
          <button
            key={item.value}
            name={name}
            value={item.value}
            disabled={itemDisabled}
            onClick={() => handleChange(item.value)}
            className={tabItemVariants({
              position,
              active,
              disabled: itemDisabled,
            })}
          >
            {hasIcon && shouldShowLeftIcon(iconPosition) && renderIcon(item.icon)}

            {item.label && (
              <span
                className={cn(
                  iconPosition === TAB_ICON_POSITION.ONLY && "sr-only",
                )}
              >
                {item.label}
              </span>
            )}

            {hasIcon && shouldShowRightIcon(iconPosition) && renderIcon(item.icon)}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
