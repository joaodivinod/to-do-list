let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');
var todos = [
   
];

function renderTodos(){
    listElement.innerHTML = ' ';
    for(todo of todos){
        console.log(todo)
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href','#')

        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')')

        let linkText = document.createTextNode('excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement)
    }
}

renderTodos();

function addTodo(){
    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';

    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos,1)
    renderTodos();
}