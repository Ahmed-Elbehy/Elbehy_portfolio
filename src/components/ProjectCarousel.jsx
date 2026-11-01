import { useCallback, useEffect, useRef, useState } from "react";

function ProjectCarousel({ projects, t, shouldReduceMotion }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const scrollToSlide = useCallback(
    (index) => {
      const track = trackRef.current;
      const slides = track?.querySelectorAll("[data-project-slide]");
      const slide = slides?.[index];

      if (!track || !slide) {
        return;
      }

      const trackRect = track.getBoundingClientRect();
      const slideRect = slide.getBoundingClientRect();

      track.scrollTo({
        left: track.scrollLeft + slideRect.left - trackRect.left,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
      setActiveIndex(index);
    },
    [shouldReduceMotion],
  );

  useEffect(() => {
    if (shouldReduceMotion || isHovered || isFocused || projects.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      scrollToSlide((activeIndex + 1) % projects.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [
    activeIndex,
    isFocused,
    isHovered,
    projects.length,
    scrollToSlide,
    shouldReduceMotion,
  ]);

  const updateActiveSlide = () => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const trackLeft = track.getBoundingClientRect().left;
    const slides = Array.from(track.querySelectorAll("[data-project-slide]"));
    const closestSlide = slides.reduce(
      (closest, slide, index) => {
        const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
        return distance < closest.distance ? { distance, index } : closest;
      },
      { distance: Number.POSITIVE_INFINITY, index: 0 },
    );

    setActiveIndex(closestSlide.index);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          {t("projects.carouselHint", {
            current: activeIndex + 1,
            total: projects.length,
          })}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollToSlide(Math.max(activeIndex - 1, 0))}
            disabled={activeIndex === 0}
            aria-label={t("projects.previousProject")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                d="m15 18-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() =>
              scrollToSlide(Math.min(activeIndex + 1, projects.length - 1))
            }
            disabled={activeIndex === projects.length - 1}
            aria-label={t("projects.nextProject")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                d="m9 18 6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        dir="ltr"
        role="region"
        aria-roledescription={t("projects.carouselRole")}
        aria-label={t("projects.title")}
        onScroll={updateActiveSlide}
        className="project-carousel-track flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3"
      >
        {projects.map((project, index) => (
          <article
            key={project.id}
            data-project-slide
            role="group"
            aria-roledescription={t("projects.slideRole")}
            aria-label={t("projects.slideLabel", {
              current: index + 1,
              total: projects.length,
            })}
            className="min-w-0 shrink-0 snap-start basis-[88%] overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 transition-colors hover:border-primary/40 sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(33.333%-0.834rem)]"
          >
            <video
              poster={project.image}
              controls
              playsInline
              preload="none"
              aria-label={t("projects.videoLabel", {
                name: t(project.nameKey),
              })}
              className="aspect-video w-full bg-slate-950 object-contain"
            >
              <source src={project.video} />
              {t("projects.videoUnsupported")}
            </video>
            <div dir="auto" className="p-5">
              <h3 className="text-xl font-bold text-white">
                {t(project.nameKey)}
              </h3>
              <p className="mt-3 min-h-14 leading-7 text-gray-400">
                {t(project.descriptionKey)}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-primary transition hover:text-sky-300"
              >
                {t("projects.viewProject")}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div
        role="group"
        aria-label={t("projects.title")}
        className="mt-5 flex justify-center gap-2"
      >
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => scrollToSlide(index)}
            aria-label={t("projects.goToSlide", { number: index + 1 })}
            aria-current={index === activeIndex ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex
                ? "w-7 bg-primary"
                : "w-2.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
