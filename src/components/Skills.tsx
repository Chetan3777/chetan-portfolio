import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section section-light">
      <div className="max-w-content">
        <SectionHeading
          variant="light"
          eyebrow="Tech Stack"
          title={
            <>
              The tools I reach for{" "}
              <span className="italic-accent">every day.</span>
            </>
          }
          description="Grouped by what they actually do. AI / GenAI gets top billing — that's where the new work happens."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, idx) => {
            const brand = group.accent === "brand";
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-2xl border p-6 shadow-soft transition-all hover:-translate-y-0.5 ${
                  brand
                    ? "border-brand/30 bg-gradient-to-br from-brand/10 to-cream-50 md:col-span-2"
                    : "border-line bg-cream-50 hover:border-fg/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-muted">
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${
                        brand ? "bg-brand" : "bg-fg/40"
                      }`}
                    />
                    <span className={brand ? "text-brand-700" : ""}>
                      {group.name}
                    </span>
                  </h3>
                  <span className="font-mono text-[10px] text-fg-dim">
                    {group.items.length} items
                  </span>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className={brand ? "chip-brand" : "chip"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* AI Stack diagram */}
        <AIStackDiagram />
      </div>
    </section>
  );
}

function AIStackDiagram() {
  const layers = [
    {
      tag: "User",
      title: "Application Layer",
      sub: "Web client · API consumer",
      tone: "muted",
    },
    {
      tag: "LLM",
      title: "Large Language Model",
      sub: "OpenAI · Anthropic · OSS",
      tone: "brand",
    },
    {
      tag: "Agent",
      title: "Agent Orchestrator",
      sub: "Spring AI · planning · memory",
      tone: "primary",
    },
    {
      tag: "MCP",
      title: "MCP Servers",
      sub: "Pluggable toolsets · n services",
      tone: "primary",
    },
    {
      tag: "Tools",
      title: "Tools & Data",
      sub: "REST APIs · Vector DB · SQL",
      tone: "muted",
    },
  ] as const;

  const toneMap: Record<string, string> = {
    muted: "border-line bg-cream-50 text-fg-muted",
    primary: "border-fg/20 bg-cream-50 text-fg",
    brand: "border-brand/40 bg-brand/10 text-brand-700",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mt-10 rounded-3xl border border-line bg-cream-50 p-6 shadow-soft sm:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-muted">
          <span className="inline-block h-2 w-2 rounded-full bg-brand" />
          AI Stack — how I wire it together
        </h3>
        <span className="font-mono text-[11px] text-fg-dim">
          $ trace --pipeline
        </span>
      </div>

      <div className="mt-8 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
        {layers.map((layer, i) => (
          <div
            key={layer.tag}
            className="flex flex-1 items-stretch gap-3 lg:flex-col"
          >
            <div
              className={`flex flex-1 flex-col rounded-2xl border px-4 py-3 ${
                toneMap[layer.tone] ?? toneMap.muted
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-80">
                {layer.tag}
              </span>
              <span className="mt-1 text-sm font-bold text-fg">
                {layer.title}
              </span>
              <span className="mt-1 text-[11px] text-fg-muted">
                {layer.sub}
              </span>
            </div>
            {i < layers.length - 1 && (
              <div
                aria-hidden
                className="flex items-center justify-center text-brand lg:py-2"
              >
                <span className="hidden font-mono text-lg lg:inline">→</span>
                <span className="font-mono text-lg lg:hidden">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 font-mono text-xs text-fg-dim">
        // every layer is observable, testable and replaceable. the agent
        is just code.
      </p>
    </motion.div>
  );
}
