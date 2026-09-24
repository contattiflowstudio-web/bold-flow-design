import { Cloud, Code2, Database, Link2, LockKeyhole, ShoppingBag, Smartphone, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const services: { icon: typeof Cloud; title: TranslationKey; desc: TranslationKey; code: string }[] = [
  { icon: Code2, title: "services.web.title", desc: "services.web.desc", code: "WEB" },
  { icon: LockKeyhole, title: "services.security.title", desc: "services.security.desc", code: "SEC" },
  { icon: Cloud, title: "services.cloud.title", desc: "services.cloud.desc", code: "CLD" },
  { icon: Database, title: "services.backend.title", desc: "services.backend.desc", code: "DEV" },
  { icon: Link2, title: "services.connectors.title", desc: "services.connectors.desc", code: "API" },
  { icon: ShoppingBag, title: "services.commerce.title", desc: "services.commerce.desc", code: "ECM" },
  { icon: Smartphone, title: "services.social.title", desc: "services.social.desc", code: "SOC" },
  { icon: TrendingUp, title: "services.strategy.title", desc: "services.strategy.desc", code: "GRW" },
];

export const Services = () => {
  const { t } = useLanguage();
  return (
    <section id="services" className="section-space border-t border-border">
      <div className="container">
        <div className="section-heading reveal">
          <div><p className="eyebrow">{t("services.eyebrow")}</p><p className="section-index">02 — Capabilities</p></div>
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight md:text-6xl">{t("services.title")}</h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t("services.intro")}</p>
          </div>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article key={service.title} className={`reveal bento-panel min-h-[18rem] ${index === 0 || index === 5 ? "sm:col-span-2" : ""}`}>
              <div className="flex items-center justify-between">
                <service.icon className="h-8 w-8 text-primary-glow" />
                <span className="font-mono text-xs text-muted-foreground">{service.code}.{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-auto pt-12">
                <h3 className="font-display text-xl leading-tight">{t(service.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(service.desc)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};