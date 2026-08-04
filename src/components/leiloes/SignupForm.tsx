import { useId, useRef, useState } from "react";
import { formCopy, hero } from "@/content/leiloes";
import { cn } from "@/lib/utils";

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
}: {
  id: string;
  variant?: "dark" | "paper";
  ctaLabel?: string;
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

  const fieldClass = cn(
    "h-12 w-full border bg-transparent px-4 text-base outline-none transition-colors placeholder:text-muted-foreground",
    "border-input focus-visible:border-focus",
    isPaper ? "text-foreground" : "text-foreground",
  );

  if (status === "success") {
    return (
      <div
        id={id}
        className={cn(
          "relative border p-6 sm:p-7",
          isPaper ? "border-foreground/25" : "border-focus/45 bg-graphite/60",
        )}
      >
        <p className="label-mono text-focus">Inscrição realizada</p>
        <div role="status" aria-live="polite" className="mt-3">
          <p className="editorial text-2xl sm:text-3xl">{formCopy.success.title}</p>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
            {formCopy.success.text}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      id={id}
      noValidate
      onSubmit={onSubmit}
      className={cn(
        "relative border p-5 sm:p-6",
        isPaper ? "border-foreground/25" : "border-white/15 bg-graphite/55 backdrop-blur-[2px]",
      )}
    >
      <p className="label-mono text-focus">Inscrição gratuita</p>

      <div className="mt-4 space-y-4">
        <div>
          <label htmlFor={nameId} className="label-mono block text-muted-foreground">
            {formCopy.fields.name}
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            className={cn(fieldClass, "mt-2")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
          />
          {errors.name && (
            <p id={`${nameId}-error`} className="mt-2 text-sm text-focus">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={emailId} className="label-mono block text-muted-foreground">
            {formCopy.fields.email}
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            className={cn(fieldClass, "mt-2")}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
          />
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
          "mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-focus px-5 py-3",
          "label-mono text-primary-foreground transition-transform duration-300",
          "hover:translate-y-[-1px] disabled:opacity-70",
        )}
      >
        {status === "loading" ? (
          formCopy.loading
        ) : (
          <span className="flex flex-col items-center leading-tight sm:block">
            {ctaLabel.split(/\s+do\s+/i).length === 2 ? (
              <>
                <span>{ctaLabel.split(/\s+do\s+/i)[0]}</span>
                <span className="sm:before:content-['\00a0']">
                  {`do ${ctaLabel.split(/\s+do\s+/i)[1]}`}
                </span>
              </>
            ) : (
              ctaLabel
            )}
          </span>
        )}
      </button>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{hero.microcopy}</p>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground/80">{hero.privacy}</p>
    </form>
  );
}
