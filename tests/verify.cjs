const fs=require('fs'),vm=require('vm'),assert=require('assert');
const elements={};let downloads=[];
function context(){return {fillStyle:'',fillRect(){},createLinearGradient(){return {addColorStop(){}}},beginPath(){},arc(){},fill(){},moveTo(){},lineTo(){},stroke(){},drawImage(){},fillText(){},getImageData(x,y,w,h){const data=new Uint8ClampedArray(w*h*4);for(let i=0;i<w*h;i++){data[i*4]=data[i*4+1]=data[i*4+2]=i%2?255:0;data[i*4+3]=255}return {data}}}}
function el(id){return elements[id]??=( {value:({density:180,contrast:1.2,brightness:1.1,palette:'original',charset:'classic'})[id]||0,checked:false,style:{},classList:{toggle(){},add(){},remove(){}},addEventListener(){},getContext:context,click(){},width:960,height:600,toBlob(fn){fn(new Blob(['test']))}})}
const sandbox={document:{getElementById:el,createElement:t=>t==='canvas'?{width:960,height:600,getContext:context}: {click(){downloads.push(this.download)}},addEventListener(){}},window:{addEventListener(){}},navigator:{},requestAnimationFrame(){},URL:{createObjectURL(){return 'blob:test'},revokeObjectURL(){}},Blob,setTimeout(){},Uint8Array,console};vm.createContext(sandbox);vm.runInContext(fs.readFileSync('app.js','utf8'),sandbox);
assert.match(elements.stats.textContent,/180 × 56/);assert(vm.runInContext('frame.text.includes("@")',sandbox));assert(vm.runInContext('frame.text.includes(" ")',sandbox));
elements.density.value=500;elements.density.oninput();assert.match(elements.stats.textContent,/500 × 156/);
elements.palette.value='green';elements.palette.oninput();elements.invert.checked=true;elements.invert.oninput();assert(vm.runInContext('frame.text[0]==="@"',sandbox));
elements.txt.onclick();assert.deepEqual(downloads,['caractere.txt']);elements.streetTab.onclick();assert.equal(elements.streetPanel.hidden,false);elements.reset.onclick();assert.equal(elements.density.value,180);
console.log('PASS: renderer dimensions, black/white mapping, density, palette, inversion, TXT, tabs, reset. Browser media and capture require manual verification.');

