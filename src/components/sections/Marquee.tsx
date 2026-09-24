import { Asterisk } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const itemKeys = [
  "marquee.1",
  "marquee.2",
  "marquee.3",
  "marquee.4",
  "marquee.5",
  "marquee.6",
  "marquee.7",
  "marquee.8",
] as const;

export const Marquee = () => {
  const { t } = useLanguage();
  const items = itemKeys.map((k) => t(k));
  return (
    <section aria-hidden="true" className="relative border-y border-border bg-primary overflow-hidden pt-[22px] pb-[22px] md:pt-[22px] md:pb-[22px]">
      <div className="marquee-track">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-2xl md:text-4xl text-primary-foreground leading-[1.2] pb-1">
              {it}
            </span>
            <Asterisk className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground/60 animate-spin-slow shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
};