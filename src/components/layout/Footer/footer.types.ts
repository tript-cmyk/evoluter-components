export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroupProps {
  title: string;
  links: FooterLink[];
}
