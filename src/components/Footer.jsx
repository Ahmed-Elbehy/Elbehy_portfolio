import { useTranslation } from "react-i18next";
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import contactLinks from "../data/contact";

const SiteFooter = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const links = [
    { id: "whatsapp", href: contactLinks.whatsapp },
    { id: "linkedin", href: contactLinks.linkedin },
    { id: "github", href: contactLinks.github },
  ];

  return (
    <Footer container className="border-t border-white/10 !bg-transparent">
      <div className="w-full">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">{t("footer.builtWith")}</p>

          <FooterLinkGroup>
            {links.map((link) => (
              <FooterLink
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                {t(`contact.${link.id}`)}
              </FooterLink>
            ))}
          </FooterLinkGroup>
        </div>

        <div className="mt-6 text-center">
          <FooterCopyright
            year={year}
            href="#home"
            by=" Ahmed Elbehy"
            className="text-sm text-gray-500"
          />
          <span className="text-sm text-gray-500"> {t("footer.rights")}</span>
        </div>
      </div>
    </Footer>
  );
};

export default SiteFooter;
