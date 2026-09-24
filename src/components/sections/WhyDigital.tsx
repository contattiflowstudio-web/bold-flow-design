import { CheckCircle2, Gauge, LockKeyhole, Workflow } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const principles: { icon: typeof Gauge; title: TranslationKey; desc: TranslationKey }[] = [
  { icon: Gauge, title: "why.pillar.1.title", desc: "why.pillar.1.desc" },
  { icon: LockKeyhole, title: "why.pillar.2.title", desc: "why.pillar.2.desc" },
  { icon: Workflow, title: "why.pillar.3.title", desc: "why.pillar.3.desc" },
];

export const WhyDigital = () => {
  const { t } = useLanguage();
  return (
    <section id="why-digital" className="section-space border-t border-border">
      <div className="container">
        <div className="grid gap-3 lg:grid-cols-12">
          <div className="reveal rounded-lg bg-primary p-8 text-primary-foreground md:p-12 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">{t("why.eyebrow")}</p>
            <h2 className="mt-8 max-w-3xl font-display text-4xl leading-tight md:text-6xl">{t("why.title")}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">{t("why.intro")}</p>
            <div className="mt-12 flex items-center gap-3 border-t border-primary-foreground/20 pt-6 text-sm font-semibold uppercase tracking-[0.14em]"><CheckCircle2 className="h-5 w-5" />{t("why.promise")}</div>
          </div>
          <div className="grid gap-3 lg:col-span-5">
            {principles.map((principle, index) => (
              <article key={principle.title} className="reveal bento-panel flex min-h-[11rem] gap-5">
                <principle.icon className="mt-1 h-7 w-7 shrink-0 text-primary-glow" />
                <div><p className="font-mono text-xs text-muted-foreground">0{index + 1}</p><h3 className="mt-2 font-display text-lg">{t(principle.title)}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(principle.desc)}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};