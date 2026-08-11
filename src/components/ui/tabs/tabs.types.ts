import type { ReactNode } from "react";
import type { TAB_ICON_POSITION } from "./tabs.constants";

export interface TabItem {
  label?: ReactNode;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  iconPosition?: TAB_ICON_POSITION;
  disabled?: boolean;
  id?: string;
  name?: string;
  title?: string;
}
