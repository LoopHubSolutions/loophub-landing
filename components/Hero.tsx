"use client";
import { useEffect, useState } from "react";

const BOOKING_URL = "https://cal.com/loophub-kickoff-meeting/discoverymeeting";
const TRUSTED_LOGOS = ["Sunset Finance", "ProSolar", "PTS Tax Professionals"];

type Tab = "smb" | "enterprise";

function PhoneMockup({ countdown, isCalling }: { countdown: number; isCalling: boolean }) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden"
      style={{
        width: 280,
        height: 520,
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      <div className="mx-auto mt-3 rounded-full" style={{ width: 80, height: 6, background: "rgba(255,255,255,0.1)" }} />
      <div className="p-4 flex flex-col gap-3 mt-4">
        <div
          className="rounded-xl p-3 flex items-center gap-3"
          style={{ background: "rgba(0,197,102,0.08)", border: "1px solid rgba(0,197,102,0.15)" }}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#00c566" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.53 9.77a19.79 19.79 0 01-3.07-8.67A2 2 0 012.44 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.4A16 16 0 0015.54 18l.77-.77a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 19.41v.01" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold text-white">Tommy · LoopHub</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              {isCalling ? "Calling now..." : "New lead detected"}
            </div>
          </div>
          <div className="ml-auto">
            <span
              className="text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{
                background: isCalling ? "rgba(0,197,102,0.2)" : "rgba(255,255,255,0.08)",
                color: isCalling ? "#00c566" : "rgba(255,255,255,0.4)",
              }}
            >
              {isCalling ? "LIVE" : "READY"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">New Lead</div>
          {["Name: John Martinez", "Phone: +1 803 555-0147", "Source: Website Form", "Time: Just now"].map((line) => (
            <div key={line} className="text-xs p-2.5 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.65)" }}>
              {line}
            </div>
          ))}
          <div
            className="mt-2 text-center py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2"
            style={{
              background: isCalling ? "rgba(0,197,102,0.2)" : "rgba(0,197,102,0.12)",
              color: "#00c566",
              border: isCalling ? "1px solid rgba(0,197,102,0.4)" : "1px solid rgba(0,197,102,0.2)",
            }}
          >
            {isCalling ? (
              <>
                <span className="w-2 h-2 rounded-full" style={{ background: "#00c566", animation: "headsetPulse 0.8s ease-in-out infinite" }} />
                Calling now...
              </>
            ) : (
              <>&#x23F1; Calling in {countdown} seconds...</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function EnterpriseVisual() {
  const center = { x: 220, y: 155 };
  const branches = [
    { label: "Miami", x: 110, y: 55, leads: "47 leads" },
    { label: "Dallas", x: 335, y: 45, leads: "89 leads" },
    { label: "Chicago", x: 385, y: 185, leads: "34 leads" },
    { label: "Los Angeles", x: 55, y: 215, leads: "62 leads" },
    { label: "New York", x: 250, y: 275, leads: "118 leads" },
  ];
  return (
    <div
      className="relative rounded-2xl p-6 w-full"
      style={{ background: "rgba(10,10,10,0.85)", border: "1px solid rgba(124,58,237,0.15)", boxShadow: "0 0 60px rgba(124,58,237,0.06)" }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "rgba(167,139,250,0.6)" }}>Growth Engine</div>
          <div className="text-base font-bold text-white">Operations Network</div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)", color: "#a78bfa" }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#a78bfa", animation: "headsetPulse 1.5s ease-in-out infinite" }} />
          Live
        </div>
      </div>
      <svg width="100%" viewBox="0 0 440 310" style={{ overflow: "visible" }}>
        {branches.map((branch, i) => (
          <line key={`line-${i}`} x1={center.x} y1={center.y} x2={branch.x} y2={branch.y} stroke="rgba(124,58,237,0.18)" strokeWidth="1.5" strokeDasharray="5 4" />
        ))}
        {branches.map((branch, i) => (
          <circle key={`pulse-${i}`} r="3" fill="#a78bfa" opacity="0.85">
            <animateMotion dur={`${1.8 + i * 0.35}s`} repeatCount="indefinite" path={`M ${center.x} ${center.y} L ${branch.x} ${branch.y}`} />
          </circle>
        ))}
        <circle cx={center.x} cy={center.y} r="40" fill="rgba(124,58,237,0.06)" stroke="rgba(124,58,237,0.25)" strokeWidth="1.5" />
        <circle cx={center.x} cy={center.y} r="28" fill="rgba(124,58,237,0.05)" />
        <text x={center.x} y={center.y - 5} textAnchor="middle" fill="#a78bfa" fontSize="8.5" fontWeight="700">LoopHub</text>
        <text x={center.x} y={center.y + 9} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7">Growth Engine</text>
        {branches.map((branch, i) => (
          <g key={`branch-${i}`}>
            <circle cx={branch.x} cy={branch.y} r="26" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <text x={branch.x} y={branch.y - 5} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="7" fontWeight="600">{branch.label}</text>
            <text x={branch.x} y={branch.y + 9} textAnchor="middle" fill="#00c566" fontSize="6.5">{branch.leads}</text>
          </g>
        ))}
      </svg>
      <div className="grid grid-cols-3 gap-3 mt-3">
        {[{ label: "Branches", value: "5" }, { label: "Leads Today", value: "350+" }, { label: "Response", value: "<8s" }].map((stat) => (
          <div key={stat.label} className="text-center p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="text-lg font-black text-white">{stat.value}</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [tab, setTab] = useState<Tab>("smb");
  const [countdown, setCountdown] = useState(8);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown((c) => (c <= 0 ? 8 : c - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const isCalling = countdown <= 2;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center pt-16"
      style={{
        background:
          tab === "smb"
            ? "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,197,102,0.05) 0%, transparent 70%)"
            : "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        transition: "background 0.6s ease",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />

      <div
        className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-24 py-20"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
      >
        {/* Tab switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1 rounded-full gap-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {([
              { id: "smb" as Tab, label: "Speed-to-Lead", sub: "SMBs & Agencies" },
              { id: "enterprise" as Tab, label: "Growth Engine", sub: "Multi-Branch & Enterprise" },
            ]).map(({ id, label, sub }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                style={{
                  background: tab === id ? (id === "smb" ? "#00c566" : "#7c3aed") : "transparent",
                  color: tab === id ? (id === "smb" ? "#000" : "#fff") : "rgba(255,255,255,0.45)",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  borderRadius: "9999px",
                  padding: "10px 20px",
                  textAlign: "left",
                  transition: "background 0.3s, color 0.3s",
                }}
              >
                <div style={{ fontSize: "0.8rem", fontWeight: 700, lineHeight: 1.2 }}>{label}</div>
                <div style={{ fontSize: "0.68rem", opacity: 0.75 }}>{sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* SMB TAB */}
        {tab === "smb" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="inline-flex items-center gap-2 self-start">
                <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold" style={{ background: "rgba(0,197,102,0.1)", border: "1px solid rgba(0,197,102,0.25)", color: "#00c566" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00c566", boxShadow: "0 0 6px #00c566", animation: "headsetPulse 1.5s ease-in-out infinite" }} />
                  Speed-to-Lead AI · Now Live
                </span>
              </div>

              <h1 className="font-black leading-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Your Leads Go Cold
                <br />
                in 5 Minutes.
                <br />
                <span>
                  We Call Them in{" "}
                  <span className="relative inline-block" style={{ color: "#00c566", textShadow: "0 0 40px rgba(0,197,102,0.4)" }}>
                    {countdown} Sec
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ background: "#00c566", opacity: 0.5 }} />
                  </span>
                  .
                </span>
              </h1>

              <p className="text-lg md:text-xl" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 500, lineHeight: 1.6 }}>
                AI voice agents that sound human, respond instantly, and never miss a hot lead.
              </p>

              <ul className="flex flex-col gap-3">
                {["Calls in <8 seconds after form submit", "100% human-sounding conversations", "Works 24/7 — nights, weekends, holidays", "Fluent English & Spanish"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(0,197,102,0.15)" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#00c566" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm md:text-base" style={{ color: "rgba(255,255,255,0.75)" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#try-it-now" className="btn-primary text-base px-7 py-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                  </svg>
                  Hear Tommy Call You
                </a>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-base px-7 py-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Book Demo
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                White label available for agencies &amp; resellers
              </div>

              <div className="pt-1">
                <p className="text-xs font-medium mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>TRUSTED BY</p>
                <div className="flex flex-wrap gap-4">
                  {TRUSTED_LOGOS.map((name) => (
                    <span key={name} className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Phone */}
            <div className="relative flex items-center justify-center">
              <PhoneMockup countdown={countdown} isCalling={isCalling} />
              <div className="absolute top-4 right-0 md:right-8 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl" style={{ background: "rgba(0,0,0,0.85)", border: "1px solid rgba(0,197,102,0.2)", backdropFilter: "blur(12px)", animation: "float 4s ease-in-out infinite", animationDelay: "0.5s" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,197,102,0.15)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" stroke="#00c566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Form Submitted</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Tommy calling now...</div>
                </div>
              </div>
              <div className="absolute bottom-4 left-0 md:-left-4 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl" style={{ background: "rgba(0,0,0,0.85)", border: "1px solid rgba(0,197,102,0.2)", backdropFilter: "blur(12px)", animation: "float 4s ease-in-out infinite", animationDelay: "1.5s" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,197,102,0.15)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="#00c566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: "#00c566" }}>+78% conversions</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>vs. 2-hr response time</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ENTERPRISE TAB */}
        {tab === "enterprise" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="inline-flex items-center gap-2 self-start">
                <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold" style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)", color: "#a78bfa" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#a78bfa", boxShadow: "0 0 6px #a78bfa", animation: "headsetPulse 1.5s ease-in-out infinite" }} />
                  Growth Engine · Multi-Branch &amp; Enterprise
                </span>
              </div>

              <h1 className="font-black leading-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Not Built to{" "}
                <span style={{ color: "#a78bfa", textShadow: "0 0 40px rgba(124,58,237,0.4)" }}>Replace</span>
                <br />
                Your Team.
                <br />
                Built to{" "}
                <span style={{ color: "#00c566", textShadow: "0 0 40px rgba(0,197,102,0.4)" }}>Amplify</span> It.
              </h1>

              <p className="text-lg md:text-xl" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.6 }}>
                For multi-branch operations and high-volume teams, LoopHub becomes your Growth Engine — automating the routine so your people deliver more value, cover more ground, and close more business.
              </p>

              <ul className="flex flex-col gap-3">
                {[
                  "Coordinate lead response across all your locations",
                  "Your closers focus on relationships — Tommy handles the rest",
                  "Scale call volume without scaling headcount",
                  "White-label under your brand at enterprise pricing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(124,58,237,0.15)" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm md:text-base" style={{ color: "rgba(255,255,255,0.75)" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-bold px-7 py-3.5 rounded-xl"
                  style={{ background: "#7c3aed", color: "#fff", boxShadow: "0 0 28px rgba(124,58,237,0.35)", transition: "box-shadow 0.2s" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Schedule Enterprise Discovery
                </a>
                <a href="#how-it-works" className="btn-secondary text-base px-7 py-3.5">
                  See How It Works
                </a>
              </div>

              <div className="pt-1">
                <p className="text-xs font-medium mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>TRUSTED BY</p>
                <div className="flex flex-wrap gap-4">
                  {TRUSTED_LOGOS.map((name) => (
                    <span key={name} className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Enterprise network */}
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-md">
                <EnterpriseVisual />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>scroll to explore</div>
        <div className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
          <div className="w-1 h-2 rounded-full" style={{ background: "#00c566", animation: "bounceSlow 1.5s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
