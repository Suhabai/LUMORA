import { expect, test } from "@playwright/test";

test.use({
  baseURL: process.env.GATE1_BASE_URL || "http://localhost:3000",
  browserName: "chromium",
  channel: process.platform === "win32" ? "msedge" : undefined,
});

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const diagnostics = { contexts: 0, analysers: 0, samples: 0, context: null as AudioContext | null };
    (window as typeof window & { __gate1?: typeof diagnostics }).__gate1 = diagnostics;
    const NativeAudioContext = window.AudioContext;
    window.AudioContext = class extends NativeAudioContext {
      constructor() {
        super();
        diagnostics.contexts += 1;
        diagnostics.context = this;
      }
      createAnalyser() {
        diagnostics.analysers += 1;
        return super.createAnalyser();
      }
    };
    const nativeRead = AnalyserNode.prototype.getByteFrequencyData;
    AnalyserNode.prototype.getByteFrequencyData = function (array) {
      diagnostics.samples += 1;
      return nativeRead.call(this, array);
    };
  });
  await page.goto("/");
  await expect(page.locator(".experience-loader")).toBeHidden({ timeout: 12000 });
});

test("starts silent, activates one shared graph, and stops cleanly", async ({ page }) => {
  const control = page.getByRole("button", { name: "Sound off" });
  const environment = page.locator(".sonic-environment");
  await expect(control).toHaveAttribute("aria-pressed", "false");
  await expect(environment.locator(".sonic-light")).toHaveCount(2);
  await expect(environment).toHaveCSS("pointer-events", "none");
  const geometry = await environment.evaluate((node) => {
    const left = node.querySelector(".sonic-light--left")!.getBoundingClientRect();
    const right = node.querySelector(".sonic-light--right")!.getBoundingClientRect();
    const leftStyle = getComputedStyle(node.querySelector(".sonic-light--left")!);
    const rightStyle = getComputedStyle(node.querySelector(".sonic-light--right")!);
    return {
      left: { top: left.top, height: left.height, width: left.width, x: left.x, mask: leftStyle.maskImage },
      right: { top: right.top, height: right.height, width: right.width, edge: innerWidth - right.right, mask: rightStyle.maskImage },
      coreMasks: [
        getComputedStyle(node.querySelector(".sonic-light--left")!, "::after").maskImage,
        getComputedStyle(node.querySelector(".sonic-light--right")!, "::after").maskImage,
      ],
      transforms: [leftStyle.transform, rightStyle.transform],
    };
  });
  expect(geometry.left.top).toBe(geometry.right.top);
  expect(geometry.left.height).toBe(geometry.right.height);
  expect(geometry.left.width).toBe(geometry.right.width);
  expect(geometry.left.x).toBeGreaterThan(0);
  expect(geometry.left.x).toBe(geometry.right.edge);
  expect(geometry.left.mask).toBe(geometry.right.mask);
  expect(geometry.coreMasks[0]).toBe(geometry.coreMasks[1]);
  expect(geometry.left.width).toBeLessThan(100);
  expect(geometry.left.height).toBeLessThan(450);
  expect(geometry.transforms[0]).not.toBe(geometry.transforms[1]);
  const coreGeometry = await page.locator(".core-source-circle").evaluate((node) => [node.getAttribute("cx"), node.getAttribute("cy"), node.getAttribute("r")]);
  const neutralCoreFilter = await page.locator(".core-source-circle").evaluate((node) => getComputedStyle(node).filter);
  const neutralCoreAura = await page.locator(".hero-v2-core-glow").evaluate((node) => getComputedStyle(node).filter);
  const neutralCoreFocalLight = await page.locator(".hero-v2-core-glow").evaluate((node) => getComputedStyle(node, "::after").backgroundImage);
  const neutralLights = await environment.evaluate((node) => [
    getComputedStyle(node.querySelector(".sonic-light--left")!).opacity,
    getComputedStyle(node.querySelector(".sonic-light--right")!).opacity,
  ]);

  const wavResponse = page.waitForResponse((response) => response.url().endsWith("/audio/lumora-dark-calm-still.wav"));
  await control.click();
  expect((await wavResponse).ok()).toBe(true);
  await expect(page.getByRole("button", { name: "Sound on" })).toHaveAttribute("aria-pressed", "true", { timeout: 10000 });
  await expect.poll(() => environment.evaluate((node) => Number(node.style.getPropertyValue("--sonic-presence")))).toBeGreaterThan(0);
  await expect.poll(() => page.evaluate(() => Number(document.documentElement.style.getPropertyValue("--sonic-core-light")))).toBeGreaterThan(0);
  await expect.poll(() => page.locator(".core-source-circle").evaluate((node) => getComputedStyle(node).filter)).not.toBe(neutralCoreFilter);
  await expect.poll(() => page.locator(".hero-v2-core-glow").evaluate((node) => getComputedStyle(node).filter)).not.toBe(neutralCoreAura);
  await expect.poll(() => page.locator(".hero-v2-core-glow").evaluate((node) => getComputedStyle(node, "::after").backgroundImage)).not.toBe(neutralCoreFocalLight);
  expect(await page.locator(".core-source-circle").evaluate((node) => [node.getAttribute("cx"), node.getAttribute("cy"), node.getAttribute("r")])).toEqual(coreGeometry);
  await expect.poll(() => environment.evaluate((node) => [
    getComputedStyle(node.querySelector(".sonic-light--left")!).opacity,
    getComputedStyle(node.querySelector(".sonic-light--right")!).opacity,
  ])).not.toEqual(neutralLights);
  const first = await page.evaluate(() => {
    const state = (window as typeof window & { __gate1: { contexts: number; analysers: number; context: AudioContext } }).__gate1;
    return { contexts: state.contexts, analysers: state.analysers, contextState: state.context.state };
  });
  expect(first.contexts).toBe(1);
  expect(first.analysers).toBe(1);
  expect(first.contextState).toBe("running");
  const desktopStart = await page.evaluate(() => (window as typeof window & { __gate1: { samples: number } }).__gate1.samples);
  await page.waitForTimeout(1100);
  const desktopSamples = await page.evaluate((start) => (window as typeof window & { __gate1: { samples: number } }).__gate1.samples - start, desktopStart);
  expect(desktopSamples).toBeGreaterThan(5);
  expect(desktopSamples).toBeLessThanOrEqual(34);
  await page.getByRole("button", { name: "Sound on" }).click();
  await expect(page.getByRole("button", { name: "Sound off" })).toHaveAttribute("aria-pressed", "false");
  await expect.poll(() => environment.evaluate((node) => Number(node.style.getPropertyValue("--sonic-presence")))).toBe(0);
  await expect.poll(() => page.evaluate(() => Number(document.documentElement.style.getPropertyValue("--sonic-core-light")))).toBe(0);
  const stopped = await page.evaluate(() => (window as typeof window & { __gate1: { samples: number } }).__gate1.samples);
  await page.waitForTimeout(180);
  expect(await page.evaluate(() => (window as typeof window & { __gate1: { samples: number } }).__gate1.samples)).toBe(stopped);
  await page.getByRole("button", { name: "Sound off" }).click();
  await expect(page.getByRole("button", { name: "Sound on" })).toBeVisible({ timeout: 10000 });
  const second = await page.evaluate(() => {
    const state = (window as typeof window & { __gate1: { contexts: number; analysers: number } }).__gate1;
    return { contexts: state.contexts, analysers: state.analysers };
  });
  expect(second.contexts).toBe(1);
  expect(second.analysers).toBe(1);
});

