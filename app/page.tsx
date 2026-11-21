import Image from "next/image";
import { SignupForm } from "./signup-form";

const BOOKING_EMAIL = "tess@select.co";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/tesstreg/" },
  { label: "TikTok", href: "https://www.tiktok.com/@tesstregellas" },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC50PpbE-fxYIG5WtHnBDvmA",
  },
];

const MARQUEE = [
  "Hopeless romantic",
  "EPIC: the solo show",
  "Comedy special this fall",
  "Weekly at Stand Up Magic",
  "Betches Originals",
  "Ran a half marathon in a wedding dress",
];

const PRESS = [
  {
    outlet: "The New York Times",
    headline: "What to Do in New York City in February",
    note: "they put me in the paper!!",
    tilt: "-rotate-2",
  },
  {
    outlet: "New York Post",
    headline:
      "NYC singleton runs Brooklyn Half Marathon in a wedding dress while on the hunt for a husband: ‘He might be at the finish line!’",
    note: "he was not at the finish line",
    tilt: "rotate-1",
  },
];

const VIDEOS = [
  {
    id: "LzeTa8El9hE",
    title: "SISTERS, Ep. 1: “The Move-In”",
    tag: "Betches Originals",
    tilt: "-rotate-2",
  },
  { id: "27OpFNplhCc", title: "10 Minute Set", tag: "Stand-up", tilt: "rotate-2" },
  { id: "8JiNTywF5Fk", title: "Marry-thon", tag: "Short", tilt: "rotate-1" },
  { id: "BlPAxX6n5vI", title: "Last First Goodbye", tag: "Short", tilt: "-rotate-1" },
];

const NAV = [
  { label: "EPIC", href: "#epic" },
  { label: "About", href: "#about" },
  { label: "Press", href: "#press" },
  { label: "Watch", href: "#watch" },
];

