const apiQuotes = fetch("https://type.fit/api/quotes") //gets dataset from API
.then(function(response) {
  return response.json(); //converts it into a json file
})
.then(function(data) { //function that is wanted below
//   console.log(data[10]);
  const randomQuoteNum = Math.floor(Math.random() * data.length);
    console.log(randomQuoteNum)
    // data[randomQuote] is the whole value containing author and text
    const randomQuote = (data[randomQuoteNum]);

    var authorName = '';
    if(randomQuote.author == null){
        authorName = "- anonymous";
    } else {
       authorName = "- " + randomQuote.author;
    };
    console.log(authorName);
    document.querySelector("#quote").innerHTML = randomQuote.text;
    const theAuthorName = document.querySelector('#author');
    theAuthorName.innerHTML = authorName;
    // console.log(authorName);
});

//variables
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOptions = document.querySelector ('.filter-todo');

//event listener
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteAndCheck);
filterOptions.addEventListener('click', filterTodo);

// function 1
function addTodo(event){
  event.preventDefault(); //stops form from submitting
  //div of todo
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  //li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //add todo to local storage
  saveLocalTodos(todoInput.value)
  //completed mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-btn")
  todoDiv.appendChild(completedButton)

  //delete trash button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("deleted-btn")
  todoDiv.appendChild(deleteButton)

  //appends to the list on html
  todoList.appendChild(todoDiv);
  //clear input after insert
  todoInput.value = "";
};

//function 2
//function of deleting task when user clicks trash
// with the function of crossing out when user click check
function deleteAndCheck (occasion){
  const item = occasion.target;
  if (item.classList[0] === 'deleted-btn'){ //delete trashcan
    const todo = item.parentElement;
    todo.classList.add('collapse');
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', function(){
      todo.remove();
    })
  };
// marks as complete
  if (item.classList[0] === 'completed-btn'){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
  };

  function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(todo => {
      switch(e.target.value){
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if(todo.classList.contains('completed')){
            todo.style.display = "flex";
          } else {
            todo.style.display = "none"
          }
          break;
        case "in-progress":
          if(!todo.classList.contains('completed')){
            todo.style.display = "flex";
          } else {
            todo.style.display = "none"
          }
          break;
      }
    });
  }

  //saving the to do's locally on the browser
function saveLocalTodos (todo){
  //check for existing files first
  let todos;
  if (localStorage.getItem("todos") === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

//todos from local file will go back even if user refreshes
function getTodos(){
  let todos;
  if (localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  };
  // console.log(todos);
  todos.forEach(function(todo){
    //div of todo
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  //li
  const newTodo = document.createElement('li');
  newTodo.innerText = todo;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //completed mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-btn")
  todoDiv.appendChild(completedButton)

  //delete trash button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("deleted-btn")
  todoDiv.appendChild(deleteButton)

  //appends to the list on html
  todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo){
  let todos;
  if (localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.todoIndexOf(todoIndex),1) //what position to remove element]
  localStorage.setItem("todos", JSON.stringify(todos));
}
