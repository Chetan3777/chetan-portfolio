import { motion } from "framer-motion";
import { ArrowUpRight, Download, MapPin, Star } from "lucide-react";
import { heroStats, profile } from "../data/portfolio";
import Typewriter from "./ui/Typewriter";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-36 pb-16 container-px sm:pt-32"
    >
      <div className="max-w-content relative w-full">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.07, delayChildren: 0.15 }}
          className="flex flex-col items-center text-center"
        >
          {/* "Hello!" style availability pill */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-50 px-4 py-1.5 shadow-soft"
          >
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
              {profile.heroPill}
            </span>
          </motion.div>

          {/* Big display heading */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-7 display-h text-[clamp(2.6rem,8.5vw,6.5rem)] text-fg"
          >
            <span className="block">
              I'm <span className="italic-accent">Chetan</span>,
            </span>
            <span className="block">Senior Software Engineer</span>
          </motion.h1>

          {/* Sub-tagline with typewriter */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 flex flex-wrap items-baseline justify-center gap-x-2 font-mono text-sm text-fg-muted sm:text-base"
          >
            <span className="text-brand">›</span>
            <span className="text-fg">
              <Typewriter words={profile.roles} />
            </span>
          </motion.div>
        </motion.div>

        {/* ── Portrait card + flanking content ─────────── */}
        <div className="relative mt-12 grid items-end gap-8 lg:mt-10 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left: testimonial quote */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="order-3 max-w-xs justify-self-start lg:order-1 lg:mb-6 lg:justify-self-end"
          >
            <div className="rounded-2xl border border-line bg-cream-50 p-5 shadow-soft">
              <div className="flex gap-1">
                {Array.from({ length: heroStats.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-brand text-brand"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {profile.heroQuote}
              </p>
            </div>
          </motion.div>

          {/* Center: portrait card */}
          <PortraitCard />

          {/* Right: stat block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="order-2 justify-self-end lg:order-3 lg:mb-6 lg:justify-self-start"
          >
            <div className="text-right lg:text-left">
              <div className="flex justify-end gap-1 lg:justify-start">
                {Array.from({ length: heroStats.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand text-brand"
                  />
                ))}
              </div>
              <div className="mt-3 display-h text-5xl text-fg">
                {heroStats.years}{" "}
                <span className="font-sans text-3xl font-bold">Years</span>
              </div>
              <p className="mt-1 text-sm text-fg-muted">
                {heroStats.yearsLabel}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── CTAs ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            View My Work
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-secondary">
            Hire Me
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-fg-muted underline-offset-4 hover:text-fg hover:underline"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        {/* Location meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim"
        >
          <MapPin className="h-3.5 w-3.5" />
          {profile.location}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * The signature portrait card — orange circle backdrop with a
 * professional typographic mark + 4 floating tech badges in the
 * corners. Edit `profile.portrait` in `data/portfolio.ts` to change
 * the centered text. Swap for a real <img /> when ready.
 */
function PortraitCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="order-1 mx-auto lg:order-2"
    >
      <div className="relative h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px]">
        {/* Orange circle */}
        <div className="absolute inset-x-0 bottom-0 mx-auto h-[78%] w-[78%] rounded-full bg-brand" />

        {/* Decorative dashed ring */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-spin-slow rounded-full border border-dashed border-fg/15"
          style={{
            maskImage:
              "linear-gradient(180deg, transparent 40%, black 40%, black 60%, transparent 60%)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 40%, black 40%, black 60%, transparent 60%)",
          }}
        />

        {/* Centered typographic mark */}
        <div className="absolute inset-0 grid place-items-end justify-center pb-12">
          <div className="text-center">
            <div className="font-display italic text-[clamp(4.5rem,11vw,7.5rem)] leading-[0.9] text-cream-50">
              {profile.portrait.headline}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream-50/90">
              <span className="inline-block h-px w-4 bg-cream-50/60" />
              {profile.portrait.subline}
              <span className="inline-block h-px w-4 bg-cream-50/60" />
            </div>
          </div>
        </div>

        {/* Floating tech badges */}
        <FloatBadge
          label="Java"
          className="absolute left-[-8%] top-[18%] animate-float-slow"
        />
        <FloatBadge
          label="Spring AI"
          className="absolute right-[-10%] top-[10%] animate-float-slow-rev"
          accent
        />
        <FloatBadge
          label="MCP"
          className="absolute bottom-[28%] left-[-12%] animate-float-slow-rev"
          accent
        />
        <FloatBadge
          label="AWS · Azure"
          className="absolute bottom-[18%] right-[-8%] animate-float-slow"
        />
      </div>
    </motion.div>
  );
}

function FloatBadge({
  label,
  className = "",
  accent = false,
}: {
  label: string;
  className?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-soft ${
        accent
          ? "border-brand/40 bg-brand/10 text-brand-700"
          : "border-line bg-cream-50 text-fg"
      } ${className}`}
    >
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          accent ? "bg-brand" : "bg-fg/40"
        }`}
      />
      <span className="font-mono text-[11px] font-semibold tracking-wide">
        {label}
      </span>
    </div>
  );
}
