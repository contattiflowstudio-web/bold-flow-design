import { Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoAsset from "@/assets/flow-studio-logo.png.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";

const socials = [
  { Icon: Instagram, href: "https://www.instagram.com/igflowstudio", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/flowstudio", label: "LinkedIn" },
  { Icon: MessageCircle, href: "https://wa.me/393520017088", label: "WhatsApp" },
];

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border bg-card/40 py-12">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5"><Link to="/" className="inline-flex items-center gap-4"><img src={logoAsset.url} alt="Flow Studio" className="h-16 w-16 rounded-md object-cover object-left" /><span className="font-display text-xl">Flow Studio</span></Link><p className="mt-5 max-w-md text-muted-foreground">{t("footer.tagline")}</p></div>
          <div className="lg:col-span-3"><p className="eyebrow">{t("footer.studio")}</p><div className="mt-5 grid gap-3 text-sm"><Link to="/services">{t("nav.services")}</Link><Link to="/why-digital">{t("nav.whyDigital")}</Link><Link to="/portfolio">{t("nav.portfolio")}</Link><Link to="/contact">{t("nav.contact")}</Link></div></div>
          <div className="lg:col-span-4"><p className="eyebrow">{t("footer.contact")}</p><div className="mt-5 grid gap-3 text-sm text-muted-foreground"><a className="flex items-center gap-3 hover:text-foreground" href="https://mail.google.com/mail/?view=cm&fs=1&to=contattiflowstudio@gmail.com" target="_blank" rel="noopener noreferrer"><Mail className="h-4 w-4 text-primary-glow" />contattiflowstudio@gmail.com</a><a className="flex items-center gap-3 hover:text-foreground" href="https://wa.me/393520017088" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 text-primary-glow" />+39 352 001 7088</a></div><div className="mt-6 flex gap-2">{socials.map(({ Icon, href, label }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:border-primary"><Icon className="h-4 w-4" /></a>)}</div></div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:justify-between"><p>{t("footer.copyright")}</p><p>{t("footer.crafted")}</p></div>
      </div>
    </footer>
  );
};