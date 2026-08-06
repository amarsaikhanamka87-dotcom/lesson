const input = document.querySelector(".header input");
const addBtn = document.querySelector(".header button");
const list = document.querySelector(".list");

const allBtn = document.querySelector(".All");
const activeBtn = document.querySelector(".Active");
const completedBtn = document.querySelector(".Completed");

const count = document.querySelector(".footerCount");

const updateCount = () => {
  const allTodos = document.querySelectorAll(".item");
  const totalTasks = allTodos.length;

  let completedCount = 0;

  for (let i = 0; i < allTodos.length; i++) {
    const checkBox = allTodos[i].querySelector("input");
    if (checkBox && checkBox.checked) {
      completedCount++;
    }
    count.textContent = `${completedCount} of ${totalTasks} tasks completed`;
  }
};
allBtn.addEventListener("click", () => {
  if (activeBtn && completedBtn) {
    activeBtn.classList.remove("allBackGround");
    completedBtn.classList.remove("allBackGround");
  }
  allBtn.classList.add("allBackGround");

  const alltodos = document.querySelectorAll(".item");

  for (let i = 0; i < alltodos.length; i++) {
    alltodos[i].style.display = "flex";
  }
});

activeBtn.addEventListener("click", () => {
  if (allBtn && completedBtn) {
    allBtn.classList.remove("allBackGround");
    completedBtn.classList.remove("allBackGround");
  }
  activeBtn.classList.add("allBackGround");

  const activetodos = document.querySelectorAll(".item");

  for (let i = 0; i < activetodos.length; i++) {
    const checkBox = activetodos[i].querySelector("input");

    if (checkBox.checked === true) {
      activetodos[i].style.display = "none";
    } else {
      activetodos[i].style.display = "flex";
    }
  }
});

completedBtn.addEventListener("click", () => {
  if (activeBtn && allBtn) {
    activeBtn.classList.remove("allBackGround");
    allBtn.classList.remove("allBackGround");
  }
  completedBtn.classList.add("allBackGround");

  const todos = document.querySelectorAll(".item");

  for (let i = 0; i < todos.length; i++) {
    const checkBox = todos[i].querySelector("input");

    if (checkBox.checked == true) {
      todos[i].style.display = "flex";
    } else {
      todos[i].style.display = "none";
    }
  }
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
    updateCount();
  });

  itemContainer.appendChild(checkBox);
  itemContainer.appendChild(textContainer);
  itemContainer.appendChild(deleteBtn);
  list.appendChild(itemContainer);

  deleteBtn.addEventListener("click", () => {
    itemContainer.remove();
  });

  input.value = "";
  updateCount();
});
