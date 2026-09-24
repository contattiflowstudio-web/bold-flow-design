import { Binary, Compass, Rocket, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const steps: { icon: typeof Compass; title: TranslationKey; desc: TranslationKey }[] = [
  { icon: Compass, title: "process.s1.title", desc: "process.s1.desc" },
  { icon: Binary, title: "process.s2.title", desc: "process.s2.desc" },
  { icon: ShieldCheck, title: "process.s3.title", desc: "process.s3.desc" },
  { icon: Rocket, title: "process.s4.title", desc: "process.s4.desc" },
];

export const Process = () => {
  const { t } = useLanguage();
  return (
    <section className="section-space border-t border-border bg-secondary/20">
      <div className="container">
        <div className="section-heading reveal">
          <div><p className="eyebrow">{t("process.eyebrow")}</p><p className="section-index">04 — Method</p></div>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">{t("process.title")}</h2>
        </div>
        <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="reveal min-h-[20rem] border-b border-r border-border p-6 md:p-8">
              <div className="flex items-center justify-between"><step.icon className="h-7 w-7 text-primary-glow" /><span className="font-mono text-sm text-muted-foreground">0{index + 1}</span></div>
              <h3 className="mt-20 font-display text-xl">{t(step.title)}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(step.desc)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};