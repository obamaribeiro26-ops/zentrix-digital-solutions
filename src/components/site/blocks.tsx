import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { img } from "@/lib/site-config";

export function useReveal() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }),
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
}

export function Photo({ id, alt, className = "", w = 1200, eager = false }: { id: string; alt: string; className?: string; w?: number; eager?: boolean }) {
  return (
    <img src={img(id, w)} srcSet={`${img(id, Math.round(w / 2))} ${Math.round(w / 2)}w, ${img(id, w)} ${w}w`} sizes="(max-width: 768px) 100vw, 50vw"
      alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" className={`h-full w-full object-cover ${className}`} />
  );
}

export function Crumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link to="/" className="hover:text-foreground">Início</Link></li>
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {it.to ? <Link to={it.to} className="hover:text-foreground">{it.label}</Link> : <span aria-current="page" className="text-foreground">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Full-bleed photographic page hero used by interior pages. */
export function PageHero({ photo, alt, eyebrow, title, lead, crumbs, children }: {
  photo: string; alt: string; eyebrow: string; title: ReactNode; lead: string; crumbs: { label: string; to?: string }[]; children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[86vh] items-end overflow-hidden pt-16">
      <div className="absolute inset-0"><Photo id={photo} alt={alt} w={2000} eager className="animate-ken" /></div>
      <div className="photo-shade absolute inset-0 hidden md:block" />
      <div className="photo-shade-up absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <Crumbs items={crumbs} />
        <div className="mt-10 max-w-3xl animate-rise">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-display text-[clamp(2.3rem,5.6vw,4.6rem)] font-semibold leading-[1.03] tracking-tight">{title}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
          <div className="mt-10 flex flex-wrap gap-4">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function PrimaryLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-shadow hover:glow-primary">
      {children}<span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}
export function GhostLink({ to, hash, children }: { to: string; hash?: string; children: ReactNode }) {
  return <Link to={to} {...(hash ? { hash } : {})} className="inline-flex items-center border border-foreground/30 px-6 py-3.5 font-medium transition-colors hover:border-foreground">{children}</Link>;
}

export function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: string }) {
  return (
    <div className="reveal max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-[clamp(1.7rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-tight">{title}</h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  );
}

export function Steps({ steps }: { steps: { t: string; d: string }[] }) {
  return (
    <ol className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.t} className="reveal bg-background p-7" style={{ transitionDelay: `${i * 70}ms` }}>
          <span className="font-display text-4xl font-semibold text-primary/80">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-8 text-lg font-semibold">{s.t}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

/** Two-column list of named items with descriptions — editorial, not cards. */
export function Ledger({ items }: { items: { t: string; d: string }[] }) {
  return (
    <dl className="mt-14 grid gap-x-16 md:grid-cols-2">
      {items.map((it, i) => (
        <div key={it.t} className="reveal grid grid-cols-[2.5rem_1fr] gap-4 border-t border-border py-7">
          <span className="font-mono text-xs text-primary pt-1">{String(i + 1).padStart(2, "0")}</span>
          <div><dt className="text-lg font-semibold">{it.t}</dt><dd className="mt-2 leading-relaxed text-muted-foreground">{it.d}</dd></div>
        </div>
      ))}
    </dl>
  );
}

export function CtaBand({ photo, title, lead, cta = "Pedir orçamento" }: { photo: string; title: string; lead: string; cta?: string }) {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 opacity-30"><Photo id={photo} alt="" w={1800} /></div>
      <div className="absolute inset-0 bg-background/75" />
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-24 md:flex-row md:items-end md:justify-between md:px-8 md:py-32">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-tight tracking-tight">{title}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{lead}</p>
        </div>
        <PrimaryLink to="/contactos">{cta}</PrimaryLink>
      </div>
    </section>
  );
}

export function HonestNote({ children }: { children: ReactNode }) {
  return (
    <p className="reveal mt-10 flex max-w-3xl gap-3 border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground">{children}</p>
  );
}
