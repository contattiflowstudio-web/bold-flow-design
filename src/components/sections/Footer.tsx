import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/flow-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

export const Footer = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const phoneHref = isMobile ? "https://wa.me/393520017088" : "tel:+393520017088";
  const phoneProps = isMobile
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};
  return (
    <footer className="relative border-t border-border/50 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center">
                <img
                  src={logo}
                  alt="Flow Studio logo"
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                />
              </span>
              <span className="font-display text-xl font-bold">
                Flow <span className="text-gradient-primary">Studio</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">{t("footer.studio")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground transition-colors">{t("nav.services")}</Link></li>
              <li><Link to="/why-digital" className="hover:text-foreground transition-colors">{t("nav.whyDigital")}</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">{t("nav.portfolio")}</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contattiflowstudio@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">contattiflowstudio@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href={phoneHref} {...phoneProps} className="hover:text-foreground transition-colors">352 001 7088</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{t("footer.location")}</span>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/igflowstudio", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/flowstudio", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 inline-flex items-center justify-center rounded-xl glass hover:shadow-glow-soft hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="h-4 w-4 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.crafted")}</p>
        </div>
      </div>
    </footer>
  );
};