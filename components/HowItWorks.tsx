"use client";
import { useEffect, useRef, useState } from "react";

const BOOKING_URL = "https://cal.com/loophub-kickoff-meeting/discoverymeeting";

const STEPS = [
  {
    number: "01",
    title: "Lead Submits Form",
    desc: "Tommy receives an instant notification the moment someone fills out your lead form — any platform, any CRM.",
    detail: "Tommy gets notified instantly",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="4" stroke="#00c566" strokeWidth="2" />
        <path d="M10 13h12M10 18h8" stroke="#00c566" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="8" r="4" fill="#00c566" />
        <path d="M22.5 8l1 1 2-2" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    timerLabel: "0:00",
    highlight: "Form received",
  },
  {
    number: "02",
    title: "Tommy Calls & Qualifies",
    desc: "In under 8 seconds, Tommy calls the lead with a personalized opener. He qualifies, answers FAQs, and handles objections naturally.",
    detail: '"Hi, I see you just requested info about..."',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 6l4 2-1 4 3 3 4-1 2 4-4 2c-5-2-10-10-8-14z"
          stroke="#00c566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 6c3.31 0 6 2.69 6 6" stroke="#00c566" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 10a2 2 0 012 2" stroke="#00c566" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    timerLabel: "0:08",
    highlight: "Tommy calling...",
  },
  {
    number: "03",
    title: "Appointment Booked",
    desc: "Hot, qualified leads get booked directly to your calendar. Your sales team shows up only to warm appointments.",
    detail: "Synced to your CRM automatically",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="20" rx="4" stroke="#00c566" strokeWidth="2" />
        <path d="M4 14h24" stroke="#00c566" strokeWidth="2" />
        <path d="M10 4v4M22 4v4" stroke="#00c566" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 20l3 3 7-7" stroke="#00c566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    timerLabel: "2:30",
    highlight: "Appointment booked",
  },
];

interface StepCardProps {
  number: string;
  title: string;
  desc: string;
  detail: string;
  icon: React.ReactNode;
  timerLabel: string;
  highlight: string;
  index: number;
  isActive: boolean;
  isLast: boolean;
}

