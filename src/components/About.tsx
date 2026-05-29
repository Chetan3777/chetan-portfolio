import { motion } from "framer-motion";
import { profile, education } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-content">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="About Me"
              title={
                <>
                  Engineer first.{" "}
                  <span className="italic-accent">AI-native by choice.</span>
                </>
              }
            />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
              {profile.bio.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Quick facts */}
            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3"
            >
              <Fact label="Based in" value={profile.location} />
              <Fact label="Experience" value="5+ years" />
              <Fact label="Currently at" value="Qatar Airways" />
            </motion.dl>
          </div>

          {/* Side card */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="card-light p-6 shadow-soft sm:p-8">
              <div className="flex items-center justify-between">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Engineering principles
                </span>
                <span className="font-mono text-[11px] text-fg-dim">04</span>
              </div>

              <ul className="mt-6 space-y-4">
                {[
                  {
                    k: "01",
                    t: "Tests before tickets",
                    b: "Four-layer coverage on every change.",
                  },
                  {
                    k: "02",
                    t: "Observability first",
                    b: "If you can't see it, you can't fix it.",
                  },
                  {
                    k: "03",
                    t: "Architecture is decisions",
                    b: "Write down the why, not just the what.",
                  },
                  {
                    k: "04",
                    t: "AI as a building block",
                    b: "Agents are code. Treat them like it.",
                  },
                ].map((p) => (
                  <li
                    key={p.k}
                    className="flex items-start gap-4 border-t border-line pt-4 first:border-0 first:pt-0"
                  >
                    <span className="font-mono text-xs font-bold text-brand">
                      {p.k}
                    </span>
                    <div>
                      <p className="font-semibold text-fg">{p.t}</p>
                      <p className="mt-0.5 text-sm text-fg-muted">{p.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education ribbon */}
            <div className="mt-4 rounded-2xl border border-line bg-cream-50 p-5 shadow-soft">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Education
              </span>
              <p className="mt-3 font-semibold text-fg">{education.degree}</p>
              <p className="mt-1 text-sm text-fg-muted">
                {education.school}
                <span className="mx-2 text-fg-dim">·</span>
                {education.years}
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-cream-50 p-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-fg">{value}</dd>
    </div>
  );
}
