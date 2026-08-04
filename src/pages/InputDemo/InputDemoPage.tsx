import { useState } from "react";
import { Input } from "../../components/ui/input";
import { FiStar, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  INITIAL_INTERACTIVE_VAL,
  INITIAL_TEL_VAL,
  INITIAL_PW_VAL,
  INITIAL_MULTI_VAL,
  INPUT_TABS,
} from "./demo.data";
import type { InputTab } from "./demo.data";

export default function InputDemoPage() {
  const [activeTab, setActiveTab] = useState<InputTab>("simple");

  const [interactiveVal, setInteractiveVal] = useState(INITIAL_INTERACTIVE_VAL);
  const [telVal, setTelVal] = useState(INITIAL_TEL_VAL);
  const [pwVal, setPwVal] = useState(INITIAL_PW_VAL);
  const [multiVal, setMultiVal] = useState(INITIAL_MULTI_VAL);

  return (
    <div className="max-w-7xl mx-auto space-y-12 p-6 sm:p-12">
      <div className="mb-10 border-b border-[#222222] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex-1">
          <Link
            to="/buttons"
            className="px-5 py-2.5 bg-[#ABFFC3] text-[#121212] rounded-xl font-bold text-xs hover:opacity-90 transition-opacity inline-block select-none cursor-pointer tracking-wider uppercase shadow-lg shadow-[#ABFFC3]/10"
          >
            Go to Buttons
          </Link>
        </div>

        <div className="flex bg-[#1E1E1E] p-1 rounded-lg border border-[#2E2E2E] gap-1 shrink-0 self-start md:self-auto">
          {INPUT_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all capitalize select-none cursor-pointer ${
                activeTab === tab.value
                  ? "bg-[#ABFFC3] text-[#121212] shadow"
                  : "text-[#808080] hover:text-[#FFF]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTab === "simple" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                Simple Input States
              </h2>
              <p className="text-xs text-[#808080] mb-6">
                Demonstrates Simple Input variations across states and icon
                alignments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Columns headers */}
              <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
                No Icon
              </div>
              <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
                Left Icon
              </div>
              <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
                Right Icon
              </div>
              <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
                Left & Right Icon
              </div>

              {/* Default */}
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                rightIcon={<FiStar />}
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
              />

              {/* Active / Focus (Demonstration) */}
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                status="active"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
                status="active"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                rightIcon={<FiStar />}
                status="active"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
                status="active"
              />

              {/* Active Filled */}
              <Input
                label="Description (optional)"
                value="Placeholder|autocomplete"
                required
                status="active"
              />
              <Input
                label="Description (optional)"
                value="Placeholder|autocomplete"
                required
                leftIcon={<FiStar />}
                status="active"
              />
              <Input
                label="Description (optional)"
                value="Placeholder|autocomplete"
                required
                rightIcon={<FiStar />}
                status="active"
              />
              <Input
                label="Description (optional)"
                value="Placeholder|autocomplete"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
                status="active"
              />

              {/* Filled */}
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                leftIcon={<FiStar />}
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                rightIcon={<FiStar />}
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
              />

              {/* Processing */}
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                processing="Processing"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
                processing="Processing"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                rightIcon={<FiStar />}
                processing="Processing"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
                processing="Processing"
              />

              {/* Processing Filled */}
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                processing="Processing"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                leftIcon={<FiStar />}
                processing="Processing"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                rightIcon={<FiStar />}
                processing="Processing"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
                processing="Processing"
              />

              {/* Disabled */}
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                disabled
                hint="Hint"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
                disabled
                hint="Hint"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                rightIcon={<FiStar />}
                disabled
                hint="Hint"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
                disabled
                hint="Hint"
              />

              {/* Disabled Filled */}
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                disabled
                hint="Hint"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                leftIcon={<FiStar />}
                disabled
                hint="Hint"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                rightIcon={<FiStar />}
                disabled
                hint="Hint"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
                disabled
                hint="Hint"
              />

              {/* Success */}
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                success="Success"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
                success="Success"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                rightIcon={<FiStar />}
                success="Success"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
                success="Success"
              />

              {/* Success Filled */}
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                success="Success"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                leftIcon={<FiStar />}
                success="Success"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                rightIcon={<FiStar />}
                success="Success"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
                success="Success"
              />

              {/* Error */}
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                error="Error message"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
                error="Error message"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                rightIcon={<FiStar />}
                error="Error message"
              />
              <Input
                label="Description (optional)"
                placeholder="Placeholder"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
                error="Error message"
              />

              {/* Error Filled */}
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                error="Error message"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                leftIcon={<FiStar />}
                error="Error message"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                rightIcon={<FiStar />}
                error="Error message"
              />
              <Input
                label="Description (optional)"
                value="Placeholder"
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
                error="Error message"
              />
            </div>
          </div>
        )}

        {/* ================= MULTILINE INPUT GRID ================= */}
        {activeTab === "multiline" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                Multiline Input States
              </h2>
              <p className="text-xs text-[#808080] mb-6">
                Demonstrates textarea multiline inputs with character limits
                inside (symbols show) or outside (symbols hide).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center font-semibold text-xs text-[#808080] mb-2">
                Symbols Show (Bottom Left Placement)
              </div>
              <div className="text-center font-semibold text-xs text-[#808080] mb-2">
                Symbols Hide (Top Right Placement)
              </div>

              {/* Default */}
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="bottom-left"
                hint="Hint"
              />
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="top-right"
                hint="Hint"
              />

              {/* Active */}
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="bottom-left"
                status="active"
                hint="Hint"
              />
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="top-right"
                status="active"
                hint="Hint"
              />

              {/* Active Filled */}
              <Input
                multiline
                label="Description"
                value={multiVal}
                onChange={(e) => setMultiVal(e.target.value)}
                symbolsLimit={1200}
                symbolsPlacement="bottom-left"
                status="active"
                hint="Hint"
                clearable
              />
              <Input
                multiline
                label="Description"
                value={multiVal}
                onChange={(e) => setMultiVal(e.target.value)}
                symbolsLimit={1200}
                symbolsPlacement="top-right"
                status="active"
                hint="Hint"
                clearable
              />

              {/* Processing */}
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="bottom-left"
                processing="Processing"
              />
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="top-right"
                processing="Processing"
              />

              {/* Disabled */}
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="bottom-left"
                disabled
                hint="Hint"
              />
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="top-right"
                disabled
                hint="Hint"
              />

              {/* Error */}
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="bottom-left"
                error="Error message"
              />
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="top-right"
                error="Error message"
              />

              {/* Success */}
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="bottom-left"
                success="Success"
              />
              <Input
                multiline
                label="Description"
                placeholder="Your message"
                symbolsLimit={1200}
                symbolsPlacement="top-right"
                success="Success"
              />
            </div>
          </div>
        )}

        {/* ================= SEARCH & PHONE NUMBER ================= */}
        {activeTab === "special" && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Search Inputs Column */}
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Search Input
                </h2>
                <p className="text-xs text-[#808080] mb-6">
                  Built-in search icon on left and clear button on right when
                  filled.
                </p>
                <div className="space-y-4">
                  <Input
                    type="search"
                    label="Description"
                    placeholder="Search"
                    hint="Hint"
                  />
                  <Input
                    type="search"
                    label="Description"
                    placeholder="Search"
                    status="active"
                    hint="Hint"
                  />
                  <Input
                    type="search"
                    label="Description"
                    value={interactiveVal}
                    onChange={(e) => setInteractiveVal(e.target.value)}
                    hint="Hint"
                  />
                  <Input
                    type="search"
                    label="Description"
                    placeholder="Search"
                    disabled
                    hint="Hint"
                  />
                  <Input
                    type="search"
                    label="Description"
                    value="Your text"
                    disabled
                    hint="Hint"
                  />
                </div>
              </div>

              {/* Phone Inputs Column */}
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Phone Number Input
                </h2>
                <p className="text-xs text-[#808080] mb-6">
                  Interactive country flag drop-down and input mask placeholder.
                </p>
                <div className="space-y-4">
                  <Input
                    type="tel"
                    label="Description"
                    placeholder="+380 (00) 000 - 00 - 00"
                    hint="Hint"
                  />
                  <Input
                    type="tel"
                    label="Description"
                    placeholder="+380 (00) 000 - 00 - 00"
                    status="active"
                    hint="Hint"
                  />
                  <Input
                    type="tel"
                    label="Description"
                    value={telVal}
                    onChange={(e) => setTelVal(e.target.value)}
                    hint="Hint"
                  />
                  <Input
                    type="tel"
                    label="Description"
                    placeholder="+380 (00) 000 - 00 - 00"
                    processing="Processing"
                  />
                  <Input
                    type="tel"
                    label="Description"
                    value={telVal}
                    processing="Processing"
                  />
                  <Input
                    type="tel"
                    label="Description"
                    placeholder="+380 (00) 000 - 00 - 00"
                    disabled
                    hint="Hint"
                  />
                  <Input
                    type="tel"
                    label="Description"
                    placeholder="+380 (00) 000 - 00 - 00"
                    success="Success"
                  />
                  <Input
                    type="tel"
                    label="Description"
                    placeholder="+380 (00) 000 - 00 - 00"
                    error="Error message"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PASSWORD INPUT GRID ================= */}
        {activeTab === "password" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                Password Input
              </h2>
              <p className="text-xs text-[#808080] mb-6">
                Includes show/hide eye toggle and custom left icon locks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Header Titles */}
              <div className="text-center font-semibold text-xs text-[#808080]">
                Simple Password
              </div>
              <div className="text-center font-semibold text-xs text-[#808080]">
                Lock Left Icon
              </div>
              <div className="text-center font-semibold text-xs text-[#808080]">
                Clearable Password
              </div>
              <div className="text-center font-semibold text-xs text-[#808080]">
                Full Complex Pass
              </div>

              {/* Default */}
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                hint="Hint"
              />
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                leftIcon={<FiLock />}
                hint="Hint"
              />
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                hint="Hint"
                clearable
              />
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                leftIcon={<FiLock />}
                hint="Hint"
                clearable
              />

              {/* Active */}
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                status="active"
                hint="Hint"
              />
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                leftIcon={<FiLock />}
                status="active"
                hint="Hint"
              />
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                status="active"
                hint="Hint"
                clearable
              />
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                leftIcon={<FiLock />}
                status="active"
                hint="Hint"
                clearable
              />

              {/* Filled Show/Hide */}
              <Input
                type="password"
                label="Description"
                value={pwVal}
                onChange={(e) => setPwVal(e.target.value)}
                hint="Hint"
              />
              <Input
                type="password"
                label="Description"
                value={pwVal}
                leftIcon={<FiLock />}
                hint="Hint"
              />
              <Input
                type="password"
                label="Description"
                value={pwVal}
                hint="Hint"
                clearable
              />
              <Input
                type="password"
                label="Description"
                value={pwVal}
                leftIcon={<FiLock />}
                hint="Hint"
                clearable
              />

              {/* Disabled */}
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                disabled
                hint="Hint"
              />
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                leftIcon={<FiLock />}
                disabled
                hint="Hint"
              />
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                disabled
                hint="Hint"
                clearable
              />
              <Input
                type="password"
                label="Description"
                placeholder="Create password"
                leftIcon={<FiLock />}
                disabled
                hint="Hint"
                clearable
              />

              {/* Error / Success states */}
              <Input
                type="password"
                label="Description"
                value={pwVal}
                error="Error message"
              />
              <Input
                type="password"
                label="Description"
                value={pwVal}
                leftIcon={<FiLock />}
                error="Error message"
              />
              <Input
                type="password"
                label="Description"
                value={pwVal}
                success="Success"
              />
              <Input
                type="password"
                label="Description"
                value={pwVal}
                leftIcon={<FiLock />}
                success="Success"
              />
            </div>
          </div>
        )}

        {/* ================= LONG STRING WRAPPING / TRUNCATION ================= */}
        {activeTab === "long" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                Long String & Truncation
              </h2>
              <p className="text-xs text-[#808080] mb-6">
                Verifies that long overflow strings truncate properly with
                ellipses in various icon combinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Columns headers */}
              <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
                No Icon
              </div>
              <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
                Left Icon
              </div>
              <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
                Right Icon
              </div>
              <div className="col-span-1 text-center font-semibold text-xs text-[#808080]">
                Left & Right Icon
              </div>

              {/* Long Value examples */}
              <Input
                label="Description (optional)"
                value="This is a long string of text that will get truncated if it is too long to fit in the input field."
                required
              />
              <Input
                label="Description (optional)"
                value="This is a long string of text that will get truncated if it is too long to fit in the input field."
                required
                leftIcon={<FiStar />}
              />
              <Input
                label="Description (optional)"
                value="This is a long string of text that will get truncated if it is too long to fit in the input field."
                required
                rightIcon={<FiStar />}
              />
              <Input
                label="Description (optional)"
                value="This is a long string of text that will get truncated if it is too long to fit in the input field."
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
              />

              {/* Active state */}
              <Input
                label="Description (optional)"
                value="...is a long string of text that will get truncated if it is too long to fit in the input field."
                required
                status="active"
              />
              <Input
                label="Description (optional)"
                value="...is a long string of text that will get truncated if it is too long to fit in the input field."
                required
                leftIcon={<FiStar />}
                status="active"
              />
              <Input
                label="Description (optional)"
                value="...is a long string of text that will get truncated if it is too long to fit in the input field."
                required
                rightIcon={<FiStar />}
                status="active"
              />
              <Input
                label="Description (optional)"
                value="...is a long string of text that will get truncated if it is too long to fit in the input field."
                required
                leftIcon={<FiStar />}
                rightIcon={<FiStar />}
                status="active"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
