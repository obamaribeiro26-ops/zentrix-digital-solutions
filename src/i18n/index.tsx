import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { pt, type Dict } from "./pt";
import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { de } from "./de";

export const LOCALES = [
  { code: "pt", label: "Português", htmlLang: "pt-AO", dir: "ltr" },
  { code: "en", label: "English", htmlLang: "en", dir: "ltr" },
  { code: "fr", label: "Français", htmlLang: "fr", dir: "ltr" },
  { code: "es", label: "Español", htmlLang: "es", dir: "ltr" },
  { code: "de", label: "Deutsch", htmlLang: "de", dir: "ltr" },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

const DICTS: Record<LocaleCode, Dict> = { pt, en, fr, es, de };
const STORAGE_KEY = "zentrix-lang";

type I18nCtx = { locale: LocaleCode; setLocale: (l: LocaleCode) => void; t: Dict; dir: "ltr" | "rtl" };
const Ctx = createContext<I18nCtx>({ locale: "pt", setLocale: () => {}, t: pt, dir: "ltr" });

function readStored(): LocaleCode {
  if (typeof window === "undefined") return "pt";
  const v = window.localStorage.getItem(STORAGE_KEY);
  return (LOCALES.some((l) => l.code === v) ? v : "pt") as LocaleCode;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>("pt");

  useEffect(() => {
    const stored = readStored();
    if (stored !== "pt") setLocaleState(stored);
  }, []);

  const meta = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.dir;
  }, [meta.htmlLang, meta.dir]);

  const setLocale = (l: LocaleCode) => {
    setLocaleState(l);
    try { window.localStorage.setItem(STORAGE_KEY, l); } catch { /* private mode */ }
  };

  return <Ctx.Provider value={{ locale, setLocale, t: DICTS[locale], dir: meta.dir }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}
