const input = document.querySelector(".header input");
const addBtn = document.querySelector(".header button");
const list = document.querySelector(".list");

const allBtn = document.querySelector(".All");
const activeBtn = document.querySelector(".Active");
const completedBtn = document.querySelector(".Completed");

allBtn.addEventListener("click", () => {
  if (activeBtn && completedBtn) {
    activeBtn.classList.remove("allBackGround");
    completedBtn.classList.remove("allBackGround");
  }
  allBtn.classList.add("allBackGround");
});

activeBtn.addEventListener("click", () => {
  if (allBtn && completedBtn) {
    allBtn.classList.remove("allBackGround");
    completedBtn.classList.remove("allBackGround");
  }
  activeBtn.classList.add("allBackGround");
});

completedBtn.addEventListener("click", () => {
  if (activeBtn && allBtn) {
    activeBtn.classList.remove("allBackGround");
    allBtn.classList.remove("allBackGround");
  }
  completedBtn.classList.add("allBackGround");
});

addBtn.addEventListener("click", () => {
  const textValue = input.value;

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  const textContainer = document.createElement("p");
  textContainer.textContent = textValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";

  checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
      textContainer.classList.add("zuraas");
    } else {
      textContainer.classList.remove("zuraas");
    }
  });

  completedBtn.addEventListener("click", () => {
    if (activeBtn && allBtn) {
      activeBtn.classList.remove("allBackGround");
      allBtn.classList.remove("allBackGround");
    }
    completedBtn.classList.add("allBackGround");
    if (checkBox.checked) {
      completedBtn.document.createElement("div");
    }
  });

  deleteBtn.addEventListener("click", () => {
    itemContainer.remove();
  });
  itemContainer.appendChild(checkBox);
  itemContainer.appendChild(textContainer);
  itemContainer.appendChild(deleteBtn);
  list.appendChild(itemContainer);

  input.value = "";
});
