import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "../heart";

export const metadata: Metadata = {
  title: "Design | Tess Tregellas",
  robots: { index: false, follow: false },
};

const COLORS = [
  {
    name: "Hot pink",
    token: "hotpink",
    hex: "#FF3D8B",
    swatch: "bg-hotpink",
    text: "text-white",
    usage: "Primary accent. Buttons, name headline, marquee, closing CTA.",
  },
  {
    name: "Cherry",
    token: "cherry",
    hex: "#D91F4F",
    swatch: "bg-cherry",
    text: "text-white",
    usage: "Secondary accent. EPIC section, eyebrow labels, stickers.",
  },
  {
    name: "Bubblegum",
    token: "bubblegum",
    hex: "#FFD3E6",
    swatch: "bg-bubblegum",
    text: "text-ink",
    usage: "Soft section backgrounds. Hero, Watch.",
  },
  {
    name: "Cream",
    token: "cream",
    hex: "#FFF4EC",
    swatch: "bg-cream",
    text: "text-ink",
    usage: "Page background and cards.",
  },
  {
    name: "Butter",
    token: "butter",
    hex: "#FFE27A",
    swatch: "bg-butter",
    text: "text-ink",
    usage: "Small pops. Stickers, Book me button, marquee hearts.",
  },
  {
    name: "Ink",
    token: "ink",
    hex: "#3B0A1E",
    swatch: "bg-ink",
    text: "text-white",
    usage: "Text, borders, offset shadows, footer.",
  },
  {
    name: "White",
    token: "white",
    hex: "#FFFFFF",
    swatch: "bg-white",
    text: "text-ink",
    usage: "Card fills, text on pink.",
  },
];

const PAIRS: { fg: string; bg: string }[] = [
  { fg: "#3B0A1E", bg: "#FFF4EC" },
  { fg: "#3B0A1E", bg: "#FFD3E6" },
  { fg: "#3B0A1E", bg: "#FFE27A" },
  { fg: "#FFFFFF", bg: "#D91F4F" },
  { fg: "#FFFFFF", bg: "#FF3D8B" },
  { fg: "#FF3D8B", bg: "#FFF4EC" },
  { fg: "#FFD3E6", bg: "#3B0A1E" },
];

const TYPE_SCALE = [
  {
    label: "Display / Hero",
    spec: "Fraunces Black Italic · 72–152px fluid · leading 0.8 · 5px ink shadow",
    className:
      "font-display text-8xl font-black italic leading-[0.8] text-hotpink [text-shadow:5px_5px_0_var(--color-ink)]",
    sample: "Tess",
  },
  {
    label: "H2 / Section",
    spec: "Fraunces Black · 60px",
    className: "font-display text-6xl font-black",
    sample: "They're talking",
  },
  {
    label: "H3 / Card title",
    spec: "Fraunces Bold · 24px",
    className: "font-display text-2xl font-bold",
    sample: "Last First Goodbye",
  },
  {
    label: "Script / Aside",
    spec: "Caveat Regular · 30px · cherry",
    className: "font-script text-3xl text-cherry",
    sample: "he was not at the finish line",
  },
  {
    label: "Eyebrow",
    spec: "Inter Black · 12px · uppercase · tracking-widest",
    className: "text-xs font-black uppercase tracking-widest text-cherry",
    sample: "Betches Originals",
  },
  {
    label: "Body",
    spec: "Inter Regular · 18px · leading-relaxed",
    className: "text-lg leading-relaxed",
    sample:
      "A hopeless romantic (me) looking for epic romance in a world of casual dating.",
  },
];

const FONTS = [
  {
    name: "Fraunces",
    role: "Display and headings",
    className: "font-display",
    weights: "Variable 100–900, italic, SOFT 100 + WONK 1",
    emailStack: "'Fraunces', Georgia, 'Times New Roman', serif",
  },
  {
    name: "Caveat",
    role: "Handwritten asides",
    className: "font-script",
    weights: "Variable 400–700",
    emailStack: "Use an image, or drop it in email",
  },
  {
    name: "Inter",
    role: "Body and UI",
    className: "font-sans",
    weights: "Variable 100–900",
    emailStack: "'Inter', Helvetica, Arial, sans-serif",
  },
];

