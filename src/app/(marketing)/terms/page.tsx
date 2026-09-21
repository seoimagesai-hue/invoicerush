import { LegalDocument } from "@/components/marketing/legal-document";
import { termsSections } from "@/lib/legal-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Terms governing your use of InvoiceRush, subscriptions, content responsibilities, and liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service"
      description="The contract between you and DMRUSH LIMITED for use of InvoiceRush."
      lastUpdated="21 September 2026"
      sections={termsSections}
    />
  );
}
