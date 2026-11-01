import { motion, useReducedMotion } from "framer-motion";

const SectionWrapper = ({
  id,
  className = "",
  direction = "left",
  animate = true,
  children,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const offset = direction === "right" ? 64 : -64;
  const Wrapper = animate ? motion.section : "section";
  const animationProps = animate
    ? {
        initial: { x: shouldReduceMotion ? 0 : offset },
        whileInView: { x: 0 },
        transition: {
          duration: shouldReduceMotion ? 0 : 0.65,
          ease: "easeOut",
        },
        viewport: { once: true, amount: 0.2 },
      }
    : {};

  return (
    <Wrapper
      id={id}
      className={`scroll-mt-20 px-4 py-16 md:py-24 ${className}`}
      {...animationProps}
    >
      {children}
    </Wrapper>
  );
};

export default SectionWrapper;
