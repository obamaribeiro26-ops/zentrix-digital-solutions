import { Button } from "@/components/ui/button";
import { mailtoHref, siteConfig, telHref, waHref, type TeamMember } from "@/lib/site-config";

const pill =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ContactCards({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className="eyebrow">Contacto directo</h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {siteConfig.team.map((m) => (
          <MemberCard key={m.name} m={m} />
        ))}
      </ul>
    </div>
  );
}

function MemberCard({ m }: { m: TeamMember }) {
  return (
    <li className="border border-border bg-background p-5 transition-colors hover:border-primary/60">
      <h3 className="font-display text-base font-semibold tracking-wide">{m.name}</h3>
      <a href={telHref(m.phone)} className="mt-2 block font-mono text-sm text-muted-foreground transition-colors hover:text-primary">
        {m.phone}
      </a>
      <a href={mailtoHref(m.email)} className="mt-1 block break-all text-sm text-muted-foreground transition-colors hover:text-primary">
        {m.email}
      </a>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button asChild className="h-auto"><a href={telHref(m.phone)} className={pill}>
          Ligar
        </a></Button>
        <Button asChild variant="outline" className="h-auto"><a
          href={waHref(m.phone)}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`WhatsApp: ${m.name}`}
          className={`${pill} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`}
        >
          WhatsApp
        </a></Button>
        <Button asChild variant="outline" className="h-auto"><a
          href={mailtoHref(m.email, "Pedido de orçamento — ZENTRIX")}
          className={`${pill} border border-border text-muted-foreground hover:border-foreground hover:text-foreground`}
        >
          Email
        </a></Button>
      </div>
    </li>
  );
}
