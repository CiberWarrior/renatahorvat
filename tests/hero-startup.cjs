const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('dist/index.html','utf8');
const scripts=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
const boot=scripts.find(s=>s.includes('document.currentScript.parentElement.style.visibility'));
const animate=scripts.find(s=>s.includes("const root = document.querySelector('.hero-machine')"));
assert(boot&&animate,'Both inline scripts survive the production build');
function element(){const classes=new Set();return{style:{removeProperty(k){delete this[k]}},dataset:{},attrs:{},children:[],querySelectorAll(){return[]},classList:{add:k=>classes.add(k),remove:k=>classes.delete(k),contains:k=>classes.has(k)},setAttribute(k,v){this.attrs[k]=v},append(...x){this.children.push(...x)},replaceChildren(){this.children=[]}}}
for(const [width,reduced] of [[375,false],[768,false],[834,false],[1024,false],[1440,false],[1440,true]]){
 const root=element(),scene=element(),parts=Array.from({length:5},element),stars=element(),inside=element(),inputNodes=Array.from({length:4},element),inputGroup=element(),canopy=element(),ribs=element(),umbrella=element();
 inputGroup.querySelectorAll=()=>inputNodes;
 umbrella.dataset.phase='0';umbrella.querySelector=s=>s==='.canopy'?canopy:ribs;
 const nodes={'#rh-scene':scene,'#rh-particle-route':{getTotalLength:()=>100,getPointAtLength:n=>({x:n,y:n})},'#rh-stars':stars,'#rh-contained-stars':inside,'.input-ideas':inputGroup,'.web-outline':element(),'.gauge-pointer':element(),'.outlet-echo':element()};
 root.querySelector=s=>nodes[s];root.querySelectorAll=s=>s==='#rh-web .part'?parts:s==='.umbrella'?[umbrella]:s==='.arrival-echo'?Array.from({length:5},element):[];
 let observer,frame;
 const context={document:{currentScript:{parentElement:root},querySelector:()=>root,createElementNS:()=>element(),addEventListener(){},hidden:false},matchMedia:q=>({matches:q.includes('min-width')?width>=768&&!reduced:q.includes('max-width')?width<=767:reduced,addEventListener(){}}),requestAnimationFrame:cb=>(frame=cb,1),cancelAnimationFrame(){frame=null},IntersectionObserver:class{constructor(cb){observer=cb}observe(){}disconnect(){}}};
 vm.createContext(context);vm.runInContext(boot,context);
 assert.equal(root.style.visibility,width>=768&&!reduced?'hidden':undefined);
 vm.runInContext(animate,context);
 assert.equal(root.style.visibility,undefined,'Initialization releases the initial paint guard');
 if(width>=768&&!reduced){assert(scene.classList.contains('prepared'));assert(root.classList.contains('input-ready'));assert(inputNodes.every(node=>node.style.opacity==='1'),'Four intake cards are visible before motion');assert(parts.every(p=>!p.classList.contains('show')));assert(canopy.attrs.d.startsWith('M-5 '),'Umbrella initially closed');observer([{isIntersecting:true}]);assert(scene.classList.contains('active'));assert.equal(inside.children.length,15,'Stars start inside the masked pipe');for(let t=0;t<21000&&frame;t+=50){const cb=frame;frame=null;cb(t)}}
 assert(scene.classList.contains('finished'));assert(parts.every(p=>p.classList.contains('show')));assert.equal(stars.children.length,0);assert.equal(inside.children.length,0);assert(inputNodes.every(node=>node.style.opacity==='0'),'Input cards disappear into the funnel');assert(!root.classList.contains('input-ready'));assert(canopy.attrs.d.startsWith('M-35 '));
 console.log(`${width}px reduced=${reduced}: startup and final-state logic passed`);
}
assert(/role="img"[^>]*aria-labelledby="rh-title"/.test(html));
assert(html.includes('Ideas go in, a website comes out.'));
assert.equal((html.match(/class="input-idea(?:\s|")/g)||[]).length,4,'The production hero includes two documents and two image cards');
assert(html.includes('mask="url(#rh-tube-interior)"'),'Stars use the pipe interior mask');
assert(html.includes('const idea = data;')&&html.includes('render(web);'),'Monitor displays the approved code details');
assert(html.includes('M197 62 H223 L231 59 L238 64 L247 48 L254 75 L262 62 H300'),'Monitor uses one ECG peak');
console.log('Built HTML includes caption and accessible SVG title. These checks do not validate browser layout or screenshots.');
