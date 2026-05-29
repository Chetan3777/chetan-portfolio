import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
  cursorClassName?: string;
};

/**
 * Lightweight typewriter that cycles through `words` indefinitely.
 * Respects prefers-reduced-motion by displaying the first word statically.
 */
export default function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 35,
  pause = 1500,
  className = "",
  cursorClassName = "",
}: Props) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setText(words[0] ?? "");
      return;
    }
    const current = words[idx % words.length] ?? "";
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
    } else {
      timeout = window.setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }
    return () => window.clearTimeout(timeout);
  }, [text, deleting, idx, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span
        className={`ml-0.5 inline-block w-[2px] -translate-y-[0.05em] align-middle animate-blink ${cursorClassName}`}
        style={{ backgroundColor: "currentColor", height: "0.9em" }}
        aria-hidden
      />
    </span>
  );
}
