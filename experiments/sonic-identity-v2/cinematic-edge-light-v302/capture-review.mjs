import { strict as assert } from 'node:assert';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { chromium } from 'playwright';

const root = fileURLToPath(new URL('.', import.meta.url));
const types = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.wav':'audio/wav' };
const server = createServer(async (request, response) => {
  const relative = decodeURIComponent(new URL(request.url,'http://127.0.0.1').pathname).replace(/^[/\\]+/,'');
  const target = resolve(root, relative || 'reactive-ui-demo.html');
  if (!target.startsWith(root)) return response.writeHead(403).end();
  try { response.writeHead(200, {'content-type':types[extname(target)] ?? 'application/octet-stream'}).end(await readFile(target)); }
  catch { response.writeHead(404).end(); }
});
await new Promise(done => server.listen(4178,'127.0.0.1',done));
const browser = await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const base = 'http://127.0.0.1:4178/reactive-ui-demo.html';
const errors = [];
let wavStatus = 0;
const shot = name => join(root,name);

async function openPage(options={}) {
  const context = await browser.newContext({viewport:options.viewport ?? {width:1440,height:900},reducedMotion:options.reduced?'reduce':'no-preference'});
  const page = await context.newPage();
  page.on('pageerror',error => errors.push(error.message));
  page.on('response',response => { if(response.url().endsWith('/assets/dark-calm-still.wav')) wavStatus=response.status(); });
  await page.goto(base,{waitUntil:'networkidle'});
  return {context,page};
}
async function values(page) {
  return page.evaluate(() => {
    const bins = new Uint8Array(reactiveLight.analyser.frequencyBinCount);
    reactiveLight.analyser.getByteFrequencyData(bins);
    const s = getComputedStyle(document.documentElement);
    const css = name => Number(s.getPropertyValue('--sonic-'+name));
    return {audioTime:reactiveLight.audio.currentTime,peak:Math.max(...bins),left:css('left'),right:css('right'),pressure:css('pressure'),tremor:css('tremor'),sceneX:css('scene-x'),shiverCount:reactiveLight.shiverCount,shiverPeak:reactiveLight.shiverPeak};
  });
}
async function seekDeep(page) {
  const before=await page.evaluate(() => reactiveLight.shiverCount);
  await page.evaluate(() => { reactiveLight.audio.currentTime=39.5; });
  const samples=[];
  for(let index=0;index<65;index+=1) {
    await page.waitForTimeout(100);
    if(index%5===0) samples.push(await page.evaluate(() => ({t:reactiveLight.audio.currentTime,p:reactiveLight.values.pressure,armed:reactiveLight.shiverArmed,count:reactiveLight.shiverCount})));
    if(await page.evaluate(count => reactiveLight.shiverCount>count,before)) break;
  }
  console.log('DEEP_SAMPLES',JSON.stringify(samples));
  assert(await page.evaluate(count => reactiveLight.shiverCount>count,before),'real passage must trigger scene shiver');
  return before;
}
async function recordViewport(page,durationMs) {
  const captured=[];
  const start=performance.now();
  while(performance.now()-start<durationMs) {
    const frameStart=performance.now();
    captured.push(await page.screenshot({type:'jpeg',quality:92}));
    const remaining=1000/12-(performance.now()-frameStart);
    if(remaining>0) await new Promise(done=>setTimeout(done,remaining));
  }
  const elapsedSeconds=(performance.now()-start)/1000;
  const actualRate=captured.length/elapsedSeconds;
  const ffmpeg='C:/Users/almas/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0-full_build/bin/ffmpeg.exe';
  const process=spawn(ffmpeg,[
    '-y','-loglevel','error','-f','image2pipe','-framerate',actualRate.toFixed(3),'-vcodec','mjpeg','-i','pipe:0',
    '-i',join(root,'assets/dark-calm-still.wav'),
    '-filter_complex','[1:a]atrim=start=0:end=30,asetpts=PTS-STARTPTS[a0];[1:a]atrim=start=39.5:end=49.5,asetpts=PTS-STARTPTS[a1];[a0][a1]concat=n=2:v=0:a=1[a]',
    '-map','0:v','-map','[a]','-c:v','libx264','-preset','medium','-crf','16','-pix_fmt','yuv420p',
    '-color_primaries','bt709','-color_trc','bt709','-colorspace','bt709',
    '-c:a','aac','-b:a','160k','-shortest','-movflags','+faststart',shot('founder-review-v302.mp4')
  ],{stdio:['pipe','ignore','pipe']});
  let stderr='';
  process.stderr.on('data',chunk=>{stderr+=chunk.toString();});
  for(const frame of captured) if(!process.stdin.write(frame)) await once(process.stdin,'drain');
  process.stdin.end();
  const [code]=await once(process,'exit');
  assert.equal(code,0,stderr);
  return {frames:captured.length,seconds:elapsedSeconds,frameRate:actualRate};
}

