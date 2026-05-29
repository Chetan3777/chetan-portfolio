import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Split links around the centered logo on desktop
  const mid = Math.ceil(navLinks.length / 2);
  const leftLinks = navLinks.slice(0, mid);
  const rightLinks = navLinks.slice(mid);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        className="fixed inset-x-0 top-4 z-40 flex justify-center container-px sm:top-6"
      >
        {/* ── Desktop pill nav ─────────────────────────── */}
        <nav
          aria-label="Primary"
          className="relative hidden w-full max-w-4xl items-center justify-between rounded-full border border-line-dark bg-ink-900 px-3 py-2 shadow-pill md:flex"
        >
          {/* Left links */}
          <ul className="flex items-center gap-1 pl-2">
            {leftLinks.map((link) => (
              <NavItem key={link.id} link={link} active={active === link.id} />
            ))}
          </ul>

          {/* Center logo */}
          <a
            href="#top"
            className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-full border border-line-dark bg-ink-800 px-3.5 py-1.5"
            aria-label="Home"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white">
              <span className="text-[10px] font-bold tracking-tight">
                {profile.initials}
              </span>
            </span>
            <span className="font-display text-base italic text-fg-inverse">
              {profile.shortName}
            </span>
          </a>

          {/* Right links */}
          <ul className="flex items-center gap-1 pr-2">
            {rightLinks.map((link) => (
              <NavItem key={link.id} link={link} active={active === link.id} />
            ))}
          </ul>
        </nav>

        {/* ── Mobile pill ──────────────────────────────── */}
        <nav
          aria-label="Primary"
          className="flex w-full items-center justify-between rounded-full border border-line-dark bg-ink-900 px-3 py-2 shadow-pill md:hidden"
        >
          <a href="#top" className="inline-flex items-center gap-2 pl-1" aria-label="Home">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white">
              <span className="text-[11px] font-bold tracking-tight">
                {profile.initials}
              </span>
            </span>
            <span className="font-display text-base italic text-fg-inverse">
              {profile.shortName}
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-fg-inverse"
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <Menu className="h-4 w-4" />
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile drawer ──────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="absolute inset-0 bg-ink-950/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 220 }}
              className="absolute left-4 right-4 top-4 rounded-3xl border border-line-dark bg-ink-900 p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl italic text-fg-inverse">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-fg-inverse"
                  aria-label="Close navigation"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <ul className="mt-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-base text-fg-inverse hover:bg-ink-800"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-brand">
                          0{i + 1}
                        </span>
                        {link.label}
                      </span>
                      <span className="text-fg-inverse-muted">→</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={profile.resumeUrl}
                download
                className="btn-primary mt-6 w-full"
              >
                Download Resume
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({
  link,
  active,
}: {
  link: { id: string; label: string };
  active: boolean;
}) {
  return (
    <li>
      <a
        href={`#${link.id}`}
        className={`relative inline-flex items-center rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
          active ? "text-fg-inverse" : "text-fg-inverse-muted hover:text-fg-inverse"
        }`}
      >
        {active && (
          <motion.span
            layoutId="nav-pill"
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="absolute inset-0 -z-0 rounded-full bg-brand"
          />
        )}
        <span className="relative z-10">{link.label}</span>
      </a>
    </li>
  );
}
