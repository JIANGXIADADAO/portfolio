import { site, nav } from "@/config/data";
import { CopyEmail } from "@/components/copy-email";

export function Header() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border-light)",
        opacity: 0.92,
      }}
    >
      <nav className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between text-sm">
        <a href="#" className="font-serif text-base tracking-tight no-underline" style={{ color: "var(--text)" }}>
          {site.name}
        </a>
        <div className="flex items-center gap-5">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="a-dotted text-sm">
              {l.label}
            </a>
          ))}
          <CopyEmail label="邮箱" className="text-sm" />
          <a
            href={site.xiaohongshu}
            target="_blank"
            rel="noopener noreferrer"
            className="a-dotted text-sm"
          >
            小红书
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            GitHub ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
