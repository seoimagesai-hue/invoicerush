/**
 * Safe fictional demonstration data for marketing UI compositions.
 * Not real people or businesses.
 */
export const demoBusiness = {
  name: "Northstar Design Studio",
  legalName: "Northstar Design Studio Ltd",
  address: "42 Candleriggs, Glasgow, G1 1LE",
  email: "accounts@northstar-demo.example",
  vat: "GB 123 4567 89",
} as const;

export const demoClient = {
  name: "Harper & Cole Ltd",
  contact: "Amelia Harper",
  address: "18 Queen Square, Bristol, BS1 4ND",
  email: "finance@harpercole-demo.example",
} as const;

export const demoInvoice = {
  number: "INV-000128",
  issueDate: "12 Mar 2026",
  dueDate: "11 Apr 2026",
  reference: "PO-4482",
  currency: "GBP",
  lines: [
    {
      description: "Brand identity workshop",
      qty: "1",
      unit: "day",
      unitPrice: "£950.00",
      amount: "£950.00",
    },
    {
      description: "Website design — marketing site",
      qty: "1",
      unit: "project",
      unitPrice: "£2,400.00",
      amount: "£2,400.00",
    },
    {
      description: "Content and SEO starter pack",
      qty: "1",
      unit: "pack",
      unitPrice: "£480.00",
      amount: "£480.00",
    },
  ],
  subtotal: "£3,830.00",
  vat: "£766.00",
  total: "£4,596.00",
  status: "due_soon" as const,
} as const;

export const demoQuote = {
  number: "QUO-000047",
  issueDate: "3 Mar 2026",
  validUntil: "31 Mar 2026",
  total: "£1,860.00",
  status: "accepted" as const,
  lines: [
    {
      description: "Retainer — April creative support",
      amount: "£1,200.00",
    },
    {
      description: "Campaign landing page design",
      amount: "£660.00",
    },
  ],
} as const;

export const demoDashboard = {
  invoiced: "£18,420.00",
  paid: "£12,840.00",
  outstanding: "£4,596.00",
  overdue: "£984.00",
  chart: [42, 58, 51, 67, 73, 69, 81, 76, 88, 84, 91, 86],
} as const;
