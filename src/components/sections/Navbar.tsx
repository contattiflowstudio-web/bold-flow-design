import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import flowLogo from "@/assets/flow-studio-brand.webp";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const links = [
  { key: "nav.services", to: "/services" },
  { key: "nav.whyDigital", to: "/why-digital" },
  { key: "nav.portfolio", to: "/portfolio" },
] as const;

export const Navbar = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all", scrolled && "border-border bg-background/90 backdrop-blur-xl")}>
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Flow Studio home">
          <img src={flowLogo} alt="" className="h-11 w-11 rounded-md object-cover object-left" />
          <span className="font-display text-sm uppercase">Flow Studio</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(link => <Link key={link.to} to={link.to} className="px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">{t(link.key)}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex"><LanguageToggle variant="segmented" /><Button size="sm" asChild><Link to="/contact">{t("nav.cta")}</Link></Button></div>
        <div className="flex items-center gap-2 lg:hidden"><LanguageToggle variant="dropdown" /><Button size="icon" variant="ghost" onClick={() => setOpen(value => !value)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button></div>
      </div>
      {open && <div className="border-t border-border bg-background p-4 lg:hidden"><nav className="container flex flex-col gap-2">{links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="border-b border-border px-2 py-4 font-display text-lg">{t(link.key)}</Link>)}<Button className="mt-2" asChild><Link to="/contact" onClick={() => setOpen(false)}>{t("nav.cta")}</Link></Button></nav></div>}
    </header>
  );
};