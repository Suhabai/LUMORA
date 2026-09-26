import { chromium } from "@playwright/test";
import { mkdir, mkdtemp } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const output = path.resolve("artifacts/gate2");
const baseURL = process.env.GATE2_BASE_URL || "http://localhost:3000";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: process.platform === "win32" ? "msedge" : undefined });

async function ready(page) {
  await page.goto(`${baseURL}/`);
  await page.locator(".experience-loader").waitFor({ state: "hidden", timeout: 12000 });
}

async function visit(page, selector, section) {
  await page.locator(selector).first().evaluate((node) => node.scrollIntoView({ block: "center", behavior: "instant" }));
  await page.waitForFunction((name) => document.querySelector(".sonic-environment")?.getAttribute("data-section") === name, section);
  await page.waitForTimeout(2200);
}

const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await desktop.newPage();
await ready(page);
await page.waitForTimeout(1600);
await page.screenshot({ path: path.join(output, "gate2-hero-off.png") });
await page.getByRole("button", { name: "Sound off" }).click();
await page.getByRole("button", { name: "Sound on" }).waitFor({ timeout: 10000 });
await page.waitForTimeout(3600);
const heroOnPath = path.join(output, "gate2-hero-on.png");
const heroDeepPath = path.join(output, "gate2-hero-deep.png");
const thinkingOnPath = path.join(output, "gate2-thinking-on.png");
const personOnPath = path.join(output, "gate2-person-on.png");
await page.screenshot({ path: heroOnPath });
const onResponse = await page.evaluate(() => ({
  pressure: Number(document.querySelector(".sonic-environment")?.style.getPropertyValue("--sonic-pressure")),
  core: Number(document.documentElement.style.getPropertyValue("--sonic-core-light")),
}));

let bestPressure = -1;
let deepCore = 0;
let peakCore = 0;
const samplingStart = Date.now();
while (Date.now() - samplingStart < 19000) {
  const { pressure, core } = await page.evaluate(() => ({
    pressure: Number(document.querySelector(".sonic-environment")?.style.getPropertyValue("--sonic-pressure")),
    core: Number(document.documentElement.style.getPropertyValue("--sonic-core-light")),
  }));
  peakCore = Math.max(peakCore, core);
  if (pressure > bestPressure + 0.015) {
    bestPressure = pressure;
    deepCore = core;
    await page.screenshot({ path: heroDeepPath });
  }
  await page.waitForTimeout(200);
}
if (bestPressure <= onResponse.pressure + 0.05 || deepCore <= onResponse.core || peakCore > 0.63) {
  throw new Error(`Hero hierarchy failed: ON pressure/core ${onResponse.pressure.toFixed(4)}/${onResponse.core.toFixed(4)}, DEEP pressure/core ${bestPressure.toFixed(4)}/${deepCore.toFixed(4)}, peak Core ${peakCore.toFixed(4)}`);
}
const labels = Buffer.from(`<svg width="2880" height="48" xmlns="http://www.w3.org/2000/svg"><rect width="2880" height="48" fill="#0c0715"/><text x="32" y="31" fill="#f4e9ff" font-family="Arial,sans-serif" font-size="20" letter-spacing="3">HERO ON</text><text x="1472" y="31" fill="#f4e9ff" font-family="Arial,sans-serif" font-size="20" letter-spacing="3">HERO DEEP</text></svg>`);
await sharp({ create: { width: 2880, height: 948, channels: 3, background: "#0c0715" } })
  .composite([{ input: labels, top: 0, left: 0 }, { input: heroOnPath, top: 48, left: 0 }, { input: heroDeepPath, top: 48, left: 1440 }])
  .png()
  .toFile(path.join(output, "gate2-hero-on-vs-deep.png"));
