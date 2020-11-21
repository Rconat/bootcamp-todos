var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
    //clear existing todos
    todoList.innerHTML = ''
    //re-render todos
    for (var i = 0; i < todos.length; i++) {
        // create li element
        var li = document.createElement('li')
        // add todo text to li
        li.innerText = todos[i]
        // append li to todoList
        todoList.appendChild(li)
    }
}

function addTodo(event) {
    event.preventDefault()
    // get input value
    var newTodo = todoInput.value

    if (newTodo !== '') {
        // push text into todos
        todos.push(newTodo)
        // clears the input value
        todoInput.value = null
        // call renderTodos()
        renderTodos()
    }
}

todoForm.addEventListener('submit', addTodo)


renderTodos()
