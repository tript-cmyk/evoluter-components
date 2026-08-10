import { useMemo, useState } from "react";
import { Radio } from "../../../components/ui/controls/radio";

const PAYMENT_OPTIONS = [
  { label: "Credit card", value: "credit-card" },
  { label: "Bank transfer", value: "bank-transfer" },
  { label: "E-wallet", value: "e-wallet" },
  { label: "Cash", value: "cash", disabled: true },
];

const RadioDemo = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const selectedLabel = useMemo(
    () =>
      PAYMENT_OPTIONS.find((option) => option.value === paymentMethod)?.label,
    [paymentMethod],
  );

  return (
    <div className="mx-auto w-full max-w-xl rounded-lg bg-[#181818] p-6 text-left">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">Payment method</h2>
        <p className="text-sm font-medium text-[#B3B3B3]">
          Selected value:{" "}
          <span className="text-[#ABFFC3]">{paymentMethod}</span>
        </p>
      </div>

      <div className="mt-6">
        <Radio
          name="payment-method"
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          options={PAYMENT_OPTIONS}
        />
      </div>

      <div className="mt-6 rounded-md bg-[#262626] p-4">
        <div className="text-sm font-semibold text-white">User selected</div>
        <div className="mt-2 text-sm text-[#E5E5E5]">
          {selectedLabel ?? "No payment method"}
        </div>
      </div>
    </div>
  );
};

export default RadioDemo;
