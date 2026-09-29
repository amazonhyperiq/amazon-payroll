
const seedEmployees = [{"id": 1, "name": "عمر اسماعيل", "job": "", "salary": 1500000.0, "days": 30.0, "workHours": 10.0}, {"id": 2, "name": "حنين", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 9.0}, {"id": 3, "name": "حيدر حازم", "job": "", "salary": 700000.0, "days": 30.0, "workHours": 10.0}, {"id": 4, "name": "كرم السوري", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 5, "name": "مهند نساتل", "job": "", "salary": 500000.0, "days": 30.0, "workHours": 8.0}, {"id": 6, "name": "رحيل", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 7, "name": "سمر", "job": "", "salary": 400.0, "days": 30.0, "workHours": 10.0}, {"id": 8, "name": "سهيل السوري", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 9, "name": "غصون ليث", "job": "", "salary": 500000.0, "days": 30.0, "workHours": 7.5}, {"id": 10, "name": "احمد شبانة", "job": "", "salary": 750000.0, "days": 30.0, "workHours": 10.0}, {"id": 11, "name": "تامر فراس", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 12, "name": "يونس ابراهيم", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 13, "name": "مجيد الكصاب", "job": "", "salary": 1050000.0, "days": 30.0, "workHours": 7.5}, {"id": 14, "name": "عباس الباكستاني", "job": "", "salary": 750000.0, "days": 30.0, "workHours": 14.0}, {"id": 15, "name": "رامي الكردي", "job": "", "salary": 500000.0, "days": 30.0, "workHours": 10.0}, {"id": 16, "name": "سجاد قسم اللحوم", "job": "", "salary": 600000.0, "days": 30.0, "workHours": 10.0}, {"id": 17, "name": "اصف باكستاني", "job": "", "salary": 500000.0, "days": 30.0, "workHours": 10.0}, {"id": 18, "name": "عمير", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 19, "name": "أبراهيم - صيانة", "job": "", "salary": 800000.0, "days": 30.0, "workHours": 10.0}, {"id": 20, "name": "محمد الطويل", "job": "", "salary": 700000.0, "days": 30.0, "workHours": 10.0}, {"id": 21, "name": "عمر حارس كراج", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 22, "name": "حسين الحارس", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 23, "name": "عمر طارق حارس باب", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 24, "name": "فراس امير", "job": "", "salary": 650000.0, "days": 30.0, "workHours": 10.0}, {"id": 25, "name": "ثائر استلام", "job": "", "salary": 600000.0, "days": 30.0, "workHours": 10.0}, {"id": 26, "name": "ثائر الحارس", "job": "", "salary": 650000.0, "days": 30.0, "workHours": 10.0}, {"id": 27, "name": "محمد علي باكستاني", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 28, "name": "نذيركاشير", "job": "", "salary": 850000.0, "days": 30.0, "workHours": 10.0}, {"id": 29, "name": "عبد الله كاشير", "job": "", "salary": 600000.0, "days": 30.0, "workHours": 9.0}, {"id": 30, "name": "يوسف كاشير", "job": "", "salary": 750000.0, "days": 30.0, "workHours": 10.0}, {"id": 31, "name": "علي  كاشير(ثائر)", "job": "", "salary": 600000.0, "days": 30.0, "workHours": 9.0}, {"id": 32, "name": "انس كاشير", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 33, "name": "احسان", "job": "", "salary": 450000.0, "days": 30.0, "workHours": 10.0}, {"id": 34, "name": "نادين كاشير", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 9.0}, {"id": 35, "name": "علي نهاد منظفات", "job": "", "salary": 500000.0, "days": 30.0, "workHours": 10.0}, {"id": 36, "name": "عاقب الباكستاني", "job": "", "salary": 550000.0, "days": 30.0, "workHours": 10.0}, {"id": 37, "name": "متولي", "job": "", "salary": 800000.0, "days": 30.0, "workHours": 10.0}, {"id": 38, "name": "ياسر البان", "job": "", "salary": 500000.0, "days": 30.0, "workHours": 10.0}, {"id": 39, "name": "محمود المصري", "job": "", "salary": 700000.0, "days": 30.0, "workHours": 10.0}, {"id": 40, "name": "رعد استلام", "job": "", "salary": 600000.0, "days": 30.0, "workHours": 10.0}, {"id": 41, "name": "قيصر استلام", "job": "", "salary": 500000.0, "days": 30.0, "workHours": 10.0}, {"id": 42, "name": "احمد عبد الجبار كاشير", "job": "", "salary": 600000.0, "days": 30.0, "workHours": 9.0}];
const months=["كانون الثاني — January","شباط — February","آذار — March","نيسان — April","أيار — May","حزيران — June","تموز — July","آب — August","أيلول — September","تشرين الأول — October","تشرين الثاني — November","كانون الأول — December"];
const $=id=>document.getElementById(id);
let employees=JSON.parse(localStorage.getItem("amazon_payroll_employees")||"null")||seedEmployees;
let payroll=JSON.parse(localStorage.getItem("amazon_payroll_monthly")||"{}");
let month=new Date().getMonth(), year=new Date().getFullYear();
$("month").innerHTML=months.map((m,i)=>`<option value="${i}">${m}</option>`).join("");
$("month").value=month;$("year").value=year;
$("month").onchange=()=>{month=+$("month").value;render()};$("year").onchange=()=>{year=+$("year").value||new Date().getFullYear();render()};
$("search").oninput=render;
$("addEmployeeBtn").onclick=()=>openEmployee();
$("bulkBtn").onclick=openBulk;
$("printReportBtn").onclick=()=>printFullReport();
$("pdfReportBtn").onclick=()=>printFullReport();

