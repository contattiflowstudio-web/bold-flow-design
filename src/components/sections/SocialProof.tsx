import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const reviews: { name: string; quote: TranslationKey }[] = [
  { name: "Ivano Bersini", quote: "social.t1.quote" },
  { name: "Carla Biuso", quote: "social.t2.quote" },
  { name: "Marco Rinaldi", quote: "social.t3.quote" },
];

export const SocialProof = () => {
  const { t } = useLanguage();
  const scrollReviews = (direction: number) => {
    document.getElementById("review-track")?.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  return (
    <section className="section-space border-t border-border">
      <div className="container">
        <div className="section-heading reveal">
          <div><p className="eyebrow">{t("social.kicker")}</p><p className="section-index">05 — Trust</p></div>
          <div className="flex items-end justify-between gap-6"><h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">{t("social.title")}</h2><div className="hidden shrink-0 gap-2 md:flex"><Button variant="outline" size="icon" onClick={() => scrollReviews(-1)} aria-label={t("social.previous")}><ChevronLeft /></Button><Button variant="outline" size="icon" onClick={() => scrollReviews(1)} aria-label={t("social.next")}><ChevronRight /></Button></div></div>
        </div>
        <div id="review-track" className="mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible">
          {reviews.map((review, index) => (
            <figure key={review.name} className="reveal flex min-h-[19rem] min-w-[85%] snap-start flex-col rounded-lg border border-border bg-card p-6 sm:min-w-[22rem] lg:min-w-0">
              <div className="flex items-center justify-between gap-4"><div className="flex gap-1 text-primary-glow" aria-label="5 stars">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="h-4 w-4 fill-current" />)}</div><span className="font-mono text-xs text-muted-foreground">GOOGLE</span></div>
              <blockquote className="mt-8 flex-1 text-base leading-relaxed text-foreground/85">“{t(review.quote)}”</blockquote>
              <figcaption className="mt-7 flex items-center justify-between border-t border-border pt-5"><div><p className="font-display text-sm">{review.name}</p><p className="mt-1 text-xs text-muted-foreground">{t("social.googleReview")}</p></div><span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{review.name.charAt(0)}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};