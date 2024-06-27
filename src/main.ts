import './style.css';

interface Todo {
  title : string,
  id: string,
  isCompleted : boolean,

 }

const todos: Todo[] = [];

const todosContainer = document.querySelector(".todosContainer") as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const todoForm =  document.getElementById("myform") as HTMLFormElement;

todoForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo : Todo = {
    title : todoInput.value,
    isCompleted: false,
    id : String(Math.random()* 100),
  }

  todos.push(todo);
  todoInput.value = "";
  console.log(todos);
  renderTodo(todos);
}

const generateTodoItem = (title:string,isCompleted:boolean, id:string) => {
  const todo :HTMLDivElement = document.createElement("div");
  todo.className = "todo";

//checkbox

 const checkBox :HTMLInputElement = document.createElement('input');
 checkBox.setAttribute("type", "checkbox");
 checkBox.className = "isCompleted";
 checkBox.checked = isCompleted;

 checkBox.onchange =()=>{
  todos.find((item)=>{
    if(item.id === id) item.isCompleted = checkBox.checked;
  });
  console.log(isCompleted);
  console.log(checkBox.checked)

  paragraph.className = checkBox.checked? 'textcut' : '';
 }
 

//paragraph

 const paragraph: HTMLParagraphElement = document.createElement("p");
 paragraph.innerText = title; 
 paragraph.className = checkBox.checked? 'textcut' : '';

 //btn
 const btn: HTMLButtonElement = document.createElement("button");
 btn.innerText = "X";
 btn.onclick = () => {
  todo.remove(); // Remove the todo item from UI
  todos.splice(todos.findIndex(item => item.id === id), 1); // Remove the todo from the array
};
//  btn.className = "deleteBtn"

 todo.append(checkBox, paragraph, btn);
 todosContainer.append(todo);
}

const renderTodo = (todos: Todo[])=>{
  todosContainer.innerHTML = "";

  todos.forEach((item)=>{
    generateTodoItem(item.title, item.isCompleted, item.id)
  })

}