function key(){return `${year}-${String(month+1).padStart(2,"0")}`}
function dataFor(id){
  const k=key(); payroll[k] ||= {};
  payroll[k][id] ||= {extraHours:0,absence:0,penalty:0,bonus:0,advance:0,late:0};
  return payroll[k][id];
}
function calc(e){
  const p=dataFor(e.id), days=Number(e.days)||30, wh=Number(e.workHours)||8, salary=Number(e.salary)||0;
  const daily=salary/days, hourly=daily/wh, extraHours=Number(p.extraHours)||0;
  const extra=(extraHours>0?50000:0), absenceDays=Number(p.absence)||0, absence=absenceDays*daily;
  const late=Math.max(0,Math.floor((Number(p.late)||0)/3))*daily;
  const penalty=Number(p.penalty)||0, bonus=Number(p.bonus)||0, advance=Number(p.advance)||0;
  const due=salary+extra+bonus, deductions=absence+late+penalty+advance, net=due-deductions;
  return {...p,daily,hourly,extra,absence,late,bonus,advance,due,deductions,net};
}
function money(n){return Number(n||0).toLocaleString("ar-IQ",{maximumFractionDigits:2})+" د.ع"}
function num(n){return Number(n||0).toLocaleString("en-US",{maximumFractionDigits:2})}
function save(){localStorage.setItem("amazon_payroll_employees",JSON.stringify(employees));localStorage.setItem("amazon_payroll_monthly",JSON.stringify(payroll))}
function render(){
  const q=$("search").value.trim().toLowerCase();
  const list=employees.filter(e=>(e.name+" "+e.job).toLowerCase().includes(q));
  const body=$("payrollTable").querySelector("tbody");body.innerHTML="";
  let sn=0,sa=0,sd=0;
  list.forEach((e,i)=>{
    const c=calc(e);sn+=c.net;sa+=c.advance;sd+=c.deductions;
    const p=dataFor(e.id);
    const tr=document.createElement("tr");
    tr.innerHTML=`
      <td>${i+1}</td><td class="name">${esc(e.name)}</td><td>${esc(e.job||"—")}</td>
      <td class="money">${money(e.salary)}</td><td class="money">${money(c.daily)}</td><td class="money">${money(c.hourly)}</td>
      <td><input class="editable" type="number" min="0" step="0.5" value="${p.extraHours}" data-id="${e.id}" data-f="extraHours"></td>
      <td class="money">${money(c.extra)}</td>
      <td><input class="editable" type="number" min="0" step="0.5" value="${p.absence}" data-id="${e.id}" data-f="absence"></td>
      <td class="money ded">${money(c.absence)}</td>
      <td><input class="editable" type="number" min="0" step="1" value="${p.penalty}" data-id="${e.id}" data-f="penalty"></td>
      <td><input class="editable" type="number" min="0" step="1" value="${p.bonus}" data-id="${e.id}" data-f="bonus"></td>
      <td><input class="editable" type="number" min="0" step="1" value="${p.advance}" data-id="${e.id}" data-f="advance"></td>
      <td><input class="editable" type="number" min="0" step="1" value="${p.late}" data-id="${e.id}" data-f="late"></td>
      <td class="money ded">${money(c.late)}</td><td class="money ded">${money(c.deductions)}</td><td class="money net">${money(c.net)}</td>
      <td class="actions"><button onclick="openEmployee(${e.id})">تعديل</button><button onclick="slip(${e.id})">وصل</button><button onclick="delEmployee(${e.id})">حذف</button></td>`;
    body.appendChild(tr);
  });
  body.querySelectorAll("input[data-id]").forEach(inp=>inp.onchange=()=>{
    const p=dataFor(+inp.dataset.id);p[inp.dataset.f]=Number(inp.value)||0;save();render();
  });
  $("countEmployees").textContent=employees.length;
  $("sumNet").textContent=money(sn);$("sumAdvances").textContent=money(sa);$("sumDeductions").textContent=money(sd);
}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function openEmployee(id=null){
  $("modalTitle").textContent=id?"تعديل موظف":"إضافة موظف";
  const e=id?employees.find(x=>x.id===id):{name:"",job:"",salary:"",days:30,workHours:8};
  $("modalBody").innerHTML=`<div class="formgrid">
    <div class="field"><label>اسم الموظف</label><input id="fName" value="${esc(e.name)}"></div>
    <div class="field"><label>الوظيفة</label><input id="fJob" value="${esc(e.job||"")}"></div>
    <div class="field"><label>الراتب الاسمي</label><input id="fSalary" type="number" min="0" value="${e.salary}"></div>
    <div class="field"><label>عدد أيام الشهر</label><input id="fDays" type="number" min="1" value="${e.days||30}"></div>
    <div class="field"><label>ساعات العمل اليومية</label><input id="fHours" type="number" min="0.5" step="0.5" value="${e.workHours||8}"></div>
  </div><div class="modalfoot"><button class="primary" onclick="saveEmployee(${id||"null"})">حفظ</button><button onclick="closeModal()">إلغاء</button></div>`;
  $("modal").classList.remove("hidden");
}
function saveEmployee(id){
  const e={name:$("fName").value.trim(),job:$("fJob").value.trim(),salary:Number($("fSalary").value)||0,days:Number($("fDays").value)||30,workHours:Number($("fHours").value)||8};
  if(!e.name){alert("اكتب اسم الموظف");return}
  if(id){Object.assign(employees.find(x=>x.id===id),e)}else{e.id=employees.length?Math.max(...employees.map(x=>x.id))+1:1;employees.push(e)}
  save();closeModal();render();toast("تم حفظ الموظف");
}
function delEmployee(id){
  const e=employees.find(x=>x.id===id);if(!e)return;
  if(confirm(`حذف الموظف "${e.name}"؟`)){employees=employees.filter(x=>x.id!==id);save();render();toast("تم حذف الموظف")}
}
function openBulk(){
  $("modalTitle").textContent="إضافة مجموعة موظفين";
  $("modalBody").innerHTML=`<div class="bulkhelp">اكتب كل موظف في سطر بالشكل: <b>الاسم | الوظيفة | الراتب الاسمي | أيام الشهر | ساعات العمل</b><br>مثال: أحمد علي | كاشير | 600000 | 30 | 8</div>
  <div style="padding:0 20px"><textarea id="bulkText" class="bulk" placeholder="أحمد علي | كاشير | 600000 | 30 | 8&#10;سارة محمد | مبيعات | 550000 | 30 | 8"></textarea></div>
  <div class="modalfoot"><button class="primary" onclick="saveBulk()">إضافة المجموعة</button><button onclick="closeModal()">إلغاء</button></div>`;
  $("modal").classList.remove("hidden");
}
function saveBulk(){
  const lines=$("bulkText").value.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);let added=0;
  for(const line of lines){
    const a=line.split("|").map(x=>x.trim());if(!a[0])continue;
    employees.push({id:employees.length?Math.max(...employees.map(x=>x.id))+1:1,name:a[0],job:a[1]||"",salary:Number(a[2])||0,days:Number(a[3])||30,workHours:Number(a[4])||8});added++;
  }
  save();closeModal();render();toast(`تمت إضافة ${added} موظف`);
}
function closeModal(){$("modal").classList.add("hidden")}
function toast(t){$("toast").textContent=t;$("toast").classList.add("toastshow");setTimeout(()=>$("toast").classList.remove("toastshow"),1800)}

