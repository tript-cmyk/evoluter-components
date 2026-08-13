import { NavLink } from "react-router-dom";
import { Button, BUTTON_VARIANTS, ICON_POSITION } from "../ui/button";
import { CiLogin } from "react-icons/ci";

const menuItems = [
  { label: "Services", href: "/" },
  { label: "Services", href: "/" },
  { label: "Services", href: "/" },
  { label: "Services", href: "/" },
  { label: "Services", href: "/" },
];

const Header = () => {
  return (
    <header className="bg-[#141414] text-white w-full min-h-fit px-2 py-2 flex items-center justify-between lg:px-8 z-100">
      <div className="shrink-0 lg:hidden">
        <img src="/images/mobile-header-logo.png" alt="Mobile Header Logo" />
      </div>

      <div className="hidden lg:block">
        <img src="/images/desktop-header-logo.png" alt="Desktop Header Logo" />
      </div>

      <nav className="hidden lg:flex items-center gap-6 text-sm">
        {menuItems.map((item) => (
          <NavLink key={item.href} to={item.href}>
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
          <img src="/images/burger-menu.png" alt="Burger Menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
