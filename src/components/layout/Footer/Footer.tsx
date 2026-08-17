import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { INPUT_TYPE } from "../../ui/input";
import Input from "../../ui/input/Input";
import FooterLinkGroup from "./components/FooterLinkGroup";
import {
  FOOTER_LINK_GROUPS,
  FOOTER_NAV_LINKS,
  FOOTER_NAV_LINKS_RULES,
  FOOTER_SOCIALS,
} from "./footer.constants";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col gap-4 bg-[#141414] text-white">
      <div className="flex flex-col gap-6 px-6 py-6 sm:px-8 md:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap md:gap-12 lg:gap-20">
            {FOOTER_LINK_GROUPS.map((group) => (
              <FooterLinkGroup
                key={group.title}
                title={group.title}
                links={group.links}
              />
            ))}

            <div className="flex gap-10 sm:flex-col sm:gap-0">
              {FOOTER_NAV_LINKS.map(({ href, label }) => (
                <Link to={href} className="text-[18px] font-semibold leading-8">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:min-w-120 lg:gap-10">
            <div>
              <div className="text-[18px] font-semibold leading-8">
                Newsletter
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="min-w-0 flex-1">
                  <Input type={INPUT_TYPE.EMAIL} />
                </div>

                <div className="shrink-0">
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5 sm:gap-8">
              <div className="text-[18px] font-semibold leading-8">
                Follow us
              </div>

              <div className="flex items-center gap-5">
                {FOOTER_SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    className="transition-opacity hover:opacity-70"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-[#CCCCCC] sm:flex-row sm:flex-wrap">
          <span>
            &copy; {new Date().getFullYear()} Evoluter. All rights reserved.
          </span>

          <div className="flex gap-2">
            {FOOTER_NAV_LINKS_RULES.map(({ href, label }, index) => (
              <>
                <Link
                  to={href}
                  className="text-sm text-[#CCCCCC] transition-opacity hover:opacity-70"
                >
                  {label}
                </Link>
                {index < FOOTER_NAV_LINKS_RULES.length - 1 && (
                  <span>&bull;</span>
                )}
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full shrink-0 overflow-hidden">
        <img
          src="/images/evoluter-logo.png"
          alt="Evoluter"
          className="block h-auto w-full"
        />
      </div>
    </footer>
  );
};

export default Footer;
