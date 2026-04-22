"use client";
import { useState } from "react";
import TommyBot from "./TommyBot";

type FormState = "idle" | "submitting" | "calling" | "success";

export default function TryItNow() {
  const [state, setState] = useState<FormState>("idle");
  const [countdown, setCountdown] = useState(8);
  const [form, setForm] = useState({ phone: "", name: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^\+?[\d\s\-()]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("submitting");

    // Simulate 8-second countdown
    let c = 8;
    setCountdown(8);
    setState("calling");

    const interval = setInterval(() => {
      c--;
      setCountdown(c);
      if (c <= 0) {
        clearInterval(interval);
        setState("success");
      }
    }, 1000);
  };

  const botState =
    state === "calling" ? "listening"
    : state === "success" ? "success"
    : "idle";

  return (
    <section
      id="try-it-now"
      className="section-pad"
      style={{
        background: "linear-gradient(to bottom, #050505 0%, #000 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="text-center mb-4">
          <span className="section-label">Try It Now</span>
        </div>
        <h2
          className="text-center font-black mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          Experience Tommy Firsthand
        </h2>
        <p
          className="text-center mb-14 mx-auto"
          style={{ color: "rgba(255,255,255,0.5)", maxWidth: 460, fontSize: "1.05rem", lineHeight: 1.6 }}
        >
          Enter your phone number and Tommy will call you in under 8 seconds. See exactly what your leads experience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {state === "success" ? (
              <div className="flex flex-col items-center text-center gap-5 py-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,197,102,0.15)", border: "2px solid #00c566" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.53 9.77a19.79 19.79 0 01-3.07-8.67A2 2 0 012.44 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.4A16 16 0 0015.54 18l.77-.77a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 19.41v.01"
                      stroke="#00c566" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tommy is calling you now!</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Check your phone at <strong className="text-white">{form.phone}</strong>.<br />
                    This is exactly how your leads experience LoopHub.
                  </p>
                </div>
                <button
                  onClick={() => { setState("idle"); setForm({ phone: "", name: "", email: "" }); }}
                  className="text-sm font-semibold"
                  style={{ color: "#00c566" }}
                >
                  Try again →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(0,197,102,0.12)", border: "1px solid rgba(0,197,102,0.2)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.53 9.77a19.79 19.79 0 01-3.07-8.67A2 2 0 012.44 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.4A16 16 0 0015.54 18l.77-.77a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 19.41v.01"
                        stroke="#00c566" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-white">Get a Live Call from Tommy</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      Real demo · No commitment
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => { setForm((f) => ({ ...f, phone: e.target.value })); setErrors((er) => ({ ...er, phone: "" })); }}
                    />
                    {errors.phone && <p className="text-xs mt-1" style={{ color: "#ff4444" }}>{errors.phone}</p>}
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: "" })); }}
                    />
                    {errors.name && <p className="text-xs mt-1" style={{ color: "#ff4444" }}>{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setErrors((er) => ({ ...er, email: "" })); }}
                    />
                    {errors.email && <p className="text-xs mt-1" style={{ color: "#ff4444" }}>{errors.email}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state === "calling"}
                    className="btn-primary w-full justify-center py-4 text-base mt-2 disabled:opacity-60"
                    style={{ transition: "all 0.2s" }}
                  >
                    {state === "calling" ? (
                      <>
                        <span
                          className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                          style={{ animation: "spin 0.8s linear infinite" }}
                        />
                        Tommy calling in {countdown}s...
                      </>
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.53 9.77a19.79 19.79 0 01-3.07-8.67A2 2 0 012.44 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.4A16 16 0 0015.54 18l.77-.77a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 19.41v.01"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Call Me Now →
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                    ⏱ Tommy will call in &lt;8 seconds · No spam, ever
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Tommy visual */}
          <div className="flex flex-col items-center gap-6">
            <TommyBot state={botState} size={340} />

            {state === "calling" && (
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-full"
                style={{
                  background: "rgba(0,197,102,0.1)",
                  border: "1px solid rgba(0,197,102,0.3)",
                  animation: "pulseGlow 1s ease-in-out infinite",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#00c566", boxShadow: "0 0 8px #00c566" }}
                />
                <span className="text-sm font-semibold" style={{ color: "#00c566" }}>
                  Calling {form.phone} in {countdown} seconds...
                </span>
              </div>
            )}

            {state === "idle" && (
              <div className="text-center">
                <p className="font-semibold text-white mb-1">Tommy is ready for you</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Fill out the form and he&apos;ll call you in seconds
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
