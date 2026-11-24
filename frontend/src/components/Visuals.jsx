import React from "react";
import { motion } from "framer-motion";
import { ecosystem } from "../data/siteData";
import { EASE } from "./Motion";

/* ──────────── HERO SHOWCASE ────────────
   A product-style window that previews the whole ecosystem at a glance.
   Each widget belongs to one business unit and uses its signal colour. */
const Widget = ({ title, color, children, className = "" }) => (
  <div className={`rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 ${className}`}>
    <div className="mb-3 flex items-center gap-2 text-[11px] text-fog-400">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {title}
    </div>
    {children}
  </div>
);

export const HeroShowcase = () => {
  const [learn, work, products, studio, labs] = ecosystem;
  const spark = [12, 18, 15, 24, 22, 30, 28, 36, 34, 44, 42, 52];
  const max = Math.max(...spark);
  const sparkPath = spark
    .map((v, i) => `${i === 0 ? "M" : "L"} ${(i / (spark.length - 1)) * 200} ${60 - (v / max) * 52}`)
    .join(" ");

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-850/90 text-left shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:rounded-3xl">
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3 sm:px-5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-fog-500 sm:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-work" />
          platform.dmanbray.com
        </div>
        <div className="w-12" />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-52 shrink-0 border-r border-white/[0.06] p-4 md:block">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-[10px] font-bold text-white">
              DN
            </span>
            <span className="text-sm font-semibold text-paper">DMANBRAY</span>
          </div>
          <p className="mb-2 px-2 text-[10px] uppercase tracking-wider text-fog-500">Ecosystem</p>
          <ul className="space-y-0.5">
            {ecosystem.map((v, i) => (
              <li
                key={v.id}
                className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] ${
                  i === 0 ? "bg-white/[0.06] text-paper" : "text-fog-400"
                }`}
              >
                <span className="h-2 w-2 rounded-[3px]" style={{ background: v.signal }} />
                {v.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Dashboard */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] text-fog-500">Overview</p>
              <p className="text-base font-semibold tracking-tight text-paper sm:text-lg">Everything we&apos;re building</p>
            </div>
            <div className="hidden items-center gap-2 rounded-lg border border-white/[0.07] px-3 py-1.5 text-[11px] text-fog-500 sm:flex">
              Search the ecosystem <kbd className="rounded bg-white/[0.06] px-1.5 font-mono">⌘K</kbd>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
            <Widget title={`${products.name} · Projects delivered`} color={products.signal} className="col-span-2 lg:col-span-4">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-paper">50+</p>
                  <p className="mt-1 text-[11px] text-signal-work">Shipped to production</p>
                </div>
                <svg viewBox="0 0 200 60" className="h-14 w-1/2 sm:h-16" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#5b8cff" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#5b8cff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`${sparkPath} L 200 60 L 0 60 Z`} fill="url(#spark)" />
                  <motion.path
                    d={sparkPath}
                    fill="none"
                    stroke="#8fb0ff"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: EASE, delay: 1 }}
                  />
                </svg>
              </div>
            </Widget>

            <Widget title={`${studio.name} · Uptime`} color={studio.signal} className="col-span-1 lg:col-span-2">
              <p className="text-3xl font-semibold tracking-tight text-paper">99.9%</p>
              <div className="mt-3 flex h-6 items-end gap-[3px]">
                {Array.from({ length: 22 }).map((_, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ height: i === 15 ? "55%" : "100%", background: i === 15 ? "#ff7a59" : "#4fd1a5", opacity: 0.85 }}
                  />
                ))}
              </div>
            </Widget>

            <Widget title={`${labs.name} · AI assistant`} color={labs.signal} className="col-span-1 lg:col-span-3">
              <div className="space-y-2 text-[11px] leading-snug sm:text-xs">
                <p className="ml-auto w-fit max-w-[90%] rounded-lg rounded-br-sm bg-white/[0.06] px-2.5 py-1.5 text-fog-200">
                  Summarise the onboarding docs
                </p>
                <p className="w-fit max-w-[95%] rounded-lg rounded-bl-sm px-2.5 py-1.5 text-paper" style={{ background: "rgba(180,140,255,0.16)" }}>
                  3 key steps found, with sources cited.
                </p>
                <span className="flex gap-1 pl-1">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="h-1 w-1 rounded-full bg-signal-ai"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }}
                    />
                  ))}
                </span>
              </div>
            </Widget>

            <Widget title={`${learn.name} · Program progress`} color={learn.signal} className="col-span-2 hidden sm:block lg:col-span-3">
              <div className="space-y-2.5">
                {[["Full-stack web", 82], ["Android", 64], ["Applied AI", 48]].map(([n, p], i) => (
                  <div key={n}>
                    <div className="mb-1 flex justify-between text-[11px] text-fog-400">
                      <span>{n}</span>
                      <span>{p}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06]">
                      <motion.div
                        className="h-full rounded-full bg-signal-learn"
                        initial={{ width: 0 }}
                        animate={{ width: `${p}%` }}
                        transition={{ duration: 1.6, ease: EASE, delay: 1.1 + i * 0.15 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Widget>

            <Widget title={`${work.name} · Open opportunities`} color={work.signal} className="col-span-2 hidden lg:col-span-6 lg:block">
              <div className="grid grid-cols-3 gap-3">
                {["Frontend engineer · React", "Android developer · Kotlin", "AI engineer · RAG"].map((r) => (
                  <div key={r} className="flex items-center justify-between gap-2 rounded-lg bg-white/[0.03] px-3 py-2 text-xs text-fog-200">
                    <span className="truncate">{r}</span>
                    <span className="shrink-0 rounded-full bg-signal-work/15 px-2 py-0.5 text-[10px] text-signal-work">Open</span>
                  </div>
                ))}
              </div>
            </Widget>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ──────────── ECOSYSTEM MOTIFS ────────────
   A distinct generative illustration per vertical, so no two panels look alike. */
export const EcosystemMotif = ({ motif, color }) => {
  switch (motif) {
    case "learn":
      // Ascending steps: a learning pathway
      return (
        <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.rect
              key={i}
              x={30 + i * 50}
              width="40"
              rx="4"
              fill={color}
              fillOpacity={0.15 + i * 0.12}
              initial={{ y: 270, height: 0 }}
              whileInView={{ y: 270 - (i + 1) * 34, height: (i + 1) * 34 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: i * 0.06 }}
            />
          ))}
          <motion.path
            d="M50 240 C 150 220, 250 120, 360 30"
            fill="none"
            stroke="#f1eee7"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.4 }}
          />
          <circle cx="360" cy="30" r="6" fill="#f1eee7" />
        </svg>
      );
    case "work":
      // Network of people/opportunities connected
      {
        const pts = [
          [60, 70], [170, 40], [300, 80], [110, 170], [230, 150], [350, 190], [70, 250], [190, 250], [310, 260],
        ];
        const links = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 7], [5, 8], [6, 7], [7, 8], [1, 3], [4, 8]];
        return (
          <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
            {links.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={pts[a][0]}
                y1={pts[a][1]}
                x2={pts[b][0]}
                y2={pts[b][1]}
                stroke={color}
                strokeOpacity="0.45"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE, delay: i * 0.04 }}
              />
            ))}
            {pts.map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r={i === 4 ? 16 : 9} fill={i === 4 ? color : "#0a0b0d"} stroke={color} strokeWidth="1.5" />
              </g>
            ))}
          </svg>
        );
      }
    case "products":
      // Stacked product surfaces
      return (
        <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE, delay: i * 0.12 }}
            >
              <rect
                x={70 + i * 34}
                y={40 + i * 40}
                width="220"
                height="150"
                rx="10"
                fill="#15171b"
                stroke={color}
                strokeOpacity={0.3 + i * 0.3}
              />
              <rect x={86 + i * 34} y={58 + i * 40} width="60" height="6" rx="3" fill={color} fillOpacity="0.8" />
              <rect x={86 + i * 34} y={76 + i * 40} width="150" height="4" rx="2" fill="#f1eee7" fillOpacity="0.15" />
              <rect x={86 + i * 34} y={88 + i * 40} width="120" height="4" rx="2" fill="#f1eee7" fillOpacity="0.15" />
            </motion.g>
          ))}
        </svg>
      );
    case "studio":
      // Code / blueprint
      return (
        <svg viewBox="0 0 400 300" className="h-full w-full font-mono" aria-hidden="true">
          {[
            ["const", "build", "= (idea) =>", 0],
            ["  design", "(idea)", "", 1],
            ["  .engineer", "()", "", 1],
            ["  .test", "()", "", 1],
            ["  .ship", "();", "", 1],
          ].map(([a, b, c, indent], i) => (
            <motion.text
              key={i}
              x={40}
              y={70 + i * 38}
              fontSize="19"
              fontFamily="'Geist Mono', monospace"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
            >
              <tspan fill={indent ? "#f1eee7" : color}>{a} </tspan>
              <tspan fill={indent ? color : "#f1eee7"}>{b} </tspan>
              <tspan fill="#7b808a">{c}</tspan>
            </motion.text>
          ))}
          <rect x="40" y="250" width="12" height="20" fill={color} opacity="0.9" />
        </svg>
      );
    case "labs":
    default:
      // Neural / wave field
      return (
        <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M0 ${150 + (i - 4) * 4} C 100 ${40 + i * 26}, 300 ${260 - i * 26}, 400 ${150 - (i - 4) * 4}`}
              fill="none"
              stroke={color}
              strokeOpacity={0.15 + (i % 3) * 0.2}
              strokeWidth="1.2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: EASE, delay: i * 0.05 }}
            />
          ))}
          <circle cx="200" cy="150" r="10" fill={color} />
          <circle cx="200" cy="150" r="28" fill="none" stroke={color} strokeOpacity="0.4" />
        </svg>
      );
  }
};

