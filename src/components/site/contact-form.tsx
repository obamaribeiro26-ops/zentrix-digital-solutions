import { useState, type FormEvent } from "react";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/site-config";

type Field = "name" | "email" | "service" | "message";
type Errors = Partial<Record<Field, string>>;

const msgs: Record<Field, string> = {
  name: "Indique o seu nome (mín. 2 caracteres).",
  email: "Indique um email válido.",
  service: "Seleccione um serviço.",
  message: "Descreva o pedido (mín. 10 caracteres).",
};

export function validate(v: Record<Field, string>): Errors {
  const er: Errors = {};
  if (v.name.length < 2 || v.name.length > 100) er.name = msgs.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email) || v.email.length > 255) er.email = msgs.email;
  if (!v.service) er.service = msgs.service;
  if (v.message.length < 10 || v.message.length > 2000) er.message = msgs.message;
  return er;
}

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [summary, setSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const g = (k: string) => String(d.get(k) ?? "").trim();
    const v = { name: g("name"), email: g("email"), service: g("service"), message: g("message") };
    const er = validate(v);
    setErrors(er);
    const first = Object.keys(er)[0];
    if (first) { (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus(); return; }
    setSummary(`Pedido de orçamento — ZENTRIX\nNome: ${v.name}\nEmail: ${v.email}\nServiço: ${v.service}\n\n${v.message}`);
  }

  const field = "mt-2 w-full border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none aria-[invalid=true]:border-destructive";
  const Err = ({ k }: { k: Field }) => (errors[k] ? <p id={`${k}-err`} className="mt-2 text-sm text-destructive">{errors[k]}</p> : null);
  const aria = (k: Field) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  if (summary) {
    const text = encodeURIComponent(summary);
    return (
      <div role="status" className="py-4">
        <span className="grid h-11 w-11 place-items-center border border-success text-success" aria-hidden>✓</span>
        <h3 className="mt-6 text-xl font-semibold">Pedido preparado.</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Este formulário não envia mensagens automaticamente. Escolha um canal abaixo para nos fazer chegar o pedido.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {siteConfig.whatsapp && <a href={`https://wa.me/${siteConfig.whatsapp}?text=${text}`} target="_blank" rel="noreferrer" className="bg-primary px-5 py-3 font-medium text-primary-foreground">Enviar por WhatsApp</a>}
          {siteConfig.email && <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Pedido de orçamento")}&body=${text}`} className="border border-border px-5 py-3 font-medium hover:border-foreground">Enviar por email</a>}
          <button type="button" onClick={async () => { try { await navigator.clipboard.writeText(summary); setCopied(true); } catch { setCopied(false); } }}
            className="border border-border px-5 py-3 font-medium hover:border-foreground">{copied ? "Copiado ✓" : "Copiar texto do pedido"}</button>
        </div>
        {!siteConfig.whatsapp && !siteConfig.email && (
          <p className="mt-6 border-l-2 border-primary pl-4 text-sm text-muted-foreground">Os canais oficiais (WhatsApp e email) ainda não foram configurados neste site. O texto do pedido pode ser copiado e guardado.</p>
        )}
        <pre className="mt-6 max-h-48 overflow-auto whitespace-pre-wrap border border-border bg-background p-4 font-mono text-xs text-muted-foreground">{summary}</pre>
        <button type="button" onClick={() => { setSummary(null); setCopied(false); }} className="mt-6 text-sm text-primary underline-offset-4 hover:underline">Editar pedido</button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">Nome</label>
          <input id="name" name="name" autoComplete="name" maxLength={100} className={field} {...aria("name")} />
          <Err k="name" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={255} className={field} {...aria("email")} />
          <Err k="email" />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="text-sm font-medium">Serviço de interesse</label>
        <select id="service" name="service" defaultValue={defaultService} className={field} {...aria("service")}>
          <option value="" disabled>Seleccione um serviço</option>
          {services.map((s) => <option key={s.slug} value={s.short}>{s.short}</option>)}
          <option value="Outro / Ainda não sei">Outro / Ainda não sei</option>
        </select>
        <Err k="service" />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
        <textarea id="message" name="message" rows={5} maxLength={2000} placeholder="Ex.: portátil a aquecer e a desligar sozinho; ou loja online para 40 produtos." className={field} {...aria("message")} />
        <Err k="message" />
      </div>
      <button type="submit" className="group inline-flex items-center justify-center gap-3 bg-primary px-6 py-4 font-medium text-primary-foreground transition-shadow hover:glow-primary">
        Preparar pedido <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}
