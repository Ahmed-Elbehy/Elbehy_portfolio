import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationAR from "./locales/ar.json";
import translationEN from "./locales/en.json";

// Translation resources
const resources = {
  ar: {
    translation: translationAR,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // Default language is Arabic
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