/* ──────────── PRODUCT VISUAL ────────────
   A stylised interface built from a project's real data (title, features,
   colour). Used wherever a product screenshot would sit. */
export const ProductVisual = ({ project, variant = "dark", className = "" }) => {
  const c = project.color;
  const bars = [42, 68, 55, 80, 62, 92, 74, 58, 86, 70, 96, 78];
  const features = (project.features || []).slice(0, 4);
  const isLight = variant === "light";

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${isLight ? "bg-paper-200" : "bg-ink-800"} ${className}`}
      style={{
        backgroundImage: `radial-gradient(120% 80% at 100% 0%, ${c}33 0%, transparent 55%)`,
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* App window */}
      <div className="absolute bottom-[-6%] left-[7%] right-[7%] top-[12%] flex flex-col rounded-t-xl border border-white/10 bg-ink-900/95 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-1.5 border-b border-white/[0.07] px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-3 truncate font-mono text-[10px] text-fog-500">
            dmanbray.app/{project.id}
          </span>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-12 gap-3 p-4 pb-[8%]">
          {/* Sidebar */}
          <div className="col-span-3 hidden space-y-2 border-r border-white/[0.05] pr-3 sm:block">
            {features.map((f, i) => (
              <div
                key={f}
                className="truncate rounded-md px-2 py-1.5 text-[10px] text-fog-400"
                style={i === 0 ? { background: `${c}22`, color: c } : undefined}
              >
                {f}
              </div>
            ))}
          </div>
          {/* Main */}
          <div className="col-span-12 flex min-h-0 flex-col gap-3 sm:col-span-9">
            <div className="flex items-end justify-between">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-fog-500">
                  {project.category}
                </div>
                <div className="mt-1 truncate text-sm font-semibold tracking-tight text-paper">
                  {project.title}
                </div>
              </div>
              <div className="rounded-full px-2 py-0.5 font-mono text-[9px]" style={{ background: `${c}26`, color: c }}>
                live
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(project.technologies || []).slice(0, 3).map((t, i) => (
                <div key={t} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
                  <div className="font-mono text-[9px] text-fog-500">{t}</div>
                  <div className="mt-1 h-1.5 rounded-full bg-white/[0.06]">
                    <div className="h-full rounded-full" style={{ width: `${60 + i * 14}%`, background: c }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex min-h-[4rem] flex-1 items-end gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ height: `${h}%`, background: c, opacity: 0.25 + (i / bars.length) * 0.75 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
