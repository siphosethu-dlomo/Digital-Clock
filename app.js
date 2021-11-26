const clock = document.querySelector('.clock');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const leadingZero = '0';


const tick = () => {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  (h < 10) ? hours.textContent = leadingZero + h : hours.textContent = h; // updates hours
  (m < 10) ? minutes.textContent = ': ' + leadingZero + m : minutes.textContent = ': ' + m; // updates minutes
  (s < 10) ? seconds.textContent = ': ' + leadingZero + s : seconds.textContent = ': ' + s; // updates seconds

};

// updates time every seconds [tick of time]
setInterval(tick, 1000);