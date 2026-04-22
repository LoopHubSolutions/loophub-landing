"use client";
import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  source: string;
  color?: string;
}

function AnimatedStat({ value, suffix, prefix = "", label, sublabel, source, color = "#00c566" }: StatProps) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const id = setInterval(() => {
      step++;
      // Ease out
      const progress = 1 - Math.pow(1 - step / steps, 3);
      current = value * progress;
      setCount(Math.round(current));
      if (step >= steps) {
        setCount(value);
        clearInterval(id);
      }
    }, duration / steps);
    return () => clearInterval(id);
  }, [triggered, value]);

  return (
    <div
      ref={ref}
      className="card flex flex-col gap-3 p-8 relative overflow-hidden"
      style={{ minHeight: 220 }}
    >
      {/* Glow corner */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
        }}
      />

      <div
        className="stat-number"
        style={{ color, filter: triggered ? `drop-shadow(0 0 20px ${color}60)` : undefined }}
      >
        {value === 0 ? prefix : `${prefix}${count}${suffix}`}
      </div>

      <div>
        <div className="text-white font-semibold text-lg leading-snug">{label}</div>
        <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{sublabel}</div>
      </div>

      <div
        className="mt-auto text-xs font-medium px-2.5 py-1 rounded-full self-start"
        style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.35)" }}
      >
        {source}
      </div>
    </div>
  );
}

const STATS: StatProps[] = [
  {
    value: 78,
    suffix: "%",
    label: "of buyers choose the first responder",
    sublabel: "Speed of response is the #1 factor in winning deals",
    source: "Harvard Business Review",
    color: "#00c566",
  },
  {
    value: 27,
    suffix: "%",
    label: "of leads contacted within 1 hour",
    sublabel: "73% of leads are never called back at all",
    source: "InsideSales Research",
    color: "#ff6b35",
  },
  {
    prefix: "4 of 5",
    value: 0,
    suffix: "",
    label: "deals lost to faster competitors",
    sublabel: "Response time is the silent killer of sales pipelines",
    source: "MIT / Lead Response Study",
    color: "#ffd700",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="section-pad"
      style={{
        background: "linear-gradient(to bottom, #000 0%, #060606 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="text-center mb-4">
          <span className="section-label">The Problem</span>
        </div>

        {/* Heading */}
        <h2
          className="text-center font-black mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          The Cost of Slow Response
        </h2>
        <p
          className="text-center mb-14 mx-auto"
          style={{
            color: "rgba(255,255,255,0.5)",
            maxWidth: 520,
            fontSize: "1.1rem",
            lineHeight: 1.6,
          }}
        >
          Every minute you wait to call a lead, they&apos;re talking to your competitor.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {STATS.map((stat, i) => (
            <AnimatedStat key={i} {...stat} />
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          style={{
            background: "rgba(0,197,102,0.04)",
            border: "1px solid rgba(0,197,102,0.15)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,197,102,0.06) 0%, transparent 70%)",
            }}
          />
          <p
            className="text-xl md:text-2xl font-bold relative z-10"
            style={{ lineHeight: 1.5 }}
          >
            What if you could respond in{" "}
            <span style={{ color: "#00c566" }}>seconds</span>, not hours?
          </p>
          <p
            className="mt-3 relative z-10"
            style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem" }}
          >
            That&apos;s exactly what Tommy does — automatically, every single time.
          </p>
        </div>
      </div>
    </section>
  );
}
