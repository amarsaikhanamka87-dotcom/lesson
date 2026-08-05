const hourBox = document.querySelector(".time .hour");
const minutBox = document.querySelector(".time .minut");
const secondBox = document.querySelector(".time .second");

const startBtn = document.querySelector(".but :first-child");
const pauseBtn = document.querySelector(".but :nth-child(2)");
const resetBtn = document.querySelector(".but :nth-child(3)");
let timerId = null;
let isPaused = false;
let duration = 0;

const update = () => {
  const secondOfNumber = duration % 60;
  const minutOfNumber = Math.floor(duration / 60) % 60;
  const hourOfNumber = Math.floor(duration / 3600);

  secondBox.textContent = String(secondOfNumber).padStart(2, "0");
  hourBox.textContent = String(hourOfNumber).padStart(2, "0");
  minutBox.textContent = String(minutOfNumber).padStart(2, "0");
};
const start = () => {
  if (isPaused) {
    isPaused = false;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    return;
  }

  if (timerId) return;

  startBtn.disabled = true;

  timerId = setInterval(() => {
    if (isPaused) return;

    duration++;

    update();
  }, 1000);
};
console.log(duration);

const reset = () => {
  clearInterval(timerId);
  timerId = null;
  isPaused = false;
  duration = 0;
  update();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
};

const pause = () => {
  if (!timerId) return;

  isPaused = true;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
};

startBtn.addEventListener("click", () => {
  start();
});
resetBtn.addEventListener("click", () => {
  reset();
});
pauseBtn.addEventListener("click", () => {
  pause();
});
