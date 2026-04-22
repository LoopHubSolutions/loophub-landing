"use client";
import { useEffect, useState } from "react";

const BOOKING_URL = "https://cal.com/loophub-kickoff-meeting/discoverymeeting";

const TRUSTED_LOGOS = [
  "Sunset Finance",
  "ProSolar",
  "PTS Tax Professionals",
];

export default function Hero() {
  const [countdown, setCountdown] = useState(8);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in on mount
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Countdown loop 8 → 0 → 8
    const id = setInterval(() => {
      setCountdown((c) => (c <= 0 ? 8 : c - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const isCalling = countdown <= 2;

  return (
    <section
      className="relative min-h-screen flex items-center pt-16"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,197,102,0.05) 0%, transparent 70%)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />

      <div
        className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-24 py-20"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(0,197,102,0.1)",
                  border: "1px solid rgba(0,197,102,0.25)",
                  color: "#00c566",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#00c566",
                    boxShadow: "0 0 6px #00c566",
                    animation: "headsetPulse 1.5s ease-in-out infinite",
                  }}
                />
                Speed-to-Lead AI · Now Live
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-black leading-tight"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Your Leads Go Cold
              <br />
              in 5 Minutes.
              <br />
              <span>
                We Call Them in{" "}
                <span
                  className="relative inline-block"
                  style={{
                    color: "#00c566",
                    textShadow: "0 0 40px rgba(0,197,102,0.4)",
                  }}
                >
                  {countdown} Sec
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "#00c566", opacity: 0.5 }}
                  />
                </span>
                .
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl"
              style={{ color: "rgba(255,255,255,0.6)", maxWidth: 500, lineHeight: 1.6 }}
            >
              AI voice agents that sound human, respond instantly, and never miss a hot lead.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3">
              {[
                "Calls in <8 seconds after form submit",
                "100% human-sounding conversations",
                "Works 24/7 — nights, weekends, holidays",
                "Fluent English & Spanish",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(0,197,102,0.15)" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#00c566" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm md:text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#try-it-now"
                className="btn-primary text-base px-7 py-3.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                </svg>
                Hear Tommy Call You
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-7 py-3.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Book Demo
              </a>
            </div>

            {/* Trusted by */}
            <div className="pt-2">
              <p className="text-xs font-medium mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
                TRUSTED BY
              </p>
              <div className="flex flex-wrap gap-4">
                {TRUSTED_LOGOS.map((name) => (
                  <span
                    key={name}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Tommy + Timer ── */}
          <div className="relative flex items-center justify-center">
            {/* Timer circle around bot */}
            <div className="relative flex items-center justify-center">
              {/* Outer pulse ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 400,
                  height: 400,
                  border: "1px solid rgba(0,197,102,0.08)",
                  animation: "pulseGlow 3s ease-in-out infinite",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: 330,
                  height: 330,
                  border: "1px solid rgba(0,197,102,0.05)",
                }}
              />

              {/* SVG Timer ring */}
              <div className="absolute" style={{ width: 380, height: 380 }}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 380 380"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  {/* Track */}
                  <circle
                    cx="190" cy="190" r="175"
                    fill="none"
                    stroke="rgba(0,197,102,0.06)"
                    strokeWidth="2"
                  />
                  {/* Progress */}
                  <circle
                    cx="190" cy="190" r="175"
                    fill="none"
                    stroke="#00c566"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="1100"
                    strokeDashoffset={1100 - (countdown / 8) * 1100}
                    style={{ transition: "stroke-dashoffset 0.9s linear" }}
                  />
                </svg>
              </div>

              {/* Center: Phone icon + countdown */}
              <div className="relative flex flex-col items-center justify-center" style={{ width: 260, height: 260 }}>
                {/* Glow behind */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 180,
                    height: 180,
                    background: isCalling
                      ? "radial-gradient(circle, rgba(0,197,102,0.18) 0%, transparent 70%)"
                      : "radial-gradient(circle, rgba(0,197,102,0.06) 0%, transparent 70%)",
                    transition: "background 0.5s",
                  }}
                />

                {/* Phone icon circle */}
                <div
                  className="relative flex items-center justify-center rounded-full"
                  style={{
                    width: 120,
                    height: 120,
                    background: isCalling ? "rgba(0,197,102,0.15)" : "rgba(255,255,255,0.04)",
                    border: isCalling ? "2px solid rgba(0,197,102,0.4)" : "2px solid rgba(255,255,255,0.08)",
                    boxShadow: isCalling ? "0 0 40px rgba(0,197,102,0.3)" : "none",
                    transition: "all 0.4s ease",
                    animation: isCalling ? "phonePulse 0.6s ease-in-out infinite alternate" : undefined,
                  }}
                >
                  <svg
                    width="48" height="48" viewBox="0 0 24 24" fill="none"
                    style={{
                      color: isCalling ? "#00c566" : "rgba(255,255,255,0.3)",
                      transition: "color 0.4s",
                      transform: isCalling ? "rotate(0deg)" : "rotate(0deg)",
                    }}
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.53 9.77a19.79 19.79 0 01-3.07-8.67A2 2 0 012.44 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.4A16 16 0 0015.54 18l.77-.77a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 19.41v.01z"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Countdown number above */}
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 text-center"
                >
                  <div
                    className="font-black"
                    style={{
                      fontSize: "2.5rem",
                      lineHeight: 1,
                      color: isCalling ? "#00c566" : "rgba(255,255,255,0.2)",
                      textShadow: isCalling ? "0 0 24px rgba(0,197,102,0.7)" : undefined,
                      transition: "color 0.3s, text-shadow 0.3s",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {countdown}s
                  </div>
                  <div className="text-xs font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>
                    response time
                  </div>
                </div>

                {/* "Calling now" label below */}
                {isCalling && (
                  <div
                    className="absolute bottom-4 flex items-center gap-1.5"
                    style={{ animation: "fadeIn 0.3s ease" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#00c566", animation: "headsetPulse 0.8s ease-in-out infinite" }}
                    />
                    <span className="text-xs font-bold" style={{ color: "#00c566" }}>Calling now...</span>
                  </div>
                )}

                {/* Wave bars (audio) when calling */}
                {isCalling && (
                  <div
                    className="absolute flex gap-1 items-end"
                    style={{ bottom: 28, right: 20 }}
                  >
                    {[8, 14, 20, 14, 8].map((h, i) => (
                      <div
                        key={i}
                        className="rounded-full"
                        style={{
                          width: 3,
                          height: h,
                          background: "#00c566",
                          opacity: 0.7,
                          animation: `bounceSlow ${0.3 + i * 0.1}s ease-in-out infinite`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Floating "form submitted" chip */}
            <div
              className="absolute top-12 right-0 md:right-8 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl"
              style={{
                background: "rgba(0,0,0,0.85)",
                border: "1px solid rgba(0,197,102,0.2)",
                backdropFilter: "blur(12px)",
                animation: "float 4s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(0,197,102,0.15)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
                    stroke="#00c566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Form Submitted</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Tommy calling now...</div>
              </div>
            </div>

            {/* Floating stat chip */}
            <div
              className="absolute bottom-14 left-0 md:-left-4 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl"
              style={{
                background: "rgba(0,0,0,0.85)",
                border: "1px solid rgba(0,197,102,0.2)",
                backdropFilter: "blur(12px)",
                animation: "float 4s ease-in-out infinite",
                animationDelay: "1.5s",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(0,197,102,0.15)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    stroke="#00c566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: "#00c566" }}>+78% conversions</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>vs. 2-hr response time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>
          scroll to explore
        </div>
        <div
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: "#00c566",
              animation: "bounceSlow 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
