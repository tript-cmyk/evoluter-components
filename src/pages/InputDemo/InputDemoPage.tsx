import { useState } from "react";
import Header from "../../components/layout/Header";
import {
  ADDON_POSITION,
  CHARACTERS_PLACEMENT,
  FieldDescription,
  InputAddonGroup,
  InputNumber,
  InputPassword,
  InputPhone,
  InputSearch,
  InputText,
  InputTextArea,
} from "../../components/ui/input";
import { FiLock, FiMail, FiStar } from "react-icons/fi";

export default function InputDemoPage() {
  const [phoneVal, setPhoneVal] = useState("");
  const [numVal, setNumVal] = useState("10");

  return (
    <div className="max-w-7xl mx-auto space-y-12 sm:p-12">
      <Header />

      <div className="space-y-8 max-w-xl mx-auto text-left">
        <div className="space-y-6 bg-[#161616] p-8 rounded-xl border border-[#262626]">
          {/* 1. InputText */}
          <div>
            <InputText
              label="Email Address (InputText)"
              placeholder="example@domain.com"
              required
              leftIcon={<FiMail />}
            />
          </div>

          {/* 2. InputTextArea */}
          <div>
            <InputTextArea
              label="Biography (InputTextArea)"
              placeholder="Tell us about yourself..."
              charactersLimit={200}
              charactersPlacement={CHARACTERS_PLACEMENT.TOP_RIGHT}
            />
          </div>

          {/* 3. InputPassword */}
          <div>
            <InputPassword
              label="Security Password (InputPassword)"
              placeholder="Enter password"
              leftIcon={<FiLock />}
            />
          </div>

          {/* 4. InputSearch */}
          <div>
            <InputSearch
              label="Quick Search (InputSearch)"
              placeholder="Search documentation..."
            />
          </div>

          {/* 5. InputPhone */}
          <div>
            <InputPhone
              label="Mobile Number (InputPhone)"
              placeholder="+84 000 000 000"
              value={phoneVal}
              onChange={(e) => setPhoneVal(e.target.value)}
            />
          </div>

          {/* 6. InputNumber */}
          <div>
            <InputNumber
              label="Quantity (InputNumber)"
              value={numVal}
              onChange={(e) => setNumVal(e.target.value)}
              min={0}
              max={100}
            />
          </div>

          {/* 7. InputAddonGroup showing multiple icons/text */}
          <div>
            <InputText
              label="Custom Multi-Addon Group"
              placeholder="username"
              leftIcon={<FiStar />}
              wrapperClassName="pl-0"
            >
              <InputAddonGroup position={ADDON_POSITION.LEFT}>
                <span className="text-xs text-[#808080] bg-[#2a2a2a] px-3 py-1.5 rounded-l-md border-r border-[#333333] select-none">
                  https://
                </span>
              </InputAddonGroup>
            </InputText>
            <FieldDescription>
              This input uses InputAddonGroup to render a static prefix label
              side-by-side with an icon.
            </FieldDescription>
          </div>
        </div>
      </div>
    </div>
  );
}
