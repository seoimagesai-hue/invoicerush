import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { InvoicePaperPreview } from "@/components/marketing/product-compositions";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

type AuthCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export function AuthCard({
  title,
  description,
  children,
  footer,
  className,
}: AuthCardProps) {
  return (
    <div className={cn("grid min-h-screen lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]", className)}>
      {/* Branded panel — desktop */}
      <aside className="relative hidden overflow-hidden bg-background-navy lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 20% 0%, rgb(47 91 234 / 0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 80%, rgb(124 108 240 / 0.2), transparent 50%)",
          }}
          aria-hidden
        />
        <div className="relative">
          <Link href="/" className="inline-flex">
            <Logo size="md" variant="onDark" href={null} />
          </Link>
          <h2 className="mt-10 max-w-sm font-display text-3xl font-semibold leading-tight tracking-tight text-foreground-on-dark xl:text-4xl">
            {brand.tagline}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground-on-dark-muted">
            Professional invoices and quotes for UK freelancers and small teams.
            No card required to start on the Free plan.
          </p>
        </div>
        <div className="relative mt-10 max-w-md">
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-brand/20 blur-2xl" aria-hidden />
          <InvoicePaperPreview template="modern" className="relative rotate-[-2deg] shadow-xl" />
        </div>
        <p className="relative mt-8 text-xs text-foreground-on-dark-muted">
          Operated by {brand.productName}&apos;s parent company. See our{" "}
          <Link href="/privacy" className="text-brand-muted hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </aside>

      {/* Form panel — mobile-first */}
      <div className="flex flex-col justify-center px-4 py-16 sm:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto w-full max-w-md">
          <div className="surface-card p-6 sm:p-8">
            <div className="mb-6 text-center lg:text-left">
              <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {title}
              </h1>
              {description ? (
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {description}
                </p>
              ) : null}
            </div>
            {children}
          </div>
          {footer ? (
            <div className="mt-6 text-center text-sm text-foreground-muted lg:text-left">
              {footer}
            </div>
          ) : null}
          <p className="mt-8 text-center text-xs text-foreground-subtle lg:hidden">
            <Link href="/" className="text-brand hover:underline">
              ← Back to {brand.productName}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export function AuthLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="font-medium text-brand hover:underline">
      {children}
    </Link>
  );
}
