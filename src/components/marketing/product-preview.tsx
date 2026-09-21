import { Logo } from "@/components/brand/logo";
import { Card, CardContent } from "@/components/ui/card";
import { InvoiceStatusBadge } from "@/components/ui/status-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type ProductPreviewProps = {
  className?: string;
};

const lineItems = [
  {
    description: "Brand identity workshop",
    quantity: 1,
    unitPrice: "£850.00",
    amount: "£850.00",
  },
  {
    description: "Website copywriting (8 pages)",
    quantity: 1,
    unitPrice: "£640.00",
    amount: "£640.00",
  },
  {
    description: "Monthly retainer — March 2026",
    quantity: 1,
    unitPrice: "£420.00",
    amount: "£420.00",
  },
] as const;

export function ProductPreview({ className }: ProductPreviewProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="pointer-events-none absolute -inset-4 rounded-2xl bg-brand-muted/30"
        aria-hidden="true"
      />
      <Card className="relative overflow-hidden shadow-md">
        <CardContent className="p-0">
          <div className="border-b border-border bg-background-muted/50 px-6 py-4">
            <div className="flex items-start justify-between gap-4">
              <Logo size="sm" href={null} />
              <InvoiceStatusBadge status="due_soon" />
            </div>
          </div>

          <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
                From
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Northbridge Studio Ltd
              </p>
              <p className="text-sm text-foreground-muted">
                14 Merchant Street, Edinburgh EH1 2QF
              </p>
            </div>
            <div className="sm:text-right">
              <p className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
                Bill to
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Calder &amp; Finch Consulting
              </p>
              <p className="text-sm text-foreground-muted">
                88 Queen Street, Glasgow G1 3DR
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-y border-border bg-background-muted/30 px-6 py-4 text-sm">
            <div>
              <p className="text-xs text-foreground-subtle">Invoice number</p>
              <p className="font-medium text-foreground">INV-2026-0042</p>
            </div>
            <div>
              <p className="text-xs text-foreground-subtle">Issue date</p>
              <p className="font-medium text-foreground">15 Mar 2026</p>
            </div>
            <div>
              <p className="text-xs text-foreground-subtle">Due date</p>
              <p className="font-medium text-warning">22 Mar 2026</p>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Description</TableHead>
                <TableHead className="w-16 text-right">Qty</TableHead>
                <TableHead className="w-28 text-right">Unit price</TableHead>
                <TableHead className="w-28 text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lineItems.map((item) => (
                <TableRow key={item.description}>
                  <TableCell className="font-medium">{item.description}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right text-foreground-muted">
                    {item.unitPrice}
                  </TableCell>
                  <TableCell className="text-right">{item.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-end px-6 py-6">
            <div className="w-full max-w-xs space-y-2 text-sm">
              <div className="flex justify-between text-foreground-muted">
                <span>Subtotal</span>
                <span>£1,910.00</span>
              </div>
              <div className="flex justify-between text-foreground-muted">
                <span>VAT (20%)</span>
                <span>£382.00</span>
              </div>
              <Separator />
              <div className="flex justify-between font-display text-lg font-semibold text-foreground">
                <span>Total due</span>
                <span>£2,292.00</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
