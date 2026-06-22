const fs = require('fs');
let js = fs.readFileSync('C:/Users/kouki/ozononix-push/assets/index-rAnS1tTD.js', 'utf8');

const replacements = [
  ['back-BsHlmpa_.png', 'back-BsHlmpa_.webp'],
  ['imgP%20(1)-CaF3QbXN.png', 'imgP%20(1)-CaF3QbXN.webp'],
  ['imgP%20(2)-CQRoVkaC.png', 'imgP%20(2)-CQRoVkaC.webp'],
  ['img7-C76jvrh_.png', 'img7-C76jvrh_.webp'],
  ['OZONONIXlogo-BUBLBpyW.png', 'OZONONIXlogo-BUBLBpyW.webp'],
  ['main2-PloiR98Y.jpg', 'main2-PloiR98Y.webp'],
  ['main3-nOypc745.png', 'main3-nOypc745.webp'],
  ['main4-CqEduks2.jpg', 'main4-CqEduks2.webp'],
  ['img8(1)-5B_bvHdV.jpg', 'img8(1)-5B_bvHdV.webp'],
  ['img8(2)-B7yo_xgJ.jpg', 'img8(2)-B7yo_xgJ.webp'],
  ['img8(3)-DVBLgJQj.jpg', 'img8(3)-DVBLgJQj.webp'],
  ['img8(4)-RMTJ8EKJ.jpg', 'img8(4)-RMTJ8EKJ.webp'],
];

let changed = 0;
for (const [from, to] of replacements) {
  const count = js.split(from).length - 1;
  if (count > 0) {
    js = js.split(from).join(to);
    console.log('OK: ' + from + ' -> ' + to + ' (' + count + 'x)');
    changed += count;
  } else {
    console.log('NOT FOUND: ' + from);
  }
}

fs.writeFileSync('C:/Users/kouki/ozononix-push/assets/index-rAnS1tTD.js', js);
console.log('Done. Total:', changed, 'replacements');
