"use client";

const BOOKING_URL = "https://cal.com/loophub-kickoff-meeting/discoverymeeting";

const LINKS = {
  Product: ["How It Works", "Integrations", "Pricing"],
  Industries: ["Real Estate", "Solar", "Financial Services", "Professional Services"],
  Company: ["About", "Blog", "Contact"],
};

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="7" fill="#00c566" />
                <path d="M8 14C8 10.686 10.686 8 14 8C17.314 8 20 10.686 20 14"
                  stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="14" cy="19" r="3" fill="#000" />
              </svg>
              <span className="font-bold text-lg text-white tracking-tight">LoopHub</span>
            </div>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 280 }}>
              AI voice agents that call your leads in under 8 seconds — 24/7, in English & Spanish.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
                aria-label="Twitter"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category}>
              <div
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {category}
              </div>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2025 LoopHub. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold"
            style={{ color: "#00c566" }}
          >
            Book Demo →
          </a>
        </div>
      </div>
    </footer>
  );
}