try {
  const desktop=await openPage();
  await desktop.page.screenshot({path:shot('off-desktop.png'),fullPage:true});
  await desktop.page.locator('#sound-toggle').click();
  await desktop.page.waitForFunction(() => reactiveLight.enabled && reactiveLight.context.state==='running');
  await desktop.page.evaluate(() => { reactiveLight.audio.currentTime=2; });
  await desktop.page.waitForTimeout(1200);
  await desktop.page.screenshot({path:shot('quiet-desktop.png'),fullPage:true});
  await desktop.page.evaluate(() => { reactiveLight.audio.currentTime=23; });
  await desktop.page.waitForTimeout(900);
  await desktop.page.screenshot({path:shot('active-desktop.png'),fullPage:true});
  await desktop.page.locator('.hero').screenshot({path:shot('hero-cinematic.png')});
  await desktop.page.evaluate(() => { reactiveLight.audio.currentTime=37; });
  await desktop.page.waitForTimeout(2300);
  await seekDeep(desktop.page);
  await desktop.page.screenshot({path:shot('deep-shiver-desktop.png')});
  await desktop.page.waitForTimeout(1450);
  const deep25=await values(desktop.page);
  await desktop.page.screenshot({path:shot('deep-desktop.png'),fullPage:true});
  await desktop.page.locator('.nexora-section').screenshot({path:shot('nexora-deep.png')});
  await desktop.page.locator('.threshold-section').screenshot({path:shot('threshold-settle.png')});
  await desktop.page.locator('.living-light-left').screenshot({path:shot('left-light-cinematic-detail.png')});
  await desktop.page.locator('.living-light-right').screenshot({path:shot('right-light-cinematic-detail.png')});
  await desktop.page.setViewportSize({width:1440,height:900});
  await desktop.page.evaluate(() => scrollTo(0,0));
  assert(deep25.peak>0 && deep25.left>0 && deep25.right>0 && deep25.pressure>0 && deep25.shiverCount>0 && deep25.shiverPeak>0);
  await desktop.context.close();

  const mobile=await openPage({viewport:{width:390,height:844}});
  await mobile.page.locator('#sound-toggle').click();
  await mobile.page.evaluate(() => { reactiveLight.audio.currentTime=39.5; });
  await mobile.page.waitForTimeout(2200);
  await mobile.page.screenshot({path:shot('mobile-deep.png'),fullPage:true});
  const mobilePeak=await mobile.page.evaluate(() => reactiveLight.shiverPeak);
  assert(mobilePeak<=1);
  assert.equal(await mobile.page.evaluate(() => document.documentElement.scrollWidth<=innerWidth),true);
  await mobile.context.close();

  const reduced=await openPage({reduced:true});
  await reduced.page.locator('#sound-toggle').click();
  await reduced.page.waitForTimeout(3800);
  await reduced.page.screenshot({path:shot('reduced-motion.png'),fullPage:true});
  assert.equal(await reduced.page.locator('.hero-environment').evaluate(node=>getComputedStyle(node).transform),'none');
  assert.equal(await reduced.page.locator('.living-light-left').evaluate(node=>getComputedStyle(node).transform),'none');
  await reduced.context.close();

  const review=await openPage({viewport:{width:1180,height:780}});
  review.page.setDefaultTimeout(45000);
  const recording=recordViewport(review.page,40500);
  await review.page.locator('#auto-review').click();
  await review.page.waitForFunction(() => reactiveLight.enabled && !reactiveLight.reactive);
  const phases=['off'];
  await review.page.waitForFunction(() => reactiveLight.reactive); phases.push('on');
  await review.page.waitForFunction(() => !reactiveLight.reactive); phases.push('off');
  await review.page.waitForFunction(() => reactiveLight.reactive); phases.push('on');
  const shiverBefore=await review.page.evaluate(() => reactiveLight.shiverCount);
  await review.page.waitForFunction(() => reactiveLight.audio.currentTime>39.5); phases.push('real deep passage');
  await review.page.waitForFunction(count => reactiveLight.shiverCount>count,shiverBefore,{timeout:7000}); phases.push('real scene shiver');
  await review.page.waitForFunction(() => document.querySelector('#auto-review').getAttribute('aria-pressed')==='false'); phases.push('settle');
  const videoInfo=await recording;
  await review.context.close();
  assert.equal(wavStatus,200);
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({wavStatus,deep25,mobilePeak,phases,videoInfo,errors,mobileOverflow:false,reducedTransform:'none'}));
} finally {
  await browser.close();
  await new Promise(done=>server.close(done));
}
