import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import global_es from "../assets/i18n/es/global.json";
import global_en from "../assets/i18n/en/global.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