const MUTED_INK = "#6B3A4C";

const BEEHIIV_SETTINGS: {
  group: string;
  path: string;
  rows: { field: string; value: string; hex?: string }[];
}[] = [
  {
    group: "Colors",
    path: "Style → Basic → Colors",
    rows: [
      { field: "Outside Background", value: "Bubblegum", hex: "#FFD3E6" },
      { field: "Post Background", value: "Cream", hex: "#FFF4EC" },
      { field: "Text on Background", value: "Ink", hex: "#3B0A1E" },
      { field: "Primary", value: "Ink (footer, byline, table cells)", hex: "#3B0A1E" },
      { field: "Text on Primary", value: "Bubblegum", hex: "#FFD3E6" },
      { field: "Secondary", value: "Ink (borders, dividers)", hex: "#3B0A1E" },
      { field: "Links", value: "Cherry", hex: "#D91F4F" },
    ],
  },
  {
    group: "Typography",
    path: "Style → Basic → Typography",
    rows: [
      { field: "Heading font family", value: "Georgia" },
      { field: "Heading font weight", value: "Bold" },
      { field: "Paragraph font family", value: "Helvetica" },
      { field: "Paragraph font weight", value: "Regular" },
    ],
  },
  {
    group: "Spacing and borders",
    path: "Style → Basic → Spacing / Borders",
    rows: [
      { field: "Margin", value: "24px" },
      { field: "Padding", value: "32px" },
      { field: "Corner radius", value: "24px" },
      { field: "Border thickness", value: "2px (uses Secondary, ink)" },
    ],
  },
  {
    group: "Email header",
    path: "Style → Advanced → Email Header",
    rows: [
      { field: "Title", value: "Georgia · Bold · 40px · center", hex: "#FF3D8B" },
      { field: "Subtitle", value: "Helvetica · Regular · 17px · center", hex: MUTED_INK },
      { field: "Byline font", value: "Helvetica · Bold · 13px", hex: "#D91F4F" },
      { field: "Image", value: "1200 × 630px branded header" },
      { field: "Alignment", value: "Center" },
    ],
  },
  {
    group: "Body",
    path: "Style → Advanced → Body",
    rows: [
      { field: "Text", value: "Helvetica · 17px · line height 1.6", hex: "#3B0A1E" },
      { field: "H1", value: "Georgia · Bold · 34px · line height 1.1", hex: "#3B0A1E" },
      { field: "H2", value: "Georgia · Bold · 26px · line height 1.2", hex: "#FF3D8B" },
      { field: "H3", value: "Helvetica · Bold · 13px · uppercase label", hex: "#D91F4F" },
    ],
  },
  {
    group: "Widgets",
    path: "Style → Advanced → Widgets",
    rows: [
      { field: "Buttons: font", value: "Helvetica · Bold · 19px" },
      { field: "Buttons: background", value: "Hot pink", hex: "#FF3D8B" },
      { field: "Buttons: text", value: "White", hex: "#FFFFFF" },
      { field: "Buttons: border", value: "2px ink", hex: "#3B0A1E" },
      { field: "Buttons: radius / padding", value: "50px · 14px 28px" },
      { field: "Links", value: "Bold, underlined", hex: "#D91F4F" },
      { field: "Breaks", value: "Dashed · 2px · 40% width", hex: "#FF3D8B" },
      { field: "Quotes", value: "Georgia italic 22px on bubblegum · 2px ink border · 24px radius", hex: "#FFD3E6" },
      { field: "Image captions", value: "Helvetica · italic · 14px", hex: MUTED_INK },
    ],
  },
  {
    group: "Email footer",
    path: "Style → Advanced → Email Footer",
    rows: [
      { field: "Background", value: "Ink", hex: "#3B0A1E" },
      { field: "Text", value: "Helvetica", hex: "#FFD3E6" },
      { field: "Border", value: "0px (none)" },
      { field: "Socials: icon / background", value: "Ink on bubblegum", hex: "#FFD3E6" },
      { field: "Links", value: "Underlined", hex: "#FFFFFF" },
      { field: "Alignment", value: "Center" },
    ],
  },
];

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function rating(ratio: number) {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return "AA large only";
  return "Fail";
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-script text-3xl text-cherry">{eyebrow}</p>
      <h2 className="font-display text-5xl font-black italic">{title}</h2>
    </div>
  );
}

