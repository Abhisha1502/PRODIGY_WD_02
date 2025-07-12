let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function startTimer() {
  if (timer !== null) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lapTimer() {
  const lapTime = document.getElementById("display").innerText;
  const lapList = document.getElementById("laps");
  const lapItem = document.createElement("li");
  lapItem.innerText = `Lap ${lapList.children.length + 1}: ${lapTime}`;
  lapList.appendChild(lapItem);
}

// Theme Toggle
const toggle = document.getElementById("theme-toggle");
const label = document.getElementById("mode-label");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
  label.innerText = document.body.classList.contains("light") ? "Light Mode" : "Dark Mode";
});
