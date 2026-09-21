import { test, expect } from "@playwright/test";

const publicPages = [
  "/",
  "/pricing",
  "/features",
  "/terms",
  "/privacy",
  "/refund-policy",
  "/subscription-cancellation",
  "/contact",
  "/security",
  "/about",
];

for (const path of publicPages) {
  test(`public page ${path} loads`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("body")).toContainText(/InvoiceRush|DMRUSH/i);
  });
}

test("homepage shows company identity", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    /professional invoices and quotes/i,
  );
  await expect(page.locator("footer")).toContainText("DMRUSH LIMITED");
  await expect(page.locator("footer")).toContainText("SC876437");
  await expect(page.locator("footer")).toContainText("support@dmrush.store");
});

test("pricing shows all plans", async ({ page }) => {
  await page.goto("/pricing");
  await expect(page.getByText("Free")).toBeVisible();
  await expect(page.getByText("Starter")).toBeVisible();
  await expect(page.getByText("Pro")).toBeVisible();
  await expect(page.getByText("Business")).toBeVisible();
  await expect(page.getByText(/Mollie/i)).toBeVisible();
});
