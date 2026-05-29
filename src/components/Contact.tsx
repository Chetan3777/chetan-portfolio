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
    <section id="contact" className="section">
      <div className="max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] border border-line-dark bg-ink-900 p-8 text-fg-inverse sm:p-12 lg:p-16"
        >
          {/* Decorative glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand/30 blur-[120px]"
          />
          {/* Dot pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 dot-grid-dark opacity-40 mask-fade-edges"
          />

          <div className="relative grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
            {/* Left: heading */}
            <div>
              <span className="eyebrow-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Contact
              </span>
              <h2 className="mt-5 display-h text-4xl text-fg-inverse sm:text-5xl lg:text-6xl">
                Let's build something{" "}
                <span className="italic-accent">that matters.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-fg-inverse-muted sm:text-lg">
                {profile.openTo}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn-primary"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="btn-ghost-dark"
                >
                  Download Résumé
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line-dark pt-6 font-mono text-[11px] text-fg-inverse-muted">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                    <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Replies within 24h
                </span>
              </div>
            </div>

            {/* Right: contact card */}
            <div className="space-y-3">
              {/* Email */}
              <span className="eyebrow-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Primary channel
              </span>
              <button
                type="button"
                onClick={copyEmail}
                className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-line-dark bg-ink-800 px-4 py-4 text-left transition-colors hover:border-brand/40"
                aria-label="Copy email to clipboard"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="truncate font-mono text-sm text-fg-inverse sm:text-base">
                    {profile.email}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-inverse-muted group-hover:text-brand">
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      copy
                    </>
                  )}
                </span>
              </button>

              {/* Socials */}
              <div className="grid gap-3 sm:grid-cols-2">
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
      className="group flex items-center justify-between rounded-2xl border border-line-dark bg-ink-800 px-4 py-4 transition-colors hover:border-brand/40"
    >
      <span className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl border border-line-dark bg-ink-700 text-fg-inverse-muted group-hover:border-brand/40 group-hover:text-brand">
          {icon}
        </span>
        <span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-fg-inverse-muted">
            {label}
          </span>
          <span className="block text-sm text-fg-inverse">{handle}</span>
        </span>
      </span>
      <span className="font-mono text-fg-inverse-muted group-hover:text-brand">
        ↗
      </span>
    </a>
  );
}
