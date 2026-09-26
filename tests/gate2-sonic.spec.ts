import { expect, test, type Page } from "@playwright/test";

test.use({
  baseURL: process.env.GATE2_BASE_URL || "http://localhost:3000",
  browserName: "chromium",
  channel: process.platform === "win32" ? "msedge" : undefined,
});

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const counts = { contexts: 0, analysers: 0, samples: 0, sectionObservers: 0 };
    (window as typeof window & { __gate2?: typeof counts }).__gate2 = counts;
    const NativeAudioContext = window.AudioContext;
    window.AudioContext = class extends NativeAudioContext {
      constructor() { super(); counts.contexts += 1; }
      createAnalyser() { counts.analysers += 1; return super.createAnalyser(); }
    };
    const nativeRead = AnalyserNode.prototype.getByteFrequencyData;
    AnalyserNode.prototype.getByteFrequencyData = function (array) {
      counts.samples += 1;
      return nativeRead.call(this, array);
    };
    const NativeObserver = window.IntersectionObserver;
    window.IntersectionObserver = class extends NativeObserver {
      constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) { super(callback, options); counts.sectionObservers += 1; }
    };
  });
  await page.goto("/");
  await expect(page.locator(".experience-loader")).toBeHidden({ timeout: 12000 });
});

async function visitSection(page: Page, selector: string, section: string) {
  await page.locator(selector).first().evaluate((node) => node.scrollIntoView({ block: "center", behavior: "instant" }));
  await expect(page.locator(".sonic-environment")).toHaveAttribute("data-section", section, { timeout: 10000 });
}

test("Hero starts neutral and current-page profiles hand off without audio", async ({ page }) => {
  const environment = page.locator(".sonic-environment");
  await expect(environment).toHaveAttribute("data-section", "hero");
  await expect(environment).toHaveAttribute("data-sound", "off");
  await expect.poll(() => environment.evaluate((node) => Number(node.style.getPropertyValue("--sonic-section-energy")))).toBe(1);
  const initialObservers = await page.evaluate(() => (window as typeof window & { __gate2: { sectionObservers: number } }).__gate2.sectionObservers);
  await visitSection(page, '[data-sonic-section="signature"]', "signature");
  await expect.poll(() => environment.evaluate((node) => Number(node.style.getPropertyValue("--sonic-section-neutral")))).toBeLessThan(1);
  await visitSection(page, "section#works", "work");
  await visitSection(page, "section#philosophy", "thinking");
  const thinking = await environment.evaluate((node) => Number(node.style.getPropertyValue("--sonic-section-energy")));
  const thinkingAtmosphere = await page.evaluate(() => Number(document.documentElement.style.getPropertyValue("--sonic-atmosphere")));
  const thinkingCoverage = await page.evaluate(() => Number(document.documentElement.style.getPropertyValue("--sonic-coverage")));
  await visitSection(page, "section#about", "person");
  const person = await environment.evaluate((node) => Number(node.style.getPropertyValue("--sonic-section-energy")));
  expect(thinking).toBeLessThan(1);
  expect(person).toBeLessThan(thinking);
  expect(await page.evaluate(() => Number(document.documentElement.style.getPropertyValue("--sonic-atmosphere")))).toBeLessThan(thinkingAtmosphere);
  expect(await page.evaluate(() => Number(document.documentElement.style.getPropertyValue("--sonic-coverage")))).toBeLessThan(thinkingCoverage);
  await visitSection(page, "section#contact", "contact");
  const counts = await page.evaluate(() => (window as typeof window & { __gate2: { contexts: number; analysers: number; samples: number; sectionObservers: number } }).__gate2);
  expect(counts.contexts).toBe(0);
  expect(counts.analysers).toBe(0);
  expect(counts.samples).toBe(0);
  expect(counts.sectionObservers).toBe(initialObservers);
});

