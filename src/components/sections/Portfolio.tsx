import { ArrowUpRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import dolceVita from "@/assets/work-dolce-vita.png";
import pulse09 from "@/assets/work-pulse09.png";
import ironclad from "@/assets/work-ironclad.png";
import sottoLeStelle from "@/assets/work-sotto-le-stelle.png";
import ivanoAsset from "@/assets/ivano-obersini-site.jpg.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const projects: { title: string; image?: string; tag: TranslationKey; desc: TranslationKey; url: string; featured?: boolean; social?: boolean }[] = [
  { title: "Ivano Bersini · Ora Poesie", image: ivanoAsset.url, tag: "portfolio.tag.culture", desc: "portfolio.desc.ivano", url: "https://ivanobersiniorapoesie.com/", featured: true },
  { title: "La Dolce Vita", image: dolceVita, tag: "portfolio.tag.hospitality", desc: "portfolio.desc.dolceVita", url: "https://contattiflowstudio-web.github.io/gelateria/" },
  { title: "PULSE/09", image: pulse09, tag: "portfolio.tag.launch", desc: "portfolio.desc.pulse09", url: "https://contattiflowstudio-web.github.io/pulse09/" },
  { title: "IRONCLAD", image: ironclad, tag: "portfolio.tag.brand", desc: "portfolio.desc.ironclad", url: "https://contattiflowstudio-web.github.io/Ironclad/" },
  { title: "Sotto le Stelle", image: sottoLeStelle, tag: "portfolio.tag.hospitality", desc: "portfolio.desc.sottoLeStelle", url: "https://contattiflowstudio-web.github.io/Sotto-le-stelle/" },
  { title: "RAF Statue", tag: "portfolio.tag.social", desc: "portfolio.desc.raf", url: "https://www.instagram.com/rafstatue/", social: true },
];

export const Portfolio = () => {
  const { t } = useLanguage();
  return (
    <section id="portfolio" className="section-space border-t border-border bg-secondary/20">
      <div className="container">
        <div className="section-heading reveal">
          <div><p className="eyebrow">{t("portfolio.eyebrow")}</p><p className="section-index">03 — Selected work</p></div>
          <div className="max-w-3xl"><h2 className="font-display text-4xl leading-tight md:text-6xl">{t("portfolio.title")}</h2><p className="mt-5 text-lg text-muted-foreground">{t("portfolio.intro")}</p></div>
        </div>
        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-12">
          {projects.map((project, index) => (
            <article key={project.title} className={`reveal project-card group ${project.featured ? "lg:col-span-8" : index === 5 ? "lg:col-span-4" : "lg:col-span-6"}`}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className={`relative flex min-h-[19rem] items-center justify-center overflow-hidden bg-card ${project.featured ? "md:min-h-[30rem]" : "md:min-h-[24rem]"}`}>
                  {project.image ? <img src={project.image} alt={project.title} loading="lazy" className="max-h-[29rem] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" /> : (
                    <div className="flex flex-col items-center text-center"><Instagram className="h-16 w-16 text-primary-glow" /><span className="mt-5 font-display text-3xl">@rafstatue</span><span className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">Social media management</span></div>
                  )}
                  <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background/80 text-foreground backdrop-blur-md"><ArrowUpRight className="h-5 w-5" /></span>
                </div>
                <div className="grid gap-3 border-t border-border p-5 md:grid-cols-[1fr_auto] md:items-end">
                  <div><p className="text-xs uppercase tracking-[0.18em] text-primary-glow">{t(project.tag)}</p><h3 className="mt-2 font-display text-xl md:text-2xl">{project.title}</h3><p className="mt-3 max-w-xl text-sm text-muted-foreground">{t(project.desc)}</p></div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">{t("portfolio.viewProject")}</span>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center"><Button variant="outline" asChild><a href="https://www.instagram.com/igflowstudio" target="_blank" rel="noopener noreferrer">Instagram Flow Studio <ArrowUpRight /></a></Button></div>
      </div>
    </section>
  );
};