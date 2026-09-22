const P=[{"n":"১৫ টাকার পাতা নুডুলস","p":12.23,"c":180,"unit":"কার্টুন","u":180,"uc":1,"cat":"নুডুলস"},{"n":"রেডি বাইট","p":8.12,"c":150,"unit":"কার্টুন","u":150,"uc":1,"cat":"নুডুলস"},{"n":"4p ছোট","p":43.12,"c":24,"unit":"কার্টুন","u":24,"uc":1,"cat":"নুডুলস"},{"n":"8p ইজি","p":128,"c":12,"unit":"কার্টুন","u":12,"uc":1,"cat":"নুডুলস"},{"n":"8p চিকেন","p":143,"c":12,"unit":"কার্টুন","u":12,"uc":1,"cat":"নুডুলস"},{"n":"8p রামেন","p":175,"c":12,"unit":"কার্টুন","u":12,"uc":1,"cat":"নুডুলস"},{"n":"২০p ইজি","p":282,"c":6,"unit":"কার্টুন","u":6,"uc":1,"cat":"নুডুলস"},{"n":"কুক নুডুলস","p":60,"c":6,"unit":"কার্টুন","u":6,"uc":1,"cat":"নুডুলস"},{"n":"কাপ নুডুলস","p":28.5,"c":48,"unit":"কার্টুন","u":48,"uc":1,"cat":"নুডুলস"},{"n":"স্টিক নুডুলস","p":21,"c":24,"unit":"কার্টুন","u":24,"uc":1,"cat":"নুডুলস"},{"n":"প্রাণ চিকেন সুপ","p":40,"c":96,"unit":"বক্স","u":12,"uc":8,"cat":"সুপ ও চাটনি"},{"n":"কর্নসুপ","p":40,"c":96,"unit":"বক্স","u":12,"uc":8,"cat":"সুপ ও চাটনি"},{"n":"বার্মিজ চাটনি বরই","p":8.12,"c":128,"unit":"পলি","u":32,"uc":4,"cat":"সুপ ও চাটনি"},{"n":"বার্মিজ চাটনি আম","p":8.12,"c":128,"unit":"পলি","u":32,"uc":4,"cat":"সুপ ও চাটনি"},{"n":"বার্মিজ চাটনি জলপাই","p":8.12,"c":128,"unit":"পলি","u":32,"uc":4,"cat":"সুপ ও চাটনি"},{"n":"লিচু পলি Fruit Magic","p":2.11,"c":432,"unit":"পলি","u":18,"uc":24,"cat":"জুস ও পানীয়"},{"n":"লিচু ঝার ১০০p","p":2.4,"c":1000,"unit":"ঝাড়","u":100,"uc":10,"cat":"জুস ও পানীয়"},{"n":"গ্লাস জুস","p":8,"c":48,"unit":"বান্ডেল","u":6,"uc":8,"cat":"জুস ও পানীয়"},{"n":"রকেট জেলি ড্রিংকস","p":7.5,"c":120,"unit":"ঝাড়","u":30,"uc":4,"cat":"জুস ও পানীয়"},{"n":"রকেট ড্রিংকো","p":8,"c":216,"unit":"ঝাড়","u":18,"uc":12,"cat":"জুস ও পানীয়"},{"n":"হট টমেটো সস","p":3.74,"c":600,"unit":"বক্স","u":50,"uc":12,"cat":"অন্যান্য"},{"n":"হট টমেটো সস ঝাড়","p":82,"c":24,"unit":"কার্টুন","u":24,"uc":1,"cat":"অন্যান্য"},{"n":"চকোবিন","p":4,"c":288,"unit":"পলি","u":24,"uc":12,"cat":"স্ন্যাক্স ও কনফেকশনারি"},{"n":"চকোবিন নুরি","p":3.75,"c":840,"unit":"ঝাড়","u":70,"uc":12,"cat":"স্ন্যাক্স ও কনফেকশনারি"},{"n":"চকো পিনাট বার","p":150,"c":24,"unit":"বক্স","u":1,"uc":24,"cat":"স্ন্যাক্স ও কনফেকশনারি"},{"n":"প্রাণ স্নাক্স বার","p":8,"c":225,"unit":"বক্স","u":25,"uc":9,"cat":"স্ন্যাক্স ও কনফেকশনারি"},{"n":"সি হর্স","p":8,"c":96,"unit":"ঝাড়","u":16,"uc":6,"cat":"স্ন্যাক্স ও কনফেকশনারি"},{"n":"ললি আইসক্রিম","p":7.6,"c":36,"unit":"পলি","u":12,"uc":3,"cat":"স্ন্যাক্স ও কনফেকশনারি"},{"n":"উৎসব সেমাই","p":35,"c":48,"unit":"কার্টুন","u":48,"uc":1,"cat":"সেমাই ও মিষ্টি"},{"n":"প্রাণ হানি ১০০g","p":100,"c":28,"unit":"কার্টুন","u":28,"uc":1,"cat":"সেমাই ও মিষ্টি"},{"n":"প্রাণ হানি ২৫০g","p":190,"c":16,"unit":"কার্টুন","u":16,"uc":1,"cat":"সেমাই ও মিষ্টি"},{"n":"প্রাণ হানি জার","p":8,"c":480,"unit":"ঝাড়","u":40,"uc":12,"cat":"সেমাই ও মিষ্টি"},{"n":"লাচ্ছা সেমাই","p":38,"c":null,"unit":"বস্তা","options":[{"label":"২৫ পিসের বস্তা","u":25,"total":950},{"label":"৫০ পিসের বস্তা","u":50,"total":1900}],"cat":"সেমাই ও মিষ্টি"}];
let E=JSON.parse(localStorage.getItem('daily_product_entries')||'[]');let S=JSON.parse(localStorage.getItem('product_stock')||'{}');let optionIndex=0;
const $=id=>document.getElementById(id);const money=n=>'৳'+Number(n||0).toFixed(2);const today=()=>new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().slice(0,10);
function save(){localStorage.setItem('daily_product_entries',JSON.stringify(E));localStorage.setItem('product_stock',JSON.stringify(S))}
function init(){let d=today();$('date').value=d;$('histDate').value=d;$('reportDate').value=d;$('summaryDate').value=d;let now=new Date();$('orderTime').value=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');fillProducts();document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>showPage(b.dataset.page));if(localStorage.getItem('darkMode')==='1')document.body.classList.add('dark');renderAll()}
function showPage(id){document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));$(id).classList.add('active');document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.page===id));renderAll();scrollTo(0,0)}
function toggleDark(){document.body.classList.toggle('dark');localStorage.setItem('darkMode',document.body.classList.contains('dark')?'1':'0')}
function fillProducts(){let c=$('cat').value,old=$('prod').value;$('prod').innerHTML='<option value="">-- পণ্য নির্বাচন --</option>';P.forEach((p,i)=>{if(!c||p.cat===c){let o=document.createElement('option');o.value=i;o.textContent=p.n;$('prod').appendChild(o)}});if([...$('prod').options].some(o=>o.value===old))$('prod').value=old;productChanged()}
function getP(){let i=Number($('prod').value);return Number.isInteger(i)?P[i]:null}

