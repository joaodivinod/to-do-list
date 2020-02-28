let listElement = document.querySelector('#app ul');
let importElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

var todos = [
    'fazer café',
    'ligar o PC',
    'abrir o Vs code',
    'Estudar Js'
];

function renderTodos(){
    for(todo of todos){
        console.log(todo)
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement)
    }
}

renderTodos();