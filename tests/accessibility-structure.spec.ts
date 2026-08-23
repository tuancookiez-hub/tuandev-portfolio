import { test, expect } from "@playwright/test";

test.describe("accessibility-structure", () => {
  test("landing heading structure and keyboard reachability", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expect(page.locator("h1")).toHaveCount(1);
    // tab through live worlds
    await page.keyboard.press("Tab");
    // header wordmark or first link focused
    // ensure three live worlds can be focused via Tab
    const hospitality = page.getByRole("button", { name: /Hospitality/i });
    await hospitality.focus();
    await expect(hospitality).toBeFocused();
    const systems = page.getByRole("button", { name: /Systems/i });
    await systems.focus();
    await expect(systems).toBeFocused();
    const creative = page.getByRole("button", { name: /Creative/i });
    await creative.focus();
    await expect(creative).toBeFocused();
    // contact links are links and reachable
    const email = page.getByRole("link", { name: /tuancookiez@gmail.com/i });
    await email.focus();
    await expect(email).toBeFocused();
  });

  test("about/work/contact anchors navigate", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.getByRole("link", { name: "About" }).click();
    await expect(page.locator("#about")).toBeInViewport();
    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page.locator("#contact")).toBeInViewport();
    await page.getByRole("link", { name: "All Work" }).click();
    await expect(page.locator("#work")).toBeInViewport();
  });
});
