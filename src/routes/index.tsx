import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { pt as c } from "@/content/pt";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZENTRIX Technologies — The Center of Digital Solutions" },
      { name: "description", content: "Web Development, App Development, Software à medida e IT Support em Angola. A ZENTRIX é o centro das suas soluções digitais." },
      { property: "og:title", content: "ZENTRIX Technologies — The Center of Digital Solutions" },
      { property: "og:description", content: "Websites, aplicações, software à medida e suporte técnico — tecnologia que resolve." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 10h14L9 22h14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
      <circle cx="16" cy="16" r="1.8" className="fill-primary" />
    </svg>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-50 border-b transition-colors ${scrolled || open ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="ZENTRIX — início">
          <Mark className="h-7 w-7 text-foreground" />
          <span className="font-display text-lg font-semibold tracking-[0.18em]">ZENTRIX</span>
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {c.nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="text-muted-foreground transition-colors hover:text-foreground">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <a href="#contacto" className="hidden border border-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block">{c.cta}</a>
        <button type="button" className="p-2 md:hidden" aria-expanded={open} aria-controls="mnav" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`mt-1.5 block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav id="mnav" aria-label="Menu móvel" className="border-t border-border md:hidden">
          <ul className="px-5 py-4">
            {c.nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 font-display text-xl">{n.label}</a></li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full text-primary">
        <g className="origin-center animate-spin-slow" style={{ transformBox: "fill-box" }}>
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeOpacity=".25" strokeDasharray="2 8" />
        </g>
        <g className="origin-center animate-spin-rev" style={{ transformBox: "fill-box" }}>
          <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeOpacity=".4" strokeDasharray="60 20 4 20" />
        </g>
        <circle cx="200" cy="200" r="96" fill="none" stroke="currentColor" strokeOpacity=".15" />
        {[0, 90, 180, 270].map((a) => (
          <line key={a} x1="200" y1="200" x2={200 + 180 * Math.cos((a * Math.PI) / 180)} y2={200 + 180 * Math.sin((a * Math.PI) / 180)} stroke="currentColor" strokeOpacity=".2" />
        ))}
        <rect x="150" y="150" width="100" height="100" fill="var(--background)" stroke="var(--foreground)" strokeWidth="2" />
        <path d="M172 174h56l-56 52h56" fill="none" stroke="var(--foreground)" strokeWidth="6" strokeLinecap="square" />
        <circle cx="200" cy="200" r="6" fill="currentColor" className="animate-pulse-dot" />
      </svg>
      {c.hero.tags.map((t, i) => {
        const pos = ["left-1/2 top-0 -translate-x-1/2", "right-0 top-1/2 -translate-y-1/2", "bottom-0 left-1/2 -translate-x-1/2", "left-0 top-1/2 -translate-y-1/2"][i];
        return <span key={t} className={`absolute ${pos} border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground`}>{t}</span>;
      })}
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-16 md:px-8 md:pt-24 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="eyebrow flex items-center gap-3"><span className="h-1.5 w-1.5 bg-primary animate-pulse-dot" />{c.hero.eyebrow}</p>
          <h1 className="mt-6 font-display text-[clamp(2.4rem,6.5vw,5.2rem)] font-semibold leading-[1.02] tracking-tight">
            {c.hero.title[0]}<br />{c.hero.title[1]}<br /><span className="text-primary">{c.hero.title[2]}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.hero.lead}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contacto" className="group inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-shadow hover:glow-primary">
              {c.hero.primary}<span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </a>
            <a href="#servicos" className="inline-flex items-center border border-border px-6 py-3.5 font-medium transition-colors hover:border-foreground">{c.hero.secondary}</a>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="relative border-y border-border">
        <p className="mx-auto max-w-7xl px-5 py-4 text-center font-mono text-[11px] tracking-[0.4em] text-muted-foreground md:px-8">{c.footer.line}</p>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="reveal max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-[clamp(1.8rem,3.8vw,3rem)] font-semibold leading-tight tracking-tight">{title}</h2>
    </div>
  );
}

function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead {...c.services} />
      <ul className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
        {c.services.items.map((s, i) => (
          <li key={s.code} className="reveal group relative bg-background p-8 transition-colors hover:bg-surface md:p-10" style={{ transitionDelay: `${i * 60}ms` }}>
            <span className="absolute left-0 top-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs tracking-widest text-primary">{String(i + 1).padStart(2, "0")} / {s.code}</span>
              <span className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden>↗</span>
            </div>
            <h3 className="mt-10 font-display text-2xl font-semibold">{s.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{s.desc}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {s.points.map((p) => <li key={p} className="border border-border px-3 py-1 text-xs text-muted-foreground">{p}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2">
        <div>
          <SectionHead {...c.about} />
          <div className="reveal mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            {c.about.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <dl className="self-end">
          {c.about.values.map((v, i) => (
            <div key={v.k} className="reveal grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-7 last:border-b">
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <div>
                <dt className="font-display text-xl font-semibold uppercase tracking-wider">{v.k}</dt>
                <dd className="mt-2 text-muted-foreground">{v.v}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead {...c.process} />
      <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {c.process.steps.map((s, i) => (
          <li key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-primary font-mono text-sm text-primary">{s.n}</span>
              <span className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold">{s.t}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

type Errors = Partial<Record<"name" | "email" | "service" | "message", string>>;

function Contact() {
  const f = c.contact;
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const g = (k: string) => String(d.get(k) ?? "").trim();
    const v = { name: g("name"), email: g("email"), service: g("service"), message: g("message") };
    const er: Errors = {};
    if (v.name.length < 2 || v.name.length > 100) er.name = f.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email) || v.email.length > 255) er.email = f.errors.email;
    if (!v.service) er.service = f.errors.service;
    if (v.message.length < 10 || v.message.length > 2000) er.message = f.errors.message;
    setErrors(er);
    if (Object.keys(er).length) {
      (e.currentTarget.querySelector(`[name="${Object.keys(er)[0]}"]`) as HTMLElement | null)?.focus();
      return;
    }
    // Integration point: send `v` to a real endpoint here.
    setDone(true);
  }

  const field = "mt-2 w-full border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none aria-[invalid=true]:border-destructive";
  const Err = ({ k }: { k: keyof Errors }) => errors[k] ? <p id={`${k}-err`} className="mt-2 text-sm text-destructive">{errors[k]}</p> : null;

  return (
    <section id="contacto" className="relative overflow-hidden border-t border-border">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHead eyebrow={f.eyebrow} title={f.title} />
          <p className="reveal mt-6 max-w-md text-lg text-muted-foreground">{f.lead}</p>
          <p className="reveal mt-10 inline-flex items-center gap-2 border border-border px-3 py-2 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 bg-primary" />{f.demo}
          </p>
        </div>
        <div className="reveal border border-border bg-card p-6 md:p-10">
          {done ? (
            <div role="status" className="py-10">
              <span className="grid h-12 w-12 place-items-center border border-success text-success" aria-hidden>✓</span>
              <p className="mt-6 text-lg leading-relaxed">{f.success}</p>
              <button type="button" onClick={() => setDone(false)} className="mt-8 border border-border px-5 py-3 text-sm hover:border-foreground">{f.again}</button>
            </div>
          ) : (
            <form noValidate onSubmit={submit} className="grid gap-6" aria-describedby="demo-note">
              <span id="demo-note" className="sr-only">{f.demo}</span>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">{f.fields.name}</label>
                  <input id="name" name="name" autoComplete="name" maxLength={100} className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
                  <Err k="name" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">{f.fields.email}</label>
                  <input id="email" name="email" type="email" autoComplete="email" maxLength={255} className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
                  <Err k="email" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="text-sm font-medium">{f.fields.service}</label>
                <select id="service" name="service" defaultValue="" className={field} aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-err" : undefined}>
                  <option value="" disabled>{f.fields.choose}</option>
                  {c.services.items.map((s) => <option key={s.code} value={s.title}>{s.title}</option>)}
                  <option value="other">{f.fields.other}</option>
                </select>
                <Err k="service" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">{f.fields.message}</label>
                <textarea id="message" name="message" rows={5} maxLength={2000} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
                <Err k="message" />
              </div>
              <button type="submit" className="group inline-flex items-center justify-center gap-3 bg-primary px-6 py-4 font-medium text-primary-foreground transition-shadow hover:glow-primary">
                {f.submit}<span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const f = c.footer;
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] md:px-8">
        <div>
          <div className="flex items-center gap-2.5"><Mark className="h-8 w-8" /><span className="font-display text-xl font-semibold tracking-[0.18em]">ZENTRIX</span></div>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">Technology & Digital Solutions</p>
          <p className="mt-6 font-display text-primary">{f.tagline}</p>
        </div>
        <nav aria-label="Rodapé">
          <h2 className="eyebrow">{f.nav}</h2>
          <ul className="mt-4 space-y-2 text-sm">{c.nav.map((n) => <li key={n.id}><a href={`#${n.id}`} className="text-muted-foreground hover:text-foreground">{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <h2 className="eyebrow">{f.services}</h2>
          <ul className="mt-4 space-y-2 text-sm">{c.services.items.map((s) => <li key={s.code}><a href="#servicos" className="text-muted-foreground hover:text-foreground">{s.title}</a></li>)}</ul>
        </div>
        <div>
          <h2 className="eyebrow">{f.contact}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.contactNote}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-5 py-6 font-mono text-[11px] tracking-widest text-muted-foreground md:px-8">
          <span>© {new Date().getFullYear()} ZENTRIX Technologies. {f.rights}</span>
          <span>{f.line}</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Saltar para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
