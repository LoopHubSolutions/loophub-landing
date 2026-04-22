"use client";

const BOOKING_URL = "https://cal.com/loophub-kickoff-meeting/discoverymeeting";

export default function FinalCTA() {
  return (
    <section
      id="pricing"
      className="section-pad"
      style={{
        background: "linear-gradient(to bottom, #000 0%, #040a06 50%, #000 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{
            background: "rgba(0,197,102,0.04)",
            border: "1px solid rgba(0,197,102,0.15)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,197,102,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,197,102,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,197,102,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(0,197,102,0.15)",
                border: "1px solid rgba(0,197,102,0.3)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  stroke="#00c566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div>
              <h2
                className="font-black mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Stop Losing Leads to
                <br />
                <span style={{ color: "#00c566" }}>Faster Competitors</span>
              </h2>
              <p
                className="mx-auto"
                style={{ color: "rgba(255,255,255,0.55)", maxWidth: 500, fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                Book a 15-minute demo and hear Tommy call <strong className="text-white">you</strong> as a live test. See exactly what your leads will experience.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Book Your Live Demo →
              </a>
              <a
                href="https://wa.me/18035550147?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20LoopHub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.15 1.59 5.96L0 24l6.24-1.63A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.38-.22-3.71.97.99-3.62-.24-.37A9.95 9.95 0 012 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.95 9.95 0 0122 12c0 5.52-4.48 10-10 10z"
                    fill="currentColor" />
                  <path
                    d="M8.68 7.5c-.2-.46-.43-.47-.63-.48H7.5c-.18 0-.47.07-.72.35-.25.28-.95.93-.95 2.26s.97 2.62 1.1 2.8c.14.18 1.88 2.97 4.62 4.04 2.28.9 2.75.72 3.24.67.5-.05 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.3-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.17-.27.26-.45.09-.18.04-.34-.02-.47-.06-.14-.6-1.46-.84-2z"
                    fill="currentColor" />
                </svg>
                Message on WhatsApp
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 pt-2">
              {[
                "✓ No long-term contract",
                "✓ Live in 48 hours",
                "✓ Cancel anytime",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm font-medium"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