function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 21s-7.5-4.6-10-9.3C.3 8.4 2.1 4 6.2 4c2.4 0 4 1.4 5.8 3.6C13.8 5.4 15.4 4 17.8 4 21.9 4 23.7 8.4 22 11.7 19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-hotpink py-3 text-white">
      <div className="flex w-max animate-marquee gap-8">
        {items.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= MARQUEE.length}
            className="font-display flex items-center gap-8 text-2xl italic whitespace-nowrap"
          >
            {item}
            <Heart className="size-5 text-butter" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b-2 border-ink bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
          <a href="#" className="font-display flex items-center gap-1.5 text-2xl font-black italic">
            Tess
            <Heart className="size-4 text-hotpink" />
          </a>
          <nav className="hidden items-center gap-7 font-semibold md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-hotpink">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${BOOKING_EMAIL}`}
            className="rounded-full border-2 border-ink bg-butter px-5 py-2 text-sm font-bold shadow-pop-sm transition hover:-translate-y-0.5 hover:rotate-2"
          >
            Book me
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-bubblegum">
          <Heart className="absolute left-[6%] top-16 hidden size-10 md:block rotate-[-15deg] animate-float text-hotpink/70" />
          <Heart className="absolute right-[45%] top-10 size-6 rotate-12 animate-float text-cherry/60 [animation-delay:1s]" />
          <Heart className="absolute bottom-20 left-[40%] size-8 rotate-6 animate-float text-white [animation-delay:2s]" />
          <Heart className="absolute bottom-10 right-[4%] size-14 rotate-[20deg] animate-float text-hotpink/60 [animation-delay:3s]" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-12 md:grid-cols-[1.2fr_1fr] md:pt-16">
            <div>
              <p className="font-script text-3xl text-cherry">hi, I&apos;m</p>
              <h1 className="font-display text-[clamp(4.5rem,12vw,9.5rem)] font-black italic leading-[0.8] tracking-tight text-hotpink [text-shadow:5px_5px_0_var(--color-ink)]">
                Tess
                <br />
                Tregellas
              </h1>
              <p className="mt-6 inline-block -rotate-1 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                Comedian · Creator · Hopeless Romantic
              </p>

              <div className="relative mt-10 max-w-lg rotate-[-0.5deg] rounded-3xl border-2 border-ink bg-cream p-6 shadow-pop">
                <span className="absolute -right-4 -top-5 rotate-12 rounded-full border-2 border-ink bg-butter px-3 py-1 text-xs font-black uppercase shadow-pop-sm">
                  Free! No strings!
                </span>
                <h2 className="font-display text-3xl font-black italic leading-tight">
                  Slide into my inbox
                </h2>
                <p className="mt-2 text-ink/75">
                  Join <strong>The Hopeless Romantic Report</strong>: show
                  dates, new specials, and updates from the dating trenches. I
                  promise I&apos;ll text back.
                </p>
                <div className="mt-5">
                  <SignupForm placement="hero" />
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="rotate-3 border-2 border-ink bg-white p-3 pb-14 shadow-pop transition duration-300 hover:rotate-0">
                <span className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-3 bg-butter/80" />
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/tess-red-dress.jpg"
                    alt="Tess Tregellas in a red dress on a New York City street"
                    fill
                    priority
                    sizes="(min-width: 768px) 384px, 90vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="font-script absolute inset-x-0 bottom-3 text-center text-2xl">
                  waiting for you to text back
                </p>
              </div>
              <div className="font-display absolute -left-3 -top-8 flex size-28 -rotate-12 md:-left-10 items-center justify-center rounded-full border-2 border-ink bg-cherry text-center text-xl font-black italic leading-none text-white shadow-pop">
                Just
                <br />
                Hopeful
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        <section id="about" className="scroll-mt-16 bg-cream">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <p className="font-script text-3xl text-cherry">a little about me</p>
            <h2 className="font-display mt-2 text-5xl font-black leading-[1.05] md:text-6xl">
              A <span className="italic text-hotpink">hopeless romantic</span>{" "}
              in a world of{" "}
              <span className="relative inline-block">
                casual dating
                <svg
                  viewBox="0 0 200 12"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-hotpink"
                >
                  <path
                    d="M2 8 C 40 2, 80 12, 120 6 S 180 2, 198 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h2>
            <div className="mx-auto mt-10 grid max-w-3xl gap-6 text-left text-lg leading-relaxed md:grid-cols-2">
              <p className="-rotate-1 rounded-3xl border-2 border-ink bg-white p-6 shadow-pop">
                I&apos;m a stand-up comedian and content creator in New York
                City. I perform weekly at <strong>Stand Up Magic</strong> and
                just wrapped a nationwide tour with the show.
              </p>
              <p className="rotate-1 rounded-3xl border-2 border-ink bg-bubblegum p-6 shadow-pop">
                By day I&apos;m a Senior Video Producer at{" "}
                <strong>Betches Media</strong>, writing, directing, and starring
                in viral sketches. By night I&apos;m running marathons in a
                wedding dress. For research.
              </p>
            </div>
          </div>
        </section>

        <section id="epic" className="scroll-mt-16 border-y-2 border-ink bg-cherry text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[2/3] -rotate-3 overflow-hidden border-2 border-ink shadow-pop transition duration-300 hover:rotate-0">
                <Image
                  src="/epic-poster.jpg"
                  alt="EPIC: Comedy, Music & Romance poster"
                  fill
                  sizes="(min-width: 768px) 384px, 90vw"
                  className="object-cover"
                />
              </div>
              <span className="absolute -right-6 -top-6 rotate-12 rounded-full border-2 border-ink bg-butter px-4 py-2 text-sm font-black uppercase text-ink shadow-pop-sm">
                Special this fall!
              </span>
            </div>

            <div>
              <p className="font-script text-3xl text-butter">my solo show</p>
              <h2 className="font-display text-8xl font-black italic leading-none [text-shadow:5px_5px_0_var(--color-ink)] md:text-9xl">
                EPIC
              </h2>
              <p className="font-display mt-3 text-2xl italic text-bubblegum">
                Comedy, Music &amp; Romance
              </p>
              <p className="mt-6 text-lg leading-relaxed text-white/90">
                A hopeless romantic (me) looking for epic romance in a world of
                casual dating. Come find out if running around New York City in
                a wedding dress helped me find my prince charming.
              </p>

              <dl className="mt-8 rotate-1 rounded-3xl border-2 border-ink bg-cream p-6 text-ink shadow-pop">
                <p className="mb-3 text-xs font-black uppercase tracking-widest text-hotpink">
                  EPIC&apos;s dating profile
                </p>
                <div className="grid gap-2">
                  <div className="flex gap-2">
                    <dt className="font-bold">Looking for:</dt>
                    <dd>Prince charming, or a solid audience</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-bold">Seen at:</dt>
                    <dd>New York Comedy Festival, Knockouts Comedy Festival</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-bold">Dealbreaker:</dt>
                    <dd>&ldquo;Let&apos;s keep it casual&rdquo;</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="press" className="scroll-mt-16 bg-cream">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="font-display text-center text-5xl font-black md:text-6xl">
              They&apos;re <span className="italic text-hotpink">talking</span> about me
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-2">
              {PRESS.map((item) => (
                <article
                  key={item.outlet}
                  className={`${item.tilt} relative rounded-3xl border-2 border-ink bg-white p-8 shadow-pop transition hover:rotate-0`}
                >
                  <p className="text-xs font-black uppercase tracking-widest text-cherry">
                    {item.outlet}
                  </p>
                  <h3 className="font-display mt-3 text-2xl font-bold leading-snug">
                    “{item.headline}”
                  </h3>
                  <p className="font-script mt-4 text-2xl text-hotpink">
                    ↳ {item.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="watch" className="scroll-mt-16 border-t-2 border-ink bg-bubblegum">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-script text-3xl text-cherry">go on, stare</p>
                <h2 className="font-display text-5xl font-black italic md:text-6xl">
                  Watch me
                </h2>
              </div>
              <a
                href={SOCIALS[2].href}
                className="rounded-full border-2 border-ink bg-white px-5 py-2 font-bold shadow-pop-sm transition hover:-translate-y-0.5"
              >
                More on YouTube →
              </a>
            </div>
            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              {VIDEOS.map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  className={`${video.tilt} group block border-2 border-ink bg-white p-3 pb-5 shadow-pop transition duration-300 hover:rotate-0 hover:-translate-y-1`}
                >
                  <div className="relative aspect-video overflow-hidden bg-ink">
                    <Image
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 right-3">
                      <span className="flex size-14 items-center justify-center rounded-full border-2 border-ink bg-hotpink text-white shadow-pop-sm transition group-hover:scale-110">
                        <Heart className="size-7" />
                      </span>
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-black uppercase tracking-widest text-cherry">
                    {video.tag}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-bold">{video.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t-2 border-ink bg-hotpink text-white">
          <Heart className="absolute -left-6 top-10 size-32 -rotate-12 text-white/15" />
          <Heart className="absolute -right-10 bottom-0 size-48 rotate-12 text-white/15" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
            <p className="font-script text-3xl text-butter">before you go…</p>
            <h2 className="font-display text-5xl font-black italic leading-tight [text-shadow:4px_4px_0_var(--color-ink)] md:text-6xl">
              Can I get your email?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Tickets go to the list first. Don&apos;t make it weird. Just
              subscribe.
            </p>
            <div className="mt-8 w-full max-w-lg rounded-3xl border-2 border-ink bg-cream p-5 text-ink shadow-pop">
              <SignupForm placement="footer" cta="Yes, obviously" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-ink bg-ink text-bubblegum">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm md:flex-row">
          <p className="font-display flex items-center gap-1.5 text-xl font-black italic text-white">
            Tess Tregellas <Heart className="size-4 text-hotpink" />
          </p>
          <div className="flex gap-6 font-semibold">
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.href} className="hover:text-white">
                {social.label}
              </a>
            ))}
          </div>
          <p>
            Booking:{" "}
            <a href={`mailto:${BOOKING_EMAIL}`} className="underline hover:text-white">
              {BOOKING_EMAIL}
            </a>{" "}
            ·{" "}
            <a
              href="mailto:agold@agi-entertainment.com"
              className="underline hover:text-white"
            >
              agold@agi-entertainment.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
