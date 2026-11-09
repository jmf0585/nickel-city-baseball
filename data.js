window.NCB = window.NCB || {};
NCB.parseCSV = function(text){
  const rows=[]; let row=[], field='', q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i], n=text[i+1];
    if(q){ if(c==='"'&&n==='"'){field+='"';i++;} else if(c==='"'){q=false;} else {field+=c;} }
    else { if(c==='"'){q=true;} else if(c===','){row.push(field);field='';} else if(c==='\n'){row.push(field.replace(/\r$/,''));rows.push(row);row=[];field='';} else {field+=c;} }
  }
  if(field.length||row.length){row.push(field);rows.push(row)}
  if(!rows.length)return[];
  const headers=rows.shift().map(h=>h.trim());
  return rows.filter(r=>r.some(v=>String(v).trim()!=='')).map(r=>Object.fromEntries(headers.map((h,i)=>[h,(r[i]??'').trim()])));
};
NCB.load = async function(kind){
  const local={teams:'data/teams.csv',games:'data/games.csv',fields:'data/fields.csv'}[kind];
  const remote=(window.NCB_CONFIG?.sources||{})[kind];
  const url=remote||local;
  const res=await fetch(url,{cache:'no-store'});
  if(!res.ok) throw new Error('Could not load '+kind);
  return NCB.parseCSV(await res.text());
};
NCB.teamsMap = rows => Object.fromEntries(rows.map(t=>[t.id,t]));
NCB.escape = s => String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
NCB.formatDate = s => { if(!s)return''; const d=new Date(s+'T12:00:00'); return isNaN(d)?s:d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}); };
NCB.pct = (w,t,gp)=> gp?((w+t*.5)/gp).toFixed(3).replace(/^0/,''):'.000';
