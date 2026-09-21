import { Suspense } from "react";
import { AuthCard, AuthLink } from "@/components/auth/auth-card";
import { LoginForm } from "@/components/auth/login-form";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Log in",
  description: "Sign in to your InvoiceRush account.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      description="Sign in to manage your invoices and quotes."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <AuthLink href="/register">Start free</AuthLink>
        </>
      }
    >
      <Suspense fallback={<p className="text-sm text-foreground-muted">Loading…</p>}>
        <LoginForm />
      </Suspense>
    </AuthCard>
  );
}
