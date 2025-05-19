import { translationDA } from "./translationDA";
import { translationKL } from "./translationKL";
import { translationEN } from "./translationEN";

export const languages = {
  da: "Dansk",
  kl: "Kalaallisut",
  en: "English",
};

export const defaultLang = "da";

export type TranslationType = typeof translationDA;

export const ui: Record<keyof typeof languages, TranslationType> = {
  da: translationDA,
  kl: translationKL,
  en: translationEN,
} as const;
