import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { translations, Lang, TranslationKey } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LANGUAGE_CONTEXT_KEY = Symbol.for("flow-studio.language-context");
type LanguageContextRegistry = typeof globalThis & {
  [LANGUAGE_CONTEXT_KEY]?: ReturnType<typeof createContext<Ctx | undefined>>;
};

const contextRegistry = globalThis as LanguageContextRegistry;
const LanguageContext =
  contextRegistry[LANGUAGE_CONTEXT_KEY] ?? createContext<Ctx | undefined>(undefined);

contextRegistry[LANGUAGE_CONTEXT_KEY] = LanguageContext;

const STORAGE_KEY = "flow-lang";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "it";
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    return stored === "en" || stored === "it" ? stored : "it";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (key: TranslationKey) => translations[lang][key] ?? translations.en[key] ?? key,
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};