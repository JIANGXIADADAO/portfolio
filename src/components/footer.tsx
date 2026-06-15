import { site } from "@/config/data";
import { CopyEmail } from "@/components/copy-email";

export function Footer() {
  return (
    <footer className="px-6 py-12 text-center">
      <div className="hairline mb-8" />
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: "var(--text-faint)" }}>
        <CopyEmail className="text-xs" />
        <span>·</span>
        <a href={site.xiaohongshu} target="_blank" rel="noopener noreferrer" className="a-dotted">
          小红书
        </a>
      </div>
      <p className="text-xs mt-2" style={{ color: "var(--text-faint)" }}>
        {site.copyright}
      </p>
    </footer>
  );
}
