"use client";
import TommyBot from "./TommyBot";

const BOOKING_URL = "https://cal.com/loophub-kickoff-meeting/discoverymeeting";

const CAPABILITIES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00c566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Instant Response",
    desc: "Calls leads in under 8 seconds while they're still on the page",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
          stroke="#00c566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Sounds 100% Human",
    desc: "Natural conversations with real personality — not robotic scripts",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="#00c566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
          stroke="#00c566" strokeWidth="2" />
      </svg>
    ),
    title: "Qualifies & Books",
    desc: "Pre-qualifies prospects and schedules appointments automatically",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"
          stroke="#00c566" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Never Sleeps",
    desc: "Works 24/7 — nights, weekends, holidays — without complaints",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 5h12M9 3v2M7.5 21c-1.5 0-2.5-1-2.5-2.5V8" stroke="#00c566" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 8l3 3-3 3M22 12c0 4.97-4.03 9-9 9" stroke="#00c566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Bilingual Pro",
    desc: "Fluent English & Spanish — reaches every lead in their language",
  },
];

export default function MeetTommy() {
  return (
    <section
      id="meet-tommy"
      className="section-pad"
      style={{
        background: "linear-gradient(to bottom, #060606 0%, #000 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="text-center mb-4">
          <span className="section-label">The Solution</span>
        </div>

        <h2
          className="text-center font-black mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Meet Tommy: Your 24/7 Closer
        </h2>
        <p
          className="text-center mb-16 mx-auto"
          style={{
            color: "rgba(255,255,255,0.5)",
            maxWidth: 500,
            fontSize: "1.1rem",
            lineHeight: 1.6,
          }}
        >
          Tommy is your always-on AI sales agent. He calls, qualifies, and books — while your team sleeps.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Tommy visual */}
          <div className="flex items-center justify-center">
            <div
              className="relative rounded-3xl p-10 flex items-center justify-center"
              style={{
                background: "rgba(0,197,102,0.03)",
                border: "1px solid rgba(0,197,102,0.1)",
                minHeight: 460,
                width: "100%",
              }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,197,102,0.05) 0%, transparent 70%)",
                }}
              />

              <TommyBot state="talking" size={340} />

              {/* Live call badge */}
              <div
                className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(0,197,102,0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "#00c566",
                    boxShadow: "0 0 6px #00c566",
                    animation: "headsetPulse 1s ease-in-out infinite",
                  }}
                />
                <span className="text-xs font-semibold text-white">Live Call</span>
              </div>

              {/* Quote bubble */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-xl p-4"
                style={{
                  background: "rgba(0,0,0,0.85)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-sm font-medium italic"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  &ldquo;Hi! I&apos;m Tommy from LoopHub. I see you just requested information about our solar program — do you have 2 minutes?&rdquo;
                </div>
                <div className="mt-2 flex items-center gap-2">
                  {/* Waveform */}
                  {[4, 8, 12, 6, 10, 14, 8, 5, 11, 7].map((h, i) => (
                    <div
                      key={i}
                      className="rounded-full flex-shrink-0"
                      style={{
                        width: 3,
                        height: h,
                        background: "#00c566",
                        opacity: 0.7,
                        animation: `bounceSlow ${0.3 + i * 0.07}s ease-in-out infinite`,
                      }}
                    />
                  ))}
                  <span className="text-xs ml-auto" style={{ color: "rgba(255,255,255,0.3)" }}>0:04</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Capabilities */}
          <div className="flex flex-col gap-5">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="flex gap-4 group">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                  style={{
                    background: "rgba(0,197,102,0.1)",
                    border: "1px solid rgba(0,197,102,0.2)",
                    transition: "background 0.2s",
                  }}
                >
                  {cap.icon}
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">{cap.title}</div>
                  <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                    {cap.desc}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <a href="#try-it-now" className="btn-primary inline-flex">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 18.5A6.5 6.5 0 0112 5.5m0 13A6.5 6.5 0 0112 5.5M12 5.5V2m0 20v-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
                Hear Tommy in Action
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
