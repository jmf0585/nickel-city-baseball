document.addEventListener('DOMContentLoaded',()=>{
  const cfg=window.NCB_CONFIG||{};
  const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const links=[['index.html','Home'],['teams.html','Teams'],['schedule.html','Schedule'],['results.html','Results'],['standings.html','Standings'],['fields.html','Fields'],['rules.html','Rules'],['about.html','About'],['contact.html','Contact']];
  const nav=links.map(([href,label])=>`<a href="${href}" class="${page===href?'active':''}">${label}</a>`).join('');
  const header=`<div class="site-top">Inaugural ${cfg.division||'10U'} Season • ${cfg.season||'2027'} • Buffalo, New York</div><header class="site-header"><div class="wrap nav"><a class="brand" href="index.html"><img src="assets/img/nickel-city-logo.png" alt="Nickel City Baseball League logo"><span>Nickel City Baseball League</span></a><button class="menu-btn" aria-label="Open menu">Menu</button><nav class="nav-links">${nav}</nav></div></header>`;
  const footer=`<footer class="site-footer"><div class="wrap"><div class="footer-grid"><div><img class="footer-logo" src="assets/img/nickel-city-logo.png" alt="Nickel City Baseball League"><p>Competitive baseball shaped by coaches who share a commitment to player development, strong competition, sportsmanship and an organized league experience.</p></div><div><h4>League</h4><a href="teams.html">10U Teams</a><a href="schedule.html">Schedule</a><a href="standings.html">Standings</a><a href="rules.html">Rules</a></div><div><h4>Resources</h4><a href="results.html">Game Results</a><a href="fields.html">Fields</a><a href="about.html">About</a><a href="contact.html">Contact</a></div></div><div class="copyright">© ${new Date().getFullYear()} Nickel City Baseball League • Western New York</div></div></footer>`;
  const h=document.querySelector('[data-site-header]'); if(h)h.innerHTML=header;
  const f=document.querySelector('[data-site-footer]'); if(f)f.innerHTML=footer;
  document.querySelector('.menu-btn')?.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open'));
});
