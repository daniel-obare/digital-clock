function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
      mo = now.getMonth(),
      // date number
      dnum = now.getDate(),
      yr = now.getFullYear(),
      hr = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "AM";

  if (hr == 0) {
    hr == 12;
  } else if (hr > 12) {
    hr = hr-12;
    pe = "PM";
  }    

  // 2-digit values 
  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  } 

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];

  var values = [week[dname], months[mo], dnum.pad(2), yr, hr.pad(2), min.pad(2), sec.pad(2), pe];

  for (var i = 0; i < ids.length; i++) 
  document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  
}
function initClock() {  
updateClock();

window.setInterval("updateClock()", 1);
}
