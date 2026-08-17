import { Link } from "react-router-dom";
import type { FooterLinkGroupProps } from "../footer.types";

const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => {
  return (
    <nav>
      <h3 className="text-[18px] font-semibold mb-2">{title}</h3>

      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="text-white transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinkGroup;
