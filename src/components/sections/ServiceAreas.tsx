import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const areas = [
  "Desenzano del Garda",
  "Sirmione",
  "Peschiera del Garda",
  "Salò",
  "Gardone Riviera",
  "Toscolano Maderno",
  "Malcesine",
  "Manerba del Garda",
  "Moniga del Garda",
  "Padenghe sul Garda",
  "Polpenazze del Garda",
  "Soiano del Lago",
  "Gavardo",
  "Prevalle",
];

export const ServiceAreas = () => {
  const { t } = useLanguage();

  return (
    <section className="section-space border-t border-border bg-secondary/20">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">{t("areas.eyebrow")}</p>
            <p className="section-index">06 — Local network</p>
          </div>
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight md:text-6xl">{t("areas.title")}</h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t("areas.intro")}</p>
          </div>
        </div>

        <div className="reveal mt-12 flex flex-wrap gap-2 md:gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm text-card-foreground transition-colors hover:border-primary/60"
            >
              <MapPin className="h-4 w-4 text-primary-glow" aria-hidden="true" />
              {area}
            </span>
          ))}
          <Button variant="outline" size="lg" asChild>
            <a href="https://wa.me/393520017088" target="_blank" rel="noopener noreferrer">
              {t("areas.cta")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};