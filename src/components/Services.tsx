import { motion } from "framer-motion";
import { ArrowUpRight, Cloud, Server, Sparkles } from "lucide-react";
import { services } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";

const iconMap = {
  server: Server,
  cloud: Cloud,
  sparkles: Sparkles,
} as const;

export default function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-ink-900 text-fg-inverse"
    >
      {/* Subtle dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-grid-dark opacity-60 mask-fade-edges"
      />
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-brand/10 blur-[120px]"
      />

      <div className="relative section">
        <div className="max-w-content">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              variant="dark"
              eyebrow="What I Do"
              title={
                <>
                  Services I bring to{" "}
                  <span className="italic-accent">your team.</span>
                </>
              }
              description="From production Java backends to multi-agent orchestration — three core areas where I can move the needle from day one."
            />
            <a
              href="#contact"
              className="btn-ghost-dark whitespace-nowrap"
            >
              Let's talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon as keyof typeof iconMap] ?? Server;
              return (
                <motion.article
                  key={svc.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                    svc.featured
                      ? "border-brand/50 bg-gradient-to-br from-brand/15 via-ink-800 to-ink-800"
                      : "border-line-dark bg-ink-800 hover:bg-ink-700/60"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-2xl ${
                        svc.featured
                          ? "bg-brand text-white"
                          : "bg-ink-700 text-fg-inverse"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-fg-inverse-muted">
                      / {svc.number}
                    </span>
                  </div>

                  <h3 className="mt-7 display-h text-2xl text-fg-inverse">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-inverse-muted">
                    {svc.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <li key={tag}>
                        <span className="chip-dark">{tag}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-center justify-between border-t border-line-dark pt-4 font-mono text-[11px] text-fg-inverse-muted">
                    <span>Production-ready</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
