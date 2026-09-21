/**
 * Central brand, company, pricing, and product configuration.
 * Update this file to change domain, company details, pricing, and social links
 * without searching the rest of the codebase.
 */

export const brand = {
  productName: "InvoiceRush",
  tagline: "Professional invoices and quotes without the paperwork headache.",
  domain: process.env.NEXT_PUBLIC_APP_DOMAIN ?? "dmrush.store",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  supportEmail: "support@dmrush.store",
  fromEmail:
    process.env.EMAIL_FROM ?? "InvoiceRush <noreply@dmrush.store>",
  logoText: "InvoiceRush",
} as const;

export const company = {
  legalName: "DMRUSH LIMITED",
  companyNumber: "SC876437",
  registeredJurisdiction: "Scotland, United Kingdom",
  registeredOffice: {
    line1: "1/4 22 Dundasvale Court",
    city: "Glasgow",
    region: "Scotland",
    postcode: "G4 0XE",
    country: "United Kingdom",
  },
  get registeredOfficeSingleLine() {
    const o = this.registeredOffice;
    return `${o.line1}, ${o.city}, ${o.region}, ${o.postcode}`;
  },
  get registeredOfficeMultiline() {
    const o = this.registeredOffice;
    return [o.line1, o.city, o.region, o.postcode, o.country];
  },
} as const;

/** Only display icons when a real URL is configured. */
export const socialLinks = {
  // twitter: "https://twitter.com/...",
  // linkedin: "https://linkedin.com/company/...",
} as const;

export type PlanId = "free" | "starter" | "pro" | "business";
export type BillingInterval = "month" | "year";

export type PlanLimits = {
  documentsPerMonth: number | null; // null = unlimited (fair use)
  activeClients: number | null;
  businessProfiles: number;
  templates: ("classic" | "modern" | "minimal")[];
  removeBranding: boolean;
  emailDocuments: boolean;
  paymentStatusTracking: boolean;
  csvExport: boolean;
  recurringInvoices: boolean;
  automaticReminders: boolean;
  reports: boolean;
  customDocumentColours: boolean;
  catalogue: boolean;
  teamMembers: number;
  activityLog: boolean;
  prioritySupport: boolean;
};

export type PlanDefinition = {
  id: PlanId;
  name: string;
  description: string;
  priceMonthlyPence: number;
  priceAnnualPence: number;
  currency: "GBP";
  features: string[];
  limits: PlanLimits;
  highlighted?: boolean;
};

/**
 * Prices stored in minor units (pence) to avoid floating-point errors.
 * Display helpers convert to pounds for UI and Mollie.
 */
