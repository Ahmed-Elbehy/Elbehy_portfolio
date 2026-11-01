import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

function ProjectCarousel({ projects, t, shouldReduceMotion }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const scrollToSlide = useCallback(
    (index) => {
      const track = trackRef.current;
      const slides = Array.from(
        track?.querySelectorAll("[data-project-slide]") ?? [],
      ).filter((slide) => Number(slide.dataset.projectIndex) === index);

      if (!track || slides.length === 0) {
        return;
      }

      const trackRect = track.getBoundingClientRect();
      const slide = slides.reduce((closest, candidate) => {
        const distance = Math.abs(
          candidate.getBoundingClientRect().left - trackRect.left,
        );
        return distance < closest.distance
          ? { distance, element: candidate }
          : closest;
      }, { distance: Number.POSITIVE_INFINITY, element: slides[0] }).element;
      const slideRect = slide.getBoundingClientRect();

      track.scrollTo({
        left: track.scrollLeft + slideRect.left - trackRect.left,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
      setActiveIndex(index);
    },
    [shouldReduceMotion],
  );

  useLayoutEffect(() => {
    const track = trackRef.current;
    const slides = track?.querySelectorAll("[data-project-slide]");

    if (track && slides?.[projects.length]) {
      track.scrollLeft = slides[projects.length].offsetLeft;
    }
  }, [projects.length]);

  useEffect(() => {
    if (shouldReduceMotion || isHovered || isFocused || projects.length < 2) {
      return undefined;
    }

    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    let frameId;
    let previousFrameTime;

    const advance = (frameTime) => {
      if (previousFrameTime === undefined) {
        previousFrameTime = frameTime;
      }

      const elapsed = Math.min(frameTime - previousFrameTime, 50);
      previousFrameTime = frameTime;

      const slides = track.querySelectorAll("[data-project-slide]");
      const loopWidth =
        slides[projects.length].offsetLeft - slides[0].offsetLeft;

      if (loopWidth > 0) {
        track.scrollLeft += elapsed * 0.025;

        if (track.scrollLeft >= loopWidth * 1.5) {
          track.scrollLeft -= loopWidth;
        } else if (track.scrollLeft <= loopWidth * 0.5) {
          track.scrollLeft += loopWidth;
        }
      }

      frameId = window.requestAnimationFrame(advance);
    };

    frameId = window.requestAnimationFrame(advance);

    return () => window.cancelAnimationFrame(frameId);
  }, [isFocused, isHovered, projects.length, shouldReduceMotion]);

  const updateActiveSlide = () => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const trackLeft = track.getBoundingClientRect().left;
    const slides = Array.from(track.querySelectorAll("[data-project-slide]"));
    const closestSlide = slides.reduce(
      (closest, slide) => {
        const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
        return distance < closest.distance
          ? {
              distance,
              index: Number(slide.dataset.projectIndex),
            }
          : closest;
      },
      { distance: Number.POSITIVE_INFINITY, index: 0 },
    );

    setActiveIndex((currentIndex) =>
      currentIndex === closestSlide.index ? currentIndex : closestSlide.index,
    );
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
            onClick={() =>
              scrollToSlide((activeIndex - 1 + projects.length) % projects.length)
            }
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
            onClick={() => scrollToSlide((activeIndex + 1) % projects.length)}
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
        className="project-carousel-track flex gap-5 overflow-x-auto pb-3"
      >
          {[0, 1].flatMap((copyIndex) =>
          projects.map((project, index) => (
              <article
                key={`${copyIndex}-${project.id}`}
                data-project-slide
                data-project-index={index}
                aria-hidden={copyIndex === 1}
                inert={copyIndex === 1}
                role="group"
                aria-roledescription={t("projects.slideRole")}
                aria-label={t("projects.slideLabel", {
                  current: index + 1,
                  total: projects.length,
                })}
                className="flex min-w-0 shrink-0 basis-[88%] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 transition-colors hover:border-primary/40 sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(33.333%-0.834rem)]"
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
                <div dir="auto" className="flex grow flex-col p-5">
                  <h3 className="text-xl font-bold text-white">
                    {t(project.nameKey)}
                  </h3>
                  <p className="mt-3 h-[5.25rem] overflow-hidden leading-7 text-gray-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                    {t(project.descriptionKey)}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-4 font-semibold text-primary transition hover:text-sky-300"
                  >
                    {t("projects.viewProject")}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
          )),
        )}
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
