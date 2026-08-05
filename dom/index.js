// const arr = [12, 3, 5, 7, 22];
// let sum = 0;
// for (let i = 0; i < arr.length - 1; i++) {
//   sum = sum - arr[i];
// }
// console.log(sum);

// const arr = [-11, 45, 3, -4, 8, -9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// const arr = [-11, 45, 3, -4, 8, -9];
// let sum = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < sum) {
//     arr[i] = sum;
//   }
// }
// console.log(sum);

// const arr = [-11, 45, 3, -4, 8, -9];
// let first = arr[0];
// let last = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > first) {
//     arr[i] = first;
//   }
// }
// console.log(first);

// const arr = [-11, 45, 3, -4, 8, -9];
// for (let i = 0; i < arr.length / 2; i++) {
//   temp = arr[i]; //-11
//   arr[i] = arr[arr.length - 1 - i];
//   arr[arr.length - 1 - i] = temp;
// }
// console.log(arr);

// const arr = [-11, 45, 3, 6, -4, 8, -9];
// let count = 0;
// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
//     count++;
//   }
// }
// console.log(count);

// const arr = [1, 2, 3, 4, 5, 6];
// let couple = 0;
// for (let i = 0; i < arr.length; i++) {
//    {
//     console.log(arr[i], arr[j]);
//   }
// }

// const arr = [1, 2, 4, 5, 6];
// let number = 7;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === number) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }

// const arr = [1, 2, 3, 5];
// const arr1 = [11, 4, 6, 3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr1.length; j++)
//     if (arr1[j] === arr[i]) {
//       sum += arr[i];
//     }
// }
// console.log(sum);

// const arr1 = [1, 2, 5, 7, 8];
// const arr2 = [9, 4, 6, 3];
// let newArray = [];
// let i = 0;
// let j = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     newArray.push(arr1[i]);
//     i++;
//   } else {
//     newArray.push(arr2[j]);
//     j++;
//   }
// }
// while (i < arr1.length) {
//   newArray.push(arr1[i]);
//   i++;
// }
// while (j < arr2.length) {
//   newArray.push(arr2[j]);
//   j++;
// }

// console.log(newArray);

// Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
// const arr = [-11, 6, -7, 8, -9, 5];
// let left = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     const temp = arr[i]; //-11
//     arr[i] = arr[left];
//     arr[left] = temp;
//     left++;
//   }
// }
// console.log(arr);

// Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол
// const arr = [1, 2, 3, 4, 6, 7, 8];

// function findMissingNumber(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - arr[i - 1] > 1) {
//       return arr[i - 1] + 1;
//     }
//   }
// }
// console.log(findMissingNumber(arr));

//Count how many times a number appears in an array
// const arr = [1, 2, 4, 5, 7, 2, , 2];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count = arr[j];
//     }
//   }
// }
// console.log(count);

//Return true if a number exists in the array
// const arr = [1, 2, 4, 5, 7, 2, 4, 2];
// let target = 2;
// function checkNumberExist(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return "true";
//     }
//   }
//   return "false";
// }
// console.log(checkNumberExist(arr, target));

//Find the second largest number in an array
// const arr = [1, 2, 4, 5, 7, 2, 4, 2];
// const findSecondLargest = (arr) => {
//   let largest;
//   let secondLargest;

//   if (arr[0] > arr[1]) {
//     largest = arr[0];
//     secondLargest = arr[1];
//   } else {
//     largest = arr[1];
//     secondLargest = arr[0];
//   }

//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// };
// console.log(findSecondLargest(arr));

// console.log анхаарах

// const name ={}
//   userName: Jargalsaikhan,
//   age: 18,
//   work: {
//     name: Software,
//   },
//   address: Ulaanbaator,
// };
// console.log(Amka.age);

//map
//const arr = [1, 3, 5, 4, 2];

// const square = arr.map((customElements) => {
//   return customElements * customElements;
// });
//console.log(square);

//filter   (shalgana gehdee arr)
// const filtered = arr.filter((currentElement, index) => {
//   // elment , index , arr
//   return currentElement > 3 && index < 4;
// });
//console.log(filtered);

//find      (1 elment olohdoo )
// const find = arr.find((item, intex) => {
//   return item > 3 && intex < 5;
// });
// console.log(find);

// sort     shine array uusgehgu huuchin array oorchilno
//const sorted = arr.sort((a, b) => {
//   if (a === b);
//   return 0;
//   if (a > b);
//   return -1;
//   if (b > a);
//   return 1;
//return a - b; // bagaas ih ruu
//return b - a; // ihees baga ruu
//});

//console.log(sorted);

// const arr2 = [...arr] // huulah
//   .sort((a, b) => a - b)
//   .map((item) => item * item)
//   .filter((item) => item > 7);

//console.log(arr2);

//const str = "Hello";
//console.log(str.replace("o"));

// string {replace, toLover, toUpper }

//const isPalindrome = (s) => {
//     let reversed = " ";
//     for (let  i = s.length ; i > 0; i++ ){

//     }
// };
// console.log()
// const arr = [16, 9, 10, 4, 6];
// const swap = (arr, i, j) => {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// };

// const bubSort = (arr) => {
//   for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i < arr.length - 1 - j; i++) {
//       if (arr[i] > arr[i + 1]) {
//         swap(arr, i, i + 1);
//       }
//     }
//   }
//   return arr;
// };
// console.log(bubSort(arr));

// string //Split // replace
//
// let s = "leetcode";
// var firstUniqChar = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//   }
// };
// console.log(char);
/**

//  */
// var triangleType = function (nums) {
//   nums.sort((a, b) => a - b);
//   if (nums[0] + nums[1] > nums[2]) {
//     if (nums[0] === nums[1] && nums[0] === nums[2]) {
//       return "equilateral";
//     } else if (nums[0] === nums[1] || nums[1] === nums[2]) {
//       return "isosceles";
//     } else {
//       return "scalene";
//     }
//   } else {
//     return "none";
//   }
// };
// console.log(triangleType);

// const minusBtn = document.querySelector(".container > button:first-child");
// const sumBtn = document.querySelector(".container > button:last-child");
// const num = document.querySelector(".container > h1");

// let count = 0;
// minusBtn.addEventListener("click", () => {
//   count--;
//   num.textContent = count;
// });
// sumBtn.addEventListener("click", () => {
//   count++;
//   num.textContent = count;
//});

const boxes = document.querySelectorAll(".container > .box > div");
const resetBtn = document.querySelector(".reset");
const winnerH1 = document.querySelector(".winner");

let move = "X";
const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const checkWin = () => {
  for (let i = 0; i < winningCombo.length; i++) {
    const [a, b, c] = winningCombo[i];
    if (
      boxes[a].textContent === boxes[b].textContent &&
      boxes[b].textContent === boxes[c].textContent &&
      boxes[a].textContent !== ""
    ) {
      return boxes[a].textContent;
    }
  }
};
const reset = () => {
  move = "X";
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
  }
};
resetBtn.addEventListener("click", () => {
  reset();
});

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (boxes[i].textContent !== "") return;
    boxes[i].textContent = move;
    if (move === "X") {
      move = "O";
    } else {
      move = "X";
    }
    const winner = checkWin();
    if (winner !== undefined) {
      winnerH1.textContent = `${winner} win !!!`;

      setTimeout(() => {
        winnerH1.textContent = "";
        reset();
      }, 2000);
    }
  });
}
