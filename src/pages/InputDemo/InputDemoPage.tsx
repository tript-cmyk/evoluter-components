import { useState } from "react";
import { FiLock, FiMail, FiStar } from "react-icons/fi";
import Header from "../../components/layout/Header";
import {
  InputNumber,
  InputPassword,
  InputPhone,
  InputSearch,
  InputText,
  InputTextArea,
} from "../../components/ui/input";
import { CHARACTERS_PLACEMENT } from "../../components/ui/input/input.constants";

export default function InputDemoPage() {
  const [value, setValue] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [numVal, setNumVal] = useState("10");

  return (
    <div className="max-w-7xl mx-auto space-y-12 sm:p-12">
      <Header />

      <div className="space-y-8 max-w-xl mx-auto text-left">
        <div className="space-y-6 bg-[#161616] p-8 rounded-xl border border-[#262626]">
          <InputText
            value={value}
            onValueChange={setValue}
            // defaultValue="Hello world"
            label="Email Address (InputText)"
            placeholder="example@domain.com"
            // required
            // clearable={false}
            leftIcon={<FiMail />}
            rightIcon={<FiLock />}
            processing
            // processingMessage="Validating email address"
            // success
            // successMessage="Email address is valid"
            // error
            // errorMessage="Not a valid email address"
            // hint="We'll never share your email with anyone else."
          />

          <InputTextArea
            label="Biography (InputTextArea)"
            placeholder="Tell us about yourself..."
            // required
            maxLength={200}
            characterCounter
            counterPlacement={CHARACTERS_PLACEMENT.TOP_RIGHT}
            error
            // errorMessage="Biography is too long."
          />

          <InputPassword
            label="Security Password (InputPassword)"
            placeholder="Enter password"
            leftIcon={<FiLock />}
          />

          <InputSearch
            label="Quick Search (InputSearch)"
            placeholder="Search documentation..."
            clearable
            // processing
            // processingMessage="Searching"
          />

          <InputPhone
            label="Mobile Number (InputPhone)"
            value={phoneVal}
            onValueChange={setPhoneVal}
            clearable={false}
            hint={phoneVal}
          />

          <InputNumber
            label="Quantity (InputNumber)"
            value={numVal}
            onValueChange={setNumVal}
            min={0}
            max={100}
            success
            successMessage="Quantity is valid"
          />

          <InputText
            label="Favorite item"
            placeholder="Starred value"
            leftIcon={<FiStar />}
            error
            errorMessage="Please choose a favorite item."
          />
        </div>
      </div>
    </div>
  );
}
