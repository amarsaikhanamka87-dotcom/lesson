const boxes = document.querySelectorAll(".container > div");
const resetBtn = document.querySelector("button");
const emojis = [
  "🥰",
  "🦒",
  "🥰",
  "🦒",
  "🐳",
  "☂️",
  "🐳",
  "☂️",
  "👺",
  "👺",
  "5",
  "5",
];

let flipped = [];

const reset = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
    boxes[i].classList.remove("winMoment");
  }
};
resetBtn.addEventListener("click", () => {
  reset();
});

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (flipped.length < 2) {
      boxes[i].textContent = emojis[i];
      flipped.push(i);

      if (flipped.length === 2) {
        const [a, b] = flipped;
        if (emojis[a] === emojis[b]) {
          flipped = [];
          boxes[a].classList.add("winMoment");
          boxes[b].classList.add("winMoment");
        } else {
          setTimeout(() => {
            flipped = [];
            boxes[a].textContent = "";
            boxes[b].textContent = "";
          }, 1000);
        }
      }
    }
  });
}

// 🥰🥰👺👺🐳🦒🦒🌧️🌧️☂️☂️
