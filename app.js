const IMG={
 "1": "images/1.jpg",
 "2": "images/2.jpg",
 "3": "images/3.jpg",
 "4": "images/4.jpg",
 "5": "images/5.jpg",
 "6": "images/6.jpg",
 "7": "images/7.jpg",
 "8": "images/8.jpg",
 "9": "images/9.jpg",
 "10": "images/10.jpg",
 "11": "images/11.jpg",
 "12": "images/12.jpg",
 "13": "images/13.jpg",
 "14": "images/14.jpg",
 "15": "images/15.jpg",
 "16": "images/16.jpg",
 "17": "images/17.jpg",
 "18": "images/18.jpg",
 "19": "images/19.jpg",
 "20": "images/20.jpg"
};
const CATS=[
  {name:"Cà phê Signature",kanji:"珈琲",cols:4,items:[
    [1,"Cà phê ngụm béo"],[2,"Latte foam coco-cheese"],[3,"Cold nguyên bản"],[4,"Cold sakura"]]},
  {name:"Cà phê truyền thống",kanji:"喫茶",cols:3,items:[
    [5,"Đen"],[6,"Nâu"],[7,"Bạc sỉu"],[8,"Cà phê muối"],[9,"Americano"],[10,"Coffee Latte"]]},
  {name:"Matcha",kanji:"抹茶",cols:3,items:[
    [11,"Matcha coconut gelato"],[12,"Matcha ngô quế hoa"],[13,"Matcha cốm nếp"],
    [14,"Matcha caramel foam coco-cheese"],[15,"Matcha latte"]]},
  {name:"Nước ép",kanji:"果汁",cols:2,few:true,items:[
    [16,"Dứa mít lô hội"],[17,"Cam quýt hoa nhài"]]},
  {name:"Trà",kanji:"茶",cols:3,few:true,items:[
    [18,"Trà vải sakura"],[19,"Trà mơ hoa lạc thần"],[20,"Hồng trà sữa giao hương"]]}
];
const TABS=[{name:"Tất cả",kanji:"品書",all:true},...CATS];
let cur=0;
const $=id=>document.getElementById(id);
const pad=n=>String(n).padStart(2,"0");
const place=(i,n,cols)=>{const r=n%cols;return(r&&i===n-r)?`grid-column:${cols-r+1}/span 2;`:""};
/* tab Tất cả: lưới 4 cột; 5 món = 3+2, 6 món = 3+3, hàng cuối luôn căn giữa */
const ROWS={2:[2],3:[3],4:[4],5:[3,2],6:[3,3]};
const placeAll=(i,n)=>{let a=0;for(const r of ROWS[n]){if(i===a)return`grid-column:${5-r}/span 2;`;a+=r}return""};
const card=([n,name],k,st="")=>`
  <div class="card" style="${st}animation-delay:${k*45}ms">
    <div class="photo"><div class="frame"><img alt="${name}" src="${IMG[n]}"></div></div>
    <div class="num">${pad(n)}</div>
    <div class="name"><span>${name.replace(/(\S+-\S+)/g,'<b style="font-weight:inherit;white-space:nowrap">$1</b>')}</span></div>
  </div>`;

function renderNav(){
  $("nav").innerHTML=TABS.map((c,i)=>`
    <button class="tab ${i===cur?"on":""}" data-i="${i}">
      <span class="no">${pad(i)}</span><span class="nm">${c.name}</span><span class="dot"></span>
    </button>`).join("");
}
function render(){
  const t=TABS[cur],st=$("stage");
  $("eyebrow").textContent=t.all?"":`${pad(cur)} / ${pad(CATS.length)}`;$("eyebrow").style.display=t.all?"none":"";
  $("title").textContent=t.all?"Tất cả đồ uống":t.name;
  $("kanji").innerHTML=[...t.kanji].map(k=>`<span>${k}</span>`).join("");
  st.scrollTop=0;
  st.className="stage scroll"+(t.all?"":" fit");
  const g=document.createElement("div");
  if(t.all){
    g.className="grid all";g.style.setProperty("--cols",4);
    let k=0;
    g.innerHTML=CATS.map(c=>`<div class="sec"><span>${c.name}</span><i></i><b>${c.kanji}</b></div>`+c.items.map((it,i)=>card(it,k++,placeAll(i,c.items.length))).join("")).join("");
  }else{
    g.className="grid all";g.style.setProperty("--cols",4);
    g.innerHTML=t.items.map((it,k)=>card(it,k,placeAll(k,t.items.length))).join("");
  }
  g.id="grid";st.replaceChildren(g);
}
$("nav").addEventListener("click",e=>{
  const t=e.target.closest(".tab");if(!t)return;
  cur=+t.dataset.i;renderNav();render();
});
["gesturestart","gesturechange"].forEach(ev=>document.addEventListener(ev,e=>e.preventDefault()));
renderNav();render();
