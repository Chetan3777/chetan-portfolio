import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { projects, type Project } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-content">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Projects, shipped{" "}
              <span className="italic-accent">end to end.</span>
            </>
          }
          description="A platform I built from scratch and a banking migration that's still humming in production."
        />

        <div
          className={`mt-16 grid gap-6 ${
            projects.length > 1
              ? "auto-rows-fr lg:grid-cols-2"
              : "mx-auto max-w-3xl"
          }`}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        {/* Soft hint for visitors: more work exists but is private */}
        <p className="mt-10 text-center text-sm text-fg-muted">
          More work lives in private repos.{" "}
          <a
            href="#contact"
            className="font-semibold text-fg underline-offset-4 hover:text-brand hover:underline"
          >
            Get in touch
          </a>{" "}
          and I'll happily walk you through it.
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLElement>(null);

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    const el = cardRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * 4;
    const ry = (x - 0.5) * 4;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  }

  function onMouseLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
  }

  const featured = !!project.featured;
  const hasActions = !!project.github || !!project.href;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-200 sm:p-8 ${
        featured
          ? "border-brand/40 bg-gradient-to-br from-brand/10 via-cream-50 to-cream-50 shadow-soft-lg"
          : "border-line bg-cream-50 shadow-soft hover:shadow-soft-lg"
      }`}
    >
      {/* Header — aligns across cards */}
      <div className="flex min-h-[28px] items-start justify-between gap-4">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
          <span>0{index + 1}</span>
          {project.badge && (
            <>
              <span aria-hidden>·</span>
              <span className="text-fg-muted">{project.badge}</span>
            </>
          )}
        </div>

        {featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            <Sparkles className="h-3 w-3" />
            AI Native
          </span>
        )}
      </div>

      {/* Title — fixed top alignment */}
      <h3 className="mt-4 display-h text-3xl text-fg sm:text-4xl">
        {project.name}
      </h3>

      {/* Blurb — uniform height for visual alignment */}
      <p className="mt-3 min-h-[4.5rem] text-[15px] leading-relaxed text-fg-muted sm:text-base">
        {project.blurb}
      </p>

      <ul className="mt-2 space-y-2.5 text-sm text-fg sm:text-[15px]">
        {project.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span
              aria-hidden
              className={`mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                featured ? "bg-brand" : "bg-fg/60"
              }`}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className={featured ? "chip-brand" : "chip"}>
            {s}
          </span>
        ))}
      </div>

      {/* Footer pushed to bottom for cross-card alignment */}
      {hasActions && (
        <div className="mt-auto flex items-center gap-3 border-t border-line pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary text-xs"
              aria-label={`${project.name} on GitHub`}
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary text-xs"
            >
              View Project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
