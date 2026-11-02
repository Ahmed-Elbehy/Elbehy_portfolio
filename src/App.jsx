import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import "./App.css";
import SiteNavbar from "./components/Navbar";
import SiteFooter from "./components/Footer";
import ProjectCarousel from "./components/ProjectCarousel";
import SectionWrapper from "./components/SectionWrapper";
import TypewriterText from "./components/TypewriterText";
import { projects } from "./data/projects";
import services from "./data/services";
import contactLinks from "./data/contact";
import skills from "./data/skills";

const profilePhoto = `${import.meta.env.BASE_URL}img/otherImages/${encodeURIComponent("Gemini_Generated_Image_kj8pvekj8pvekj8p.jpg")}`;
const certificateImage = `${import.meta.env.BASE_URL}Certificates/${encodeURIComponent("Ahmed Mohamed Ebrahem Hosin.jpg")}`;

const skillBadges = {
  react: "⚛",
  css: "CSS",
  javascript: "JS",
  api: "</>",
  bootstrap: "B",
  tailwind: "≋",
  wordpress: "W",
};

const contactIcons = {
  whatsapp: (
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.49-8.43ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
  ),
  linkedin: (
    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5ZM8 19H5V9h3v10ZM6.5 7.73a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM20 19h-3v-4.87c0-2.93-3.5-2.71-3.5 0V19h-3V9h3v1.6c1.4-2.6 6.5-2.8 6.5 2.5V19Z" />
  ),
  github: (
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.28c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
  ),
};

const SectionHeading = ({ title, description }) => (
  <div className="mx-auto mb-12 max-w-2xl text-center">
    <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
    {description && (
      <p className="mt-5 text-base leading-8 text-gray-400">{description}</p>
    )}
  </div>
);

function App() {
  const { i18n, t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const isArabic = i18n.language.startsWith("ar");
  const intro = t("hero.intro");

  // Keep <html lang> and <html dir> in sync with the current language
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language.startsWith("ar")
      ? "rtl"
      : "ltr";
  }, [i18n.language]);

  return (
    <div className="flex min-h-screen flex-col bg-dark text-gray-200">
      <SiteNavbar />

      <main className="flex-1 overflow-x-clip">
        <SectionWrapper
          id="home"
          animate={false}
          className="relative isolate flex items-center overflow-hidden py-16 md:min-h-[calc(100vh-5rem)] md:py-24"
        >
          <video
            aria-hidden="true"
            autoPlay={!shouldReduceMotion}
            muted
            loop
            playsInline
            preload="metadata"
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
          >
            <source
              src={`${import.meta.env.BASE_URL}vidoes/bgHomePage.mp4`}
              type="video/mp4"
            />
          </video>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-slate-950/55"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-dark/35 via-dark/35 to-dark"
          />
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12">
            <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
              <motion.div
                initial={{
                  opacity: 0,
                  x: shouldReduceMotion ? 0 : isArabic ? 72 : -72,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: "easeOut",
                }}
                className="text-center md:text-start"
              >
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {t("hero.title")}
                </p>
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                  {t("hero.name")}
                </h1>
                <p
                  aria-label={intro}
                  className="mx-auto mt-6 min-h-16 max-w-xl text-lg leading-8 text-gray-100 drop-shadow-md md:mx-0"
                >
                  <TypewriterText
                    key={intro}
                    text={intro}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                  <a
                    href={`${import.meta.env.BASE_URL}CV/Ahmed_Hosin_CV_English.pdf`}
                    download="Ahmed_Hosin_CV_English.pdf"
                    className="rounded-lg bg-primary px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-black/30 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark"
                  >
                    {t("hero.downloadCV")}
                  </a>
                  <a
                    href="#contact"
                    className="rounded-lg border border-white/40 bg-slate-950/30 px-6 py-3 font-semibold text-white shadow-lg shadow-black/30 backdrop-blur-sm transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {t("hero.contactMe")}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: shouldReduceMotion ? 0 : isArabic ? -72 : 72,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: "easeOut",
                  delay: shouldReduceMotion ? 0 : 0.12,
                }}
                className="mx-auto w-full max-w-sm"
              >
                <img
                  src={profilePhoto}
                  alt={t("hero.profileAlt")}
                  className="aspect-4/5 w-full object-cover mix-blend-screen"
                  fetchPriority="high"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="about" direction="left">
          <div className="mx-auto max-w-4xl">
            <SectionHeading title={t("about.title")} />
            <p className="text-center text-lg leading-9 text-gray-300">
              {t("about.description")}
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="skills" direction="right">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title={t("skills.title")} />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-slate-800/50 p-6 text-center transition hover:-translate-y-1 hover:border-primary/50"
                >
                  <span
                    aria-hidden="true"
                    className={`flex h-14 w-14 items-center justify-center text-xl font-bold text-primary ${
                      skill.icon === "bootstrap"
                        ? "rounded-2xl bg-violet-500/15 text-violet-300"
                        : skill.icon === "tailwind"
                          ? "rounded-xl bg-cyan-400/15 text-cyan-300"
                          : skill.icon === "wordpress"
                            ? "rounded-full border-2 border-slate-300 text-slate-200"
                            : "rounded-xl bg-primary/10"
                    }`}
                  >
                    {skillBadges[skill.icon]}
                  </span>
                  <span className="font-semibold text-white">
                    {t(skill.nameKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="services" direction="left">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title={t("services.title")} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  className="rounded-2xl border border-white/10 bg-slate-800/50 p-6 transition hover:-translate-y-1 hover:border-primary/50"
                >
                  <span
                    aria-hidden="true"
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold leading-8 text-white">
                    {t(service.nameKey)}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="certificates" direction="left">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title={t("certificates.title")}
              description={t("certificates.description")}
            />
            <div className="rounded-2xl border border-primary/20 bg-slate-800/30 p-3 shadow-xl md:p-5">
              <a
                href={certificateImage}
                target="_blank"
                rel="noreferrer"
                aria-label={t("certificates.viewFullSize")}
                className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <img
                  src={certificateImage}
                  alt={t("certificates.imageAlt")}
                  className="block max-h-[70vh] w-full rounded-xl object-contain"
                />
              </a>
              <h3 className="mt-4 text-center text-lg font-semibold text-white">
                {t("certificates.name")}
              </h3>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="projects" direction="left">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title={t("projects.title")} />
            <ProjectCarousel
              projects={projects}
              t={t}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper id="contact" direction="right">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              title={t("contact.title")}
              description={t("contact.description")}
            />
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(contactLinks).map(([id, href]) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t(`contact.${id}`)}
                  title={t(`contact.${id}`)}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-gray-200 transition hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-current"
                    aria-hidden="true"
                  >
                    {contactIcons[id]}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
