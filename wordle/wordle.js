const keys = document.querySelectorAll(".box div");
const rows = document.querySelectorAll(".boxes .row ");

const deleteBtn = document.querySelector(".keybored2 :first-child");
const enterBtn = document.querySelector(".keybored2 :last-child");

let abc = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",

  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

let makeWord = [];
const word = [10, 9, 9, 18, 2];
let currentRowIndex = 0;

const checkWord = () => {
  if (makeWord.length === 5) {
    const currentBoxes = rows[currentRowIndex].querySelectorAll("div");
    for (let i = 0; i < word.length; i++) {
      if (makeWord[i] === word[i]) {
        currentBoxes[i].classList.add("correct");
      } else if (word.includes(makeWord[i])) {
        currentBoxes[i].classList.add("present");
      } else {
        currentBoxes[i].classList.add("absent");
      }
    }
  }
};

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", () => {
    const currentBoxes = rows[currentRowIndex].querySelectorAll("div");
    if (makeWord.length < 5) {
      let emptyBoxIndex = makeWord.length;
      currentBoxes[emptyBoxIndex].textContent = abc[i];
      makeWord.push(i);
    }
    return;
  });
}

deleteBtn.addEventListener("click", () => {
  if (makeWord.length > 0) {
    const currentBoxes = rows[currentRowIndex].querySelectorAll("div");
    let lastIndex = makeWord.length - 1;
    makeWord.length--;
    currentBoxes[lastIndex].textContent = "";
  }
});

enterBtn.addEventListener("click", () => {
  checkWord();

  if (currentRowIndex < rows.length - 1) {
    currentRowIndex++;

    makeWord = [];
  }
});
