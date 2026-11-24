import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/* Social config                                                       */
/* ------------------------------------------------------------------ */
const SOCIALS = [
  {
    key: "linkedin",
    label: "LinkedIn",
    path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  },
  {
    key: "twitter",
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    key: "instagram",
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
];

const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

/* ------------------------------------------------------------------ */
/* Founder Card                                                        */
/* Editorial portrait: image wipes open on scroll (via data-clip),     */
/* name in display type, socials as text links. Inherits text colour   */
/* so it works on light and dark sections.                             */
/* ------------------------------------------------------------------ */
const FounderCard = ({
  founder,
  portrait,
  objectPosition = "center 15%",
  badge = "Executive",
  index,
  aspect = "aspect-[4/5]",
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  const socials = SOCIALS.filter((social) => founder.social?.[social.key]);
  const showImage = portrait && !imgFailed;

  return (
    <article className="group relative w-full" data-cursor="">
      <div data-clip className={`relative w-full overflow-hidden rounded-sm bg-ink-700 ${aspect}`}>
        <div className="absolute inset-0">
          {showImage ? (
            <img
              src={portrait}
              alt={founder.name}
              style={{ objectPosition }}
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.05]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,#2c2c30,#0b0b0c_70%)]">
              <span className="text-7xl font-semibold tracking-tight text-white/[0.12]">
                {getInitials(founder.name)}
              </span>
            </div>
          )}
        </div>
        <span className="absolute left-3 top-3 bg-brand px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white">
          {badge}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4 border-t pt-4" style={{ borderColor: "color-mix(in srgb, currentColor 18%, transparent)" }}>
        <div className="min-w-0">
          <h3 className="font-display text-2xl font-semibold leading-[1.05] tracking-[-0.03em]">{founder.name}</h3>
          {founder.role && <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] opacity-60">{founder.role}</p>}
        </div>
        {index !== undefined && <span className="font-mono text-xs opacity-50">{String(index + 1).padStart(2, "0")}</span>}
      </div>
      {socials.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {socials.map((social) => (
            <a
              key={social.key}
              href={founder.social[social.key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${founder.name} on ${social.label}`}
              className="group/s inline-flex items-center gap-1.5 opacity-70 transition-opacity hover:opacity-100"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d={social.path} />
              </svg>
              <span className="link-draw">{social.label}</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
};

export default FounderCard;
