import { FiPlus } from "react-icons/fi";
import Header from "../../components/layout/Header";
import {
  Button,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "../../components/ui/button";

export default function ButtonDemoPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 p-6 sm:p-12">
      <Header />

      <div className="flex gap-2 items-center justify-center">
        <Button
          variant={BUTTON_VARIANTS.DEFAULT}
          size={BUTTON_SIZES.SM}
          icon={<FiPlus />}
          // iconPosition={ICON_POSITION.RIGHT}
          // processing
          // disabled
        >
          Button
        </Button>
      </div>
    </div>
  );
}
