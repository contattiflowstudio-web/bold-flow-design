import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import dolceVita from "@/assets/work-dolce-vita.png";
import pulse09 from "@/assets/work-pulse09.png";
import ironclad from "@/assets/work-ironclad.png";
import sottoLeStelle from "@/assets/work-sotto-le-stelle.png";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

type Project = {
  title: string;
  image: string;
  tagKey: TranslationKey;
  descKey: TranslationKey;
  url: string;
};

const projects: Project[] = [
  { title: "La Dolce Vita", image: dolceVita, tagKey: "portfolio.tag.hospitality", descKey: "portfolio.desc.dolceVita", url: "https://contattiflowstudio-web.github.io/gelateria/" },
  { title: "PULSE/09", image: pulse09, tagKey: "portfolio.tag.launch", descKey: "portfolio.desc.pulse09", url: "https://contattiflowstudio-web.github.io/pulse09/" },
  { title: "IRONCLAD", image: ironclad, tagKey: "portfolio.tag.brand", descKey: "portfolio.desc.ironclad", url: "https://contattiflowstudio-web.github.io/Ironclad/" },
  { title: "Sotto le Stelle", image: sottoLeStelle, tagKey: "portfolio.tag.hospitality", descKey: "portfolio.desc.sottoLeStelle", url: "https://contattiflowstudio-web.github.io/Sotto-le-stelle/" },
];

export const Portfolio = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const total = projects.length;

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + total) % total);
  };

  // Auto-advance projects every 7s (slower)
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 7000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section id="portfolio" className="relative py-28 md:py-36 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">
              {t("portfolio.eyebrow")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t("portfolio.title.a")}
              <span className="text-gradient">{t("portfolio.title.b")}</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Editorial slide: text beside a smaller image */}
          <div
            key={projects[active].title}
            className="mx-auto max-w-6xl rounded-3xl glass shadow-elegant p-6 md:p-10 animate-fade-in"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">
                  {t(projects[active].tagKey)}
                </p>
                <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-5">
                  {projects[active].title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 max-w-md mx-auto md:mx-0">
                  {t(projects[active].descKey)}
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-elegant"
                  asChild
                >
                  <a href={projects[active].url} target="_blank" rel="noopener noreferrer">
                    {t("portfolio.viewProject")}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="order-1 md:order-2 flex items-center justify-center">
                <img
                  src={projects[active].image}
                  alt={projects[active].title}
                  loading="lazy"
                  className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Project nav arrows */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full glass-strong inline-flex items-center justify-center hover:bg-background/80 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next project"
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full glass-strong inline-flex items-center justify-center hover:bg-background/80 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Project dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to ${p.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
