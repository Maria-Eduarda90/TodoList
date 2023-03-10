const buttonSubmit = document.querySelector(".btn-submit");
const todoInput = document.querySelector("#todo-input");
const form = document.querySelector(".form");
const container = document.querySelector(".containerForm");
let todo = JSON.parse(localStorage.getItem("container")) || [];

const saveTodo = (text) => {
  var todo = document.createElement("div");
  todo.id = Math.floor(Math.random() * 10);
  todo.classList.add("container");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  todo.appendChild(wrapper);

  var input = document.createElement("input");
  input.classList.add("checkbox");
  input.type = "checkbox";
  wrapper.appendChild(input);

  const span = document.createElement("span");
  span.classList.add("todo-added");
  span.innerHTML = text;
  wrapper.appendChild(span);

  const btn = document.createElement("button");
  btn.classList.add("remove-todo");
  btn.innerText = "x";
  todo.appendChild(btn);

  container.appendChild(todo);

  todoInput.value = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (!inputValue) {
    alert("Você precisa adicionar uma tarefa");
  }
  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest(".container");

  if (targetEl.classList.contains("checkbox")) {
    parentEl.classList.toggle("done");
  }

  if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove();
  }
});

document.addEventListener("visibilitychange", (e) => {
    if(document.visibilityState === "visible"){
        document.title = "Seja bem vindo! 👽"
    } else {
        document.title = "Ops! 😶"
    }
})
