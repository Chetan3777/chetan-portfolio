import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "light",
}: Props) {
  const dark = variant === "dark";
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`max-w-3xl ${alignment}`}
    >
      <span className={dark ? "eyebrow-dark" : "eyebrow"}>
        <span className={`inline-block h-1.5 w-1.5 rounded-full ${dark ? "bg-brand" : "bg-brand"}`} />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 display-h text-4xl sm:text-5xl lg:text-6xl ${
          dark ? "text-fg-inverse" : "text-fg"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
            dark ? "text-fg-inverse-muted" : "text-fg-muted"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
