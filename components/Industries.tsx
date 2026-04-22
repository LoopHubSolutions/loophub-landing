"use client";

const INDUSTRIES = [
  {
    emoji: "🏠",
    title: "Real Estate & Mortgage",
    tagline: "First to call = first to close",
    items: ["Buyer leads", "Refinance quotes", "Pre-approvals", "Listing inquiries"],
    color: "#00c566",
  },
  {
    emoji: "☀️",
    title: "Solar & Home Services",
    tagline: "Hot leads go cold in minutes",
    items: ["Solar installs", "HVAC quotes", "Roofing", "Home contractors"],
    color: "#ffd700",
  },
  {
    emoji: "💰",
    title: "Financial Services",
    tagline: "Speed builds trust instantly",
    items: ["Personal loans", "Insurance quotes", "Tax services", "Credit repair"],
    color: "#ff8c00",
  },
  {
    emoji: "👔",
    title: "Professional Services",
    tagline: "Consultations book faster",
    items: ["Legal consultations", "Accounting", "Business coaching", "Education"],
    color: "#8b5cf6",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="section-pad"
      style={{ background: "linear-gradient(to bottom, #000 0%, #050505 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="text-center mb-4">
          <span className="section-label">Industries</span>
        </div>

        <h2
          className="text-center font-black mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          Built for Speed-to-Lead Industries
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
          If response time = revenue, LoopHub is for you.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className="card industry-card p-6 flex flex-col gap-4"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `${ind.color}15` }}
              >
                {ind.emoji}
              </div>

              {/* Title */}
              <div>
                <h3 className="font-bold text-white text-base leading-tight mb-1">{ind.title}</h3>
                <p className="text-xs font-semibold" style={{ color: ind.color }}>{ind.tagline}</p>
              </div>

              {/* Items */}
              <ul className="flex flex-col gap-2 mt-auto">
                {ind.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: ind.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className="mt-12 rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-5"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <div className="font-bold text-white text-lg mb-1">Don&apos;t see your industry?</div>
            <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              If your business gets inbound leads that need fast follow-up, Tommy can help.
            </div>
          </div>
          <a
            href="https://cal.com/loophub-kickoff-meeting/discoverymeeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary whitespace-nowrap flex-shrink-0"
          >
            Let&apos;s Talk →
          </a>
        </div>
      </div>
    </section>
  );
}