test("leaving home stops sound and return stays silent", async ({ page }) => {
  await page.getByRole("button", { name: "Sound off" }).click();
  await expect(page.getByRole("button", { name: "Sound on" })).toBeVisible({ timeout: 10000 });
  await page.getByRole("link", { name: "Work", exact: true }).click();
  await expect(page).toHaveURL(/\/work$/);
  await expect(page.locator(".sonic-environment")).toHaveCount(0);
  const stopped = await page.evaluate(() => (window as typeof window & { __gate1: { samples: number } }).__gate1.samples);
  await page.waitForTimeout(180);
  expect(await page.evaluate(() => (window as typeof window & { __gate1: { samples: number } }).__gate1.samples)).toBe(stopped);
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("button", { name: "Sound off" })).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator(".sonic-environment .sonic-light")).toHaveCount(2);
});

test("keyboard control and reduced motion keep a complete page", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const control = page.getByRole("button", { name: "Sound off" });
  await control.focus();
  await expect(control).toBeFocused();
  await expect(control).toHaveCSS("outline-style", "solid");
  const fixedTransforms = await page.locator(".sonic-light").evaluateAll((nodes) => nodes.map((node) => getComputedStyle(node).transform));
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Sound on" })).toBeVisible({ timeout: 10000 });
  expect(await page.locator(".sonic-light").evaluateAll((nodes) => nodes.map((node) => getComputedStyle(node).transform))).toEqual(fixedTransforms);
  expect(await page.locator(".sonic-light--left").evaluate((node) => parseFloat(getComputedStyle(node).transitionDuration))).toBeLessThan(0.001);
  await expect(page.locator("h1").first()).toBeVisible();
  await page.keyboard.press("Space");
  await expect(page.getByRole("button", { name: "Sound off" })).toBeVisible();
});

test("mobile retains both lights without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator(".sonic-environment .sonic-light")).toHaveCount(2);
  await expect(page.getByRole("button", { name: "Sound off" })).toBeVisible();
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.getByRole("button", { name: "Sound off" }).click();
  await expect(page.getByRole("button", { name: "Sound on" })).toBeVisible({ timeout: 10000 });
  const mobileStart = await page.evaluate(() => (window as typeof window & { __gate1: { samples: number } }).__gate1.samples);
  await page.waitForTimeout(1100);
  const mobileSamples = await page.evaluate((start) => (window as typeof window & { __gate1: { samples: number } }).__gate1.samples - start, mobileStart);
  expect(mobileSamples).toBeGreaterThan(5);
  expect(mobileSamples).toBeLessThanOrEqual(22);
});

test("hidden tab stops analysis and does not auto-resume", async ({ page }) => {
  await page.getByRole("button", { name: "Sound off" }).click();
  await expect(page.getByRole("button", { name: "Sound on" })).toBeVisible({ timeout: 10000 });
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { configurable: true, value: true });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(page.getByRole("button", { name: "Sound off" })).toBeVisible();
  const stopped = await page.evaluate(() => (window as typeof window & { __gate1: { samples: number } }).__gate1.samples);
  await page.waitForTimeout(180);
  expect(await page.evaluate(() => (window as typeof window & { __gate1: { samples: number } }).__gate1.samples)).toBe(stopped);
});

test("WAV failure returns to neutral without hiding content", async ({ page }) => {
  await page.route("**/audio/lumora-dark-calm-still.wav", (route) => route.abort());
  await page.getByRole("button", { name: "Sound off" }).click();
  await expect(page.getByRole("button", { name: "Sound unavailable. Try again" })).toBeVisible({ timeout: 10000 });
  await expect(page.locator(".sonic-environment .sonic-light")).toHaveCount(2);
  await expect(page.locator("h1").first()).toBeVisible();
});
