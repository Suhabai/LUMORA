import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {chromium} from 'playwright';
const root=fileURLToPath(new URL('.',import.meta.url));
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.wav':'audio/wav'};
const server=createServer(async(req,res)=>{const path=resolve(root,decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname).replace(/^[/\\]+/,''));try{res.writeHead(200,{'content-type':types[extname(path)]??'application/octet-stream'}).end(await readFile(path));}catch{res.writeHead(404).end();}});
await new Promise(done=>server.listen(4182,'127.0.0.1',done));
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
try {
 const page=await browser.newPage();
 await page.goto('http://127.0.0.1:4182/reactive-ui-demo.html');
 await page.locator('#sound-toggle').click();
 const samples=[];
 for(const t of [0,2,4,8,12,16,20,23,27,30,34,37,39.5,40.5,41.5,43,46,49,53,57]){
   await page.evaluate(t=>{reactiveLight.audio.currentTime=t;},t);
   await page.waitForTimeout(650);
   samples.push(await page.evaluate(()=>({t:+reactiveLight.audio.currentTime.toFixed(1),low:+reactiveLight.band(1,12).toFixed(3),mid:+reactiveLight.band(12,54).toFixed(3),high:+reactiveLight.band(54,140).toFixed(3),pressure:+reactiveLight.values.pressure.toFixed(3),count:reactiveLight.shiverCount})));
 }
 console.log(JSON.stringify(samples));
} finally {await browser.close();await new Promise(done=>server.close(done));}
