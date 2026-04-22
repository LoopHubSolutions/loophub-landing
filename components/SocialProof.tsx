"use client";
import { useEffect, useRef, useState } from "react";

const BOOKING_URL = "https://cal.com/loophub-kickoff-meeting/discoverymeeting";

interface MetricBarProps {
  label: string;
  before: number;
  after: number;
  suffix: string;
}

function MetricBar({ label, before, after, suffix }: MetricBarProps) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.65)" }}>{label}</div>
      <div className="space-y-1.5">
        {/* Before */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1" style={{ color: "rgba(0,0,0,0.45)" }}>
            <span>Before</span>
            <span className="font-semibold">{before}{suffix}</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.1)" }}>
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: triggered ? `${before}%` : "0%",
                background: "rgba(0,0,0,0.2)",
                transitionDelay: "0.2s",
              }}
            />
          </div>
        </div>
        {/* After */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1" style={{ color: "rgba(0,0,0,0.6)" }}>
            <span>After LoopHub</span>
            <span className="font-bold text-black">{after}{suffix}</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.1)" }}>
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: triggered ? `${after}%` : "0%",
                background: "#000",
                transitionDelay: "0.5s",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const METRICS: MetricBarProps[] = [
  { label: "Contact Rate", before: 12, after: 67, suffix: "%" },
  { label: "Show-Up Rate", before: 23, after: 71, suffix: "%" },
];

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="section-pad"
      style={{ background: "linear-gradient(to bottom, #050505 0%, #000 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="text-center mb-4">
          <span className="section-label">Results</span>
        </div>
        <h2
          className="text-center font-black mb-16"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          Real Results, Real Businesses
        </h2>

        {/* Main testimonial card */}
        <div
          className="lime-card p-8 md:p-12 relative overflow-hidden mb-8"
        >
          {/* Decorative */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "rgba(0,0,0,0.04)" }}
          />
          <div
            className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: "rgba(0,0,0,0.03)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
            {/* Quote side */}
            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#000">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote
                className="font-bold leading-tight mb-6"
                style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", color: "#000" }}
              >
                &ldquo;We went from 12% contact rate to 67% in the first week.&rdquo;
              </blockquote>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(0,0,0,0.7)" }}>
                Before LoopHub, our team was calling pre-approved loan customers 2–3 days later.
                Now Tommy reaches them in seconds while they&apos;re still interested.
                Our appointment show-up rate tripled.
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ background: "rgba(0,0,0,0.12)", color: "#000" }}
                >
                  MH
                </div>
                <div>
                  <div className="font-bold text-black">Mike Hicks</div>
                  <div className="text-sm" style={{ color: "rgba(0,0,0,0.55)" }}>
                    Branch Manager · Sunset Finance, Orangeburg SC
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics side */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-6"
              style={{ background: "rgba(0,0,0,0.07)" }}
            >
              <div className="text-sm font-bold uppercase tracking-wider" style={{ color: "rgba(0,0,0,0.5)" }}>
                Impact After LoopHub
              </div>

              {METRICS.map((m) => (
                <MetricBar key={m.label} {...m} />
              ))}

              {/* Response time flip */}
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.65)" }}>Response Time</div>
                <div className="flex items-center gap-3">
                  <div
                    className="flex-1 text-center py-2 rounded-xl text-sm font-bold line-through"
                    style={{ background: "rgba(0,0,0,0.08)", color: "rgba(0,0,0,0.35)" }}
                  >
                    2–3 days
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div
                    className="flex-1 text-center py-2 rounded-xl text-sm font-bold"
                    style={{ background: "#000", color: "#d4ff00" }}
                  >
                    &lt;8 seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case study CTA */}
        <div className="text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#00c566" }}
          >
            Get Results Like This For Your Business
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
