import { useEffect, useState } from "react";

function TypewriterText({ text, shouldReduceMotion }) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    let characterIndex = 0;
    const intervalId = window.setInterval(() => {
      characterIndex += 1;
      setVisibleText(text.slice(0, characterIndex));

      if (characterIndex >= text.length) {
        window.clearInterval(intervalId);
      }
    }, 55);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion, text]);

  return (
    <>
      <span aria-hidden="true">
        {shouldReduceMotion ? text : visibleText}
      </span>
      {!shouldReduceMotion && (
        <span
          aria-hidden="true"
          className="ms-1 inline-block h-5 w-0.5 animate-pulse bg-primary align-middle"
        />
      )}
    </>
  );
}

export default TypewriterText;
