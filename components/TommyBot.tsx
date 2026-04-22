"use client";

type TommyState = "idle" | "listening" | "talking" | "success";

interface TommyBotProps {
  state?: TommyState;
  size?: number;
  className?: string;
}

/**
 * Tommy — High-conversion sales character
 *
 * Design principles applied:
 *  • Neotenic proportions: head = 60% of total height → instant trust
 *  • Eyes dominate the face: gaze hooks viewer in <200ms
 *  • Eyebrows raised + slight open smile = "eager & about to act"
 *  • Forward lean of head conveys urgency without anxiety
 *  • Radial gradients on sphere = 3-D depth from pure SVG
 *  • Body is minimal context, never competing with face
 *  • Readable at 40px (small) and 400px (hero)
 *  • Speed lines communicate <8-second promise visually
 */
export default function TommyBot({
  state = "idle",
  size = 320,
  className = "",
}: TommyBotProps) {
  const isActive = state === "listening" || state === "talking";

  return (
    <div
      className={`relative inline-flex items-center justify-center tommy-float ${className}`}
      style={{ width: size, height: size * 1.15 }}
    >
      {/* Floor glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: size * 0.65,
          height: size * 0.12,
          background: "radial-gradient(ellipse, rgba(0,197,102,0.22) 0%, transparent 70%)",
          filter: "blur(14px)",
          borderRadius: "50%",
        }}
      />

      <svg
        width={size}
        height={size * 1.15}
        viewBox="0 0 300 345"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tommy — LoopHub AI voice agent"
      >
        <defs>
          {/* ── Head sphere gradient ── */}
          {/* Main surface: off-dark with light from top-left */}
          <radialGradient id="tHeadMain" cx="34%" cy="27%" r="68%">
            <stop offset="0%"  stopColor="#2f2f2f" />
            <stop offset="45%" stopColor="#181818" />
            <stop offset="85%" stopColor="#0c0c0c" />
            <stop offset="100%" stopColor="#060606" />
          </radialGradient>

          {/* Rim light bottom-right (subtle) */}
          <radialGradient id="tHeadRim" cx="75%" cy="82%" r="45%">
            <stop offset="0%"  stopColor="rgba(0,197,102,0.12)" />
            <stop offset="100%" stopColor="rgba(0,197,102,0)" />
          </radialGradient>

          {/* ── Eye iris gradients ── */}
          <radialGradient id="tEyeL" cx="32%" cy="28%" r="65%">
            <stop offset="0%"  stopColor="#a8ffd4" />
            <stop offset="30%" stopColor="#00e676" />
            <stop offset="70%" stopColor="#00c566" />
            <stop offset="100%" stopColor="#006b36" />
          </radialGradient>
          <radialGradient id="tEyeR" cx="32%" cy="28%" r="65%">
            <stop offset="0%"  stopColor="#a8ffd4" />
            <stop offset="30%" stopColor="#00e676" />
            <stop offset="70%" stopColor="#00c566" />
            <stop offset="100%" stopColor="#006b36" />
          </radialGradient>

          {/* ── Body gradient ── */}
          <radialGradient id="tBody" cx="38%" cy="18%" r="72%">
            <stop offset="0%"  stopColor="#222" />
            <stop offset="60%" stopColor="#0f0f0f" />
            <stop offset="100%" stopColor="#060606" />
          </radialGradient>

          {/* ── Headset gradient ── */}
          <linearGradient id="tBand" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#111" />
          </linearGradient>

          {/* ── Ear cup gradient ── */}
          <radialGradient id="tCup" cx="35%" cy="25%" r="70%">
            <stop offset="0%"  stopColor="#2e2e2e" />
            <stop offset="100%" stopColor="#0d0d0d" />
          </radialGradient>

          {/* ── Filters ── */}
          {/* Eye glow */}
          <filter id="tEyeGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft object shadow */}
          <filter id="tShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.7" />
          </filter>

          {/* Headset glow */}
          <filter id="tHsGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ════════════════════════════
            GROUND SHADOW
        ════════════════════════════ */}
        <ellipse cx="150" cy="338" rx="78" ry="7"
          fill="rgba(0,0,0,0.45)" />

        {/* ════════════════════════════
            BODY  (minimal — supports the head)
        ════════════════════════════ */}
        {/* Main torso */}
        <path
          d="M88 240 Q82 260 82 290 Q82 318 90 324 Q118 334 150 335 Q182 334 210 324 Q218 318 218 290 Q218 260 212 240 Q194 232 150 230 Q106 232 88 240 Z"
          fill="url(#tBody)"
        />
        {/* Torso rim */}
        <path
          d="M88 240 Q82 260 82 290 Q82 318 90 324 Q118 334 150 335 Q182 334 210 324 Q218 318 218 290 Q218 260 212 240 Q194 232 150 230 Q106 232 88 240 Z"
          fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"
        />
        {/* Collar highlight */}
        <path d="M106 238 Q150 230 194 238" stroke="rgba(255,255,255,0.09)" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Collar details */}
        <path d="M130 235 L138 258 L150 248 L162 258 L170 235 Q160 240 150 245 Q140 240 130 235 Z"
          fill="rgba(255,255,255,0.04)" />

        {/* ── Chest indicator (status dot) ── */}
        <circle cx="150" cy="282" r="8"
          fill={isActive ? "#00c566" : "rgba(0,197,102,0.3)"}
          style={isActive ? { filter: "drop-shadow(0 0 8px #00c566)", animation: "headsetPulse 1.5s ease-in-out infinite" } : {}}
        />
        {/* Two side dots */}
        <circle cx="126" cy="282" r="5" fill="rgba(0,197,102,0.18)" />
        <circle cx="174" cy="282" r="5" fill="rgba(0,197,102,0.18)" />

        {/* Waveform when talking */}
        {state === "talking" && (
          <g>
            {[0,1,2,3,4,5,6].map((i) => {
              const hs = [8,14,10,18,10,14,8];
              return (
                <rect key={i}
                  x={119 + i * 10} y={295 - hs[i] / 2}
                  width="5" height={hs[i]} rx="2.5"
                  fill="#00c566" opacity="0.65"
                  style={{ animation: `bounceSlow ${0.3 + i * 0.06}s ease-in-out infinite` }}
                />
              );
            })}
          </g>
        )}

        {/* ── Arms ── */}
        <path d="M90 252 Q70 268 68 295 Q68 308 80 310"
          stroke="#111" strokeWidth="28" strokeLinecap="round" fill="none" />
        <path d="M90 252 Q70 268 68 295 Q68 308 80 310"
          stroke="rgba(255,255,255,0.04)" strokeWidth="24" strokeLinecap="round" fill="none" />
        <path d="M210 252 Q230 268 232 295 Q232 308 220 310"
          stroke="#111" strokeWidth="28" strokeLinecap="round" fill="none" />
        <path d="M210 252 Q230 268 232 295 Q232 308 220 310"
          stroke="rgba(255,255,255,0.04)" strokeWidth="24" strokeLinecap="round" fill="none" />

        {/* Hands */}
        <circle cx="80" cy="314" r="16" fill="#0f0f0f" />
        <circle cx="80" cy="314" r="15" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <circle cx="220" cy="314" r="16" fill="#0f0f0f" />
        <circle cx="220" cy="314" r="15" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

        {/* ════════════════════════════
            NECK
        ════════════════════════════ */}
        <rect x="130" y="208" width="40" height="20" rx="10" fill="#0e0e0e" />
        <rect x="131" y="209" width="38" height="8" rx="4" fill="rgba(255,255,255,0.04)" />

        {/* ════════════════════════════
            HEAD  — the hero of the composition
            Large sphere: center (150,134) r=102
        ════════════════════════════ */}
        <circle cx="150" cy="134" r="104"
          fill="url(#tHeadMain)"
          filter="url(#tShadow)"
        />
        {/* Rim light overlay */}
        <circle cx="150" cy="134" r="104" fill="url(#tHeadRim)" />
        {/* Head edge rim */}
        <circle cx="150" cy="134" r="104"
          fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />

        {/* Head specular (top-left catchlight) */}
        <ellipse cx="118" cy="90" rx="28" ry="14"
          fill="rgba(255,255,255,0.06)"
          style={{ transform: "rotate(-20deg)", transformOrigin: "118px 90px" }}
        />

        {/* ════════════════════════════
            EYEBROWS  (raised = eager/anticipatory)
        ════════════════════════════ */}
        {/* Left brow — raised on inner end */}
        <path d="M90 102 Q112 95 126 100"
          stroke="rgba(255,255,255,0.4)" strokeWidth="5"
          strokeLinecap="round" fill="none"
        />
        {/* Right brow */}
        <path d="M174 100 Q188 95 210 102"
          stroke="rgba(255,255,255,0.4)" strokeWidth="5"
          strokeLinecap="round" fill="none"
        />

        {/* ════════════════════════════
            EYES  — the dominant feature
            Each eye: socket → iris → pupil → catchlight
        ════════════════════════════ */}

        {/* ── LEFT EYE ── */}
        {/* Socket: deep shadow behind iris */}
        <circle cx="108" cy="132" r="34" fill="#050e08" />
        <circle cx="108" cy="132" r="34"
          fill="none" stroke="rgba(0,197,102,0.1)" strokeWidth="1" />

        {/* Iris with glow filter */}
        <g filter="url(#tEyeGlow)">
          <circle
            cx="108" cy="132" r="27"
            fill="url(#tEyeL)"
            className="eye-blink"
            style={{
              transformOrigin: "108px 132px",
              filter: `drop-shadow(0 0 ${isActive ? 18 : 10}px #00c566)`,
            }}
          />
        </g>

        {/* Pupil */}
        <circle cx="108" cy="132" r="12"
          fill="#030d07"
          className="eye-blink"
          style={{ transformOrigin: "108px 132px" }}
        />
        {/* Primary catchlight */}
        <circle cx="116" cy="124" r="6"
          fill="rgba(255,255,255,0.75)"
          className="eye-blink"
          style={{ transformOrigin: "108px 132px" }}
        />
        {/* Secondary catchlight */}
        <circle cx="99" cy="139" r="3"
          fill="rgba(255,255,255,0.3)"
          className="eye-blink"
          style={{ transformOrigin: "108px 132px" }}
        />

        {/* ── RIGHT EYE ── */}
        <circle cx="192" cy="132" r="34" fill="#050e08" />
        <circle cx="192" cy="132" r="34"
          fill="none" stroke="rgba(0,197,102,0.1)" strokeWidth="1" />

        <g filter="url(#tEyeGlow)">
          <circle
            cx="192" cy="132" r="27"
            fill="url(#tEyeR)"
            className="eye-blink"
            style={{
              transformOrigin: "192px 132px",
              filter: `drop-shadow(0 0 ${isActive ? 18 : 10}px #00c566)`,
            }}
          />
        </g>

        <circle cx="192" cy="132" r="12"
          fill="#030d07"
          className="eye-blink"
          style={{ transformOrigin: "192px 132px" }}
        />
        <circle cx="200" cy="124" r="6"
          fill="rgba(255,255,255,0.75)"
          className="eye-blink"
          style={{ transformOrigin: "192px 132px" }}
        />
        <circle cx="183" cy="139" r="3"
          fill="rgba(255,255,255,0.3)"
          className="eye-blink"
          style={{ transformOrigin: "192px 132px" }}
        />

        {/* ════════════════════════════
            MOUTH  (slight open grin = friendly confidence)
        ════════════════════════════ */}
        {/* Mouth recess */}
        <path d="M118 180 Q150 196 182 180"
          stroke="#050505" strokeWidth="12" strokeLinecap="round" fill="none"
        />
        {state === "talking" ? (
          /* Open mouth / talking */
          <>
            <path d="M120 181 Q150 196 180 181"
              stroke="#222" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M126 183 Q150 194 174 183"
              stroke="#00c566" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6"
              style={{ animation: "bounceSlow 0.25s ease-in-out infinite" }}
            />
          </>
        ) : state === "success" ? (
          /* Big smile */
          <path d="M118 180 Q150 202 182 180"
            stroke="#00c566" strokeWidth="5" strokeLinecap="round" fill="none"
            style={{ filter: "drop-shadow(0 0 5px #00c566)" }}
          />
        ) : (
          /* Default: slight confident grin */
          <path d="M122 180 Q150 194 178 180"
            stroke="rgba(255,255,255,0.25)" strokeWidth="4.5" strokeLinecap="round" fill="none"
          />
        )}

        {/* ════════════════════════════
            HEADSET
        ════════════════════════════ */}
        {/* Band arc over head */}
        <path
          d="M58 134 Q58 36 150 32 Q242 36 242 134"
          stroke="url(#tBand)" strokeWidth="10" strokeLinecap="round" fill="none"
        />
        {/* Band highlight */}
        <path
          d="M58 134 Q58 36 150 32 Q242 36 242 134"
          stroke="rgba(255,255,255,0.09)" strokeWidth="7" strokeLinecap="round" fill="none"
        />

        {/* ── Left ear cup ── */}
        <ellipse cx="54" cy="138" rx="20" ry="26"
          fill="url(#tCup)"
          filter="url(#tHsGlow)"
        />
        <ellipse cx="54" cy="138" rx="20" ry="26"
          fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"
        />
        <ellipse cx="54" cy="138" rx="12" ry="17" fill="#080808" />
        <ellipse cx="54" cy="138" rx="8" ry="12"
          fill="#00c566" opacity={isActive ? 0.85 : 0.6}
          style={isActive ? { filter: "drop-shadow(0 0 10px #00c566)", animation: "headsetPulse 1.8s ease-in-out infinite" } : {}}
        />
        <path d="M47 126 Q51 122 57 124" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* ── Right ear cup ── */}
        <ellipse cx="246" cy="138" rx="20" ry="26"
          fill="url(#tCup)"
          filter="url(#tHsGlow)"
        />
        <ellipse cx="246" cy="138" rx="20" ry="26"
          fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"
        />
        <ellipse cx="246" cy="138" rx="12" ry="17" fill="#080808" />
        <ellipse cx="246" cy="138" rx="8" ry="12"
          fill="#00c566" opacity={isActive ? 0.85 : 0.6}
          style={isActive ? { filter: "drop-shadow(0 0 10px #00c566)", animation: "headsetPulse 1.8s ease-in-out infinite" } : {}}
        />
        <path d="M239 126 Q243 122 249 124" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* ── Mic boom (left side) ── */}
        <path d="M42 153 Q28 165 30 183 Q31 194 40 197"
          stroke="#1e1e1e" strokeWidth="5" strokeLinecap="round" fill="none"
        />
        {/* Mic capsule — always visible, glows when active */}
        <rect x="33" y="193" width="18" height="10" rx="5"
          fill={isActive ? "#00c566" : "#1a1a1a"}
          stroke={isActive ? "rgba(0,197,102,0.4)" : "rgba(255,255,255,0.08)"}
          strokeWidth="1"
          style={isActive ? { filter: "drop-shadow(0 0 8px #00c566)" } : {}}
        />
        <circle cx="39" cy="198" r="2.5" fill={isActive ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.1)"} />

        {/* ════════════════════════════
            ANTENNA
        ════════════════════════════ */}
        <line x1="150" y1="32" x2="150" y2="10"
          stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeLinecap="round"
        />
        <circle cx="150" cy="7" r="6"
          fill="#00c566"
          style={{ filter: "drop-shadow(0 0 8px #00c566)", animation: "headsetPulse 2.5s ease-in-out infinite" }}
        />
        <circle cx="150" cy="7" r="3" fill="#80ffcc" />

        {/* ════════════════════════════
            SPEED LINES (active state — visual <8s cue)
        ════════════════════════════ */}
        {isActive && (
          <g opacity="0.7">
            {[1,2,3].map((i) => (
              <path
                key={i}
                d={`M${263 + i * 12} ${124 + i * 6} L${272 + i * 12} ${124 + i * 6}`}
                stroke="#00c566"
                strokeWidth={4 - i}
                strokeLinecap="round"
                style={{
                  animation: `headsetPulse ${0.6 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </g>
        )}

        {/* ════════════════════════════
            SUCCESS badge
        ════════════════════════════ */}
        {state === "success" && (
          <g>
            <circle cx="238" cy="68" r="24" fill="#00c566" />
            <circle cx="238" cy="68" r="24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            <path d="M228 68 L235 75 L249 57"
              stroke="#000" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
            />
          </g>
        )}

        {/* ════════════════════════════
            IDLE hint — tiny phone icon
            (only idle, suggests "ready to call")
        ════════════════════════════ */}
        {state === "idle" && (
          <g opacity="0.55">
            <circle cx="238" cy="80" r="18"
              fill="rgba(0,197,102,0.1)"
              stroke="rgba(0,197,102,0.25)" strokeWidth="1.5"
            />
            <path d="M231 74 l3 1.5 -0.8 3 2 2 3 -0.8 1.5 3 -3 2c-4 -1.5 -8.5 -8 -7 -11z"
              fill="#00c566" transform="scale(0.85) translate(33, 14)"
            />
          </g>
        )}
      </svg>

      {/* Status badge */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
        style={{
          background: "rgba(0,0,0,0.88)",
          border: "1px solid rgba(0,197,102,0.25)",
          backdropFilter: "blur(12px)",
        }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{
            background: "#00c566",
            boxShadow: "0 0 8px #00c566",
            animation: "headsetPulse 1.5s ease-in-out infinite",
          }}
        />
        <span style={{ color: "rgba(255,255,255,0.8)" }}>
          {state === "idle"     && "Tommy · Ready to call"}
          {state === "listening"&& "Tommy · Calling now..."}
          {state === "talking"  && "Tommy · In conversation"}
          {state === "success"  && "Tommy · Appointment booked!"}
        </span>
      </div>
    </div>
  );
}
