const input = document.querySelector(".header input");
const addBtn = document.querySelector(".header button");
const list = document.querySelector(".list");

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
