import sharp from 'sharp';

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const mCorePath = 'M258,50L328,50L328,950L258,950ZM664,50L734,50L734,922L656,950L664,950ZM328,50L540,411L664,50Z';
const wordmarkPath = 'M80,100 L150,100 L150,730 L338,730 L338,800 L80,800 Z M610,100 L680,100 L680,700 Q680,795 775,795 L935,795 Q1035,795 1035,700 L1035,100 L1105,100 L1105,700 Q1105,830 1010,830 L775,830 Q610,830 610,700 Z M1130,100 L1200,100 L1200,800 L1130,800 Z M1200,100 L1209,100 L1405,370 L1385,370 Z M1405,370 L1428,370 L1598,100 L1528,100 Z M1528,100 L1598,100 L1598,790 L1524,800 L1528,800 Z M2040,100 A227,307 0 1,1 2040,800 A227,307 0 1,1 2040,100 Z M2040,271 A193,263 0 1,0 2040,629 A193,263 0 1,0 2040,271 Z M2330,100 L2400,100 L2400,800 L2330,800 Z M2400,100 L2840,100 A157,167 0 0,1 2585,478 L2400,478 Z M2435,135 L2775,135 A122,132 0 0,1 2580,442 L2435,442 Z M2400,478 L2435,478 L2690,800 L2390,800 Z M3136,100 L3144,100 L2994,800 L2934,800 Z M3136,100 L3144,100 L3346,800 L3286,800 Z M3043,530 L3232,530 L3232,580 L3043,580 Z';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}">
  <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="#000000"/>
  <g transform="translate(${OG_WIDTH/2 - 30}, ${OG_HEIGHT/2 - 80})">
    <svg viewBox="0 0 1000 1000" width="60" height="60" fill="#ffffff" overflow="visible">
      <path d="${mCorePath}"/>
    </svg>
  </g>
  <g transform="translate(${OG_WIDTH/2 - 180}, ${OG_HEIGHT/2 + 10})">
    <svg viewBox="0 0 3600 1000" width="360" height="100" fill="none" overflow="visible">
      <path fill="#ffffff" fill-rule="evenodd" d="${wordmarkPath}"/>
    </svg>
  </g>
</svg>`;

const outputPath = process.argv[2] || 'app/opengraph-image.png';

await sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath);

console.log(`OG image generated: ${outputPath}`);
