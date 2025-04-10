let startTime, updatedTime, difference, timerInterval;
let running = false;

const display = document.getElementById("display");

function start() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(updateTime, 1000);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(timerInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  difference = 0;
  display.textContent = "00:00:00";
}

function updateTime() {
  updatedTime = new Date().getTime() - startTime;
  const hours = Math.floor(updatedTime / (1000 * 60 * 60));
  const minutes = Math.floor((updatedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((updatedTime % (1000 * 60)) / 1000);
  display.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function format(num) {
  return num < 10 ? "0" + num : num;
}
