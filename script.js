// task 1

const data = document.getElementById("input_data").value;
const btn = document.getElementById("task");
const group = document.getElementById("list_ul");

let task = [];
// btn.addEventListener("click", () => {
//   const data = document.getElementById("input_data").value;
//   const list = document.createElement("li");
//   list.className = "list_li";
//   list.innerHTML = data;
//   group.appendChild(list);
// });

function addtask() {
  const data = document.getElementById("input_data").value;
  task.push(data);
  group.innerHTML = task
    .map((item) => {
      return `
    <li id="list_li">
    <input type="checkbox" class="check-box" >
    <span class="todo-text">${item}</span>
    <button class ="del" onclick="dlt()">Delete</button>
    </li>`;
    })
    .join("");
  // console.log(task, "taskpush");
}

function remove() {
  const checkboxes = document.querySelectorAll(".check-box");
  // console.log(checkboxes, "checkboxes");
  checkboxes.forEach((item) => {
    item.addEventListener("change", (event) => {
      const todoText = event.target.nextElementSibling;
      // console.log(todoText);
      if (event.target.checked) {
        todoText.classList.add("strike");
      } else {
        todoText.classList.remove("strike");
      }
    });
  });
}

function dlt() {
  var deld = document.querySelectorAll(".del");
  deld.forEach((Task) => {
    Task.onclick = () => {
      Task.parentElement.remove();
    };
  });
}

function clr() {
  const group = document.getElementById("list_ul");
  task.splice(0);
  group.innerHTML = task
    .map((item) => {
      return `
    <li class="delete">${item}</li>`;
    })
    .join("");
  console.log(clr);
}
