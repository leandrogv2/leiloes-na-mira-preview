import { useId, useRef, useState } from "react";
import { formCopy, hero } from "@/content/leiloes";
import { cn } from "@/lib/utils";
import { Reticle } from "./Reticle";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

/**
 * Formulário simulado: validação no cliente e sucesso local após pequeno atraso.
 * Não faz requisição de rede, não persiste dados e não registra o conteúdo digitado.
 */
export function SignupForm({
  id,
  variant = "dark",
  ctaLabel = hero.cta,
  tone = "panel",
}: {
  id: string;
  variant?: "dark" | "paper";
  ctaLabel?: string;
  tone?: "panel" | "bare";
}) {
  const nameId = useId();
  const emailId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    const next: { name?: string; email?: string } = {};
    if (!name) next.name = formCopy.errors.nameMissing;
    if (!email) next.email = formCopy.errors.emailMissing;
    else if (!EMAIL_RE.test(email)) next.email = formCopy.errors.emailInvalid;

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("success"), 900);
    form.reset();
  };

  const isPaper = variant === "paper";

  const shell = cn(
    "relative",
    tone === "panel" &&
      (isPaper
        ? "border-l-2 border-focus bg-paper-2/70 px-5 py-6 sm:px-7 sm:py-8"
        : "border-l-2 border-focus bg-graphite/70 px-5 py-6 backdrop-blur-[3px] sm:px-7 sm:py-8"),
  );

  if (status === "success") {
    return (
      <div id={id} className={shell}>
        <div className="flex items-start gap-4">
          <Reticle mode="lock" className="mt-1 size-8 shrink-0" strokeWidth={4} />
          <div role="status" aria-live="polite">
            <p className="label-mono text-focus">Foco estabilizado</p>
            <p className="editorial mt-3 text-[1.55rem] leading-[1.08] sm:text-3xl">
              {formCopy.success.title}
            </p>
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
              {formCopy.success.text}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form id={id} noValidate onSubmit={onSubmit} className={shell}>
      <div className="flex items-baseline justify-between gap-4">
        <p className="label-mono text-focus">Inscrição gratuita</p>
        <p aria-hidden="true" className="label-mono text-muted-foreground/50">
          02 campos
        </p>
      </div>

      <div className="mt-7 space-y-6">
        <div className="field-wrap relative">
          <label htmlFor={nameId} className="label-mono block text-muted-foreground">
            {formCopy.fields.name}
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            className="field-line label-none mt-1 w-full text-base text-foreground sm:text-[1.05rem]"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
          />
          <span aria-hidden="true" className="field-rule absolute bottom-0 left-0 h-[2px] w-full bg-focus" />
          {errors.name && (
            <p id={`${nameId}-error`} className="mt-2 text-sm text-focus">
              {errors.name}
            </p>
          )}
        </div>

        <div className="field-wrap relative">
          <label htmlFor={emailId} className="label-mono block text-muted-foreground">
            {formCopy.fields.email}
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            className="field-line mt-1 w-full text-base text-foreground sm:text-[1.05rem]"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
          />
          <span aria-hidden="true" className="field-rule absolute bottom-0 left-0 h-[2px] w-full bg-focus" />
          {errors.email && (
            <p id={`${emailId}-error`} className="mt-2 text-sm text-focus">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "btn-decision mt-8 inline-flex min-h-13 w-full items-center justify-between gap-4 bg-focus px-5 py-3.5",
          "text-left font-sans text-[0.92rem] font-bold uppercase tracking-[0.02em] text-primary-foreground",
          "disabled:opacity-70",
        )}
      >
        <span>{status === "loading" ? formCopy.loading : ctaLabel}</span>
        <span
          aria-hidden="true"
          className={cn(
            "relative block size-4 shrink-0",
            status === "loading" && "opacity-60",
          )}
        >
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current opacity-70" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current opacity-70" />
          <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
        </span>
      </button>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{hero.microcopy}</p>
      <p className="mt-3 max-w-[52ch] text-xs leading-relaxed text-muted-foreground/75">
        {hero.privacy}
      </p>
    </form>
  );
}
