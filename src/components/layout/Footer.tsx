import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import Input from "../ui/input/Input";
import { INPUT_TYPE } from "../ui/input";
import { Button } from "../ui/button";

const services = [
  "Services overview",
  "Managed teams",
  "Application development",
  "Cloud services",
  "AI services",
];

const companies = ["About us", "Contact us", "Press", "Careers"];

const resources = ["Blog", "Case Studies", "Help Center", "Careers"];

const platforms = [
  <FaLinkedinIn size={24} />,
  <FaTwitter size={24} />,
  <IoLogoWhatsapp size={24} />,
];

const Footer = () => {
  return (
    <div className="flex min-h-fit w-full flex-col gap-4 bg-[#141414] text-white">
      <div className="flex flex-col gap-6 px-6 py-6 sm:px-8 md:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap md:gap-12 lg:gap-20">
            <div className="min-w-0">
              <h3>Services</h3>
              {services.map((service) => (
                <div key={service} className="mb-2">
                  {service}
                </div>
              ))}
            </div>

            <div className="flex gap-10 sm:gap-16 md:gap-20 lg:gap-10">
              <div>
                <h3>Company</h3>
                {companies.map((company) => (
                  <div key={company} className="mb-2">
                    {company}
                  </div>
                ))}
              </div>

              <div>
                <h3>Resources</h3>
                {resources.map((resource) => (
                  <div key={resource} className="mb-2">
                    {resource}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-10 sm:flex-col sm:gap-0">
              <h3>Hire Experts</h3>
              <h3>Why</h3>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:min-w-80 lg:gap-10">
            <div>
              <h3 className="mb-3">Newsletter</h3>

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
              <h3>Follow us</h3>

              <div className="flex items-center gap-5">
                {platforms.map((platform, index) => (
                  <div key={index}>{platform}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-[#CCCCCC] sm:flex-row sm:flex-wrap">
          <div>&copy; 2023 Evoluter. All rights reserved.</div>

          <div>Privacy Policy &bull; Terms & Conditions &bull; Legal</div>
        </div>
      </div>

      <div className="w-full shrink-0 overflow-hidden">
        <img
          src="/images/logo.png"
          alt="logo"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
};

export default Footer;
