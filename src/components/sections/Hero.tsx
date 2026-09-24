import { ArrowDownRight, ArrowRight, Cloud, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/flow-studio-logo.png.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-8 md:pt-32 md:pb-12">
      <div className="absolute inset-0 technical-grid opacity-50" aria-hidden="true" />
      <div className="container relative">
        <div className="grid gap-3 lg:grid-cols-12 lg:auto-rows-[minmax(9rem,auto)]">
          <article className="reveal relative overflow-hidden rounded-lg border border-primary/30 bg-card/80 p-7 md:p-10 lg:col-span-8 lg:row-span-2">
            <div className="absolute inset-y-0 right-0 w-1/2 blueprint-lines opacity-50" aria-hidden="true" />
            <div className="relative flex min-h-[28rem] flex-col justify-between">
              <div>
                <p className="eyebrow">Flow Studio · Web & Cyber</p>
                <h1 className="mt-7 max-w-4xl font-display text-4xl leading-[1.04] sm:text-5xl md:text-7xl">
                  {t("hero.title.line1")}<br />
                  <span className="text-primary-glow">{t("hero.title.line2")}</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {t("hero.subtitle")}
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button size="xl" asChild>
                  <Link to="/contact">{t("hero.cta.secondary")}<ArrowRight /></Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <a href="#portfolio">{t("hero.cta.primary")}<ArrowDownRight /></a>
                </Button>
              </div>
            </div>
          </article>

          <article className="reveal relative flex min-h-[22rem] items-center justify-center overflow-hidden rounded-lg bg-primary p-8 lg:col-span-4 lg:row-span-2">
            <div className="absolute inset-0 logo-grid opacity-20" aria-hidden="true" />
            <div className="relative text-center">
              <img src={logoAsset.url} alt="Flow Studio" className="mx-auto w-full max-w-[18rem] mix-blend-screen" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/75">
                {t("hero.brandline")}
              </p>
            </div>
          </article>

          <article className="reveal bento-panel group lg:col-span-4">
            <ShieldCheck className="h-8 w-8 text-primary-glow" />
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">01 / Security</p>
            <h2 className="mt-2 font-display text-xl">{t("hero.tile.security")}</h2>
          </article>
          <article className="reveal bento-panel group lg:col-span-4">
            <Cloud className="h-8 w-8 text-primary-glow" />
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">02 / Cloud</p>
            <h2 className="mt-2 font-display text-xl">{t("hero.tile.cloud")}</h2>
          </article>
          <article className="reveal bento-panel group border-primary/40 bg-primary/10 lg:col-span-4">
            <Sparkles className="h-8 w-8 text-primary-glow" />
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">03 / Growth</p>
            <h2 className="mt-2 font-display text-xl">{t("hero.tile.growth")}</h2>
          </article>
        </div>
      </div>
    </section>
  );
};