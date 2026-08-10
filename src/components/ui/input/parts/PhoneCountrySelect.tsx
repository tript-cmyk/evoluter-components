import { FiChevronDown } from "react-icons/fi";
import type { PhoneCountrySelectProps } from "../input.types";
import { useEffect, useRef, useState } from "react";
import { getFlagUrl } from "../utils/input.utils";
import { cn } from "../../../../lib/cn";

export function PhoneCountrySelect({
  value,
  options,
  disabled,
  onChange,
}: PhoneCountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const activeCountry =
    options.find((country) => country.code === value) || options[0];

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSelect = (code: string) => {
    onChange?.(code);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative flex items-center self-stretch h-full mr-2.5"
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((current) => !current)}
        className={cn(
          "flex items-center gap-1.5 text-sm font-medium text-white hover:opacity-85 transition-opacity h-full focus:outline-none cursor-pointer",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      >
        {activeCountry?.code ? (
          <img
            src={getFlagUrl(activeCountry.code)}
            width="20"
            alt={activeCountry.name}
            className="object-contain rounded-xs shrink-0"
          />
        ) : (
          <span>{activeCountry?.flag}</span>
        )}
        <FiChevronDown className="w-3.5 h-3.5 text-[#808080] shrink-0" />
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] -left-2 z-50 bg-[#1e1e1e] border border-[#333333] rounded-lg p-1 shadow-2xl min-w-[220px] max-h-60 overflow-y-auto flex flex-col gap-0.5 scrollbar-thin cursor-pointer">
          {options.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => handleSelect(country.code)}
              className={cn(
                "flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-left text-[#FFF] hover:bg-[#282828] rounded-md transition-colors w-full focus:outline-none cursor-pointer",
                value === country.code
                  && "bg-[#282828] font-semibold text-[#ABFFC3]",
              )}
            >
              {country.code ? (
                <img
                  src={getFlagUrl(country.code)}
                  width="20"
                  alt={country.name}
                  className="object-contain rounded-xs shrink-0"
                />
              ) : (
                <span className="text-sm shrink-0">{country.flag}</span>
              )}
              <span className="truncate">{country.name}</span>
              <span className="ml-auto text-[10px] text-[#808080] shrink-0">
                {country.dial_code}
              </span>
            </button>
          ))}
        </div>
      )}

      <div className="w-[1px] h-4 bg-[#333333] mx-2" />
    </div>
  );
}
