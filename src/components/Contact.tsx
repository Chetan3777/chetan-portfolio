import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="section section-dark">
      <div className="max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-line-dark bg-ink-800 p-5 sm:rounded-[28px] sm:p-8 lg:p-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 dot-grid-dark opacity-30 mask-fade-edges"
          />

          <div className="relative grid items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            {/* Left: heading */}
            <div>
              <span className="eyebrow-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Contact
              </span>
              <h2 className="mt-5 display-h text-3xl text-fg-inverse sm:text-5xl lg:text-6xl">
                Let's build something{" "}
                <span className="italic-accent">that matters.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-fg-inverse-muted sm:mt-5 sm:text-lg">
                {profile.openTo}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn-primary w-full justify-center sm:w-auto"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="btn-ghost-dark w-full justify-center sm:w-auto"
                >
                  Download Resume
                </a>
              </div>

              <div className="mt-6 border-t border-line-dark pt-5 font-mono text-[11px] text-fg-inverse-muted sm:mt-8 sm:pt-6">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {profile.location}
                </span>
              </div>
            </div>

            {/* Right: contact channels */}
            <div className="space-y-4">
              <span className="eyebrow-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Primary channel
              </span>

              <button
                type="button"
                onClick={copyEmail}
                className="group w-full rounded-2xl border border-line-dark bg-ink-900/60 p-4 text-left transition-colors hover:border-brand/40 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:p-5"
                aria-label="Copy email to clipboard"
              >
                <div className="flex min-w-0 items-center gap-3 sm:flex-1">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1 break-all font-mono text-sm text-fg-inverse sm:break-normal sm:text-base">
                    {profile.email}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-line-dark bg-ink-700/50 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-inverse-muted transition-colors group-hover:border-brand/30 group-hover:text-brand sm:mt-0 sm:shrink-0 sm:border-0 sm:bg-transparent sm:py-0">
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Tap to copy
                    </>
                  )}
                </div>
              </button>

              <div className="grid grid-cols-1 gap-3">
                <SocialLink
                  href={profile.linkedin}
                  icon={<Linkedin className="h-4 w-4" />}
                  label="LinkedIn"
                  handle="in/chetan-jha"
                />
                <SocialLink
                  href={profile.github}
                  icon={<Github className="h-4 w-4" />}
                  label="GitHub"
                  handle="@Chetan3777"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex items-center gap-3 rounded-2xl border border-line-dark bg-ink-900/60 p-4 transition-colors hover:border-brand/40 sm:p-5"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line-dark bg-ink-700 text-fg-inverse-muted group-hover:border-brand/40 group-hover:text-brand">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-fg-inverse-muted">
          {label}
        </span>
        <span className="block truncate text-sm text-fg-inverse">{handle}</span>
      </span>
      <span
        aria-hidden
        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line-dark bg-ink-700/80 font-mono text-sm text-fg-inverse-muted group-hover:border-brand/40 group-hover:text-brand"
      >
        ↗
      </span>
    </a>
  );
}
