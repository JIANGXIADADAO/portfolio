import { useReveal } from "@/hooks/use-reveal";
import { projects } from "@/config/data";

export function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="px-6 py-24">
      <div className="hairline mb-24" />

      <div ref={ref} className="reveal" style={{ maxWidth: 640, margin: "0 auto" }}>
        <h2 className="text-2xl md:text-3xl mb-12 text-center">项目</h2>

        <div className="flex flex-col gap-4">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card block no-underline group"
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="text-lg group-hover:text-[var(--accent)] transition-colors">
                  {p.title}
                </h3>
                <span className="text-xs flex-shrink-0" style={{ color: "var(--text-faint)" }}>
                  ↗
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