function StepCard({ number, title, desc, detail, icon, timerLabel, highlight, index, isActive, isLast }: StepCardProps) {
  return (
    <div className="flex gap-6 md:gap-8">
      {/* Left: number + connector */}
      <div className="flex flex-col items-center gap-0">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 transition-all duration-500"
          style={{
            background: isActive ? "#00c566" : "rgba(255,255,255,0.05)",
            color: isActive ? "#000" : "rgba(255,255,255,0.3)",
            border: isActive ? "2px solid #00c566" : "2px solid rgba(255,255,255,0.08)",
            boxShadow: isActive ? "0 0 24px rgba(0,197,102,0.4)" : "none",
          }}
        >
          {number}
        </div>
        {!isLast && (
          <div
            className="w-0.5 flex-1 mt-2"
            style={{
              background: isActive
                ? "linear-gradient(to bottom, #00c566, rgba(0,197,102,0.1))"
                : "rgba(255,255,255,0.06)",
              minHeight: 60,
              transition: "background 0.5s",
            }}
          />
        )}
      </div>

      {/* Right: content */}
      <div
        className="flex-1 pb-10 rounded-2xl p-6 transition-all duration-500"
        style={{
          background: isActive ? "rgba(0,197,102,0.04)" : "rgba(255,255,255,0.02)",
          border: isActive
            ? "1px solid rgba(0,197,102,0.2)"
            : "1px solid rgba(255,255,255,0.05)",
          marginBottom: isLast ? 0 : 16,
        }}
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: isActive ? "rgba(0,197,102,0.12)" : "rgba(255,255,255,0.04)",
              border: isActive ? "1px solid rgba(0,197,102,0.25)" : "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {icon}
          </div>
          {/* Text */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-bold text-lg text-white">{title}</h3>
              {/* Timer badge */}
              <span
                className="text-xs font-mono font-semibold px-2 py-0.5 rounded"
                style={{
                  background: isActive ? "rgba(0,197,102,0.15)" : "rgba(255,255,255,0.05)",
                  color: isActive ? "#00c566" : "rgba(255,255,255,0.3)",
                }}
              >
                ⏱ {timerLabel}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
              {desc}
            </p>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: isActive ? "rgba(0,197,102,0.1)" : "rgba(255,255,255,0.04)",
                color: isActive ? "#00c566" : "rgba(255,255,255,0.3)",
              }}
            >
              {isActive && (
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#00c566",
                    animation: "headsetPulse 1s ease-in-out infinite",
                  }}
                />
              )}
              {highlight}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cycle through steps automatically for demo
    const id = setInterval(() => {
      setActiveStep((s) => (s + 1) % STEPS.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    // Also trigger on scroll
    const observers = stepRefs.current.map((ref, idx) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(idx);
        },
        { threshold: 0.6 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section
      id="how-it-works"
      className="section-pad"
      ref={sectionRef}
      style={{ background: "linear-gradient(to bottom, #000 0%, #050505 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="text-center mb-4">
          <span className="section-label">How It Works</span>
        </div>

        <h2
          className="text-center font-black mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.02em",
          }}
        >
          From Lead to Booked in Minutes
        </h2>
        <p
          className="text-center mb-16 mx-auto"
          style={{
            color: "rgba(255,255,255,0.5)",
            maxWidth: 480,
            fontSize: "1.1rem",
            lineHeight: 1.6,
          }}
        >
          Go live in 48 hours. Zero code. Zero complexity.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div>
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                ref={(el) => { stepRefs.current[idx] = el; }}
                onClick={() => setActiveStep(idx)}
                style={{ cursor: "pointer" }}
              >
                <StepCard
                  {...step}
                  index={idx}
                  isActive={activeStep === idx}
                  isLast={idx === STEPS.length - 1}
                />
              </div>
            ))}
          </div>

          {/* Visual: Phone mockup */}
          <div className="sticky top-24 flex justify-center">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                width: 280,
                height: 560,
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              {/* Phone notch */}
              <div
                className="mx-auto mt-3 rounded-full"
                style={{ width: 80, height: 6, background: "rgba(255,255,255,0.1)" }}
              />

              {/* Screen content changes per step */}
              <div className="p-4 flex flex-col gap-3 mt-4">
                {/* Header */}
                <div
                  className="rounded-xl p-3 flex items-center gap-3"
                  style={{ background: "rgba(0,197,102,0.08)", border: "1px solid rgba(0,197,102,0.15)" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "#00c566" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.53 9.77a19.79 19.79 0 01-3.07-8.67A2 2 0 012.44 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.4A16 16 0 0015.54 18l.77-.77a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 19.41v.01" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Tommy · LoopHub</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {activeStep === 0 && "New lead detected"}
                      {activeStep === 1 && "Calling now..."}
                      {activeStep === 2 && "Call complete"}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{
                        background: activeStep === 1 ? "rgba(0,197,102,0.2)" : "rgba(255,255,255,0.08)",
                        color: activeStep === 1 ? "#00c566" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {activeStep === 1 ? "LIVE" : activeStep === 0 ? "READY" : "DONE"}
                    </span>
                  </div>
                </div>

                {/* Step 0: Form data */}
                {activeStep === 0 && (
                  <div className="flex flex-col gap-2">
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">New Lead</div>
                    {["Name: John Martinez", "Phone: +1 803 555-0147", "Source: Website Form", "Time: Just now"].map((line) => (
                      <div
                        key={line}
                        className="text-xs p-2.5 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.65)" }}
                      >
                        {line}
                      </div>
                    ))}
                    <div
                      className="mt-2 text-center py-2 rounded-lg text-xs font-bold"
                      style={{ background: "rgba(0,197,102,0.15)", color: "#00c566" }}
                    >
                      ⏱ Calling in 8 seconds...
                    </div>
                  </div>
                )}

                {/* Step 1: Conversation */}
                {activeStep === 1 && (
                  <div className="flex flex-col gap-2">
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Live Transcript</div>
                    <div
                      className="text-xs p-3 rounded-xl rounded-tl-sm leading-relaxed"
                      style={{ background: "rgba(0,197,102,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(0,197,102,0.15)" }}
                    >
                      Hi John! This is Tommy from Solar Solutions. I see you just requested info — do you have 2 minutes?
                    </div>
                    <div
                      className="text-xs p-3 rounded-xl rounded-tr-sm self-end leading-relaxed ml-4"
                      style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}
                    >
                      Yeah, sure! I was just looking at your website...
                    </div>
                    {/* Waveform */}
                    <div className="flex items-center gap-0.5 mt-1">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-full"
                          style={{
                            width: 3,
                            height: 4 + Math.random() * 16,
                            background: "#00c566",
                            opacity: 0.6,
                            animation: `bounceSlow ${0.2 + i * 0.05}s ease-in-out infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Calendar */}
                {activeStep === 2 && (
                  <div className="flex flex-col gap-2">
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Appointment Booked</div>
                    <div
                      className="rounded-xl p-3"
                      style={{ background: "rgba(0,197,102,0.08)", border: "1px solid rgba(0,197,102,0.2)" }}
                    >
                      <div className="text-xs font-bold text-white mb-2">📅 Thursday, April 10</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>2:00 PM — 2:30 PM</div>
                      <div className="text-xs mt-1" style={{ color: "#00c566" }}>John Martinez · Qualified Lead</div>
                    </div>
                    <div
                      className="text-xs p-2.5 rounded-lg"
                      style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)" }}
                    >
                      ✅ CRM Updated<br />
                      ✅ Calendar invite sent<br />
                      ✅ Reminder set for 24h before
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            Book Your Demo — Go Live in 48 Hours
          </a>
        </div>
      </div>
    </section>
  );
}
