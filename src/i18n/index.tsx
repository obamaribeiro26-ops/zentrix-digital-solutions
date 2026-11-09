import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { pt, type Dict } from "./pt";
import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { de } from "./de";
import { it } from "./it";
import { zh } from "./zh";
import { ar } from "./ar";
import { sw } from "./sw";
import { ln } from "./ln";

export const LOCALES = [
  { code: "pt", label: "Português", htmlLang: "pt-AO", dir: "ltr" },
  { code: "en", label: "English", htmlLang: "en", dir: "ltr" },
  { code: "fr", label: "Français", htmlLang: "fr", dir: "ltr" },
  { code: "es", label: "Español", htmlLang: "es", dir: "ltr" },
  { code: "de", label: "Deutsch", htmlLang: "de", dir: "ltr" },
  { code: "it", label: "Italiano", htmlLang: "it", dir: "ltr" },
  { code: "zh", label: "简体中文", htmlLang: "zh-CN", dir: "ltr" },
  { code: "ar", label: "العربية", htmlLang: "ar", dir: "rtl" },
  { code: "sw", label: "Kiswahili", htmlLang: "sw", dir: "ltr" },
  { code: "ln", label: "Lingála", htmlLang: "ln", dir: "ltr" },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

const DICTS: Record<LocaleCode, Dict> = { pt, en, fr, es, de, it, zh, ar, sw, ln };
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