function effectivePrice(p){
  let v=S[P.indexOf(p)]?.price;
  return Number.isFinite(Number(v)) && Number(v)>0 ? Number(v) : Number(p.p||0);
}
function packText(p, pcs){
  pcs=Math.max(0,Math.floor(Number(pcs)||0));
  if(p.options){
    // Default to 25-piece bag for display when mixed historical data exists.
    let opts=p.options;
    let best=opts[0];
    for(let o of opts) if(pcs>=o.u) best=o;
    let bags=Math.floor(pcs/best.u), rem=pcs%best.u;
    return bags+" বস্তা"+(rem?" + "+rem+" PCS":"");
  }
  let u=p.u||1, uc=p.uc||1;
  let packs=Math.floor(pcs/u), loose=pcs%u;
  let cartons=Math.floor(packs/uc), remPacks=packs%uc;
  let parts=[];
  if(cartons) parts.push(cartons+" কার্টুন");
  if(remPacks) parts.push(remPacks+" "+p.unit);
  if(loose) parts.push(loose+" PCS");
  return parts.join(" ") || "0 PCS";
}
function exactSummary(p, pcs){return packText(p,pcs)}
function totalPackLabel(e){
  let p=P.find(x=>x.n===e.n);
  if(!p)return e.packs+" "+e.unit;
  return packText(p,e.pcs);
}
function selectedPack(p){if(p.options){let o=p.options[optionIndex]||p.options[0];return {u:o.u,name:'বস্তা',uc:null,total:o.total}}return {u:p.u,name:p.unit,uc:p.uc,total:null}}
function productChanged(){optionIndex=0;let p=getP();if(!p){$('packInfo').textContent='পণ্য নির্বাচন করলে প্যাকিং তথ্য এখানে দেখাবে।';$('preview').innerHTML='';$('orderPrice').value='';return}if(p.options){$('qtyLabel').textContent='বস্তা সংখ্যা';$('packInfo').innerHTML='<b>বস্তার ধরন</b><select id="optionSel" onchange="optionIndex=Number(this.value);calc()"><option value="0">২৫ পিসের বস্তা — ৳950</option><option value="1">৫০ পিসের বস্তা — ৳1900</option></select>'}else{$('qtyLabel').textContent=p.unit+' সংখ্যা';$('packInfo').innerHTML='<b>প্যাকিং:</b> ১ '+p.unit+' = '+p.u+' PCS | ১ কার্টুন = '+p.uc+' '+p.unit+' ('+p.c+' PCS) | <b>দাম: ৳'+effectivePrice(p).toFixed(2)+'</b>'}$('qty').value=0;$('pcsQty').value=0;$('orderPrice').value=effectivePrice(p).toFixed(2);calc()}
function calc(){
  let p=getP(); if(!p){$('preview').innerHTML='';return}
  let q=Math.max(0,Math.floor(+$('qty').value||0)),lp=Math.max(0,Math.floor(+$('pcsQty').value||0));
  let s=selectedPack(p),pcs=q*s.u+lp;
  $('qty').value=q;$('pcsQty').value=lp;
  let price=Number($('orderPrice').value);if(!(price>=0))price=effectivePrice(p);
  $('preview').innerHTML='📦 প্যাকিং: <b>'+packText(p,pcs)+'</b><br>🔹 মোট PCS: <span class="big">'+pcs+'</span><br>💰 মোট টাকা: <span class="big">'+money(pcs*price)+'</span>';
}
function change(id,n){$(id).value=Math.max(0,(+$(id).value||0)+n);calc()}function setv(id,n){$(id).value=n;calc()}
function addEntry(){
 let p=getP();if(!p)return alert('পণ্য নির্বাচন করুন');
 let shop=($('shopName').value||'').trim(),address=($('shopAddress').value||'').trim();
 if(!shop)return alert('দোকানের নাম দিন');if(!address)return alert('দোকানের ঠিকানা দিন');
 let q=Math.max(0,Math.floor(+$('qty').value||0)),lp=Math.max(0,Math.floor(+$('pcsQty').value||0));
 if(!q&&!lp)return alert('পরিমাণ দিন');
 let s=selectedPack(p),pcs=q*s.u+lp,price=Number($('orderPrice').value);
 if(!(price>=0))return alert('সঠিক পণ্যের দাম দিন');
 let d=$('date').value||today(),tm=$('orderTime').value||'';
 let oldEntry=window.__editingOrderId?E.find(x=>String(x.id)===String(window.__editingOrderId)):null;let edited={id:String(Date.now()+Math.random()),memoNo:oldEntry?.memoNo||nextMemoNo(),d,time:tm,shop,address,n:p.n,packs:q,unit:s.name,unitPcs:s.u,uc:s.uc||null,c:s.uc?Math.floor(q/s.uc):0,remPacks:s.uc?q%s.uc:q,pcs,loosePcs:lp,price,t:pcs*price,note:($('orderNote').value||'').trim()};
 if(window.__editingOrderId){edited.id=window.__editingOrderId;E=E.map(x=>String(x.id)===String(window.__editingOrderId)?edited:x);window.__editingOrderId=null;}else E.push(edited);
 save();$('qty').value=0;$('pcsQty').value=0;$('orderNote').value='';calc();renderAll();alert('✅ দোকানের অর্ডার সংরক্ষণ হয়েছে');
}
function dayEntries(d){return E.filter(e=>e.d===d)}
function renderHome(){let a=dayEntries(today()),pc=a.reduce((s,e)=>s+Number(e.pcs||0),0),tm=a.reduce((s,e)=>s+Number(e.t||0),0);$('homeMoney').textContent=money(tm);$('homePcs').textContent=pc;$('homeEntries').textContent=a.length;$('homeList').innerHTML=a.length?a.slice().reverse().map(e=>'<div class="entry"><b>'+e.n+'</b><span class="muted">'+totalPackLabel(e)+'</span><br>'+e.pcs+' PCS · '+money(e.t)+'</div>').join(''):'<div class="empty">আজ কোনো বিক্রয় এন্ট্রি নেই।</div>';let sm={};a.forEach(e=>{sm[e.n]=(sm[e.n]||0)+Number(e.pcs||0)});let hs=Object.entries(sm).map(([n,pcs])=>{let p=P.find(x=>x.n===n),price=p?effectivePrice(p):0;return {n,pcs,price,total:pcs*price}}).sort((x,y)=>y.total-x.total);$('homeLow').innerHTML=hs.length?'<div class="tablewrap"><table><tr><th>পণ্য</th><th>PCS</th><th>দাম</th><th>মোট</th></tr>'+hs.slice(0,8).map(x=>'<tr><td><b>'+esc(x.n)+'</b></td><td>'+x.pcs+'</td><td>'+money(x.price)+'</td><td><b>'+money(x.total)+'</b></td></tr>').join('')+'</table></div>':'<div class="empty">আজ কোনো বিক্রি নেই।</div>'}
function renderHistory(){
 let d=$('histDate').value||today(),q=($('histSearch').value||'').toLowerCase();
 let a=E.filter(e=>e.d===d&&((e.n||'').toLowerCase().includes(q)||(e.shop||'').toLowerCase().includes(q)||(e.address||'').toLowerCase().includes(q)));
 $('historyList').innerHTML=a.length?a.slice().reverse().map(e=>'<div class="entry row"><input class="check histCheck" type="checkbox" data-id="'+e.id+'"><div><b>🧾 '+(e.memoNo||'MEMO')+' · 🏪 '+(e.shop||'দোকানের নাম নেই')+'</b><br><span class="muted">'+(e.address||'ঠিকানা নেই')+' · '+(e.time||'')+'</span><br><b>'+e.n+'</b> — '+totalPackLabel(e)+' — '+e.pcs+' PCS · '+money(e.t)+'</div><button class="secondary" onclick="printMemo(\''+e.id+'\',\'80mm\')">🖨️</button><button class="secondary" onclick="editEntry(\''+e.id+'\')">✏️</button></div>').join(''):'<div class="empty">এই তারিখে কোনো অর্ডার নেই।</div>'
}
function selectAllHistory(v){document.querySelectorAll('.histCheck').forEach(x=>x.checked=v)}
function editEntry(id){
 let e=E.find(x=>String(x.id)===String(id));if(!e)return;
 showPage('entry');$('shopName').value=e.shop||'';$('shopAddress').value=e.address||'';$('date').value=e.d||today();$('orderTime').value=e.time||'';
 let pp=P.find(p=>p.n===e.n);$('cat').value=pp?pp.cat:'';fillProducts();$('prod').value=String(P.findIndex(p=>p.n===e.n));productChanged();
 $('qty').value=e.packs||0;$('pcsQty').value=e.loosePcs||0;$('orderPrice').value=Number(e.price||0).toFixed(2);$('orderNote').value=e.note||'';calc();
 window.__editingOrderId=id;renderAll();alert('✏️ অর্ডারটি এডিট করার জন্য ফর্মে আনা হয়েছে। পরিবর্তন করে আবার সংরক্ষণ করুন।');
}
function nextMemoNo(){
 let n=Math.max(0,Number(localStorage.getItem('memoSeq')||0))+1;
 localStorage.setItem('memoSeq',String(n));
 return 'M'+String(n).padStart(6,'0');
}
function esc(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}
function memoHtml(e,width){
 let p=P.find(x=>x.n===e.n), qty=totalPackLabel(e);
 return '<div class="memo" style="width:'+width+'">'+
 '<div class="center title">SALES MEMO</div>'+
 '<div class="center company">PRAN RFL GROUP</div>'+
 '<div class="line"></div>'+
 '<div>Memo No: <b>'+esc(e.memoNo||'MEMO')+'</b></div>'+
 '<div>Date: '+esc(e.d||'')+' &nbsp; Time: '+esc(e.time||'')+'</div>'+
 '<div>Shop: <b>'+esc(e.shop||'')+'</b></div>'+
 '<div>Address: '+esc(e.address||'')+'</div>'+
 '<div class="line"></div>'+
 '<table><tr><th>Product</th><th>Qty</th><th>Price</th></tr>'+ 
 '<tr><td>'+esc(e.n)+'</td><td>'+esc(qty)+'</td><td>'+money(e.price)+'</td></tr></table>'+
 '<div class="line"></div>'+
 '<div class="total">Total PCS: '+esc(e.pcs)+'<br>Total: '+money(e.t)+'</div>'+ 
 (e.note?'<div>Note: '+esc(e.note)+'</div>':'')+
 '<div class="line"></div><div class="center">Thank You</div></div>';
}
function printMemos(entries,width){
 if(!entries.length)return alert('প্রিন্ট করার মতো কোনো অর্ডার নেই');
 let w=window.open('','_blank');
 if(!w)return alert('Print window খুলতে পারেনি। ব্রাউজারে Pop-up অনুমতি দিন।');
 let html='<!doctype html><html><head><meta charset="utf-8"><title>Thermal Memos</title><style>@page{size:'+width+' auto;margin:0}html,body{margin:0;padding:0;background:#fff}body{font-family:Arial,sans-serif;font-size:11px;color:#000}.memo{box-sizing:border-box;padding:4mm 3mm;page-break-after:always;break-after:page;overflow:hidden}.memo:last-child{page-break-after:auto;break-after:auto}.center{text-align:center}.title{font-size:15px;font-weight:800}.company{font-size:12px;font-weight:700;margin-top:2px}.line{border-top:1px dashed #000;margin:6px 0}table{width:100%;border-collapse:collapse}th,td{padding:3px 1px;text-align:left;vertical-align:top}th{border-bottom:1px solid #000}.total{font-size:13px;font-weight:800;text-align:right;line-height:1.5}</style></head><body>'+entries.map(e=>memoHtml(e,width)).join('')+'</body></html>';
 w.document.open();w.document.write(html);w.document.close();w.focus();setTimeout(()=>{w.print();},350);
}
function printMemo(id,width){let e=E.find(x=>String(x.id)===String(id));if(e)printMemos([e],width||'80mm')}
function printSelectedMemos(width){let ids=[...document.querySelectorAll('.histCheck:checked')].map(x=>String(x.dataset.id));printMemos(E.filter(e=>ids.includes(String(e.id))).reverse(),width||'80mm')}
function printPeriodMemos(width){let type=$('reportType').value,target=$('reportDate').value||today();let a=E.filter(e=>periodMatch(e.d,type,target)).slice().reverse();printMemos(a,width||'80mm')}
function deleteSelected(){let ids=[...document.querySelectorAll('.histCheck:checked')].map(x=>x.dataset.id);if(!ids.length)return alert('কোনো এন্ট্রি নির্বাচন করা হয়নি');if(!confirm(ids.length+'টি এন্ট্রি ডিলিট করবেন?'))return;E=E.filter(e=>!ids.includes(String(e.id)));save();renderAll();alert('🗑️ নির্বাচিত এন্ট্রি ডিলিট হয়েছে')}
function periodMatch(d,type,target){return type==='day'?d===target:type==='month'?d.slice(0,7)===target.slice(0,7):d.slice(0,4)===target.slice(0,4)}
function renderReport(){
 let type=$('reportType').value,target=$('reportDate').value||today(),a=E.filter(e=>periodMatch(e.d,type,target));
 let pc=a.reduce((s,e)=>s+Number(e.pcs||0),0),tm=a.reduce((s,e)=>s+Number(e.t||0),0),map={},shops={};
 a.forEach(e=>{
  let k=e.n;if(!map[k])map[k]={n:e.n,pcs:0,t:0};map[k].pcs+=Number(e.pcs||0);map[k].t+=Number(e.t||0);
  let sk=e.shop||'দোকানের নাম নেই';if(!shops[sk])shops[sk]={shop:sk,address:e.address||'',orders:0,pcs:0,t:0};shops[sk].orders++;shops[sk].pcs+=Number(e.pcs||0);shops[sk].t+=Number(e.t||0);
 });
 let rows=Object.values(map).map(x=>{let p=P.find(z=>z.n===x.n),txt=p?packText(p,x.pcs):x.pcs+' PCS';return '<tr><td><b>'+x.n+'</b></td><td><b>'+txt+'</b></td><td>'+x.pcs+' PCS</td><td>'+money(x.t)+'</td></tr>';}).join('');
 let period=type==='day'?target:type==='month'?target.slice(0,7):target.slice(0,4);$('printPeriod').textContent='সময়: '+period;
 $('reportBody').innerHTML='<div class="grid stats"><div class="card stat"><div class="muted">মোট অর্ডার এন্ট্রি</div><div class="big">'+a.length+'</div></div><div class="card stat"><div class="muted">মোট PCS</div><div class="big">'+pc+'</div></div><div class="card stat"><div class="muted">মোট বিক্রি</div><div class="big">'+money(tm)+'</div></div></div>'+(a.length?'<div class="tablewrap"><table><tr><th>পণ্য</th><th>সঠিক প্যাকিং</th><th>মোট PCS</th><th>টাকা</th></tr>'+rows+'</table></div>':'<div class="empty">এই সময়ের কোনো ডাটা নেই।</div>');
 let shopRows=Object.values(shops).sort((a,b)=>b.t-a.t).map(s=>'<div class="shop-card"><b>🏪 '+s.shop+'</b><div class="order-meta">'+s.address+' · '+s.orders+'টি এন্ট্রি · '+s.pcs+' PCS</div><div class="shop-total">মোট অর্ডার: '+money(s.t)+'</div></div>').join('');
 $('shopSummary').innerHTML=shopRows||'<div class="empty">এই সময়ের কোনো দোকানের অর্ডার নেই।</div>';
}
function printSummary(){document.body.classList.add('print-summary');window.print();setTimeout(()=>document.body.classList.remove('print-summary'),500)}
function renderSummary(){
 let target=$('summaryDate').value||today(),cat=$('summaryCat').value;
 let day=E.filter(e=>e.d===target),map={};
 day.forEach(e=>{let p=P.find(x=>x.n===e.n);if(!p)return;if(cat&&p.cat!==cat)return;map[e.n]=(map[e.n]||0)+Number(e.pcs||0)});
 let rows=Object.entries(map).map(([n,pcs])=>{let p=P.find(x=>x.n===n),price=effectivePrice(p),total=pcs*price;return {n,cat:p.cat,pcs,price,total,pack:packText(p,pcs)}}).sort((a,b)=>b.total-a.total);
 let pc=rows.reduce((s,x)=>s+x.pcs,0),tm=rows.reduce((s,x)=>s+x.total,0);
 $('summaryBody').innerHTML='<div class="grid stats"><div class="card stat"><div class="muted">মোট অর্ডার এন্ট্রি</div><div class="big">'+day.filter(e=>!cat||P.find(x=>x.n===e.n)?.cat===cat).length+'</div></div><div class="card stat"><div class="muted">মোট PCS</div><div class="big">'+pc+'</div></div><div class="card stat"><div class="muted">দাম অপশন অনুযায়ী মোট</div><div class="big">'+money(tm)+'</div></div></div>'+(rows.length?'<div class="tablewrap"><table><tr><th>পণ্য</th><th>সঠিক প্যাকিং</th><th>PCS</th><th>দাম</th><th>মোট</th></tr>'+rows.map(x=>'<tr><td><b>'+esc(x.n)+'</b><br><span class="muted">'+esc(x.cat)+'</span></td><td>'+x.pack+'</td><td>'+x.pcs+'</td><td>'+money(x.price)+'</td><td><b>'+money(x.total)+'</b></td></tr>').join('')+'</table></div>':'<div class="empty">এই তারিখে কোনো বিক্রি নেই।</div>');
}
function exportJSON(){let data={app:'PRAN RFL GROUP',version:7,exportedAt:new Date().toISOString(),entries:E,stock:S};download(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),'daily-product-backup.json')}
function importJSON(inp){let f=inp.files[0];if(!f)return;let r=new FileReader();r.onload=()=>{try{let x=JSON.parse(r.result);if(!Array.isArray(x.entries))throw Error();if(!confirm('বর্তমান ডাটা রিপ্লেস করে ব্যাকআপ ডাটা আনবেন?'))return;E=x.entries||[];S=x.stock||{};save();renderAll();alert('✅ ডাটা সফলভাবে পুনরুদ্ধার হয়েছে')}catch(e){alert('❌ ভুল JSON ব্যাকআপ ফাইল')}};r.readAsText(f)}
function exportCSV(){let type=$('reportType').value,target=$('reportDate').value||today(),a=E.filter(e=>periodMatch(e.d,type,target));let lines=['তারিখ,সময়,দোকানের নাম,ঠিকানা,পণ্য,পরিমাণ,ইউনিট,প্রতি PCS দাম,মোট PCS,মোট টাকা,নোট'];a.forEach(e=>lines.push([e.d,e.time||'',e.shop||'',e.address||'',e.n,e.packs,e.unit,Number(e.price||0).toFixed(2),e.pcs,Number(e.t).toFixed(2),e.note||''].map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')));download(new Blob(['\ufeff'+lines.join('\n')],{type:'text/csv;charset=utf-8'}),'daily-order-report.csv')}
function download(blob,name){let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}

function renderPrice(){
  $('priceList').innerHTML=P.map((p,i)=>{
    let cur=effectivePrice(p);
    return '<div class="entry"><div class="row"><div><b>'+p.n+'</b><br><span class="muted">'+p.cat+' · বর্তমান ৳'+cur.toFixed(2)+'</span></div><input type="number" step="0.01" min="0" value="'+cur+'" onchange="setPrice('+i+',this.value)"></div></div>';
  }).join('');
}
function setPrice(i,v){
  let n=Number(v);
  if(!(n>0))return alert('সঠিক দাম দিন');
  S[i]=S[i]||{};S[i].price=n;save();renderPrice();productChanged();calc();
}
function renderAll(){renderHome();renderHistory();renderReport();renderSummary();renderPrice()}
init();