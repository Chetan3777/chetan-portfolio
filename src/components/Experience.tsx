import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown, MapPin } from "lucide-react";
import { experience, type ExperienceItem } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section section-dark">
      <div className="max-w-content">
        <SectionHeading
          variant="dark"
          eyebrow="Experience"
          title={
            <>
              Five years of shipping{" "}
              <span className="italic-accent">production systems.</span>
            </>
          }
          description="Banking, airline, and platform-grade backend systems — now layered with agentic AI. Tap any role to read what I did there."
        />

        <ol className="relative mt-16 space-y-4">
          {/* Vertical spine */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[19px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-brand/60 via-line-dark to-transparent md:block"
          />

          {experience.map((job, i) => (
            <ExperienceCard key={job.company + job.start} job={job} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ExperienceCard({ job, index }: { job: ExperienceItem; index: number }) {
  const [open, setOpen] = useState(false);
  const contentId = `experience-content-${index}`;

  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.55 }}
      className="relative md:pl-16"
    >
      {/* Timeline node */}
      <span
        aria-hidden
        className={`absolute left-0 top-5 hidden h-10 w-10 items-center justify-center rounded-full md:inline-flex ${
          job.current
            ? "bg-brand text-white shadow-brand-glow"
            : "border border-line-dark bg-ink-800 text-fg-inverse-muted"
        }`}
      >
        <Briefcase className="h-4 w-4" />
      </span>

      <article
        className={`card-dark overflow-hidden transition-shadow ${
          open ? "ring-1 ring-brand/30" : "hover:ring-1 hover:ring-line-dark"
        }`}
      >
        {/* Clickable header — always visible */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={contentId}
          className="block w-full p-6 text-left sm:p-7"
        >
          <header className="space-y-3">
            {/* Row 1: role + expand toggle */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 flex-1 font-display text-xl leading-snug text-fg-inverse sm:text-2xl">
                {job.role}
              </h3>
              <span
                aria-hidden
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line-dark bg-ink-700 text-fg-inverse-muted transition-transform duration-300 ${
                  open ? "rotate-180 border-brand/40 text-brand" : ""
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </div>

            {/* Row 2: status + dates */}
            <div className="flex flex-wrap items-center gap-2">
              {job.current && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
                    <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  Current
                </span>
              )}
              <span className="rounded-full border border-line-dark bg-ink-700 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-inverse-muted">
                {job.start} — {job.end}
              </span>
            </div>

            {/* Row 3: company + location */}
            <div className="space-y-1">
              <p className="font-semibold text-fg-inverse">{job.company}</p>
              {job.location ? (
                <p className="inline-flex items-center gap-1.5 text-sm text-fg-inverse-muted">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {job.location}
                </p>
              ) : null}
            </div>
          </header>

          {/* Quick-scan tags — visible even when collapsed */}
          {job.tags && job.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span key={t} className="chip-dark">
                  {t}
                </span>
              ))}
            </div>
          )}
        </button>

        {/* Expandable details — all bullets live here */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.section
              key="content"
              id={contentId}
              role="region"
              aria-label={`${job.role} at ${job.company} — details`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.32,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="overflow-hidden"
            >
              <div className="border-t border-line-dark px-6 py-6 sm:px-7 sm:py-7">
                <span className="eyebrow-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  What I delivered
                </span>
                <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-fg-inverse sm:text-base">
                  {job.bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                      className="flex gap-3"
                    >
                      <span
                        aria-hidden
                        className="mt-[10px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      />
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </article>
    </motion.li>
  );
}