export const plans: Record<PlanId, PlanDefinition> = {
  free: {
    id: "free",
    name: "Free",
    description:
      "Get started with professional invoices and quotes at no cost.",
    priceMonthlyPence: 0,
    priceAnnualPence: 0,
    currency: "GBP",
    features: [
      "3 invoices or quotes combined per month",
      "Up to 5 active clients",
      "One business profile",
      "Classic template",
      "PDF downloads",
      "InvoiceRush footer branding",
      "Basic status tracking",
    ],
    limits: {
      documentsPerMonth: 3,
      activeClients: 5,
      businessProfiles: 1,
      templates: ["classic"],
      removeBranding: false,
      emailDocuments: false,
      paymentStatusTracking: true,
      csvExport: false,
      recurringInvoices: false,
      automaticReminders: false,
      reports: false,
      customDocumentColours: false,
      catalogue: false,
      teamMembers: 1,
      activityLog: false,
      prioritySupport: false,
    },
  },
  starter: {
    id: "starter",
    name: "Starter",
    description: "For freelancers who invoice regularly and email documents.",
    priceMonthlyPence: 999,
    priceAnnualPence: 9900,
    currency: "GBP",
    features: [
      "Up to 50 invoices and quotes per month",
      "Up to 100 active clients",
      "All document templates",
      "Remove InvoiceRush footer branding",
      "Email documents from the platform",
      "Payment-status tracking",
      "CSV exports",
    ],
    limits: {
      documentsPerMonth: 50,
      activeClients: 100,
      businessProfiles: 1,
      templates: ["classic", "modern", "minimal"],
      removeBranding: true,
      emailDocuments: true,
      paymentStatusTracking: true,
      csvExport: true,
      recurringInvoices: false,
      automaticReminders: false,
      reports: false,
      customDocumentColours: false,
      catalogue: false,
      teamMembers: 1,
      activityLog: false,
      prioritySupport: false,
    },
  },
  pro: {
    id: "pro",
    name: "Pro",
    description:
      "For growing businesses that need recurring invoices and reports.",
    priceMonthlyPence: 1999,
    priceAnnualPence: 19900,
    currency: "GBP",
    highlighted: true,
    features: [
      "Unlimited reasonable-use invoices and quotes",
      "Unlimited reasonable-use clients",
      "Recurring invoices",
      "Automatic reminders",
      "Reports",
      "Custom document colours",
      "Saved products and services",
      "Priority email support",
    ],
    limits: {
      documentsPerMonth: null,
      activeClients: null,
      businessProfiles: 1,
      templates: ["classic", "modern", "minimal"],
      removeBranding: true,
      emailDocuments: true,
      paymentStatusTracking: true,
      csvExport: true,
      recurringInvoices: true,
      automaticReminders: true,
      reports: true,
      customDocumentColours: true,
      catalogue: true,
      teamMembers: 1,
      activityLog: false,
      prioritySupport: true,
    },
  },
  business: {
    id: "business",
    name: "Business",
    description: "For agencies and teams that collaborate on client work.",
    priceMonthlyPence: 3999,
    priceAnnualPence: 39900,
    currency: "GBP",
    features: [
      "Everything in Pro",
      "Up to 5 workspace members",
      "Role-based access",
      "Multiple business profiles (maximum 3)",
      "Shared client management",
      "Activity log",
      "Priority support",
    ],
    limits: {
      documentsPerMonth: null,
      activeClients: null,
      businessProfiles: 3,
      templates: ["classic", "modern", "minimal"],
      removeBranding: true,
      emailDocuments: true,
      paymentStatusTracking: true,
      csvExport: true,
      recurringInvoices: true,
      automaticReminders: true,
      reports: true,
      customDocumentColours: true,
      catalogue: true,
      teamMembers: 5,
      activityLog: true,
      prioritySupport: true,
    },
  },
};

export const pricingNotes = {
  currency: "GBP" as const,
  /** VAT treatment for SaaS subscriptions — update if tax config changes. */
  vatNote:
    "Prices shown exclude VAT. Where VAT applies, it will be added at the applicable rate at checkout.",
  renewal:
    "Paid plans renew automatically each billing period until you cancel.",
  cancellation:
    "Cancel online from your Subscription page at any time. Access continues until the end of the paid period.",
  freePlan: "No card required for the Free plan.",
  processor:
    "Paid subscriptions use secure checkout. InvoiceRush does not store card numbers.",
  fairUse:
    "Unlimited plans are subject to fair use. Automated abuse, bulk spam, or use as a mass-email platform is not permitted.",
};

export const serviceDisclaimer =
  "InvoiceRush provides document and business administration software. Users remain responsible for checking their invoices, quotations, tax treatment, VAT obligations, legal requirements, and accounting records. InvoiceRush is not a bank, accounting firm, tax adviser, financial adviser, payment processor, or regulated financial service.";

export const cookieConsentVersion = "2026-03-01";

export function formatPriceFromPence(
  pence: number,
  currency: string = "GBP",
): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
  }).format(pence / 100);
}

export function penceToMollieAmount(pence: number): string {
  return (pence / 100).toFixed(2);
}

export function getPlanPrice(
  planId: PlanId,
  interval: BillingInterval,
): number {
  const plan = plans[planId];
  return interval === "year" ? plan.priceAnnualPence : plan.priceMonthlyPence;
}
