/**
 * Generate multi-page PDF from sample-report.html via Playwright.
 * Run: node gen-pdf.cjs
 */
const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const htmlPath = path.join(__dirname, "sample-report.html");
  await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.pdf({
    path: path.join(__dirname, "public", "sample-inspection-report.pdf"),
    format: "A4",
    printBackground: true,
    margin: { top: "0", bottom: "0", left: "0", right: "0" },
  });
  await browser.close();
  console.log("PDF generated: public/sample-inspection-report.pdf");
})();
