import { ArrowUpRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import dolceVita from "@/assets/work-dolce-vita.png";
import pulse09 from "@/assets/work-pulse09.png";
import ironclad from "@/assets/work-ironclad.png";
import sottoLeStelle from "@/assets/work-sotto-le-stelle.png";
import ivanoSite from "@/assets/work-ivano.png";
import oraPoesieLogo from "@/assets/ora-poesie-logo.png.asset.json";
import rafStatueLogo from "@/assets/raf-statue-logo.png.asset.json";
import dolceVitaLogo from "@/assets/logo-dolce-vita.png";
import pulse09Logo from "@/assets/logo-pulse09.png";
import ironcladLogo from "@/assets/logo-ironclad.png";
import sottoLeStelleLogo from "@/assets/logo-sotto-le-stelle.png";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

type Project = {
  title: string;
  mark: string;
  logo: string;
  image?: string;
  tag: TranslationKey;
  desc: TranslationKey;
  url: string;
  services: TranslationKey[];
};

const projects: Project[] = [
  { title: "Ivano Bersini · Ora Poesie", mark: "Ora Poesie", logo: oraPoesieLogo.url, image: ivanoSite, tag: "portfolio.tag.culture", desc: "portfolio.desc.ivano", url: "https://ivanobersiniorapoesie.com/", services: ["portfolio.service.web", "portfolio.service.editorial", "portfolio.service.identity"] },
  { title: "La Dolce Vita", mark: "La Dolce Vita", logo: dolceVitaLogo, image: dolceVita, tag: "portfolio.tag.hospitality", desc: "portfolio.desc.dolceVita", url: "https://contattiflowstudio-web.github.io/gelateria/", services: ["portfolio.service.web", "portfolio.service.identity", "portfolio.service.booking"] },
  { title: "PULSE/09", mark: "PULSE/09", logo: pulse09Logo, image: pulse09, tag: "portfolio.tag.launch", desc: "portfolio.desc.pulse09", url: "https://contattiflowstudio-web.github.io/pulse09/", services: ["portfolio.service.landing", "portfolio.service.motion", "portfolio.service.conversion"] },
  { title: "IRONCLAD", mark: "IRONCLAD", logo: ironcladLogo, image: ironclad, tag: "portfolio.tag.brand", desc: "portfolio.desc.ironclad", url: "https://contattiflowstudio-web.github.io/Ironclad/", services: ["portfolio.service.web", "portfolio.service.identity", "portfolio.service.ux"] },
  { title: "Sotto le Stelle", mark: "Sotto le Stelle", logo: sottoLeStelleLogo, image: sottoLeStelle, tag: "portfolio.tag.hospitality", desc: "portfolio.desc.sottoLeStelle", url: "https://contattiflowstudio-web.github.io/Sotto-le-stelle/", services: ["portfolio.service.web", "portfolio.service.gallery", "portfolio.service.booking"] },
  { title: "RAF Statue", mark: "RAF Statue", logo: rafStatueLogo.url, tag: "portfolio.tag.social", desc: "portfolio.desc.raf", url: "https://www.instagram.com/rafstatue/", services: ["portfolio.service.social", "portfolio.service.content", "portfolio.service.strategy"] },
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
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {projects.map((project, index) => (
            <Dialog key={project.title}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="reveal group h-40 w-full flex-col gap-5 bg-card px-4 text-card-foreground hover:border-primary/60 hover:bg-card md:h-52"
                  aria-label={`${t("portfolio.viewProject")}: ${project.title}`}
                >
                  <span className="font-mono text-[10px] text-muted-foreground">CLIENT.{String(index + 1).padStart(2, "0")}</span>
                  <img src={project.logo} alt={project.mark} loading="lazy" width={1024} height={768} className="h-20 w-full object-contain md:h-28" />
                  <span className="inline-flex items-center gap-1 text-xs uppercase text-primary-glow">{t("portfolio.viewProject")} <ArrowUpRight className="h-3.5 w-3.5" /></span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[calc(100vh-2rem)] w-[calc(100%-2rem)] max-w-5xl gap-0 overflow-y-auto p-0">
                <div className="grid lg:grid-cols-[1.35fr_1fr]">
                  <div className="flex min-h-52 items-center justify-center overflow-hidden bg-secondary/40 p-4 md:min-h-64 md:p-8 lg:min-h-[36rem]">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="max-h-[34rem] w-full rounded-md object-contain" />
                    ) : (
                      <div className="flex flex-col items-center text-center">
                        <img src={project.logo} alt={project.mark} loading="lazy" width={1024} height={768} className="max-h-72 w-full object-contain" />
                        <span className="mt-5 inline-flex items-center gap-2 font-display text-xl"><Instagram className="h-5 w-5 text-primary-glow" />@rafstatue</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col p-6 md:p-8">
                    <DialogHeader>
                      <p className="text-xs uppercase text-primary-glow">{t(project.tag)}</p>
                      <DialogTitle className="pt-3 font-display text-3xl leading-tight">{project.title}</DialogTitle>
                      <DialogDescription className="pt-4 text-base leading-relaxed">{t(project.desc)}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-8 border-t border-border pt-6">
                      <p className="text-xs font-semibold uppercase text-foreground">{t("portfolio.servicesTitle")}</p>
                      <ul className="mt-4 grid gap-3">
                        {project.services.map((service) => <li key={service} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />{t(service)}</li>)}
                      </ul>
                    </div>
                    <Button className="mt-8 w-full" size="lg" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">{t("portfolio.visitProject")} <ArrowUpRight /></a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <div className="mt-8 text-center"><Button variant="outline" asChild><a href="https://www.instagram.com/igflowstudio" target="_blank" rel="noopener noreferrer">Instagram Flow Studio <ArrowUpRight /></a></Button></div>
      </div>
    </section>
  );
};