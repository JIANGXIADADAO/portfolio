import { useReveal } from "@/hooks/use-reveal";
import { hero } from "@/config/data";

export function Hero() {
  const ref = useReveal();

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 pt-20">
      <div ref={ref} className="reveal w-full" style={{ maxWidth: 640, margin: "0 auto" }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-20 md:mb-28 tracking-tight leading-relaxed text-center text-nowrap">
          {hero.title}
        </h1>
        <div className="flex justify-center">
          <a
            href={hero.primary.href}
            className="text-base md:text-lg tracking-widest uppercase"
            style={{
              color: "var(--text-muted)",
              fontFamily: '"SF Mono", "JetBrains Mono", "Consolas", monospace',
              textDecoration: "none",
              letterSpacing: "0.15em",
            }}
          >
            {hero.primary.label} ↓
          </a>
        </div>
      </div>
    </section>
  );
}