export default function DesignPage() {
  return (
    <main className="flex-1 bg-cream">
      <header className="border-b-2 border-ink bg-bubblegum">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Link href="/" className="text-sm font-bold hover:text-hotpink">
            ← Back to site
          </Link>
          <h1 className="font-display mt-4 flex items-center gap-3 text-7xl font-black italic text-hotpink [text-shadow:4px_4px_0_var(--color-ink)]">
            Design <Heart className="size-12 text-cherry" />
          </h1>
          <p className="mt-4 max-w-xl text-lg">
            Colors, type, and UI pieces for tesstregellas.com. Use this as the
            source of truth for email templates and social graphics.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-24 px-6 py-20">
        <section>
          <SectionTitle eyebrow="the palette" title="Colors" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COLORS.map((color) => (
              <div
                key={color.token}
                className="overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-pop"
              >
                <div
                  className={`${color.swatch} ${color.text} flex h-36 items-end border-b-2 border-ink p-4`}
                >
                  <span className="font-display text-2xl font-black italic">
                    {color.name}
                  </span>
                </div>
                <div className="space-y-1 p-4">
                  <p className="font-mono text-lg font-bold select-all">{color.hex}</p>
                  <p className="font-mono text-xs text-ink/60">
                    --color-{color.token}
                  </p>
                  <p className="pt-2 text-sm text-ink/80">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="can you read it?" title="Contrast" />
          <p className="-mt-4 mb-8 max-w-2xl text-ink/75">
            WCAG ratios for the pairings the site uses. AA needs 4.5:1 for body
            text and 3:1 for large text (24px+, or 19px+ bold).
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PAIRS.map(({ fg, bg }) => {
              const ratio = contrast(fg, bg);
              const grade = rating(ratio);
              return (
                <div
                  key={`${fg}-${bg}`}
                  className="flex items-center justify-between gap-4 rounded-2xl border-2 border-ink p-5 shadow-pop-sm"
                  style={{ backgroundColor: bg, color: fg }}
                >
                  <div>
                    <p className="font-display text-2xl font-black italic">Aa</p>
                    <p className="font-mono text-xs opacity-80">
                      {fg} on {bg}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xl font-bold">
                      {ratio.toFixed(2)}:1
                    </p>
                    <p className="text-xs font-black uppercase tracking-widest">
                      {grade}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="the fonts" title="Typefaces" />
          <div className="grid gap-6 md:grid-cols-3">
            {FONTS.map((font) => (
              <div
                key={font.name}
                className="rounded-3xl border-2 border-ink bg-white p-6 shadow-pop"
              >
                <p className={`${font.className} text-6xl`}>Aa</p>
                <h3 className="font-display mt-4 text-2xl font-bold">{font.name}</h3>
                <p className="text-sm text-ink/70">{font.role}</p>
                <p className="mt-3 text-sm">{font.weights}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-widest text-cherry">
                  Email fallback
                </p>
                <p className="font-mono text-xs select-all">{font.emailStack}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="sizes and styles" title="Type scale" />
          <div className="divide-y-2 divide-ink/10 rounded-3xl border-2 border-ink bg-white shadow-pop">
            {TYPE_SCALE.map((style) => (
              <div
                key={style.label}
                className="grid gap-4 p-6 md:grid-cols-[220px_1fr] md:items-center"
              >
                <div>
                  <p className="font-bold">{style.label}</p>
                  <p className="font-mono text-xs text-ink/60">{style.spec}</p>
                </div>
                <p className={`${style.className} overflow-hidden`}>{style.sample}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="for the newsletter" title="Beehiiv email settings" />
          <div className="-mt-4 mb-8 max-w-3xl space-y-3 text-ink/75">
            <p>
              Enter these in the template&apos;s Style panel. In the Visual
              Editor, click an element to open its settings on the right.
            </p>
            <p>
              Email can&apos;t load the site fonts, so Georgia (headings) and
              Helvetica (body) stand in for Fraunces and Inter. Italicize
              headline words in the editor for the Fraunces feel. Buttons use
              19px bold so white on hot pink passes contrast as large text.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {BEEHIIV_SETTINGS.map((group) => (
              <div
                key={group.group}
                className="rounded-3xl border-2 border-ink bg-white p-6 shadow-pop"
              >
                <h3 className="font-display text-2xl font-bold">{group.group}</h3>
                <p className="font-mono text-xs text-ink/60">{group.path}</p>
                <dl className="mt-4 divide-y divide-ink/10">
                  {group.rows.map((row) => (
                    <div
                      key={row.field}
                      className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-4 py-2 text-sm"
                    >
                      <dt className="font-bold">{row.field}</dt>
                      <dd className="flex items-start gap-2">
                        {row.hex && (
                          <span
                            className="mt-0.5 size-4 shrink-0 rounded-full border border-ink"
                            style={{ backgroundColor: row.hex }}
                          />
                        )}
                        <span>
                          {row.value}
                          {row.hex && (
                            <span className="ml-1 font-mono text-ink/60 select-all">
                              {row.hex}
                            </span>
                          )}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="the fun stuff" title="Components" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-ink bg-bubblegum p-8 shadow-pop">
              <p className="mb-5 text-xs font-black uppercase tracking-widest text-cherry">
                Buttons
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="rounded-full border-2 border-ink bg-hotpink px-7 py-3 font-bold text-white shadow-pop-sm">
                  Slide in
                </span>
                <span className="rounded-full border-2 border-ink bg-butter px-5 py-2 text-sm font-bold shadow-pop-sm">
                  Book me
                </span>
                <span className="rounded-full border-2 border-ink bg-white px-5 py-2 font-bold shadow-pop-sm">
                  More on YouTube →
                </span>
              </div>
              <p className="mt-6 text-sm text-ink/70">
                Pill, 2px ink border, 3px offset ink shadow. On hover: lift and
                tilt -2°.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-ink bg-cream p-8 shadow-pop">
              <p className="mb-5 text-xs font-black uppercase tracking-widest text-cherry">
                Stickers and badges
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <span className="rotate-12 rounded-full border-2 border-ink bg-butter px-3 py-1 text-xs font-black uppercase shadow-pop-sm">
                  Free! No strings!
                </span>
                <span className="font-display flex size-24 -rotate-12 items-center justify-center rounded-full border-2 border-ink bg-cherry text-center text-lg font-black italic leading-none text-white shadow-pop">
                  Just
                  <br />
                  Hopeful
                </span>
                <span className="-rotate-1 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                  Comedian · Creator
                </span>
              </div>
              <p className="mt-6 text-sm text-ink/70">
                Always slightly rotated (1–12°). Never perfectly straight.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-ink bg-white p-8 shadow-pop">
              <p className="mb-5 text-xs font-black uppercase tracking-widest text-cherry">
                Shadows and borders
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex size-24 items-center justify-center rounded-2xl border-2 border-ink bg-cream text-xs font-bold shadow-pop">
                  pop · 5px
                </div>
                <div className="flex size-24 items-center justify-center rounded-2xl border-2 border-ink bg-cream text-xs font-bold shadow-pop-sm">
                  pop-sm · 3px
                </div>
              </div>
              <p className="mt-6 text-sm text-ink/70">
                Hard offset shadows in ink, no blur. Radius: 24px cards, full
                pills for buttons.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-ink bg-hotpink p-8 text-white shadow-pop">
              <p className="mb-5 text-xs font-black uppercase tracking-widest text-butter">
                Motifs
              </p>
              <div className="flex items-center gap-4">
                <Heart className="size-10 text-butter" />
                <Heart className="size-8 rotate-12 text-white" />
                <Heart className="size-12 -rotate-12 text-cherry" />
                <span className="font-display text-3xl font-black italic [text-shadow:3px_3px_0_var(--color-ink)]">
                  EPIC
                </span>
              </div>
              <p className="mt-6 text-sm text-white/90">
                Hearts, polaroids with tape, hand-drawn underlines, and an ink
                text shadow on big italic headlines.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
