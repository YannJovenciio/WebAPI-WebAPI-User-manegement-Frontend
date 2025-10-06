import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en/translation.json";
import pt from "../locales/pt/translation.json";

// We intentionally don't use the http backend in dev to make it simpler.
// Load resources inline so translations work even if public/ files aren't served yet.
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: "pt", // default language (you can change to 'en' or detect dynamically)
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
