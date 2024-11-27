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
    <li>
    <input type="checkbox" class="check"/>
    <span class="todo-text">${item}</span>
    </li>`;
    })
    .join("");
  console.log(task, "taskpush");
}

document.addEventListener("DOMContentLoaded", () => {
  const checkboxs = document.querySelectorAll(".check");
  console.log(checkboxs, "checkboxs");
  checkboxs.forEach((item) => {
    item.addEventListener("change", (event) => {
      const todoText = event.target.nextElementSibling;
      console.log(todoText);

      if (event.target.checked) {
        todoText.classList.add("strike");
      } else {
        todoText.classList.remove("strike");
      }
    });
  });
});
