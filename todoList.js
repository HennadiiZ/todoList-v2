'use strict'

//selectors
const   todoInput = document.querySelector('.todo-input'),
        todoButton = document.querySelector('.todo-button'),
        todoList = document.querySelector('.todo-list'),
        filerOption = document.querySelector('.filter-todo');
//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// filerOption.addEventListener('click',filterTodo);
filerOption.addEventListener('change',filterTodo);
//Functions

//1
function addTodo(e) {
e.preventDefault();
console.log('!')
 // todo div
 const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

// create LI 
const newTodo = document.createElement('li');  

if(todoInput.value.length > 28){
    newTodo.innerText = todoInput.value.substr(0, 28) + '...';
}else{
    newTodo.innerText = todoInput.value;
}


newTodo.classList.add('todo-item');
todoDiv.append(newTodo);

//ADD todo to local storage
// saveLocalTodos(todoInput.value)


todoInput.value = ''; // clear

// complete button
const completeButton = document.createElement('button');
// completeButton.innerText = `DONE` ;
completeButton.innerHTML = `&#9745;` ;
completeButton.classList.add('complete-btn');
todoDiv.append(completeButton);

// delete button
const deleteButton = document.createElement('button');
// deleteButton.innerText = 'del.';
deleteButton.innerHTML = `&#9746;`;
deleteButton.classList.add('delete-btn');
todoDiv.append(deleteButton);

todoList.append(todoDiv);
}


//2
function deleteCheck(e){
  if(e.target.classList[0] === 'delete-btn'){
    e.target.parentElement.classList.add('fall'); // animation styles
    // e.target.parentElement.remove();
    e.target.parentElement.addEventListener('transitionend', function(){
        e.target.parentElement.remove();
    });
  }
  //check mark 
  if(e.target.classList[0] === 'complete-btn'){
      //const todo =  e.target.parentElement
    // e.target.parentElement.classList.toggle('completed'); // 37mi
    e.target.parentElement.classList.toggle('completed');
  }
}

function filterTodo(e){
// console.log(todoList.childNodes)
const todos = todoList.childNodes;
//  console.log(todos)


 todos.forEach(function(todo){
    if(todo.nodeName !== "#text"){
        // console.log(todo)
    switch(e.target.value){
        case 'all':
            todo.style.display = 'flex';
            break;
        case 'completed':
            if(todo.classList.contains('completed')){
                todo.style.display = 'flex';
            }else{
                todo.style.display = 'none';
            }
            break;
        case 'uncompleted':  
            if(!todo.classList.contains('completed')){
                todo.style.display = 'flex';
            }else{
                todo.style.display = 'none';
            }
            break;
    }
    }
 })
}
// 56_localStorage_mi 
function saveLocalTodos(todo){
    // check -- do I already have things in there?
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
// localStorage has not been done last_15m
























// //selectors
// const   todoInput = document.querySelector('.todo-input'),
//         todoButton = document.querySelector('.todo-button'),
//         todoList = document.querySelector('.todo-list'),
//         filerOption = document.querySelector('.filter-todo');
// //Event listeners
// todoButton.addEventListener('click', addTodo);
// todoList.addEventListener('click', deleteCheck);
// // filerOption.addEventListener('click',filterTodo);
// //Functions
// //1
// function addTodo(e) {
// e.preventDefault();
//  // todo div
//  const todoDiv = document.createElement('div');
//   todoDiv.classList.add('todo');

// // create LI 
// const newTodo = document.createElement('li'); 

// if(todoInput.value.length > 22){
//     newTodo.innerText = todoInput.value.substr(0, 30) + '...';
// }else{
//     newTodo.innerText = todoInput.value;
// }
// // newTodo.innerText = todoInput.value;
// todoInput.value = ''; // clear
// newTodo.classList.add('todo-item');
// todoDiv.append(newTodo);

// //add todo to local storage
// // saveLocalTodos(todoInput.value)

// // complete button
// const completeButton = document.createElement('button');
// // completeButton.innerText = `DONE` ;
// completeButton.innerHTML = `&#9745;` ;
// completeButton.classList.add('complete-btn');
// todoDiv.append(completeButton);

// // delete button
// const deleteButton = document.createElement('button');
// // deleteButton.innerText = 'del.';
// deleteButton.innerHTML = `&#9746;`;
// deleteButton.classList.add('delete-btn');
// todoDiv.append(deleteButton);

// todoList.append(todoDiv);
// }

// //2
// function deleteCheck(e){
// // console.log(e.target);
// //console.log(e.target.classList)
// // console.log(e.target.classList[0])
//   if(e.target.classList[0] === 'delete-btn'){
//     e.target.parentElement.classList.add('fall'); // animation styles
//     // e.target.parentElement.remove();
//     e.target.parentElement.addEventListener('transitionend', function(){
//         e.target.parentElement.remove();
//     });
//   }

//   //check mark 
//   if(e.target.classList[0] === 'complete-btn'){
//       //const todo =  e.target.parentElement
//     // e.target.parentElement.classList.toggle('completed'); // 37mi
//     e.target.parentElement.classList.toggle('completed');
//     // console.log(e.target.parentElement.innerText[0])
//   }
// }

// function filterTodo(e){
// console.log(todoList.childNodes)
// const todos = todoList.childNodes;
// todos.forEach(function(todo){

//     console.log(todo)
//     switch(e.target.value){
//         case 'all':
//             todo.style.display = 'flex';
//             break;
//         case 'completed':
//             if(todo.classList.contains('completed')){
//                 todo.style.display = 'flex';
//             }else{
//                 todo.style.display = 'none';
//             }
//             break;
//         case 'uncompleted':  
//             if(!todo.classList.contains('completed')){
//                 todo.style.display = 'flex';
//             }else{
//                 todo.style.display = 'none';
//             }
//             break;
//     }
// })
// }



