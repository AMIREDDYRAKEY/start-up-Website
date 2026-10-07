
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
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259.014-3.667.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
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
/* ------------------------------------------------------------------ */
const FounderCard = ({
  founder,
  portrait,
  objectPosition = "center 15%",
  badge = "Executive",
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  const socials = SOCIALS.filter(
    (social) => founder.social?.[social.key]
  );

  const showImage = portrait && !imgFailed;

  return (
    <article
      className="
        group relative
        h-[400px] w-full
        overflow-hidden
        rounded-[24px]
        bg-[#101114]
        ring-1 ring-white/[0.08]
        transition-all duration-500 ease-out
        hover:-translate-y-1
        hover:ring-[#d4af37]/30
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]
        sm:h-[430px]
      "
    >
      {/* ------------------------------------------------------------ */}
      {/* Ambient hover glow                                             */}
      {/* ------------------------------------------------------------ */}
      <div
        className="
          pointer-events-none
          absolute -inset-20
          z-0
          opacity-0
          blur-3xl
          transition-opacity duration-700
          group-hover:opacity-20
        "
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.45), transparent 60%)",
        }}
      />

      {/* ------------------------------------------------------------ */}
      {/* Main image container                                           */}
      {/* ------------------------------------------------------------ */}
      <div
        className="
          absolute inset-[1px]
          overflow-hidden
          rounded-[23px]
        "
      >
        {showImage ? (
          <img
            src={portrait}
            alt={founder.name}
            style={{ objectPosition }}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="
              absolute inset-0
              h-full w-full
              object-cover
              transition-transform
              duration-1000
              ease-[cubic-bezier(.2,.8,.2,1)]
              group-hover:scale-[1.055]
            "
          />
        ) : (
          <div
            className="
              absolute inset-0
              flex items-center justify-center
              bg-[radial-gradient(circle_at_top,#303238,#0d0e10_70%)]
            "
          >
            <span
              className="
                font-display
                text-7xl
                font-semibold
                tracking-tight
                text-white/[0.12]
              "
            >
              {getInitials(founder.name)}
            </span>
          </div>
        )}

        {/* ---------------------------------------------------------- */}
        {/* Image overlays                                               */}
        {/* ---------------------------------------------------------- */}

        {/* Overall vignette */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-b
            from-black/20
            via-transparent
            to-black/80
          "
        />

        {/* Bottom cinematic gradient */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-[60%]
            bg-gradient-to-t
            from-black/95
            via-black/60
            to-transparent
          "
        />

        {/* Side vignette */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-r
            from-black/20
            via-transparent
            to-black/20
          "
        />

        {/* ---------------------------------------------------------- */}
        {/* Badge                                                        */}
        {/* ---------------------------------------------------------- */}
        <div
          className="
            absolute left-3.5 top-3.5
            flex items-center gap-1.5
            rounded-full
            border border-white/10
            bg-black/30
            px-2.5 py-1
            backdrop-blur-xl
          "
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="
                absolute
                inline-flex
                h-full w-full
                animate-ping
                rounded-full
                bg-[#d4af37]
                opacity-50
              "
            />

            <span
              className="
                relative
                h-1.5 w-1.5
                rounded-full
                bg-[#d4af37]
              "
            />
          </span>

          <span
            className="
              text-[10px]
              font-medium
              tracking-wide
              text-white/85
            "
          >
            {badge}
          </span>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* Social links                                                 */}
        {/* ---------------------------------------------------------- */}
        {socials.length > 0 && (
          <div
            className="
              absolute right-3.5 top-3.5
              flex items-center gap-0.5
              rounded-full
              border border-white/10
              bg-black/30
              p-1
              backdrop-blur-xl
            "
          >
            {socials.map((social) => (
              <a
                key={social.key}
                href={founder.social[social.key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${founder.name} on ${social.label}`}
                title={social.label}
                className="
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  text-white/65
                  transition-all duration-300
                  hover:scale-105
                  hover:bg-white
                  hover:text-black
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#d4af37]
                "
              >
                <svg
                  className="h-3 w-3 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        )}

        {/* ---------------------------------------------------------- */}
        {/* Founder information                                         */}
        {/* ---------------------------------------------------------- */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            p-4
            sm:p-5
          "
        >
          {/* Gold accent */}
          <div
            className="
              mb-2.5
              h-px
              w-8
              bg-[#d4af37]
              transition-all duration-500
              group-hover:w-12
            "
          />

          <div className="flex items-center gap-3">
            {/* Text */}
            <div className="min-w-0 flex-1">
              <h3
                title={founder.name}
                className="
                  truncate
                  font-display
                  text-[19px]
                  font-semibold
                  leading-tight
                  tracking-[-0.02em]
                  text-white
                "
              >
                {founder.name}
              </h3>

              {founder.role && (
                <p
                  title={founder.role}
                  className="
                    mt-1
                    truncate
                    text-[12px]
                    leading-tight
                    text-white/55
                  "
                >
                  {founder.role}
                </p>
              )}
            </div>

            {/* Hover arrow */}
            <div
              className="
                flex h-8 w-8
                shrink-0
                translate-y-1
                items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.06]
                text-white/60
                opacity-0
                transition-all duration-500
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <svg
                className="
                  h-3.5 w-3.5
                  -rotate-45
                "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* Premium border                                                */}
      {/* ------------------------------------------------------------ */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-[24px]
          ring-1 ring-inset ring-white/[0.06]
          transition-all duration-500
          group-hover:ring-[#d4af37]/20
        "
      />
    </article>
  );
};

export default FounderCard;
