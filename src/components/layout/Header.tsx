import { NavLink } from "react-router-dom";
import { Button, BUTTON_VARIANTS, ICON_POSITION } from "../ui/button";
import { CiLogin } from "react-icons/ci";

const HEADER_NAV_ITEMS = [
  { label: "Services", href: "/" },
  { label: "Services", href: "/" },
  { label: "Services", href: "/" },
  { label: "Services", href: "/" },
  { label: "Services", href: "/" },
];

const Header = () => {
  return (
    <header className="bg-[#141414] text-white w-full min-h-fit px-2 py-2 flex items-center justify-between lg:px-8 sticky top-0 z-100">
      <NavLink to="/" className="shrink-0 lg:hidden">
        <img src="/images/mobile-header-logo.png" alt="Mobile Header Logo" />
      </NavLink>

      <NavLink to="/" className="hidden lg:block">
        <img src="/images/desktop-header-logo.png" alt="Desktop Header Logo" />
      </NavLink>

      <nav className="hidden lg:flex items-center gap-6 text-sm">
        {HEADER_NAV_ITEMS.map((item, index) => (
          <NavLink key={index} to={item.href}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-2 text-sm shrink-0">
        <div className="hidden lg:block">
          <Button
            variant={BUTTON_VARIANTS.OUTLINE}
            icon={<CiLogin />}
            iconPosition={ICON_POSITION.RIGHT}
          >
            Log in
          </Button>
        </div>
        <div>
          <Button variant={BUTTON_VARIANTS.SECONDARY}>
            Sign Up <span className="text-[#CCCCCC]">- It's Free</span>
          </Button>
        </div>
        <div className="lg:hidden">
          <Button variant={BUTTON_VARIANTS.OUTLINE}>
            <img src="/images/burger-menu.png" alt="Burger Menu" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
