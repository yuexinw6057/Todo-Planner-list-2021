# Entry 5
##### 06/13/21

Today, I officially finished my freedom project. I ended the project with some extensions like local storing using javascript. The end product of this planner/todo list is ultimately be a place to store things that one has to do throughout the day with positive quotes. I used [various](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) resources to help me complete [local](https://www.w3schools.com/html/html5_webstorage.asp) storing. Users can now exit and return with all their entries untouched.

<br>

I am now in the engineering process of Communicating the results to others and taking critics of what I can do better in order to improve for my future projects and feedbacks. With a material newly learned, I will be applying it to my future projects especially when it comes to API and storing local datasets/base. Below is a code snippet for data storing. <br>

```
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
````
The code above first checks for existing files first and then if there is no existing files, the system will take the data base and convert it to a json file using `JSON.parse` from a [string}(https://techterms.com/definition/string) value. Afterwards, the system will push it to the system which then turns back into a string.

<hr>

The skill that I developed is logical reasoning and consideration. Throughout this project I had to use logical in order to connect several things together. Without one thing, the second thing of whatever I wish to do will not happen. While I was designing the UI interface, I realized that a lot of the things aren't as easy to use for the user, and so I had to redo some things to make the user interface a lot more smoother and better for usage.

<br>

## Thanks for reading!

[Previous](entry04.md)

[Home](../README.md)