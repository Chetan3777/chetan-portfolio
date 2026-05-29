import { motion } from "framer-motion";
import { valueProps } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function ValueProps() {
  return (
    <section id="value" className="section">
      <div className="max-w-content">
        <SectionHeading
          eyebrow="What I Bring"
          title={
            <>
              Senior engineers ship more than code.{" "}
              <span className="italic-accent">Here's what I ship.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line/40 sm:grid-cols-2">
          {valueProps.map((v, i) => (
            <motion.article
              key={v.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              className="group relative overflow-hidden bg-cream-50 p-8 transition-colors hover:bg-cream-100 sm:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="display-h text-6xl text-fg-dim/50 transition-colors group-hover:text-brand sm:text-7xl">
                  {v.number}
                </span>
                <div
                  aria-hidden
                  className="h-2 w-12 origin-right scale-x-50 bg-brand transition-transform group-hover:scale-x-100"
                />
              </div>
              <h3 className="mt-6 display-h text-2xl text-fg sm:text-3xl">
                {v.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-fg-muted sm:text-base">
                {v.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
