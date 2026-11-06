
function ribbonHTML(e){
 if(e.ribbon==="soku") return '<span class="drib pink">即ヒメ!!</span>';
 if(e.ribbon==="today") return '<span class="drib blue">本日出勤</span>';
 return '';
}
function diaryGridHTML(e){
 return `<a class="dcell" href="diary.html"><img src="${e.img}" alt="">${ribbonHTML(e)}</a>`;
}
function diaryEntryHTML(e){
 const soku = e.ribbon==="soku" ? `<span class="soku"><b>即セラ</b><i>${e.date.slice(11,16)}～</i></span>` : '';
 return `<article class="dentry">
  <div class="dhead"><img src="${e.img}" alt=""><span class="dnm">${e.name}</span>${soku}</div>
  <div class="dmeta"><span class="dcat">${e.cat}</span><span class="ddate">${e.date}</span></div>
  <h3 class="dtitle">${e.title}</h3>
  <div class="dphoto"><img src="${e.img}" alt=""></div>
  <p class="dbody">${e.body}</p>
 </article>`;
}
