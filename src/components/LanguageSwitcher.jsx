import { useTranslation } from "react-i18next";

// Language switcher button (AR / EN)
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Switch between Arabic and English
  const toggleLanguage = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="rounded-md border border-gray-600 px-3 py-1 text-sm text-gray-200 hover:border-primary hover:text-primary"
      aria-label="Switch language"
    >
      {i18n.language === "ar" ? "EN" : "AR"}
    </button>
  );
};

export default LanguageSwitcher;
