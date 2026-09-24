import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const reviews: { name: string; quote: TranslationKey }[] = [
  { name: "Marco Rinaldi", quote: "social.t1.quote" },
  { name: "Giulia Conti", quote: "social.t2.quote" },
  { name: "Alessandro Ferri", quote: "social.t3.quote" },
];

export const SocialProof = () => {
  const { t } = useLanguage();
  return (
    <section className="section-space border-t border-border">
      <div className="container">
        <div className="section-heading reveal">
          <div><p className="eyebrow">{t("social.kicker")}</p><p className="section-index">05 — Trust</p></div>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">{t("social.title")}</h2>
        </div>
        <div className="mt-12 grid gap-3 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <figure key={review.name} className="reveal bento-panel flex min-h-[22rem] flex-col">
              <div className="flex items-center justify-between"><Quote className="h-8 w-8 text-primary-glow" /><div className="flex gap-1 text-primary-glow" aria-label="5 stars">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="h-3.5 w-3.5 fill-current" />)}</div></div>
              <blockquote className="mt-10 flex-1 text-base leading-relaxed text-foreground/85">“{t(review.quote)}”</blockquote>
              <figcaption className="mt-8 border-t border-border pt-5"><p className="font-display text-sm">{review.name}</p><p className="mt-1 font-mono text-xs text-muted-foreground">REV.0{index + 1}</p></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};