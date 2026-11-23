import type { ReactNode } from "react";
import Image from "next/image";
import { Archivo_Black } from "next/font/google";
import { SignupForm } from "./signup-form";
import { Heart } from "./heart";
import { SOCIAL_ICONS } from "./social-icons";

// Chunky block font (used for the "Upcoming shows" heading)
const blocky = Archivo_Black({ weight: "400", subsets: ["latin"] });

const MAGIC_MIKE_TICKETS = "https://magicmikelive.com/new-york/";

const BOOKING_EMAIL = "tess@select.co";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/tesstreg/" },
  { label: "TikTok", href: "https://www.tiktok.com/@tesstregellas" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC50PpbE-fxYIG5WtHnBDvmA" },
] as const;

// Story ring in Tess's colors
const RING = "bg-[conic-gradient(from_200deg,#ffe27a,#ff3d8b,#d91f4f,#ff3d8b,#ffe27a)]";

const NAV = [
  { label: "Shows", href: "#shows" },
  { label: "Watch", href: "#watch" },
  { label: "About", href: "#about" },
  { label: "EPIC", href: "#epic" },
  { label: "Press", href: "#press" },
];

const FACTS = [
  { text: "🎤 Upcoming shows", href: "#shows", pink: true },
  { text: "📺 Acting and comedy reel", href: "#watch" },
  { text: "👰‍♀️ Press (running around NYC in a wedding dress)", href: "#press" },
  { text: "⭐ EPIC: Comedy Special Premiere 2027", href: "#epic" },
];

const HIGHLIGHTS = [
  {
    label: "Stand up",
    href: "#watch",
    img: "/tess-stand-up.jpg",
    crop: "object-[52%_50%] scale-[2.6] origin-[53%_9%]",
  },
  {
    label: "Acting",
    href: "#watch",
    img: "/tess-headshot.webp",
    crop: "object-[50%_8%] scale-[1.25] origin-[5%_50%]",
  },
  { label: "EPIC", href: "#epic", img: "/epic-poster.jpg" },
  { label: "Press", href: "#press", emoji: "📰", bg: "bg-[#ffe27a]" },
  { label: "Newsletter", href: "#newsletter", emoji: "💌", bg: "bg-[#ffd3e6]" },
];

const VIDEOS = [
  { id: "-1vGLpEhdIY", title: "Stand-up Set", tag: "Stand-up" },
  { id: "OXo-ZrOFx6o", title: "Acting Reel", tag: "Acting" },
  { id: "LzeTa8El9hE", title: "Betches Original Series", tag: "SISTERS, Ep. 1: “The Move-In”" },
];

// Vertical videos (Instagram Reels). Instagram doesn't share preview images,
// so each card shows a color until a "cover" image is added (e.g. cover: "/reel-wedding.jpg").
const VIRAL = [
  {
    title: "Viral Wedding Dress",
    href: "https://www.instagram.com/reels/CyTSmrkA7vF/",
    emoji: "💍",
    bg: "bg-gradient-to-br from-[#ff3d8b] to-[#d91f4f]",
    cover: "/reels/wedding-dress.jpg" as string | undefined,
  },
  {
    title: "Sketches",
    href: "https://www.instagram.com/reel/DGS41ggAxis/",
    emoji: "💨",
    bg: "bg-gradient-to-br from-[#ffe27a] to-[#ff9f6e]",
    cover: "/reels/chiropractor.webp" as string | undefined,
  },
  {
    title: "Time Traveling Knight",
    href: "https://www.instagram.com/reel/DdjrHnBu-Dd/",
    emoji: "🗡️",
    bg: "bg-gradient-to-br from-[#2b2b2b] to-[#111]",
    cover: "/reels/time-traveling-knight.webp" as string | undefined,
  },
  {
    title: "Girls Getting Ready",
    href: "https://www.instagram.com/reel/DCxDKCVSOHw/",
    emoji: "💄",
    bg: "bg-gradient-to-br from-[#ffd3e6] to-[#ff8fc0]",
    cover: "/reels/girls-getting-ready.webp" as string | undefined,
  },
];

const PRESS = [
  {
    outlet: "The New York Times",
    headline: "What to Do in New York City in February",
    note: "they put me in the paper!!",
    bg: "bg-[#ffe27a]",
  },
  {
    outlet: "New York Post",
    headline:
      "NYC singleton runs Brooklyn Half Marathon in a wedding dress while on the hunt for a husband: ‘He might be at the finish line!’",
    note: "he was not at the finish line",
    bg: "bg-[#ffd3e6]",
  },
];