await visit(page, "#philosophy-heading", "thinking");
await page.waitForTimeout(1800);
await page.screenshot({ path: thinkingOnPath });
await visit(page, "#about-heading", "person");
await page.waitForTimeout(1800);
await page.screenshot({ path: personOnPath });
const sectionLabels = Buffer.from(`<svg width="4320" height="48" xmlns="http://www.w3.org/2000/svg"><rect width="4320" height="48" fill="#0c0715"/><text x="32" y="31" fill="#f4e9ff" font-family="Arial,sans-serif" font-size="20" letter-spacing="3">HERO</text><text x="1472" y="31" fill="#f4e9ff" font-family="Arial,sans-serif" font-size="20" letter-spacing="3">THINKING</text><text x="2912" y="31" fill="#f4e9ff" font-family="Arial,sans-serif" font-size="20" letter-spacing="3">PERSON</text></svg>`);
await sharp({ create: { width: 4320, height: 948, channels: 3, background: "#0c0715" } })
  .composite([{ input: sectionLabels, top: 0, left: 0 }, { input: heroOnPath, top: 48, left: 0 }, { input: thinkingOnPath, top: 48, left: 1440 }, { input: personOnPath, top: 48, left: 2880 }])
  .png()
  .toFile(path.join(output, "gate2-section-energy-comparison.png"));
await page.getByRole("button", { name: "Sound on" }).click();
await desktop.close();

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const mobilePage = await mobile.newPage();
await ready(mobilePage);
await mobilePage.getByRole("button", { name: "Sound off" }).click();
await mobilePage.getByRole("button", { name: "Sound on" }).waitFor({ timeout: 10000 });
await mobilePage.waitForTimeout(5000);
await mobilePage.screenshot({ path: path.join(output, "gate2-mobile-hero-on.png") });
await mobile.close();

const reduced = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
const reducedPage = await reduced.newPage();
await ready(reducedPage);
await reducedPage.getByRole("button", { name: "Sound off" }).click();
await reducedPage.getByRole("button", { name: "Sound on" }).waitFor({ timeout: 10000 });
await reducedPage.waitForTimeout(4500);
await reducedPage.screenshot({ path: path.join(output, "gate2-reduced-motion.png") });
await reduced.close();

const videoDir = await mkdtemp(path.join(os.tmpdir(), "lumora-gate2-video-"));
const videoContext = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  recordVideo: { dir: videoDir, size: { width: 1440, height: 900 } },
});
const videoPage = await videoContext.newPage();
const videoStart = Date.now();
await ready(videoPage);
await videoPage.waitForTimeout(1600);
const reviewStart = Date.now();
await videoPage.getByRole("button", { name: "Sound off" }).click();
await videoPage.getByRole("button", { name: "Sound on" }).waitFor({ timeout: 10000 });
// Let the actual WAV reach its deeper passage before the section tour.
await videoPage.waitForTimeout(19000);
await videoPage.waitForTimeout(3600);
for (const [selector, section, hold] of [
  ["section#works", "work", 4000],
  ["section#philosophy", "thinking", 4500],
  ["section#about", "person", 4500],
]) {
  await videoPage.locator(selector).first().evaluate((node) => node.scrollIntoView({ block: "center", behavior: "smooth" }));
  await videoPage.waitForFunction((name) => document.querySelector(".sonic-environment")?.getAttribute("data-section") === name, section, { timeout: 8000 });
  await videoPage.waitForTimeout(hold);
}
const reviewEnd = Date.now();
const recordedVideo = videoPage.video();
await videoContext.close();
if (!recordedVideo) throw new Error("Gate 2 review recording unavailable");
execFileSync("ffmpeg", [
  "-y", "-loglevel", "error",
  "-ss", String((reviewStart - videoStart) / 1000),
  "-i", await recordedVideo.path(),
  "-t", String((reviewEnd - reviewStart) / 1000),
  "-c:v", "libx264", "-pix_fmt", "yuv420p",
  path.join(output, "gate2-section-modulation-review.mp4"),
]);
await browser.close();

process.stdout.write(`${output}\nHero ON pressure/Core: ${onResponse.pressure.toFixed(4)}/${onResponse.core.toFixed(4)}\nHero DEEP pressure/Core: ${bestPressure.toFixed(4)}/${deepCore.toFixed(4)}\nPeak observed Core: ${peakCore.toFixed(4)}\nReview recording: ${((reviewEnd - reviewStart) / 1000).toFixed(2)}s\n`);