function printFullReport(){
  document.body.classList.add("report-print");
  setTimeout(()=>{
    window.print();
    setTimeout(()=>document.body.classList.remove("report-print"),300);
  },50);
}
function slip(id){
  const e=employees.find(x=>x.id===id), c=calc(e);
  const p=dataFor(e.id);
  const w=window.open("","_blank","width=420,height=800");
  w.document.write(`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8">
  <title>كشف راتب - ${esc(e.name)}</title>
  <style>
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;background:#fff;color:#111}
  body{font-family:Tahoma,Arial,sans-serif;width:80mm;margin:0 auto;padding:4mm 3mm;font-size:11px}
  .head{text-align:center;border-bottom:2px solid #111;padding-bottom:7px;margin-bottom:7px}
  .company{font-size:17px;font-weight:900}.title{font-size:14px;font-weight:800;margin-top:3px}
  .period{font-size:10px;margin-top:4px}
  .employee{border:2px solid #222;border-radius:5px;padding:6px;margin:7px 0;background:#f2f6fa}
  .employee .name{font-size:15px;font-weight:900}.job{font-size:10px;margin-top:3px}
  table{width:100%;border-collapse:collapse;margin-top:6px}
  td{border:1px solid #555;padding:5px 4px;vertical-align:middle}
  td.label{font-weight:800;background:#e9eef5;width:54%}
  td.value{text-align:center;font-weight:800;direction:rtl}
  .extra td.label{background:#fff0b8}.bonus td.label{background:#dff3df}
  .ded td.label{background:#ffdede}.net td{background:#cdeed8!important;border:2px solid #176b3a}
  .net .label{font-size:13px}.net .value{font-size:16px;color:#075b2a}
  .foot{margin-top:10px;border-top:1px dashed #555;padding-top:7px;font-size:9px;line-height:1.6}
  .sign{margin-top:20px;display:flex;justify-content:space-between;font-size:9px}
  .actions{margin-top:12px;text-align:center}
  button{border:0;background:#173f68;color:#fff;border-radius:5px;padding:7px 12px;font-weight:bold}
  @page{size:80mm auto;margin:0}
  @media print{
    body{width:80mm;padding:3mm}
    .actions{display:none}
  }
  </style></head><body>
  <div class="head"><div class="company">أمازون هايبر ماركت</div>
  <div class="title">كشف راتب الموظف الشهري</div>
  <div class="period">${months[month]} — ${year}</div></div>
  <div class="employee"><div class="name">${esc(e.name)}</div><div class="job">${esc(e.job||"—")}</div></div>
  <table>
  <tr><td class="label">الراتب الاسمي</td><td class="value">${money(e.salary)}</td></tr>
  <tr><td class="label">أجرة اليوم</td><td class="value">${money(c.daily)}</td></tr>
  <tr><td class="label">أجرة الساعة</td><td class="value">${money(c.hourly)}</td></tr>
  <tr class="extra"><td class="label">الساعات الإضافية</td><td class="value">${num(c.extraHours)}</td></tr>
  <tr class="extra"><td class="label">مبلغ الإضافي الشهري</td><td class="value">${money(c.extra)}</td></tr>
  <tr><td class="label">أيام الغياب</td><td class="value">${num(c.absence)}</td></tr>
  <tr class="ded"><td class="label">قيمة الغياب</td><td class="value">${money(c.absence)}</td></tr>
  <tr class="ded"><td class="label">العقوبات</td><td class="value">${money(c.penalty)}</td></tr>
  <tr class="bonus"><td class="label">المكافآت</td><td class="value">${money(c.bonus)}</td></tr>
  <tr class="ded"><td class="label">السلف</td><td class="value">${money(c.advance)}</td></tr>
  <tr><td class="label">أيام التأخير</td><td class="value">${num(c.late)}</td></tr>
  <tr class="ded"><td class="label">خصم التأخير</td><td class="value">${money(c.late)}</td></tr>
  <tr class="ded"><td class="label">إجمالي المستقطع</td><td class="value">${money(c.deductions)}</td></tr>
  <tr class="net"><td class="label">صافي الراتب</td><td class="value">${money(c.net)}</td></tr>
  </table>
  <div class="foot"><b>ملاحظة:</b> كل 3 أيام تأخير كاملة = خصم يوم من أجرة اليوم.<br>
  الإضافي الشهري المحتسب = 50,000 د.ع عند تسجيل ساعات إضافية.</div>
  <div class="sign"><span>توقيع الموظف: __________</span><span>الإدارة: __________</span></div>
  <div class="actions"><button onclick="window.print()">طباعة / حفظ PDF</button></div>
  </body></html>`);
  w.document.close();
}

render();