/** White caption sticker, like the text on a reel. */
function Caption({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block rounded-lg bg-white px-2.5 py-1 text-center text-sm font-bold leading-tight text-[#111] shadow-[0_2px_10px_rgba(0,0,0,0.12)] ${className}`}
    >
      {children}
    </span>
  );
}

function Ringed({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`${RING} block shrink-0 rounded-full p-[4px] ${className}`}>
      <span className="block size-full rounded-full bg-[#fffaf7] p-[5px]">
        <span className="relative block size-full overflow-hidden rounded-full">{children}</span>
      </span>
    </span>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: ReactNode }) {
  return (
    <div>
      <p className="font-script text-3xl text-[#d91f4f]">{kicker}</p>
      <h2 className="font-display mt-1 text-5xl font-black italic leading-none md:text-6xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex-1 bg-[#fffaf7] text-[#111]">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-[#111]/10 bg-[#fffaf7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
          <a href="#" className="font-display flex items-center gap-1.5 text-2xl font-black italic">
            Tess <Heart className="size-4 text-[#ff3d8b]" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#ff3d8b]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 sm:flex">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label];
                return (
                  <a key={s.label} href={s.href} aria-label={s.label} className="transition hover:text-[#ff3d8b]">
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
            <a
              href={`mailto:${BOOKING_EMAIL}`}
              className="rounded-full bg-[#111] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#ff3d8b]"
            >
              Book me
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-[#ffd3e6] blur-3xl opacity-70" aria-hidden="true" />
          <div className="absolute -bottom-40 -left-40 size-[28rem] rounded-full bg-[#ffe27a] blur-3xl opacity-40" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 pt-20 md:grid-cols-[1.15fr_1fr] md:pb-24 md:pt-28">
            <div>
              <p className="font-script text-3xl text-[#d91f4f]">hi, I&apos;m</p>
              <h1 className="font-display text-[clamp(3.75rem,10vw,7.5rem)] font-black leading-[0.85] text-[#ff3d8b]">
                Tess
                <br />
                Tregellas
              </h1>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-[#111]/60">
                Comedian · Content Creator · Host
              </p>

              <ul className="mt-7 flex flex-col items-start gap-2">
                {FACTS.map((fact) => (
                  <li key={fact.text}>
                    <a
                      href={fact.href}
                      {...(fact.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`group inline-flex items-center gap-1.5 rounded-full border bg-white px-3.5 py-1.5 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-[#ff3d8b] hover:text-[#d91f4f] ${
                        "pink" in fact ? "border-[#ff3d8b] font-semibold text-[#d91f4f]" : "border-[#111]/10"
                      }`}
                    >
                      {fact.text}
                      <span aria-hidden="true" className={`transition group-hover:translate-x-0.5 group-hover:text-[#ff3d8b] ${"pink" in fact ? "text-[#ff3d8b]" : "text-[#111]/30"}`}>→</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#newsletter"
                  className="rounded-full bg-[#ff3d8b] px-7 py-3 font-semibold text-white shadow-[0_8px_20px_-8px_#ff3d8b] transition hover:-translate-y-0.5 hover:bg-[#d91f4f]"
                >
                  Subscribe to my newsletter
                </a>
              </div>
            </div>

            {/* ringed photo with caption stickers */}
            <div className="relative mx-auto w-full max-w-[27rem]">
              <Ringed className="aspect-square w-full">
                <Image
                  src="/tess-red-dress.jpg"
                  alt="Tess Tregellas in a red dress on a New York City street"
                  fill
                  priority
                  sizes="432px"
                  className="object-cover object-[50%_53%] scale-[1.15] origin-[49%_50%]"
                />
              </Ringed>
              {/* "follow me" button → Instagram */}
              <a
                href={SOCIALS[0].href}
                className="absolute left-0 top-6 flex -rotate-6 items-center gap-1.5 rounded-full border border-[#111]/10 bg-white px-4 py-2 text-sm font-bold text-[#111] shadow-[0_6px_18px_-6px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:rotate-0 hover:text-[#ff3d8b] sm:-left-4"
              >
                <SOCIAL_ICONS.Instagram className="size-4 text-[#ff3d8b]" />
                follow me
              </a>
            </div>
          </div>

          {/* story-style quick links */}
          <div className="relative mx-auto max-w-6xl px-6 pb-14">
            <ul className="flex justify-start gap-5 overflow-x-auto pb-2 md:justify-center md:gap-10">
              {HIGHLIGHTS.map((h) => (
                <li key={h.label} className="shrink-0">
                  <a href={h.href} className="group flex w-24 flex-col items-center gap-2">
                    <span className="block size-[5.75rem] rounded-full border-2 border-[#111]/10 p-[3px] transition group-hover:border-[#ff3d8b]">
                      {h.img ? (
                        <span className="relative block size-full overflow-hidden rounded-full">
                          <Image src={h.img} alt="" fill sizes="184px" className={`object-cover ${"crop" in h ? h.crop : "object-top"}`} />
                        </span>
                      ) : (
                        <span className={`flex size-full items-center justify-center rounded-full text-3xl ${h.bg}`}>
                          {h.emoji}
                        </span>
                      )}
                    </span>
                    <span className="text-sm font-semibold">{h.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* UPCOMING SHOWS — swap in real dates + ticket links when you have them */}
        <section id="shows" className="scroll-mt-16 border-t border-[#111]/10">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div>
              <p className="font-script text-3xl text-[#d91f4f]">come say hi</p>
              <h2 className={`${blocky.className} mt-1 text-4xl uppercase leading-none tracking-tight text-[#111] sm:text-5xl md:text-6xl`}>
                Upcoming shows
              </h2>
            </div>
            <ul className="mt-10 divide-y divide-[#111]/10 border-y border-[#111]/10">
              {[
                {
                  when: ["Shows begin", "Jan 28th"],
                  what: "Magic Mike Live",
                  where: "New York City",
                  role: "Host",
                  button: { label: "Get tickets", href: MAGIC_MIKE_TICKETS, external: true },
                },
                {
                  when: ["2027"],
                  what: "EPIC: Comedy Special",
                  where: "Premiere",
                  role: "Comedy, Music & Romance",
                  button: { label: "Get updates", href: "#newsletter", external: false },
                },
              ].map((show) => (
                <li key={show.what} className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-6">
                  <p className="text-sm font-bold uppercase leading-snug tracking-wider text-[#d91f4f]">
                    {show.when.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <div>
                    {show.button.external ? (
                      <a
                        href={show.button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-2xl font-bold underline decoration-[#ff3d8b]/40 underline-offset-4 transition hover:text-[#d91f4f] hover:decoration-[#ff3d8b]"
                      >
                        {show.what}
                      </a>
                    ) : (
                      <p className="font-display text-2xl font-bold">{show.what}</p>
                    )}
                    <p className="text-[#111]/60">
                      {show.where} · {show.role}
                    </p>
                  </div>
                  <a
                    href={show.button.href}
                    {...(show.button.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`justify-self-start rounded-full px-5 py-2 text-sm font-semibold transition sm:justify-self-end ${
                      show.button.external
                        ? "bg-[#ff3d8b] text-white shadow-[0_8px_20px_-8px_#ff3d8b] hover:-translate-y-0.5 hover:bg-[#d91f4f]"
                        : "border border-[#111]/15 hover:border-[#ff3d8b] hover:text-[#d91f4f]"
                    }`}
                  >
                    {show.button.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[#111]/60">
              More dates coming soon. Subscribe and you&apos;ll hear first.
            </p>
            <a
              href="#newsletter"
              className="mt-5 inline-block rounded-full border border-[#ff3d8b]/40 bg-white px-7 py-3 font-semibold text-[#ff3d8b] shadow-sm transition hover:-translate-y-0.5 hover:border-[#ff3d8b] hover:text-[#d91f4f]"
            >
              Subscribe
            </a>
          </div>
        </section>

        {/* WATCH */}
        <section id="watch" className="scroll-mt-16 border-t border-[#111]/10 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-script text-3xl text-[#d91f4f]">check out my work</p>
                <h2 className={`${blocky.className} mt-1 text-4xl uppercase leading-none tracking-tight text-[#111] sm:text-5xl md:text-6xl`}>
                  Videos
                </h2>
              </div>
              <a
                href={SOCIALS[2].href}
                className="rounded-full border border-[#111]/15 px-5 py-2 text-sm font-semibold transition hover:border-[#111]/40"
              >
                More on YouTube →
              </a>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3 md:gap-8">
              {VIDEOS.map((video) => (
                <a key={video.id} href={`https://www.youtube.com/watch?v=${video.id}`} className="group block">
                  <h3 className="font-display mb-3 text-2xl font-bold text-[#ff3d8b] transition group-hover:text-[#d91f4f]">
                    {video.title}
                  </h3>
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#111]">
                    <Image
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 right-3 flex size-11 items-center justify-center rounded-full bg-white/90 text-[#111] transition group-hover:scale-110 group-hover:bg-[#ff3d8b] group-hover:text-white">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-0.5 size-5" fill="currentColor">
                        <path d="M7 5l12 7-12 7z" />
                      </svg>
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#d91f4f]">{video.tag}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* VIRAL VIDEOS (vertical reels) */}
        <section id="viral" className="scroll-mt-16 border-t border-[#111]/10">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-script text-3xl text-[#d91f4f]">as seen on your feed</p>
                <h2 className={`${blocky.className} mt-1 text-4xl uppercase leading-none tracking-tight text-[#111] sm:text-5xl md:text-6xl`}>
                  Viral videos
                </h2>
              </div>
              <a
                href={SOCIALS[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#111]/15 px-5 py-2 text-sm font-semibold transition hover:border-[#111]/40"
              >
                More on Instagram →
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {VIRAL.map((reel) => (
                <a key={reel.href} href={reel.href} target="_blank" rel="noopener noreferrer" className="group block">
                  <h3 className="font-display mb-3 flex min-h-[2.5em] items-end text-lg font-bold leading-tight text-[#ff3d8b] transition group-hover:text-[#d91f4f] md:text-xl">
                    {reel.title}
                  </h3>
                  <div className={`relative aspect-[9/16] overflow-hidden rounded-2xl ${reel.bg} transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-20px_rgba(217,31,79,0.6)]`}>
                    {reel.cover ? (
                      <Image src={reel.cover} alt="" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover object-top transition duration-500 group-hover:scale-105" />
                    ) : (
                      <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-6xl opacity-90 transition duration-500 group-hover:scale-110 md:text-7xl">
                        {reel.emoji}
                      </span>
                    )}
                    <span className="absolute left-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-[#111]">
                      <SOCIAL_ICONS.Instagram className="size-4" />
                    </span>
                    <span className="absolute bottom-3 right-3 flex size-11 items-center justify-center rounded-full bg-white/90 text-[#111] transition group-hover:scale-110 group-hover:bg-[#ff3d8b] group-hover:text-white">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-0.5 size-5" fill="currentColor">
                        <path d="M7 5l12 7-12 7z" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
            {/* headshot in the same pink-and-gold ring as the hero photo */}
            <div className={`${RING} mx-auto w-full max-w-md rounded-[2.4rem] p-[4px] shadow-[0_24px_50px_-24px_rgba(217,31,79,0.55)]`}>
              <div className="rounded-[2.15rem] bg-[#fffaf7] p-[6px]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
                  <Image
                    src="/tess-headshot.webp"
                    alt="Headshot of Tess Tregellas"
                    fill
                    sizes="(min-width: 768px) 448px, 90vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[#111]/80">
              <SectionTitle kicker="the backstory" title="About" />
              <p className="pt-3">
                I&apos;m a stand-up comedian, content creator, actor, and host based in
                New York City. I&apos;m about to host{" "}
                <strong className="text-[#111]">Magic Mike Live</strong> in New York starting in January.
              </p>
              <p>
                You may recognize me from <strong className="text-[#111]">Betches</strong>&apos; viral
                videos, or as the host of <strong className="text-[#111]">Stand Up Magic</strong>, where I
                worked alongside the most talented magicians in NYC, or from my own viral
                videos running around in a wedding dress. All of this led to writing my
                hour, <strong className="text-[#111]">EPIC</strong>, premiering in 2027.
              </p>
              <p>
                I&apos;m a Gemini, people pleaser, musical theater kid turned comedian.
                I&apos;m an avoidant, turned anxious, aspiring secure. I have dyslexia,
                ADHD, and love to randomly start talking in an Australian accent.
              </p>
            </div>
          </div>
        </section>

        {/* EPIC */}
        <section id="epic" className="scroll-mt-16 bg-[#111] text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/epic-poster.jpg"
                  alt="EPIC: Comedy, Music & Romance poster"
                  fill
                  sizes="(min-width: 768px) 384px, 90vw"
                  className="object-cover"
                />
              </div>
              <Caption className="absolute -right-3 -top-3 rotate-6 bg-[#ffe27a]">Special this fall!</Caption>
            </div>
            <div>
              <p className="font-script text-3xl text-[#ffd3e6]">my solo show</p>
              <h2 className="font-display text-8xl font-black italic leading-none">EPIC</h2>
              <p className="font-display mt-2 text-2xl italic text-white/80">Comedy, Music &amp; Romance</p>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                A hopeless romantic (me) looking for epic romance in a world of casual
                dating. Come find out if running around New York City in a wedding dress
                helped me find my prince charming.
              </p>
              <div className="mt-8 rounded-2xl bg-white/[0.07] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d8b]">EPIC&apos;s dating profile</p>
                <dl className="mt-4 space-y-3 text-[15px]">
                  {[
                    ["Looking for", "Prince charming, or a solid audience"],
                    ["Seen at", "New York Comedy Festival, Knockouts Comedy Festival"],
                    ["Dealbreaker", "“Let’s keep it casual” 🚩"],
                  ].map(([term, detail]) => (
                    <div key={term} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                      <dt className="w-28 shrink-0 font-semibold text-white">{term}</dt>
                      <dd className="text-white/75">{detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* PRESS */}
        <section id="press" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <SectionTitle kicker="they're talking" title="Press" />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {PRESS.map((item) => (
                <article key={item.outlet} className={`relative rounded-[2rem] ${item.bg} p-8 pb-12`}>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#111]/60">{item.outlet}</p>
                  <h3 className="font-display mt-3 text-2xl font-bold leading-snug">“{item.headline}”</h3>
                  <Caption className="absolute -bottom-4 right-8 rotate-2 text-base">{item.note}</Caption>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER as a DM */}
        <section id="newsletter" className="scroll-mt-16 bg-[#ffd3e6]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
            <div>
              <p className="font-script text-3xl text-[#d91f4f]">before you go…</p>
              <h2 className="font-display mt-1 text-5xl font-black italic leading-tight md:text-6xl">
                Can I get your email?
              </h2>
              <p className="mt-4 text-lg text-[#111]/75">
                Join <strong className="text-[#111]">The Hopeless Romantic Report</strong>: show
                dates, new specials, and updates from the dating trenches.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-30px_rgba(217,31,79,0.45)]">
              <div className="flex items-center gap-3 border-b border-[#111]/10 p-4">
                <Ringed className="size-11">
                  <Image src="/tess-red-dress.jpg" alt="" fill sizes="128px" className="object-cover object-[50%_28%] scale-[2.2] origin-[50%_32%]" />
                </Ringed>
                <div>
                  <p className="text-sm font-semibold">Tess Tregellas</p>
                  <p className="text-xs text-[#111]/50">Usually replies with a newsletter</p>
                </div>
              </div>
              <div className="space-y-2 p-4">
                {[
                  "hey 👋",
                  "Tickets go to the list first.",
                  "Don’t make it weird. Just subscribe. I promise I’ll text back 💌",
                ].map((msg) => (
                  <p key={msg} className="w-fit max-w-[85%] rounded-3xl bg-[#111]/[0.06] px-4 py-2.5 text-[15px] leading-snug">
                    {msg}
                  </p>
                ))}
              </div>
              <div className="p-3 pt-1">
                <SignupForm
                  placement="footer"
                  cta="Send"
                  placeholder="Your email…"
                  rowClass="flex items-center gap-2 rounded-full border border-[#111]/15 py-1 pl-4 pr-1"
                  inputClass="bg-transparent py-2 text-[15px]"
                  buttonClass="rounded-full bg-[#ff3d8b] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#d91f4f]"
                  successClass="ml-auto w-fit max-w-[85%] rounded-3xl bg-[#ff3d8b] px-4 py-2.5 text-[15px] text-white"
                  errorClass="mt-2 min-h-5 px-4 text-sm text-[#b3184b]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111] text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-10 text-sm md:flex-row">
          <p className="font-display flex items-center gap-1.5 text-xl font-black italic text-white">
            Tess Tregellas <Heart className="size-4 text-[#ff3d8b]" />
          </p>
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.label];
              return (
                <a key={s.label} href={s.href} aria-label={s.label} className="hover:text-white">
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
          <p className="text-center">
            Booking:{" "}
            <a href={`mailto:${BOOKING_EMAIL}`} className="underline hover:text-white">
              {BOOKING_EMAIL}
            </a>{" "}
            ·{" "}
            <a href="mailto:agold@agi-entertainment.com" className="underline hover:text-white">
              agold@agi-entertainment.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
