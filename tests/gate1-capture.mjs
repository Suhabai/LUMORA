import { chromium } from "@playwright/test";
import { mkdir, mkdtemp } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const output = path.resolve("artifacts/gate1");
const baseURL = process.env.GATE1_BASE_URL || "http://localhost:3000";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: process.platform === "win32" ? "msedge" : undefined });

async function ready(page) {
  await page.goto(`${baseURL}/`);
  await page.locator(".experience-loader").waitFor({ state: "hidden", timeout: 12000 });
}

const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await desktop.newPage();
await ready(page);
await page.waitForTimeout(1600);
await page.screenshot({ path: path.join(output, "gate1-sound-off-desktop.png") });

await page.getByRole("button", { name: "Sound off" }).click();
await page.getByRole("button", { name: "Sound on" }).waitFor({ timeout: 10000 });
await page.waitForTimeout(3600);
await page.screenshot({ path: path.join(output, "gate1-sound-on-desktop.png") });
await page.screenshot({
  path: path.join(output, "gate1-light-detail.png"),
  clip: { x: 0, y: 225, width: 350, height: 450 },
});

let bestPressure = -1;
const deepPath = path.join(output, "gate1-deep-light-desktop.png");
const samplingStart = Date.now();
while (Date.now() - samplingStart < 18000) {
  const pressure = await page.locator(".sonic-environment").evaluate((node) =>
    Number(node.style.getPropertyValue("--sonic-pressure"))
  );
  if (pressure > bestPressure + 0.015) {
    bestPressure = pressure;
    await page.screenshot({ path: deepPath });
  }
  await page.waitForTimeout(200);
}

await page.getByRole("button", { name: "Sound on" }).click();
await desktop.close();

const coreContext = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
const corePage = await coreContext.newPage();
await ready(corePage);
await corePage.waitForTimeout(1600);
const coreClip = { x: 550, y: 320, width: 340, height: 220 };
const coreOff = await corePage.screenshot({ clip: coreClip });
await corePage.getByRole("button", { name: "Sound off" }).click();
await corePage.getByRole("button", { name: "Sound on" }).waitFor({ timeout: 10000 });
let coreOn = await corePage.screenshot({ clip: coreClip });
let peakCoreLight = 0;
const coreStart = Date.now();
while (Date.now() - coreStart < 14000) {
  const light = await corePage.evaluate(() => Number(document.documentElement.style.getPropertyValue("--sonic-core-light")));
  if (light > peakCoreLight + 0.015) {
    peakCoreLight = light;
    coreOn = await corePage.screenshot({ clip: coreClip });
  }
  await corePage.waitForTimeout(250);
}
const coreLabels = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="680" height="34"><rect width="680" height="34" fill="#07070a"/><text x="14" y="23" fill="#b8afc6" font-size="12" font-family="Arial">SOUND OFF</text><text x="354" y="23" fill="#b8afc6" font-size="12" font-family="Arial">SOUND ON</text></svg>');
await sharp({ create: { width: 680, height: 254, channels: 4, background: "#07070a" } })
  .composite([{ input: coreLabels, left: 0, top: 0 }, { input: coreOff, left: 0, top: 34 }, { input: coreOn, left: 340, top: 34 }])
  .png()
  .toFile(path.join(output, "gate1-living-core-response.png"));
await coreContext.close();

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const mobilePage = await mobile.newPage();
await ready(mobilePage);
await mobilePage.getByRole("button", { name: "Sound off" }).click();
await mobilePage.getByRole("button", { name: "Sound on" }).waitFor({ timeout: 10000 });
await mobilePage.waitForTimeout(7500);
await mobilePage.screenshot({ path: path.join(output, "gate1-sound-on-mobile.png") });
await mobile.close();

const reduced = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
const reducedPage = await reduced.newPage();
await ready(reducedPage);
await reducedPage.getByRole("button", { name: "Sound off" }).click();
await reducedPage.getByRole("button", { name: "Sound on" }).waitFor({ timeout: 10000 });
await reducedPage.waitForTimeout(7500);
await reducedPage.screenshot({ path: path.join(output, "gate1-reduced-motion.png") });
await reduced.close();

const videoDir = await mkdtemp(path.join(os.tmpdir(), "lumora-gate1-video-"));
const videoContext = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  recordVideo: { dir: videoDir, size: { width: 1440, height: 900 } },
});
const videoPage = await videoContext.newPage();
const videoStart = Date.now();
await ready(videoPage);
await videoPage.waitForTimeout(1600);
const reviewStart = Date.now();
await videoPage.waitForTimeout(900);
await videoPage.getByRole("button", { name: "Sound off" }).click();
await videoPage.getByRole("button", { name: "Sound on" }).waitFor({ timeout: 10000 });
await videoPage.waitForTimeout(17500);
await videoPage.getByRole("button", { name: "Sound on" }).click();
await videoPage.waitForTimeout(900);
const reviewEnd = Date.now();
const recordedVideo = videoPage.video();
await videoContext.close();
if (!recordedVideo) throw new Error("Gate 1 review recording unavailable");
execFileSync("ffmpeg", [
  "-y", "-loglevel", "error",
  "-ss", String((reviewStart - videoStart) / 1000),
  "-i", await recordedVideo.path(),
  "-t", String(Math.min(20, (reviewEnd - reviewStart) / 1000)),
  "-c:v", "libx264", "-pix_fmt", "yuv420p",
  path.join(output, "gate1-production-reactive-review.mp4"),
]);
await browser.close();

process.stdout.write(`${output}\nPeak observed pressure: ${bestPressure.toFixed(4)}\nReview recording: ${((reviewEnd - reviewStart) / 1000).toFixed(2)}s (MP4 capped at 20s)\n`);