test("one sonic loop composes Hero and reading profiles", async ({ page }) => {
  const environment = page.locator(".sonic-environment");
  await page.getByRole("button", { name: "Sound off" }).click();
  await expect(page.getByRole("button", { name: "Sound on" })).toBeVisible({ timeout: 10000 });
  await expect.poll(() => environment.evaluate((node) => Number(node.style.getPropertyValue("--sonic-presence")))).toBeGreaterThan(0);
  await expect.poll(() => page.evaluate(() => Number(document.documentElement.style.getPropertyValue("--sonic-core-light")))).toBeGreaterThan(0);
  const initialObservers = await page.evaluate(() => (window as typeof window & { __gate2: { sectionObservers: number } }).__gate2.sectionObservers);
  await visitSection(page, "section#philosophy", "thinking");
  await expect.poll(() => environment.evaluate((node) => Number(node.style.getPropertyValue("--sonic-section-energy")))).toBeLessThan(0.6);
  const thinking = await environment.evaluate((node) => ({ energy: Number(node.style.getPropertyValue("--sonic-section-energy")), presence: Number(node.style.getPropertyValue("--sonic-presence")) }));
  expect(thinking.presence).toBeGreaterThan(0);
  expect(thinking.presence).toBeLessThanOrEqual(thinking.energy);
  await visitSection(page, "section#about", "person");
  await expect.poll(() => environment.evaluate((node) => Number(node.style.getPropertyValue("--sonic-section-energy")))).toBeLessThan(thinking.energy);
  await visitSection(page, "section#hero", "hero");
  await expect.poll(() => environment.evaluate((node) => Number(node.style.getPropertyValue("--sonic-section-energy")))).toBeGreaterThan(0.95);
  const counts = await page.evaluate(() => (window as typeof window & { __gate2: { contexts: number; analysers: number; sectionObservers: number } }).__gate2);
  expect(counts.contexts).toBe(1);
  expect(counts.analysers).toBe(1);
  expect(counts.sectionObservers).toBe(initialObservers);
});

test("reduced motion and mobile keep non-spatial section modulation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  const environment = page.locator(".sonic-environment");
  const transforms = await environment.locator(".sonic-light").evaluateAll((nodes) => nodes.map((node) => getComputedStyle(node).transform));
  await page.getByRole("button", { name: "Sound off" }).click();
  await expect(page.getByRole("button", { name: "Sound on" })).toBeVisible({ timeout: 10000 });
  await visitSection(page, "section#philosophy", "thinking");
  await expect.poll(() => environment.evaluate((node) => Number(node.style.getPropertyValue("--sonic-section-energy")))).toBeLessThan(1);
  const thinkingAtmosphere = await page.evaluate(() => Number(document.documentElement.style.getPropertyValue("--sonic-atmosphere")));
  await visitSection(page, "section#about", "person");
  await expect.poll(() => page.evaluate(() => Number(document.documentElement.style.getPropertyValue("--sonic-atmosphere")))).toBeLessThan(thinkingAtmosphere);
  expect(await environment.locator(".sonic-light").evaluateAll((nodes) => nodes.map((node) => getComputedStyle(node).transform))).toEqual(transforms);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(page.locator("#philosophy-heading")).toBeVisible();
});

test("route exit, return, and hash navigation remain silent and leak-free", async ({ page }) => {
  await page.getByRole("button", { name: "Sound off" }).click();
  await expect(page.getByRole("button", { name: "Sound on" })).toBeVisible({ timeout: 10000 });
  await page.getByRole("link", { name: "Work", exact: true }).first().click();
  await expect(page).toHaveURL(/\/work$/);
  await expect(page.locator(".sonic-environment")).toHaveCount(0);
  await expect.poll(() => page.evaluate(() => Number(document.documentElement.style.getPropertyValue("--sonic-core-light")))).toBe(0);
  const samples = await page.evaluate(() => (window as typeof window & { __gate2: { samples: number } }).__gate2.samples);
  await page.waitForTimeout(200);
  expect(await page.evaluate(() => (window as typeof window & { __gate2: { samples: number } }).__gate2.samples)).toBe(samples);
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("button", { name: "Sound off" })).toBeVisible();
  await expect(page.locator(".sonic-environment")).toHaveAttribute("data-section", "hero");
  const returningObservers = await page.evaluate(() => (window as typeof window & { __gate2: { sectionObservers: number } }).__gate2.sectionObservers);
  await page.getByRole("link", { name: "Thinking", exact: true }).first().click();
  await expect(page.locator(".sonic-environment")).toHaveAttribute("data-section", "thinking", { timeout: 10000 });
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
  await expect.poll(() => page.evaluate(() => document.querySelector(".sonic-environment")?.getAttribute("data-section") === document.documentElement.dataset.sonicSection)).toBe(true);
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await expect(page.locator(".sonic-environment")).toHaveAttribute("data-section", "hero", { timeout: 10000 });
  await page.goForward();
  await expect(page).toHaveURL(/#philosophy$/);
  await expect.poll(() => page.evaluate(() => document.querySelector(".sonic-environment")?.getAttribute("data-section") === document.documentElement.dataset.sonicSection)).toBe(true);
  const counts = await page.evaluate(() => (window as typeof window & { __gate2: { contexts: number; analysers: number; sectionObservers: number } }).__gate2);
  expect(counts.contexts).toBe(1);
  expect(counts.analysers).toBe(1);
  expect(counts.sectionObservers).toBe(returningObservers);
});
