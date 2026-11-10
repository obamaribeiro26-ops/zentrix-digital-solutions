import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { services } from "@/content/services";
import { siteConfig, telHref } from "@/lib/site-config";

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 10h14L9 22h14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
      <circle cx="16" cy="16" r="1.8" className="fill-primary" />
    </svg>
  );
}

const navLink = "text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setOpen(false); setDd(false); }, [path]);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    if (!dd) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !ddRef.current?.contains(e.target as Node)) setDd(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", close); };
  }, [dd]);

  const inServices = path.startsWith("/servicos");

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="ZENTRIX — Início">
          <Mark className="h-7 w-7 text-foreground" />
          <span className="font-display text-lg font-semibold tracking-[0.18em]">ZENTRIX</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          <Link to="/" activeOptions={{ exact: true }} className={navLink}>Início</Link>
          <div className="relative" ref={ddRef} onMouseLeave={() => setDd(false)}>
            <button type="button" aria-expanded={dd} aria-controls="dd-servicos" onClick={() => setDd(!dd)} onMouseEnter={() => setDd(true)}
              className={`flex items-center gap-1.5 text-sm transition-colors hover:text-foreground ${inServices ? "text-foreground" : "text-muted-foreground"}`}>
              Serviços <span aria-hidden className={`text-[10px] transition-transform ${dd ? "rotate-180" : ""}`}>▾</span>
            </button>
            {dd && (
              <div id="dd-servicos" className="absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-4">
                <ul className="border border-border bg-popover p-2 shadow-2xl">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to={s.slug} className="group flex gap-4 p-3 transition-colors hover:bg-secondary focus-visible:bg-secondary">
                        <span className="font-mono text-xs text-primary">{s.code}</span>
                        <span>
                          <span className="block text-sm font-medium text-foreground">{s.short}</span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">{s.line}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link to="/sobre" className={navLink}>Sobre</Link>
          <Link to="/contactos" className={navLink}>Contactos</Link>
        </nav>

        <Link to="/contactos" className="hidden border border-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block">Pedir orçamento</Link>

        <button type="button" className="p-2 md:hidden" aria-expanded={open} aria-controls="mnav" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`mt-1.5 block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav id="mnav" aria-label="Menu móvel" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border px-5 pb-8 md:hidden">
          <Link to="/" className="block py-3 font-display text-xl">Início</Link>
          <p className="eyebrow mt-4">Serviços</p>
          <ul className="mt-2 border-l border-border pl-4">
            {services.map((s) => <li key={s.slug}><Link to={s.slug} className="block py-2.5 text-muted-foreground data-[status=active]:text-foreground">{s.short}</Link></li>)}
          </ul>
          <Link to="/sobre" className="mt-4 block py-3 font-display text-xl">Sobre</Link>
          <Link to="/contactos" className="block py-3 font-display text-xl">Contactos</Link>
          <Link to="/contactos" className="mt-6 block bg-primary px-5 py-3.5 text-center font-medium text-primary-foreground">Pedir orçamento</Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const hasContact = siteConfig.email || siteConfig.whatsapp;
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1.2fr_1fr] md:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5"><Mark className="h-8 w-8" /><span className="font-display text-xl font-semibold tracking-[0.18em]">ZENTRIX</span></Link>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Technology & Digital Solutions</p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">Desenvolvimento digital e suporte técnico no mesmo lugar. The Center of Digital Solutions.</p>
        </div>
        <nav aria-label="Páginas">
          <h2 className="eyebrow">Empresa</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Início</Link></li>
            <li><Link to="/sobre" className="text-muted-foreground hover:text-foreground">Sobre a ZENTRIX</Link></li>
            <li><Link to="/contactos" className="text-muted-foreground hover:text-foreground">Contactos e orçamento</Link></li>
          </ul>
        </nav>
        <nav aria-label="Serviços">
          <h2 className="eyebrow">Serviços</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => <li key={s.slug}><Link to={s.slug} className="text-muted-foreground hover:text-foreground">{s.short}</Link></li>)}
          </ul>
        </nav>
        <div>
          <h2 className="eyebrow">Contacto</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.team.map((m) => <li key={m.name}><a href={telHref(m.phone)} className="text-muted-foreground hover:text-foreground"><span className="text-foreground">{m.name}</span> — {m.phone}</a></li>)}
          </ul>
          {hasContact ? (
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.email && <li><a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-foreground">{siteConfig.email}</a></li>}
              {siteConfig.whatsapp && <li><a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">WhatsApp</a></li>}
            </ul>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Email e redes sociais oficiais serão publicados aqui.</p>
          )}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-5 py-6 font-mono text-[11px] tracking-widest text-muted-foreground md:px-8">
          <span>© {new Date().getFullYear()} ZENTRIX Technologies</span>
          <span>INNOVATION · TECHNOLOGY · EXCELLENCE</span>
        </div>
      </div>
    </footer>
  );
}
