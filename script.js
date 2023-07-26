//your JS code here. If required.

function livetime() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
  let cudate = `${month}/${day}/${year}`;
  document.getElementById('timer').textContent = cudate + ', ' + time;
}
function startTimer() {
  livetime();
  setInterval(livetime, 1000); 
}
 
window.addEventListener('load', startTimer);