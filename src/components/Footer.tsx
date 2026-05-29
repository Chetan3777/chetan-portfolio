import { Github, Linkedin, Mail } from "lucide-react";
import { footer, profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-cream-100">
      <div className="max-w-content container-px py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3"
              aria-label="Home"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white">
                <span className="text-[12px] font-bold">{profile.initials}</span>
              </span>
              <span className="font-display text-2xl italic text-fg">
                {profile.shortName}
              </span>
            </a>
            <p className="mt-4 max-w-md font-display text-2xl italic text-fg sm:text-3xl">
              {footer.oneLiner}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FooterIcon href={`mailto:${profile.email}`} label="Email">
              <Mail className="h-4 w-4" />
            </FooterIcon>
            <FooterIcon href={profile.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </FooterIcon>
            <FooterIcon href={profile.github} label="GitHub">
              <Github className="h-4 w-4" />
            </FooterIcon>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-line pt-6 font-mono text-[11px] text-fg-dim sm:flex-row sm:items-center">
          <span>
            © {year} {profile.name}. All rights reserved.
          </span>
          <span>Built with React · Vite · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      className="grid h-10 w-10 place-items-center rounded-full border border-line bg-cream-50 text-fg-muted transition-colors hover:border-brand/40 hover:text-brand"
      aria-label={label}
    >
      {children}
    </a>
  );
}
