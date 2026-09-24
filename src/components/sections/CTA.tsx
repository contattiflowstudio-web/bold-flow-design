import { ArrowRight, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export const CTA = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="section-space border-t border-border">
      <div className="container">
        <div className="reveal relative overflow-hidden rounded-lg bg-primary p-8 text-primary-foreground md:p-14">
          <div className="absolute inset-0 blueprint-lines opacity-30" aria-hidden="true" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">{t("cta.badge")}</p><h2 className="mt-6 max-w-4xl font-display text-4xl leading-tight md:text-7xl">{t("cta.title")}</h2><p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">{t("cta.subtitle")}</p></div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="xl" variant="secondary" asChild><a href="https://mail.google.com/mail/?view=cm&fs=1&to=contattiflowstudio@gmail.com" target="_blank" rel="noopener noreferrer"><Mail />{t("cta.primary")}<ArrowRight /></a></Button>
              <Button size="xl" className="border border-primary-foreground/30 bg-transparent hover:bg-primary-foreground/10" asChild><a href="https://wa.me/393520017088" target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="h-5 w-5" />WhatsApp</a></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};