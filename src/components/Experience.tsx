import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown, MapPin } from "lucide-react";
import { experience, type ExperienceItem } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="max-w-content">
        <SectionHeading
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
            className="pointer-events-none absolute left-[19px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-brand/60 via-line to-transparent md:block"
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
            : "border border-line bg-cream-50 text-fg-muted"
        }`}
      >
        <Briefcase className="h-4 w-4" />
      </span>

      <article
        className={`card-light overflow-hidden transition-shadow ${
          open ? "shadow-soft-lg" : "shadow-soft hover:shadow-soft-lg"
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
          <header className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl text-fg sm:text-2xl">
                  {job.role}
                </h3>
                {job.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    <span className="relative inline-flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
                      <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-fg-muted">
                <span className="font-semibold text-fg">{job.company}</span>
                {job.location ? (
                  <span className="inline-flex items-center gap-1.5 text-sm text-fg-dim">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                ) : null}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <div className="rounded-full border border-line bg-cream-100 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                {job.start} — {job.end}
              </div>
              <span
                aria-hidden
                className={`grid h-9 w-9 place-items-center rounded-full border border-line bg-cream-100 text-fg-muted transition-transform duration-300 ${
                  open ? "rotate-180 border-brand/40 text-brand" : ""
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </div>
          </header>

          {/* Quick-scan tags — visible even when collapsed */}
          {job.tags && job.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span key={t} className="chip">
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
              <div className="border-t border-line px-6 py-6 sm:px-7 sm:py-7">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  What I delivered
                </span>
                <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-fg sm:text-base">
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
