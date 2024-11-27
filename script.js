// selecting html
let toDoApp = document.querySelector(".input_data");
let toDoButton = document.querySelector(".add_button");
let toDoList = document.querySelector(".allul");

toDoButton.addEventListener("click", addtodo);
toDoList.addEventListener("click", del);

// function
function addtodo(e) {
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("toDo");
  e.preventDefault();
  const toLI = document.createElement("li");
  toLI.classList.add("toDoItems");

  toLI.innerText = toDoApp.value;

  toDoDiv.appendChild(toLI);
  //   delete button
  const dltbtn = document.createElement("button");
  dltbtn.classList.add("delete");
  dltbtn.innerText = "Delete";
  toDoDiv.appendChild(dltbtn);

  toDoList.appendChild(toDoDiv);
  //   clear data
  toDoApp.value = "";
}
function del(e) {
  const item = e.target;
  if (item.classList[0] === "delete") {
    const todo = item.parentElement;
    todo.remove();
  }
}
